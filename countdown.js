var inputBox = document.getElementById('input') ;
var output = document.getElementById('output') ;

input.addEventListener('keyup', function () {
    var charRemaining = 50 - input.value.length ;
    output.innerHTML = charRemaining ;
    if(charRemaining < 0) {
        output.style.color = 'red' ;
        /* does not change back to black when non negative
        else {
            output.style.color = 'black' ;
        }
        does not count down with else statement in use
        */
    }
});