export default {
  "id": 2215,
  "name": "Find the Difference of Two Arrays",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-difference-of-two-arrays",
  "relativeDir": "F/Find the Difference of Two Arrays",
  "slug": "2215-find-the-difference-of-two-arrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 21,
    "python": 20,
    "javascript": 10
  },
  "languages": {
    "cpp": "// Runtime: 94 ms (Top 8.91%) | Memory: 32.60 MB (Top 77.65%)\r\n\r\n// OJ: https://leetcode.com/contest/weekly-contest-286/problems/find-the-difference-of-two-arrays/\r\n// Author: github.com/lzl124631x\r\n// Time: O(A + B)\r\n// Space: O(A + B)\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> findDifference(vector<int>& A, vector<int>& B) {\r\n        unordered_set<int> sa(begin(A), end(A)), sb(begin(B), end(B));\r\n        vector<vector<int>> ans(2);\r\n        for (int n : sa) {\r\n            if (sb.count(n) == 0) ans[0].push_back(n);\r\n        }\r\n        for (int n : sb) {\r\n            if (sa.count(n) == 0) ans[1].push_back(n);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 953 ms (Top 29.31%) | Memory: 14.3 MB (Top 52.22%)\r\nclass Solution(object):\r\n    def findDifference(self, nums1, nums2):\r\n        \"\"\"\r\n        :type nums1: List[int]\r\n        :type nums2: List[int]\r\n        :rtype: List[List[int]]\r\n        \"\"\"\r\n        a = []\r\n        for i in range(len(nums1)):\r\n            if nums1[i] not in nums2:\r\n                a.append(nums1[i])\r\n        b = []\r\n        for i in range(len(nums2)):\r\n            if nums2[i] not in nums1:\r\n                b.append(nums2[i])\r\n\r\n        c = [list(set(a))] + [list(set(b))]\r\n\r\n        return c",
    "java": "// Runtime: 20 ms (Top 69.34%) | Memory: 54.7 MB (Top 58.44%)\r\nclass Solution {\r\n    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {\r\n        Set<Integer> set1 = new HashSet<>(); // create 2 hashsets\r\n        Set<Integer> set2 = new HashSet<>();\r\n        for(int num : nums1){ set1.add(num); } // add nums1 elements to set1\r\n        for(int num : nums2){ set2.add(num); } // add nums2 elements to set2\r\n\r\n        List<List<Integer>> resultList = new ArrayList<>(); // Initialize result list with 2 empty sublists that we will return\r\n        resultList.add(new ArrayList<>());\r\n        resultList.add(new ArrayList<>());\r\n\r\n        for(int num : set1){ // just iterate to all elements of set1\r\n            if(!set2.contains(num)){ resultList.get(0).add(num); } // add those elements to first sublist of result list, which are not in set2.\r\n        }\r\n        for(int num : set2){ // just iterate to all elements of set2\r\n            if(!set1.contains(num)){ resultList.get(1).add(num); } // add those elements to first sublist of result list, which are not in set1\r\n        }\r\n        return resultList;\r\n    }\r\n}",
    "javascript": "// Runtime: 161 ms (Top 59.39%) | Memory: 48.4 MB (Top 72.05%)\r\nvar findDifference = function(nums1, nums2) {\r\n    const s1 = new Set(nums1);\r\n    const s2 = new Set(nums2);\r\n\r\n    const a1 = [...s1].filter(x => !s2.has(x));\r\n    const a2 = [...s2].filter(x => !s1.has(x));\r\n\r\n    return [a1, a2];\r\n};"
  }
}
