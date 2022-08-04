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
        document.getElementById("video-html1").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

/* VIDEO SIZE */

function video_size1(){
    let video=document.getElementById("video").value;

    if (video == "video"){
        document.getElementById("video-html1").classList.add("hide");
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
        document.getElementById("video-html2").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}

/* VIDEO SIZE 2 */

function video_size2(){
    let video=document.getElementById("video").value;

    if (video == "video"){
        document.getElementById("video-html2").classList.add("hide");
        document.getElementById("hero-video").classList.add("video-size");
    } else {
        alert("El código está mal");
    }
}






