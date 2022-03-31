class playlist {

    constructor(id,nombre){
        this.id = id;
        this.nombre = nombre;
        this.canciones=[];
    }

    agregar = (nombreSong,artistaSong,albumSong) => {


        if((nombreSong != "" && nombreSong != null ) && 
        (artistaSong != "" && artistaSong != null) && 
        (albumSong != "" && albumSong != null ) ){

            let obj = {
                id: 0,
                nombre:nombreSong,
                artista:artistaSong,
                album: albumSong
            }

            this.canciones.push(obj)
        }
    

    };


}
