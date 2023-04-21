const prostokat = {
    bokA: 5,
    bokB: 10,
    obwod: function() {
      return 2 * (this.bokA + this.bokB);
    },
    pole: function() {
      return this.bokA * this.bokB;
    },
    czyKwadrat: function() {
      return this.bokA === this.bokB;
    }
  };
  
  console.log(`Obwód prostokąta: ${prostokat.obwod()}`);
  console.log(`Pole prostokąta: ${prostokat.pole()}`);
  console.log(`Czy prostokąt jest kwadratem? ${prostokat.czyKwadrat()}`);