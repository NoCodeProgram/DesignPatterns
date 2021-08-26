//////// normal class, objects//////////////
//////////////////////////////////////////////////
class Cat
{
  constructor(name)
  {
    this.name = name
  }
  speak()
  {
    console.log(this.name,'meow')
  }
}


let kitty = new Cat('kitty')
let nabi = new Cat('nabi')
kitty.speak()
nabi.speak()

if(kitty === nabi)
{
  console.log('they are same')
}
else
{
  console.log('they are not same')
}

///////////////////////////////////////////////////////////
//////////// Singleton /////////////////
class Singleton
{
  static instance;
  constructor()
  {
    if (!Singleton.instance)
    {
        Singleton.instance = this;
    }
    return Singleton.instance;
  }
}


let s1 = new Singleton();
let s2 = new Singleton();

if (s1 === s2)
{
  console.log('they are same, Singleton!');
}
else
{
  console.log('they are not same');
}


//////////////////////////////////////////////
///////////// singleton Cat//////////

class SingleCat
{
  static instance;
  constructor(name)
  {
    this.name = name
    if (!SingleCat.instance)
    {
        SingleCat.instance = this;
    }
    return SingleCat.instance;
  }  
  speak()
  {
    console.log(this.name,'meow')
  }
}

let sKitty = new SingleCat('kitty')
let sNabi = new SingleCat('nabi')
sKitty.speak()
sNabi.speak()

if(sKitty === sNabi)
{
  console.log('they are same')
}
else
{
  console.log('they are not same')
}

