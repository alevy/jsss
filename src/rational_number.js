// Copyright (C) 2011 Amit A. Levy
var RationalNumber = function(numerator, denominator) {
  this.numerator = BigInteger(numerator);
  this.denominator = denominator ? BigInteger(denominator) : BigInteger.ONE;
  this.simplify();
};

var $F = (function() {

  function gcd(a ,b) {
    while (b != 0) {
      var _b = a % b;
      a = b
      b = _b;
    }
    return a;
  }

  RationalNumber.prototype = {
    simplify: function() {
      if (this.numerator == 0) {
        return this;
      }
      var _gcd = gcd(this.numerator, this.denominator);
      this.numerator = this.numerator.divide(_gcd);
      this.denominator = this.denominator.divide(_gcd);
      if (this.denominator < 0) {
        this.numerator = this.numerator.negate();
        this.denominator = this.denominator.negate();
      }
      return this;
    },
  
    add: function(other) {
      var numerator = this.numerator.multiply(other.denominator).add(other.numerator.multiply(this.denominator));
      var denominator = this.denominator.multiply(other.denominator);
      return new RationalNumber(numerator, denominator).simplify();
    },
    
    subtract: function(other) {
      var negativeOther = new RationalNumber(other.numerator.negate(), other.denominator);
      return this.add(negativeOther);
    },
    
    multiply: function(other) {
      return new RationalNumber(this.numerator.multiply(other.numerator), this.denominator.multiply(other.denominator));
    },
    
    divide: function(other) {
      var inverseOther = new RationalNumber(other.denominator, other.numerator)
      return this.multiply(inverseOther);
    },
    
    pow: function(jsnum) {
      return new RationalNumber(Math.pow(this.numerator, jsnum), Math.pow(this.denominator, jsnum));
    },
    
    floor: function() {
      return new RationalNumber(this.numerator.subtract(this.numerator.remainder(this.denominator)), this.denominator);
    },
    
    mod: function(other) {
      if (!other.numerator || !other.denominator) {
        other = new RationalNumber(other, 1);
      }
      var tnum = this.numerator.multiply(other.denominator);
      var onum = this.denominator.multiply(other.numerator);
      var denom = this.denominator.multiply(other.denominator);
      return new RationalNumber(tnum.remainder(onum), denom);
    },
  
    equals: function(o) {
      return this.numerator.compare(o.numerator) == 0 && this.denominator.compare(o.denominator) == 0;
    },
  
    toString: function() {
      return "<Fraction: " + this.numerator + "/" + this.denominator + ">";
    }
  };
  
  return (function(n, d) {
    return new RationalNumber(n,d);
  });
})();

