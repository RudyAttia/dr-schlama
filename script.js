let acu = document.getElementById("accueil").offsetTop-117
let cab = document.getElementById("cabinet").offsetTop-117
let pre = document.getElementById("prestations").offsetTop-117
let con = document.getElementById("contact").offsetTop-117
let paracab = document.getElementById("cabinet").offsetTop - window.innerHeight
let bipara = document.getElementById("cabinet")
window.onscroll=()=>{
    if(window.scrollY<=100){
        document.getElementById("bg-center").classList.add("hautpage");
        document.getElementById("bg-center").classList.remove("baspage")
    }
    else{
        document.getElementById("bg-center").classList.add("baspage")
        document.getElementById("bg-center").classList.remove("hautpage")
    }

    if(window.scrollY<= acu){
        noncouleur()
    }
    else if(window.scrollY<= cab){
        noncouleur()
        document.getElementById('naccueil').style.color = 'rgb(71, 134, 194)';
        // document.getElementById('naccueil').style.textDecoration = 'underline';
    }
    else if(window.scrollY<= pre){
        noncouleur()
        document.getElementById('ncabinet').style.color = 'rgb(71, 134, 194)';
        // document.getElementById('ncabinet').style.textDecoration = 'underline';
    }
    else if(window.scrollY<=con){
        noncouleur()
        document.getElementById('nprestations').style.color = 'rgb(71, 134, 194)';
        // document.getElementById('nprestations').style.textDecoration = 'underline';
    }
    else{
        noncouleur()
        document.getElementById('ncontact').style.color = 'rgb(71, 134, 194)';
        // document.getElementById('ncontact').style.textDecoration = 'underline';
    }

    if(window.scrollY>paracab && window.scrollY<pre){
        bipara.style.backgroundPositionY = (-window.scrollY + paracab)/6 + "px"
        a++
    }
}

function noncouleur(){
    document.getElementById('naccueil').style.color = 'rgb(78, 78, 78)';
    // document.getElementById('naccueil').style.textDecoration = 'none';
    document.getElementById('ncabinet').style.color = 'rgb(78, 78, 78)';
    // document.getElementById('ncabinet').style.textDecoration = 'none';
    document.getElementById('nprestations').style.color = 'rgb(78, 78, 78)';
    // document.getElementById('nprestations').style.textDecoration = 'none';
    document.getElementById('ncontact').style.color = 'rgb(78, 78, 78)';
    // document.getElementById('ncontact').style.textDecoration = 'none';
}

let linkpage = (ancre) =>{
    window.scrollTo(0,document.getElementById(ancre).offsetTop-115) 
}