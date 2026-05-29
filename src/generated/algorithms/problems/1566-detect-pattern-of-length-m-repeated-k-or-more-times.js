export default {
  "id": 1566,
  "name": "Detect Pattern of Length M Repeated K or More Times",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times",
  "relativeDir": "D/Detect Pattern of Length M Repeated K or More Times",
  "slug": "1566-detect-pattern-of-length-m-repeated-k-or-more-times",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 18,
    "python": 17,
    "javascript": 9
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool containsPattern(vector<int>& arr, int m, int k) {\r\n        unordered_map<string, vector<int>> ump;\r\n        string num = \"\";\r\n        for(int i = 0; i < arr.size(); ++i)\r\n            num += to_string(arr[i]);\r\n        for(int i = 0; i <= num.length() - m; ++i){\r\n            string str = num.substr(i, m);\r\n            ump[str].push_back(i);\r\n        }\r\n        for(auto it = ump.begin(); it != ump.end(); ++it){\r\n            if(it->second.size() >= k){\r\n                bool flag = true;\r\n                for(int i = 1; i < it->second.size(); ++i){\r\n                    if(it->second[i] - it->second[i - 1] < m)\r\n                        flag = false;\r\n                }\r\n                if(flag == true)\r\n                    return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def containsPattern(self, arr: List[int], m: int, k: int) -> bool:\r\n        if len(arr) < k*m:\r\n            return False\r\n        \r\n        n = len(arr)\r\n        pattern = arr[0:m]\r\n        repeats = 1\r\n        for i in range(m, n - m + 1, m):\r\n            if arr[i:i+m] != pattern:\r\n                break\r\n            \r\n            repeats += 1\r\n            if repeats >= k:\r\n                return True\r\n            \r\n        return self.containsPattern(arr[1:], m, k)",
    "java": "// Time complexity: O(N)\r\n// Space complexity: O(1)\r\nclass Solution {\r\n    public boolean containsPattern(int[] arr, int m, int k) {\r\n        int count = 0;\r\n        for (int i = 0; i < arr.length - m; i++) {\r\n            if (arr[i] == arr[i + m]) {\r\n                count++;\r\n            } else {\r\n                count = 0;\r\n            }\r\n            if (count == m * (k-1)) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 48 ms (Top 83.72%) | Memory: 41.90 MB (Top 51.16%)\r\n\r\nvar containsPattern = function(arr, m, k) {\r\n    for(let i=m, cnt=0; i<arr.length; i++){\r\n        if(arr[i]!=arr[i-m]) cnt=0;\r\n        else if(++cnt==m*(k-1)) return true;\r\n    }\r\n    return false;\r\n};"
  }
}
