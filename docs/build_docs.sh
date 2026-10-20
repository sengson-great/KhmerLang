#!/usr/bin/env bash
set -e
cd "$(dirname "$0")/src"
./build_docs.sh "$@"
