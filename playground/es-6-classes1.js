
class Person {

   constructor(name='Anonymous',age=0){
     this.name=name,
     this.age=age 
   }
   getDescription(){
       return `${this.name} is ${this.age}`
   }
   getGreeting(){
       return ` Hello!! I'm ${this.name}!`
   }
}


class Traveller extends Person {

  constructor(name,age,home){
      super(name,age)
      this.home=home
  }
  getGreeting(){
     const greeting=super.getGreeting()
     return this.home ? `${greeting} and Im from ${this.home}` : greeting
  }

}


const p1= new Traveller ()
const p2= new Traveller ('Paweł',26,'Werbkowice')
const p3= new Traveller (undefined,undefined,'New Zeland')


console.log(p1.getGreeting())
console.log(p2.getGreeting())
console.log(p3.getGreeting())


