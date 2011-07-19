var RationalNumber = function(numerator, denominator) {
  this.numerator = numerator;
  this.denominator = denominator || 1;
  this.simplify();
};

var $F = (function() {

  function gcd(a ,b) {
    if (b == 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }

  RationalNumber.prototype = {
    simplify: function() {
      var _gcd = gcd(this.numerator, this.denominator);
      this.numerator = this.numerator / _gcd;
      this.denominator = this.denominator / _gcd;
      if (this.denominator < 0) {
        this.numerator *= -1;
        this.denominator *= -1;
      }
      return this;
    },
  
    add: function(other) {
      var numerator = this.numerator * other.denominator + other.numerator * this.denominator;
      var denominator = this.denominator * other.denominator;
      return new RationalNumber(numerator, denominator).simplify();
    },
    
    subtract: function(other) {
      var negativeOther = new RationalNumber(-1 * other.numerator, other.denominator);
      return this.add(negativeOther);
    },
    
    multiply: function(other) {
      return new RationalNumber(this.numerator * other.numerator, this.denominator * other.denominator);
    },
    
    divide: function(other) {
      var inverseOther = new RationalNumber(other.denominator, other.numerator)
      return this.multiply(inverseOther);
    },
    
    pow: function(jsnum) {
      return new RationalNumber(Math.pow(this.numerator, jsnum), Math.pow(this.denominator, jsnum));
    },
    
    floor: function() {
      return new RationalNumber(this.numerator - this.numerator % this.denominator, this.denominator);
    },
    
    mod: function(other) {
      if (!other.numerator || !other.denominator) {
        other = new RationalNumber(other);
      }
      return this.subtract(this.divide(other).floor().multiply(other));
    },
  
    equals: function(o) {
      return this.numerator == o.numerator && this.denominator == o.denominator;
    },
  
    toString: function() {
      return "<Fraction: " + this.numerator + "/" + this.denominator + ">";
    }
  };
  
  return (function(n, d) {
    return new RationalNumber(n,d);
  });
})();

