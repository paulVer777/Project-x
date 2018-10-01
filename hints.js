

/////////////////////////////////////////////
const word = 'Pawel Polit'

console.log(word.split(''))


word.split('') // < ['P','a','w','e','l',',','P','o','l','i','t']
word.split(' ') // < ['Pawel','Polit']
word.split() // < ['Pawel Polit] 

//////////////////////////////

const multiplier = {

    multi:2,
 
    doIt(...nums){
      
     return nums.map((value,index) => value * this.multi)
       
    }
 }
 
 
 console.log(multiplier.doIt(2,10,100))