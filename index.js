let itmes = document.querySelectorAll('ul li')

itmes.forEach(itme=>{
    itme.addEventListener('click',function(){
        itmes.forEach(itme=>itme.classList.remove('active'))
        this.classList.add('active')
    })
})