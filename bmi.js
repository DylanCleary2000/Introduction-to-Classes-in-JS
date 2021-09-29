class BMI
{
    constructor(height, weight)
    {
        this.height=height;
        this.weight=weight;
    }

    //Method To return the individuals BMI
    calculateBMI()
    {
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}

//Create instance of class and display.
let myBMI = new BMI(2,85);
let calc = myBMI.calculateBMI();
console.log(calc);