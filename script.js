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

var family = 1;
var keystone = 1;
var row1 = 2;
var row2 = 3;
var row3 = 4;
var secondary = 5;
var srow1 = 3;
var srow2 = 3;
var srow3 = null;
var shard1 = 2;
var shard2 = 1;
var shard3 = 2;

function setsrow1(a){
    switch(a){
        case 1:
            if(document.getElementById("srow1").children[0].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("srow1").children[0].classList.add("equipped");
                document.getElementById("srow1").children[1].classList.remove("equipped");
                document.getElementById("srow1").children[2].classList.remove("equipped");
                break;
            }
        case 2:
            if(document.getElementById("srow1").children[1].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("srow1").children[1].classList.add("equipped");
                document.getElementById("srow1").children[0].classList.remove("equipped");
                document.getElementById("srow1").children[2].classList.remove("equipped");
                break;
            }
        case 3:
            if(document.getElementById("srow1").children[2].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("srow1").children[2].classList.add("equipped");
                document.getElementById("srow1").children[0].classList.remove("equipped");
                document.getElementById("srow1").children[1].classList.remove("equipped");
                break;
            }
    }
}

function setsrow2(a){
    switch(a){
        case 1:
            if(document.getElementById("srow2").children[0].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("srow2").children[0].classList.add("equipped");
                document.getElementById("srow2").children[1].classList.remove("equipped");
                document.getElementById("srow2").children[2].classList.remove("equipped");
                break;
            }
        case 2:
            if(document.getElementById("srow2").children[1].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("srow2").children[1].classList.add("equipped");
                document.getElementById("srow2").children[0].classList.remove("equipped");
                document.getElementById("srow2").children[2].classList.remove("equipped");
                break;
            }
        case 3:
            if(document.getElementById("srow2").children[2].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("srow2").children[2].classList.add("equipped");
                document.getElementById("srow2").children[0].classList.remove("equipped");
                document.getElementById("srow2").children[1].classList.remove("equipped");
                break;
            }
    }
}

function setsrow3(a){
    switch(a){
        case 1:
            if(document.getElementById("srow3").children[0].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("srow3").children[0].classList.add("equipped");
                document.getElementById("srow3").children[1].classList.remove("equipped");
                document.getElementById("srow3").children[2].classList.remove("equipped");
                document.getElementById("srow3").children[3].classList.remove("equipped");
                break;
            }
        case 2:
            if(document.getElementById("srow3").children[1].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("srow3").children[1].classList.add("equipped");
                document.getElementById("srow3").children[0].classList.remove("equipped");
                document.getElementById("srow3").children[2].classList.remove("equipped");
                document.getElementById("srow3").children[3].classList.remove("equipped");
                break;
            }
        case 3:
            if(document.getElementById("srow3").children[2].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("srow3").children[2].classList.add("equipped");
                document.getElementById("srow3").children[0].classList.remove("equipped");
                document.getElementById("srow3").children[1].classList.remove("equipped");
                document.getElementById("srow3").children[3].classList.remove("equipped");
                break;
            }
        case 4:
            if(document.getElementById("srow3").children[3].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("srow3").children[3].classList.add("equipped");
                document.getElementById("srow3").children[0].classList.remove("equipped");
                document.getElementById("srow3").children[1].classList.remove("equipped");
                document.getElementById("srow3").children[2].classList.remove("equipped");
                break;
            }
    }
}

function setshard1(a){
    switch(a){
        case 1:
            if(document.getElementById("shard1").children[0].classList.contains("sequipped")==false){
                break;
            } else {
                document.getElementById("shard1").children[1].classList.add("sequipped");
                document.getElementById("shard1").children[2].classList.add("sequipped");
                document.getElementById("shard1").children[0].classList.remove("sequipped");
                break;
            }
        case 2:
            if(document.getElementById("shard1").children[1].classList.contains("sequipped")==false){
                break;
            } else {
                document.getElementById("shard1").children[0].classList.add("sequipped");
                document.getElementById("shard1").children[2].classList.add("sequipped");
                document.getElementById("shard1").children[1].classList.remove("sequipped");
                break;
            }
        case 3:
            if(document.getElementById("shard1").children[2].classList.contains("sequipped")==false){
                break;
            } else {
                document.getElementById("shard1").children[1].classList.add("sequipped");
                document.getElementById("shard1").children[0].classList.add("sequipped");
                document.getElementById("shard1").children[2].classList.remove("sequipped");
                break;
            }
            
    }
}

function setshard2(a){
    switch(a){
        case 1:
            if(document.getElementById("shard2").children[0].classList.contains("sequipped")==false){
                break;
            } else {
                document.getElementById("shard2").children[1].classList.add("sequipped");
                document.getElementById("shard2").children[2].classList.add("sequipped");
                document.getElementById("shard2").children[0].classList.remove("sequipped");
                break;
            }
        case 2:
            if(document.getElementById("shard2").children[1].classList.contains("sequipped")==false){
                break;
            } else {
                document.getElementById("shard2").children[0].classList.add("sequipped");
                document.getElementById("shard2").children[2].classList.add("sequipped");
                document.getElementById("shard2").children[1].classList.remove("sequipped");
                break;
            }
        case 3:
            if(document.getElementById("shard2").children[2].classList.contains("sequipped")==false){
                break;
            } else {
                document.getElementById("shard2").children[1].classList.add("sequipped");
                document.getElementById("shard2").children[0].classList.add("sequipped");
                document.getElementById("shard2").children[2].classList.remove("sequipped");
                break;
            }
            
    }
}

function setshard3(a){
    switch(a){
        case 1:
            if(document.getElementById("shard3").children[0].classList.contains("sequipped")==false){
                break;
            } else {
                document.getElementById("shard3").children[1].classList.add("sequipped");
                document.getElementById("shard3").children[2].classList.add("sequipped");
                document.getElementById("shard3").children[0].classList.remove("sequipped");
                break;
            }
        case 2:
            if(document.getElementById("shard3").children[1].classList.contains("sequipped")==false){
                break;
            } else {
                document.getElementById("shard3").children[0].classList.add("sequipped");
                document.getElementById("shard3").children[2].classList.add("sequipped");
                document.getElementById("shard3").children[1].classList.remove("sequipped");
                break;
            }
        case 3:
            if(document.getElementById("shard3").children[2].classList.contains("sequipped")==false){
                break;
            } else {
                document.getElementById("shard3").children[1].classList.add("sequipped");
                document.getElementById("shard3").children[0].classList.add("sequipped");
                document.getElementById("shard3").children[2].classList.remove("sequipped");
                break;
            }
            
    }
}

function setkeystone(a){
    // document.getElementsByClassName("keystones");
    switch(a){
        case 1:
            if(document.getElementsByClassName("keystones")[0].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementsByClassName("keystones")[0].classList.add("equipped");
                document.getElementsByClassName("keystones")[1].classList.remove("equipped");
                document.getElementsByClassName("keystones")[2].classList.remove("equipped");
                document.getElementsByClassName("keystones")[3].classList.remove("equipped");
                break;
            }
        case 2:
            if(document.getElementsByClassName("keystones")[1].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementsByClassName("keystones")[1].classList.add("equipped");
                document.getElementsByClassName("keystones")[2].classList.remove("equipped");
                document.getElementsByClassName("keystones")[3].classList.remove("equipped");
                document.getElementsByClassName("keystones")[0].classList.remove("equipped");
                break;
            }
        case 3:
            if(document.getElementsByClassName("keystones")[2].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementsByClassName("keystones")[2].classList.add("equipped");
                document.getElementsByClassName("keystones")[0].classList.remove("equipped");
                document.getElementsByClassName("keystones")[1].classList.remove("equipped");
                document.getElementsByClassName("keystones")[3].classList.remove("equipped");
                break;
            }
        case 4:
            if(document.getElementsByClassName("keystones")[3].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementsByClassName("keystones")[3].classList.add("equipped");
                document.getElementsByClassName("keystones")[0].classList.remove("equipped");
                document.getElementsByClassName("keystones")[1].classList.remove("equipped");
                document.getElementsByClassName("keystones")[2].classList.remove("equipped");
                break;
            }
    }
}

function setrow1(a){
    switch(a){
        case 1:
            if(document.getElementById("row1").children[0].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("row1").children[0].classList.add("equipped");
                document.getElementById("row1").children[1].classList.remove("equipped");
                document.getElementById("row1").children[2].classList.remove("equipped");
                break;
            }
        case 2:
            if(document.getElementById("row1").children[1].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("row1").children[1].classList.add("equipped");
                document.getElementById("row1").children[0].classList.remove("equipped");
                document.getElementById("row1").children[2].classList.remove("equipped");
                break;
            }
        case 3:
            if(document.getElementById("row1").children[2].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("row1").children[2].classList.add("equipped");
                document.getElementById("row1").children[0].classList.remove("equipped");
                document.getElementById("row1").children[1].classList.remove("equipped");
                break;
            }
    }
}

function setrow2(a){
    switch(a){
        case 1:
            if(document.getElementById("row2").children[0].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("row2").children[0].classList.add("equipped");
                document.getElementById("row2").children[1].classList.remove("equipped");
                document.getElementById("row2").children[2].classList.remove("equipped");
                break;
            }
        case 2:
            if(document.getElementById("row2").children[1].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("row2").children[1].classList.add("equipped");
                document.getElementById("row2").children[0].classList.remove("equipped");
                document.getElementById("row2").children[2].classList.remove("equipped");
                break;
            }
        case 3:
            if(document.getElementById("row2").children[2].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("row2").children[2].classList.add("equipped");
                document.getElementById("row2").children[0].classList.remove("equipped");
                document.getElementById("row2").children[1].classList.remove("equipped");
                break;
            }
    }
}

function setrow3(a){
    switch(a){
        case 1:
            if(document.getElementById("row3").children[0].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("row3").children[0].classList.add("equipped");
                document.getElementById("row3").children[1].classList.remove("equipped");
                document.getElementById("row3").children[2].classList.remove("equipped");
                document.getElementById("row3").children[3].classList.remove("equipped");
                break;
            }
        case 2:
            if(document.getElementById("row3").children[1].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("row3").children[1].classList.add("equipped");
                document.getElementById("row3").children[0].classList.remove("equipped");
                document.getElementById("row3").children[2].classList.remove("equipped");
                document.getElementById("row3").children[3].classList.remove("equipped");
                break;
            }
        case 3:
            if(document.getElementById("row3").children[2].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("row3").children[2].classList.add("equipped");
                document.getElementById("row3").children[0].classList.remove("equipped");
                document.getElementById("row3").children[1].classList.remove("equipped");
                document.getElementById("row3").children[3].classList.remove("equipped");
                break;
            }
        case 4:
            if(document.getElementById("row3").children[3].classList.contains("equipped")==true){
                break;
            } else {
                document.getElementById("row3").children[3].classList.add("equipped");
                document.getElementById("row3").children[0].classList.remove("equipped");
                document.getElementById("row3").children[1].classList.remove("equipped");
                document.getElementById("row3").children[2].classList.remove("equipped");
                break;
            }
    }
}

function setfamily(a){
    switch(a){
        case 1: 
            if(family==1 || secondary==1) {
                break;
            } else {
                family = 1;
                document.getElementsByClassName("keystones")[0].src="runes/precision/Press_the_Attack_rune.png"
                document.getElementsByClassName("keystones")[1].src="runes/precision/Lethal_Tempo_rune.png"
                document.getElementsByClassName("keystones")[2].src="runes/precision/Fleet_Footwork_rune.png"
                document.getElementsByClassName("keystones")[3].src="runes/precision/Conqueror_rune.png"
                keystone = 1;
                document.getElementById("row1").children[0].src="runes/precision/Overheal_rune.png"
                document.getElementById("row1").children[1].src="runes/precision/Triumph_rune.png"
                document.getElementById("row1").children[2].src="runes/precision/Presence_of_Mind_rune.png"
                document.getElementById("row2").children[0].src="runes/precision/Legend-_Alacrity_rune.png"
                document.getElementById("row2").children[1].src="runes/precision/Legend-_Bloodline_rune.png"
                document.getElementById("row2").children[2].src="runes/precision/Legend-_Tenacity_rune.png"
                document.getElementById("row3").children[0].src="runes/precision/Coup_de_Grace_rune.png"
                document.getElementById("row3").children[1].src="runes/precision/Cut_Down_rune.png"
                document.getElementById("row3").children[2].src="runes/precision/Last_Stand_rune.png"
                document.getElementById("row3").children[3].src=""
                document.getElementsByClassName("rune-tree")[0].classList.add("equipped");
                document.getElementsByClassName("rune-tree")[1].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[2].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[3].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[4].classList.remove("equipped");
                break;
            }

        case 2:
            if(family==2 || secondary==2){
                break;
            } else {
                family = 2;
                document.getElementsByClassName("keystones")[0].src="runes/domination/Electrocute_rune.png"
                document.getElementsByClassName("keystones")[1].src="runes/domination/Predator_rune.png"
                document.getElementsByClassName("keystones")[2].src="runes/domination/Dark_Harvest_rune.png"
                document.getElementsByClassName("keystones")[3].src="runes/domination/Hail_of_Blades_rune.png"
                keystone = 1;
                document.getElementById("row1").children[0].src="runes/domination/Cheap_Shot_rune.png"
                document.getElementById("row1").children[1].src="runes/domination/Taste_of_Blood_rune.png"
                document.getElementById("row1").children[2].src="runes/domination/Sudden_Impact_rune.png"
                document.getElementById("row2").children[0].src="runes/domination/Zombie_Ward_rune.png"
                document.getElementById("row2").children[1].src="runes/domination/Ghost_Poro_rune.png"
                document.getElementById("row2").children[2].src="runes/domination/Eyeball_Collection_rune.png"
                document.getElementById("row3").children[0].src="runes/domination/Treasure_Hunter_rune.png"
                document.getElementById("row3").children[1].src="runes/domination/Ingenious_Hunter_rune.png"
                document.getElementById("row3").children[2].src="runes/domination/Relentless_Hunter_rune.png"
                document.getElementById("row3").children[3].src="runes/domination/Ultimate_Hunter_rune.png"

                document.getElementsByClassName("rune-tree")[0].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[1].classList.add("equipped");
                document.getElementsByClassName("rune-tree")[2].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[3].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[4].classList.remove("equipped");
                break;
            }

        case 3:
            if(family==3 || secondary==3){
                break;
            } else {
                family = 3;
                document.getElementsByClassName("keystones")[0].src="runes/sorcery/Summon_Aery_rune.png"
                document.getElementsByClassName("keystones")[1].src="runes/sorcery/Arcane_Comet_rune.png"
                document.getElementsByClassName("keystones")[2].src="runes/sorcery/Phase_Rush_rune.png"
                document.getElementsByClassName("keystones")[3].src=""
                document.getElementsByClassName("keystones")[3].alt=""
                keystone = 2;
                document.getElementById("row1").children[0].src="runes/sorcery/Nullifying_Orb_rune.png"
                document.getElementById("row1").children[1].src="runes/sorcery/Manaflow_Band_rune.png"
                document.getElementById("row1").children[2].src="runes/sorcery/Nimbus_Cloak_rune.png"
                document.getElementById("row2").children[0].src="runes/sorcery/Transcendence_rune.png"
                document.getElementById("row2").children[1].src="runes/sorcery/Celerity_rune.png"
                document.getElementById("row2").children[2].src="runes/sorcery/Absolute_Focus_rune.png"
                document.getElementById("row3").children[0].src="runes/sorcery/Scorch_rune.png"
                document.getElementById("row3").children[1].src="runes/sorcery/Waterwalking_rune.png"
                document.getElementById("row3").children[2].src="runes/sorcery/Gathering_Storm_rune.png"
                document.getElementById("row3").children[3].src=""

                document.getElementsByClassName("rune-tree")[0].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[1].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[2].classList.add("equipped");
                document.getElementsByClassName("rune-tree")[3].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[4].classList.remove("equipped");
                break;
            }

        case 4:
            if(family==4 || secondary==4){
                break;
            } else {
                family = 4;
                document.getElementsByClassName("keystones")[0].src="runes/resolve/Grasp_of_the_Undying_rune.png"
                document.getElementsByClassName("keystones")[1].src="runes/resolve/Aftershock_rune.png"
                document.getElementsByClassName("keystones")[2].src="runes/resolve/Guardian_rune.png"
                document.getElementsByClassName("keystones")[3].src=""
                keystone = 2;
                document.getElementById("row1").children[0].src="runes/resolve/Demolish_rune.png"
                document.getElementById("row1").children[1].src="runes/resolve/Font_of_Life_rune.png"
                document.getElementById("row1").children[2].src="runes/resolve/Shield_Bash_rune.png"
                document.getElementById("row2").children[0].src="runes/resolve/Conditioning_rune.png"
                document.getElementById("row2").children[1].src="runes/resolve/Second_Wind_rune.png"
                document.getElementById("row2").children[2].src="runes/resolve/Bone_Plating_rune.png"
                document.getElementById("row3").children[0].src="runes/resolve/Overgrowth_rune.png"
                document.getElementById("row3").children[1].src="runes/resolve/Revitalize_rune.png"
                document.getElementById("row3").children[2].src="runes/resolve/Unflinching_rune.png"
                document.getElementById("row3").children[3].src=""

                document.getElementsByClassName("rune-tree")[0].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[1].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[2].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[3].classList.add("equipped");
                document.getElementsByClassName("rune-tree")[4].classList.remove("equipped");
                break;
            }

        case 5:
            if(family==5 || secondary==5){
                break;
            } else {
                family = 5;
                document.getElementsByClassName("keystones")[0].src="runes/inspiration/Glacial_Augment_rune.png"
                document.getElementsByClassName("keystones")[1].src="runes/inspiration/Unsealed_Spellbook_rune.png"
                document.getElementsByClassName("keystones")[2].src="runes/inspiration/First_Strike_rune.png"
                document.getElementsByClassName("keystones")[3].src=""
                keystone = 3;
                document.getElementById("row1").children[0].src="runes/inspiration/Hextech_Flashtraption_rune.png"
                document.getElementById("row1").children[1].src="runes/inspiration/Magical_Footwear_rune.png"
                document.getElementById("row1").children[2].src="runes/inspiration/Perfect_Timing_rune.png"
                document.getElementById("row2").children[0].src="runes/inspiration/Futures_Market_rune.png"
                document.getElementById("row2").children[1].src="runes/inspiration/Minion_Dematerializer_rune.png"
                document.getElementById("row2").children[2].src="runes/inspiration/Biscuit_Delivery_rune.png"
                document.getElementById("row3").children[0].src="runes/inspiration/Cosmic_Insight_rune.png"
                document.getElementById("row3").children[1].src="runes/inspiration/Approach_Velocity_rune.png"
                document.getElementById("row3").children[2].src="runes/inspiration/Time_Warp_Tonic_rune.png"
                document.getElementById("row3").children[3].src=""

                document.getElementsByClassName("rune-tree")[0].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[1].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[2].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[3].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[4].classList.add("equipped");
                break;
            }
    }
}

function setsecondary(a) {
    switch(a){
        case 1: 
            if(family==1||secondary==1){
                break;
            }
            else {
                secondary=1;
                document.getElementById("srow1").children[0].src="runes/precision/Overheal_rune.png"
                document.getElementById("srow1").children[1].src="runes/precision/Triumph_rune.png"
                document.getElementById("srow1").children[2].src="runes/precision/Presence_of_Mind_rune.png"
                document.getElementById("srow2").children[0].src="runes/precision/Legend-_Alacrity_rune.png"
                document.getElementById("srow2").children[1].src="runes/precision/Legend-_Bloodline_rune.png"
                document.getElementById("srow2").children[2].src="runes/precision/Legend-_Tenacity_rune.png"
                document.getElementById("srow3").children[0].src="runes/precision/Coup_de_Grace_rune.png"
                document.getElementById("srow3").children[1].src="runes/precision/Cut_Down_rune.png"
                document.getElementById("srow3").children[2].src="runes/precision/Last_Stand_rune.png"
                document.getElementById("srow3").children[3].src=""

                document.getElementsByClassName("rune-tree")[5].classList.add("equipped");
                document.getElementsByClassName("rune-tree")[6].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[7].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[8].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[9].classList.remove("equipped");
                break;
            }

        case 2: 
            if(family==2||secondary==2){
                break;
            }
            else {
                secondary=2;
                document.getElementById("srow1").children[0].src="runes/domination/Cheap_Shot_rune.png"
                document.getElementById("srow1").children[1].src="runes/domination/Taste_of_Blood_rune.png"
                document.getElementById("srow1").children[2].src="runes/domination/Sudden_Impact_rune.png"
                document.getElementById("srow2").children[0].src="runes/domination/Zombie_Ward_rune.png"
                document.getElementById("srow2").children[1].src="runes/domination/Ghost_Poro_rune.png"
                document.getElementById("srow2").children[2].src="runes/domination/Eyeball_Collection_rune.png"
                document.getElementById("srow3").children[0].src="runes/domination/Treasure_Hunter_rune.png"
                document.getElementById("srow3").children[1].src="runes/domination/Ingenious_Hunter_rune.png"
                document.getElementById("srow3").children[2].src="runes/domination/Relentless_Hunter_rune.png"
                document.getElementById("srow3").children[3].src="runes/domination/Ultimate_Hunter_rune.png"

                document.getElementsByClassName("rune-tree")[5].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[6].classList.add("equipped");
                document.getElementsByClassName("rune-tree")[7].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[8].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[9].classList.remove("equipped");
                break;
            }

        case 3: 
            if(family==3||secondary==3){
                break;
            }
            else {
                secondary=3;
                document.getElementById("srow1").children[0].src="runes/sorcery/Nullifying_Orb_rune.png"
                document.getElementById("srow1").children[1].src="runes/sorcery/Manaflow_Band_rune.png"
                document.getElementById("srow1").children[2].src="runes/sorcery/Nimbus_Cloak_rune.png"
                document.getElementById("srow2").children[0].src="runes/sorcery/Transcendence_rune.png"
                document.getElementById("srow2").children[1].src="runes/sorcery/Celerity_rune.png"
                document.getElementById("srow2").children[2].src="runes/sorcery/Absolute_Focus_rune.png"
                document.getElementById("srow3").children[0].src="runes/sorcery/Scorch_rune.png"
                document.getElementById("srow3").children[1].src="runes/sorcery/Waterwalking_rune.png"
                document.getElementById("srow3").children[2].src="runes/sorcery/Gathering_Storm_rune.png"
                document.getElementById("srow3").children[3].src=""

                document.getElementsByClassName("rune-tree")[5].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[6].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[7].classList.add("equipped");
                document.getElementsByClassName("rune-tree")[8].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[9].classList.remove("equipped");
                break;
            }

        case 4: 
            if(family==4||secondary==4){
                break;
            }
            else {
                secondary=4;
                document.getElementById("srow1").children[0].src="runes/resolve/Demolish_rune.png"
                document.getElementById("srow1").children[1].src="runes/resolve/Font_of_Life_rune.png"
                document.getElementById("srow1").children[2].src="runes/resolve/Shield_Bash_rune.png"
                document.getElementById("srow2").children[0].src="runes/resolve/Conditioning_rune.png"
                document.getElementById("srow2").children[1].src="runes/resolve/Second_Wind_rune.png"
                document.getElementById("srow2").children[2].src="runes/resolve/Bone_Plating_rune.png"
                document.getElementById("srow3").children[0].src="runes/resolve/Overgrowth_rune.png"
                document.getElementById("srow3").children[1].src="runes/resolve/Revitalize_rune.png"
                document.getElementById("srow3").children[2].src="runes/resolve/Unflinching_rune.png"
                document.getElementById("srow3").children[3].src=""

                document.getElementsByClassName("rune-tree")[5].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[6].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[7].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[8].classList.add("equipped");
                document.getElementsByClassName("rune-tree")[9].classList.remove("equipped");
                break;
            }

        case 5: 
            if(family==5||secondary==5){
                break;
            }
            else {
                secondary=4;
                document.getElementById("srow1").children[0].src="runes/inspiration/Hextech_Flashtraption_rune.png"
                document.getElementById("srow1").children[1].src="runes/inspiration/Magical_Footwear_rune.png"
                document.getElementById("srow1").children[2].src="runes/inspiration/Perfect_Timing_rune.png"
                document.getElementById("srow2").children[0].src="runes/inspiration/Futures_Market_rune.png"
                document.getElementById("srow2").children[1].src="runes/inspiration/Minion_Dematerializer_rune.png"
                document.getElementById("srow2").children[2].src="runes/inspiration/Biscuit_Delivery_rune.png"
                document.getElementById("srow3").children[0].src="runes/inspiration/Cosmic_Insight_rune.png"
                document.getElementById("srow3").children[1].src="runes/inspiration/Approach_Velocity_rune.png"
                document.getElementById("srow3").children[2].src="runes/inspiration/Time_Warp_Tonic_rune.png"
                document.getElementById("srow3").children[3].src=""

                document.getElementsByClassName("rune-tree")[5].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[6].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[7].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[8].classList.remove("equipped");
                document.getElementsByClassName("rune-tree")[9].classList.add("equipped");
                break;
            }
    }
        
}

// function togglenav(){
//     var nav = document.getElementById("sidenav")
//     if(nav.style.display = "none"){
//         document.getElementById("sidebutton").style.display = "block";
//         nav.style.display = "block";
//     } else{
//         nav.style.display = "none";
//         document.getElementById("sidebutton").style.display = "block";
//     }
// }