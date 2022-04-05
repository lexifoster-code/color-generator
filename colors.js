function changeColor(){
    const randomColor = 
    "#"+( Math.floor(Math.random ()* 16777215).toString(16));
    document.body.style.backgroundColor = randomColor;

    //create a function that you can call on later in this case i'll be calling on this function in an event attribute 
    //then used a variable to hold  math.floor/random function that will essentially produce a whole number multiplied by the RGB color variations
    // then uses the tostring 16 to convert to hexideimal.  document.body.style.backgroundColor = randomColor;
    // refers to the dom 
    
}
gencolor.addEventListener('click' ,changeColor); 
    changeColor();
