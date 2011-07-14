var JSTest = function() {
  return {
    fail: function(message) {
      if (!message) {
        message = "Failed.";
      }
      throw message;
    },

    assert: function(condition, message) {
      if (!message) {
        message = "Expected condition [true], but was [false]."
      }
      if (condition !== true) {
        this.fail(message);
      }
    },

    assertEqual: function(expected, actual, message) {
      if (!message) {
        message = "Excepcted [" + expected + "], but got [" + actual + "]";
      }
      this.assert(expected == actual, message);
    },

    assertException: function(func, message) {
      if (!message) {
        message = "Exception expected, but was not caught.";
      }
      var caught;
      try {
        func();
      } catch(er) {
        caught = true;
      } finally {
        if (!caught) {
          this.fail(message);
        }
      }
    },

    RunTests: function(TestSuite) {
      var successes = 0;
      var errors = 0;
      for (var k in TestSuite) {
        try {
          TestSuite[k]();
          successes += 1;
        } catch(er) {
          print("Error in \"" + k + "\":");
          print("\t" + er);
          errors += 1;
        }
      }

      print("Finished: " + successes + " sucess(es), " + errors + " error(s).");
    }
  }
}();