#!/bin/env perl

use warnings;
use strict;

use Test::More;
use Test::HTML::Tidy5;
use File::Slurp;
use Encode qw(decode_utf8);

my @files = glob( '_site/*.html' );
plan( tests => scalar @files );

for my $filename ( @files ) {
    my $text = decode_utf8(read_file( $filename ));

    html_tidy_ok( $text, $filename );
}
