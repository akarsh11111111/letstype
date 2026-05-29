export default {
  "id": 989,
  "name": "Add to Array-Form of Integer",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/add-to-array-form-of-integer",
  "relativeDir": "A/Add to Array-Form of Integer",
  "slug": "0989-add-to-array-form-of-integer",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 48,
    "java": 17,
    "python": 4,
    "javascript": 20
  },
  "languages": {
    "cpp": "Time: O(max(n,Log k))  Space: O(1)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> addToArrayForm(vector<int>& num, int k) {\r\n        vector<int> res;\r\n        int i=size(num)-1;\r\n        int c=0,sum;\r\n        while(i>=0){\r\n            sum=num[i]+k%10+c;\r\n            res.push_back(sum%10);\r\n            c=sum/10;\r\n            k/=10;i--;\r\n        }\r\n        while(k){\r\n            sum=k%10+c;\r\n            res.push_back(sum%10);\r\n            c=sum/10;\r\n            k/=10;\r\n        }\r\n        if(c)\r\n            res.push_back(c);\r\n        reverse(begin(res),end(res));\r\n        return res;\r\n    }\r\n};\r\n\r\n--> Approach 2 \r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> addToArrayForm(vector<int>& num, int k) {\r\n        vector<int> res;\r\n        int i=size(num)-1;\r\n        int sum;\r\n        while(i>=0){\r\n            sum=num[i]+k;\r\n            res.push_back(sum%10);\r\n            k=sum/10;i--;\r\n        }\r\n        while(k){\r\n            res.push_back(k%10);\r\n            k/=10;\r\n        }\r\n        reverse(begin(res),end(res));\r\n        return res;\r\n    }\r\n};",
    "python": "// Runtime: 384 ms (Top 73.70%) | Memory: 15 MB (Top 73.95%)\r\nclass Solution:\r\n    def addToArrayForm(self, num: List[int], k: int) -> List[int]:\r\n        return list(str(int(\"\".join(map(str,num)))+k))",
    "java": "class Solution {\r\n    public List<Integer> addToArrayForm(int[] num, int k) {\r\n        List<Integer> res = new ArrayList<>();\r\n        \r\n        int i = num.length;\r\n        while(--i >= 0 || k > 0) {\r\n            if(i >= 0)\r\n                k += num[i];\r\n            \r\n            res.add(k % 10);\r\n            k /= 10;\r\n        }\r\n        Collections.reverse(res);\r\n        \r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 102 ms (Top 97.93%) | Memory: 45.7 MB (Top 99.22%)\r\nvar addToArrayForm = function(num, k) {\r\n    const length = num.length;\r\n    let digit = 0, index = length-1;\r\n    while(k > 0 || digit > 0) {\r\n        if(index >= 0) {\r\n            digit = digit + num[index] + k%10;\r\n            num[index] = digit%10;\r\n        }\r\n        else {\r\n            digit = digit + k%10;\r\n            num.unshift(digit%10);\r\n        }\r\n        digit = digit > 9 ? 1 : 0;\r\n        k = parseInt(k/10);\r\n        index--;\r\n    }\r\n    if(digit) num.unshift(digit);\r\n    return num;\r\n};"
  }
}
