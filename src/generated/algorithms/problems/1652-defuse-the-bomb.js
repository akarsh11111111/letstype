export default {
  "id": 1652,
  "name": "Defuse the Bomb",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/defuse-the-bomb",
  "relativeDir": "D/Defuse the Bomb",
  "slug": "1652-defuse-the-bomb",
  "availableLanguages": [
    "cpp",
    "java",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 21,
    "javascript": 33
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> decrypt(vector<int>& code, int k) {\r\n        vector<int>Ans(code.size(),0);\r\n        \r\n        for(int i = 0;i<code.size();i++){\r\n            if (k > 0){\r\n                int total = 0;\r\n                for(int count = 1;count<=k;count++){\r\n                    int num = i + count;\r\n                    num = num % code.size(); \r\n                    total += code[num];\r\n                }\r\n                Ans[i] = total;\r\n            }\r\n            else if (k < 0){\r\n                int total = 0;\r\n                for(int count = -1;count>=k;count--){\r\n                    int num = i + count;\r\n                    if (num < 0){\r\n                        num = code.size() + num;\r\n                    }\r\n                    total += code[num];\r\n                }\r\n                Ans[i] = total;\r\n            }\r\n            else{\r\n                Ans[i] = 0;\r\n            }\r\n        }\r\n        return Ans;\r\n    }\r\n};",
    "java": "class Solution {\r\n    public int[] decrypt(int[] code, int k) {\r\n        int[] res = new int[code.length];\r\n        if (k == 0) return res;\r\n        //Define the initial window and initial sum\r\n        int start = 1, end = k, sum = 0;\r\n        if (k < 0) {//If k < 0, the starting point will be end of the array.\r\n            k = -k;\r\n            start = code.length - k;\r\n            end = code.length - 1;\r\n        }\r\n        for (int i = start; i <= end; i++) sum += code[i];\r\n        //Scan through the code array as i moving to the right, update the window sum.\r\n        for (int i = 0; i < code.length; i++) {\r\n            res[i] = sum;\r\n            sum -= code[(start++) % code.length];\r\n            sum += code[(++end) % code.length];\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} code\r\n * @param {number} k\r\n * @return {number[]}\r\n */\r\nvar decrypt = function(code, k) {\r\n    var res = new Array(code.length).fill(0)\r\n    if (k > 0){\r\n            for(var i = 0; i < code.length; i++){\r\n            var count = 0\r\n            var j = i + 1\r\n            while(count < k){\r\n                if (j === code.length) j = 0\r\n                res[i] += code[j]\r\n                count = count + 1\r\n                j++\r\n            }\r\n        }\r\n    }\r\n    if (k < 0){\r\n            for(var i = 0; i < code.length; i++){\r\n            var count = 0\r\n            var j = i - 1\r\n            while(count > k){\r\n                if (j === -1) j = code.length - 1\r\n                res[i] += code[j]\r\n                count = count - 1\r\n                j--\r\n            }\r\n        }\r\n    }\r\n    return res \r\n};"
  }
}
