var Polynomial = function(polynomial) {
  this.polynomial = polynomial;
};

Polynomial.randomPolynomial = function(degree, intercept) {
  if (degree < 0) {
    throw "Degree must be a non-negative integer!";
  }
  var result = [intercept];
  for (var i = 0; i < degree; ++i) {
    result.push(Math.random());
  }
  return new Polynomial(result);
}

Polynomial.prototype = {
  evaluate: function(x) {
    var result = this.polynomial[0];
    var k = 1;
    for (var i = 1; i < this.polynomial.length; ++i) {
      result += this.polynomial[i] * Math.pow(x, k++);
    }
    return result;
  }
}
