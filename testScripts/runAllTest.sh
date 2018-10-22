set -e
./run_test.sh ./createRectangle.js ./test/patternsInput/rectangleInput ./test/expectedOutput/rectangleOutput
./run_test.sh ./createTriangle.js ./test/patternsInput/triangleInput ./test/expectedOutput/trianlgeOutput
./run_test.sh ./createDiamond.js ./test/patternsInput/diamondInput ./test/expectedOutput/diamondOutput
