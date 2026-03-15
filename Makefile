default: build

build:
	npm run build
	npx js-beautify --type html -r dist/**/*.html

serve:
	npm run dev

clean:
	rm -fr dist

rsync:
	rsync -azu -e ssh --delete -v \
	    ~/altbox/dist/ andy@diper.petdance.com:/srv/altbox/

test:
	prove t/html.t
