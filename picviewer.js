var pics = document.getElementsByTagName('img');
var originalHeight = pics[0].height ;
var originalWidth = pics[0].width ;

for(var i=0; i<pics.length; i++) {
    console.log("pic src:" + pics[i].src) ;
    pics[i].addEventListener('mouseover', function() {
        this.height = 300 ;
        this.width = 320 ;
});
    pics[i].addEventListener('mouseover', function() {
        this.height = originalHeight ;
        this.width = originalWidth ;
});
    pics[i].addEventListener('click', function() {
        var imgDiv = document.getElementById('imgDiv') ;
            "-390px;'> <a href='javascript:dowork()'>Close</a></span> ";

        imgDiv.style.visibility = "visible" ;
});
}
function dowork(img) {
    var imgDiv = document.getElementById('imgDiv');
    imgDiv.innerHTML = "" ;
    imgDiv.style.visibility = "hidden" ;

}

//pictures shrink on mouseover and don't return to regular size. Do not open onclick

/*
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
*/