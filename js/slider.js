var indicator1 = document.querySelector(".slider-controls li:first-child");
var indicator2 = document.querySelector(".slider-controls li:nth-child(2)");
var indicator3 = document.querySelector(".slider-controls li:last-child");
var slide1 =  document.querySelector(".slides .slide1");
var slide2 =  document.querySelector(".slides .slide2");
var slide3 =  document.querySelector(".slides .slide3");


function showAndHide() {
 switch(this) {
    case indicator1:
        indicator1.classList.add("slide-indicator-active");
        indicator2.classList.remove("slide-indicator-active");
        indicator3.classList.remove("slide-indicator-active");
        slide1.classList.add("slide-active");
        slide2.classList.remove("slide-active");
        slide3.classList.remove("slide-active");
        break;
    case indicator2:
        indicator2.classList.add("slide-indicator-active");
        indicator1.classList.remove("slide-indicator-active");
        indicator3.classList.remove("slide-indicator-active");
        slide2.classList.add("slide-active");
        slide1.classList.remove("slide-active");
        slide3.classList.remove("slide-active");
        break;
    case indicator3:
        indicator3.classList.add("slide-indicator-active");
        indicator1.classList.remove("slide-indicator-active");
        indicator2.classList.remove("slide-indicator-active");
        slide3.classList.add("slide-active");
        slide1.classList.remove("slide-active");
        slide2.classList.remove("slide-active");
        break;
    }
}

indicator1.addEventListener("click", showAndHide);
indicator2.addEventListener("click", showAndHide);
indicator3.addEventListener("click", showAndHide);

function skipSlide() {
  var indicArray = [indicator1,indicator2,indicator3];
  for(var i=0; i<indicArray.length; i++) {
    if( indicArray[i].classList.contains("slide-indicator-active") ) {
      try {
        if(i===2){throw new Error("Third element is not defined");}
        showAndHide.call(indicArray[i+1]);
      }catch(error) {
        showAndHide.call(indicArray[0]);
      }
      return;
    }

  }
}

var timerSkip = setInterval(skipSlide,8000);
