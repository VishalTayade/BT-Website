function aboutus() {
    location.href = 'About-Us.html';
}

function missonvision() {
    location.href = 'Mission-Vision.html';
}

function whoweare() {
    location.href = 'who-we-are.html';
}

function submit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("msg").innerHTML = "Thanks for your valuable input"
}

