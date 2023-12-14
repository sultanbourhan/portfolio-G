

const enterTransition = ()=>{
    const transition = document.querySelector('.transition');
    const transitionDivs = document.querySelectorAll('.transition > div');
    transitionDivs.forEach((el ,index)=>{

    setTimeout(()=>{
        el.style.transformOrigin = 'left'
        el.style.transform = 'scaleX(0)'

    },[100 + (300 * index)])

    setTimeout(()=>{
        transition.style.zIndex = "-1000"
    },[100 + (500 * transitionDivs.length)])
})
}
enterTransition ()


const web = document.querySelector('.web')
const tools = document.querySelector('.tools')
const button_web = document.getElementById('button_web')
const button_tools = document.getElementById('button_tools')


button_tools.addEventListener('click', ()=>{
  tools.classList.add('block');
  web.classList.add('none')
  web.classList.remove('block')
  tools.classList.remove('none')
  button_tools.classList.add('active')
  button_web.classList.remove('active')
})
button_web.addEventListener('click', ()=>{
    tools.classList.add('none');
    web.classList.add('block')
    web.classList.remove('none')
    tools.classList.remove('block')
    button_tools.classList.remove('active')
    button_web.classList.add('active')
})





const nums = document.querySelectorAll(".box .num");
const startCunt = (el)=>{
    const goal = el.dataset.goal;
    const cunt = setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(cunt);
        }
    },100)
}
setTimeout(()=>{
    nums.forEach((el)=> startCunt(el))
},1000)