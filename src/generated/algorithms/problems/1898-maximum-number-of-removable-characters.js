export default {
  "id": 1898,
  "name": "Maximum Number of Removable Characters",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-removable-characters",
  "relativeDir": "M/Maximum Number of Removable Characters",
  "slug": "1898-maximum-number-of-removable-characters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 34,
    "python": 24,
    "javascript": 39
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isSubSequence(string str1, string str2){\r\n        int j = 0,m=str1.size(),n=str2.size();\r\n        for (int i = 0; i < n && j < m; i++)\r\n            if (str1[j] == str2[i])\r\n                j++;\r\n        return (j == m);\r\n    }\r\n    int maximumRemovals(string s, string p, vector<int>& removable) {\r\n        string copy=s;\r\n        int left = 0, right =removable.size();\r\n        while (left <= right) {\r\n            int mid = (left+right)/2;\r\n            for(int i=0;i<mid;i++) copy[removable[i]]='*';\r\n            if (isSubSequence(p,copy))\r\n\t\t\t //if p is subsequence of string after mid number of removals then we should look for if it's possible to remove more characters \r\n                left = mid+1;\r\n            else {\r\n\t\t\t//if p is not a subsequence of string it means that we have certainly removed more characters from string \r\n\t\t\t//so we must decrease our size of removal characters and hence we  add all characters we removed earlier.\r\n                for(int i=0;i<mid;i++) copy[removable[i]] = s[removable[i]];\r\n                right = mid-1;\r\n            }\r\n        }\r\n        return right;\r\n    }\r\n};",
    "python": "// Runtime: 957 ms (Top 98.8%) | Memory: 28.80 MB (Top 96.39%)\r\n\r\nclass Solution:\r\n    def maximumRemovals(self, s: str, p: str, removable: List[int]) -> int:\r\n        l, r = 0, len(removable)\r\n\r\n        def isEnough(k):\r\n            s_arr = list(s)\r\n            for i in removable[:k]:\r\n                s_arr[i] = ''\r\n            return isSubsequence(p, s_arr)\r\n            \r\n        def isSubsequence(s, t):\r\n            t = iter(t)\r\n            return all(c in t for c in s)\r\n\r\n        while l < r:\r\n            m = (l+r+1)//2\r\n            if isEnough(m):\r\n                l = m\r\n            else:\r\n                r = m - 1\r\n        \r\n        return l",
    "java": "class Solution {\r\n    public int maximumRemovals(String s, String p, int[] removable) {\r\n        int left = 0, right = removable.length;\r\n\r\n        while (left < right) {\r\n            int middle = (right + left + 1) / 2;\r\n            String afterRemoval = remove(s, removable, middle);\r\n            if (isSubsequence(p, afterRemoval, p.length(), afterRemoval.length()))\r\n                left = middle;\r\n            else\r\n                right = middle - 1;\r\n        }\r\n\r\n        return left;\r\n    }\r\n\r\n    private String remove(String s, int[] removable, int k) {\r\n        char[] symbols = s.toCharArray();\r\n        for (int i = 0; i < k; i++) {\r\n            symbols[removable[i]] = Character.MIN_VALUE;\r\n        }\r\n        return String.valueOf(symbols);\r\n    }\r\n\r\n    private boolean isSubsequence(String subSequence, String word, int subSequenceChar, int wordChar) {\r\n        if (subSequenceChar == 0) return true;\r\n        if (wordChar == 0) return false;\r\n\r\n        if (subSequence.charAt(subSequenceChar - 1) == word.charAt(wordChar - 1))\r\n            return isSubsequence(subSequence, word, subSequenceChar - 1, wordChar - 1);\r\n\r\n        return isSubsequence(subSequence, word, subSequenceChar, wordChar - 1);\r\n    }\r\n}",
    "javascript": "var maximumRemovals = function(s, p, removable) {\r\n    let arr = s.split('');\r\n    \r\n    const stillFunctions = (k) => {\r\n        let result = [...arr];\r\n        for(let i = 0; i < k; i++) {\r\n            result[removable[i]] = '';\r\n        }\r\n\r\n        const isSubset = () => {\r\n            let idx = 0;\r\n            for(let c = 0; c < p.length; c++) {\r\n                if(idx > result.length) return false;\r\n                const next = result.indexOf(p[c], idx);\r\n                if(next === -1) {\r\n                    return false;\r\n                }\r\n                idx = next + 1;\r\n            }\r\n            return true;\r\n        }\r\n        \r\n        return isSubset();\r\n    }\r\n\r\n    let left = 0;\r\n    let right = removable.length;\r\n    \r\n    while(left < right) {\r\n        // Need to round up the midpoint since we are returning operation LENGTH i.e. ops+1\r\n        const mid = Math.ceil((left+right) / 2);\r\n        if(!stillFunctions(mid)) {\r\n            right = mid -1;\r\n        } else {\r\n            left = mid;\r\n        }\r\n    }\r\n    return left;\r\n};"
  }
}
