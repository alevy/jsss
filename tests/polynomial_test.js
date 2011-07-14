load("lib/test.js");
load("src/polynomial.js");

JSTest.RunTests({
  
  testRandomPolynomialArrayLengthIsOneGreaterThanDegree: function() {
    poly = Polynomial.randomPolynomial(6 , 0);
    JSTest.assertEqual(7, poly.polynomial.length);
    
    poly = Polynomial.randomPolynomial(2 , 0);
    JSTest.assertEqual(3, poly.polynomial.length);
  },
  
  testRandomPolynomialDegreeCannotBeNegative: function() {
    JSTest.assertException(function() {
      Polynomial.randomPolynomial(-1, 5);
    }, "Negative degree should raise exception.");
  },
  
  testEvaluateSimplePolynomial: function() {
    var poly = new Polynomial([0, 4, 5]);
    JSTest.assertEqual(540, poly.evaluate(10));
  }
  
});
