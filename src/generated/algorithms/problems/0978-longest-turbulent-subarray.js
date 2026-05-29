export default {
  "id": 978,
  "name": "Longest Turbulent Subarray",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-turbulent-subarray",
  "relativeDir": "L/Longest Turbulent Subarray",
  "slug": "0978-longest-turbulent-subarray",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 46,
    "python": 20,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxTurbulenceSize(vector<int>& arr) {\r\n        vector<int> table1(arr.size(), 0);\r\n        vector<int> table2(arr.size(), 0);\r\n        table1[0] = 1;\r\n        table2[0] = 1;\r\n        int max_len = 1;\r\n        for (int i=1; i<arr.size(); ++i) {\r\n            table1[i] = 1;\r\n            table2[i] = 1;\r\n            if (arr[i] < arr[i - 1] && (i & 1) == 0) {\r\n                table1[i] = table1[i - 1] + 1;\r\n            } else if (arr[i] > arr[i - 1] && (i & 1) == 1) {\r\n                table1[i] = table1[i - 1] + 1;\r\n            }\r\n            if (arr[i] > arr[i - 1] && (i & 1) == 0) {\r\n                table2[i] = table2[i - 1] + 1;\r\n            } else if (arr[i] < arr[i - 1] && (i & 1) == 1) {\r\n                table2[i] = table2[i - 1] + 1;\r\n            }\r\n            max_len = max(max_len, table1[i]);\r\n            max_len = max(max_len, table2[i]);\r\n        }\r\n        return max_len;\r\n    }\r\n};",
    "python": "# Runtime: 1152 ms (Top 13.10%) | Memory: 18.7 MB (Top 31.75%)\r\nclass Solution:\r\n    def maxTurbulenceSize(self, arr: List[int]) -> int:\r\n        def cmp(a,b):\r\n            if a == b: return 0\r\n            if a > b : return 1\r\n            return -1\r\n\r\n        n = len(arr)\r\n        ans = 1\r\n        prev = 0\r\n        for i in range(1,n):\r\n            c = cmp(arr[i-1],arr[i])\r\n            if c == 0:\r\n                # we shift prev to i\r\n                prev = i\r\n            elif i == n-1 or c * cmp(arr[i],arr[i+1]) != -1:\r\n                ans = ans if ans > i - prev + 1 else i - prev + 1\r\n                prev = i\r\n        return ans",
    "java": "class Solution {\r\n    public int maxTurbulenceSize(int[] arr) {\r\n        if(arr.length == 1) {\r\n            return 1;\r\n        } \r\n        int l = 0, r = 1;\r\n        int diff = arr[l] - arr[r];\r\n        int max;\r\n        if(diff == 0) {\r\n            l = 1;\r\n            r = 1;\r\n            max = 1;\r\n        } else {\r\n            l = 0;\r\n            r = 1;\r\n            max = 2;\r\n        }\r\n        for(int i = 1; r < arr.length-1; i++) {\r\n            int nextdiff = arr[i] - arr[i+1];\r\n            if(diff < 0) {\r\n                if(nextdiff > 0) {\r\n                    r++;\r\n                } else if(nextdiff == 0) {\r\n                    l = i+1;\r\n                    r = i+1;\r\n                } else {\r\n                    l = i;\r\n                    r = i+1;\r\n                }\r\n            } else {\r\n                if(nextdiff < 0) {\r\n                    r++;\r\n                } else if(nextdiff == 0) {\r\n                    l = i+1;\r\n                    r = i+1;\r\n                } else {\r\n                    l = i;\r\n                    r = i+1;\r\n                }\r\n            }\r\n            diff = nextdiff;\r\n            max = Math.max(max, r-l+1);\r\n        }\r\n        return max;\r\n    }\r\n}",
    "javascript": "// Runtime: 154 ms (Top 12.50%) | Memory: 63.1 MB (Top 7.81%)\r\nvar maxTurbulenceSize = function(arr) {\r\n    const len = arr.length;\r\n    const dp = Array.from({ length: len + 1 }, () => {\r\n        return new Array(2).fill(0);\r\n    });\r\n    let ans = 0;\r\n    for(let i = 1; i < len; i++) {\r\n        if(arr[i-1] > arr[i]) {\r\n            dp[i][0] = dp[i-1][1] + 1;\r\n        } else if(arr[i-1] < arr[i]) {\r\n            dp[i][1] = dp[i-1][0] + 1;\r\n        }\r\n        ans = Math.max(ans, ...dp[i]);\r\n    }\r\n\r\n    // console.log(dp);\r\n    return ans + 1;\r\n};"
  }
}
