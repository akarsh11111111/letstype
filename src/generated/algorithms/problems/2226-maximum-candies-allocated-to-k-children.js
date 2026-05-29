export default {
  "id": 2226,
  "name": "Maximum Candies Allocated to K Children",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-candies-allocated-to-k-children",
  "relativeDir": "M/Maximum Candies Allocated to K Children",
  "slug": "2226-maximum-candies-allocated-to-k-children",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 31,
    "python": 23,
    "javascript": 29
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool canSplit(vector<int>& candies, long long k, long long mid) {\r\n        long long split = 0;\r\n        for(int i = 0; i < candies.size(); ++i) {\r\n            split += candies[i]/mid;\r\n        }   \r\n        if(split >= k)\r\n            return true;\r\n        else\r\n            return false;\r\n    }\r\n    \r\n    int maximumCandies(vector<int>& candies, long long k) {\r\n        long long sum = 0;\r\n        for(int i = 0; i < candies.size(); ++i) {\r\n            sum += candies[i];\r\n        }\r\n        long long start = 1, end = sum/k;\r\n        long long ans = 0;\r\n        while(start <= end) {\r\n            long long mid = (start + end)/2;\r\n            if(canSplit(candies, k, mid)) {\r\n                ans = mid;\r\n                start = mid + 1;\r\n            } else {\r\n                end = mid-1;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 3294 ms (Top 14.29%) | Memory: 27.4 MB (Top 62.05%)\r\ndef canSplit(candies, mid, k):\r\n    split = 0\r\n    for i in candies:\r\n        split += i//mid\r\n    if split >= k:\r\n        return True\r\n    else:\r\n        return False\r\n\r\nclass Solution:\r\n    def maximumCandies(self, candies: List[int], k: int) -> int:\r\n        end = sum(candies)//k\r\n        start = 1\r\n        ans = 0\r\n        while start <= end:\r\n            mid = (start + end)//2\r\n            if canSplit(candies, mid, k):\r\n                start = mid + 1\r\n                ans = mid\r\n            else:\r\n                end = mid - 1\r\n        return ans",
    "java": "class Solution {\r\n    public boolean canSplit(int[] candies, long k, long mid) {\r\n        long split = 0;\r\n        for(int i = 0; i < candies.length; ++i) {\r\n            split += candies[i]/mid;\r\n        }   \r\n        if(split >= k)\r\n            return true;\r\n        else\r\n            return false;\r\n    }\r\n    \r\n    public int maximumCandies(int[] candies, long k) {\r\n        long sum = 0;\r\n        for(int i = 0; i < candies.length; ++i) {\r\n            sum += candies[i];\r\n        }\r\n        long start = 1, end = sum;\r\n        long ans = 0;\r\n        while(start <= end) {\r\n            long mid = (start + end)/2;\r\n            if(canSplit(candies, k, mid)) {\r\n                ans = mid;\r\n                start = mid + 1;\r\n            } else {\r\n                end = mid-1;\r\n            }\r\n        }\r\n        return (int)ans;\r\n    }\r\n}",
    "javascript": "var maximumCandies = function(candies, k) {\r\n    const n = candies.length;\r\n    \r\n    let left = 1;\r\n    let right = 1e7 + 1;\r\n    \r\n    while (left < right) {\r\n        const mid = (left + right) >> 1;\r\n        const pilesAvail = divideIntoPiles(mid);\r\n\r\n        if (pilesAvail < k) right = mid;\r\n        else left = mid + 1;\r\n    }\r\n    \r\n    return right - 1;\r\n    \r\n    \r\n    function divideIntoPiles(pileSize) {\r\n        let piles = 0;\r\n        \r\n        for (let i = 0; i < n; ++i) {\r\n            const count = candies[i];\r\n            \r\n            piles += Math.floor(count / pileSize);\r\n        }\r\n        \r\n        return piles;\r\n    }\r\n};"
  }
}
