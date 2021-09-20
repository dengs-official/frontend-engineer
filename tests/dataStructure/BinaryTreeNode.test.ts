import BinaryTreeNode from "@/dataStructure/BinaryTreeNode";

const root = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.right = new BinaryTreeNode(3);
root.left.left = new BinaryTreeNode(4);
console.log(root);
