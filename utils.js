// 获取树高度
function treeDepth(root) {
  if (!root) {
    return 0;
  }
  const leftChildDepth = treeDepth(root.leftChild);
  const rightChildDepth = treeDepth(root.rightChild);
  const childDepth = Math.max(leftChildDepth, rightChildDepth);
  return childDepth + 1;
}

export { treeDepth };