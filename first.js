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