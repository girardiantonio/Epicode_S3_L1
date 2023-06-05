/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function concstring(string1, string2) {
  let words = string1.substring(0, 2) + string2.slice(-3);

  let upperCaseWords = words.toUpperCase();
  console.log(upperCaseWords);
}

concstring("hello", "Epicode"); //

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

function random() {
  let array1 = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 101);
    array1.push(randomNumber);
  }
  console.log(array1);
}

random(); // [17, 30, 96, 23, 48, 96, 58, 54, 73, 65] UN ARRAY DEI NUMERI RANDOM CHE LA FUNZIONE HA GENERATO

/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/

function pari() {
  let array2 = [57, 69, 50, 40, 20, 94, 44, 57, 4, 84];
  let array3 = [];
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 === 0) array3.push(array2[i]);
  }
  console.log(array3);
}

pari(); // [50, 40, 20, 94, 44, 4, 84]

/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sum() {
  let array4 = [28, 13, 2, 52, 79, 45, 8, 47, 97, 77];
  let sumArray = 0;
  for (let i = 0; i < array4.length; i++) {
    sumArray += array4[i];
  }
  console.log(sumArray);
}

sum(); // 448

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/

function sumreduce() {
  let array4 = [28, 13, 2, 52, 79, 45, 8, 47, 97, 77];
  let sumArray = array4.reduce((acc, curr) => acc + curr, 0);
  console.log(sumArray);
}

sum(); // 448

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

function sumn(n) {
  let array5 = [7, 4, 83, 4, 41, 23, 94, 13, 79, 9];
  let array6 = [];
  for (let i = 0; i < array5.length; i++) {
    array6.push(array5[i] + n);
  }
  console.log(array6);
}

sumn(20); // [27, 24, 103, 24, 61, 43, 114, 33, 99, 29]

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

function lengthstr(str) {
  let lengths = [];
  for (let i = 0; i < str.length; i++) {
    lengths.push(str[i].length);
  }
  console.log(lengths);
}

lengthstr(["EPICODE", "is", "great"]);

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

function dis() {
  let disNumber = [];
  for (let i = 0; i < 101; i++) {
    if (i % 2 !== 0) {
      disNumber.push(i);
    }
  }
  console.log(disNumber);
}

dis();

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function searchmovies() {
  let oldestFilm = movies[0]; // suppongo che il primo film è il più vecchio

  for (let i = 1; i < movies.length; i++) {
    let currentFilm = movies[i];
    if (currentFilm.Year < oldestFilm.Year) {
      oldestFilm = currentFilm;
    }
  }

  console.log(oldestFilm);
}

searchmovies();

/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function titlemovies() {
  let titles = [];

  for (let i = 0; i < movies.length; i++) {
    titles.push(movies[i].Title);
  }
  console.log(titles);
}

titlemovies();

/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function yearmovies() {
  mill = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Year > 2000) {
      mill.push(movies[i]);
    }
  }
  console.log(mill);
}

yearmovies()

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

function idmovies(ids) {
  id = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].imdbID === ids) {
      id.push(movies[i]);
    }
  }
  console.log(id);
}

idmovies("tt0167261");

/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

function sumyears() {
  let sum = 0;
  for (let i = 0; i < movies.length; i++) {
    sum += parseInt(movies[i].Year);
  }
  console.log(sum);
}

sumyears();
