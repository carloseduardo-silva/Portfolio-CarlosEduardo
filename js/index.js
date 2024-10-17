class indexController{
    constructor(){

        this.menuHamburguer = document.querySelector('#menu-hamburguer')
        this.menuClose = document.querySelector('#menu-close')
        this.mobileNav = document.querySelector('#mobile-nav')
        this.navFixed = document.querySelector('.nav-fixed')
        this.highlightDiv = document.querySelector('#div-highlights')
        this.allDiv = document.querySelector('#div-all')
        this.highlights = document.querySelector('.highlights-projects')
        this.normalProjectsArr = document.querySelectorAll('.normal-project')
        this.projectsArr = document.querySelectorAll('.project')
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
        this.modalArrowPrev = document.querySelector("#modalArrowPrev")
        this.modalArrowNext= document.querySelector("#modalArrowNext")
        this.modalContainer = document.querySelector('.modal-container')
        this.projectVideo = document.querySelector('#project-video')
        this.experienceArr = document.querySelectorAll(".title-exp")
        this.expCargo = document.querySelector("#exp-cargo")
        this.expParagraph = document.querySelector("#exp-paragraph")
        this.expTime = document.querySelector("#exp-time")
        this.expLocal = document.querySelector("#exp-local")
        
        

        this.menuHamburguerToggle()
        this.menuCloseToggle()
        this.projectsToggle()
        this.projectsClick()
        this.experienceClick()
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

        this.normalProjectsArr.forEach((project) =>{
            project.classList.add('normal-project')
            project.classList.remove('box')
        })
    }

    showAllDiv(){
        
        this.normalProjectsArr.forEach((project) =>{
            project.classList.remove('normal-project')
            project.classList.add('box')
        })
        
    }

    showArrows(){
        document.querySelectorAll('.hidden-arrow').forEach(arrow =>{
            arrow.classList.remove('hidden-arrow')
            arrow.classList.add('modal-arrow')
        })
    }

    hideArrows(){
        document.querySelectorAll('.modal-arrow').forEach(arrow =>{
            arrow.classList.remove('modal-arrow')
            arrow.classList.add('hidden-arrow')
        })
    }

    arrowClick(id){

        this.IdProject = id

        if(this.projectsArr.length > parseInt(id)){
            this.modalArrowNext.addEventListener('click', e=>{

                this.projectsArr[parseInt(id)].click()
            })

        }

        
        if(parseInt(id) >= 2)

        this.modalArrowPrev.addEventListener('click', e=>{

            this.projectsArr[parseInt(id)- 2].click()
        })

    }

    switchProjectsClick(id){
        switch(id){

            case "1":
                this.infoContentModal.innerHTML = `Landing Page responsiva para a Empresa de Reforma e Construção ASC.Costa Engenharia. Aplicação desenvolvida a fim de demonstrar os serviços realizados pela empreitera, legitimar a qualidade do produto e prospectar novos clientes. A página traz um destaque para o serviço de lavagem de fachada onde há maior detalhamento e destaque do processo.`
                this.tecnologyContentModal.innerHTML = 'WordPress, Elementor, Canva'
                this.dateContentModal.innerHTML = 'Mai, 2024'
                this.urlContentModal.innerHTML = 'https://ascostaengenharia.com.br/'
                this.urlContentModal.href = 'https://ascostaengenharia.com.br/'
                this.h2Modal.innerHTML = `ASC.COSTA ENGENHARIA `
                this.modalContainer.id = '1'
                this.projectVideo.src = ''
            break

            case "2":
                this.infoContentModal.innerHTML = `Landing Page responsiva para a Empresa de Reforma e Construção ASC.Costa Engenharia. Aplicação desenvolvida a fim de demonstrar os serviços realizados pela empreitera, legitimar a qualidade do produto e prospectar novos clientes. A página traz um destaque para o serviço de lavagem de fachada onde há maior detalhamento e destaque do processo.`
                this.tecnologyContentModal.innerHTML = 'WordPress, Elementor, Canva'
                this.dateContentModal.innerHTML = 'Jul, 2024'
                this.urlContentModal.innerHTML = 'https://endoflow.com.br/'
                this.urlContentModal.href = 'https://endoflow.com.br/'
                this.h2Modal.innerHTML = `CONVITE EVENTO - ENDOFLOW `
                this.modalContainer.id = '2'
                this.projectVideo.src = ''
            break

            case "3":
                this.infoContentModal.innerHTML = `Projeto de Sistema Web responsivo para uma Academia. Aplicação desenvolvida afim de consolidar meus conhecimentos em React.js, como React Hooks, Context API, Redux, Styled-Components, Ciclo de Vida, entre outros conceitos. O projeto conta com páginas interativas e reponsivas para navegação dos clietes da academia, exibindo o seus serviços como: modalidades, unidades próximas (consultas baseadas no cep utilizando BrasilAPI), planos e horários.`
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, React.js, Firebase, Canva'
                this.dateContentModal.innerHTML = 'Nov, 2023'
                this.urlContentModal.innerHTML = 'https://carloseduardo-silva.github.io/pump-gym/'
                this.urlContentModal.href = 'https://carloseduardo-silva.github.io/pump-gym/'
                this.h2Modal.innerHTML = `PUMP GYM `
                this.modalContainer.id = '2'
                this.projectVideo.src = ''
            break

            case "4":
                this.infoContentModal.innerHTML = `Projeto de Sistema Web responsivo para uma loja de roupas. Aplicação desenvolvida afim de consolidar meus conhecimentos em React.js, como React Hooks, Context API, Redux, Styled-Components, Ciclo de Vida, entre outros conceitos. O projeto conta com requisições assíncronas provenientes do Firebase (Banco de Dados do Google), as quais são responsáveis pela exibição e filtragem dos produtos.  `
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, React.js, Firebase, Canva'
                this.dateContentModal.innerHTML = 'Set, 2023'
                this.urlContentModal.innerHTML = 'PROJETO NÃO HOSPEDADO'
                this.urlContentModal.href = ''
                this.h2Modal.innerHTML = `CLSEED Shop `
                this.modalContainer.id = '3'
                this.projectVideo.src = '/videos/clseedShopProjectVideo.mp4'
            break
           

            case "5":
                this.infoContentModal.innerHTML = `Projeto desenvolvido para Barbearia Kadu Corte's residente em Guarujá-SP, a qual solicitou um sistema web responsivo para aplicações mobiles e que fosse interativo para os clientes. O sistema web conta tanto com uma ClientPage atrativa a qual expoem para os usuários as informações da barbearia e fornece um sistema de agendamento completo com validações, quanto uma AdminPage restringida por uma aplicação de login e senha, que armazena os dados dos clientes agendados, horarios marcados e disponíveis e muito mais.  `
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Redis, Canva, MySql'
                this.dateContentModal.innerHTML = 'Jun, 2023'
                this.urlContentModal.innerHTML = 'https://barbearia-kadu-cortes-client.vercel.app/html/index.html'
                this.urlContentModal.href = 'https://barbearia-kadu-cortes-client.vercel.app/html/index.html'
                this.h2Modal.innerHTML = `Barbearia Kadu Corte's `
                this.modalContainer.id = '4'
                this.projectVideo.src = '/videos/barbeariaKaduCortesProjectVideo.mp4'
            break

            case "6":
                this.infoContentModal.innerHTML = 'Projeto de um website para o Restaurante Bucéfalus residente em Guarujá-SP, desenvolvido utilizando em sua base JavaScript e Embedded JavaScript em conexão com o banco de dados MySql, suportando tanto uma ClientPage regidas pelo sistema de rotas CRUD, quanto uma AdminPage (dashboard) com restrição de acesso por usuário e senha e dados assíncronos.'
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Redis, Canva, MySql'
                this.dateContentModal.innerHTML = 'Ago, 2023'
                this.urlContentModal.innerHTML = 'https://restaurente-bucefalus-client.vercel.app/html/index.html'
                this.urlContentModal.href = 'https://restaurente-bucefalus-client.vercel.app/html/index.html'
                this.projectVideo.src = '/videos/restauranteBucefalusProjectVideo.mp4'
                this.h2Modal.innerHTML = ` Restaurante Bucéfalus `
                this.modalContainer.id = '5'
            break

            case "7":
                this.infoContentModal.innerHTML = 'Projeto desenvolvido para Empresa de Terceirização ViniPort Serviços residente em Diadema-SP, a qual solicitou um sistema web responsivo para aplicações mobiles e que fosse interativo para os clientes. Alêm da interface atrativa, também há todo o sistema de contato e solicitação de propostas o qual está emparelhado com uma AdminPage restringida com sistema de login e senha, que armazena não só todas as informações fornecidas pelos usuários mas também dados da empresa, como mensagens, propostas, funcionários e usuários. '
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Redis, Canva, MySql'
                this.dateContentModal.innerHTML = 'Set, 2023'
                this.urlContentModal.innerHTML = 'https://viniport-servicos-client.vercel.app/html/index.html'
                this.urlContentModal.href = 'https://viniport-servicos-client.vercel.app/html/index.html'
                this.h2Modal.innerHTML = 'ViniPort Serviços'
                this.modalContainer.id = '6'
                this.projectVideo.src = '/videos/viniPortProjectVideo.mp4'
               
            break


            case "8":
                this.infoContentModal.innerHTML = 'Projeto desenvolvido durante o curso de JavaScript Avançado da HCODEBR, o qual nos trouxe o desenvolvimento de um clone do Whatsapp, contanto com todas as suas funcionalidades programadas através do banco de dados Firebase(FireStore + RealTimeDataBase), em conjunto com o JavaScript e algumas libs como: APIs de audio, camera e video, Path, Navigator, etc.'
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Firebase'
                this.dateContentModal.innerHTML = 'Jul, 2023'
                this.urlContentModal.innerHTML = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-whatsapp-clone'
                this.urlContentModal.href = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-whatsapp-clone'
                this.h2Modal.innerHTML = `WhatsApp Clone `
                this.modalContainer.id = '7'
                this.projectVideo.src = '/videos/whatsappProjectVideo.mp4'
            break

            case "9":
                this.infoContentModal.innerHTML = 'Projeto desenvolvido essencialmente com JavaScript, afim de otimizar meus conhecimentos em sistemas de routes CRUD regido por uma API REST que consome dados do Banco de Dados Nedb, trazendo assincronidade ao website.'
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Nedb'
                this.dateContentModal.innerHTML = 'Jun, 2023'
                this.urlContentModal.innerHTML = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-usuarios-restapi'
                this.urlContentModal.href = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-usuarios-restapi'
                this.h2Modal.innerHTML = `Manage Users `
                this.modalContainer.id = '8'
                this.projectVideo.src = '/videos/userdashboardProjectVideo.mp4'
            break

            case "10":
                this.infoContentModal.innerHTML = 'Projeto desenvolvido durante o curso de JavaScript Avançado da HCODEBR, o qual nos trouxe o desenvolvimento de um clone do DropBox, contanto com todas as suas funcionalidades programadas através do banco de dados Firebase(FireStore + RealTimeDataBase), em conjunto com o JavaScript, por meio do sistema de routes CRUD e algumas libs como: Formidable, Path, Fs, etc.'
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Firebase'
                this.dateContentModal.innerHTML = 'Jun, 2023'
                this.urlContentModal.innerHTML = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-dropbox-clone'
                this.urlContentModal.href = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-dropbox-clone'
                this.h2Modal.innerHTML = `DropBox Clone `
                this.modalContainer.id = '9'
                this.projectVideo.src = '/videos/dropboxCloneProjectVideo.mp4'
            break

            case "11":
                this.infoContentModal.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eligendi earum quas maxime nam asperiores dolor nesciunt odio quasi aspernatur natus voluptatum, quae dignissimos fugiat dolorum qui nemo sit doloribus.'
                this.tecnologyContentModal.innerHTML = '...'
                this.dateContentModal.innerHTML = '...'
                this.urlContentModal.innerHTML = '...'
                this.urlContentModal.href = ''
                this.h2Modal.innerHTML = `NOVOS PROJETOS EM DESENVOLVIMENTO  `
                this.modalContainer.id = '10'
                this.projectVideo.src = '#'
            break
        }
    }


    projectsClick(){

        this.projectsArr.forEach(el => {

         el.addEventListener('click', e =>{

            this.showArrows()
            
            document.body.classList.add('transparent')
            this.navFixed.style.display = 'none'
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
            
            this.switchProjectsClick(id)
           
            this.arrowClick(id)
           

         })

            
        });
    }

    closeModal(){
        this.closeModalBtn.addEventListener('click', e =>{

            this.navFixed.style.display = 'block'
            this.divModal.style.display = 'none'
            this.modalContainer.id = 'none'
            document.body.classList.remove('transparent')
            this.hideArrows()

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

    experienceClick(){

        this.experienceArr.forEach( el => {

            el.addEventListener("click", e=>{

                let id = el.getAttribute("id");

                let selectedEl = document.querySelector(".active-exp");

                el.classList.add('active-exp');
                selectedEl.classList.remove('active-exp');

                this.switchExperienceClick(id);
            })

        })

    }

    switchExperienceClick(id){
        switch(id){

            case "prefeitura":
                
                this.expCargo.innerHTML = `testea`
                this.expTime.innerHTML = `testea`
                this.expLocal.innerHTML = `testea`
                this.expParagraph.innerHTML = `testea`

            break

            case "endolife":
                this.expCargo.innerHTML = `testea`
                this.expTime.innerHTML = `testea`
                this.expLocal.innerHTML = `testea`
                this.expParagraph.innerHTML = `testea`
            break

            case "mvconcept":
                this.expCargo.innerHTML = `testea`
                this.expTime.innerHTML = `testea`
                this.expLocal.innerHTML = `testea`
                this.expParagraph.innerHTML = `testea`
            break

            case "digital-max":
                this.expCargo.innerHTML = `testea`
                this.expTime.innerHTML = `testea`
                this.expLocal.innerHTML = `testea`
                this.expParagraph.innerHTML = `testea`
            break

        }
    }

  




}