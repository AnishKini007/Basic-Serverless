'use strict';

module.exports.genrandom = event =>{
 const randnumber = parseInt(Math.random()*100);
 console.log("Number generated is :",randnumber); 
 return randnumber;
};