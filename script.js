let heading = document.querySelector('h1');
let counter = 1;

let mas = Array.from(heading.textContent); 
heading.textContent = heading.textContent[0]; 

setTimeout(function(){
    let p = setInterval(function(){
        heading.textContent = heading.textContent + mas[counter++];  
        heading.style.borderRight = '2px solid black';
        if(counter === 14){
            clearInterval(p);
            setTimeout(function(){
                heading.style.borderRight = '';
            },400)
        }
    },200)
},400)
