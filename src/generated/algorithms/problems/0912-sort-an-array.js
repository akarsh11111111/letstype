export default {
  "id": 912,
  "name": "Sort an Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sort-an-array",
  "relativeDir": "S/Sort an Array",
  "slug": "0912-sort-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 47,
    "python": 25,
    "javascript": 52
  },
  "languages": {
    "cpp": "// Runtime: 150 ms (Top 37.48%) | Memory: 50.4 MB (Top 25.68%)\r\nclass Solution {\r\npublic:\r\n    vector<int> sortArray(vector<int>& nums) {\r\n        priority_queue<int, vector<int>, greater<int>>pq;\r\n        for(auto it : nums)\r\n        {\r\n            pq.push(it);\r\n        }\r\n        vector<int>ans;\r\n        while(!pq.empty())\r\n        {\r\n            ans.push_back(pq.top());\r\n            pq.pop();\r\n        }\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "import heapq\r\nclass Solution:\r\n    def sortArray(self, nums: List[int]) -> List[int]:\r\n        \r\n        h = {}\r\n        for i in nums:\r\n            if i in h:\r\n                h[i]+=1\r\n            else:\r\n                h[i]=1\r\n        \r\n        heap = []\r\n        for i in h:\r\n            heap.append([i,h[i]])\r\n        \r\n        heapq.heapify(heap)\r\n        ans = []\r\n        \r\n        while heap:\r\n            x = heapq.heappop(heap)\r\n            ans.append(x[0])\r\n            if x[1]>1:\r\n                heapq.heappush(heap,[x[0],x[1]-1])\r\n                \r\n        return ans",
    "java": "// Runtime: 35 ms (Top 28.44%) | Memory: 75.6 MB (Top 11.81%)\r\nclass Solution {\r\n\r\n        public void downHeapify(int[] nums, int startIndex, int lastIndex){\r\n\r\n        int parentIndex = startIndex;\r\n        int leftChildIndex = 2*parentIndex + 1;\r\n        int rightChildIndex = 2*parentIndex + 2;\r\n\r\n        while(leftChildIndex <= lastIndex){\r\n            int maxIndex = parentIndex;\r\n            if(nums[leftChildIndex] > nums[maxIndex]){\r\n                maxIndex = leftChildIndex;\r\n            }\r\n            if(rightChildIndex <= lastIndex && nums[rightChildIndex] > nums[maxIndex]){\r\n                maxIndex = rightChildIndex;\r\n            }\r\n            if(maxIndex == parentIndex){\r\n                return;\r\n            }\r\n            int temp = nums[maxIndex];\r\n            nums[maxIndex] = nums[parentIndex];\r\n            nums[parentIndex] = temp;\r\n            parentIndex = maxIndex;\r\n            leftChildIndex = 2*parentIndex + 1;\r\n            rightChildIndex = 2*parentIndex + 2;\r\n        }\r\n        return;\r\n    }\r\n\r\n    public int[] sortArray(int[] nums) {\r\n        int len = nums.length;\r\n        //building a heap - O(n) time\r\n        for(int i=(len/2)-1;i>=0;i--){\r\n            downHeapify(nums,i,len-1);\r\n        }\r\n        //sorting element - nlogn(n) time\r\n        for(int i=len -1 ;i>0;i--){\r\n             int temp = nums[i];\r\n             nums[i] = nums[0];\r\n             nums[0] = temp;\r\n             downHeapify(nums,0,i-1);\r\n        }\r\n        return nums;\r\n\r\n    }\r\n}",
    "javascript": "// Runtime: 346 ms (Top 43.21%) | Memory: 58.4 MB (Top 51.45%)\r\nvar sortArray = function(nums) {\r\n    return quickSort(nums, 0, nums.length - 1);\r\n};\r\n\r\nconst quickSort = (arr, start, end) => {\r\n    // base case\r\n    if (start >= end) return arr;\r\n\r\n    // return pivot index to divide array into 2 sub-arrays.\r\n    const pivotIdx = partition(arr, start, end);\r\n    // sort sub-array to the left and right of pivot index.\r\n    quickSort(arr, start, pivotIdx - 1);\r\n    quickSort(arr, pivotIdx + 1, end);\r\n\r\n    return arr;\r\n}\r\n\r\nconst partition = (arr, start, end) => {\r\n    // select a random pivot index, and swap pivot value with end value.\r\n    const pivotIdx = Math.floor(Math.random() * (end - start + 1)) + start;\r\n    [arr[pivotIdx], arr[end]] = [arr[end], arr[pivotIdx]];\r\n\r\n    const pivotVal = arr[end];\r\n    // loop from start to before end index (because pivot is stored at end index).\r\n    for (let i = start; i < end; i++) {\r\n        if (arr[i] < pivotVal) {\r\n            // swap smaller-than-pivot value (at i) with the value at the start index.\r\n            // This ensures all values to the left of start index will be less than pivot.\r\n            [arr[i], arr[start]] = [arr[start], arr[i]];\r\n            start++;\r\n        }\r\n    }\r\n\r\n    // swap pivot (which was stored at end index) with value at start index.\r\n    // This puts the pivot in its correct place.\r\n    [arr[start], arr[end]] = [arr[end], arr[start]];\r\n    return start;\r\n}\r\n\r\n/*\r\nNote: Instead of always picking a fixed index as the pivot (ie. start or end index),\r\nThe pivot was randomly selected to mitigate the odds of achieving worst case TC and SC.\r\nTC:\r\nBest and avg case: O(nlogn)\r\nworst case: O(n^2)\r\n\r\nSC:\r\nSince algo done in-place, space comes from recursive call stack.\r\nbest and avg case: O(logn)\r\nworst case: O(n)\r\n*/"
  }
}
