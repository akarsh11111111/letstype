export default {
  "id": 349,
  "name": "Intersection of Two Arrays",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/intersection-of-two-arrays",
  "relativeDir": "I/Intersection of Two Arrays",
  "slug": "0349-intersection-of-two-arrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 21,
    "python": 18,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 11 ms (Top 50.06%) | Memory: 10.6 MB (Top 23.88%)\r\nclass Solution {\r\npublic:\r\n    //what i think is we have to return the intersection elements from both nums\r\n    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {\r\n\r\n        //result vector which will store those values which will be intersecting in both nums\r\n        vector<int> result;\r\n\r\n        //map intersection, which will store values of all the elements in num1\r\n        unordered_map<int,int> intersection;\r\n\r\n        //map will store all the values of num1(as key),with corresponding value 1\r\n        for(auto character : nums1)\r\n        {\r\n            intersection[character] = 1;\r\n        }\r\n\r\n        //this loop will check if any element of num1 is there in num2? if yes, insert it in result\r\n        //after inserting it once, make its corresponding value to 0\r\n        //so that if you find any elements, that is repeating in num2, as well as present in num1\r\n        //so you dont enter it twice in result, you should enter it once only\r\n        for(auto character : nums2)\r\n        {\r\n            //if found once, it's value would be 1, so entered in result\r\n            //after it is entered in result, its value we change to 0\r\n            //so agin if that same element repeats, due to 0 as its value, we avoid pushing it to result\r\n            if(intersection[character])\r\n            {\r\n                result.push_back(character);\r\n                intersection[character] = 0;\r\n            }\r\n        }\r\n\r\n        //after getting all the intersecting elements,we return result\r\n        return result;\r\n    }\r\n};",
    "python": "# Runtime: 65 ms (Top 73.60%) | Memory: 14 MB (Top 91.27%)\r\nclass Solution:\r\n    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:\r\n        nums1.sort()\r\n        nums2.sort()\r\n        ans = []\r\n        i, j = 0, 0\r\n        while i < len(nums1) and j < len(nums2):\r\n            if nums1[i] < nums2[j]:\r\n                i += 1\r\n            elif nums1[i] > nums2[j]:\r\n                j += 1\r\n            else:\r\n                if len(ans) == 0 or nums1[i] != ans[-1]:\r\n                    ans.append(nums1[i])\r\n                i += 1\r\n                j += 1\r\n        return ans",
    "java": "// Runtime: 1 ms (Top 99.90%) | Memory: 44.3 MB (Top 29.92%)\r\nclass Solution {\r\n    public int[] intersection(int[] nums1, int[] nums2) {\r\n        int[] dp = new int[1000];\r\n        for(int i:nums1){\r\n            dp[i]++;\r\n        }\r\n        int[] ans = new int[1000];\r\n\r\n        //declaring ptr to track ans array index\r\n        int ptr = 0;\r\n        for(int i:nums2){\r\n            if(dp[i] != 0){\r\n                dp[i] = 0;\r\n                ans[ptr] = i;\r\n                ptr++;\r\n            }\r\n        }\r\n        return Arrays.copyOfRange(ans, 0, ptr);\r\n    }\r\n}",
    "javascript": "// Runtime: 93 ms (Top 58.73%) | Memory: 44.4 MB (Top 16.27%)\r\n/**\r\n * @param {number[]} nums1\r\n * @param {number[]} nums2\r\n * @return {number[]}\r\n */\r\nvar intersection = function(nums1, nums2) {\r\n    let set = new Set(nums1);\r\n    let set2 = new Set(nums2);\r\n    let result = [];\r\n    for (const val of set) {\r\n        if (set2.has(val)) {\r\n            result.push(val);\r\n        }\r\n    }\r\n    return result;\r\n};"
  }
}
