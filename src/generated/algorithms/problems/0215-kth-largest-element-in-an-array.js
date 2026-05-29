export default {
  "id": 215,
  "name": "Kth Largest Element in an Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/kth-largest-element-in-an-array",
  "relativeDir": "K/Kth Largest Element in an Array",
  "slug": "0215-kth-largest-element-in-an-array",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "python": 4,
    "javascript": 93
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int findKthLargest(vector<int>& nums, int k) {\r\n        sort(nums.begin(), nums.end());\r\n        int m = nums.size();\r\n        int d = m - k;\r\n        int ans;\r\n        for(int i =0; i < nums.size(); i++){\r\n            if(i == d){\r\n                ans = nums[d];\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findKthLargest(self, nums: List[int], k: int) -> int:\r\n        nums.sort(reverse = True)\r\n        return nums[k-1]",
    "javascript": "// TC: O(klogk + (n-k)logk) => O(nlogk) | SC: O(k)\r\nvar findKthLargest = function(nums, k) {\r\n    const minHeap = new MinHeap();\r\n    \r\n    // add k elements, one-by-one to heap\r\n    // TC: O(klogk) | SC: O(k)\r\n    for (let i = 0; i < k; i++) {\r\n        minHeap.push(nums[i]);\r\n    }\r\n\r\n    // loop remaining elements\r\n    // TC: O((n-k)logk) time\r\n    for (let j = k; j < nums.length; j++) {\r\n        // pop smaller element, and push larger element\r\n        if (nums[j] > minHeap.peek()) {\r\n            minHeap.pop();\r\n            minHeap.push(nums[j]);\r\n        }\r\n        // otherwise, do nothing\r\n    }\r\n    \r\n    return minHeap.peek();\r\n};\r\n\r\nclass MinHeap {\r\n    constructor() {\r\n        this.heap = [];\r\n    }\r\n    \r\n    push(node) {\r\n        // add node to end of heap\r\n        this.heap.push(node);\r\n        // find correct position of node\r\n        this.siftUp();\r\n    }\r\n    \r\n    siftUp() {\r\n        let currIdx = this.heap.length - 1,\r\n            parentIdx = Math.floor((currIdx - 1) / 2);\r\n        while (currIdx > 0 && this.heap[parentIdx] > this.heap[currIdx]) {\r\n            // swap values, and set new currIdx and parentIdx\r\n            this.swap(currIdx, parentIdx);\r\n            currIdx = parentIdx;\r\n            parentIdx = Math.floor((currIdx - 1) / 2);\r\n        }\r\n    }\r\n    \r\n    pop() {\r\n        const min = this.heap[0]; \r\n        // assign top node to last node to retain complete binary tree property\r\n        this.heap[0] = this.heap[this.heap.length - 1];\r\n        // pop last node and find correct position of top node\r\n        this.heap.pop();\r\n        this.siftDown();\r\n        return min;\r\n    }\r\n    \r\n    siftDown() {\r\n        let currIdx = 0,\r\n            leftIdx = currIdx * 2 + 1,            \r\n            idxToSwap = leftIdx;\r\n        const heapLen = this.heap.length;\r\n        \r\n        while (leftIdx < heapLen) {            \r\n            // calc right child node\r\n            let rightIdx = leftIdx + 1;\r\n            \r\n            // set idxToSwap\r\n            if (rightIdx < heapLen && this.heap[rightIdx] < this.heap[leftIdx]) idxToSwap = rightIdx;\r\n            else idxToSwap = leftIdx;\r\n            \r\n            // compare smaller child node to curr node\r\n            if (this.heap[currIdx] <= this.heap[idxToSwap]) break;\r\n            \r\n            // otherwise, swap vals and set new currIdx and leftIdx\r\n            this.swap(currIdx, idxToSwap);\r\n            currIdx = idxToSwap;\r\n            leftIdx = currIdx * 2 + 1;\r\n        }\r\n    }\r\n    \r\n    swap(i, j) {\r\n        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];    \r\n    }\r\n    \r\n    peek() {\r\n        return this.heap[0];\r\n    }\r\n    \r\n    size() {\r\n        return this.heap.length;\r\n    }\r\n}"
  }
}
