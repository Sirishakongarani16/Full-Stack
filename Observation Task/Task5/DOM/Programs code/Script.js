function changeContent() {

    document.getElementById("message").innerHTML =
        "Content changed dynamically using JavaScript DOM!";

    document.getElementById("heading").innerHTML =
        "DOM Content Changed";

}


function changeStyle() {

    const message =
        document.getElementById("message");

    message.style.color = "blue";
    message.style.backgroundColor = "lightyellow";
    message.style.fontSize = "25px";
    message.style.fontWeight = "bold";

}


function changeAttribute() {

    const image =
        document.getElementById("myImage");

    image.src =
        "https://via.placeholder.com/300";

    image.alt =
        "Changed Image";

}