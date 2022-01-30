const gamesArr = [
    {title: "Cards Against Humanity",
    players: "4+ players",
    rating: "hilariously awkward card game",
    description: "You will find out just how depraved and warped your friends and loved ones really are!"
},
{
    title: "Secret Hitler",
    players: "5-10 players",
    rating: "somewhat creepy game",
    description: "Who doesn't love a little covert fascism between friends? Find out just how well your friends can lie!"
},
{
    title: "Checkers",
    players: "2 players",
    rating: "really traditional game",
    description: "It's a simple game of strategy. It's perfect for grandparents who need to entertain themselves or their grandkids."
},
{
    title: "Scrabble",
    players: "2-4 players",
    rating: "a game that my wife thinks is infuriating",
    description: "A turn-based game where players earn points by creating words from lettered tiles. Scores are made from both words and tile placement."
}
]
console.log("Game explanation",gamesArr);
const gameNumberPick = window.prompt('Pick a number between 1 and 4, and I will tell you about one of my favorite games.');
window.alert('You picked ' + gamesArr[gameNumberPick - 1].title + '. That is a ' + gamesArr[gameNumberPick - 1].rating + '. It says on the box that it is for ' + gamesArr[gameNumberPick - 1].players + ', but who am I to judge how you spend your time? ' + gamesArr[gameNumberPick - 1].description)
