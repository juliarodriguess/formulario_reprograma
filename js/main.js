let buttonSubmit = document.querySelector(".submit");
buttonSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    let user = document.querySelector("#user");
    let password = document.querySelector("#password");
    let value = document.querySelector("#value");
    if(user.value === "") {
        alert("Você não escreveu um usuário");
    };
    if(password.length < 6 || password.length != "") {
        alert("Sua senha está muito curta");
    };
    if(value.value === "") {
        alert("Selecione um valor");
    };
});