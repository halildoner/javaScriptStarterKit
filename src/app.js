console.log("Kodlama.io ile programlama dillerini öğreniyoruz.")

//JS type safe değildir
let DolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "Ankara"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 // const readonly olduğu için hata verir.

console.log(euroDun)

//Array 
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>") 
}

console.log(konutKredileri)


