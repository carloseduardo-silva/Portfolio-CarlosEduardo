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
        this.projectVideo = document.querySelector('#video-src')
        this.experienceArr = document.querySelectorAll(".title-exp")
        this.expCargo = document.querySelector("#exp-cargo")
        this.expParagraph = document.querySelector("#exp-paragraph")
        this.expTime = document.querySelector("#exp-time")
        this.expLocal = document.querySelector("#exp-local")
        this.imgContainer = document.querySelector("#img-container")
        this.videoContainer = document.querySelector("#video-container")
        
        

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
                this.infoContentModal.innerHTML = `Webdesign e desenvolvimento de uma Loja Virtual (e-commerce) para loja de roupas femininas MV CONCEPT, fui responsável pela criação dos contéudos, estilos, interatividades, banners, elementos visuais, além de toda configuração do sistema de compra e venda de produtos, fretes, brindes e promoções.`
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, WordPress, Elementor, Canva'
                this.dateContentModal.innerHTML = 'Set, 2024'
                this.urlContentModal.innerHTML = 'https://mvconcept.com.br/'
                this.urlContentModal.href = 'https://mvconcept.com.br/'
                this.h2Modal.innerHTML = `MV Concept`
                this.imgContainer.classList.remove("hide")
                this.videoContainer.classList.add("hide")
                this.modalContainer.id = '1'
                this.imgContainer.src = '/images/projects-mvconcept.png'
            break

            case "2":
                this.infoContentModal.innerHTML = `Site institucional para a empresa de despachante documentalista Grupo LL, a principal finalidade de um site instituicional é informar o cliente/usuário sobre quais são os principais serviços, vantagens e confiabilidade que ele pode ter em determinado produto. Fui responsável pela criação dos contéudos, webdesign, estilos, interatividades, banners, elementos visuais, além da configuração do sistema de depoimentos por e-mail.`
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, WordPress, Elementor, Canva'
                this.dateContentModal.innerHTML = 'Out, 2024'
                this.urlContentModal.innerHTML = 'https://llgrupo.com.br/'
                this.urlContentModal.href = 'https://llgrupo.com.br/'
                this.h2Modal.innerHTML = `Grupo LL `
                this.imgContainer.classList.remove("hide")
                this.videoContainer.classList.add("hide")
                this.modalContainer.id = '2'
                this.imgContainer.src = '/images/projects-grupoll.png'
            break

            case "3":
                this.infoContentModal.innerHTML = `Sistema administrativo para o gerenciamento de Controle de Frotas da Prefeitura Municipal de Santo André, a aplicação é responsável pelo cadastro e edição de motoristas e veículos, contempla um sistema de agendamentos de viagens operadas e admitidas por um administrador, além de um sistema de relatórios e gráficos para o acompanhamento do desempenho da frota. O sistema foi desenvolvido com o intuito de otimizar o tempo e a eficiência dos processos administrativos das frotas da prefeitura.`
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, ASP.NET, C#, SQL Server, Bootstrap, Python, FASTAPI'
                this.dateContentModal.innerHTML = 'Jan, 2025'
                this.urlContentModal.innerHTML = 'http://egovdes/controlefrotas/admin/'
                this.urlContentModal.href = 'http://egovdes/controlefrotas/admin/'
                this.h2Modal.innerHTML = `Endolife `
                this.imgContainer.classList.remove("hide")
                this.videoContainer.classList.add("hide")
                this.modalContainer.id = '3'
                this.imgContainer.src = '/images/projects-frotas.png'
            break


           
            case "4":
                this.infoContentModal.innerHTML = `Landing Page responsiva para a Empresa de Reforma e Construção ASC.Costa Engenharia. Aplicação desenvolvida a fim de demonstrar os serviços realizados pela empreitera, legitimar a qualidade do produto e prospectar novos clientes. A página traz um destaque para o serviço de lavagem de fachada onde há maior detalhamento e destaque do processo.`
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, WordPress, Elementor, Canva'
                this.dateContentModal.innerHTML = 'Mai, 2024'
                this.urlContentModal.innerHTML = 'https://www.ascostaengenharia.com.br/'
                this.urlContentModal.href = 'https://www.ascostaengenharia.com.br/'
                this.h2Modal.innerHTML = `ASC.COSTA Engenharia `
                this.imgContainer.classList.remove("hide")
                this.videoContainer.classList.add("hide")
                this.modalContainer.id = '4'
                this.imgContainer.src = '/images/projects-ascosta.png'
            break

            case "5":
                this.infoContentModal.innerHTML = `Site institucional para a Dra. Amanda Nunes, a principal finalidade de um site instituicional é informar o cliente/usuário sobre quais são os principais serviços, vantagens e confiabilidade que ele pode ter nos serviços aplicados pela Dra. Fui responsável pela criação dos estilos, interatividades, banners e o webdesign, além da configuração do sistema de agendamentos por e-mail.`
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, WordPress, Elementor, Canva'
                this.dateContentModal.innerHTML = 'Out, 2024'
                this.urlContentModal.innerHTML = 'https://dramandanunes.com.br/'
                this.urlContentModal.href = 'https://dramandanunes.com.br/'
                this.h2Modal.innerHTML = `Dra. Amanda Nunes`
                this.imgContainer.classList.remove("hide")
                this.videoContainer.classList.add("hide")
                this.modalContainer.id = '5'
                this.imgContainer.src = '/images/projects-dramanda.png'
            break

            case "6":
                this.infoContentModal.innerHTML = `Site institucional para a empresa healthtech Endolife, a principal finalidade de um site instituicional é informar o cliente/usuário sobre quais são os principais serviços, vantagens e confiabilidade que ele pode ter em determinado produto. Fui responsável pela criação dos estilos, interatividades, banners, além de idealizar o webdesign das páginas.`
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, WordPress, Elementor, Canva'
                this.dateContentModal.innerHTML = 'Ago, 2024'
                this.urlContentModal.innerHTML = 'https://endolife.app/'
                this.urlContentModal.href = 'https://endolife.app/'
                this.h2Modal.innerHTML = `Endolife `
                this.imgContainer.classList.remove("hide")
                this.videoContainer.classList.add("hide")
                this.modalContainer.id = '6'
                this.imgContainer.src = '/images/projects-endolife.png'
            break


            case "7":
                this.infoContentModal.innerHTML = `Projeto de Sistema Web responsivo para uma Academia. Aplicação desenvolvida afim de consolidar meus conhecimentos em React.js, como React Hooks, Context API, Redux, Styled-Components, Ciclo de Vida, entre outros conceitos. O projeto conta com páginas interativas e reponsivas para navegação dos clietes da academia, exibindo o seus serviços como: modalidades, unidades próximas (consultas baseadas no cep utilizando BrasilAPI), planos e horários.`
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, React.js, Firebase, Canva'
                this.dateContentModal.innerHTML = 'Nov, 2023'
                this.urlContentModal.innerHTML = 'https://carloseduardo-silva.github.io/pump-gym/'
                this.urlContentModal.href = 'https://carloseduardo-silva.github.io/pump-gym/'
                this.h2Modal.innerHTML = `PUMP GYM `
                this.imgContainer.classList.remove("hide")
                this.videoContainer.classList.add("hide")
                this.modalContainer.id = '7'
                this.imgContainer.src = '/images/projects-pumpgyn.png'
            break

            case "8":
                this.infoContentModal.innerHTML = `Projeto de Sistema Web responsivo para uma loja de roupas. Aplicação desenvolvida afim de consolidar meus conhecimentos em React.js, como React Hooks, Context API, Redux, Styled-Components, Ciclo de Vida, entre outros conceitos. O projeto conta com requisições assíncronas provenientes do Firebase (Banco de Dados do Google), as quais são responsáveis pela exibição e filtragem dos produtos.  `
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, React.js, Firebase, Canva'
                this.dateContentModal.innerHTML = 'Set, 2023'
                this.urlContentModal.innerHTML = 'https://clsed-shop.web.app/'
                this.urlContentModal.href = 'https://clsed-shop.web.app/'
                this.h2Modal.innerHTML = `CLSEED Shop `
                this.modalContainer.id = '8'
                this.imgContainer.classList.remove("hide")
                this.videoContainer.classList.add("hide")
                this.imgContainer.src = '/images/img-clseed.png'
            break
           

            case "9":
                this.infoContentModal.innerHTML = `Projeto desenvolvido para Barbearia Kadu Corte's residente em Guarujá-SP, a qual solicitou um sistema web responsivo para aplicações mobiles e que fosse interativo para os clientes. O sistema conta tanto com uma ClientPage atrativa a qual expoem para os usuários as informações da barbearia e fornece um sistema de agendamento completo com validações, quanto uma AdminPage restringida por uma validação de login e senha, que armazena os dados dos clientes agendados, horarios marcados e muito mais.  `
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Redis, Canva, MySql'
                this.dateContentModal.innerHTML = 'Jun, 2023'
                this.urlContentModal.innerHTML = 'https://barbearia-kadu-cortes-client.vercel.app/html/index.html'
                this.urlContentModal.href = 'https://barbearia-kadu-cortes-client.vercel.app/html/index.html'
                this.h2Modal.innerHTML = `Barbearia Kadu Corte's `
                this.modalContainer.id = '9'
                this.imgContainer.classList.remove("hide")
                this.videoContainer.classList.add("hide")
                this.imgContainer.src = '/images/projects-barbeariakadu.png'
            break

            case "10":
                this.infoContentModal.innerHTML = 'Projeto de um website para o Restaurante Bucéfalus residente em Guarujá-SP, desenvolvido utilizando em sua base JavaScript, Embedded JavaScript em conjunto com o Boostrap. Há também a conexão com o banco de dados MySql, suportando tanto uma ClientPage regida pelo sistema de rotas CRUD, quanto uma AdminPage (dashboard) com restrição de acesso por usuário e senha.'
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Redis, Canva, MySql'
                this.dateContentModal.innerHTML = 'Ago, 2023'
                this.urlContentModal.innerHTML = 'https://restaurente-bucefalus-client.vercel.app/html/index.html'
                this.urlContentModal.href = 'https://restaurente-bucefalus-client.vercel.app/html/index.html'
                this.projectVideo.src = '/videos/restauranteBucefalusProjectVideo.mp4'
                this.h2Modal.innerHTML = ` Restaurante Bucéfalus `
                this.imgContainer.classList.remove("hide")
                this.videoContainer.classList.add("hide")
                this.modalContainer.id = '10'
                this.imgContainer.src = '/images/projects-bucefalus.png'
            break

            case "11":
                this.infoContentModal.innerHTML = 'Projeto desenvolvido para Empresa de Terceirização ViniPort Serviços residente em Diadema-SP, a qual solicitou um sistema web responsivo para aplicações mobiles e que fosse interativo para os clientes. Alêm da interface atrativa, também há todo o sistema de contato e solicitação de propostas o qual está emparelhado com uma AdminPage restringida com sistema de login e senha, que armazena não só todas as informações fornecidas pelos usuários mas também dados da empresa, como mensagens, propostas, funcionários e usuários. '
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Redis, Canva, MySql'
                this.dateContentModal.innerHTML = 'Set, 2023'
                this.urlContentModal.innerHTML = 'https://viniport-servicos-client.vercel.app/html/index.html'
                this.urlContentModal.href = 'https://viniport-servicos-client.vercel.app/html/index.html'
                this.h2Modal.innerHTML = 'ViniPort Serviços'
                this.modalContainer.id = '11'
                this.imgContainer.classList.add("hide")
                this.videoContainer.classList.remove("hide")
                this.projectVideo.src = '/videos/viniPortProjectVideo.mp4'
               
            break


            case "12":
                this.infoContentModal.innerHTML = 'Projeto desenvolvido durante o curso de JavaScript Avançado da HCODEBR, o qual nos trouxe o desenvolvimento de um clone do Whatsapp, contanto com todas as suas funcionalidades programadas através do banco de dados Firebase(FireStore + RealTimeDataBase), em conjunto com o JavaScript e algumas libs como: APIs de audio, camera e video, Path, Navigator, etc.'
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Firebase'
                this.dateContentModal.innerHTML = 'Jul, 2023'
                this.urlContentModal.innerHTML = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-whatsapp-clone'
                this.urlContentModal.href = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-whatsapp-clone'
                this.h2Modal.innerHTML = `WhatsApp Clone `
                this.modalContainer.id = '12'
                this.imgContainer.classList.add("hide")
                this.videoContainer.classList.remove("hide")
                this.projectVideo.src = '/videos/whatsappProjectVideo.mp4'
            break

            case "13":
                this.infoContentModal.innerHTML = 'Projeto desenvolvido essencialmente com JavaScript, afim de otimizar meus conhecimentos em sistemas de routes CRUD regido por uma API REST que consome dados do Banco de Dados Nedb, trazendo assincronidade ao website.'
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Nedb'
                this.dateContentModal.innerHTML = 'Jun, 2023'
                this.urlContentModal.innerHTML = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-usuarios-restapi'
                this.urlContentModal.href = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-usuarios-restapi'
                this.h2Modal.innerHTML = `Manage Users `
                this.modalContainer.id = '13'
                this.imgContainer.classList.add("hide")
                this.videoContainer.classList.remove("hide")
                this.projectVideo.src = '/videos/userdashboardProjectVideo.mp4'
            break

            case "14":
                this.infoContentModal.innerHTML = 'Projeto desenvolvido durante o curso de JavaScript Avançado da HCODEBR, o qual nos trouxe o desenvolvimento de um clone do DropBox, contanto com todas as suas funcionalidades programadas através do banco de dados Firebase(FireStore + RealTimeDataBase), em conjunto com o JavaScript, por meio do sistema de routes CRUD e algumas libs como: Formidable, Path, Fs, etc.'
                this.tecnologyContentModal.innerHTML = 'HTML5, CSS3, JavaScript, Firebase'
                this.dateContentModal.innerHTML = 'Jun, 2023'
                this.urlContentModal.innerHTML = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-dropbox-clone'
                this.urlContentModal.href = 'https://github.com/carloseduardo-silva/curso-javascript-projeto-dropbox-clone'
                this.h2Modal.innerHTML = `DropBox Clone `
                this.modalContainer.id = '14'
                this.imgContainer.classList.add("hide")
                this.videoContainer.classList.remove("hide")
                this.projectVideo.src = '/videos/dropboxCloneProjectVideo.mp4'
            break

            case "15":
                this.infoContentModal.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eligendi earum quas maxime nam asperiores dolor nesciunt odio quasi aspernatur natus voluptatum, quae dignissimos fugiat dolorum qui nemo sit doloribus.'
                this.tecnologyContentModal.innerHTML = '...'
                this.dateContentModal.innerHTML = '...'
                this.urlContentModal.innerHTML = '...'
                this.urlContentModal.href = ''
                this.h2Modal.innerHTML = `NOVOS PROJETOS EM DESENVOLVIMENTO  `
                this.modalContainer.id = '15'
                this.imgContainer.classList.remove("hide")
                this.videoContainer.classList.add("hide")
                this.imgContainer.src = '#'
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
            
            window.location.hash = '#';

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
            window.location.hash = 'projects';
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
                if(selectedEl){
                    selectedEl.classList.remove('active-exp');
                }
                

                this.switchExperienceClick(id);
            })

        })

    }

    switchExperienceClick(id){
        switch(id){

            case "prefeitura":
                
                this.expCargo.innerHTML = `Desenvolvedor Frontend`
                this.expTime.innerHTML = `Mai 2024 - Atualmente`
                this.expLocal.innerHTML = `Prefeitura Municipal de Santo André`
                this.expParagraph.innerHTML = ` Responsável por operar na criação do conteúdo, estilos, layout, design interativo, funcionalidades e integrações com API dos Sistemas Web da Prefeitura de Santo André. Suporte e manutenção de bugs dos sites apresentados pelos setores da saúde, RH, segurança, frotas, além da vivência e prática atuando sob Metodologias Ágeis (SCRUM e KANBAN).`

            break

            case "endolife":
                this.expCargo.innerHTML = `Web Developer e UI Designer`
                this.expTime.innerHTML = `Fev 2024 - Ago 2024`
                this.expLocal.innerHTML = `Endolife HealthTech`
                this.expParagraph.innerHTML = `Webdesign e desenvolvimento de Site Intitucional + Landing Pages de alta conversão para empresa, incluindo a criação do conteúdo, estilos, interatividades, layout e design não só interativo do site, mas também responsivo sendo adaptativo para tablets e celulares. Para design e criação do material visual utilizei softwares como: Photoshop, Canva, Figma. `
            break

            case "mvconcept":
                this.expCargo.innerHTML = `Web Developer e UI Designer`
                this.expTime.innerHTML = `Mai 2024 - Set 2024`
                this.expLocal.innerHTML = `MV Concept`
                this.expParagraph.innerHTML = `Webdesign e desenvolvimento de uma Loja Virtual (e-commerce) para loja de roupas femininas, fui responsável pela criação dos contéudos, estilos, interatividades, banners, elementos visuais, além de toda configuração do sistema de compra e venda de produtos, fretes, brindes e promoções.`
            break

            case "digital-max":
                this.expCargo.innerHTML = `Auxiliar de Informática`
                this.expTime.innerHTML = `Jul 2019 - Dez 2019`
                this.expLocal.innerHTML = `Digital Max`
                this.expParagraph.innerHTML = `Primeira experiência profissional na área, onde era responsável por auxiliar os novos alunos nas aulas de informática e computação, preparação do material das aulas de informática e suporte aos professores durante os plantões de dúvidas. Tive contato com tecnologias como: Pacote Office, Excel, PowerPoint, Word, Sistema Operacional Linux`
            break

        }
    }

  




}