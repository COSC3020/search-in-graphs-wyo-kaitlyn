const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');

// took this test code from JustinQuanCC's github

jsc.assert(JSON.stringify(depthFirstSearch([], 0, 1)) === JSON.stringify([]));

jsc.assert(JSON.stringify(depthFirstSearch([[1],[0,3],[0,1],[0,1,2,3]], 0, 2)) == JSON.stringify([0,1,3,2]));

jsc.assert(JSON.stringify(depthFirstSearch([[1],[0,3],[0,1],[0,1,3]], 0, 2)) == JSON.stringify([]));

jsc.assert(JSON.stringify(depthFirstSearch([[0,1],[2],[1,3],[2,4],[0]], 1, 0)) == JSON.stringify([1,2,3,4,0]));