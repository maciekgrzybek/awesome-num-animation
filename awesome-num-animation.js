

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

    'use strict';

    var animated = false;
    
    function awesomeScroll(element,options){

        //default options 
        if ( !options ) {
            options = {
                startNumber : 0,
                maxNumber : 100,
                duration : 1500,
                reveal : 150
            }
        };

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
                if (distanceToTop-windowHeight-scrollY < -(options.reveal) && animated==false) {
                    animateNumber();
                    animated = true; // Set to true, so element is animated only once
                }
            })();

            function animateNumber(){

                var range = options.maxNumber - options.startNumber; // differnce between animated numbers

                var currentNumber = options.startNumber; // setting a starting number in animation

                var increment = options.maxNumber > options.startNumber ? 1 : -1; // setting animation 'direction'

                var step = Math.abs(Math.floor(options.duration/range)); // setting time step for animation

                // actual animation part
                var intervalAnimation = setInterval(function(){
                    currentNumber += increment;
                    document.querySelector(element).innerHTML = currentNumber;
                    if (currentNumber == options.maxNumber) {
                        clearInterval(intervalAnimation);
                    }
                },step);
            };
        });
    };
    return awesomeScroll;
});







