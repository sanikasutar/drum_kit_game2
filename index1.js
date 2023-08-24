/*event listener has two parameters first one would be the event like when we have to execute and 
the second parameter tells us which function to execute*/

totalButtons=document.querySelectorAll(".drum").length;
//This will tell us about total number of buttons for the ending condition of the for loop

for (var i = 0; i<totalButtons;i++)
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {//querySelectorAll will select all the buttons
        var buttonInnerHTML=this.innerHTML;//variable for button click
        
        switch (buttonInnerHTML) {
            case "w":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();// this is for mouse click
                makeSound(buttonInnerHTM);//this is for keyboard press
                break;

            case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                 tom2.play();
                 makeSound(buttonInnerHTM);
                break;

            case "s":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                makeSound(buttonInnerHTM);
                break;

            case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                makeSound(buttonInnerHTM);
                break;

            case "j":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                makeSound(buttonInnerHTM);
                break;

            case "k":
                 var crash=new Audio("sounds/crash.mp3");
                 crash.play();
                 makeSound(buttonInnerHTM);
                 break;

            case "l":
                 var kick = new Audio("sounds/kick-bass.mp3");
                 kick.play();
                 makeSound(buttonInnerHTM);
                 break;
        
            default:
                console.log(buttonInnerHTML);
        }
    });

document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
});

function makeSound(key)
{
    switch(key)
    {
        case "w":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                 tom2.play();
                break;

            case "s":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "k":
                 var crash=new Audio("sounds/crash.mp3");
                 crash.play();
                 break;

            case "l":
                 var kick = new Audio("sounds/kick-bass.mp3");
                 kick.play();
                 break;
        
            default:
                break; 
    }
}