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
        this.divModal = document.querySelector('#modal')
        this.closeModalBtn = document.querySelector("#close-modal")
        this.infoContentModal = document.querySelector('#info-project')
        this.tecnologyContentModal = document.querySelector('#tecnology-project')
        this.dateContentModal = document.querySelector('#date-project')
        this.urlContentModal = document.querySelector('#url-project')
        this.tituloHeader = document.querySelector('#h1-header')

     
        this.menuHamburguerToggle()
        this.menuCloseToggle()
        this.projectsToggle()
        this.projectsClick()
        this.closeModal()
        

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

        this.all.classList.remove('flex')
        this.all.classList.add('hide')
    }

    showAllDiv(){
        this.all.classList.remove('hide')
        this.all.classList.add('flex')
        
    }

    projectsClick(){

        this.projectsArr.forEach(el => {

         el.addEventListener('click', e =>{

            document.body.classList.add('transparent')
            this.divModal.style.display = 'flex'

            let id = el.getAttribute('id')
           
            switch(id){
                case "1":
                    this.infoContentModal.innerHTML = 'Projeto desenvolvido para Empresa de Terceirização ViniPort Serviços, a qual solicitou um sistema web responsivo para aplicações mobiles e que fosse interativo para os clientes. Alêm da interface atrativa, também há todo o sistema de contato e solicitação de propostas o qual está emparelhado com uma AdminPage restringida com sistema de login e senha, que armazena não só todas as informações fornecidas pelos usuários mas também dados da empresa, como mensagens, propostas, funcionários e usuários. '
                    this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Redis, Canva'
                    this.dateContentModal.innerHTML = 'Set, 2023'
                    this.urlContentModal.innerHTML = 'https://github.com/carloseduardo-silva/Projeto-ViniPort'
                    this.urlContentModal.href = 'https://github.com/carloseduardo-silva/Projeto-ViniPort'

                   
                break

                case "2":
                    this.infoContentModal.innerHTML = ''
                    this.tecnologyContentModal.innerHTML = ''
                    this.dateContentModal.innerHTML = ''
                    this.urlContentModal.innerHTML = ''
                    this.urlContentModal.href = ''
                break

                case "3":
                    this.infoContentModal.innerHTML = ''
                    this.tecnologyContentModal.innerHTML = ''
                    this.dateContentModal.innerHTML = ''
                    this.urlContentModal.innerHTML = ''
                    this.urlContentModal.href = ''
                break

                case "4":
                    this.infoContentModal.innerHTML = ''
                    this.tecnologyContentModal.innerHTML = ''
                    this.dateContentModal.innerHTML = ''
                    this.urlContentModal.innerHTML = ''
                    this.urlContentModal.href = ''
                break

                case "5":
                    this.infoContentModal.innerHTML = ''
                    this.tecnologyContentModal.innerHTML = ''
                    this.dateContentModal.innerHTML = ''
                    this.urlContentModal.innerHTML = ''
                    this.urlContentModal.href = ''
                break

                case "6":
                    this.infoContentModal.innerHTML = ''
                    this.tecnologyContentModal.innerHTML = ''
                    this.dateContentModal.innerHTML = ''
                    this.urlContentModal.innerHTML = ''
                    this.urlContentModal.href = ''
                break
            }

         })

            
        });
    }

    closeModal(){
        this.closeModalBtn.addEventListener('click', e =>{

            this.divModal.style.display = 'none'
            document.body.classList.remove('transparent')

        })

    }





}