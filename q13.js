function calculateTax(income) {
    const taxRate = income <= 40000 ? 0.1 : income <= 80000 ? 0.2 : 0.3;
    const taxAmount = income * taxRate;
    return taxAmount;
  }
  
  const income1 = 30000;
  const tax1 = calculateTax(income1);
  console.log(`Tax for income $${income1}: $${tax1}`);
  
  const income2 = 60000;
  const tax2 = calculateTax(income2);
  console.log(`Tax for income $${income2}: $${tax2}`);
  
  const income3 = 100000;
  const tax3 = calculateTax(income3);
  console.log(`Tax for income $${income3}: $${tax3}`);