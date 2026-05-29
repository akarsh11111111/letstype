export default {
  "id": 1395,
  "name": "Count Number of Teams",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-number-of-teams",
  "relativeDir": "C/Count Number of Teams",
  "slug": "1395-count-number-of-teams",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 35,
    "python": 16,
    "javascript": 36
  },
  "languages": {
    "cpp": "// Runtime: 128 ms (Top 82.18%) | Memory: 9.5 MB (Top 29.42%)\r\nclass Solution {\r\npublic:\r\n    int numTeams(vector<int>& rating) {\r\n\r\n        int i, j, n = rating.size(), ans = 0;\r\n        vector<int> grt(n, 0), les(n, 0);\r\n        for(i=0;i<n;i++)\r\n        {\r\n            for(j=i+1;j<n;j++)\r\n            {\r\n                if(rating[j] > rating[i])\r\n                    grt[i] += 1;\r\n                else\r\n                    les[i] += 1;\r\n            }\r\n        }\r\n\r\n        for(i=0;i<n;i++)\r\n        {\r\n            for(j=i+1;j<n;j++)\r\n            {\r\n                if(rating[j] > rating[i])\r\n                    ans += grt[j];\r\n                else\r\n                    ans += les[j];\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numTeams(self, ratings: List[int]) -> int:\r\n        upper_dps = [0 for _ in range(len(ratings))]\r\n        lower_dps = [0 for _ in range(len(ratings))]\r\n        \r\n        count = 0\r\n        for i in range(len(ratings)):\r\n            for j in range(i):\r\n                if ratings[j] < ratings[i]:\r\n                    count += upper_dps[j]\r\n                    upper_dps[i] += 1\r\n                else:\r\n                    count += lower_dps[j]\r\n                    lower_dps[i] += 1\r\n                    \r\n        return count",
    "java": "// Smaller * Larger Solution\r\n// sum of #smaller * #larger\r\n// Time complexity: O(N^2)\r\n// Space complexity: O(1)\r\nclass Solution {\r\n    public int numTeams(int[] rating) {\r\n        final int N = rating.length;\r\n        int res = 0;\r\n        for (int i = 1; i < N; i++) {\r\n            res += smaller(rating, i, -1) * larger(rating, i, 1);\r\n            res += larger(rating, i, -1) * smaller(rating, i, 1);\r\n        }\r\n        return res;\r\n    }\r\n    \r\n    private int smaller(int[] rating, int i, int diff) {\r\n        int t = rating[i], count = 0;\r\n        i += diff;\r\n        while (i >= 0 && i < rating.length) {\r\n            if (rating[i] < t) count++;\r\n            i += diff;\r\n        }\r\n        return count;\r\n    }\r\n    \r\n    private int larger(int[] rating, int i, int diff) {\r\n        int t = rating[i], count = 0;\r\n        i += diff;\r\n        while (i >= 0 && i < rating.length) {\r\n            if (rating[i] > t) count++;\r\n            i += diff;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 158 ms (Top 57.36%) | Memory: 42.8 MB (Top 31.01%)\r\n// counting bigger / smaller elements\r\n// if after rating[i] has X bigger elements,\r\n// and each element has Y bigger elements after them\r\n// hence total elements that has i < j < k and rating[i] < rating[j] < rating[k]\r\n// same for the number of smaller elements\r\n// so the key point here is to know how many elements\r\n// that smaller and bigger than the current number\r\nvar numTeams = function(rating) {\r\n    // save total number of elements after i\r\n    // that smaller than rating[i]\r\n    let big = new Array(rating.length).fill(0)\r\n\r\n    let n = rating.length;\r\n    for (let i = 0; i < n - 1; i++) {\r\n        for (let j = i + 1; j < n; j++) {\r\n            if (rating[j] > rating[i]) big[i]++;\r\n        }\r\n    }\r\n\r\n    let count = 0;\r\n    for (let i = 0; i < n - 1; i++) {\r\n        for (let j = i + 1; j < n; j++) {\r\n            if (rating[j] > rating[i]) count += big[j]\r\n\r\n            // because all elements are unique, so\r\n            // we don't need to calculate the number of smaller elements\r\n            // because if there are X bigger elements after rating[i]\r\n            // then there are (n - i - 1 - X) smaller elements after rating[i]\r\n            // or small = n - i - 1 - big\r\n            else count += n - j - 1 - big[j];\r\n        }\r\n    }\r\n\r\n    return count;\r\n}"
  }
}
