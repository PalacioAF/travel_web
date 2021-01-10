window.addEventListener("DOMContentLoaded",() => {
    const order = localStorage.getItem("order")
    if ( order ) {
        const travelOrder = JSON.parse(order) 
        console.log(travelOrder);
        const travel = document.querySelector(".form")
        console.log(travel);
        const title = travel.querySelector("#destination")
        title.value = travelOrder.title
    }
})

function validate(form) {
    const first_name = document.querySelector("#first-name")
    const last_name = document.querySelector("#last-name")
    const email = document.querySelector("#email")
    const query = document.querySelector("#query")
    const check = document.querySelector("#checkbox")

    if(!first_name.value||!last_name.value||!email.value||!query.value){
        alert('Complete los todos los campos');
        return false;
    }

    if(!check.checked ) {
        alert('Acepte términos y condiciones');
        return false;
    }
    else {
        return confirm('Enviar consulta?');
    }
};