export default {
  "id": 1593,
  "name": "Split a String Into the Max Number of Unique Substrings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings",
  "relativeDir": "S/Split a String Into the Max Number of Unique Substrings",
  "slug": "1593-split-a-string-into-the-max-number-of-unique-substrings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 23,
    "python": 13,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 191 ms (Top 62.9%) | Memory: 44.30 MB (Top 70.14%)\r\n\r\nclass Solution {\r\npublic:\r\n    unordered_set<string>st;\r\n    int ans=0;\r\n    void dfs(string &s, int idx)\r\n    {\r\n        if(st.size()>ans) ans=st.size();\r\n        if(idx>=s.length()) return;\r\n        string str=\"\";\r\n        for(int i=idx ; i<s.length() ; i++)\r\n        {\r\n            str += s[i];\r\n            if(st.find(str)==st.end())\r\n            {\r\n                st.insert(str);\r\n                dfs(s,i+1);\r\n                st.erase(str);\r\n            }\r\n        }\r\n    }\r\n    \r\n    int maxUniqueSplit(string s) {\r\n        dfs(s,0);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxUniqueSplit(self, s: str) -> int:\r\n        ans, n = 0, len(s)\r\n        def dfs(i, cnt, visited):\r\n            nonlocal ans, n\r\n            if i == n: ans = max(ans, cnt); return  # stop condition\r\n            for j in range(i+1, n+1):    \r\n                if s[i:j] in visited: continue      # avoid re-visit/duplicates\r\n                visited.add(s[i:j])                 # update visited set\r\n                dfs(j, cnt+1, visited)              # backtracking\r\n                visited.remove(s[i:j])              # recover visited set for next possibility\r\n        dfs(0, 0, set())                            # function call\r\n        return ans",
    "java": "\r\nclass Solution {\r\n    int max = 0;\r\n    public int maxUniqueSplit(String s) {\r\n        int n = s.length();\r\n        backtrack(s, 0, new HashSet<String>());\r\n        return max;\r\n    }\r\n    public void backtrack(String s, int start, Set<String> h) {\r\n        if(start == s.length()) {\r\n            max = Math.max(max, h.size());\r\n        }\r\n        String res = \"\";\r\n        \r\n        for(int i = start;i < s.length();i++) {\r\n            res += s.charAt(i);\r\n            if(h.contains(res)) continue;\r\n            h.add(res);\r\n            backtrack(s, i+1, h);\r\n            h.remove(res);\r\n        }\r\n    }\r\n}",
    "javascript": "var maxUniqueSplit = function(s) {\r\n    let wordSet = new Set(), res = 1;\r\n    \r\n    function checkUniqueSubstring(i) {\r\n        if (i === s.length) {\r\n            res = Math.max(wordSet.size, res);\r\n            return;\r\n        }\r\n        \r\n        for (let j = i+1; j <= s.length; j++) {\r\n            let str = s.substring(i,j);\r\n            if (!wordSet.has(str)) {\r\n                wordSet.add(str);\r\n                checkUniqueSubstring(j);\r\n                wordSet.delete(str);\r\n            }\r\n        }\r\n    }\r\n    \r\n    checkUniqueSubstring(0);\r\n    \r\n    return res;\r\n};"
  }
}
