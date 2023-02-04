const signUpModal = document.querySelector(".signup-form-wrapper");
const loginModal = document.querySelector(".login-form-wrapper");
const signUpBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const signUpX = document.querySelector(".sign-x");
const loginX = document.querySelector(".login-x");
const formContainer = document.querySelector(".form-container");

signUpBtn.addEventListener('click',
    () => {
        signUpModal.classList.add("display");
        formContainer.classList.add("disable");
    });

loginBtn.addEventListener('click',
    () => {
        loginModal.classList.add("display");
        formContainer.classList.add("disable");
    });

signUpX.addEventListener("click",
    () => {
        signUpModal.classList.remove("display");
        formContainer.classList.remove("disable");
    })

loginX.addEventListener("click",
    () => {
        loginModal.classList.remove("display");
        formContainer.classList.remove("disable");
    })
