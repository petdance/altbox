default: build

build:
	jekyll build

watch:
	jekyll build --incremental --watch

clean:
	rm -fr _site

rsync:
	rsync -azu -e ssh --delete --progress \
	    ~/altbox/_site/ andy@alex.petdance.com:/srv/altbox

test:
	prove t/html.t
