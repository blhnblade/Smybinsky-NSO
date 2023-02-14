let header = document.querySelector('header');
// header.style.transform = 'translateY(-110%)';

let checkYOffset = setInterval(function(){
    let yOffset = window.pageYOffset;
    if(yOffset > 0){
        clearInterval(timeout);
        
header.classList.remove('hidden-visiblity');
header.classList.remove('header-translateY')
        header.removeAttribute('style');
        clearInterval(checkYOffset);
    }

    console.log(yOffset);
},100);


let timeout = setTimeout(function(){
    
header.classList.remove('hidden-visiblity');
header.classList.remove('header-translateY')
    header.removeAttribute('style');
},3400);
    