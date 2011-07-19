var SecretSharing = {}

SecretSharing.generate = function(data, numShares, threshold) {
  data = BigInteger(data);
  outData = [];
  outShares = [];
  
  var dataStr = data.toString(16);
  
  for (var c = 0; c < dataStr.length; ++c) {
    var remainder = BigInteger.parse(dataStr[c], 16);
    outData.push(remainder);
    var polynomial = Polynomial.randomPolynomial(threshold - 1, remainder);
    var shares = [];
    for (var i = 1; i <= numShares; ++i) {
      if (!outShares[i - 1]) {
        outShares[i - 1] = [];
      }
      outShares[i - 1].push([i, polynomial.evaluate(i)]);
    }
  }
  return {data: outData, shares: outShares};
}

SecretSharing.solve = function(shares, threshold, outputBase) {
  var result = [];
  for (var i = 0; i < shares[0].length; ++i) {
    var passShares = []
    for (var j = 0; j < threshold; ++j) {
      passShares.push(shares[j][i]);      
    }
    result.push(Polynomial.intercept(passShares, threshold - 1));
  }
  
  var output = ""
  for (var k in result) {
    output += result[k].toString(16);
  }
  return BigInteger.parse(output, 16).toString(outputBase || 10);
}