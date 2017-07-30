#!/bin/bash -eu

while read line; do
    mkdir -p $(dirname api_calls${line})
    curl 127.0.0.1:8000$line/ > api_calls${line}
done < api_calls/api_calls.txt
