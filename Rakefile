require 'html-proofer'

# https://www.supertechcrew.com/jekyll-check-for-broken-links/
# https://github.com/gjtorikian/html-proofer
# HTMLProofer's cache is in tmp/.htmlproofer/cache.log
task :test do
    options = {
        :check_opengraph => true,
        :check_html      => true,
        :check_img_http  => true,
        :validation => {
            :report_unknown_tags  => true,
            :report_missing_names => true,
        },
        :verbose => 1,
    }
    HTMLProofer.check_directory("./_site", options).run
end
