class Usuario {


    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
      return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
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
        this.libros.push(arrayDeLibros)
   }
    

    getBookNames(){
        
        console.log(this.libros.map((miObjt) => miObjt.libro))
    }
    
}

let persona1 = new Usuario('Nahuel','Pedemonte');


persona1.addMascota('Chiqui')
persona1.addMascota('Buda')
persona1.addMascota('Chimuela')



console.log(persona1.getFullName());
persona1.countMascotas()
persona1.addBook('El Principe','Nicolas Maquiavelo');
persona1.addBook('Antipatrones del Desarrollo Ágil', 'David Tanzer')
persona1.addBook('Martin Fierro','José Hernández')

console.log(persona1.mascotas);

console.log(persona1.libros)
console.log(persona1.getBookNames());


