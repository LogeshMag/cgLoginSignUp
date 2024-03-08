const welcome1 = document.querySelector(".welcome1"); //class

const signup = document.getElementById("signup"); //button

const signin = document.querySelector(".signIn"); //form class

const welcome2 = document.querySelector(".welcome2");

console.log(signin);

signup.addEventListener("click", function() {
    welcome1.classList.toggle("left");
    signin.classList.toggle("right");
});
