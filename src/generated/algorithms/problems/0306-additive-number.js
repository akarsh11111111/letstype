export default {
  "id": 306,
  "name": "Additive Number",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/additive-number",
  "relativeDir": "A/Additive Number",
  "slug": "0306-additive-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 54,
    "java": 35,
    "python": 21,
    "javascript": 35
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 35.88%) | Memory: 6.5 MB (Top 9.47%)\r\n\r\nclass Solution\r\n{\r\npublic:\r\n    bool isAdditiveNumber(string num)\r\n    {\r\n        vector<string> adds;\r\n        return backtrack(num, 0, adds);\r\n    }\r\n\r\nprivate:\r\n    bool backtrack(string num, int start, vector<string> &adds)\r\n    {\r\n        if (start >= num.size() && adds.size() >= 3)\r\n            return true;\r\n\r\n        int maxSize = num[start] == '0' ? 1 : num.size() - start;\r\n        for (int i = 1; i <= maxSize; i++)\r\n        {\r\n            string current = num.substr(start, i);\r\n\r\n            if (adds.size() >= 2)\r\n            {\r\n                string num1 = adds[adds.size() - 1], num2 = adds[adds.size() - 2];\r\n                string sum = add(num1, num2);\r\n                if (sum != current)\r\n                    continue;\r\n            }\r\n\r\n            adds.push_back(current);\r\n            if (backtrack(num, start + i, adds))\r\n                return true;\r\n            adds.pop_back();\r\n        }\r\n        return false;\r\n    }\r\n\r\n    string add(string num1, string num2)\r\n    {\r\n        string sum;\r\n        int i1 = num1.size() - 1, i2 = num2.size() - 1, carry = 0;\r\n        while (i1 >= 0 || i2 >= 0)\r\n        {\r\n            int current = carry + (i1 >= 0 ? (num1[i1--] - '0') : 0) + (i2 >= 0 ? (num2[i2--] - '0') : 0);\r\n            carry = current / 10;\r\n            sum.push_back(current % 10 + '0');\r\n        }\r\n        if (carry)\r\n            sum.push_back(carry + '0');\r\n        reverse(begin(sum), end(sum));\r\n        return sum;\r\n    }\r\n};",
    "python": "class Solution:\r\ndef isAdditiveNumber(self, num: str) -> bool:\r\n    \r\n    def isadditive(num1,num2,st):\r\n        if len(st) == 0:\r\n            return True\r\n        num3 = str(num1+num2)\r\n        l = len(num3)\r\n        return num3 == st[:l] and isadditive(num2,int(num3),st[l:])\r\n    \r\n    for i in range(1,len(num)-1):\r\n        for j in range(i+1,len(num)):\r\n            if num [0] == \"0\" and i != 1:\r\n                break\r\n            if num[i] == \"0\" and i+1 != j:\r\n                break\r\n           \r\n            if isadditive(int(num[:i]),int(num[i:j]),num[j:]):\r\n                \r\n                return True\r\n    return False",
    "java": "class Solution {\r\n\r\n    public boolean isAdditiveNumber(String num) {\r\n        return backtrack(num, 0, 0, 0, 0);\r\n    }\r\n    \r\n    public boolean backtrack(String num, int idx, long sum, long prev, int length){\r\n        if(idx == num.length()){\r\n            return length >= 3;\r\n        }\r\n        \r\n        long currLong = 0;\r\n        \r\n        for(int i = idx; i < num.length(); i++){\r\n            //make sure it won't start with 0\r\n            if(i > idx && num.charAt(idx) == '0') break;\r\n            currLong = currLong * 10 + num.charAt(i) - '0';\r\n            \r\n            if(length >= 2){\r\n                if(sum < currLong){\r\n                    //currLong is greater than sum of previous 2 numbers\r\n                    break;\r\n                }else if(sum > currLong){\r\n                    //currLong is smaller than sum of previous 2 numbers\r\n                    continue;\r\n                }\r\n            }\r\n            //currLong == sum of previous 2 numbers\r\n            if(backtrack(num, i + 1, currLong + prev, currLong, length + 1) == true){\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 134 ms (Top 8.22%) | Memory: 44.9 MB (Top 12.33%)\r\nconst getNum = (str, i, j) => {\r\n    str = str.slice(i, j);\r\n    if(str[0] == '0' && str.length > 1) return -1000\r\n    return Number(str);\r\n}\r\n\r\nvar isAdditiveNumber = function(num) {\r\n    // i = 3 say and make theory and proof that\r\n    const len = num.length;\r\n    for(let b = 2; b < len; b++) {\r\n        for(let i = 0; i < b - 1; i++) {\r\n            for(let j = i + 1; j < b; j++) {\r\n                let v1 = getNum(num,0, i + 1);\r\n                let v2 = getNum(num,i + 1, j + 1);\r\n                let v3 = getNum(num,j + 1, b + 1);\r\n                if(v1 + v2 == v3) {\r\n                    // test hypothesis;\r\n                    // from b start checking if string persist behaviour\r\n                    let p = num.slice(0, b + 1);\r\n                    while(p.length <= len) {\r\n                        let sum = v2 + v3;\r\n                        p += sum;\r\n                        v2 = v3;\r\n                        v3 = sum;\r\n                    }\r\n                    if(p.slice(0, len) == num) {\r\n                        return true;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return false;\r\n};"
  }
}
