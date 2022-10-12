class Computer{

    constructor(brand, storage, ram, cpu){
        this.brand = brand;
        this.storage = storage;
        this.ram = ram;
        this.cpu = cpu;
    }

    store(capacity){
        if (this.storage < capacity){
            console.log("Operation failed! Not enough memory");
            return;
        }
        this.storage -= this.capacity;
        console.log("Operation successful");
    }

    toString(){
        return `
            {Brand: ${this.brand},
            Hard Disk: ${this.storage},
            RAM: ${this.ram}, 
            CPU: ${this.cpu}}`;
    }
}
// Creating computer instances
const hp = new Computer("HP", 500, 8, 2.13);
const lenovo = new Computer("Lenovo", 250, 4, 2);

console.log(hp.toString());

hp.store(501); // Operation failed! Not enough memory
hp.store(20); // Operation successful
