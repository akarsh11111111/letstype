export default {
  "id": 738,
  "name": "Monotone Increasing Digits",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/monotone-increasing-digits",
  "relativeDir": "M/Monotone Increasing Digits",
  "slug": "0738-monotone-increasing-digits",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 30,
    "python": 14,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 5.9 MB (Top 82.10%)\r\nclass Solution {\r\npublic:\r\n    int monotoneIncreasingDigits(int n) {\r\n            if(n < 10) return n;\r\n\r\n            string s = to_string(n);\r\n\r\n            for(int i = s.size() - 2; i >= 0; i--) {\r\n                   if(s[i] > s[i+1]) {\r\n                       s[i]--;\r\n                       for(int j = i + 1; j < s.size(); j++) s[j] = '9';\r\n                   }\r\n            }\r\n        int ans = stoi(s);\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 43 ms (Top 69.04%) | Memory: 13.9 MB (Top 20.57%)\r\nclass Solution:\r\n    def monotoneIncreasingDigits(self, n: int) -> int:\r\n        num = list(str(n))\r\n        for i in range(len(num)-1):\r\n            # Step1: When don't meet the condition, num[i]-=1 and repalce all num left into '9' and directly return\r\n            # However, there is the case that num[i-1]==num[i], which will make num[i]-1<num[i-1]\r\n            # So, traverse back to find the num that its num[i-1] != num[i](to make sure num[i-1]<=num[i]-1), then do step1 and return\r\n            if num[i] > num[i+1]:\r\n                while i >= 1 and num[i-1] == num[i]:\r\n                    i -= 1\r\n                num[i] = chr(ord(num[i])-1)\r\n                return int(''.join(num[:i+1]+['9']*(len(num)-i-1)))\r\n        return n",
    "java": "// Runtime: 1 ms (Top 91.5%) | Memory: 38.98 MB (Top 97.6%)\r\n\r\nclass Solution {\r\n    public int monotoneIncreasingDigits(int n) {\r\n        int position;\r\n        int digitInTheNextPosition;\r\n        while ((position = getThePositionNotSatisfied(n)) != -1) {\r\n            digitInTheNextPosition = ((int) (n / Math.pow(10, position - 1))) % 10;\r\n            n -= Math.pow(10, position - 1) * (digitInTheNextPosition + 1);\r\n            n -= n % Math.pow(10, position);\r\n            n += Math.pow(10, position) - 1;\r\n        }\r\n        return n;\r\n    }\r\n\r\n    public int getThePositionNotSatisfied(int n) {\r\n        int k = 10;\r\n        int position = 0;\r\n        while (n > 0) {\r\n            if (k < n % 10) {\r\n                return position;\r\n            } else {\r\n                k = n % 10;\r\n                n /= 10;\r\n                position++;\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n}",
    "javascript": "// Runtime: 116 ms (Top 16.67%) | Memory: 42.3 MB (Top 73.81%)\r\nvar monotoneIncreasingDigits = function(n) {\r\n    let arr = String(n).split('');\r\n    for (let i=arr.length-2; i>=0; i--) {\r\n        if (arr[i]>arr[i+1]) {\r\n            arr[i]--;\r\n            for(let j=i+1; j<arr.length; j++) arr[j]='9';\r\n        }\r\n    }\r\n    return Number(arr.join(''));\r\n};"
  }
}
