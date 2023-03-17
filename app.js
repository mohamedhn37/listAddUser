let names = []
if (localStorage.getItem("my_names") !== null) {
    names = JSON.parse(localStorage.getItem("my_names"));
}
function ajouterNom(){
    names.map((item) => {
        let el = document.createElement('li')
        el.innerText = item
        list.appendChild(el)
    })   
}
let nom = document.querySelector('#nom')
let btn = document.querySelector('#entrer')
let list = document.querySelector('ul')
btn.addEventListener('click', () => {
    names.push(nom.value)
    console.log(names)
    localStorage.setItem("my_names", JSON.stringify(names))
    nom.value = ""
    list.innerHTML = ""
    ajouterNom();
})
ajouterNom();

