
function valor_navbar(){
    let navbar=document.getElementById("navbar").value;

    if (navbar == "navbar"){
        document.getElementById("htmlNav").classList.remove("hide");
        document.getElementById("htmlNav").classList.add("show");
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
        document.getElementById("htmlHero").classList.add("show");
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
        document.getElementById("htmlQuienes").classList.add("show");
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
        document.getElementById("htmlServ").classList.add("show");
        document.getElementById("serv-html").classList.add("hide");
        document.getElementById("end-html").classList.remove("hide");
    } else {
        alert("El código está mal");
    }
}






