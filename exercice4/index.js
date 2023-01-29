const bouton = document.querySelector("#button");
const liste = document.querySelectorAll("#liste li");

bouton.addEventListener("click", function() {
    liste.forEach(function(element) {
        element.classList.toggle("classe");
    })
})