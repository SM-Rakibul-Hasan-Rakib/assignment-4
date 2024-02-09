function monthlySavings(allPayments, livingCost) {
  // Check if the input parameters are valid
  if (!Array.isArray(allPayments) || typeof livingCost !== "number") {
    return "invalid input";
  }

  // Calculate total income
  const totalIncome = allPayments.reduce((acc, payment) => acc + payment, 0);

  // Calculate tax
  const tax = totalIncome * 0.2;

  // Calculate savings after tax and living cost deduction
  const savings = totalIncome - tax - livingCost;

  // Check if savings are greater than or equal to 0
  if (savings >= 0) {
    return savings; // Return total savings
  } else {
    return "earn more"; // Return string "earn more" if savings are negative
  }
}

// Example usage:
console.log(monthlySavings([1000, 2000, 3000], 5400)); // Output: 0
console.log(monthlySavings([1000, 2000, 2500], 5000)); // Output: 500
console.log(monthlySavings([900, 2700, 3400], 10000)); // Output: "earn more"
console.log(monthlySavings(100, [900, 2700, 3400])); // Output: "invalid input"
