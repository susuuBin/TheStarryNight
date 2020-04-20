function openQuest() {
    document.getElementById('bg').style.visibility = "visible";
    document.getElementById('ask').style.backgroundColor = "rgba(75, 83, 88, 0.8)";
    document.getElementById('askImg').src = "images/clothes_ask_on.png";
}

window.setTimeout(openQuest(), 3000);