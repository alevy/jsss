JSTest.AddTestSuite({
  
  testPolynomialContructorCanTakeArray: function() {
    var arr = [0,2,3,4];
    var poly = new Polynomial(arr);
    JSTest.assertEqual(arr, poly.polynomial);
  },
  
  testPolynomialContructorCanTakeVarargInts: function() {
    var poly = new Polynomial(0,2,3,4);
    JSTest.assertEqual(4, poly.polynomial.length);
  },
  
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
  },
  
  testInteceptSmallIntegers: function() {
    var expected = 5;
    var actual = Polynomial.intercept([[1,21], [2,55], [3,107]], 2);
    JSTest.assertEqual(expected, actual);
  }
  
});
