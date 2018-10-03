let buttonSubmit = document.querySelector(".submit");
buttonSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    let user = document.querySelector("#user");
    let password = document.querySelector("#password");
    let value = document.querySelector("#value");
    if(user.value === "") {
        //alert("Você não escreveu um usuário");
        const userError = document.createElement("span");
        const userErrorText = document.createTextNode("Você não escreveu um usuário");
        userError.appendChild(userErrorText);
        user.parentNode.insertBefore(userError, user);
    };
    if(password.length < 6 || password.length != "") {
        //alert("Sua senha está muito curta");
        const passwordError = document.createElement("span");
        const passwordErrorText = document.createTextNode("Sua senha está muito curta");
        passwordError.appendChild(passwordErrorText);
        password.parentNode.insertBefore(passwordError, password);
    };
    if(value.value === "") {
        //alert("Selecione um valor");
        const valueError = document.createElement("span");
        const valueErrorText = document.createTextNode("Selecione um valor");
        valueError.appendChild(valueErrorText);
        value.parentNode.insertBefore(valueError, value);
    } else {
        alert("Cadastro efetuado com sucesso!")
        buttonSubmit.disabled = true;
    }
});