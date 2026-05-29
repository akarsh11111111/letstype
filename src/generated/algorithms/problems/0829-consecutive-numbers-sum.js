export default {
  "id": 829,
  "name": "Consecutive Numbers Sum",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/consecutive-numbers-sum",
  "relativeDir": "C/Consecutive Numbers Sum",
  "slug": "0829-consecutive-numbers-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 19,
    "python": 13,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 6 ms (Top 49.82%) | Memory: 5.8 MB (Top 96.45%)\r\nclass Solution {\r\npublic:\r\n    int consecutiveNumbersSum(int n) {\r\n        int count = 0;\r\n        for(int i = 2 ; i < n ; i++){\r\n            int sum_1 = i*(i+1)/2;\r\n            if(sum_1 > n)\r\n                break;\r\n            if((n-sum_1)%i == 0)\r\n                count++;\r\n        }\r\n        return count+1;\r\n    }\r\n};",
    "python": "// Runtime: 77 ms (Top 82.13%) | Memory: 16.60 MB (Top 56.38%)\r\n\r\nclass Solution:\r\n    def consecutiveNumbersSum(self, n: int) -> int:\r\n        csum=0\r\n        result=0\r\n        for i in range(1,n+1):\r\n            csum+=i-1\r\n            if csum>=n:\r\n                break\r\n            if (n-csum)%i==0:\r\n                result+=1\r\n        return result",
    "java": "// Runtime: 6 ms (Top 75.69%) | Memory: 41.1 MB (Top 34.74%)\r\nclass Solution {\r\n\r\n    public int consecutiveNumbersSum(int n) {\r\n        final double eightN = (8d * ((double) n)); // convert to double because 8n can overflow int\r\n        final int maxTriangular = (int) Math.floor((-1d + Math.sqrt(1d + eightN)) / 2d);\r\n        int ways = 1;\r\n        int triangular = 1;\r\n        for (int m = 2; m <= maxTriangular; ++m) {\r\n            triangular += m;\r\n            final int difference = n - triangular;\r\n            if ((difference % m) == 0) {\r\n                ways++;\r\n            }\r\n        }\r\n        return ways;\r\n    }\r\n\r\n}",
    "javascript": "// Runtime: 101 ms (Top 40.00%) | Memory: 43.2 MB (Top 25.45%)\r\n\r\nvar consecutiveNumbersSum = function(n) {\r\n    let count = 1;\r\n    for (let numberOfTerms = 2; numberOfTerms < Math.sqrt(2*n) + 1; numberOfTerms++) {\r\n        let startNumber = (n - numberOfTerms * (numberOfTerms - 1) / 2) / numberOfTerms;\r\n        if (Number.isInteger(startNumber) && startNumber !== 0) {\r\n            count++;\r\n        }\r\n    }\r\n    return count;\r\n};"
  }
}
