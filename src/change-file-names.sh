#!/bin/sh

find . -name "123*.txt" -exec rename 's/^123_//' {} ";"

find . -name '*.jsx' -type f -exec sh -c '
for f; do
    echo $f
    echo "${f%/*}/${f##*/123_}"
done' sh {} +
