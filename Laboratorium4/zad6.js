function utworzProstokat() {
    const bokA = parseInt(document.getElementById("bokA").value);
    const bokB = parseInt(document.getElementById("bokB").value);
    
    const prostokat = {
      bokA: bokA,
      bokB: bokB,
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
    
    const wyniki = document.getElementById("wyniki");
    wyniki.innerHTML = `
      Obwód prostokąta: ${prostokat.obwod()}<br>
      Pole prostokąta: ${prostokat.pole()}<br>
      Czy prostokąt jest kwadratem? ${prostokat.czyKwadrat()}
    `;
  }