



(function awesomeCounter(){
    var animated = false;
    window.addEventListener('scroll', function(e){

        // Div we want to detect
        var animateDiv = document.querySelector('[data-animation]');

        // Distance from window to top of viewport
        var scrollY = window.pageYOffset;

        // Distance from div to bottom of viewport
        var distanceToTop = animateDiv.getBoundingClientRect().top + scrollY;

        // Window height
        var windowHeight = window.innerHeight;
        
        
        (function calculatePosition(){
            if (distanceToTop-windowHeight-scrollY < -100 && animated==false) {
                animateNumber();
                animated = true;
            }
        })();
        function animateNumber(){
            var counter = 0;
            var intervalAnimation = setInterval(function(){
                counter += 1;
                document.querySelector('[data-animation]').innerHTML = counter;
                if (counter == 100) {
                    clearInterval(intervalAnimation);
                }
            },50)
        };
    });
})();





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







