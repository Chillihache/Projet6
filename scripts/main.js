import { loadBestMovie } from './loadBestMovie.js'
import { loadBestMovies } from './loadBestMovies.js'
import { loadGenre1 } from './loadGenre1.js'
import { loadGenre2 } from './loadGenre2.js'
import { loadAllGenres } from './loadAllGenres.js'
import { loadSelectedGenre } from './loadSelectedGenre.js'

loadBestMovie()
loadBestMovies()
loadGenre1()
loadGenre2()
loadAllGenres()

document.addEventListener("DOMContentLoaded", function() {
    const selectorButton = document.querySelector(".selectorButton");

    loadSelectedGenre(selectorButton.value);

    selectorButton.addEventListener("change", (event) => {

        loadSelectedGenre(selectorButton.value);
    });
});



