let visitedNodes = [];

function depthFirstSearch(graph, startNode, targetNode) {
    if (startNode == targetNode) { return visitedNodes; }
    else if (graph.length < 1) { return []; }
    else {
        if (!visitedNodes[startNode]) {
            visitedNodes.push(Number(startNode));
            // have to ensure they are the same data type else the 
            // check to see if an item is in an array will not 
            // recognize it is already in there and add it again
            console.log(visitedNodes)
        }
        for(node of graph[startNode]) {
            if (!visitedNodes[Number(node)]) {
                depthFirstSearch(graph, node, targetNode);
            }
        }
    }
    return [];
}
