export default {
  "id": 1492,
  "name": "The kth Factor of n",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/the-kth-factor-of-n",
  "relativeDir": "T/The kth Factor of n",
  "slug": "1492-the-kth-factor-of-n",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 17,
    "python": 14,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 5 ms (Top 17.94%) | Memory: 6.2 MB (Top 15.94%)\r\nclass Solution {\r\npublic:\r\n    int kthFactor(int n, int k) {\r\n        vector<int> sol;\r\n        sol.push_back(1);\r\n        for(int i = 2; i <= n / 2; i++) {\r\n            if(n % i == 0) sol.push_back(i);\r\n        }\r\n        if(n != 1) sol.push_back(n);\r\n        if(k > sol.size()) return -1;\r\n        return sol[k - 1];\r\n    }\r\n};",
    "python": "class Solution:\r\n    def kthFactor(self, n: int, k: int) -> int:\r\n        start=[1]\r\n        end=[n]\r\n        for i in range(2,math.ceil(math.sqrt(n))+1):\r\n            if n%i==0:\r\n                start.append(i)\r\n                if i!=n//i:\r\n                    end.append(n//i)\r\n        start=sorted(set(start).union(set(end)))\r\n        if k<=len(start):\r\n            return start[k-1]\r\n        else:\r\n            return -1",
    "java": "class Solution {\r\n    public int kthFactor(int n, int k) {\r\n    ArrayList<Integer> list = new ArrayList<>();\r\n\r\n        for (int i = 1; i <= n; i++) {\r\n\r\n            if (n % i == 0){\r\n                list.add(i);\r\n            }\r\n        }\r\n        if (list.size() < k){\r\n            return -1;\r\n        }\r\n        \r\n        return list.get(k-1);\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} n\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar kthFactor = function(n, k) {\r\n    const res = [1]\r\n    for(let i=2; i<n; i++){\r\n        if(n%i === 0){\r\n            res.push(i)\r\n        }\r\n    }\r\n    res.push(n)\r\n    return res[k-1] || -1\r\n};"
  }
}
