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

//functions
function add2(a: number, b: number): number {
    return a + b;
}
const addition = add2(4,5);
console.log('addition', addition);


function Adder(a: number): (number) => number {
    return function(b: number) {
        return a * b;
    };
}
const giveMeAdder = Adder(3);
const responseOfAdder = giveMeAdder(2);
console.log('responseOfAdder', responseOfAdder);


function fullName(firstName: string, lastName: string = 'Smith', additionalI?: string): string {
    return `${firstName} ${lastName}`;
}

const Felipe = fullName('Felipe', 'Eslava');
const Santo = fullName('Santiago');
const Ros = fullName('Rosalba', 'Zuluaga')
const Jhon = fullName('Jhon', 'Parra', 'Abril')

console.log(Felipe, Santo, Ros, Jhon);
