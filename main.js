
Swal.fire({
  title: "صلى على النبى",
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  },
});

function bar()
{
    document.getElementById('nav').style.width="100%";
    document.getElementById('nav_bg').style.width="100%";
    document.getElementById('b1').style.display="none";
    document.getElementById('b2').style.display="block";
    document.getElementById('nav_ul').style.display="block";
}
function bar2()
{
    document.getElementById('nav').style.width="0";
    document.getElementById('b1').style.display="block";
    document.getElementById('b2').style.display="none";
    document.getElementById('nav_bg').style.width="0";
}
function li()
{
    document.getElementById('nav').style.width="0";
    document.getElementById('b1').style.display="block";
    document.getElementById('b2').style.display="none";
    document.getElementById('nav_bg').style.width="0";
}
