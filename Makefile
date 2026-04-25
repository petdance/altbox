default: build

build:
	find tool/ \( -name "*~" -o -name "*.edited" \) -exec rm -vf {} +
	rsync -a --exclude='*.yaml' tool/ public/tool/
	npm run build
	#npx js-beautify --type html -r dist/**/*.html

serve:
	npm run dev

clean:
	rm -fr dist public/tool

rsync:
	rsync -azu -e ssh --delete -v \
	    ~/altbox/dist/ andy@diper.petdance.com:/srv/altbox/

test:
	prove t/html.t
