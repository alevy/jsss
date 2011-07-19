JSTest.AddTestSuite({
  testConstructsIntegerWhenNoDenominator: function() {
    var rational = new RationalNumber(3);
    JSTest.assertEqual(1, rational.denominator);
  },
  
  testSimplifyUnsimplifyableFraction: function() {
    var rational = new RationalNumber(3,1);
    JSTest.assertEqual(3, rational.numerator);
    JSTest.assertEqual(1, rational.denominator);
  },
  
  testSimplifyWithSimplifyableFraction: function() {
    var rational = new RationalNumber(256, 12);
    JSTest.assertEqual(64, rational.numerator);
    JSTest.assertEqual(3, rational.denominator);
  },
  
  testSimplifyWithNegativeSimplifyableFraction: function() {
    var rational = new RationalNumber(-256, 12);
    JSTest.assertEqual(-64, rational.numerator);
    JSTest.assertEqual(3, rational.denominator);
  },
  
  testAdd: function() {
    var rational1 = new RationalNumber(256, 12);
    var rational2 = new RationalNumber(1, 12);
    JSTest.assertEqual(new RationalNumber(257, 12), rational1.add(rational2));
  },
  
  testAddDifferentDenominators: function() {
    var rational1 = new RationalNumber(3, 4);
    var rational2 = new RationalNumber(5, 7);
    JSTest.assertEqual(new RationalNumber(41, 28), rational1.add(rational2));
  },
  
  testAddNegativeNumber: function() {
    var rational1 = new RationalNumber(3, 4);
    var rational2 = new RationalNumber(-5, 7);
    JSTest.assertEqual(new RationalNumber(1, 28), rational1.add(rational2));
  },
  
  testSubtract: function() {
    var rational1 = new RationalNumber(3, 4);
    var rational2 = new RationalNumber(5, 7);
    JSTest.assertEqual(new RationalNumber(1, 28), rational1.subtract(rational2));
  },
  
  testMultiply: function() {
    var rational1 = new RationalNumber(3, 4);
    var rational2 = new RationalNumber(5, 7);
    JSTest.assertEqual(new RationalNumber(15, 28), rational1.multiply(rational2));
  },
  
  testDivide: function() {
    var rational1 = new RationalNumber(3, 4);
    var rational2 = new RationalNumber(5, 7);
    JSTest.assertEqual(new RationalNumber(21, 20), rational1.divide(rational2));
  },
  
  testPowWithJSNumber: function() {
    var rational1 = new RationalNumber(3, 4);
    JSTest.assertEqual(new RationalNumber(9, 16), rational1.pow(2));
  },
  
  testModWithJSNumber: function() {
    var rational1 = new RationalNumber(15, 2);
    JSTest.assertEqual(new RationalNumber(3, 2), rational1.mod(3));
  }
});