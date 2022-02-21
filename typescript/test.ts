
function echoWithArr<T> (arg: T): T{
    if(typeof arg === 'string'){
    console.log(arg.length)}
    return arg
}

interface IWithLength {
    length: number
}
function echoWithLength<T extends IWithLength>(arg: T):T{
    console.log(arg.length)
    return arg
    
}
echoWithLength({length:353}) 
interface IName {
    name: string
}
type Iperson = IName & {age:boolean}
let A: Iperson = {
    name:'23',
    age:false
}
type score = 'A' | 'B' | 'C'
let min: score = 'B'

let all = document.getElementById('ad')
let all2: HTMLCollectionOf<Element> = document.getElementsByClassName('sd')
let me: MouseEvent 
all.addEventListener('click',(e)=>{})
document.addEventListener('click',(e)=>{})