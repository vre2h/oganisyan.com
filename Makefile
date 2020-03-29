start:
	npx gatsby develop

deploy: lint format build
	npx gh-pages -d public

build:
	npx gatsby build

format:
	npx prettier --write src/**/*.{js,jsx,json,md}

clean:
	npx gatsby clean

serve:
	npx gatsby serve

lint:
	npx eslint src/
