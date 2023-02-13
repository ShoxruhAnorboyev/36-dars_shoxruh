'use strict'
// const wrapper = document.querySelector('.btn-block')
// wrapper.addEventListener('click', (event) => {
//    if(event.target && event.target.tagName == 'BUTTON') {
//     console.log('faqat buttonlar bosilsa ishlaydi');
//    }
// })

// wrapper.addEventListener('click', (event) => {
//    if(event.target && event.target.classList.contains('blue')){
//       console.log('Ona divni ichida "blue" class bo\'lsa ishlaydi');
//    }
// })

// const wrapper = document.querySelector('.btn-block')
// wrapper.addEventListener('click',  (event) => {
//    if(event.target && event.target.tagName == 'BUTTON'){
//       console.log('Ona divni ichidagi "button"lar bosilsa ishlaydi');
//    }
// })

// const wrapper = document.querySelector('.btn-block')
// wrapper.addEventListener('click', (event) => {
//    if(event.target && event.target.tagName == 'BUTTON'){
//       console.log("Button bosildi");
//    }
// })

// const wrapper = document.querySelector('.btn-block')
// wrapper.addEventListener('click', (event) => {
//    if(event.target && event.target.tagName == 'BUTTON'){
//       console.log("BUTTON bosilsa ishlaydi");
//    }
// })


// const wrapper = document.querySelector('.btn-block')
// wrapper.addEventListener('click', (event) => {
//    if(event.target && event.target.classList.contains('blue')){
//       console.log('Ona divni ichida "blue" class bo\'lsa ishlaydi');
//    }
// })

// const wrapper = document.querySelector('.btn-block')
// const buttonlar = document.querySelectorAll('button')
// buttonlar[2].classList.add('red')
// buttonlar[3].classList.add('green')
// wrapper.addEventListener('click', (event) => {
//    if( event.target && event.target.classList.contains('red')){
//       console.log('BUTTON lar ichida "red" class bo\'lsa ishlaydi');
//    }
//    if( event.target && event.target.classList.contains('blue')){
//       console.log('Ko\'k rang class bo\'lsa ishlaydi');
//    }
//    if( event.target && event.target.classList.contains('green')){
//       console.log('class lar ichida "yashil" class bo\'lsa ishlaydi');
//    }
// })

// const wrapper = document.querySelector('.btn-block')
// const buttonlar = document.querySelectorAll('button')
// buttonlar[3].classList.add('red')
// wrapper.addEventListener('click', (event) => {
//    if(event.target && event.target.classList.contains('blue')){
//       console.log('BUTTON lar ichida "blue" class bo\'sa ishlaydi');
//    }
//    if(event.target && event.target.classList.contains('red')){
//       console.log('"Qizil rang bo\'lsa ishlaydi');
//    }
// })

// const wrapper = document.querySelector('.btn-block')
// const buttonlar = document.querySelectorAll('button')
// buttonlar[5].classList.add('green')
// buttonlar[1].classList.add('violet')
// wrapper.addEventListener('click', (event) => {
//         if(event.target && event.target.classList.contains('green')){
//             console.log('"YASHIL" bo\'lsa ishlaydi');
//         }
//         if(event.target && event.target.classList.contains('violet')){
//             console.log('"Grey" rang bosilsa');
//         }
// })


const wrapper = document.querySelector('.btn-block')
const btns = document.querySelectorAll('button')
    btns[3].classList.add('red')
    btns[0].addEventListener('click', () => {
        btns[1].classList.toggle('green')
    })
wrapper.addEventListener('click', (event) =>{
    if(event.target && event.target.matches('button.green')){
        console.log('Yashil rang bosilsa');
    }
    if(event.target && event.target.matches('button.red')){
        console.log('Qizil bosilsa');
    }
})
    // btns.forEach((item) => {
    //     item.addEventListener('click', () =>{
    //         console.log('bosildi');
        
    //     })
    // });
const yangiButton = document.createElement('button')
yangiButton.classList.add('green')
wrapper.append(yangiButton)





