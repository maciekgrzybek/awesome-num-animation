

(function (factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = factory();
  } else {
    window.awesomeScroll = factory();
  }

})(function(){

    var animated = false;
    function awesomeScroll(element,options){
        window.addEventListener('scroll', function(e){

            // Div we want to detect
            var animateDiv = document.querySelector(element);

            // Distance from window to top of viewport
            var scrollY = window.pageYOffset;

            // Distance from div to bottom of viewport
            var distanceToTop = animateDiv.getBoundingClientRect().top + scrollY;

            // Window height
            var windowHeight = window.innerHeight;
            
            // Function that calculate position ov viewport
            (function calculatePosition(){
                if (distanceToTop-windowHeight-scrollY < -100 && animated==false) {
                    animateNumber();
                    animated = true; // Set to true, so element is animated only once
                }
            })();
            function animateNumber(){
                var range = options.maxNumber - options.startNumber;
                var counter = options.startNumber;
                var increment = options.maxNumber > options.startNumber ? 1 : -1;
                var step = Math.abs(Math.floor(options.duration/range));
                var intervalAnimation = setInterval(function(){
                    counter += increment;
                    document.querySelector(element).innerHTML = counter;
                    if (counter == options.maxNumber) {
                        clearInterval(intervalAnimation);
                    }
                },step);
            };
        });
    };
    return awesomeScroll;
});







// function animateValue(id, start, end, duration) {
//     var range = end - start;
//     var current = start;
//     var increment = end > start? 1 : -1;
//     var stepTime = Math.abs(Math.floor(duration / range));
//     var obj = document.getElementById(id);
//     var timer = setInterval(function() {
//         current += increment;
//         obj.innerHTML = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//     }, stepTime);
// }







