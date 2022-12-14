/* Scroll nav bar */

const header = document.querySelector('header');

let prevScrollPos = window.pageYOffset;

window.onscroll = function(){
    let currentScrollPos = window.pageYOffset

    if(prevScrollPos > currentScrollPos){
        header.classList.remove("scroll")
    }else{
        header.classList.add("scroll")
    }

    prevScrollPos = currentScrollPos;
}




/* Parallax */

window.addEventListener('scroll', function(e) {

    const target = document.querySelectorAll('.scroll');


    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;

        if(target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
        } else {
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;
            
            target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
        }
    }


});

var x = 0;
var images = new Array("2.png","3.png", "4.png");
var i = setInterval(auto, 3000);

function auto()
  {
    x++;
    if (x == images.length)
       x=0;
    document.getElementById('bigImage').src=images[x];      
  }




  
  
  
