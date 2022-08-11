// Problem 5: isBestFriend

// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

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