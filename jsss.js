var Polynomial = function() {
  var polynomial;
  if (arguments.length > 0) {
    if (arguments[0].length) {
      polynomial = arguments[0];
    } else {
      polynomial = [];
      for (var i = 0; i < arguments.length; ++i) {
        polynomial.push(arguments[i]);
      }
    }
  }
  this.polynomial = polynomial;
};

Polynomial.randomPolynomial = function(degree, intercept, n) {
  if (degree < 0) {
    throw "Degree must be a non-negative integer!";
  }
  var result = [intercept];
  for (var i = 0; i < degree; ++i) {
    result.push(Math.random());
  }
  return new Polynomial(result);
};

Polynomial.interpolate = function() {
  
};

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
