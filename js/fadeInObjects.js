document.addEventListener("DOMContentLoaded", function(){
    const observer = new IntersectionObserver((entries) =>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible')
            }
        })
    },
    {threshold: 0.5}
    )

    const fadeDivs = document.querySelectorAll('.fadeIn')
    fadeDivs.forEach(fadeDiv => observer.observe(fadeDiv))
})