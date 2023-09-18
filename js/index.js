class indexController{
    constructor(){

        this.menuHamburguer = document.querySelector('#menu-hamburguer')
        this.menuClose = document.querySelector('#menu-close')
        this.mobileNav = document.querySelector('#mobile-nav')

        this.menuHamburguerToggle()
        this.menuCloseToggle()

    }

    menuHamburguerToggle(){

        this.menuHamburguer.addEventListener('click', e =>{
           
            this.mobileNav.classList.toggle('hide')
            this.menuHamburguer.classList.toggle('hide')
            this.menuClose.classList.toggle('hide')
            
            
        })

    }

    menuCloseToggle(){

        this.menuClose.addEventListener('click', e =>{
           
            this.mobileNav.classList.toggle('hide')
            this.menuHamburguer.classList.toggle('hide')
            this.menuClose.classList.toggle('hide')
            
            
        })

    }
}