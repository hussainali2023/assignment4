// Problem:2  isJavaScriptFile 

// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 

function isJavaScriptFile(string){
   if(typeof string !== 'string'){
      return "please enter a valid string file name";}
   else if(string.endsWith('.js')){
      return true;
   }
   return false;
}
const fileName = isJavaScriptFile(true);
console.log(fileName);