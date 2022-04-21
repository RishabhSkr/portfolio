var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;

for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}



function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}

// Auto fill Skill Bars when skill Section is displayed first time
var progressBar = document.querySelectorAll('.skill-progress > div'); 
var skillContainer = document.getElementById('skills-display');
window.addEventListener('scroll',checkScroll);
var animationDone=false;



function initialiseBars() {
    for (var bar of progressBar) {
        bar.style.width = 0 + '%';
    }
}

initialiseBars();


 function fillBars() {

    for (let bar of progressBar) {
        let currentWidth = 0;
        let interval = setInterval(function () {
            let targetWidth = bar.getAttribute('data-barwidth');
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth + '%';
        }, 5);
    }
}


function checkScroll(){
    var coordinates = skillContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<=window.innerHeight){
        animationDone=true;
        console.log('Skill Section Visible');
        fillBars();
    }else if (coordinates.top>window.innerHeight) {
            animationDone=false;
            initialiseBars();
    }
}


//  var scrollInterval = setInterval(() function {
//    window.scrollBy(0 ,15);
//  }, 32);

// var targetPos=900;
// var currentPos=0;
// var scrollInterval = setInterval(() => {
//   if (currentPos>= targetPos){
//     clearInterval(scrollInterval);
//     return;
//   }else
//   currentPos+=50;
//   window.scrollBy(0,50);
// },32);


