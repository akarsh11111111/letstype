export default {
  "id": 2165,
  "name": "Smallest Value of the Rearranged Number",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/smallest-value-of-the-rearranged-number",
  "relativeDir": "S/Smallest Value of the Rearranged Number",
  "slug": "2165-smallest-value-of-the-rearranged-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 31,
    "python": 15,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.1 MB (Top 63.28%)\r\nclass Solution\r\n{\r\npublic:\r\n    long long smallestNumber(long long num)\r\n    {\r\n        if (num < 0)\r\n        {\r\n            string s = to_string(-num);\r\n            sort(s.rbegin(), s.rend());\r\n            return -stoll(s);\r\n        }\r\n        else if (num == 0)\r\n            return 0;\r\n        string s = to_string(num);\r\n        sort(s.begin(), s.end());\r\n        int i = 0;\r\n        while (s[i] == '0')\r\n            i++;\r\n        char c = s[i];\r\n        s.erase(s.begin() + i);\r\n        s = c + s;\r\n        return stoll(s);\r\n    }\r\n};",
    "python": "# Runtime: 68 ms (Top 17.05%) | Memory: 13.9 MB (Top 69.77%)\r\nclass Solution:\r\n    def smallestNumber(self, num: int) -> int:\r\n        lst=[i for i in str(num)]\r\n        if num<0:\r\n            return ''.join(['-'] + sorted(lst[1:],reverse=True))\r\n        lst=sorted(lst)\r\n        if '0' in lst:\r\n            itr=0\r\n            while itr<len(lst) and lst[itr]=='0':\r\n                itr+=1\r\n            if itr==len(lst): #All zeroes\r\n                return ''.join(lst)\r\n            return ''.join([lst[itr]]+lst[:itr]+lst[itr+1:])\r\n        return ''.join(lst)",
    "java": "class Solution {\r\n    public long smallestNumber(long num) {\r\n        if(num == 0){\r\n            return 0;\r\n        }\r\n        boolean isNegative = num < 0;\r\n        num  = num < 0 ? num * -1 : num;\r\n        \r\n        char[] c = String.valueOf(num).toCharArray();\r\n        Arrays.sort(c);\r\n        String str;\r\n        if(!isNegative){\r\n            int non = 0;\r\n\t\t\t//if not negative we need to find out the first non-leading zero then swap with first zero\r\n            for(; non < c.length; non++){\r\n                if(c[non] != '0'){\r\n                    break;\r\n                }\r\n            }\r\n            char temp = c[non];\r\n            c[non] = c[0];\r\n            c[0] = temp;\r\n            str = new String(c);\r\n        }else{\r\n            str = new String(c);\r\n            StringBuilder sb = new StringBuilder(str);\r\n            str = \"-\".concat(sb.reverse().toString());\r\n        }\r\n        return Long.valueOf(str);\r\n    }\r\n}",
    "javascript": "\r\nvar smallestNumber = function(num) {\r\n    let arr = Array.from(String(num));\r\n    if(num>0){\r\n    arr.sort((a,b)=>{\r\n         return a-b;\r\n    })\r\n    }\r\n    else{\r\n         arr.sort((a,b)=>{\r\n              return b-a;\r\n         })\r\n    }\r\n    for(let i=0;i<arr.length;i++){\r\n       if(arr[i]!=0){\r\n            [arr[0],arr[i]]=[arr[i],arr[0]];\r\n            break;\r\n       }\r\n  }\r\n    return arr.join(\"\");\r\n};"
  }
}
