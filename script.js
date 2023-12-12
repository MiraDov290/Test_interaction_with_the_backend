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
        


//Load More



function serviceMovie(page = 1) {
const BASE_URL = 'https://api.themoviedb.org/3';
const END_POINT = '/trending/movie/week';
    const API_KEY = "34523545-f21683fd59bfc3e4e2549fe07";
    
    return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }
            return resp.json();
    })
}

serviceMovie()
    .then(data => console.log(data))
    .catch(err => console.log(err))

