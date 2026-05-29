export default {
  "id": 779,
  "name": "K-th Symbol in Grammar",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/k-th-symbol-in-grammar",
  "relativeDir": "K/K-th Symbol in Grammar",
  "slug": "0779-k-th-symbol-in-grammar",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 22,
    "python": 16,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int kthGrammar(int n, int k) {\r\n        int kthNode = pow(2, (n-1)) + (k - 1);\r\n        vector<int>arr;\r\n        while(kthNode) {\r\n            arr.push_back(kthNode);\r\n            kthNode /= 2;\r\n        }\r\n        arr[arr.size() - 1] = 0;\r\n        for (int i = arr.size() - 2; i >= 0; i--) {\r\n            if (arr[i] % 2 == 0) {\r\n                arr[i] = arr[i+1];\r\n            }\r\n            else {\r\n                arr[i] = 1 ^ arr[i+1];\r\n            }\r\n        }\r\n        return arr[0];\r\n    }\r\n};",
    "python": "class Solution:\r\n  def solve(self,n,k):\r\n    if n==1 and k==1:\r\n      return 0 \r\n    mid = pow(2,n-1)//2 \r\n    if k<=mid:\r\n      return self.solve(n-1,k) \r\n    \r\n    return not self.solve(n-1,k-mid)\r\n    \r\n      \r\n  def kthGrammar(self,n,k):\r\n    if self.solve(n,k):\r\n      return 1 \r\n    else:\r\n      return 0",
    "java": "class Solution {\r\n    public int kthGrammar(int n, int k) {\r\n       if (n == 1 || k == 1) {\r\n            return 0;\r\n        }\r\n        int length = (int) Math.pow(2, n - 1);\r\n        int mid = length / 2;\r\n        if (k <= mid) {\r\n            return kthGrammar(n - 1, k);\r\n        } else if (k > mid + 1) {\r\n            return invert(kthGrammar(n - 1, k - mid));\r\n        } else {\r\n            return 1;\r\n        }\r\n    }\r\n    static int invert(int x) {\r\n        if (x == 0) {\r\n            return 1;\r\n        }\r\n        return 0;\r\n    }\r\n}",
    "javascript": "// Runtime: 102 ms (Top 22.47%) | Memory: 41.5 MB (Top 88.20%)\r\n/**\r\n * @param {number} n\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar kthGrammar = function(n, k) {\r\n    if (n == 1 && k == 1) {\r\n        return 0;\r\n    }\r\n\r\n    const mid = Math.pow(2, n-1) / 2;\r\n\r\n    if (k <= mid) {\r\n        return kthGrammar(n-1, k);\r\n    } else {\r\n        return kthGrammar(n-1, k-mid) == 1 ? 0 : 1;\r\n    }\r\n};"
  }
}
