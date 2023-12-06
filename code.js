function depthFirstSearch(graph, startNode, targetNode, visitedNodes = [], result =[]) {
    if(visitedNodes.includes(startNode) == false) {
        visitedNodes.push(startNode);
    }

    if (startNode == targetNode) { return visitedNodes; }
    else {
        if (graph[startNode]) {
            for(node of graph[startNode]) {
                if (visitedNodes.includes(node) == false) {
                    result = depthFirstSearch(graph, node, targetNode, visitedNodes, result);
                }
            }
        }
    }
    return result;
}