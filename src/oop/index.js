class Customer{
    //deger atabilmek icin prototyping oluştururuz. Cunku js de class yoktur.
    constructor(id,cusotmerNubmer){
        //instance nin id id dedik. yani newlenen idyi yerleştirdik.
        this.id = id
        this.cusotmerNubmer = cusotmerNubmer
    }
}

let customer = new Customer(1,"1231");

//name yok ama ekledik prototip oluşturduk.
customer.name = "Ferit";
console.log(customer.name);

console.log(customer.cusotmerNubmer)

class IndividalCustomer extends Customer{
    constructor(firstName, id, cusotmerNubmer){
        //customer e yollar
        super(id,cusotmerNubmer)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName, id, cusotmerNubmer){
        //customer e yollar
        super(id,cusotmerNubmer)
        this.companyName = companyName
    }
}