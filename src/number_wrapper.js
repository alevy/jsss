var NumberWrapper = function(i) {
  this.value = i;
  this.numerator = i;
  this.denominator = 1;
};

var $N = function(i) {
  return new NumberWrapper(i);
};

(function() {
  NumberWrapper.prototype = {
    add: function(other) {
      if (!other.value) {
        return other.add(this);
      }
      return new NumberWrapper(this.value + other.value);
    },
    
    subtract: function(other) {
      if (!other.value) {
        return other.subtract(this);
      }
      return new NumberWrapper(this.value - other.value);
    },
    
    multiply: function(other) {
      if (!other.value) {
        return other.multiply(this);
      }
      return new NumberWrapper(this.value * other.value);
    },
    
    divide: function(other) {
      if (!other.value) {
        return other.divide(this);
      }
      return new RationalNumber(this.value, other.value);
    },
    
    pow: function(jsnum) {
      return new NumberWrapper(Math.pow(this.value, jsnum));
    },
    
    floor: function() {
      return new NumberWrapper(Math.floor(this.value));
    },
    
    mod: function(other) {
      return new NumberWrapper(this.value % other.value);
    },
  
    equals: function(o) {
      return this.value == o.value;
    },
  
    toString: function() {
      return this.value;
    }
  };
})();

