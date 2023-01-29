function fonctions(){
    document.getElementById("element2").innerHTML = "";
    document.getElementById("element3").innerHTML = "Ceci est le troisieme élément, et le deuxième élément à disparu";
}
function ajouter(){
    const list = document.getElementById("element4").classList;
    list.add("style");
}