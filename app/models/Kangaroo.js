class Kangaroo {
  constructor(
      name = '',
      color = '',
      gender = '',
      weight = 0,
      tailLengthInch = 0,
      herbivore = false,
      carnivore = false
  ) {
      this.id = 0,
      this.name = name;
      this.color = color;
      this.gender = gender;
      this.weight = weight;
      this.tailLengthInch = tailLengthInch;
      this.herbivore = herbivore;
      this.carnivore = carnivore
  }
  eat(food){
      console.log(`Chomp chomp all the ${food}ies.`)
  }
}

export default Kangaroo;