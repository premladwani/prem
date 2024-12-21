function square(n){
  return n*n;
}
function cube(n){
  return n*n*n;
}
function quad(n){
return n*n*n*n;
}
function sumofsomething(a,b,fn){
  let sq1=fn(a);
  let sq2=fn(b);
  return sq1+sq2;
}
let ans= sumofsomething(5,6,cube);
console.log(ans);