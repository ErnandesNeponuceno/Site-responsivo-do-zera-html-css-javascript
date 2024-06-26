var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click', function(){
    if(iconMenu.getAttribute("src") == 'assets/img/menu.png'){
        iconMenu.setAttribute("src", "assets/img/close.png");
    }else{
         iconMenu.setAttribute("src", "assets/img/menu.png");
    }
    menu.classList.toggle('active');
});

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

document.getElementById('notifyButton').addEventListener('click', function() {
    const emailInputElement = document.getElementById('emailInput');
    const emailInput = emailInputElement.value;

    if (isValidEmail(emailInput)) {
        Toastify({
            text: "Enviado com sucesso!",
            duration: 2000,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
        emailInputElement.value = '';
} else{
    Toastify({
        text: "Digite um e-mail válido",
        duration: 2000,
        close: true,
        gravity: "top", 
        position: "left", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #ff4b1f, #ff9068)",
        },
      }).showToast();
}

});
