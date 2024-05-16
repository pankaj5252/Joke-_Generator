const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call fake spaghetti? An impasta!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why don't eggs tell jokes? Because they'd crack each other up!"
];

function generateRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];
    document.getElementById('joke-container').innerText = joke;
}

const button = document.getElementById('generate-joke-btn')
button.addEventListener('click', generateRandomJoke);