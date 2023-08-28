const obj = {
    name: 'Furqan',
    regularFunction: function() {
      console.log(`Hello, ${this.name} (regular function)`);
    },
    arrowFunction: () => {
      console.log(`Hello, ${this.name} (arrow function)`);
    }
  };
  
  obj.regularFunction(); 
  obj.arrowFunction(); 