function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      // do some async logic here
      setTimeout(function(){
        resolve("hi there")
      },3000);
    });
    return p;
  }
  
 async function main() {
   
  let value= await kiratsAsyncFunction();
  console.log("hi here");
    console.log(value);
    }
  main();
  console.log("hi here2");