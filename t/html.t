#!/bin/env perl

use warnings;
use strict;

use Test::More;
use File::Next;
use URI::file;
use Test::WWW::Mechanize;

my $mech = Test::WWW::Mechanize->new( autotidy => 1 );

my $iter = File::Next::files( { file_filter => sub { /\.html$/ } }, '_site' );

my @files;
while ( my $filename = $iter->() ) {
    push( @files, $filename );
}
die unless @files;

plan tests => scalar @files;

for my $filename ( @files ) {
    subtest $filename => sub {
        plan tests => 2;

        my $url = URI::file->new( $filename )->abs( URI::file->cwd );

        $mech->get_ok( $url );

        # XXX This should check relative in _site, not the live site.
        # XXX Also we have to check the URLs in the <meta> tags.
        my @images = $mech->images();
        if ( @images ) {
            subtest 'Check images' => sub {
                plan tests => scalar @images;

                for my $image ( @images ) {
                    $mech->head_ok( $image->url_abs );
                }
            };
        }
        else {
            pass( 'No images to check' );
        }
    };
}

done_testing();

exit 0;
