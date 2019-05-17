# Simon Inspireed Game

I created this game inspired by the well known Simon game. Added a few new functionalities but the 
main logic of the game is the same. 
Find out more of the original Simon game here: [Simon Wikipedia](https://en.wikipedia.org/wiki/Simon_(game))

* This game is good for everyone who wants to improve his memory in a simple and fun way.
* The game is easy to play but it can get really hard once you reached to a certain ammount of clicks.
* Great way to improve your memory and contenration skills.

## UX

### User Stories
    
* The game generates a random sequence of numbers, which the players have to repeat exactly the same way.
* If the player repeated the sequence correctly the game will carry on with one additional step at he end of the sequence.
* If the player misses the sequence then loses one of his lifes.
* The game is over when the player reached 30 score or loses all his lifes.
* The player can see how many lifes he has left.
* The players score is incremented by one every time he correctly repeats the sequence presented by the game.
* The player can see his score.
* In case the player loses all his life he can click on replay button to start a new game or press the New Game button.

### Research

After deciding to build this game for my second Milestone Project I made some research online to get a better
understanding on how this game works. Saw many different ways on how to write the logic for the game and that helped a 
lot to decide on how i want to bulid my game. 

### Wireframes

I drew my wireframe on Figma.com. There are minor differences between the wireframe and the actual game, because
during the building process I figured that it looks much better like this.
![alt text](https://github.com/DiGergo/interactive-fe-dev-memory-game-project/blob/master/assets/wireframe/game.jpg "game wireframe")

## Features

### Functionality

* The game starts by the user pressing the new game button.
* The player is promted to enter his name. In case he has played before his previous highscore will be displayed under his name.
* The game will generate a random sequence(numbers 1 to 4), each number is asigned to a color.
* The user is then required to repeat the displayed sequence correctly by cliking on the relevant colors.
* If the sequence is correct the game will replay the pattern with an additional number at the end.
* The game ends when the user repeated 30 sequences correctly or lost all his lifes.
* Each player starts with 3 lifes. Losing one life every time when the sequence is not maching the game sequence.

### Existing Features 

* **Saving highscores** Using the browsers local storage each players highest score is saved. In case he playes again his previous highscore is displayed.
* **Game Logo** , by clicking on it reloads the page.
* **Rules** , by clicking on it opens a modal.
* **Modal** includes instructions on how to play the game.
* **New game button** , promts the player to enter his name and starts the game.
* **Score** shows the user his score.
* **Lifes left** tells the player how many lifes he has left.
* **Gaming table** Contains four different colored parts. The players are only able to click on them when it's
their turn to repeat the sequence played by the computer.
* **Restart button** Only visible when the player lost. By clicking on it the player can start a new game without re-entering his name.

### Features left to implement

* **Leaderboard** Whithout any back-end knowledge I wasn't able to save players name and scores. The best I could do is 
using the local storage to at least show the actual players highscore.

## Technologies Used

* **Figma** I used Figma.com to create the wireframe for my websyte.
* **HTML** Used HTML to build the structure of the page.
* **Google Fonts** I used Google Fonts (Schoolbell) font-family, because its an eye catching font and in my opinion its great for a game.
* **Bootstrap** Used Bootstrap because of its grid system and button.
* **CSS** Used CSS to add custom styles to the page.
* **Javascript** Javascript is used to add functionality to the game, the modal is created using javascript.
* **Jasmine** Jasmine is used for testing some of the game functions.
* **Git** Used Git to track changes in my source code.
* **GitHub** I used GitHub to store my project and also to deploy my website.

## Testing








## Deployment








## Credits

### Content

* I used a tutorial by Beau Carnes on how to build a Simon Game in Javascript for beginners, you can watch it [here](https://www.youtube.com/watch?v=n_ec3eowFLQ&t=3152s).
I did reuse some of his ideas tailored to my needs to build the main logic of my game, with additional functions which were written by me. The design and layout are only my hands
work.

### Media

* The sounds for my game were made by a friend because the original Simon game sounds didnt match my notion.
* The favicon I used is from [Findicons.com](https://findicons.com/) and it was free to use.
* The restart button is from [iconfinder.com](https://www.iconfinder.com/) and it was free to use.

### Acknowledgements

* I would like to thank **Beau Carnes** for the brilliant tutorial which helped me a lot.
* A special thanks to my mentor **Seun Owonikoko** for all the help and feedback!