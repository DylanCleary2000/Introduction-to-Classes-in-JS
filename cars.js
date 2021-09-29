class Vehicle
{
    constructor(make,model,year)
    {
        this.make=make;
        this.model=model;
        this.year=year;
    }

    information()
    {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

//Create instance of class
// let myVehicle = new Vehicle('Ford','Focus',2011);
// myVehicle.information();

//Child class extends from parent class Vehicle.
class Cars extends Vehicle
{
    constructor(make,model,year,doors)
    {
        super(make,model,year);//Using parent functionality, with "super".
        this.doors=doors;
    }

    information()
    {
        super.information();//Invokes Vehicle classes information method and adds onto it.
        console.log(`Doors: ${this.doors}`);
    }
}

let myCar = new Cars('Ford','Focus',2011,5);
myCar.information();

