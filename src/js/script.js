
// ARRAY DE IMAGENS
let imagens =["/src/assets/Carro4.png","/src/assets/Carro5.png","/src/assets/Carro8.png"];
// POSIÇÃO QUE VAI INICIAR AS IMAGENS
let index=0;
// TEMPO PARA TROCAR AS IMAGENS
let tempo = 3000; // 3 segundos

// FUNÇÃO DO SLIDESHOW
function SlideShow(){
    // DOM - PEGA O ID E PASSA O CAMINHO DAS IMAGENS
    document.getElementById("imgBanner").src=imagens[index];
    //INCREMENTO
    index++;

    //ESTRUTURA CONDICIONAL IF 
    if(index == imagens.length){
        index=0;
    }
    //METÓDO SETTIMEOUT PARA EXECUTAR A FUNÇÃO E CHAMAR O TEMPO
    setTimeout('SlideShow()',tempo)
}
// EXECUTANDO A FUNÇÃO 
SlideShow();


const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener('click',()=>{
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open")
})


