#!/bin/bash
n=""

# If run from the dev-setup directory, go to root:
if [[ "${PWD##*/}" == "dev-setup" ]]; then
  cd ../..
fi

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
nl ./docs/dev-setup/site.list
count=$(wc -l .docs/dev-setup/site.list | cut -d '.' -f1)
count="${count//[$'\t\r\n ']}"
while [ -z "$n" ]; do
    read -p 'Select option: ' n
    n="${n//[$'\t\r\n ']}"
    if [ "$n" -gt 0 ] && [ "$n" -le "$count" ]; then
        n=""
        break
    fi
done
value="$(sed -n "${n}p" ./docs/dev-setup/site.list)"
echo "Selected site $n: $value"
echo ""

# Launch the webserver
cd frontend/$value
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
