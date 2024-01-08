#!/usr/bin/env bash

cp -TRv build/ ../
# <meta name="description" content="Web site created using create-react-app"/>
var1='<meta name="description" content="Web site created using create-react-app"\/>'
var2=''
sed -i -e "s/$var1/$var2/" ../index.html
var1='<title>React App<\/title>'
var2='<title>Michael Mortlock-Chapman Portfolio Site<\/title>'
sed -i -e "s/$var1/$var2/" ../index.html
var1='<head>'
var2='<head><base href="/"/>'
sed -i -e "s/$var1/$var2/" ../index.html