export default {
  "id": 2099,
  "name": "Find Subsequence of Length K With the Largest Sum",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum",
  "relativeDir": "F/Find Subsequence of Length K With the Largest Sum",
  "slug": "2099-find-subsequence-of-length-k-with-the-largest-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 24,
    "python": 9,
    "javascript": 3
  },
  "languages": {
    "cpp": "// Runtime: 9 ms (Top 29.13%) | Memory: 9.60 MB (Top 91.68%)\r\n\r\n// OJ: https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/\r\n// Author: github.com/lzl124631x\r\n// Time: O(NlogN)\r\n// Space: O(N)\r\nclass Solution {\r\npublic:\r\n    vector<int> maxSubsequence(vector<int>& A, int k) {\r\n        vector<int> id(A.size());\r\n        iota(begin(id), end(id), 0); // Index array 0, 1, 2, ...\r\n        sort(begin(id), end(id), [&](int a, int b) { return A[a] > A[b]; }); // Sort the indexes in descending order of their corresponding values in `A`\r\n        id.resize(k); // Only keep the first `k` indexes with the greatest `A` values\r\n        sort(begin(id), end(id)); // Sort indexes in ascending order\r\n        vector<int> ans;\r\n        for (int i : id) ans.push_back(A[i]);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def maxSubsequence(self, nums, k):\r\n        ret, max_k = [], sorted(nums, reverse=True)[:k]\r\n        for num in nums:\r\n            if num in max_k:\r\n                ret.append(num)\r\n                max_k.remove(num)\r\n                if len(max_k) == 0:\r\n                    return ret",
    "java": "class Solution {\r\n    public int[] maxSubsequence(int[] nums, int k) {\r\n        PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> b[0] - a[0]);\r\n        \r\n        for(int i=0; i<nums.length; i++)\r\n            pq.offer(new int[]{nums[i], i});\r\n        \r\n        List<int[]> l = new ArrayList<>();\r\n        \r\n        while(k-- != 0)\r\n            l.add(pq.poll());\r\n        \r\n        Collections.sort(l, (a,b) -> a[1] - b[1]);\r\n            \r\n        int[] res = new int[l.size()];\r\n        \r\n        int index = 0;\r\n        \r\n        for(int[] i: l)\r\n            res[index++] = i[0];\r\n        \r\n        return res;\r\n    }\r\n}",
    "javascript": "var maxSubsequence = function(nums, k) {\r\n    return nums.map((v,i)=>[v,i]).sort((a,b)=>a[0]-b[0]).slice(-k).sort((a,b)=>a[1]-b[1]).map(x=>x[0]);\r\n};"
  }
}
