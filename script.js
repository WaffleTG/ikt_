function roles(a){
    var top = document.querySelector("#top")
    var jng = document.querySelector("#jg")
    var mid = document.querySelector("#mid")
    var bot = document.querySelector("#bot")
    var sup = document.querySelector("#sup")  

    var topc = document.querySelector(".champ_row_0")
    var jngc = document.querySelector(".champ_row_1")
    var midc = document.querySelector(".champ_row_2")
    var botc = document.querySelector(".champ_row_3")
    var supc = document.querySelector(".champ_row_4")  

    switch(a) {
        case 0:
            if(top.classList.contains("active") == true){
                break;
            } else {
                top.classList.add("active");
                jng.classList.remove("active");
                mid.classList.remove("active");
                bot.classList.remove("active");
                sup.classList.remove("active");

                topc.classList.remove("hidden");
                jngc.classList.add("hidden");
                midc.classList.add("hidden");
                botc.classList.add("hidden");
                supc.classList.add("hidden");

                break;
            }
        case 1:
            if(jng.classList.contains("active ")== true){
                break;
            } else {
                top.classList.remove("active");
                jng.classList.add("active");
                mid.classList.remove("active");
                bot.classList.remove("active");
                sup.classList.remove("active");

                topc.classList.add("hidden");
                jngc.classList.remove("hidden");
                midc.classList.add("hidden");
                botc.classList.add("hidden");
                supc.classList.add("hidden");

                break;
            }
        case 2:
            if(mid.classList.contains("active") == true){
                break;
            } else {
                top.classList.remove("active");
                jng.classList.remove("active");
                mid.classList.add("active");
                bot.classList.remove("active");
                sup.classList.remove("active");

                topc.classList.add("hidden");
                jngc.classList.add("hidden");
                midc.classList.remove("hidden");
                botc.classList.add("hidden");
                supc.classList.add("hidden");


                break;
            }
        case 3:
            if(bot.classList.contains("active") == true){
                break;
            } else {
                top.classList.remove("active");
                jng.classList.remove("active");
                mid.classList.remove("active");
                bot.classList.add("active");
                sup.classList.remove("active");

                topc.classList.add("hidden");
                jngc.classList.add("hidden");
                midc.classList.add("hidden");
                botc.classList.remove("hidden");
                supc.classList.add("hidden");

                break;
            }
        case 4:
        if(sup.classList.contains("active") == true){
            break;
        } else {
            top.classList.remove("active");
            jng.classList.remove("active");
            mid.classList.remove("active");
            bot.classList.remove("active");
            sup.classList.add("active");

            topc.classList.add("hidden");
            jngc.classList.add("hidden");
            midc.classList.add("hidden");
            botc.classList.add("hidden");
            supc.classList.remove("hidden");
            break;
        }
    }
}

function runes_init(){
    
}

function togglenav(){
    var nav = document.getElementById("sidenav")
    if(nav.style.width = "150px"){
        document.getElementById("sidebutton").style.display = "block";
        nav.style.width = "0px";
    } else{
        nav.style.width = "150px";
        document.getElementById("sidebutton").style.display = "block";
    }
}