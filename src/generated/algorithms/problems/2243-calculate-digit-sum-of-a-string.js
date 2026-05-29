export default {
  "id": 2243,
  "name": "Calculate Digit Sum of a String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/calculate-digit-sum-of-a-string",
  "relativeDir": "C/Calculate Digit Sum of a String",
  "slug": "2243-calculate-digit-sum-of-a-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 16,
    "python": 11,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 40.43%) | Memory: 6.60 MB (Top 24.35%)\r\n\r\nclass Solution {\r\npublic:\r\n    string digitSum(string s, int k) {\r\n        \r\n        if(s.length()<=k)\r\n            return s;\r\n        \r\n        string ans=\"\";\r\n        int sum=0,temp=k;\r\n        int len = s.length();\r\n        for(int i=0;i<len;i++){\r\n            sum += (s[i] -'0');\r\n            temp--;\r\n            if(temp==0){\r\n                ans+= to_string(sum);\r\n                temp=k;\r\n                sum=0;\r\n            }\r\n        }\r\n        if(temp!=k){\r\n        ans+= to_string(sum);\r\n        }\r\n        if(ans.length()>k)\r\n            ans = digitSum(ans,k);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def digitSum(self, s: str, k: int) -> str:\r\n        while len(s) > k:\r\n            set_3 = [s[i:i+k] for i in range(0, len(s), k)]\r\n            s = ''\r\n            for e in set_3:\r\n                val = 0\r\n                for n in e:\r\n                    val += int(n)\r\n                s += str(val)\r\n        return s",
    "java": "// Runtime: 6 ms (Top 32.40%) | Memory: 40.8 MB (Top 89.31%)\r\nclass Solution {\r\n    public String digitSum(String s, int k) {\r\n        while(s.length() > k) s = gen(s,k);\r\n        return s;\r\n    }\r\n    public String gen(String s,int k){\r\n        String res = \"\";\r\n        for(int i=0;i < s.length();){\r\n            int count = 0,num=0;\r\n            while(i < s.length() && count++ < k) num += Character.getNumericValue(s.charAt(i++));\r\n            res+=num;\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 117 ms (Top 16.67%) | Memory: 42.4 MB (Top 76.67%)\r\nvar digitSum = function(s, k) {\r\n    while (s.length > k) {\r\n        let newString = \"\";\r\n        for (let i = 0; i < s.length; i += k)\r\n            newString += s.substring(i, i + k).split(\"\").reduce((acc, val) => acc + (+val), 0);\r\n\r\n        s = newString;\r\n    }\r\n\r\n    return s;\r\n};"
  }
}
