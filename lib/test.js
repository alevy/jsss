#!/usr/bin/env node
var sys = require('sys');

var JSTest;
if (!JSTest) {
	JSTest = function() {
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
	      if (expected.equals) {
	        this.assert(expected.equals(actual), message);
	      } else {
	        this.assert(expected == actual, message);
        }
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
      
      suites: [],
      
      AddTestSuite: function(TestSuite) {
        this.suites.push(TestSuite);
      },
      
	    RunTests: function() {
	      var successes = 0;
	      var errors = 0;
	      for (var i in this.suites) {
	        var TestSuite = this.suites[i];
	        for (var k in TestSuite) {
	          try {
	            TestSuite[k]();
	            successes += 1;
	          } catch(er) {
	            sys.puts("Error in \"" + k + "\":");
	            sys.puts("\t" + er);
	            errors += 1;
	          }
	        }
	      }

	      sys.puts("Finished: " + successes + " sucess(es), " + errors + " error(s).");
	    }
	  }
	}();
};

fs = require('fs');
for (var i = 2; i < process.argv.length; ++i) {
  eval(fs.readFileSync(process.argv[i], "utf8").toString());
}

JSTest.RunTests();