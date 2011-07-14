SRCS=$(wildcard src/*.js)
TESTS=$(wildcard tests/*.js)

all: jsss.js test

jsss.js: $(SRCS)
	cat $(SRCS) > $@

test: jsss.js $(TESTS)
	js -f jsss.js -f lib/test.js $(patsubst %.js,-f %.js,$(TESTS)) -e "JSTest.RunTests()"

clean:
	rm jsss.js