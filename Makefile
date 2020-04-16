start:
	npx gatsby develop

post:
	git add .
	git commit -m 'Add post: $p'
	make deploy

deploy: lint format build push
	git push
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

make push:
	git push
