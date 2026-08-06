const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const scene = document.getElementById("scene");
const music = document.getElementById("music");
const seal = document.getElementById("seal");
const tutup = document.getElementById("tutup");
const kertas = document.getElementById("kertas");
const readBtn = document.getElementById("readBtn");
const ucapan = document.getElementById("ucapan");
const letterPage = document.getElementById("letterPage");
const fullLetter = document.getElementById("fullLetter");
const continueBtn = document.getElementById("continueBtn");
const galleryPage = document.getElementById("galleryPage");
const finishBtn = document.getElementById("finishBtn");
const endingPage = document.getElementById("endingPage");
const passcode = document.getElementById("passcode");
const pinDisplay = document.getElementById("pinDisplay");
const pinMessage = document.getElementById("pinMessage");

const dots = document.querySelectorAll(".dot");
const nums = document.querySelectorAll(".num");

const deleteBtn = document.getElementById("deleteBtn");
const clearBtn = document.getElementById("clearBtn");

let pin = "";
const correctPin = "010826";

openBtn.onclick = function(){

    opening.style.display = "none";

    passcode.style.display = "flex";

}

seal.onclick = function(){

    seal.classList.add("lepas");

    setTimeout(function(){
        tutup.classList.add("buka");
    },150);

    setTimeout(function(){
        kertas.classList.add("naik");
    },600);

    setTimeout(function(){
        kertas.classList.add("turun");
    },1200);

    setTimeout(function(){
        readBtn.classList.add("show");
    },1700);

}

readBtn.onclick = function(){

    readBtn.classList.remove("show");

    kertas.classList.remove("turun");
    kertas.classList.add("baca");

    setTimeout(function(){

        scene.style.opacity = "0";

    },100);

    setTimeout(function(){

        scene.style.display = "none";
        letterPage.style.display = "block";

    },600);

}

continueBtn.onclick = function(){

    letterPage.style.display = "none";

    galleryPage.style.display = "block";

}

const popup = document.getElementById("photoPopup");
const popupImg = document.getElementById("popupImg");
const closePhoto = document.getElementById("closePhoto");
const foto1 = document.getElementById("foto1");
const foto2 = document.getElementById("foto2");
const foto3 = document.getElementById("foto3");
const foto4 = document.getElementById("foto4");
const foto5 = document.getElementById("foto5");
const foto6 = document.getElementById("foto6");
const foto7 = document.getElementById("foto7");
const foto8 = document.getElementById("foto8");

closePhoto.onclick = function(){

    popup.classList.remove("show");

setTimeout(function(){

    popup.style.display="none";

},300);

}

popup.onclick = function(e){

    if(e.target == popup){

        popup.classList.remove("show");

        setTimeout(function(){

            popup.style.display="none";

        },300);

    }

    const petals = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.animationDuration =
        (5 + Math.random()*5) + "s";

    petal.style.opacity =
        0.5 + Math.random()*0.5;

    petals.appendChild(petal);

    setTimeout(function(){

        petal.remove();

    },10000);

}

setInterval(createPetal,300);

}

foto1.onclick = function(){

    popup.style.display="flex";

setTimeout(function(){

    popup.classList.add("show");

},10);
    popupImg.src = "aset/foto1.jpg";

}

foto2.onclick=function(){

    popup.style.display="flex";

setTimeout(function(){

    popup.classList.add("show");

},10);
    popupImg.src="aset/foto2.jpg";

}

foto3.onclick=function(){

    popup.style.display="flex";
    setTimeout(function(){

        popup.classList.add("show");
    
    },10);
    popupImg.src="aset/foto3.jpg";

}

foto4.onclick=function(){

    popup.style.display="flex";
    setTimeout(function(){

        popup.classList.add("show");
    
    },10);
    popupImg.src="aset/foto4.jpg";

}

foto5.onclick=function(){

    popup.style.display="flex";
    setTimeout(function(){

        popup.classList.add("show");
    
    },10);
    popupImg.src="aset/foto5.jpg";

}

foto6.onclick=function(){

    popup.style.display="flex";
    setTimeout(function(){

        popup.classList.add("show");
    
    },10);
    popupImg.src="aset/foto6.jpg";

}

foto7.onclick=function(){

    popup.style.display="flex";
    setTimeout(function(){

        popup.classList.add("show");
    
    },10);
    popupImg.src="aset/foto7.jpg";

}

foto8.onclick=function(){

    popup.style.display="flex";
    setTimeout(function(){

        popup.classList.add("show");
    
    },10);
    popupImg.src="aset/foto8.jpg";

}

finishBtn.onclick = function(){

    galleryPage.style.display = "none";

    endingPage.classList.add("show");

}

const petals = document.getElementById("petals");

function createPetal(){

    if(!petals) return;

    const petal=document.createElement("div");

    petal.className="petal";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=
    (5+Math.random()*5)+"s";

    petal.style.opacity=
    0.4+Math.random()*0.6;

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },10000);

}

setInterval(createPetal,300);

function updateDots(){

    dots.forEach((dot,index)=>{

        if(index < pin.length){

            dot.textContent="❤️";
            dot.classList.add("fill");

        }else{

            dot.textContent="♡";
            dot.classList.remove("fill");

        }

    });

}

nums.forEach(btn=>{

    btn.onclick=function(){

        if(pin.length>=6) return;

        pin += btn.textContent;

        updateDots();

        if(pin.length==6){

            if(pin===correctPin){

                pinMessage.style.color="#2e7d32";
                pinMessage.textContent="Welcome Albert & Oktavia ❤️";

                setTimeout(function(){

                    passcode.style.display="none";

                    scene.style.display="block";

                    music.play();

                },900);

            }else{

                pinMessage.style.color="#b00020";
                pinMessage.textContent="Incorrect Passcode";

                pinDisplay.classList.add("shake");

                setTimeout(function(){

                    pin="";
                    updateDots();

                    pinMessage.textContent="";

                    pinDisplay.classList.remove("shake");

                },900);

            }

        }

    }

});

deleteBtn.onclick=function(){

    pin=pin.slice(0,-1);

    updateDots();

}

clearBtn.onclick=function(){

    pin="";

    updateDots();

    pinMessage.textContent="";

}