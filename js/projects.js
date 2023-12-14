const but_react = document.querySelector('.but_react')
console.log(but_react)
const but_html = document.querySelector('.but_html')
const but_js = document.querySelector('.but_js')
const html = document.querySelector('.html')
const react = document.querySelector('.react')
const js = document.querySelector('.js')



but_react.addEventListener('click', ()=>{
  react.style.display= "block";
  react.classList.remove('none')
  html.style.display = 'none'
  js.style.display = 'none'
  but_html.classList.remove('active');
  but_js.classList.remove('active');
  but_react.classList.add('active');
})

but_html.addEventListener('click', ()=>{
  html.style.display = 'block'
  html.classList.remove('none')
  react.style.display = 'none'
  js.style.display ='none'
  but_js.classList.remove('active');
  but_react.classList.remove('active');
  but_html.classList.add('active');
})

but_js.addEventListener('click', ()=>{
  js.style.display = 'block'
  js.classList.remove('none')
  html.style.display = 'none'
  react.style.display = 'none'
  but_js.classList.add('active');
  but_html.classList.remove('active');
  but_react.classList.remove('active');
})