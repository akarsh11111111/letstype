export default {
  "id": 1849,
  "name": "Splitting a String Into Descending Consecutive Values",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values",
  "relativeDir": "S/Splitting a String Into Descending Consecutive Values",
  "slug": "1849-splitting-a-string-into-descending-consecutive-values",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 18,
    "python": 17,
    "javascript": 30
  },
  "languages": {
    "cpp": "class Solution {\r\n    bool helper(string s, long long int tar) {\r\n        if (stoull(s) == tar) return true;\r\n        for (int i = 1; i < s.size(); ++i) {\r\n            if (stoull(s.substr(0, i)) != tar)    continue;\r\n            if (helper(s.substr(i, s.size()-i), tar-1))\r\n                return true;\r\n        }\r\n        return false;\r\n    }\r\npublic:\r\n    bool splitString(string s) {\r\n        for (int i = 1; i < s.size(); ++i) {\r\n            long long int tar = stoull(s.substr(0, i));\r\n            if (helper(s.substr(i, s.size()-i), tar-1))\r\n                return true;\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "# Runtime: 66 ms (Top 24.00%) | Memory: 13.8 MB (Top 70.18%)\r\nclass Solution:\r\n    def splitString(self, s: str, last_val: int = None) -> bool:\r\n        # Base case, remaining string is a valid solution\r\n        if last_val and int(s) == last_val - 1:\r\n            return True\r\n\r\n        # Iterate through increasingly larger slices of s\r\n        for i in range(1, len(s)):\r\n            cur = int(s[:i])\r\n            # If current slice is equal to last_val - 1, make\r\n            # recursive call with remaining string and updated last_val\r\n            if last_val is None or cur == last_val - 1:\r\n                if self.splitString(s[i:], cur):\r\n                    return True\r\n\r\n        return False",
    "java": "class Solution {\r\n    public boolean splitString(String s) {\r\n        return isRemainingValid(s, null);\r\n    }\r\n    private boolean isRemainingValid(String s, Long previous) {\r\n        long current =0;\r\n        for(int i=0;i<s.length();i++) {\r\n            current = current * 10 + s.charAt(i)-'0';\r\n            if(current >= 10000000000L) return false;   // Avoid overflow\r\n            if(previous == null) {\r\n                if (isRemainingValid(s.substring(i+1), current)) \r\n                    return true;\r\n            } else if(current == previous - 1 && (i==s.length()-1 || isRemainingValid(s.substring(i+1), current)))\r\n                return true;\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 51 ms (Top 100.00%) | Memory: 43.2 MB (Top 29.03%)\r\n/**\r\n * @param {string} s\r\n * @return {boolean}\r\n */\r\nvar splitString = function(s) {\r\n\r\n    const backtracking = (index, prevStringValue) => {\r\n        if(index === s.length) {\r\n            return true;\r\n        }\r\n        for(let i = index; i < s.length; i++) {\r\n            const currStringValue = s.slice(index ,i + 1);\r\n\r\n            if(parseInt(prevStringValue, 10) === parseInt(currStringValue, 10) + 1) {\r\n                if(backtracking(i + 1, currStringValue)) {\r\n                    return true;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    // we need to have at least two values to compare, so we start with the for outside the backtracking function\r\n    for (let i = 1; i <= s.length - 1; i++) {\r\n        const currStringValue = s.slice(0, i);\r\n        if (backtracking(i, currStringValue)) {\r\n            return true;\r\n        }\r\n    }\r\n    return false\r\n};"
  }
}
