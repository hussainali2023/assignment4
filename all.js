// Problem:1  radianToDegree

function radianToDegree(radian){
    if(typeof radian !== 'number'){
        return "please enter a valid number";}
    const oneRadian = 57.2958; // 1 radiun = 57.2958 degree
    let degree = oneRadian * radian;
    degree = degree.toFixed(2);
    return degree;
}
const total = radianToDegree(1);
console.log(total);

// --------------------------------------------------------------------------------------------------------

// Problem:2  isJavaScriptFile 

function isJavaScriptFile(fileName){
    if(typeof fileName !== 'string'){
       return "please enter a valid input";}
    else if(fileName.endsWith('.js')){
       return true;
    }
    return false;
 }
 const result = isJavaScriptFile('index.js');
 console.log(result);

//  ---------------------------------------------------------------------------------------

// Problem 3: oilPrice

function oilPrice(diselQuantity, petrolQuantity, oktenQuantity){
    if(typeof diselQuantity !== 'number'){
        return 'please enter a valid input'; //eror messege
    }
    else if(typeof petrolQuantity !== 'number'){
        return 'please enter a valid input'
    }
    else if(typeof oktenQuantity !== 'number'){
        return 'please enter a valid input'
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
const oilQuantity = oilPrice(11,10,21);
console.log(oilQuantity);

// -----------------------------------------------------------------------------------------

// Problem 4: publicBusFare

function publicBusFare(people){
    if(typeof people !== 'number'){
       return "please enter a valid input"; //error messege
     } 
 const privateBus = people % 50;
 const microBus = privateBus % 11;
 const publicBusVara = microBus * 250;
 return publicBusVara;
 }
 const totalPeople = publicBusFare(10);
 console.log(totalPeople);

//  ------------------------------------------------------------

// Problem 5: isBestFriend

function isBestFriend(obj1, obj2){
    if(typeof obj1 !== 'object'){
        return "please enter a valid data";
    }
    else if(typeof obj2 !== 'object'){
        return "please enter a valid data";
    }
    else if( obj1.name === obj2.friend && obj1.friend === obj2.name){
        return true;
    }
    return false;
}
const friend1 = {name:'abdul', friend:'sahit'};
const friend2 = {name:'sahit', friend:'abdul'};
const friends = isBestFriend(friend1,friend2);
console.log(friends);
