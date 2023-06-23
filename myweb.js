var vanish = document.querySelector(".fifo")

window.addEventListener("load",vanish)

function vanish(){
    fifo.classList.add("ds")
}




document.querySelector(".reg").onclick=function(){
    document.querySelector(".siu").classList.toggle("hide")
 }
document.querySelector(".log").onclick=function(){
    document.querySelector(".slu").classList.toggle("hide1")
 }

 document.querySelector(".cos").onclick=function(){
    let n1 = document.getElementById("ta")
    if (n1=='')
      alert('please enter your comments')
    else
      alert("Your comments has been submittedc")
      
 }
 