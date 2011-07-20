SRCS=$(wildcard src/*.js)
TESTS=$(wildcard tests/*.js)
MINIFIER=uglifyjs
JS=node

all: jsss.min.js
	@echo "Done"
	
jsss.js: $(SRCS)
	@echo "Concatenating sources..."
	@cat $(SRCS) > $@

tests/%.js: jsss.js
	@$(JS) lib/test.js jsss.js $@

test: jsss.js $(TESTS)

jsss.min.js: jsss.js test
	@echo "Minifying..."
	@$(MINIFIER) jsss.js > jsss.min.js

clean:
	@rm jsss.js