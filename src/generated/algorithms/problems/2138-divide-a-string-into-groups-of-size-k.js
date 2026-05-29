export default {
  "id": 2138,
  "name": "Divide a String Into Groups of Size k",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/divide-a-string-into-groups-of-size-k",
  "relativeDir": "D/Divide a String Into Groups of Size k",
  "slug": "2138-divide-a-string-into-groups-of-size-k",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 28,
    "python": 5,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 5 ms (Top 35.84%) | Memory: 7 MB (Top 15.75%)\r\nclass Solution {\r\npublic:\r\n    vector<string> divideString(string s, int k, char fill) {\r\n        vector<string> v;\r\n        for(int i=0;i<s.size();i=i+k)\r\n        {\r\n            string t=s.substr(i,k); // make substring of size atmost k\r\n\r\n            if(t.size()==k) // if size if k then push\r\n            {\r\n                v.push_back(t);\r\n                continue;\r\n            }\r\n\r\n            int l=t.size(); // if it is the last group and size if less than k\r\n            for(int j=0;j<(k-l);j++) // add fill char to t to make size k\r\n                t+=fill;\r\n\r\n            v.push_back(t);\r\n        }\r\n        return v;\r\n    }\r\n};",
    "python": "// Runtime: 38 ms (Top 66.92%) | Memory: 17.30 MB (Top 6.27%)\r\n\r\nclass Solution:\r\n    def divideString(self, s: str, k: int, fill: str) -> List[str]:\r\n        return [(s+k*fill)[i:i+k] for i in range(0,len(s),k)]",
    "java": "// Runtime: 1 ms (Top 96.0%) | Memory: 42.30 MB (Top 49.23%)\r\n\r\nclass Solution {\r\n    public String[] divideString(String s, int k, char fill) {\r\n        //the size of result array\r\n        String[] r = new String[(int) Math.ceil((s.length() * 1.0) / k)];\r\n        int idx;\r\n        //if the last one needs to be filled, then I do it\r\n        if (s.length() % k != 0) {\r\n            idx = s.length() - (s.length() % k);\r\n            StringBuilder sb = new StringBuilder();\r\n            sb.append(s.substring(idx));\r\n            for (int i = sb.length(); i < k; i++) {\r\n                sb.append(fill);\r\n            }\r\n            r[r.length - 1] = sb.toString();\r\n        } else {\r\n            //no need to fill the last, \r\n            //that's why idx is equal to s length\r\n            idx = s.length();\r\n        }\r\n        for (int i = 0; i < idx; i+=k) {\r\n            r[i / k] = s.substring(i, i + k);\r\n        }\r\n        \r\n        return r;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} s\r\n * @param {number} k\r\n * @param {character} fill\r\n * @return {string[]}\r\n */\r\nvar divideString = function(s, k, fill) \r\n{\r\n  var ans=[];\r\n  for(let i=0;i<s.length;i+=k)\r\n    {\r\n      ans.push(s.substring(i,i+k));\r\n    }\r\n  let str=ans[ans.length-1];\r\n  if(str.length==k)\r\n    {\r\n      return ans;\r\n    }\r\n  for(let i=str.length;i<k;i++)\r\n    {\r\n      ans[ans.length-1]+=fill;\r\n    }\r\n  return ans;\r\n};"
  }
}
