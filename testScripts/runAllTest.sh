set -e
./testScripts/run_test.sh ./createRectangle.js ./appTestData/patternsInput/rectangleInput ./appTestData/expectedOutput/rectangleOutput
./testScripts/run_test.sh ./createTriangle.js ./appTestData/patternsInput/triangleInput ./appTestData/expectedOutput/trianlgeOutput
./testScripts/run_test.sh ./createDiamond.js ./appTestData/patternsInput/diamondInput ./appTestData/expectedOutput/diamondOutput
