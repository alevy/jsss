var JsSS = function() {};

JsSS.randomPolynomial = function(degree, intercept) {
  if (degree < 0) {
    throw "Degree must be a non-negative integer!";
  }
  var result = [intercept];
  for (var i = 0; i < degree; ++i) {
    result.push(Math.random());
  }
  return result;
}

JsSS.prototype = {
  generate: function() {
    return 1;
  }
}
