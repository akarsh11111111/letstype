export default {
  "id": 932,
  "name": "Beautiful Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/beautiful-array",
  "relativeDir": "B/Beautiful Array",
  "slug": "0932-beautiful-array",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "python": 17,
    "javascript": 25
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tvector<int> beautifulArray(int n) {\r\n\r\n\t\tvector<int> v = {1};\r\n\r\n\t\twhile(v.size()<n)\r\n\t\t{\r\n\t\t\tvector<int> x;\r\n\r\n\t\t\tfor(auto c:v)\r\n\t\t\t{\r\n\t\t\t\tif(c*2-1<=n)\r\n\t\t\t\t{\r\n\t\t\t\t\tx.push_back(c*2-1);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tfor(auto d:v)\r\n\t\t\t{\r\n\t\t\t\tif(d*2<=n)\r\n\t\t\t\t{\r\n\t\t\t\t\tx.push_back(d*2);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tv=x;\r\n\t\t}\r\n\r\n\t\treturn v;\r\n\t}\r\n};",
    "python": "from itertools import permutations\r\nclass Solution:\r\n    def invalid(self, x):\r\n        n = len(x)\r\n        flag = False\r\n        for i in range(n):\r\n            if flag: break\r\n            for j in range(i+2, n):\r\n                if flag: break\r\n                for k in range(i+1, j):\r\n                    if 2*x[k] == x[i]+x[j]: flag = True; break\r\n        return flag\r\n        \r\n    def beautifulArray(self, n: int) -> List[int]:\r\n        for perm in permutations(range(1, n+1)):\r\n            if not self.invalid(perm):\r\n                return perm",
    "javascript": "var beautifulArray = function(n) {\r\n    const EVEN = 1;\r\n    const ODD = 2;\r\n    let helper = (arr, flag) => {\r\n        if (arr.length <= 2)\r\n            return arr;\r\n        let even, odd;\r\n        if (flag == ODD)\r\n            arr = arr.map(el=>(el+1)/2);\r\n        else if (flag == EVEN)\r\n            arr = arr.map(el=>el/2);\r\n        even = helper(arr.filter(el=>el%2 === 0), EVEN);\r\n        odd = helper(arr.filter(el=>el%2 !== 0), ODD);\r\n        arr = even.concat(odd);\r\n        if (flag == ODD)\r\n            arr = arr.map(el=>el*2-1);\r\n        else if (flag == EVEN)\r\n            arr = arr.map(el=>el*2);\r\n        return arr;\r\n    };\r\n    let arr = new Array(n);\r\n    for (let i = 0; i<n; i++)\r\n        arr[i] = i+1;\r\n    return helper(arr);\r\n};"
  }
}
