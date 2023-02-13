let header = document.querySelector('header')
header.style.transform = 'translateY(-110%)';

let flag = false;

let checkYOffset = setInterval(function(){
    let yOffset = window.pageYOffset;
    if(yOffset > 0){
        flag=true;
        clearInterval(timeout);
        header.removeAttribute('style');
        clearInterval(checkYOffset);
    }

    console.log(yOffset);
},100);

if(flag){
    
}

let timeout = setTimeout(function(){
    header.removeAttribute('style');
},3400);
    