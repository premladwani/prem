function sum(n){
let ans=0;
for(let i=0;i<n;i++){
    ans+=i;
}
return ans;
}
function sumtill100(){
    console.log(sum(100));
}
setTimeout(sumtill100,2*1000);
console.log("hello world");
console.log("hello prem");
const fs=require("fs");
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
});