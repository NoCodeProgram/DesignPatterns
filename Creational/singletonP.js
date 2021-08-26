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
  static getInstance()
  {
    if (!Singleton.instance)
    {
        Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}


let s1 = Singleton.getInstance();
let s2 = Singleton.getInstance();

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

class SingletonCat
{
  constructor(name)
  {
    this.name = name
  }
  static instance;
  static getInstance(name)
  {
    if (!SingletonCat.instance)
    {
        SingletonCat.instance = new SingletonCat(name);
    }
    return SingletonCat.instance;
  }
  speak()
  {
    console.log(this.name,'meow')
  }
}

let sKitty = SingletonCat.getInstance('kitty')
let sNabi = SingletonCat.getInstance('nabi')
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

