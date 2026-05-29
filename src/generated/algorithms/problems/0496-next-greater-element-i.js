export default {
  "id": 496,
  "name": "Next Greater Element I",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/next-greater-element-i",
  "relativeDir": "N/Next Greater Element I",
  "slug": "0496-next-greater-element-i",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 19,
    "python": 14,
    "javascript": 44
  },
  "languages": {
    "cpp": "// Runtime: 13 ms (Top 39.43%) | Memory: 8.9 MB (Top 32.91%)\r\nclass Solution {\r\npublic:\r\n    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {\r\n        vector<int>vc;\r\n        int len1=nums1.size();\r\n        int len2=nums2.size();\r\n        unordered_map<int,int>ump;\r\n        int e,f;\r\n        for(e=0;e<len2;e++)\r\n        {\r\n            for(f=e+1;f<len2;f++)\r\n            {\r\n                if(nums2[f]>nums2[e])\r\n                {\r\n                    ump[nums2[e]]=nums2[f];\r\n                    break;\r\n                }\r\n\r\n            }\r\n            if(f==len2) ump[nums2[e]]=-1;\r\n\r\n        }\r\n        unordered_map<int,int>::iterator it;\r\n        for(int e=0;e<len1;e++)\r\n        {\r\n            it=ump.find(nums1[e]);\r\n            if(it!=ump.end())\r\n            {\r\n                vc.push_back(it->second);\r\n            }\r\n        }\r\n\r\n        return vc;\r\n\r\n    }\r\n};",
    "python": "// Runtime: 50 ms (Top 80.48%) | Memory: 16.70 MB (Top 24.94%)\r\n\r\nclass Solution:\r\n    def nextGreaterElement(self, nums1, nums2):\r\n        dic, stack = {}, []\r\n        \r\n        for num in nums2[::-1]:\r\n            while stack and num > stack[-1]:\r\n                stack.pop()\r\n            if stack:\r\n                dic[num] = stack[-1]\r\n            stack.append(num)\r\n            \r\n        return [dic.get(num, -1) for num in nums1]",
    "java": "// Runtime: 6 ms (Top 51.94%) | Memory: 44.9 MB (Top 8.50%)\r\nclass Solution {\r\n    public int[] nextGreaterElement(int[] nums1, int[] nums2) {\r\n       HashMap<Integer, Integer> map = new HashMap<>();\r\n       Stack<Integer> stack = new Stack<>();\r\n        int[] ans = new int[nums1.length];\r\n        for(int i = 0; i < nums2.length; i++){\r\n            while(!stack.isEmpty() && nums2[i] > stack.peek()){\r\n                int temp = stack.pop();\r\n                map.put(temp, nums2[i]);\r\n            }\r\n            stack.push(nums2[i]);\r\n        }\r\n        for(int i = 0; i < nums1.length; i++){\r\n           ans[i] = map.getOrDefault(nums1[i], -1);\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 104 ms (Top 50.41%) | Memory: 44.1 MB (Top 53.95%)\r\n/**\r\n * @param {number[]} nums1\r\n * @param {number[]} nums2\r\n * @return {number[]}\r\n */\r\nvar nextGreaterElement = function(nums1, nums2) {\r\n    // [Value, Index] of all numbers in nums2\r\n    const indexMap = new Map()\r\n    for(let i = 0; i < nums2.length; i++){\r\n        indexMap.set(nums2[i], i)\r\n    }\r\n\r\n    // Stores the next greatest elements\r\n    let result = []\r\n\r\n    // Iterate through all the numbers of interest. Remember that all numbers in nums1 are present in nums2.\r\n    for(let num of nums1){\r\n\r\n        // Check to see those numbers were present in the nums2 indexMap\r\n        if(indexMap.has(num)){\r\n\r\n            // If they were, we must find the next greatest element.\r\n            // Set it to -1 by default in case we cannot find it.\r\n            let nextGreatest = -1\r\n\r\n            // Iterate through all numbers in nums2 to the right of the index of the target number. (index of the target + 1)\r\n            for(let i = indexMap.get(num) + 1; i < nums2.length; i++){\r\n                // Check to see if the current number is greater than the target.\r\n                if(nums2[i] > num){\r\n                    // If it is, this is the next greatest element.\r\n                    nextGreatest = nums2[i]\r\n                    // Break the loop.\r\n                    break;\r\n                }\r\n            }\r\n            // Add the next greatest element (if found). Otherwise, add -1 (default)\r\n            result.push(nextGreatest)\r\n        }\r\n    }\r\n\r\n    // Return the array of next greatest elements.\r\n    return result\r\n};"
  }
}
