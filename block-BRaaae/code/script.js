let input = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector('.movies');

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

function handleChange(event) {
    let id = event.target.dataset.id;
    console.log('id:',id)
    allMovies[id].watched = !allMovies[id].watched
    createMovieUI(allMovies, rootElm)
}

// function elm(type, attr= {}, ...children) {
//     let element = document.createElement(type);
//     for (let key in attr) {
//         if(key.startsWith('data-')) {
//             element.setAttribute(key, attr[key])
//             console.log('key:',key,'attr:',attr[key])
//         } else if (key.startsWith('on')) {
//             let eventType = key.replace('on','').toLowerCase();
//             element.addEventListener(eventType, attr[key]);
//         } else {
//             element[key] = attr[key]
//         }
//     }
//     children.forEach((child) => {
//         if (typeof child === 'object') {
//             element.append(child)
//         } 
//         if (typeof child === 'string') {
//             let node = document.createTextNode(child)
//             element.append(node)
//         }
//     })
//     return element;
// }

let elm = React.createElement;

function createMovieUI(data, root) {
    // root.innerHTML = '';
    let allData = data.map((movie,i) => {
        let li = elm(
            'li', 
            {}, 
            elm('label', { for:i }, movie.name),    
            elm('button', { "data-id":i, onClick:handleChange }, movie.watched ? "Watched" : "To Watch"),
        );
        return li;
    })
    ReactDOM.render(allData, rootElm);
}

createMovieUI(allMovies, rootElm)