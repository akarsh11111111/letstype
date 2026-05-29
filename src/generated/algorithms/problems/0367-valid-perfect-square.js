export default {
  "id": 367,
  "name": "Valid Perfect Square",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/valid-perfect-square",
  "relativeDir": "V/Valid Perfect Square",
  "slug": "0367-valid-perfect-square",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 22,
    "python": 18,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 5.8 MB (Top 87.06%)\r\nclass Solution {\r\npublic:\r\n    bool isPerfectSquare(int num) {\r\n\r\n        if (num == 1)return true;\r\n        long long l = 1, h = num / 2;\r\n\r\n        while (l <= h) {\r\n            long long mid = l + (h - l) / 2;\r\n            long long midSqr = mid * mid;\r\n\r\n            if (midSqr == num) return true;\r\n\r\n            if (num < midSqr) {\r\n                h = mid - 1;\r\n            } else {\r\n                l = mid + 1;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "# Runtime: 45 ms (Top 36.3%) | Memory: 16.20 MB (Top 88.7%)\r\n\r\nclass Solution:\r\n    def isPerfectSquare(self, num: int) -> bool:\r\n        if num == 1:\r\n            return True\r\n        lo = 2\r\n        hi = num // 2\r\n        while lo <= hi:\r\n            mid = lo + (hi - lo) //2\r\n            print(mid)\r\n            if mid * mid == num:\r\n                return True\r\n            if mid * mid > num:\r\n                hi = mid - 1\r\n            else:\r\n                lo = mid + 1\r\n        return False",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 40.6 MB (Top 74.32%)\r\n\r\nclass Solution {\r\n    public boolean isPerfectSquare(int num) {\r\n        long start = 1;\r\n        long end = num;\r\n\r\n        while(start<=end){\r\n            long mid = start +(end - start)/2;\r\n\r\n            if(mid*mid==num){\r\n                return true;\r\n            }\r\n            else if(mid*mid<num){\r\n                start = mid+1;\r\n            }\r\n            else\r\n                end = mid-1;\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "var isPerfectSquare = function(num) {\r\n    let low = 1;\r\n    let high = 100000;\r\n    while(low <= high){\r\n        let mid = (low + high) >> 1;\r\n        let sqrt = mid * mid\r\n        if( sqrt == num) {\r\n            return true;\r\n        \r\n        }else if(num > sqrt ){\r\n            low = mid + 1\r\n        }else {\r\n            high = mid - 1\r\n        }\r\n    }\r\n    return false;\r\n};"
  }
}
