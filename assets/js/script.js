document.getElementById("navbar")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("btn1").click();
    }
});

/* HTML */

function valor_navbar(){
    let navbar=document.getElementById("navbar").value;

    if (navbar == "navbar"){
        document.getElementById("htmlNav").classList.remove("hide");
        document.getElementById("navbar-html").classList.add("hide");
        document.getElementById("hero-html").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

function valor_hero(){
    let hero=document.getElementById("hero").value;

    if (hero == "hero"){
        document.getElementById("htmlHero").classList.remove("hide");
        document.getElementById("hero-html").classList.add("hide");
        document.getElementById("quienes-html").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

function valor_quienes(){
    let quienes=document.getElementById("quienes").value;

    if (quienes == "quienes"){
        document.getElementById("htmlQuienes").classList.remove("hide");
        document.getElementById("quienes-html").classList.add("hide");
        document.getElementById("serv-html").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

function valor_serv(){
    let serv=document.getElementById("serv").value;

    if (serv == "servicios"){
        document.getElementById("htmlServ").classList.remove("hide");
        document.getElementById("serv-html").classList.add("hide");
        document.getElementById("port-html").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

function valor_port(){
    let port=document.getElementById("port").value;

    if (port == "portfolio"){
        document.getElementById("htmlPortfolio").classList.remove("hide");
        document.getElementById("port-html").classList.add("hide");
        document.getElementById("cont-html").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

function valor_cont(){
    let cont=document.getElementById("cont").value;

    if (cont == "contacto"){
        document.getElementById("htmlContact").classList.remove("hide");
        document.getElementById("cont-html").classList.add("hide");
        document.getElementById("video-html").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

/* VIDEO SIZE */

function video_size(){
    let video=document.getElementById("video").value;

    if (video == "height"){
        document.getElementById("video-html").classList.add("hide");
        document.getElementById("css-html").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

/* LINK CSS */

function css_link(){
    let css=document.getElementById("css").value;

    if (css == "styles.css"){
        document.getElementById("css-html").classList.add("hide");
        document.getElementById("hero-video").classList.add("video-size");
        document.getElementById("img-html").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

/* IMG SIZE */

function img_size(){
    let img=document.getElementById("img").value;

    if (img == "width"){
        document.getElementById("img-html").classList.add("hide");
        document.getElementById("separador").classList.add("separador-size");
        document.getElementById("separador2").classList.add("separador-size");
        document.getElementById("imgdavid").classList.add("nosotros-size");
        document.getElementById("imgjuans").classList.add("nosotros-size");
        document.getElementById("imgjuanp").classList.add("nosotros-size");
        document.getElementById("imgjuani").classList.add("nosotros-size");
        document.getElementById("serv1").classList.add("serv-size");
        document.getElementById("serv2").classList.add("serv-size");
        document.getElementById("serv3").classList.add("serv-size");
        document.getElementById("serv4").classList.add("serv-size");
        document.getElementById("serv5").classList.add("serv-size");
        document.getElementById("serv6").classList.add("serv-size");
        document.getElementById("port1").classList.add("port-size");
        document.getElementById("port2").classList.add("port-size");
        document.getElementById("port3").classList.add("port-size");
        document.getElementById("port4").classList.add("port-size");
        document.getElementById("port5").classList.add("port-size");
        document.getElementById("port6").classList.add("port-size");
        document.getElementById("square1").classList.add("square-size");
        document.getElementById("square2").classList.add("square-size");
        document.getElementById("font-family").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

function font_family(){
    let ff=document.getElementById("ff").value;

    if (ff == "vcr_osd_monoregular"){
        document.getElementById("font-family").classList.add("hide");
        document.getElementById("a1").classList.add("font-family");
        document.getElementById("a2").classList.add("font-family");
        document.getElementById("a3").classList.add("font-family");
        document.getElementById("a4").classList.add("font-family");
        document.getElementById("h2-quienes").classList.add("font-family");
        document.getElementById("h4-david").classList.add("font-family");
        document.getElementById("h4-juans").classList.add("font-family");
        document.getElementById("h4-juanp").classList.add("font-family");
        document.getElementById("h4-juani").classList.add("font-family");
        document.getElementById("p-david").classList.add("font-family");
        document.getElementById("p-juans").classList.add("font-family");
        document.getElementById("p-juanp").classList.add("font-family");
        document.getElementById("p-juani").classList.add("font-family");
        document.getElementById("p-modelado").classList.add("font-family");
        document.getElementById("p-motion").classList.add("font-family");
        document.getElementById("p-ilus").classList.add("font-family");
        document.getElementById("p-vfx").classList.add("font-family");
        document.getElementById("p-branding").classList.add("font-family");
        document.getElementById("p-diseño").classList.add("font-family");
        document.getElementById("h2-portfolio").classList.add("font-family");
        document.getElementById("h2-contactanos").classList.add("font-family");
        document.getElementById("background-color").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

function background_color(){
    let bgc=document.getElementById("bgc").value;

    if (bgc == "dark-gray"){
        document.getElementById("background-color").classList.add("hide");
        document.getElementById("screen-2").style.backgroundColor = "#111111";
        document.getElementById("font-color").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

function font_color(){
    let fc = document.getElementById("fc").value;

    if (fc == "white"){
        document.getElementById("font-color").classList.add("hide");
        document.getElementById("screen-2").style.color = "#FFF";
        document.getElementById("button-styles").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

function button_styles(){
    let bs=document.getElementById("bs").value;

    if (bs == "cian, magenta"){
        document.getElementById("button-styles").classList.add("hide");
        document.querySelector("button").classList.add("portfolio-btn");
        document.getElementById("invert").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

function invert(){
    let inv=document.getElementById("inv").value;

    if (inv == "invert()"){
        document.getElementById("invert").classList.add("hide");
        document.getElementById("display").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

function display(){
    let dis=document.getElementById("dis").value;

    if (dis == "flex"){
        document.getElementById("display").classList.add("hide");
        document.getElementById("htmlNav").classList.add("hide");
        document.getElementById("htmlHero").classList.add("hide");
        document.getElementById("htmlQuienes").classList.add("hide");
        document.getElementById("htmlServ").classList.add("hide");
        document.getElementById("htmlPortfolio").classList.add("hide");
        document.getElementById("htmlContact").classList.add("hide");
        document.getElementById("nav-img").classList.remove("hide");
        document.getElementById("video-img").classList.remove("hide");
        document.getElementById("quienes-img").classList.remove("hide");
        document.getElementById("services-img").classList.remove("hide");
        document.getElementById("portfolio-img").classList.remove("hide");
        document.getElementById("contactanos-img").classList.remove("hide");
        document.getElementById("background").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

function background(){
    let back=document.getElementById("back").value;

    if (back == "background"){
        document.getElementById("background").classList.add("hide");
        document.getElementById("quienes-img").src = "assets/img/quienes-bg.png";
        document.getElementById("services-img").src = "assets/img/services-bg.png";
        document.getElementById("portfolio-img").src = "assets/img/portfolio-bg.png";
        document.getElementById("end-html").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}










