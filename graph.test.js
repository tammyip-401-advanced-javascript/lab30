const Graph = require('./graph')

describe('Graph', () => {
  let graph

  beforeEach(() => {
    graph = new Graph();
  })

  describe('addNode()', () => {

    it('adds the given value into the graph', () => {
      expect(graph.addNode('A')).toEqual('A');
    })
  })

  describe('addEdge', () => {
    it('returns null from an empty graph', () => {
      expect(graph.getNodes()).toEqual(null);
    })

    it('properly returns a graph with one node and one edge', () => {
      graph.addNode('A');
      graph.addEdge('A', 'A');
      expect(graph.adjacencyList.get('A')).toEqual(["A"])
    })

    it('successfully adds an edge to the graph', () => {
      graph.addNode('A');
      graph.addNode('B')
      graph.addNode('C');
      graph.addNode('D')
      graph.addNode('E');
      graph.addEdge('A', 'D')

      expect(graph.adjacencyList.get('A')).toEqual(["D"])
      expect(graph.adjacencyList.get('D')).toEqual(["A"])
    })

    it('can add multiple edges to a graph', () => {
      graph.addNode('A');
      graph.addNode('B')
      graph.addNode('C');
      graph.addNode('D')
      graph.addNode('E');
      graph.addEdge('A', 'D');
      graph.addEdge('B', 'E');

      expect(graph.adjacencyList.get('A')).toEqual(["D"])
      expect(graph.adjacencyList.get('D')).toEqual(["A"])
      expect(graph.adjacencyList.get('B')).toEqual(["E"])
      expect(graph.adjacencyList.get('E')).toEqual(["B"])
    })

    it('can add edges with a weight', () => {
      graph.addNode('A');
      graph.addNode('B')
      graph.addNode('C');
      graph.addNode('D')
      graph.addNode('E');
      graph.addEdge('A', 'D', 3);
      expect(graph.adjacencyList.get('A')).toEqual([{ "D": 3 }])
      expect(graph.adjacencyList.get('D')).toEqual([{ "A": 3 }])

    })
  })

  describe('getNodes()', () => {
    it('lists all of the nodes in a grpah', () => {
      graph.addNode('A');
      graph.addNode('B')
      graph.addNode('C');
      graph.addNode('D')
      graph.addNode('E');

      expect(graph.getNodes()).toEqual(['A', 'B', 'C', 'D', 'E'])
    })

    it('returns null from an empty graph', () => {
      expect(graph.getNodes()).toEqual(null);
    })
  })

  describe('getNeighbors()', () => {

    it('returns null from an empty graph', () => {
      expect(graph.getNodes()).toEqual(null);
    })

    it('returns the neighbors of a given node', () => {
      graph.addNode('A');
      graph.addNode('B')
      graph.addNode('C');
      graph.addNode('D')
      graph.addNode('E');
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('A', 'D')
      expect(graph.getNeighbors('A')).toEqual(['B', 'C', 'D'])
    })

    it('returns neighbors with a weight', () => {
      graph.addNode('A');
      graph.addNode('B')
      graph.addNode('C');
      graph.addNode('D')
      graph.addNode('E');

      graph.addEdge('A', 'B', 3);
      graph.addEdge('A', 'C', 3);
      // console.log('list', graph.adjacencyList)
      expect(graph.getNeighbors('A')).toEqual([{ "B": 3 }, { "C": 3 }]);
      expect(graph.getNeighbors('B')).toEqual([{ "A": 3 }]);
      expect(graph.getNeighbors('C')).toEqual([{ "A": 3 }]);

    })
  })

  describe('size()', () => {
    it('returns the number of nodes in a graph', () => {
      graph.addNode('A');
      graph.addNode('B')
      graph.addNode('C');
      graph.addNode('D')
      graph.addNode('E');
      expect(graph.size()).toEqual(5);
    })
  })
})