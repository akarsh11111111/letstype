export default {
  "id": 1218,
  "name": "Longest Arithmetic Subsequence of Given Difference",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference",
  "relativeDir": "L/Longest Arithmetic Subsequence of Given Difference",
  "slug": "1218-longest-arithmetic-subsequence-of-given-difference",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 23,
    "python": 10,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int longestSubsequence(vector<int>& arr, int difference) {\r\n        \r\n        int n = arr.size();\r\n        \r\n        unordered_map<int,int>mp;\r\n        multiset<int>s;\r\n        int ans = 1;\r\n        \r\n        for(int i=0;i<n;i++)\r\n        {\r\n            int req = arr[i] - difference;\r\n            auto it = s.find(req);\r\n            s.insert(arr[i]);\r\n            \r\n            if(it == s.end())\r\n            {\r\n                continue;    \r\n            }\r\n            else\r\n            {\r\n                mp[arr[i]] = mp[req] + 1;\r\n                ans = max(ans,mp[arr[i]] + 1);\r\n            }\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 548 ms (Top 98.07%) | Memory: 27.7 MB (Top 73.31%)\r\nclass Solution:\r\n    def longestSubsequence(self, arr: List[int], difference: int) -> int:\r\n        d = defaultdict(int)\r\n        for num in arr:\r\n            if num - difference in d:\r\n                d[num] = d[num - difference] + 1\r\n            else:\r\n                d[num] = 1\r\n        return max((d[x] for x in d))",
    "java": "// Runtime: 41 ms (Top 77.18%) | Memory: 57.40 MB (Top 33.18%)\r\n\r\nclass Solution\r\n{\r\npublic\r\n    int longestSubsequence(int[] arr, int difference)\r\n    {\r\n        // Storing the final answer as 1\r\n        int length = arr.length, max_length = 1;\r\n        HashMap<Integer, Integer> Terms_till_now = new HashMap<>();\r\n        for (int i = 0; i < length; i++)\r\n        {\r\n            /*\r\n            Find the number of terms, till curr_element - difference , say terms\r\n            Mapping 1 + n to the current term of the sequence, i.e. curr_element\r\n            */\r\n            int terms = ((Terms_till_now.get(arr[i] - difference) == null) ? 0 : Terms_till_now.get(arr[i] - difference));\r\n            Terms_till_now.put(arr[i], 1 + terms);\r\n            max_length = Math.max(max_length, 1 + terms);\r\n        }\r\n        return max_length;\r\n    }\r\n}",
    "javascript": "var longestSubsequence = function(arr, difference) {\r\n    const map = new Map()\r\n    let max = 0\r\n    for(let num of arr) {\r\n        const prev = map.has(num - difference) ? map.get(num -difference) : 0\r\n        const val = prev + 1\r\n        map.set(num, val)\r\n        max = Math.max(max, val)\r\n    }\r\n    return max\r\n};"
  }
}
