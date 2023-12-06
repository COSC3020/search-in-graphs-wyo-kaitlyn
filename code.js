let visitedNodes = [];
let result = [];

function depthFirstSearch(graph, startNode, targetNode) {
    if(visitedNodes.includes(startNode) == false) {
        visitedNodes.push(startNode);
    }

    if (startNode == targetNode) { return visitedNodes; }
    else {
        if (graph[startNode]) {
            for(node of graph[startNode]) {
                if (visitedNodes.includes(node) == false) {
                    result = depthFirstSearch(graph, node, targetNode);
                }
            }
        }
    }
    return result;
}

console.log(depthFirstSearch([[1],[0,3],[0,1],[0,1,2,3]], 0, 2))