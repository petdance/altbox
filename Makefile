default: build

build:
	bundle exec jekyll build

watch:
	bundle exec jekyll build --incremental --watch

serve:
	bundle exec jekyll serve

clean:
	rm -fr _site

rsync:
	rsync -azu -e ssh --delete -v \
	    ~/altbox/_site/ andy@alex.petdance.com:/srv/altbox

test:
	prove t/html.t
