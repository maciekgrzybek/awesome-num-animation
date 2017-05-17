

(function (factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = factory();
  } else {
    window.awesomeNumAnimation = factory();
  }

})(function(){

    'use strict';

    var animated = false;
    
    function awesomeNumAnimation(element,options){

        var DEFAULTS = {
            startNumber : 0,
            maxNumber : 100,
            duration : 2000,
            reveal : 150
        };

        var config = options;

        // Final values used in function
        // Assign function takes user's options (if they exist) and change them in default options
        var settings = Object.assign({}, DEFAULTS, config);

        var starttime;

        // Main animating function
        function animateNumber(timestamp, element, duration, startNumber, maxNumber){

            var range = maxNumber - startNumber; 

            var timestamp = timestamp || new Date().getTime(); //if browser doesn't support requestAnimationFrame, generate own timestamp

            var runtime = timestamp - starttime;

            var progress = runtime / duration;

            progress = Math.min(progress, 1); // Ensuring animation won't go over Max Number

            var currentNumber = (range * progress).toFixed(0);
            
            element.innerHTML = currentNumber; 

            if (runtime < duration){ 

                requestAnimationFrame(function(timestamp){ 

                    animateNumber(timestamp, element, duration, startNumber, maxNumber)

                })
            }
        };
        
        // What to do on scroll
        function onScroll(e) {

            var animateDiv = document.querySelector(element);
            var scrollY = window.pageYOffset;
            var distanceToTop = animateDiv.getBoundingClientRect().top + scrollY;
            var windowHeight = window.innerHeight;
            
            (function(){
                if (distanceToTop - windowHeight - scrollY < - (settings.reveal) && animated==false) {

                    requestAnimationFrame(function(timestamp){

                        starttime = timestamp || new Date().getTime(); //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date

                        animateNumber(timestamp, animateDiv, settings.duration, settings.startNumber, settings.maxNumber); // Calling animation with proper options
                        
                    });
                    animated = true; // Set to true, so element is animated only once
                }
            })();
        };

         window.addEventListener('scroll', onScroll);
         
    };
    return awesomeNumAnimation;
});



