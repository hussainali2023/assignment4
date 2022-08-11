// Problem 3: oilPrice
// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 
// ভিডিও ভালো করে দেখবে। 
// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
// প্রতি লিটার অকটেনের এর দাম – 135 টাকা 
// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।

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