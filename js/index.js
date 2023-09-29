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
        this.sectionArr = document.querySelectorAll('.hidden')
        this.photoModal = document.querySelector('#photo-modal')
        this.h2Modal = document.querySelector('#h2-project')
        
        

        this.menuHamburguerToggle()
        this.menuCloseToggle()
        this.projectsToggle()
        this.projectsClick()
        this.closeModal()
        this.menuMobileClick()
        this.observer()
        

    }

    observer(){

        const myObserver = new IntersectionObserver( (entries) =>{

          entries.forEach(entry =>{

            if(entry.isIntersecting === true){
                entry.target.classList.add('show')
            }
            else{
                entry.target.classList.remove('show')
            }

          })


        })

        this.sectionArr.forEach(section =>{
            
            myObserver.observe(section)

        })



    }

    menuHamburguerToggle(){

        this.menuHamburguer.addEventListener('click', e =>{
           
            this.mobileNav.classList.toggle('flex')
            this.menuHamburguer.classList.toggle('hide')
            this.menuClose.classList.toggle('hide')
            document.body.classList.toggle('transparent2')
            
            
        })

    }

    menuCloseToggle(){

        this.menuClose.addEventListener('click', e =>{
           
            this.mobileNav.classList.toggle('flex')
            this.menuHamburguer.classList.toggle('hide')
            this.menuClose.classList.toggle('hide')
            document.body.classList.toggle('transparent2')
            
            
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
            if(document.body.classList.contains('transparent2')){
                document.body.classList.remove('transparent2')
            }

            if(this.mobileNav.classList.contains('flex')){
                this.mobileNav.classList.remove('flex')
                this.menuHamburguer.classList.toggle('hide')
                this.menuClose.classList.toggle('hide')
            }

            this.divModal.style.display = 'flex'

            let id = el.getAttribute('id')
           
            switch(id){
                case "1":
                    this.infoContentModal.innerHTML = 'Projeto desenvolvido para Empresa de Terceirização ViniPort Serviços, a qual solicitou um sistema web responsivo para aplicações mobiles e que fosse interativo para os clientes. Alêm da interface atrativa, também há todo o sistema de contato e solicitação de propostas o qual está emparelhado com uma AdminPage restringida com sistema de login e senha, que armazena não só todas as informações fornecidas pelos usuários mas também dados da empresa, como mensagens, propostas, funcionários e usuários. '
                    this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Redis, Canva, MySql'
                    this.dateContentModal.innerHTML = 'Set, 2023'
                    this.urlContentModal.innerHTML = 'https://github.com/carloseduardo-silva/Projeto-ViniPort'
                    this.urlContentModal.href = 'https://github.com/carloseduardo-silva/Projeto-ViniPort'
                    this.photoModal.src = '/images/viniport-responsive.png'
                    this.h2Modal.innerHTML = 'ViniPort Serviços'
                   
                break

                case "2":
                    this.infoContentModal.innerHTML = `Projeto desenvolvido para Barbearia Kadu Corte's, a qual solicitou um sistema web responsivo para aplicações mobiles e que fosse interativo para os clientes. O sistema web conta tanto com uma ClientPage atrativa a qual expoem para os usuários as informações da barbearia e fornece um sistema de agendamento completo com validações, quanto uma AdminPage restringida por uma aplicação de login e senha, que armazena os dados dos clientes agendados, horarios marcados e disponíveis e muito mais.  `
                    this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Redis, Canva, MySql'
                    this.dateContentModal.innerHTML = 'Jun, 2023'
                    this.urlContentModal.innerHTML = 'https://github.com/carloseduardo-silva/projeto-Barbearia'
                    this.urlContentModal.href = 'https://github.com/carloseduardo-silva/projeto-Barbearia'
                    this.photoModal.src = '/images/barbearia-responsive.png'
                    this.h2Modal.innerHTML = `Barbearia Kadu Corte's `
                break

                case "3":
                    this.infoContentModal.innerHTML = 'Projeto de um website para um Restaurante, desenvolvido utilizando em sua base JavaScript e Embedded JavaScript em conexão com o banco de dados MySql, suportando tanto uma ClientPage regidas pelo sistema de rotas CRUD, quanto uma AdminPage (dashboard) com restrição de acesso por usuário e senha e dados assíncronos.'
                    this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Redis, Canva, MySql'
                    this.dateContentModal.innerHTML = 'Ago, 2023'
                    this.urlContentModal.innerHTML = 'https://github.com/carloseduardo-silva/projeto-Restaurante'
                    this.urlContentModal.href = 'https://github.com/carloseduardo-silva/projeto-Restaurante'
                    this.photoModal.src = '/images/saboroso-responsive.png'
                    this.h2Modal.innerHTML = ` Restaurante Saboroso `
                break


                case "4":
                    this.infoContentModal.innerHTML = 'Projeto desenvolvido durante o curso de JavaScript Avançado da HCODEBR, o qual nos trouxe o desenvolvimento de um clone do Whatsapp, contanto com todas as suas funcionalidades programadas através do banco de dados Firebase(FireStore + RealTimeDataBase), em conjunto com o JavaScript e algumas libs como: APIs de audio, camera e video, Path, Navigator, etc.'
                    this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Firebase'
                    this.dateContentModal.innerHTML = 'Jul, 2023'
                    this.urlContentModal.innerHTML = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-whatsapp-clone'
                    this.urlContentModal.href = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-whatsapp-clone'
                    this.h2Modal.innerHTML = `WhatsApp Clone `
                break

                case "5":
                    this.infoContentModal.innerHTML = 'Projeto desenvolvido essencialmente com JavaScript, afim de otimizar meus conhecimentos em sistemas de routes CRUD regido por uma API REST que consome dados do Banco de Dados Nedb, trazendo assincronidade ao website.'
                    this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Nedb'
                    this.dateContentModal.innerHTML = 'Jun, 2023'
                    this.urlContentModal.innerHTML = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-usuarios-restapi'
                    this.urlContentModal.href = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-usuarios-restapi'
                    this.h2Modal.innerHTML = `Manage Users `
                break

                case "6":
                    this.infoContentModal.innerHTML = 'Projeto desenvolvido durante o curso de JavaScript Avançado da HCODEBR, o qual nos trouxe o desenvolvimento de um clone do DropBox, contanto com todas as suas funcionalidades programadas através do banco de dados Firebase(FireStore + RealTimeDataBase), em conjunto com o JavaScript, por meio do sistema de routes CRUD e algumas libs como: Formidable, Path, Fs, etc.'
                    this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Firebase'
                    this.dateContentModal.innerHTML = 'Jun, 2023'
                    this.urlContentModal.innerHTML = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-dropbox-clone'
                    this.urlContentModal.href = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-dropbox-clone'
                    this.h2Modal.innerHTML = `DropBox Clone `
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

    menuMobileClick(){

        let arr = this.mobileNav.querySelectorAll('ul li a')
        
        arr.forEach(a =>{
            a.addEventListener('click', e=>{
                this.menuClose.click()
            })

        })

    }





}