import Comparator, { compareFn } from "@/comparator/Comparator";

export default class BinaryTreeNode<T> {
  public item: T;
  public left: BinaryTreeNode<T> | null;
  public right: BinaryTreeNode<T> | null;
  private comparator: Comparator<T>;
  constructor(
    item: T,
    left: BinaryTreeNode<T> | null = null,
    right: BinaryTreeNode<T> | null = null,
    compareFn: compareFn<T> = Comparator.defaultCompare
  ) {
    this.item = item;
    this.left = left;
    this.right = right;
    this.comparator = new Comparator(compareFn);
  }
}
