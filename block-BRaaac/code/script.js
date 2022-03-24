let input = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector('.todos');

let allMovies = [
    {
        name:'Forest Gump',
        watched: false
    },
    {
        name:'Inception',
        watched: false
    }
]

input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        allMovies.push({
            name: event.target.value,
            watched:false
        })
        event.target.value = '';
        createMovieUI(allMovies, rootElm)
    }
})

function elm(type, attr= {}, ...children) {
    let element = document.createElement(type);
    for (let key in attr) {
        if(key.startsWith('data-')) {
            element.setAttribute(key, attr[key])
        } else {
            element[key] = attr[key]
        }
    }
    return element;
}

function handleChange(event) {
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched
    createMovieUI(allMovies, rootElm)
}

function createMovieUI(data, root) {
    root.innerHTML = '';
    data.forEach((movie,i) => {
        let li = elm(
            ('li'), {}, 
            elm(('button'), { "data-id":i, onClick:handleChange }, movie.watched),
            elm(('label'), { for:i }, movie.name)    
        );
        
        rootElm.append(li);
    })
}

createMovieUI(allMovies, rootElm)