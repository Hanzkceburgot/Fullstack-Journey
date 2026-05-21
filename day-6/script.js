const imgComputer = document.querySelector('.img-komputer')
const uSkor = document.querySelector('#uSkor')
const cSkor = document.querySelector('#cSkor')

function pilihanComp(){
    const comp = Math.round(Math.random() *3 + 1)
    
    if(comp == 1){
        return 'gajah'
    }else if(comp == 2) {
        return 'orang'
    }else if (comp == 3){
        return 'semut'
    }else if (comp == 4){
        return 'semut'
    }
}
function Hasil(comp,user){

    if(comp == user) return 'SERI'
    if(user == 'gajah') return (comp == 'orang') ? "MENANG" : 'KALAH'
    if(user == 'orang') return (comp == 'semut') ? "MENANG" : 'KALAH'
    if(user == 'semut') return (comp == 'gajah') ? "MENANG" : 'KALAH'
    // return 'You found easter egg'
}

const info = document.querySelector('.info')

const uGajah = document.querySelector('.gajah') 
const uOrang = document.querySelector('.orang') 
const uSemut = document.querySelector('.semut') 

// uGajah.addEventListener('click',()=>{
const pComp = pilihanComp()
const pUser = uGajah.className
//     info.innerHTML = Hasil(pComp,pUser) 

//     const imgComputer = document.querySelector('.img-komputer')
//     imgComputer.setAttribute('src', `img/${pComp}.png`)
// })
// uOrang.addEventListener('click',()=>{
//     const pComp = pilihanComp()
//     const pUser = uOrang.className
//     info.innerHTML = Hasil(pComp,pUser)

//     const imgComputer = document.querySelector('.img-komputer')
//     imgComputer.setAttribute('src', `img/${pComp}.png`)
// })
// uSemut.addEventListener('click',()=>{
//     const pComp = pilihanComp()
//     const pUser = uSemut.className
//     info.innerHTML = Hasil(pComp,pUser)

//     const imgComputer = document.querySelector('.img-komputer')
//     imgComputer.setAttribute('src', `img/${pComp}.png`)
// })

function loading(){
    const gambar = ['gajah','orang', 'semut']
    let i = 0 
    
    const waktuMulai = new Date().getTime()
    setInterval(() => {
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval
            return
        }
        info.innerHTML = ''
        imgComputer.setAttribute('src', `img/${gambar[i++]}.png`)
        if(i == gambar.length) i = 0

    }, 100);
}

const pilihan = document.querySelectorAll('li img')
pilihan.forEach((pil)=>{
    pil.addEventListener('click',()=>{
        const pComp = pilihanComp()
        const pUser = pil.className

        loading()
        
        setTimeout(() => {
            imgComputer.setAttribute('src', `img/${pComp}.png`)
            info.innerHTML = Hasil(pComp,pUser) 
            if(Hasil == 'MENANG') return uSkor++

            uSkor.innerHTML = uSkor++
        }, 1000);
    })
})
