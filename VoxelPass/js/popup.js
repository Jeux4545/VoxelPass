const password_ui = document.getElementById("password")
const letters_ui = document.getElementById("letters")
const checkboxes = {
    "lowercase": document.getElementById("lowercase"),
    "uppercase": document.getElementById("uppercase"),
    "symbols": document.getElementById("symbols")
}
const generate_password = document.getElementById("generate-password")
const copy_password = document.getElementById("copy-password")

function generatePassword(characterss) {
    let generated_password = ""

    for (let i = 0; i < letters_ui.value; i++) {
        let random_number = Math.floor(Math.random() * characterss.length)
        generated_password += characterss.charAt(random_number)
    }

    return generated_password
}

generate_password.addEventListener("click", function() {
    let characters = ""
    if (checkboxes.lowercase.checked) {
        characters += "abcdefghijklmnopqrstuvwxyz"
    }
    if (checkboxes.uppercase.checked) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (checkboxes.symbols.checked) {
        characters += "!@#$%^&*()"
    }

    if (checkboxes.lowercase.checked || checkboxes.uppercase.checked || checkboxes.symbols.checked) {
         password_ui.value = generatePassword(characters)
         generate_password.textContent = "Password generated successfully!"
         setTimeout(function() {
            generate_password.textContent = "Generate Password!"
         }, 2000)
    } else {
        password_ui.value = "No checkboxes selected!"
    }
})

copy_password.addEventListener("click", function() {
    if (password_ui.value != "") {
        navigator.clipboard.writeText(password_ui.value)
        .then(() => {
            copy_password.textContent = "Password copied successfully!"
            setTimeout(function() {
                copy_password.textContent = "Copy Password!"
            }, 2000)
        })
        .catch((error) => {
            copy_password.textContent = "Something happened while copying the password!"
            setTimeout(function() {
                copy_password.textContent = "Copy Password!"
            }, 2000)
        })
    } else {
        copy_password.textContent = "There's no password to copy!"
            setTimeout(function() {
                copy_password.textContent = "Copy Password!"
            }, 2000)
    }
})