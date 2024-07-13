import { fetchData } from './fetchData.js'

export function loadDetails(title, imageUrl) {
    const urlFindMovie = `http://localhost:8000/api/v1/titles/?title=${title}`

    fetchData(urlFindMovie).then(dataMovieFound => {
        let movieId = ""
        if (dataMovieFound.results.length > 1) {
            for (let i = 0; i < dataMovieFound.results.length; i++) {
                if (dataMovieFound.results[i].image_url === imageUrl) {
                    movieId = dataMovieFound.results[i].id
                    break
                }
            }
        } else {
            movieId = dataMovieFound.results[0].id
        }
        const urlMovie = `http://localhost:8000/api/v1/titles/${movieId}`

        fetchData(urlMovie).then(dataMovie => {
            let title = document.getElementById("titleModalDetails")
            title.textContent = dataMovie.title

            let genres = [dataMovie.genres[0]]
            for (let i = 1; i < dataMovie.genres.length; i++) {
                genres.push(` ${dataMovie.genres[i]}`)
            }
            let yearAndGenres = document.getElementById("yearAndGenres")
            yearAndGenres.textContent = `${dataMovie.year} - ${genres}`

            let countries = [dataMovie.countries[0]]
            for (let i = 1; i < dataMovie.countries.length; i++) {
                countries.push(` ${dataMovie.countries[i]}`)
            }
            let durationAndCountries = document.getElementById("durationAndCountries")
            durationAndCountries.textContent = `${dataMovie.duration} minutes (${countries})`

            let imdbScore = document.getElementById("imdbScore")
            imdbScore.textContent = `Imdb score : ${dataMovie.imdb_score}`

            let directorsList = [dataMovie.directors[0]]
            for (let i = 1; i < dataMovie.directors.length; i++) {
                directorsList.push(` ${dataMovie.directors[i]}`)
            }
            let directors = document.getElementById("directors")
            directors.textContent = directorsList

            let image = document.getElementById("imgModalDetails")
            image.src = dataMovie.image_url

            let imageOnTablet = document.getElementById("imgOnTablet")
            imageOnTablet.src = dataMovie.image_url

            let longDescription = document.getElementById("longDescriptionModalDetails")
            longDescription.textContent = dataMovie.long_description

            let actorsList = [dataMovie.actors[0]]
            for (let i = 1; i < dataMovie.actors.length; i++) {
                actorsList.push(` ${dataMovie.actors[i]}`)
            }
            let actors = document.getElementById("actorsModalDetails")
            actors.textContent = actorsList
        })

    })
}