#!/bin/bash

set -x
npm run build
process_id=$!
wait process_id
cp -TRv build/ '../docs'
set +x