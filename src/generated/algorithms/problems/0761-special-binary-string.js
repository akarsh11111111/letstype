export default {
  "id": 761,
  "name": "Special Binary String",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/special-binary-string",
  "relativeDir": "S/Special Binary String",
  "slug": "0761-special-binary-string",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "python": 14,
    "javascript": 50
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 6.80 MB (Top 47.46%)\r\n\r\nclass Solution {\r\npublic:\r\n    string makeLargestSpecial(string s) {\r\n        \r\n        if(s.length()==0)\r\n            return \"\"; //return null string if size is zero\r\n\r\n        vector<string> ans; //list to store all current special substrings\r\n        int count=0,i=0; //keep track of special substring starting index using \"i\" and \r\n                         //\"count\" to keep the track of special substring is over or not\r\n\r\n        for(int j=0;j<s.size();j++){\r\n            if(s[j] == '1')\r\n                count++;\r\n            else\r\n                count--;\r\n            \r\n            if(count==0){\r\n                //call recursively using mid special substring\r\n\r\n                ans.push_back('1' + makeLargestSpecial(s.substr(i+1,j-i-1)) + '0');\r\n                i = j+1;\r\n            }\r\n        }\r\n        //sort current substring stored list to fulfill the question demand\r\n\r\n        sort(ans.begin(),ans.end(),greater<string>());\r\n        string finalString = \"\";\r\n        for(i=0;i<ans.size();i++){\r\n            finalString += ans[i];\r\n        }\r\n        return finalString;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def makeLargestSpecial(self, s: str) -> str:\r\n        \r\n        l = 0\r\n        balance = 0\r\n        sublist = []\r\n        for r in range(len(s)):\r\n            balance += 1 if s[r]=='1' else -1\r\n            if balance==0:\r\n                sublist.append(\"1\" + self.makeLargestSpecial(s[l+1:r])+ \"0\")\r\n                l = r+1\r\n        \r\n        sublist.sort(reverse=True)\r\n        return ''.join(sublist)",
    "javascript": "// Runtime: 111 ms (Top 16.6%) | Memory: 50.12 MB (Top 33.3%)\r\n\r\n/**\r\n * @param {string} S\r\n * @return {string}\r\n */\r\nvar makeLargestSpecial = function (S) {\r\n  let t = S\r\n  while (true) {\r\n    let t1 = largest(t)\r\n    if (t1 == t) return t\r\n    t = t1\r\n  }\r\n  function largest(S) {\r\n    let arr = S.split('').map(x => Number.parseInt(x)),\r\n      num = Number.parseInt(S, 2), rtn = S\r\n    for (let firstEndIndex = 1; firstEndIndex < S.length - 2; firstEndIndex++) {\r\n      for (let lLength = 2; lLength < firstEndIndex + 2; lLength += 2) {\r\n        let firstStartIndex = firstEndIndex - lLength + 1\r\n        if (!isSpecial(firstStartIndex, firstEndIndex)) continue\r\n        for (let rLength = 2; rLength < S.length - firstEndIndex; rLength += 2) {\r\n          let secondStartIndex = firstEndIndex + 1, secondEndIndex = firstEndIndex + rLength\r\n          if (!isSpecial(secondStartIndex, secondEndIndex)) continue\r\n          let str = [...arr.slice(0, firstStartIndex),\r\n          ...arr.slice(secondStartIndex, secondEndIndex + 1),\r\n          ...arr.slice(firstStartIndex, firstEndIndex + 1),\r\n          ...arr.slice(secondEndIndex + 1)].join('')\r\n          let newNum = Number.parseInt(str, 2)\r\n          if (newNum > num) {\r\n            num = newNum\r\n            rtn = str\r\n          }\r\n        }\r\n      }\r\n    }\r\n    return rtn\r\n\r\n    function isSpecial(start, end) {\r\n      let t = 0\r\n      for (let i = start; i <= end; i++) {\r\n        t += arr[i] == 1 ? 1 : -1\r\n        if (t < 0) return false // this is the second rule, really bad description\r\n      }\r\n      return t == 0 ? true : false\r\n    }\r\n  }\r\n\r\n};\r\n\r\n// console.log(makeLargestSpecial(\"101101011000\"))"
  }
}
