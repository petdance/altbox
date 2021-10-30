default: build

clean:
	bundle exec jekyll clean

build:
	bundle exec jekyll clean
	bundle exec jekyll doctor
	bundle exec jekyll build --strict_front_matter --safe --trace

watch:
	bundle exec jekyll build --incremental --watch

serve:
	bundle exec jekyll serve

rsync:
	rsync -azu -e ssh --delete -v \
	    ~/altbox/_site/ andy@alex.petdance.com:/srv/altbox

test:
	prove t/html.t
