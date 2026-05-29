export default {
  "id": 541,
  "name": "Reverse String II",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reverse-string-ii",
  "relativeDir": "R/Reverse String II",
  "slug": "0541-reverse-string-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 36,
    "python": 8,
    "javascript": 31
  },
  "languages": {
    "cpp": "Time: O(n)  Space: O(1)\r\n\r\nclass Solution {\r\npublic:\r\n    string reverseStr(string s, int k) {\r\n        int n=size(s);\r\n        for(int i=0;i<n;i=i+2*k){\r\n            int j=i+k-1,k=i;\r\n            if(j>=n) \r\n                j=n-1;\r\n            while(k<(j)){\r\n                swap(s[k],s[j]);\r\n                k++,j--;\r\n            }\r\n        }\r\n        return s;\r\n    }\r\n};",
    "python": "# Runtime: 92 ms (Top 5.11%) | Memory: 14.1 MB (Top 58.38%)\r\nclass Solution:\r\n    def reverseStr(self, s: str, k: int) -> str:\r\n        a=list(s)\r\n        for i in range(0,len(a),2*k):\r\n            a[i:i+k]=a[i:i+k][::-1]\r\n        print(a)\r\n        return(\"\".join(a))",
    "java": "class Solution {\r\n    public String reverseStr(String s, int k) {\r\n        char[] ch=s.toCharArray();\r\n        int cnt=1,i=0;\r\n        StringBuilder sb=new StringBuilder();\r\n        String ans=\"\";\r\n        if(k>=s.length()){\r\n            sb.append(s);\r\n            sb.reverse();\r\n            return sb.toString();\r\n        }\r\n        for(i=0;i<s.length()-k;i+=k){\r\n            String str=s.substring(i,i+k);\r\n            if(cnt%2!=0){\r\n                sb.append(str);\r\n                sb.reverse();\r\n                ans+=sb.toString();\r\n                cnt++;\r\n                sb=new StringBuilder();\r\n            }\r\n            else{\r\n                ans+=str;\r\n                cnt++;\r\n            }\r\n        }\r\n        if(cnt%2!=0){\r\n            sb.append(s.substring(i,s.length()));\r\n            sb.reverse();\r\n            ans+=sb.toString();\r\n        }\r\n        else{\r\n            ans+=s.substring(i,s.length());\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 117 ms (Top 23.03%) | Memory: 44.8 MB (Top 54.82%)\r\n\r\n/**\r\n * @param {string} s\r\n * @param {number} k\r\n * @return {string}\r\n */\r\nvar reverseStr = function(s, k) {\r\n    const sArr = s.split('');\r\n\r\n    let start = 0;\r\n    let end = k - 1;\r\n\r\n    const swapBlock = (start, end) => {\r\n        while (start < end) {\r\n            [sArr[start], sArr[end]] = [sArr[end], sArr[start]];\r\n\r\n            start++;\r\n            end--;\r\n        }\r\n    };\r\n\r\n    while (start < end) {\r\n        swapBlock(start, end);\r\n\r\n        start = start + (k * 2);\r\n        end = sArr[start + (k-1)] ? start + (k-1) : s.length - 1;\r\n    }\r\n\r\n    return sArr.join('');\r\n};"
  }
}
