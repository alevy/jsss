load("lib/test.js");
load("src/jsss.js");

JSTest.RunTests({
  
  testRandomPolynomialArrayLengthIsOneGreaterThanDegree: function() {
    poly = JsSS.randomPolynomial(6 , 0);
    JSTest.assertEqual(7, poly.length);
    
    poly = JsSS.randomPolynomial(2 , 0);
    JSTest.assertEqual(3, poly.length);
  },
  
  testRandomPolynomialDegreeCannotBeNegative: function() {
    JSTest.assertException(function() {
      JsSS.randomPolynomial(-1, 5);
    }, "Negative degree should raise exception.");
  }
  
});
