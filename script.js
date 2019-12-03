function dropdownClick() {
    var id = document.getElementById("dropdown");
    if (id.className === "topnav") {
        id.className += " responsive";
    }
    else {
        id.className = "topnav";
    }
}