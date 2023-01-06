const prev = document.querySelector('#prevbtn');
const next = document.querySelector('#nextbtn');

let imageslider = document.querySelector('.images');


let count = 0;
let click = 0;
let even = ['click','drag'];

even.forEach(eventi =>{
    console.log(eventi);
})

next.addEventListener('click', ()=>{
    count = count + 482;
    click++;
    console.log(count)
    if(count > 1446){
        count = 0;
        imageslider.style.transform = `translateX(-${count}px)`;
    }else{
        imageslider.style.transform = `translateX(-${count}px)`;
    }
});

imageslider.addEventListener('dragstart', ()=>{
    count = count + 482;
    click++;
    console.log(count)
    if(count > 1446){
        count = 0;
        imageslider.style.transform = `translateX(-${count}px)`;
    }else{
        imageslider.style.transform = `translateX(-${count}px)`;
    }
});



prev.addEventListener('click', ()=>{
    count = count - 482;
    imageslider.style.transform = `translateX(-${count}px)`;
    console.log(count)
});

// imageslider.addEventListener('dragend', ()=>{
//     count = count - 482;
//     imageslider.style.transform = `translateX(-${count}px)`;
//     console.log(count)
// });