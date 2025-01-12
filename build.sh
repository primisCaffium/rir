#!/bin/bash

cd src || exit 1
zip -r ../rir.zip *

cd ..
mv rir.zip rir.xpi

echo "Done"