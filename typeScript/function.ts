function abcd(a: number , b : number) : number {
    return a + b 
}

console.log(abcd(10 , 20 ))


function xyz(name: string , age: number , cb: (arg : string) =>  void) : void {
    cb("hi")
    console.log(name , age)
}
xyz("nik" , 23 , (arg : string) => {
    console.log(arg)
})


function pqrs(name : string , age: number , gender? : string
): void{
    console.log(name , gender , age)
}

pqrs("nik" , 23 , "male")
pqrs("xyz" , 25 )

function abcde(name : string , age : number , gender: string = "cant be define") : void{
    console.log(name , gender , age)
}

abcde("nik" , 23 , "male")
abcde("xyz" , 25 )




// rest operator  

function foo(...args  : number[]) : void{
    console.log(args)

}

foo(10 , 20 , 30 , 40 , 50)




