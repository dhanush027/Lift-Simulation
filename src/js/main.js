var liftarea = document.getElementById("liftstore");

function addLift() {
    var create = document.getElementById("liftstore");
    if (create.childElementCount < 12) {
        var img = new Image();
        img.src = "img/lift.png";
        document.getElementById("liftstore").appendChild(img);
    } else {
        alert("You kidding meh?");
    }
}

function removeLift() {
    let destroy = document.getElementById("liftstore");
    if (destroy.childElementCount > 1) {

        destroy.removeChild(destroy.lastElementChild);
    } else {
        alert("Wanna save electricity and use steps to climb ? :/ ");

    }
}

function addFloor() {
    var div = document.createElement("div");
    var buttonup = document.createElement("button");
    var buttondown = document.createElement("button");
    var hr = document.createElement("hr");
    buttonup.textContent = "up";
    buttondown.textContent = "down";
    div.append(buttonup, buttondown, hr);
    document.getElementById("section").prepend(div);

}

function removeFloor() {
    let destroyFloor = document.getElementById("section");
    if (destroyFloor.childElementCount > 3) {
        destroyFloor.removeChild(destroyFloor.firstElementChild);
    }
}