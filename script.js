//автoризація
// const BASE_URL = 'https://the-one-api.dev/v2';
// const END_POINT = '/character';
// const TOKEN = "18aEQHs2_l3sCMmPg1yk";

// const options = {
//     headers: {
//         Authorization: `Bearer ${TOKEN}`
//     }
// }

// fetch(`${BASE_URL}${END_POINT}?limit=30&page=2`, options)
//     .then(resp => {
//         if (!resp.ok) {
//             throw new Error(resp.statusText)
//         }
//         return resp.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

//______________________________________________________________________________________________


// const selrctros = {
//     container: document.querySelector('.js-movie-list'),
//     load: document.querySelector('.js-load-more'),
// }

// let page = 1;
// selrctros.load.addEventListener('click', onLoadMore);

// function onLoadMore() {
//     page += 1;
//     serviceMovie(page)
//         .then(data => {
//             selrctros.container.insertAdjacentHTML('beforeend', createMarkup(data.results))
//             if (data.page >= 500) {
//                 selrctros.load.hidden = true;
//             }
//     })
// }

// function serviceMovie(page = 1) {
// const BASE_URL = 'https://api.themoviedb.org/3';
// const END_POINT = '/trending/movie/week';
// const API_KEY = "345007f9ab440e5b86cef51be6397df1";
    
//     return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`)
//         .then(resp => {
//             if (!resp.ok) {
//                 throw new Error(resp.statusText);
//             }
//             return resp.json();
//     })
// }

// serviceMovie(1)
//     .then(data => {
//         console.log(data);
//         selrctros.container.insertAdjacentHTML('beforeend', createMarkup(data.results))
//         if (data.page < data.total_pages) {
//             selrctros.load.hidden = false;
//         }
//     })
//     .catch(err => console.log(err))

// function createMarkup(arr) {
//     return arr.map(({ poster_path, release_date, original_title, vote_average }) => `
//     <li>
//         <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}"/>
//         <h2>${original_title}</h2>
//         <p>${release_date}</p>
//         <p>${vote_average}</p>
//       </li>`).join('')
// }
    




function serviceMovie(page = 1) {
const BASE_URL = 'https://api.themoviedb.org/3';
const END_POINT = '/trending/movie/week';
const API_KEY = "345007f9ab440e5b86cef51be6397df1";
    
    return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }
            return resp.json();
    })
}

const selrctros = {
    container: document.querySelector('.js-movie-list'),
    guard: document.querySelector('.js-guard'),
}



const options = {
    root: null,
    rootMargin: "300px",
    threshold: 0,
};


const observer = new IntersectionObserver(handelerPagination, options);
let page = 1;



    function handelerPagination(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                page += 1;
                serviceMovie(page)
                    .then(data => {
                        selrctros.container.insertAdjacentHTML('beforeend', createMarkup(data.results))
                        if (data.page >= 500) {
                            observer.unobserver(entry.target)
                        }
                    }).catch(err => console.log(err))
            }
        });
    }
    

    serviceMovie()
        .then(data => {
            selrctros.container.insertAdjacentHTML('beforeend', createMarkup(data.results))
            if (data.page < data.total_pages) {
                observer.observe(selrctros.guard)
            }
        })
        .catch(err => console.log(err))


    function createMarkup(arr) {
        return arr.map(({ poster_path, release_date, original_title, vote_average }) => `
    <li class='photo-card'>
        <img class='photo-img' src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}"/>
        <h2 class='title-img'>${original_title}</h2>
        <p class='date-img'>${release_date}</p>
        <p class='averoge-img'>${vote_average}</p>
      </li>`).join('')
    }
