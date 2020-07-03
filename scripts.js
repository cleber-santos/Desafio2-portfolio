// pegar o modal-overlay
const modalOverlay = document.querySelector('.modal-overlay')

// pegar o modal
const modal = document.querySelector('.modal')

// pegar os cards
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    // ao clicar em algum card adiciona a class active.
    card.addEventListener("click", function(){
        const cardId = card.getAttribute("id")

        modalOverlay.classList.add('active')

        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${cardId}`
    })
}

// Maximizar e minimizar tela
document.querySelector('.maximize-modal').addEventListener("click", function(){
    if (modal.classList.contains('maximize') != true){
        modal.classList.add('maximize')
        modal.classList.add('teste')
    } else {
        modal.classList.remove('maximize')
        modal.classList.remove('teste')
    }
})

//remover classes
document.querySelector('.close-modal').addEventListener("click", function (){
    modalOverlay.classList.remove('active')
    modal.classList.remove('maximize')
    modalOverlay.querySelector("iframe").src = ""
})

