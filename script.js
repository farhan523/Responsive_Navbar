let open = document.querySelector('#hi');
console.log(open)

let hidden =  document.querySelector('.hidden')

open.addEventListener('click',(()=>{
    open.style.transform = "rotate(145deg)"
    hidden.style.display = "inline"
    hidden.style.transform = "translateX(0px)"
}))

let close = document.querySelector('#close')

close.addEventListener('click',()=>{
    open.style.transform = "rotate(0deg)"
    hidden.style.transform = "translateX(200px)"
})