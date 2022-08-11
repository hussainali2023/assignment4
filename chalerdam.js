const ricePrice = 1700;
const riceQuantity = 10;
const oneKgPrice = ricePrice / riceQuantity;
const priceOfDhaiKg = oneKgPrice * 2.5;
// console.log(priceOfDhaiKg);

function oilPrice(diselQuantity, petrolQuantity, oktenQuantity){
    if((typeof diselQuantity !== 'number') && (typeof petrolQuantity !== 'number') && (typeof oktenQuantity !== 'number')){
        return 'please enter a valid input';
    }
    const diselPrice = 114;
    const allDiselPrice = diselPrice * diselQuantity;
    const petrolPrice = 130;
    const allPetrolPrice = petrolPrice * petrolQuantity;
    const oktenPrice = 135;
    const allOktanePrice = oktenPrice * oktenQuantity;
    const totalPrice = allDiselPrice + allPetrolPrice + allOktanePrice;
    return totalPrice;
}
const oilQuantity = oilPrice(65, 'kjjh', 65);
console.log(oilQuantity);


function numbers( num1, num2, num3){
    if(typeof num1 !== "number") {
        return 'wrong number'
    }
    else if(typeof num2 !== "number") {
        return 'wrong number'
    }
    else if(typeof num3 !== "number") {
        return 'wrong number'
    }
    const sum = num1 + num2 + num3;
    return sum
}
const total= numbers(6,10,true);
console.log(total);