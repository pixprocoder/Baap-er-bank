
function fun() {
    var btn = document.createElement("button");
    btn.innerHTML = "Click me";
    document.body.appendChild(btn);
}
fun()

console.log('button added')


const name = document.getElementById("user-name").innerText = 1250;
console.log(name)




function add() {
    const cbalance = document.getElementById("c-balance").innerText;
    const inputValue = document.getElementById("input").value;
    console.log(cbalance + inputValue)
}
add()