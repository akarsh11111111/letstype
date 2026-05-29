export default {
  "id": 1247,
  "name": "Minimum Swaps to Make Strings Equal",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-swaps-to-make-strings-equal",
  "relativeDir": "M/Minimum Swaps to Make Strings Equal",
  "slug": "1247-minimum-swaps-to-make-strings-equal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 24,
    "python": 15,
    "javascript": 25
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minimumSwap(string s1, string s2) {\r\n        int n = s1.size();\r\n        int cnt1=0,cnt2=0,i=0;\r\n        \r\n        while(i<n){\r\n            int x = s1[i];\r\n            int y = s2[i++];\r\n            if(x=='x' and y=='y') cnt1++;\r\n            if(x=='y' and y=='x') cnt2++;\r\n        }\r\n        \r\n        if((cnt1+cnt2)%2==1) return -1;\r\n        \r\n        return (cnt1/2) + (cnt2/2) + (cnt1%2 + cnt2%2);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumSwap(self, s1: str, s2: str) -> int:\r\n        h = defaultdict(int)\r\n        count = 0    # variable to keep track of the number of mismatches; it is impossible to make strings equal if count is odd\r\n        for i in range(len(s1)):\r\n            if s1[i] != s2[i]:\r\n                count += 1\r\n                h[s1[i]] += 1\r\n        if count % 2 != 0:     \r\n            return -1\r\n        res, a, b = 0, h['x'], h['y']\r\n        res += a // 2 + b // 2\r\n        if a % 2 == 0:\r\n            return res\r\n        return res + 2",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 41.80 MB (Top 5.91%)\r\n\r\nclass Solution {\r\n    public int minimumSwap(String s1, String s2) {\r\n        \r\n        int count = 0;\r\n        int cnt_1 = 0;\r\n        int cnt_2 = 0;\r\n        char[] a = s1.toCharArray();\r\n        char[] b = s2.toCharArray();\r\n        \r\n        for(int i=0;i<a.length;i++){\r\n            if(a[i] != b[i]){\r\n                count++;\r\n                if(a[i] == 'x') cnt_1++;\r\n                else cnt_2++;\r\n            }\r\n        }\r\n        \r\n        if(count%2 == 1)\r\n            return -1;\r\n        else return cnt_1/2+cnt_2/2+(cnt_1%2)*2;\r\n    }\r\n}",
    "javascript": "// Runtime: 73 ms (Top 87.50%) | Memory: 42.7 MB (Top 43.75%)\r\n\r\nvar minimumSwap = function(s1, s2) {\r\n   let count1 = 0;\r\n    let count2 = 0;\r\n   for(let i in s1) {\r\n       if(s1[i] === \"x\" && s2[i] === \"y\") {\r\n           count1++\r\n       }\r\n        if(s1[i] === \"y\" && s2[i] === \"x\") {\r\n           count2++\r\n       }\r\n   }\r\n\r\n    let ans = Math.floor(count1 / 2) + Math.floor(count2 / 2);\r\n    if(count1 % 2 === 0 && count2 % 2 === 0){\r\n        return ans\r\n    }\r\n    else if(count1 % 2 !== 0 && count2 % 2 !== 0){\r\n        return ans + 2;\r\n    }\r\n    else {\r\n        return -1;\r\n    }\r\n};"
  }
}
