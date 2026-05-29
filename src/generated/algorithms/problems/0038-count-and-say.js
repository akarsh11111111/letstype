export default {
  "id": 38,
  "name": "Count and Say",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-and-say",
  "relativeDir": "C/Count and Say",
  "slug": "0038-count-and-say",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 41,
    "python": 19,
    "javascript": 27
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 81.50%) | Memory: 6.6 MB (Top 78.80%)\r\nclass Solution {\r\npublic:\r\n    string countAndSay(int n) {\r\n        if(n == 1)\r\n            return \"1\";\r\n        else\r\n        {\r\n            string ans = \"\";\r\n            string temp = countAndSay(n-1);\r\n            int count = 1, curr = temp[0], i = 1;\r\n            while(i < temp.length())\r\n            {\r\n                if(temp[i] == curr)\r\n                    count++;\r\n                else\r\n                {\r\n                    ans += to_string(count);\r\n                    ans += curr;\r\n                    count = 1;\r\n                    curr = temp[i];\r\n                }\r\n                i++;\r\n            }\r\n            ans += to_string(count);\r\n            ans += curr;\r\n\r\n            return ans;\r\n        }\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countAndSay(self, n: int) -> str:\r\n        if n==1:\r\n            return \"1\"\r\n        \r\n        x=self.countAndSay(n-1)\r\n        count=1\r\n        cur=x[0]\r\n        res=\"\"\r\n        for i in range(1,len(x)):\r\n            if cur==x[i]:\r\n                count+=1\r\n            else:\r\n                res+=str(count)+str(cur)\r\n                count=1\r\n                cur=x[i]\r\n                \r\n        res+=str(count)+str(cur)\r\n        return res",
    "java": "class Solution {\r\n    public String countSay(int n, String[] mapper) {\r\n        if (n == 1) return mapper[1];\r\n        else {\r\n            String say = \"\";\r\n            if (mapper[n-1] != null) say += mapper[n-1];\r\n            else say += countSay(n-1, mapper);\r\n            String count = \"\";\r\n            int cache = Integer.parseInt(say.substring(0, 1));\r\n            int cntr = 1;\r\n            if (say.length() < 2) {\r\n                count += \"1\" + Integer.toString(cache);\r\n            } else {\r\n                for(int i=1;i<say.length();i++) {\r\n                    if (cache == Integer.parseInt(say.substring(i, i+1))) {\r\n                        cntr++;\r\n                        if (i == say.length() - 1) {\r\n                            count += Integer.toString(cntr) + Integer.toString(cache);\r\n                            cntr = 1;\r\n                        }\r\n                    } else {\r\n                        count += Integer.toString(cntr) + Integer.toString(cache);\r\n                        if (i < say.length() - 1) {\r\n                            cache = Integer.parseInt(say.substring(i, i+1));\r\n                            cntr = 1;\r\n                        } else if (i == say.length() - 1) {\r\n                            count += \"1\" + say.substring(i, i+1);\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n            mapper[n] = count;\r\n            return mapper[n];\r\n        }\r\n    }\r\n    public String countAndSay(int n) {\r\n        String mapper[] = new String[n+1];\r\n        mapper[1] = \"1\";\r\n        return countSay(n, mapper);\r\n    }\r\n}",
    "javascript": "var countAndSay = function(n) {\r\n    if(n==1) return '1';\r\n    let index = 1, num = '1';\r\n    while(index < n){\r\n        num = say(num);\r\n        index++;\r\n    }\r\n    return num;\r\n};\r\n\r\nfunction say(num) {\r\n    let prev = num[num.length-1], count = 0, newNum = '';\r\n    for(let index = num.length-1; index >= 0 ; index--) {\r\n        if(prev == num[index]) {\r\n            count++;\r\n        }\r\n        else{\r\n            newNum = ''+count + prev + newNum;\r\n            count = 1;\r\n            prev = num[index];\r\n        }\r\n    }\r\n    if(count) {\r\n        newNum = ''+count + prev + newNum;\r\n    }\r\n    return newNum;\r\n}"
  }
}
