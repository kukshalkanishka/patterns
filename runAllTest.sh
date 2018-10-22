set -e
./run_test.sh generateRectangle.js ./test/patternsInput/rectangleInput ./test/expectedOutput/rectangleOutput
./run_test.sh ./generateTraingle.js ./test/patternsInput/triangleInput ./test/expectedOutput/trianlgeOutput
./run_test.sh ./generateDiamond.js ./test/patternsInput/diamondInput ./test/expectedOutput/diamondOutput
