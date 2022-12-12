const jokeContent = document.getElementById('joke');

const newJoke = document.getElementById('joke-btn')



newJoke.addEventListener('click',  generateNewJoke)


/*

The below utilizes fetch api, now going to utilize async/await

*/

generateNewJoke()

function generateNewJoke(){

const config =  {
    headers: {
        'Accept': 'application/json'
    }
}

    fetch('https://icanhazdadjoke.com', config)
    .then(response =>response.json())
        .then((data) => 
        {
            jokeContent.innerHTML = data.joke
        })
    
}

