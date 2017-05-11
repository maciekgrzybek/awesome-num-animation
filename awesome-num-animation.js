

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
            duration : 2000,
            reveal : 150
        };

        // Values added by user in function invokation
        var config = options;

        // Final values used in function
        // Assign function takes user's options (if they exist) and change them in default options
        var settings = Object.assign({}, DEFAULTS, config);

        console.log(settings)
        window.addEventListener('scroll', function(e){

            // Div we want to detect
            var animateDiv = document.querySelector(element);

            // Distance from window to top of viewport
            var scrollY = window.pageYOffset;

            // Distance from div to bottom of viewport
            var distanceToTop = animateDiv.getBoundingClientRect().top + scrollY;

            // Window height
            var windowHeight = window.innerHeight;

            // Declare variable for animation Start
            var starttime;
            
            // Function that calculate position ov viewport
            (function(){
                if (distanceToTop-windowHeight-scrollY < -(settings.reveal) && animated==false) {

                    function animateNumber(timestamp,element,duration,startNumber,maxNumber){

                        var range = maxNumber - startNumber; // differnce between animated numbers

                        var timestamp = timestamp || new Date().getTime(); //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date

                        var runtime = timestamp - starttime; // Actual time of animation

                        var progress = runtime / duration; // Pretty obvious

                        progress = Math.min(progress, 1); // Ensuring animation won't go over Max Number

                        var currentNumber = (range * progress).toFixed(0);
                        
                        document.querySelector(element).innerHTML = currentNumber;  // Putting number in html object

                        if (runtime < duration){ // if duration not met yet
                            requestAnimationFrame(function(timestamp){ // call requestAnimationFrame again with parameters
                                animateNumber(timestamp,element,duration,startNumber,maxNumber)
                            })
                        }
                    };
                    
                    requestAnimationFrame(function(timestamp){
                        starttime = timestamp || new Date().getTime(); //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
                        animateNumber(timestamp,element,settings.duration,settings.startNumber,settings.maxNumber); // Calling animation with proper options
                    });
                    animated = true; // Set to true, so element is animated only once
                }
            })();
            


        });
    };
    return awesomeScroll;
});



