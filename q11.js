const myObject = {
    name: 'Furqan',
    age: 30,
    occupation: 'Engineer'
  };
  
  for (const property in myObject) {
    if (myObject.hasOwnProperty(property)) {
      console.log(`Property: ${property}, Value: ${myObject[property]}`);
    }
  }