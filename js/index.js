document.addEventListener("DOMContentLoaded", function(){
    const element  = document.createElement("div");
    element.style.color = "#769656";
    element.style.width = "200px";
    element.style.height = "200px";

    document.getElementsByTagName("div")[0].appendChild(element)
})