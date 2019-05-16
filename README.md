# Simon Inspireed Game

I created this game inspired by the well known Simon game. Added a few new functionalities but the 
main logic of the game is the same. 
Find out more of the original Simon game here: [Simon Wikipedia](https://en.wikipedia.org/wiki/Simon_(game))

## UX

### User Stories
    
..* This game is good for everyone who wants to improve his memory in a simple and fun way.
..* The game is easy to play but it can get really hard once you reached to a certain ammount of clicks.
..* Great way to improve your memory and contenration skills.
..* The game generates a random sequence of numbers, which the players have to repeat exactly the same way.
..* If the player misses the sequence then loses one of his 3 lifes.
..* The game is over when the player reached 30 score or loses all his lifes.

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

..* The game starts by the user pressing the new game button.
..* The player is promted to enter his name. In case he has played before his previous highscore will be displayed under his name.
..* The game will generate a random sequence(numbers 1 to 4), each number is asigned to a color.
..* The user is then required to repeat the displayed sequence correctly by cliking on the relevant colors.
..* If the sequence is correct the game will replay the pattern with an additional number at the end.
..* The game ends when the user repeated 30 sequences correctly or lost all his lifes.
..* Each player starts with 3 lifes. Losing one life every time when the sequence is not maching the game sequence.

### Existing Features 

..* **Saving hihscores** Using the browsers local storage each players highest score is saved. In case he playes again his previous highscore is displayed.
..* **Game Logo** , by clicking on it reloads the page.
..* **Rules** , by clicking on it opens a modal.
..* **Modal** includes instructions on how to play the game.
..* **New game button** , promts the player to enter his name and starts the game.
..* **Score** shows the user his score.
..* **Lifes left** tells the player how many lifes he has left.
..* **Gaming table** Contains four different colored parts. The players are only able to click on them when it's
their turn to repeat the sequence played by the computer.
..* **Restart button** Only visible when the player lost. By clicking on it the player can start a new game without re-entering his name.

### Features left to implement

..* **Leaderboard** Whithout any back-end knowledge I wasn't able to save players name and scores. The best I could do is 
using the local storage to at least show the actual players highscore.

    

