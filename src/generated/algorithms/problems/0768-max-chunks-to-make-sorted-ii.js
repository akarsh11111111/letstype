export default {
  "id": 768,
  "name": "Max Chunks To Make Sorted II",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/max-chunks-to-make-sorted-ii",
  "relativeDir": "M/Max Chunks To Make Sorted II",
  "slug": "0768-max-chunks-to-make-sorted-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 49,
    "python": 18,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 97.81%) | Memory: 12.70 MB (Top 49.02%)\r\n\r\nclass Solution {\r\npublic:\r\n    int maxChunksToSorted(vector<int>& arr) {\r\n        vector<int>right(arr.size()+1);\r\n        right[arr.size()] = INT_MAX;\r\n        \r\n        for(int i =arr.size()-1 ; i>= 0; i--){\r\n           right[i] = min(right[i+1], arr[i]);\r\n        }\r\n        int left_max = INT_MIN;\r\n        int count_chunks =0;\r\n        for(int i =0; i<arr.size(); i++){\r\n            left_max = max(left_max, arr[i]);\r\n            if(left_max <= right[i+1]) count_chunks++;  \r\n        }\r\n        return count_chunks;\r\n    }\r\n};",
    "python": "# Runtime: 187 ms (Top 16.67%) | Memory: 14.5 MB (Top 12.03%)\r\nclass Solution:\r\n    def maxChunksToSorted(self, arr: List[int]) -> int:\r\n        sortedArr = sorted(arr)\r\n\r\n        posMap = defaultdict(list)\r\n        for i in range(len(sortedArr)):\r\n            posMap[sortedArr[i]].append(i) # keep track the right sortedArr[i] position\r\n\r\n        idx = len(arr) - 1\r\n        cnt = 0\r\n        for i in range(len(arr) - 1, -1, -1):\r\n            idx = min(idx, posMap[arr[i]][-1]) # the smallest position need to move arr[i] to correct position\r\n            posMap[arr[i]].pop()\r\n            if i == idx:\r\n                cnt += 1\r\n                idx -= 1\r\n        return cnt",
    "java": "// Runtime: 1 ms (Top 92.18%) | Memory: 44.7 MB (Top 72.44%)\r\n\r\n/*\r\n\r\n1. Generate Right min\r\n2. Generate Left Max\r\n3. Count chunks\r\n\r\nPos -->. 0 1 2 3 4 5 6 7\r\n\r\nInput --> 30 , 10 , 20 , 40 , 60 , 50 , 75 , 70\r\n             <------------> <--> <-------> <------->\r\nLeft Max --> 30 , 30 , 30 , 40 , 60 , 60 , 75 , 75\r\n\r\nRight Min --> 10 , 10 , 20 , 40 , 50 , 50 , 70 , 70 , Integer.max\r\n\r\n1. At pos 2 , left_max 30 is smaller than right_min 40 at pos 3\r\n2. That means , all the elements in the right side of 30 are bigger than all the elements of left side of 30 , including 30\r\n3. Hence we can break it at pos 2 into a chunk and sort this whole sub-array( 0 - 2 )\r\n\r\n*/\r\n\r\nclass Solution {\r\n\r\n    public int maxChunksToSorted(int[] arr) {\r\n\r\n        // 1. Generate Right min\r\n\r\n        int[] min_from_right = new int[arr.length+1] ;\r\n        min_from_right[arr.length] = Integer.MAX_VALUE ;\r\n\r\n        for(int i=arr.length-1 ; i>=0 ; i--){\r\n            min_from_right[i] = Math.min(arr[i] , min_from_right[i+1]);\r\n        }\r\n\r\n        // 2. Generate Left Max and Count chunks\r\n        int chunk_count = 0 ;\r\n        int max_cur = Integer.MIN_VALUE ;\r\n\r\n        for(int i=0 ; i<arr.length ; i++){\r\n            max_cur = Math.max(max_cur , arr[i]);\r\n            if(max_cur <= min_from_right[i+1]){\r\n                chunk_count++ ;\r\n            }\r\n        }\r\n\r\n        return chunk_count ;\r\n    }\r\n}",
    "javascript": "var maxChunksToSorted = function(arr) {\r\n    var rmin = new Array(arr.length).fill(0);\r\n    rmin[arr.length] = Number.MAX_SAFE_INTEGER;\r\n    \r\n    for(var i=arr.length-1; i>=0; i--) {\r\n        rmin[i] = Math.min(arr[i], rmin[i+1]);\r\n    }\r\n    \r\n    var lmax = Number.MIN_SAFE_INTEGER;\r\n    var count = 0;\r\n    \r\n    for(var i=0; i<arr.length; i++) {\r\n        lmax = Math.max(arr[i], lmax);\r\n        \r\n        if(lmax <= rmin[i+1]) {\r\n            count++;\r\n        }\r\n    }\r\n    \r\n    return count;\r\n};``"
  }
}
