
// inicializador da api das animacoes
AOS.init();

/*------------------------------------------------------------------------
let ConteudoText = document.getElementById("campo-text-id");


const reabilitacao = document.getElementById('reabilitacao');
const lentes = document.getElementById('lentes');
const coroas = document.getElementById('coroas');
const planejamento = document.getElementById('planejamento');





const TxtContent = (e) =>{
    if(reabilitacao){
        e.preventDefault()
        ConteudoText.textContent='Pessoas com ausência parcial ou total de dentes, tem a disposição diversas alternativas de tratamento. Seja através de prótese fixa, com ou sem implantes; seja seja através de prótese removível ou ainda composição das duas.'
    }

    
}

const lentContent = (e) =>{
    if(reabilitacao){
        e.preventDefault()
        ConteudoText.textContent='Um excelente recurso para quem quer corrigir de forma rápida, pequenas imperfeições de cor ou forma dos dentes. Consiste em finas lâminas cerâmicas coladas sobre os dentes, com um mínimo desgaste de estrutura dental.'
    }

    
}

const coroContent = (e) =>{
    if(reabilitacao){
        e.preventDefault()
        ConteudoText.textContent='Técnicas atuais através do processo CAD-CAM, permitem a confecção de coroas ou pontes fixas, sem a presença de metal, valorizando ainda mais a estética que você procura.'
    }

    
}

const planeContent = (e) =>{
    if(reabilitacao){
        e.preventDefault()
        ConteudoText.textContent='Através de processamentos digitais, impressão 3D, tomografias computadorizadas e escaneamentos, é possível aumentar a previsibilidade dos tratamentos.'
    }

    
}

reabilitacao.addEventListener('mouseover', TxtContent)
lentes.addEventListener('mouseover', lentContent)
coroas.addEventListener('mouseover', coroContent)
planejamento.addEventListener('mouseover', planeContent)


/*----------------------------------------------------------------------*/

// função infinita de pegar a foto e botar como background na home 

//------------ home img ------------------------

const lista = [
    './assets/img/sio.jpeg', './assets/img/ele.jpeg',
    './assets/img/logo.jpeg'
]





function nos(){
    const aleatorio = Math.floor(Math.random()* lista.length);
    const tudo = lista[aleatorio]

    const imgCreated = document.createElement('img');
    //imgCreated.classList.add('img-geraton')


    //<------------ Style -------------------------->

    
    //imgCreated.style.zIndex= '-1';
   


    //<---------------------------------------------->  

    
    const background = document.getElementById('header-main');
    background.classlist=imgCreated
    
    
    background.style.backgroundSize='cover'
    background.style.width='100%'
    background.style.height='100%'
    background.style.backgroundRepeat='no-repeat'
    background.style.zIndex='-1'
    background.style.backgroundPosition='center'
    background.style.top='0'
    background.style.left='0'
    
    
    background.style.backgroundImage=`linear-gradient(to right, rgba(6,18,30,0.1) , #466e9b 100%), url(${tudo})`
}

setInterval(()=>{
    
    nos()
    
},3000)
//---------------------------------------------------------------------------------------------------




// checando o slide e deixando em um loop infinito

let contador = 1;

setInterval(()=>{
    document.getElementById('slide' + contador).checked = true;
    contador++;

    if(contador > 5){
        contador = 1;
        
    }

}, 3000)

/*------------------ Contact Us ------------------------*/

const contact = document.querySelector('.contato');



contact.append(inp);
console.log(contact)
