export default {
  "id": 1653,
  "name": "Minimum Deletions to Make String Balanced",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-deletions-to-make-string-balanced",
  "relativeDir": "M/Minimum Deletions to Make String Balanced",
  "slug": "1653-minimum-deletions-to-make-string-balanced",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 26,
    "python": 24,
    "javascript": 26
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minimumDeletions(string s){\r\n\r\n        vector<int> deletions(s.size()+1, 0);\r\n        int b_count = 0;\r\n        \r\n        for(int i = 0; i<s.size(); i++){\r\n            if(s[i]=='a'){\r\n                // Either Delete this 'a' or Delete all previous 'b's.\r\n                deletions[i+1] = min(deletions[i]+1, b_count);\r\n            } else{\r\n                deletions[i+1] = deletions[i];\r\n                b_count++;\r\n            }\r\n        }\r\n\r\n        return deletions[s.size()];\r\n\r\n        // The code is contributed by Mufaddal Saifuddin\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef minimumDeletions(self, s: str) -> int:\r\n\t\tpreSum = [0] * (len(s) + 1)\r\n\t\tsufSum = [0] * (len(s) + 1)\r\n\r\n\t\tfor i in range(len(s)):\r\n\t\t\tif s[i] == \"a\":\r\n\t\t\t\tpreSum[i] += 1 + preSum[i-1]\r\n\r\n\t\t\telse:\r\n\t\t\t\tpreSum[i] = preSum[i-1]\r\n\r\n\t\t\tif s[len(s)-i-1] == \"b\":\r\n\t\t\t\tsufSum[len(s)-i-1] += 1 + sufSum[len(s)-i]\r\n\r\n\t\t\telse:\r\n\t\t\t\tsufSum[len(s)-i-1] += sufSum[len(s)-i]\r\n\r\n\t\tmaxStringLength = 0\r\n\t\tfor i in range(len(s)):\r\n\t\t\tif preSum[i] + sufSum[i] > maxStringLength:\r\n\t\t\t\tmaxStringLength = preSum[i] + sufSum[i]\r\n\r\n\t\treturn len(s) - maxStringLength",
    "java": "// Runtime: 38 ms (Top 70.64%) | Memory: 68.2 MB (Top 24.02%)\r\nclass Solution {\r\n    public int minimumDeletions(String s) {\r\n        //ideal case : bbbbbbbbb\r\n        int[] dp = new int[s.length()+1];\r\n        int idx =1;\r\n        int bCount=0;\r\n\r\n        for(int i =0 ;i<s.length();i++)\r\n        {\r\n            if(s.charAt(i)=='a')\r\n            {\r\n             dp[idx] = Math.min(dp[idx-1]+1,bCount);\r\n            }\r\n            else\r\n            {\r\n                dp[idx]=dp[idx-1];\r\n                bCount++;\r\n            }\r\n\r\n            idx++;\r\n        }\r\n        return dp[s.length()];\r\n\r\n    }\r\n}",
    "javascript": "var minimumDeletions = function(s) {\r\n    const dpA = [];\r\n    let counter = 0;\r\n    for (let i = 0; i < s.length; i++) {\r\n        dpA[i] = counter;\r\n        if (s[i] === 'b') {\r\n            counter++;\r\n        }\r\n    }\r\n    \r\n    counter = 0;\r\n    const dpB = [];\r\n    for (let i = s.length - 1; i >= 0; i--) {\r\n        dpB[i] = counter;\r\n        if (s[i] === 'a') {\r\n            counter++;\r\n        }\r\n    }\r\n\r\n    let minDelete = s.length;\r\n    for (let i = 0; i < s.length; i++) {\r\n        minDelete = Math.min(minDelete, dpA[i] + dpB[i]);\r\n    }\r\n    \r\n    return minDelete;\r\n};"
  }
}
