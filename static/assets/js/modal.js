let modal = document.getElementById('serverModal');
let openModalClass = document.getElementsByClassName('openServerModal');

function showModal()  {
    modal.style.display = "block";
}
function hideModal() {
    modal.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == modal) {
        hideModal();
    }
}

window.onload = function() {
    for (let i = 0; i < openModalClass.length; i++) {
        showModal();
    }
}