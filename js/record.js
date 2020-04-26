function openQuest() {
    document.getElementById('bg').style.visibility = "visible";
    document.getElementById('ask').style.backgroundImage = "images/record/bg.jpg";
    document.getElementById('askImg').src = "images/record/ask-on.png";
}

window.setTimeout(openQuest(), 3000);