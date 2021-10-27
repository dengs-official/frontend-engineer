/**
 * 递归遍历
 */
import BinaryTreeNode from "@/dataStructure/BinaryTreeNode";

const defaultCallback = (item: number) => {
  console.log(item);
};

/**
 * 先序递归遍历
 * @param head
 */
export function preorderRecursiveTraversal(head: BinaryTreeNode<number> | null, callback = defaultCallback): void {
  if (head === null) {
    return;
  }
  callback(head.item);
  preorderRecursiveTraversal(head.left, callback);
  preorderRecursiveTraversal(head.right, callback);
}

export function inorderRecursiveTraversal(head: BinaryTreeNode<number> | null, callback = defaultCallback): void {
  if (head === null) {
    return;
  }
  inorderRecursiveTraversal(head.left, callback);
  callback(head.item);
  inorderRecursiveTraversal(head.right, callback);
}

export function postorderRecursiveTraversal(head: BinaryTreeNode<number> | null, callback = defaultCallback): void {
  if (head === null) {
    return;
  }
  postorderRecursiveTraversal(head.left, callback);
  postorderRecursiveTraversal(head.right, callback);
  callback(head.item);
}
