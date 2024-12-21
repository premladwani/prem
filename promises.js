function kiratsAsyncFunction() {
  let p = new Promise(function(resolve) {
    // do some async logic here
    setTimeout(function(){
      resolve("hi there")
    },2000);
  });
  return p;
}

async function main() {//it is not main fn it is only the name
 
let value=  kiratsAsyncFunction();
value.then(function(){
  console.log(value);
});
console.log("hi here");
  }
main();
console.log("hi here2");