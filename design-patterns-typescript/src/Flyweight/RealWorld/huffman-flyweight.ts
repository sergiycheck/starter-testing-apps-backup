function OOPApproach() {
  // Flyweight Node Class
  class FlyweightNode {
    constructor(
      public readonly char: string | null, // Character (null for internal nodes)
      public readonly freq: number, // Frequency
      public left: FlyweightNode | null = null, // Left child
      public right: FlyweightNode | null = null // Right child
    ) {}
  }

  // Flyweight Factory
  class FlyweightFactoryHuff {
    private nodes = new Map<string, FlyweightNode>();

    getNode(char: string | null, freq: number): FlyweightNode {
      const key = `${char}:${freq}`;
      if (!this.nodes.has(key)) {
        this.nodes.set(key, new FlyweightNode(char, freq));
      }
      return this.nodes.get(key)!;
    }
  }

  // Huffman Encoding
  class HuffmanCoding {
    private factory = new FlyweightFactoryHuff();

    buildTree(frequencyTable: Record<string, number>): FlyweightNode | null {
      const priorityQueue: FlyweightNode[] = Object.entries(frequencyTable)
        .map(([char, freq]) => this.factory.getNode(char, freq))
        .sort((a, b) => a.freq - b.freq);

      while (priorityQueue.length > 1) {
        const left = priorityQueue.shift()!;
        const right = priorityQueue.shift()!;
        const parent = this.factory.getNode(null, left.freq + right.freq);
        parent.left = left;
        parent.right = right;
        priorityQueue.push(parent);
        priorityQueue.sort((a, b) => a.freq - b.freq);
      }

      return priorityQueue[0] || null;
    }

    generateCodes(
      node: FlyweightNode | null,
      prefix = "",
      codes: Record<string, string> = {}
    ): Record<string, string> {
      if (!node) return codes;

      if (node.char) {
        codes[node.char] = prefix;
      }

      this.generateCodes(node.left, prefix + "0", codes);
      this.generateCodes(node.right, prefix + "1", codes);

      return codes;
    }
  }

  // Usage Example
  const frequencyTable = {
    a: 45,
    b: 13,
    c: 12,
    d: 16,
    e: 9,
    f: 5,
  };

  const huffman = new HuffmanCoding();
  const treeHuff = huffman.buildTree(frequencyTable);
  const codes = huffman.generateCodes(treeHuff);

  console.log("Huffman Codes:", codes);
}

function FPApproach() {
  type Node = {
    char: string | null; // Character (null for internal nodes)
    freq: number; // Frequency
    left?: Node; // Left child
    right?: Node; // Right child
  };

  // Helper to create a node
  const createNode = (char: string | null, freq: number, left?: Node, right?: Node): Node => ({
    char,
    freq,
    left,
    right,
  });

  // Build the Huffman Tree using a functional approach
  const buildTree = (frequencyTable: Record<string, number>): Node | null => {
    // Create an initial priority queue of nodes
    const priorityQueue = Object.entries(frequencyTable)
      .map(([char, freq]) => createNode(char, freq))
      .sort((a, b) => a.freq - b.freq);

    // Combine nodes until the tree is complete
    const combineNodes = (queue: Node[]): Node[] => {
      if (queue.length <= 1) return queue;

      const [left, right, ...rest] = queue;
      const parent = createNode(null, left.freq + right.freq, left, right);
      return combineNodes([...rest, parent].sort((a, b) => a.freq - b.freq));
    };

    return combineNodes(priorityQueue)[0] || null;
  };

  // Generate Huffman Codes using recursion
  const generateCodes = (
    node: Node | null,
    prefix = "",
    codes: Record<string, string> = {}
  ): Record<string, string> =>
    node
      ? node.char
        ? { ...codes, [node.char]: prefix } // Leaf node, assign code
        : {
            ...generateCodes(node.left || null, prefix + "0", codes),
            ...generateCodes(node.right || null, prefix + "1", codes),
          }
      : codes;

  // Usage Example
  const frequencyTable = {
    a: 45,
    b: 13,
    c: 12,
    d: 16,
    e: 9,
    f: 5,
  };

  const huffmanTree = buildTree(frequencyTable);
  const huffmanCodes = generateCodes(huffmanTree);

  console.log("Huffman Codes:", huffmanCodes);
}

FPApproach();
