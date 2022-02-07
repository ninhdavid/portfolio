const h1 = document.querySelector("h1");

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;

    if (currentColor==="blue"){
        newColor ="tomato";
    }else{
        newColor ="blue";
    }
    h1.style.color = newColor;
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}
 function handleMouseDown(){
     h1.innerText = "Mouse is down!";
 }

 function handleWindowResize(){
     document.body.style.backgroundColor = "tomato";
 }
 function handleWindowCopy(){
     alert("copier!")
 }
function handleWindowOffline(){
    alert(" No WIFI ")
}
function handleWindowOnline(){
    alert(" ALL GOOD ")
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);
h1.addEventListener("mousedown", handleMouseDown);


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline",handleWindowOffline)
window.addEventListener("online", handleWindowOnline)


function handleTitleClick(){
    const clickedClass = "Clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else{
        h1.classList.add(clickedClass);
    }

    h1.classList.toggle("Clicked");
}
h1.addEventListener("click",handleTitleClick)