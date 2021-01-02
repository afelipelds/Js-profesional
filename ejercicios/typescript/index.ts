console.log('Hello Typescript')

function add(a: number, b:number) {
    return a + b
}
const sum = add(2,3);
console.log('Saludo a todos con la función suma: ', sum);


//Boolean
let muted:boolean = false;


//number
let myNum: number = 21;


//string
const myLetter: string = `Mi edad es ${myNum}`;


//array
let people: string[] = [];
people = ['Santiago', 'Rosalba', 'Felipe'];

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Andrés');
peopleAndNumbers.push(999);

console.log('people', people);
console.log('peopleAndNumbers', peopleAndNumbers);

//enum
enum Color {
    Rojo,
    violeta,
    Verde,
}
const COLORFAVORITO: Color = Color.Verde;
console.log('color favorito es', COLORFAVORITO);

//any
let comodin: any = 'jOKER';
comodin = {type: 'joker'};

//object
let myObj:object = {type: 'joker'};

