#!/bin/bash

if [ $# -ne 1 ]; then
  echo '引数が１つ必要です'
  exit 1
fi

touch posts/$1.md

today=$(date "+%Y-%m-%d")

echo '---'>>posts/$1.md
echo 'title: '"'${1}'">>posts/$1.md
echo 'date: '"'${today}'">>posts/$1.md
echo 'tags: '>>posts/$1.md
echo '- '>>posts/$1.md
echo '---'>>posts/$1.md

exit 0