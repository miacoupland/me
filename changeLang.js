function toggleLanguage() {
    var lang = document.getElementById('langSelector').value;
    var x = document.getElementsByClassName('eo');
    var y = document.getElementsByClassName('en-UK');
    if (lang == 'en-UK') {
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "block";
        }
    } else if (lang == "eo") {
        var j;
        for (j = 0; j < x.length; j++) {
            x[j].style.display = "block";
        }
        for (j = 0; j < y.length; j++) {
            y[j].style.display = "none";
        }
    } else {
        x[0].innerHTML = "ERROR";
    }
}