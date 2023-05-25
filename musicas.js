let musica1 = new Musica(
    "foto.jpg",
    "Kill Bill",
    "SZA",
    "SOS",
    "https://open.spotify.com/embed/track/1Qrg8KqiBpW07V7PNxwwwL?utm_source=generator"
);

let musica2 = new Musica();
musica2.poster = "";
musica2.nome = "Tally";
musica2.artistas = "BLACKPINK";
musica2.album = "BORN PINK";
musica2.spotify = "https://open.spotify.com/embed/track/0bYVPJvXr8ACmw313cVvhB?utm_source=generator";


/*
let musica20 = new Musica();
console.log(musica20.poster);


let musica2 = {
    poster:'threedaysgrace.jpg', 
    nome:'Never Too Late', 
    artista:'Three Days Grace', 
    album:'One-X',
    spotify: 'https://open.spotify.com/embed/track/7gRFDGEzF9UkBV233yv2dc?utm_source=generator'
}
let musica3 = {
    poster:'three.jpg', 
    nome:'Break', 
    artista:'Three Days Grace', 
    album:'Life Starts Now',
    spotify: 'https://open.spotify.com/embed/track/1RDvyOk4WtPCtoqciJwVn8?utm_source=generator'
}
let musica4 = {
    poster:'froid.jpg', 
    nome:'Fique Rico ou Moralismo', 
    artista:'Froid', 
    album:'Teoria do Ciclo da Água',
    spotify: ''
}
let musica5 = {
    poster:'froidcafe.webp', 
    nome:'Frans café', 
    artista:'Froid', 
    album:'O Pior Disco do Ano',
    spotify: ''
}
let musica6 = {
    poster:'djonga.jpg', 
    nome:'Bença', 
    artista:'Djonga', 
    album:'Ladrão',
    spotify: ''
}
let musica7 = {
    poster:'pseudo.webp', 
    nome:'Pseudosocial', 
    artista:'Froid', 
    album:'Pseudosocial',
    spotify: ''
}
let musica8 = {
    poster:'vidacara.webp', 
    nome:'Sereia', 
    artista:'Xamã, Neo Beats, MC Ryan SP, Oruam, Orochi', 
    album:'Vida Cara',
    spotify: ''
}
let musica9 = {
    poster:'hino.jpeg', 
    nome:'Hino Dos Mlks', 
    artista:'Mc Daniel, BIN, Orochi, Caio Passos', 
    album:'Hino Dos Mlks',
    spotify: ''
}
let musica10 = {
    poster:'rappa.jpg', 
    nome:'Minha alma (A paz que eu não quero)', 
    artista:'O Rappa', 
    album:'Lado B Lado A',
    spotify: ''
}
*/

let listaDeMusicas = []
listaDeMusicas.push(musica1 ,musica2)

for(let i = 0; i < listaDeMusicas.length; i++){
    document.write(
        `<div class='card'>
            <iframe src="${listaDeMusicas[i].spotify}">
            </iframe>
        </div>`
    )
    }
