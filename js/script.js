const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value.trim()
    const passwordValue = password.value.trim()

    if(usernameValue === '') {
        setErrorFor(username)
    } else {

        setSuccessFor(username)
    }
    if(passwordValue === '') {
        setErrorFor(password)
    } else {
        setSuccessFor(password)
    }
}

function setErrorFor(input) {
    const warn = input.parentElement;
    const small = warn.querySelector('small');
    small.style.opacity = '1'
    input.style.borderColor = 'red'
}

function setSuccessFor(input) {
    const warn = input.parentElement;
    const small = warn.querySelector('small');
    small.style.opacity = '0'
    input.style.borderColor = 'rgb(52, 136, 161)'
}



