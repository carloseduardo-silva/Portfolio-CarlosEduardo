class indexController{
    constructor(){

        this.menuHamburguer = document.querySelector('#menu-hamburguer')
        this.menuClose = document.querySelector('#menu-close')
        this.mobileNav = document.querySelector('#mobile-nav')
        this.highlightDiv = document.querySelector('#div-highlights')
        this.allDiv = document.querySelector('#div-all')
        this.highlights = document.querySelector('.highlights-projects')
        this.all = document.querySelector('.all-projects')
        this.projectsArr = document.querySelectorAll('.box')


        this.menuHamburguerToggle()
        this.menuCloseToggle()
        this.projectsToggle()
        this.projectsClick()

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

    projectsToggle(){

        this.highlightDiv.addEventListener('click', e =>{

            if(this.highlightDiv.classList.value === 'selected'){
               return
            }else{
                this.highlightDiv.classList.add('selected')
                this.allDiv.classList.remove('selected')
                this.showHighLightDiv();
            }

        })

        
        this.allDiv.addEventListener('click', e =>{

            if(this.allDiv.classList.value === 'selected'){
               return
            }else{
                this.highlightDiv.classList.remove('selected')
                this.allDiv.classList.add('selected')
                this.showAllDiv();
            }

        })


    }

    showHighLightDiv(){

        this.highlights.classList.remove('hide')
        this.all.classList.add('hide')
    }

    showAllDiv(){
        this.all.classList.remove('hide')
        this.highlights.classList.add('hide')
    }

    projectsClick(){

        this.projectsArr.forEach(el => {

         el.addEventListener('click', e =>{

            document.body.classList.add('transparent')

            let id = el.getAttribute('id')
           
            switch(id){
                case "1":
                
                break

                case "2":
                    
                break

                case "3":
                
                break
            }

         })

            
        });
    }



}