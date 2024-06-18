#!/bin/bash
set -x 
npm run build 

cp -TRv 'dist/' '../../docs' 
set +x 