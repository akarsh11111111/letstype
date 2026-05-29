export default {
  "id": 728,
  "name": "Self Dividing Numbers",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/self-dividing-numbers",
  "relativeDir": "S/Self Dividing Numbers",
  "slug": "0728-self-dividing-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 22,
    "python": 11,
    "javascript": 30
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool check(int n){\r\n        vector<bool> isif(10);\r\n        for(int i = 1; i <= 9; i++){\r\n            if(n % i == 0) isif[i] = 1;\r\n        }\r\n        \r\n        while(n > 0){\r\n            if(isif[n%10] == 0) return false;\r\n            n /= 10;\r\n        }\r\n        return true;\r\n    }\r\n    vector<int> selfDividingNumbers(int left, int right) {\r\n        vector<int> ans;\r\n        for(int i = left; i <= right; i++){\r\n            if(check(i)) ans.push_back(i);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 99 ms (Top 32.60%) | Memory: 13.9 MB (Top 25.64%)\r\nclass Solution:\r\n    def selfDividingNumbers(self, left: int, right: int) -> List[int]:\r\n        res = []\r\n        for num in range(left, right + 1):\r\n            num_str = str(num)\r\n            if '0' in num_str:\r\n                continue\r\n            elif all([num % int(digit_str) == 0 for digit_str in num_str]):\r\n                res.append(num)\r\n        return res",
    "java": "class Solution {\r\n    public List<Integer> selfDividingNumbers(int left, int right) {\r\n        List<Integer> ans= new ArrayList<>();\r\n        while(left<=right){\r\n            if(fun(left))\r\n                ans.add(left);        \r\n            left++;\r\n        }\r\n        return ans;\r\n    }\r\n    boolean fun(int x){\r\n        int k=x;\r\n        while(k>0)\r\n        {\r\n            int y=k%10;\r\n            k=k/10;\r\n            if(y==0||x%y!=0)\r\n                return false;\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 133 ms (Top 16.61%) | Memory: 42.3 MB (Top 87.95%)\r\n/**\r\n * @param {number} left\r\n * @param {number} right\r\n * @return {number[]}\r\n */\r\nvar selfDividingNumbers = function(left, right) {\r\n  const selfDivisibles = [];\r\n  for (let i = left; i <= right; i++) {\r\n    if (checkDivisibility(i)) {\r\n      selfDivisibles.push(i);\r\n    }\r\n  }\r\n  return selfDivisibles;\r\n};\r\n\r\nfunction checkDivisibility(num) {\r\n  let status = true;\r\n  let mod;\r\n  let original = num;\r\n  while (num !== 0) {\r\n    mod = Math.trunc(num % 10);\r\n    if (original % mod !== 0) {\r\n      status = false;\r\n      break;\r\n    }\r\n    num = Math.trunc(num / 10);\r\n  }\r\n  return status;\r\n}"
  }
}
