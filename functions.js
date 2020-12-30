function showHamburger() {
    var x = document.getElementById("nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function mail(form) {
    var name = form.name.value;
    var subject = form.subject.value;
    var country = form.country.value;
    var message = form.message.value;

    var str = "mailto:miacoupland@mail.com?subject=" + subject + "&body=" + name + "\n" + country + "\n" + message;
    document.getElementById('send').href = str;
}