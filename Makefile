install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
publish:
	npm run build
	npm publish
lint:
	npm run eslint
