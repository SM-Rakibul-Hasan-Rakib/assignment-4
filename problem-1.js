/*function signature/sample */
function calculateMoney(ticketSale) {
  //you can give your own error message
  if(isNaN(ticketSale) || ticketSale < 0){
    return "Invalid Number"
  }

  // You have to write your code here
  
  const ticketSalePrice = 120;
  const oneSecurityDailySallery = 500;
  const stafNumber = 8;
  const stafLunchBill = 50;

  const totalSale = ticketSale * ticketSalePrice;
  const totalLunchBill = stafLunchBill * stafNumber;
  const totalamount = totalLunchBill + oneSecurityDailySallery;
  
  const result = totalSale - totalamount;

  return result;


  }
  
  console.log(calculateMoney(10));
  console.log(calculateMoney(1055));
  console.log(calculateMoney(93));
  console.log(calculateMoney(-93));
