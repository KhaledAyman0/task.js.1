var card = document.querySelectorAll(".card")
var img = document.querySelectorAll("img")
var btn = document.querySelectorAll(".btn")
var content = document.querySelector(".content")
 var btn1 = document.querySelector("#btn1")
 var totalPrice = 0

    btn.forEach( function (item){
    item.onclick = function (){
        content.innerHTML +=" " + item.getAttribute("name")
        totalPrice += +(item.getAttribute("price"))
        content.innerHTML += item.textContent + " + "     
        btn1.onclick = function (){
            document.getElementById("btn1").innerHTML=totalPrice
         }
         
    if (content.innerHTML != "" ){
        content.style.display = "block"
        btn1.style.display = "block"
        btn1.style.color = "black"
        btn1.style.width = "200px"


    }

}
}
)
