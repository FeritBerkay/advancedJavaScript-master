//var, let, const
//javascript type safe degildir.
// var sayı1 = 10;
// sayı1 = "Ferit Berkay"
// console.log(sayı1);

//type safe kısmı alttaki gibidir. let kullanmak lazım.
// let sayı2 = 10;
// let sayı2 = "Ferit Berkay"
// console.log(sayı2);

// let makarna = {sosu:"Yogurtlu", id:1};
// function save(patates) {
//     console.log(patates)
// }
// save(makarna);

let student = {name:"Patates", id:1}
function save(puan=10,ogrenci) {
    // console.log(ogrenci.name + " : " + puan)
}
save(100,student) 
//default deger kullanmak icin undafined kullandık yani bizim bole bir seyimiz yok demiş olduk bununla birlikte studentı ogrenciye atamış olduk puanı default aldık.
save(undefined,student)

let students  = ["Engin Demiroğ", "Halit Kalaycı", "Ferit Berkay"]
//bu sekilde yaz istersen hicbir cacık olmaz. Java bu konuca cok iyi.
let students2 = [student, {name:"Kofte", id:2}, "Ankara",   {kofte:"patates"}]

// console.log(students2);





//rest = geriye kalanlar "params"
//products array seklindedir. Ikinci deger sonsuz tane alabilir .net in paramsı
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0])
}

//showProducts(10, "Elma", "Armut" , "Karpuz", "Karpuz2", "Karpuz5", "Karpuz3", "Karpuz1");



//bize array lazım degil ama array ile alırsak maxa ulasamayız cunku tek bir elelman sayılır
let points = [1,23,23,2,4,24,345,45,66,787,8,4,42,32,54]
//spread
console.log(Math.max(...points))
//spread ayırdı.
console.log(..."absd", "g", ..."gsdg", "k")


//Destructuring arrayın degerlerini değişkenlere atama yontemi. 
let populations = [10000,20000,30000,[40000,50000]]
//sırasıyla indexlere gore aktarır. Destructuring icinde destructuring
let [small,medium,high,[veryHigh, Maximum]] = populations;

console.log(small);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(Maximum);

//ilk indeximizi aldık
function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populations);

let category = {id:1, name:"içecek"}
console.log(id)
console.log("name")

let  {id,name} = category

console.log(id)
console.log(name);