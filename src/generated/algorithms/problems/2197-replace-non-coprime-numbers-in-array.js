export default {
  "id": 2197,
  "name": "Replace Non-Coprime Numbers in Array",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/replace-non-coprime-numbers-in-array",
  "relativeDir": "R/Replace Non-Coprime Numbers in Array",
  "slug": "2197-replace-non-coprime-numbers-in-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 64,
    "python": 9,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 458 ms (Top 15.39%) | Memory: 120.9 MB (Top 73.95%)\r\nclass Solution {\r\npublic:\r\n    vector<int> replaceNonCoprimes(vector<int>& nums) {\r\n        vector<int> res;\r\n        for (auto num : nums) {\r\n            while (!res.empty() && gcd(res.back(), num) > 1) {\r\n                num = lcm(res.back(), num);\r\n                res.pop_back();\r\n            }\r\n            res.push_back(num);\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def replaceNonCoprimes(self, nums: List[int]) -> List[int]:\r\n        res = []\r\n        for num in nums:\r\n            while res and gcd(res[-1], num) > 1:\r\n                num = lcm(res[-1], num)\r\n                res.pop()\r\n            res.append(num)\r\n        return res",
    "java": "class Solution {\r\n\tpublic List<Integer> replaceNonCoprimes(int[] nums) \r\n\t{\r\n\t\tList<Integer> al=new ArrayList<>();\r\n\t\tlong n1=nums[0];\r\n\t\tint idx=1;\r\n\r\n\t\twhile(idx<nums.length)\r\n\t\t{\r\n\t\t\tif((int)gcd(n1,nums[idx])==1)\r\n\t\t\t{\r\n\t\t\t\twhile(al.size()!=0)\r\n\t\t\t\t{\r\n\t\t\t\t\tint t=al.get(al.size()-1);\r\n\t\t\t\t\tif(gcd(n1,t)==1)\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\telse\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tal.remove(al.size()-1);\r\n\t\t\t\t\t\tn1=lcm(t,n1);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tal.add((int)n1);\r\n\t\t\t\tn1=nums[idx];\r\n\t\t\t\tidx++;\r\n\t\t\t}\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tn1=lcm(n1,nums[idx]);\r\n\t\t\t\tidx++;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\twhile(al.size()!=0)\r\n\t\t{\r\n\t\t\tint t=al.get(al.size()-1);\r\n\t\t\tif(gcd(n1,t)==1)\r\n\t\t\t\tbreak;\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tal.remove(al.size()-1);\r\n\t\t\t\tn1=lcm(t,n1);\r\n\t\t\t}\r\n\t\t} \r\n\t\tal.add((int)n1);\r\n\r\n\t\treturn al;\r\n\t}\r\n\r\n\tpublic long gcd(long a,long b)\r\n\t{\r\n\t\tif (b == 0)   \r\n\t\t\treturn a;  \r\n\r\n\t\treturn gcd(b, a % b);  \r\n\t}\r\n\r\n\tpublic long lcm(long a,long b)\r\n\t{\r\n\t\tlong hcf=gcd(a,b);\r\n\t\treturn (a*b)/hcf;\r\n\t}\r\n}",
    "javascript": "// Runtime: 704 ms (Top 12.50%) | Memory: 92.5 MB (Top 12.50%)\r\nfunction gcd(a, b) {\r\n    while (b > 0) {\r\n        a %= b;\r\n        [a, b] = [b, a];\r\n    }\r\n    return a;\r\n}\r\nfunction lcm(a, b) {\r\n    return a / gcd(a, b) * b;\r\n}\r\n\r\nvar replaceNonCoprimes = function(nums) {\r\n    let res = new Array();\r\n    for (let num of nums) {\r\n        while (res.length > 0 && gcd(res.at(-1), num) > 1) {\r\n            num = lcm(res.at(-1), num);\r\n            res.pop();\r\n        }\r\n        res.push(num);\r\n    }\r\n    return res;\r\n};"
  }
}
