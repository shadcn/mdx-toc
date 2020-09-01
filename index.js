const visit = require("unist-util-visit");

module.exports = () => (tree, file) => {
  file.data = [];

  visit(tree, "heading", (node) => {
    const [textNode] = node.children;
    file.data.push({
      depth: node.depth,
      value: textNode.value,
    });
  });
};
