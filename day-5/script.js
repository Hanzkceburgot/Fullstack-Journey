// document.createElement()
const liBaru = document.createElement('li')
// document.createTextNode()
const teksLi = document.createTextNode("li yang dibuat menggunakan insertbefore")
// node.appendChild
liBaru.appendChild(teksLi)

const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)')
// node.insertBefore9
ul.insertBefore(liBaru,li2)

const newLi = document.createElement('li')
const teks2 = document.createTextNode("Hola YAhoo konnichiwa")
newLi.appendChild(teks2)

const li1 = document.querySelector('li:nth-child(1)')
ul.insertBefore(newLi,li1)


const secA = document.getElementById('a')
const p2 = document.getElementsByClassName('p2')[0]
// parentnode.removeChild
secA.removeChild(p2)

const link = document.createElement('a')
link.setAttribute('id','github')
link.setAttribute('href', 'https://github.com/Hanzkceburgot')
link.setAttribute('target', '_blank')
const textLink = document.createTextNode('Github')
link.appendChild(textLink)

const p3 = document.getElementsByClassName('p3')[0]
// secA.replaceChild(p2)
secA.replaceChild(link,p3)

link.style.display ='block'