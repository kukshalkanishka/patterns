set -e
./testScripts/run_test.sh ./createRectangle.js ./appTestData/patternsInput/rectangleInput ./appTestData/expectedOutput/rectangleOutput
./testScripts/run_test.sh ./createTriangle.js ./appTestData/patternsInput/triangleInput ./appTestData/expectedOutput/triangleOutput
./testScripts/run_test.sh ./createDiamond.js ./appTestData/patternsInput/diamondInput ./appTestData/expectedOutput/diamondOutput
./testScripts/run_test.sh ./mergePatterns.js ./appTestData/patternsInput/rectAndTriangleInput ./appTestData/expectedOutput/rectAndTriangleOutput
