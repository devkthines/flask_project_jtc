function changeBackgroundColor(){

    var colors =['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff']
    var randomColor = colors[Math.floor(Math.random()*colors.length)]
    document.body.style.backgroundColor = randomColor;
}

document.addEventListener('DOMContentLoaded', function(){
    var button = document.getElementById('changeColorButton');
    if(button){
        button.addEventListener('click', changeBackgroundColor);
    }
})