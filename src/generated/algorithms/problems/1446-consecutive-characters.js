export default {
  "id": 1446,
  "name": "Consecutive Characters",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/consecutive-characters",
  "relativeDir": "C/Consecutive Characters",
  "slug": "1446-consecutive-characters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 23,
    "python": 19,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 6 ms (Top 49.55%) | Memory: 6.8 MB (Top 73.50%)\r\nclass Solution {\r\npublic:\r\n    int ans = 1 ;\r\n    int maxPower(string s) {\r\n        for(int i = 0 ; i < size(s) ; ++i ){\r\n            int j = i ;\r\n            while(j < size(s) and s[j] == s[i]) ++j ;\r\n            ans = max(ans,j-i);\r\n            i = j - 1 ;\r\n        }\r\n        return ans ;\r\n    }\r\n};",
    "python": "# Runtime: 30 ms (Top 32.1%) | Memory: 13.25 MB (Top 75.9%)\r\n\r\nclass Solution(object):\r\n    def maxPower(self, s):\r\n        \"\"\"\r\n        :type s: str\r\n        :rtype: int\r\n        \"\"\"\r\n        stack=[]\r\n        mxpow=0\r\n        for i in s:\r\n            if stack and stack[-1]!=i:\r\n                mxpow=max(mxpow,len(stack))\r\n                stack=[]\r\n                stack.append(i)\r\n            else:\r\n                stack.append(i)\r\n        mxpow=max(mxpow,len(stack))\r\n        return mxpow",
    "java": "// Runtime: 3 ms (Top 40.49%) | Memory: 42.4 MB (Top 68.55%)\r\nclass Solution {\r\n    public int maxPower(String s) {\r\n        // O(n), assuming the access to every char is O(1)\r\n        // iterate through characters\r\n        // if char(n) == char(n+1) counter++\r\n            // if counter > max, max = counter\r\n        // else counter = 1 // 1 is init value because otherwise the compared char itself is not counted\r\n\r\n        int maxConsecutive = 1; // 1 is init value because otherwise the compared char itself is not counted\r\n        int counterConsecutive = 1;\r\n        for(int i = 0; i< s.length()-1; i++){\r\n            if(s.charAt(i) == s.charAt(i+1)){\r\n                counterConsecutive++;\r\n                maxConsecutive = Math.max(counterConsecutive, maxConsecutive);\r\n            } else {\r\n                counterConsecutive = 1;\r\n            }\r\n        }\r\n\r\n        return maxConsecutive;\r\n    }\r\n}",
    "javascript": "// Runtime: 78 ms (Top 84.71%) | Memory: 42.5 MB (Top 77.27%)\r\nvar maxPower = function(s) {\r\n    let count = 1;\r\n    let maxNum =1;\r\n\r\n    for(let i=0;i<s.length;i++){\r\n       (s[i]===s[Number(i)+1]) ? count++ : count=1;\r\n        maxNum = Math.max(count,maxNum);\r\n    }\r\n\r\n    return maxNum;\r\n};"
  }
}
