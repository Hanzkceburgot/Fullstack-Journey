// // const userClose = document.querySelector('.close')
// // const contact = document.querySelector('.card')

// // userClose.addEventListener('click',()=>{
// //     contact.remove()
// // })

// // DOM transfersal
// const uClose = document.querySelectorAll('.close')

// for (let i = 0; i < uClose.length; i++) {
//     uClose[i].addEventListener('click',(c)=>{
//         c.target.parentElement.remove()
//         c.preventDefault()
//         c.stopPropagation()
//     })
    
// }
// const cards = document.querySelectorAll('.card')
// cards.forEach((card)=>{
//     card.addEventListener('click',(e)=>{
//         alert('Yea ini contactnya')
//     })
// })

const container = document.querySelector('.container')

container.addEventListener('click',(e)=>{
    if(e.target.className == 'close') {
        e.target.parentElement.remove()
    }
})