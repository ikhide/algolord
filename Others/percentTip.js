function splitter(bill, noOfPeople, percentTip) {
  const billPerPerson = (percentTip * bill) / 100;
  const billTotal = billPerPerson / noOfPeople;
  return billTotal;
}

console.log(splitter(142.55, 5, 15));
