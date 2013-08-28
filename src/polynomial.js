// Copyright (C) 2011 Amit A. Levy
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
  for (var i = 0; i < polynomial.length; ++i) {
    if (!polynomial[i].multiply) {
      polynomial[i] = BigInteger(polynomial[i]);
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
    result.push(Math.ceil(Math.random() * 65536) - 32768);
  }
  return new Polynomial(result);
};

/**
 * Finds the intercept of the polynomial of given degree that fits the given pairs using the Lagrange polynomial form.
**/
Polynomial.intercept = function(ps, degree) {
  var pairs = [];
  for (var i = 0; i < ps.length; ++i) {
    pairs[i] = [ps[i][0], ps[i][1]];
    if (!pairs[i][0].numerator) {
      pairs[i][0] = $F(pairs[i][0]);
    }
    if (!pairs[i][1].numerator) {
      pairs[i][1] = $F(pairs[i][1]);
    }
  }
  
  var result = $F(0);
  var negative1 = $F(-1);
  for (var i = 0; i < degree + 1; ++i) {
    var intermediate = $F(1);
    for (var j = 0; j < degree + 1; ++j) {
      if (i != j) {
        intermediate = intermediate.multiply(negative1.multiply(pairs[j][0].divide(pairs[i][0].subtract(pairs[j][0]))));
      }
    }
    result = result.add(intermediate.multiply(pairs[i][1]));
  }
  return result.numerator;
},

Polynomial.prototype = {
  evaluate: function(x) {
    x= BigInteger(x);
    var result = this.polynomial[0];
    var k = 1;
    for (var i = 1; i < this.polynomial.length; ++i) {
      result = result.add(this.polynomial[i].multiply(x.pow(k++)));
    }
    return result;
  },
  
  equals: function(o) {
    if (o.polynomial && o.polynomial.length == this.polynomial.length) {
      for (var i = 0; i < this.polynomial.length; ++i) {
        if (!o.polynomial[i].equals(this.polynomial[i])) {
          return false;
        }
      }
      return true;
    }
    return false;
  },
  
  toString: function() {
    return "<Polynomial: " + this.polynomial + ">";
  }
}
