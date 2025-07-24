// UAE Gratuity Calculator
function calcUAEGratuity() {
  const salary = parseFloat(document.getElementById("uae-salary").value);
  const years = parseFloat(document.getElementById("uae-years").value);
  const result = document.getElementById("uae-result");

  if (isNaN(salary) || isNaN(years)) {
    result.textContent = "Please enter all valid values.";
    return;
  }

  let gratuity = 0;
  if (years < 5) {
    gratuity = (21 * salary / 30) * years;
  } else {
    gratuity = (30 * salary / 30) * years;
  }

  result.innerHTML = `Estimated Gratuity: <br><strong>AED ${gratuity.toFixed(2)}</strong>`;
}

// UK Tax Calculator
function calcUKTax() {
  const income = parseFloat(document.getElementById("uk-income").value);
  const result = document.getElementById("uk-result");

  if (isNaN(income)) {
    result.textContent = "Please enter a valid income.";
    return;
  }

  let tax = 0;
  if (income > 12570) {
    let taxable = income - 12570;
    if (taxable <= 37700) tax = taxable * 0.2;
    else if (taxable <= 150000) tax = (37700 * 0.2) + ((taxable - 37700) * 0.4);
    else tax = (37700 * 0.2) + ((150000 - 37700) * 0.4) + ((taxable - 150000) * 0.45);
  }

  result.innerHTML = `Estimated Tax: <br><strong>£ ${tax.toFixed(2)}</strong>`;
}

// Lease Calculator
function calcLease() {
  const amount = parseFloat(document.getElementById("lease-price").value);
  const term = parseFloat(document.getElementById("lease-term").value);
  const rate = parseFloat(document.getElementById("lease-rate").value);
  const result = document.getElementById("lease-result");

  if (isNaN(amount) || isNaN(term) || isNaN(rate)) {
    result.textContent = "Please enter all valid values.";
    return;
  }

  const monthlyRate = rate / 100 / 12;
  const months = term * 12;
  const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

  result.innerHTML = `Monthly Lease Payment: <br><strong>£ ${monthlyPayment.toFixed(2)}</strong>`;
}

// Mortgage Calculator
function calcMortgage() {
  const amount = parseFloat(document.getElementById("mortgage-amount").value);
  const term = parseFloat(document.getElementById("mortgage-years").value);
  const rate = parseFloat(document.getElementById("mortgage-rate").value);
  const result = document.getElementById("mortgage-result");

  if (isNaN(amount) || isNaN(term) || isNaN(rate)) {
    result.textContent = "Please enter all valid values.";
    return;
  }

  const monthlyRate = rate / 100 / 12;
  const months = term * 12;
  const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

  result.innerHTML = `Monthly Mortgage Payment: <br><strong>£ ${monthlyPayment.toFixed(2)}</strong>`;
}

// Pension Calculator with Compound Interest
function calcPension() {
  const currentAge = parseFloat(document.getElementById("current-age").value);
  const retireAge = parseFloat(document.getElementById("retire-age").value);
  const contrib = parseFloat(document.getElementById("monthly-contrib").value);
  const savings = parseFloat(document.getElementById("current-savings").value);
  const result = document.getElementById("pension-result");

  if (
    isNaN(currentAge) || currentAge < 0 ||
    isNaN(retireAge) || retireAge < 0 ||
    isNaN(contrib) || contrib < 0 ||
    isNaN(savings) || savings < 0
  ) {
    result.textContent = "Please enter all valid values.";
    return;
  }

  const months = (retireAge - currentAge) * 12;

  // If retirement age is less than current age, skip interest growth
  if (months <= 0) {
    result.innerHTML = `Estimated Pension Pot:<br><strong>£ ${savings.toFixed(2)}</strong>`;
    return;
  }

  const annualInterestRate = 0.05;
  const monthlyRate = annualInterestRate / 12;

  const futureValueContributions = contrib * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  const futureValueSavings = savings * Math.pow(1 + monthlyRate, months);
  const total = futureValueContributions + futureValueSavings;

  result.innerHTML = `Estimated Pension Pot:<br><strong>£ ${total.toFixed(2)}</strong>`;
}
