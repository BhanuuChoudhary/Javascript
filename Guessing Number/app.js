const max = prompt("Please Enter max Number");

const random = Math.floor(Math.random()*max) +1;

let guess = prompt("guess the number");

while(true)
{
    if(guess == "quit")
    {
        console.log("You quite the game !")
        break;
    }

    if(guess == random)
        {
            console.log( "you are correct ! congrats !! Random number was", random );
            break;
        }

        else if(guess < random)
        {
            guess = prompt("Hint ! Your guess was Too small.Please try again")
        }
        else
        {
            guess = prompt("Hint ! Your guess was Too Large.Please try again")
        }

        // else
        // {
        //     guess = prompt("Your guess was Wrong !Try again!");
        // }
}
