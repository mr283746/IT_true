
// alert("صلى على النبى");
// function bar() {
//     document.getElementById('nav').style.width = "100%";
//     document.getElementById('nav_bg').style.width = "100%";
//     document.getElementById('b1').style.display = "none";
//     document.getElementById('b2').style.display = "block";
//     document.getElementById('nav_ul').style.display = "block";
// }
// function bar2() {
//     document.getElementById('nav').style.width = "0";
//     document.getElementById('b1').style.display = "block";
//     document.getElementById('b2').style.display = "none";
//     document.getElementById('nav_bg').style.width = "0";
// }
// function li() {
//     document.getElementById('nav').style.width = "0";
//     document.getElementById('b1').style.display = "block";
//     document.getElementById('b2').style.display = "none";
//     document.getElementById('nav_bg').style.width = "0";
// }


window.onload = function () {
    let loader = document.querySelector('.loader');
    let loaderContainer = document.querySelector(".loader-container")
    
    let all = document.getElementById("all");
    let footer = document.getElementById("footer");
    document.body.style.overflow = "hidden";
    all.style.display = "none";
    footer.style.display = "none";

    setTimeout(function () {
        loader.style.display = "none";
        all.style.display = "block";
        footer.style.display = "block";
        document.body.style.overflow = "auto";
        loaderContainer.style.display = "none";

    }, 1)
}


window.onscroll = function () {
    let toUp = document.querySelector(".to-up");
    if(scrollY >= 725) {
        toUp.style.display = "block";
        toUp.addEventListener("click" , function() {
            window.scrollTo(0,0);
        })
    } else {
        toUp.style.display = "none";
    }
}
