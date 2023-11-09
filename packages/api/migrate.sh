#!/usr/bin/bash

mapfile -t migrations < <(find drizzle -name "*.sql")

for migration in "${migrations[@]}"
do
  yarn wrangler d1 execute icanhazfox --local --file="$migration"
done
