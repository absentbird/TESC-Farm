#!/bin/bash
n=""

# If run from the scripts directory, go to root:
if [[ "${PWD##*/}" == "scripts" ]]; then
  cd ..
fi

# If run from a site directory, launch that site:
lc=1
for site in $(nl ../scripts/data/site.list); do
    if [[ "${PWD##*/}" == $site ]]; then
        cd ..
        n=$lc
    fi
    lc=$((lc + 1))
done

echo "Launching development environment"

# Launch the API
cd api
go run cmd/farmapi.go &
sleep 2
cd ..
echo "API has launched"
echo ""

# Choose the frontend site:
echo 'Please select from the site list:'
nl ./scripts/data/site.list
count=$(wc -l ./scripts/data/site.list | cut -d '.' -f1)
count="${count//[$'\t\r\n ']}"
while [ -z "$n" ]; do
    read -p 'Select option: ' n
    n="${n//[$'\t\r\n ']}"
    if [ "$n" -gt 0 ] && [ "$n" -le "$count" ]; then
        n=""
        break
    fi
done
value="$(sed -n "${n}p" ./scripts/data/site.list)"
echo "Selected site $n: $value"
echo ""

# Launch the webserver
cd $value
yarn install
yarn vite &
sleep 1
cd ..
echo "Front-end site launched"
echo ""

# On exit kill all background processes
close() {
  echo ""
  echo "Exiting on Ctrl+C"
  pkill -P $$
  exit 0
}
trap close SIGINT

sleep 2
echo "Development environment launched. Press Ctrl+C to exit."

while true; do
    sleep 1
done
