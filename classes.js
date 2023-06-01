class Musica {
    constructor(poster,nome, artistas, album, spotify, youtube){
        this.poster = poster;
        this.nome = nome;
        this.artistas = artistas;
        this.album = album;
        this.spotify = spotify;
        this.youtube = youtube;
        
    }
}

// Crie a classe Playlist.
// Ela só terá um atributo: listaDeMusicas
// Seu construtor não receberá nenhuma entrada e 
// ele inicializará o atributo listaDeMusicas com um array vazio.
class Playlist{
    constructor(){
        this.listaDeMusicas = [];
    }

    adicionarMusica(musica){
        this.listaDeMusicas.push(musica);
    }

    exibirNoHTML(){
        document.getElementById('container-cards').innerHTML = "";
        for(let i =0;i<this.listaDeMusicas.length;i++){
            // YOUTUBE
            document.getElementById('container-cards').innerHTML += (`
            <div class = 'card'>
                <iframe class = 'frame-video'
                    src="${this.listaDeMusicas[i].youtube}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
                </div> `);
        }
    }

}

/*
class musica {
    constructor(poster, nome, artistas, album, spotify, yotube){
        this.poster = poster;
        this.nome = nome;
        this.artistas = artistas;
        this.album = album;
        this.spotify = spotify;
        this.yotube = yotube;
    }
}
*/


