

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

        // Default values if user won't add any options
        var DEFAULTS = {
            startNumber : 0,
            maxNumber : 100,
            duration : 1500,
            reveal : 150
        };

        // Values added by user in function invokation
        var config = options;

        // Final values used in function
        // Assign function takes user's options (if they exist) and change them in default options
        var settings = Object.assign({}, DEFAULTS, config);

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
                if (distanceToTop-windowHeight-scrollY < -(settings.reveal) && animated==false) {
                    animateNumber();
                    animated = true; // Set to true, so element is animated only once
                }
            })();

            function animateNumber(){

                var range = settings.maxNumber - settings.startNumber; // differnce between animated numbers

                var currentNumber = settings.startNumber; // setting a starting number in animation

                var increment = settings.maxNumber > settings.startNumber ? 1 : -1; // setting animation 'direction'

                var step = Math.abs(Math.floor(settings.duration/range)); // setting time step for animation

                // actual animation part
                var intervalAnimation = setInterval(function(){
                    currentNumber += increment;
                    document.querySelector(element).innerHTML = currentNumber;
                    if (currentNumber == settings.maxNumber) {
                        clearInterval(intervalAnimation);
                    }
                },step);
            };
        });
    };
    return awesomeScroll;
});







