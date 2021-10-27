import BinaryTreeNode from "@/dataStructure/BinaryTreeNode";
import {
  inorderRecursiveTraversal,
  postorderRecursiveTraversal,
  preorderRecursiveTraversal,
} from "@/treeAlgorithm/recursiveTraversal";

const root = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.right = new BinaryTreeNode(3);
root.left.left = new BinaryTreeNode(4);
root.left.right = new BinaryTreeNode(5);
root.right.left = new BinaryTreeNode(6);
root.right.right = new BinaryTreeNode(7);

preorderRecursiveTraversal(root, (item) => {
  console.log("preorderRecursiveTraversal: " + item);
});
inorderRecursiveTraversal(root);

postorderRecursiveTraversal(root, (item) => {
  console.log("postorderRecursiveTraversal: " + item);
});
