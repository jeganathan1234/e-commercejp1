//selecting side navbar
var sidenav=document.querySelector(".side-navbar")

function showNavbar(){
    sidenav.style.left="0"
}
 function closeNavbar(){
    sidenav.style.left="-60%"

 }
 var productContainer=document.getElementById("proucts")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")


search.addEventListener("keyup",function(){

    var enterValue=event.target.value.toUpperCase()

    for(count=0;count<productlist.lenght;count=count+1)
    {
        var productname=proudclist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(en)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }

})