

window.addEventListener('load', function () {
    var aTags = document.getElementsByTagName("SPAN");
    var searchText = "Deployable";
    var found;

    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent == searchText) {
            try {
                found = aTags[i].lastChild.lastChild.lastChild.lastChild;
                found.style.backgroundColor = "#CCFFCC";

                found = aTags[i].lastChild.lastChild.lastChild.lastChild.lastChild;
                found.style.color = "black";
            } catch(error) {
                // this.console.log(error);
            };
        }
    }
});

