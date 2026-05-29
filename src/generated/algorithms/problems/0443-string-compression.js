export default {
  "id": 443,
  "name": "String Compression",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/string-compression",
  "relativeDir": "S/String Compression",
  "slug": "0443-string-compression",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 54,
    "java": 30,
    "python": 18,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\r\nvoid add1(vector<int>& arr) {\r\n    \r\n    if(arr.back() < 9) {\r\n        arr.back()++;\r\n        return ;\r\n    }\r\n    \r\n    reverse(begin(arr),end(arr));\r\n    int carry = 1;\r\n    \r\n    for(int i=0;i<arr.size();i++) {\r\n        \r\n        if(arr[i] < 9) {arr[i]++;carry=0;break;}\r\n        \r\n        arr[i] = 0;\r\n        carry = 1;\r\n    }\r\n    \r\n    if(carry == 1) arr.push_back(1);\r\n    reverse(begin(arr),end(arr));\r\n}\r\n\r\nint compress(vector<char>& chars) {\r\n    \r\n    int i=0;\r\n    for(int j=0;j<chars.size();j++) {\r\n        \r\n        if(j == chars.size()-1 or chars[j] != chars[j+1]) {\r\n            chars[i++] = chars[j];\r\n        }\r\n        \r\n        else {\r\n            \r\n            vector<int> cnt{0};\r\n            char ch = chars[j];\r\n            while(j < chars.size()and chars[j] == ch) {\r\n                j++;\r\n                add1(cnt);\r\n            }\r\n            \r\n            j--; // bcoz j will be incremented in for loop updation condition.\r\n            chars[i++] = ch;\r\n            \r\n            for(auto& it:cnt)\r\n                chars[i++] = '0'+it;\r\n            \r\n        }\r\n    }\r\n    chars.erase(chars.begin()+i,chars.end());\r\n    return i;\r\n}",
    "python": "class Solution:\r\n    def compress(self, chars: List[str]) -> int:\r\n        stri = ''\r\n        stack = [chars.pop(0)]\r\n        \r\n        while chars:\r\n            p = chars.pop(0)\r\n            \r\n            if p in stack:\r\n                stack.append(p)\r\n            else:\r\n                stri = stri + stack[-1] + str(len(stack) if len(stack) > 1 else '')\r\n                stack = [p] \r\n                \r\n        o = list(stri + stack[-1] + str(len(stack) if len(stack) > 1 else ''))\r\n        \r\n        for i in o:\r\n            chars.append(i)",
    "java": "class Solution {\r\n    public int compress(char[] chars) {\r\n        int index = 0;\r\n        int i = 0;\r\n\r\n        while (i < chars.length) {\r\n            int j = i;\r\n\r\n            while (j < chars.length && chars[j] == chars[i]) {\r\n                j++;\r\n            }\r\n\r\n            chars[index++] = chars[i];\r\n\r\n            if (j - i > 1) {\r\n                String count = j - i + \"\";\r\n\r\n                for (char c : count.toCharArray()) {\r\n                    chars[index++] = c;\r\n                }\r\n            }\r\n\r\n            i = j;\r\n        }\r\n\r\n        return index;\r\n    }\r\n}\r\n\r\n// TC: O(n), SC: O(1)",
    "javascript": "// Runtime: 42 ms (Top 99.85%) | Memory: 52.20 MB (Top 5.11%)\r\n\r\n/**\r\n * @param {character[]} chars\r\n * @return {number}\r\n */\r\nvar compress = function(chars) {\r\n  if (!chars.length) return 0;\r\n  let j = 0;\r\n  let cur = chars[0];\r\n  let counter = 0;\r\n  for (let i = 0; i <= chars.length; i++) {\r\n    if (chars[i] === cur) {\r\n      counter++;\r\n    } else {\r\n      chars[j] = cur;\r\n      if (counter > 1) {\r\n        const s = counter.toString();\r\n        for (let k = 0; k < s.length; k++) chars[++j] = s[k];\r\n      }\r\n      j++;\r\n      cur = chars[i];\r\n      counter = 1;\r\n    }\r\n  }\r\n  return j;\r\n};"
  }
}
