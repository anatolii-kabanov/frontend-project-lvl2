install:
	npm install

gendiff:
	node bin/gendiff.js -h

publish:
	npm publish --dry-run

lint:
	npx eslint '.'

test-coverage:
	npm test -- --coverage --coverageProvider=v8
