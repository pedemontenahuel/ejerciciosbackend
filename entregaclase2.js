class Usuario {
    nombre;
    apellido;
    libros;
    mascotas;

    constructor(nombre,apellido,){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
      return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota){
     return void   console.log(this.mascotas.push(mascota));
    }


    countMascotas(){
      let cantidad = this.mascotas.length 
      console.log(`tiene ${cantidad} mascotas`)
    }

    addBook(nombreLibro,autorLibro){
        const arrayDeLibros = {
            libro: nombreLibro,
            autor: autorLibro,
        }
        return void

        console.log(this.libros.push(arrayDeLibros))

    }

    getBookNames(){
        
        console.log(this.libros.map((miObjt) => miObjt.libro))
    }
    
}
let mascotas1 = new Usuario('Nahuel');
let persona1 = new Usuario('Nahuel','Pedemonte');


mascotas1.addMascota('Chiqui')
mascotas1.addMascota('Buda')
mascotas1.addMascota('Chimuela')



console.log(persona1.getFullName());
mascotas1.countMascotas()
persona1.addBook('El Principe','Nicolas Maquiavelo');
persona1.addBook('Antipatrones del Desarrollo Ágil', 'David Tanzer')
persona1.addBook('Martin Fierro','José Hernández')

console.log(mascotas1.mascotas);

console.log(persona1.libros)
console.log(persona1.getBookNames());



