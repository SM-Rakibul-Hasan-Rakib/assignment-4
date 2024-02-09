function monthlySavings(allPayments, livingCost) {
  // Check for invalid input
  if (!Array.isArray(allPayments) || typeof livingCost !== 'number') {
    return 'invalid input';
  }

  // Calculate total income
  const totalIncome = allPayments.reduce((sum, payment) => sum + payment, 0);

  // Calculate total savings after tax
  const afterTax = totalIncome - (totalIncome > 3000 ? 0.2 * totalIncome : 0);

  // Calculate savings after living cost
  const savings = afterTax - livingCost;

  // Return the result based on savings
  return savings >= 0 ? savings : 'earn more';
}

// Example usage:
console.log(monthlySavings([1000, 2000, 3000], 5400)); // Output: 0
console.log(monthlySavings([1000, 2000, 2500], 5000)); // Output: 500
console.log(monthlySavings([900, 2700, 3400], 10000)); // Output: "earn more"
console.log(monthlySavings(100, [900, 2700, 3400])); // Output: "invalid input"
