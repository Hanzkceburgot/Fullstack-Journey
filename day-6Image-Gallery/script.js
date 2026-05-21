const container = document.querySelector('.container')
const jumbo = document.querySelector('.container img')
const thumbnail = document.querySelector('.thumbnail')



// thumbnail.addEventListener('mouseover',(i)=>{
//     i.target.setAttribute('class','trans')
// })
// thumbnail.addEventListener('mouseout',(i)=>{
//     i.target.setAttribute('class', 'back')
// })
container.addEventListener('click',(i)=>{
    if(container.className == 'container') {
        jumbo.src = i.target.src
        jumbo.classList.add('fade')

        setTimeout(() => {
            jumbo.classList.remove('fade')
        }, 500);

    // i.target.setAttribute('class','active')
    }
    
})

// });