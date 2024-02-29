function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeImagePosition(img) {
    var vpHeight = window.innerHeight;
    var vpWidth = window.innerWidth;
    
    var xPos = getRandomInt(0, vpWidth - img.offsetWidth);
    var yPos = getRandomInt(0, vpHeight - img.offsetHeight);
    var zIndex = getRandomInt(0, 13);
    
    img.style.top = yPos + 'px';
    img.style.left = xPos + 'px';
    img.style.zIndex = zIndex;
}

window.addEventListener('load', function() {
    var imgs = document.querySelectorAll('img');
    imgs.forEach(function(img) {
        randomizeImagePosition(img);
    });
});

var mouseX;
var mouseY;

$(document).on("mousemove", function(event) {
    mouseX = event.pageX;
    mouseY = event.pageY;

    if (selected) {
        selected.css("top", mouseY - 100);
        selected.css("left", mouseX - 100);
    }
});

var selected = null;
var count = 0;

$("img").click(function() {
    if ($(this).hasClass("c-images")) {
        selected = $(this);
        count++;

        if (count % 2 === 0) {
            selected = null;
        }
    }
});

$("#img1").dblclick(function() {
    window.location.href = "huh-cat.html";
});

$("#img2").dblclick(function() {
    window.location.href = "mr-fresh.html";
});

$("#img3").dblclick(function() {
    window.location.href = "crunchy-cat.html";
});

$("#img4").dblclick(function() {
    window.location.href = "chipi-cat.html";
});

$("#img5").dblclick(function() {
    window.location.href = "beluga.html";
});

$("#img6").dblclick(function() {
    window.location.href = "girlfriend-cat.html";
});

$("#img7").dblclick(function() {
    window.location.href = "cursed-cat.html";
});

$("#img8").dblclick(function() {
    window.location.href = "sleepy-cat.html";
});