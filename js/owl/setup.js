$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

function assistir(){
    window.open("https://youtu.be/ZHaokMTWgdY");
}

function descricaoa(){
    document.getElementById("descricao").innerHTML = "Da Marvel Studios, “Falcão e o Soldado Invernal” traz Anthony Mackie como Sam Wilson (Falcão) e Sebastian Stan como Bucky Barnes (Soldado Invernal). A dupla, que se reuniu nos momentos finais de “Vingadores: Ultimato”, embarca em uma aventura pelo mundo que colocará suas habilidades à prova – e sua paciência também.";
}

function descricaos(){
    document.getElementById("descricao").innerHTML = "";
}