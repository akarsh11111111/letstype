export default {
  "id": 806,
  "name": "Number of Lines To Write String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-lines-to-write-string",
  "relativeDir": "N/Number of Lines To Write String",
  "slug": "0806-number-of-lines-to-write-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 22,
    "python": 15,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.9 MB (Top 78.33%)\r\nclass Solution {\r\npublic:\r\n    vector<int> numberOfLines(vector<int>& widths, string s) {\r\n        vector<int>ans(2);\r\n        int lines =0;\r\n        int calc = 0;\r\n        int i =0;\r\n        while(i<s.length()){\r\n            calc = 0;\r\n            while(i<s.length() and calc<=100){\r\n                calc+=widths[s[i]-'a'];\r\n                i++;\r\n            }\r\n            if(calc>100){\r\n                i-=1;\r\n                calc-=widths[s[i]-'a'];\r\n            }\r\n            lines++;\r\n            // cout<<lines;\r\n        }\r\n        ans[0] = lines;\r\n        ans[1] = calc;\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numberOfLines(self, w: List[int], s: str) -> List[int]:\r\n        r=[0]*2\r\n        px=0\r\n        l=1\r\n        for i in range(len(s)):\r\n            px+=w[ord(s[i])-97]\r\n            if px>100:\r\n                l+=1\r\n                px=w[ord(s[i])-97]\r\n                \r\n            print(ord(s[i]))\r\n        r[0]=l\r\n        r[1]=px\r\n        return r",
    "java": "// Runtime: 1 ms (Top 73.53%) | Memory: 41.8 MB (Top 76.89%)\r\nclass Solution {\r\n    public int[] numberOfLines(int[] widths, String s) {\r\n            int sum=0,count=0;\r\n            for(int j=0;j<s.length();j++)\r\n            {\r\n                int pos = s.charAt(j)-'a';\r\n                sum+=widths[pos];\r\n                if(sum>100)\r\n                {\r\n                    j--;\r\n                    count++;\r\n                    sum=0;\r\n                    continue;\r\n                }\r\n            }\r\n        int[] arr = new int[2];\r\n        arr[0]=count+1;\r\n        arr[1]=sum;\r\n        return arr;\r\n    }\r\n}",
    "javascript": "// Runtime: 110 ms (Top 27.73%) | Memory: 43.1 MB (Top 24.37%)\r\nvar numberOfLines = function(widths, s) {\r\n    let pixel=100, line=1;\r\n    for(let i=0; i<s.length; i++){\r\n        if(pixel>=widths[s[i].charCodeAt()-97]){\r\n            pixel-=widths[s[i].charCodeAt()-97];\r\n        }else{\r\n            // this word should be written in NEXT line, so it CANNOT count.\r\n            i--; line++; pixel=100;\r\n        }\r\n    }\r\n    // 100-pixel = space used in this line.\r\n    return [line, 100-pixel];\r\n};"
  }
}
