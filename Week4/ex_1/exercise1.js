const myEmptyDiv = document.querySelector("#myEmptyDiv");
const heading = document.createElement("h1");
heading.innerHTML = "Llamas sometimes hum to communicate.";
heading.style.cursor = "pointer";
heading.addEventListener("click", handleHeadingClick)
myEmptyDiv.appendChild(heading);
function handleHeadingClick () {
    document.body.style.backgroundColor = "magenta";
}