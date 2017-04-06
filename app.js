





window.addEventListener('scroll', function(e){

    // Div we want to detect
    var animateDiv = document.querySelector('[data-animation] > h1');

    // Distance from window to top of viewport
    var scrollY = window.pageYOffset;

    // Distance from div to bottom of viewport
    var distanceToTop = animateDiv.getBoundingClientRect().top + scrollY;

    // Window height
    var windowHeight = window.innerHeight;
    
    function calculatePosition(){
        if (distanceToTop-windowHeight-scrollY < -100) {
            animateDiv.style.color = 'gold';
        }
    }
    calculatePosition();

});
var counter = 0;
var timer = 
setInterval(
    function count(){
        counter += 1;
        document.querySelector('[data-animation] > h1').innerHTML = counter;
        if (counter == 100){
        clearInterval(timer);
        }
    },50
);
timer();





