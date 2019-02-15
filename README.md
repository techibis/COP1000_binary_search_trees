# COP1000_binary_search_trees
Example of how to run a Binary Search Tree in JavaScript
class BinarySearchTree {
	constructor(val) {
		this.value = val;
		this.right = null;
		this.left = null;
	}

	insert(value) {
		let subtree = value < this.value ? 'left' : 'right';
		if (this[subtree]) {
            this[subtree].insert(value);
		} else {
            this[subtree] = new BinarySearchTree(value);
		}
	}

	getMax() {
		if (this.right) {
			return this.right.getMax();
		} else {
			return this.value;
		}
	}

	getMin() {
		if (this.left) {
			return this.left.getMin();
		} else {
			return this.value;
		}
	}

	contains(value) {
		if (value === this.value) {
			return true;
		}
		let subtree = value < this.value ? 'left' : 'right';
		if (this[subtree]) {
			return this[subtree].contains(value);
		} else {
			return false;
		}
	}

}
