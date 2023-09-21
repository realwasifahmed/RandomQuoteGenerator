let jokeBtn = document.querySelector('button')
jokeBtn.addEventListener('click', getJoke)


function getJoke() {
    let jokeTxt = document.querySelector('h2')
    let url = 'https://api.quotable.io/random'
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            jokeTxt.innerText = data.content
        })
        .catch((err) => {
            console.log('Error - ', err)
        })
}