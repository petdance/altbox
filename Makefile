default: build

build:
	jekyll build

watch:
	jekyll build --incremental --watch

serve:
	jekyll serve

clean:
	rm -fr _site

rsync:
	rsync -azu -e ssh --delete -v \
	    ~/altbox/_site/ andy@alex.petdance.com:/srv/altbox

test:
	prove t/html.t
