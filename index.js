// function mostrarLista(lista){
//     if(lista.length <= 0) {
//         console.log("La lista esta vacia");
//     }else{
//         console.log(lista)
//     }
// }


// mostrarLista([]);



class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        console.log(`Nombre de usuario: ${this.nombre} ${this.apellido}`);
    }

    addMascota(nuevaMascota) {
        this.mascotas.push(nuevaMascota);
        console.log(this.mascotas);
    }

    countMascotas() {
        console.log(this.mascotas.length) ;
    }

    addBook(titulo, autor) {
      let nuevoLibro = {titulo, autor};
      this.libros.push(nuevoLibro);
        console.log(this.libros);
    }

    getBookNames() {
        let listaLibros = [this.libros[this.titulo]];
        console.log(listaLibros);
    }


}

let juan = new Usuario ("Juan", "Lopez", [{titulo:"Cenicienta", autor:"Green"}, {titulo:"El principito", autor:"El Barto"} ], ["Perro", "Gato", "Vaca"]);

console.log(juan);

juan.getFullName();
juan.countMascotas();
juan.addMascota("Raton");
juan.getBookNames();
juan.addBook("Los 3 chanchitos", "Hanna Barbera");
juan.addBook("El psicoanalista", "Katzenbah")

/*Hacer que Usuario cuente con los siguientes atributos:
nombre: String
apellido: String
libros: Object[]
mascotas: String[]
*/
/*getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.
*/