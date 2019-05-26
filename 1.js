import { treeDepth } from './utils'

// 判断是否为平衡二叉树（递归）
function isSelfBalancingTree(root) {
  if (!root) {
    return true;
  }
  const leftChildDepth = treeDepth(root.leftChild);
  const rightChildDepth = treeDepth(root.rightChild);
  const diff = Math.abs(leftChildDepth - rightChildDepth);
  if (diff > 1) {
    return false;
  }
  return isSelfBalancingTree(root.left) && isSelfBalancingTree(right);
}

// 判断是否为平衡二叉树（后序遍历）
function isSelfBalancingTreeErgodic(root, depth) {
  if (!root) {
    depth.depth = 0;
    return true;
  }
  const leftDepth = { depth: 0 };
  const rightDepth = { depth: 0 };

  // 后续遍历，减少节点重复遍历
  if (isSelfBalancingTreeErgodic(root.leftChild, leftDepth) && isSelfBalancingTreeErgodic(root.rightChild, rightDepth)) {
    // 计算每个节点的平衡因子
    const diff = Math.abs(leftDepth.depth - rightDepth.depth);
    if (diff <= 1) {
      depth.depth = Math.max(leftDepth.depth, rightDepth.depth) + 1;
      return true;
    }
  }
  return false;
}

// 平衡二叉树 左右子树置换


// 分层遍历二叉树
// 借鉴图的宽度优先搜索
let nodeArr = [root];
let ergodicResult = '';
function breadthFirstSearchTree() {
  if (!nodeArr.length) {
    return true;
  }
  const root = nodeArr.shift();
  if (!root) {
    return true;
  }
  nodeArr.push(root.leftChild, root.rightChild);
  ergodicResult += root.val;
  breadthFirstSearchTree();
}

// 一个完全二叉树，插入一个节点，还是完全二叉树