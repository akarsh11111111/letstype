export default {
  "id": 1946,
  "name": "Largest Number After Mutating Substring",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-number-after-mutating-substring",
  "relativeDir": "L/Largest Number After Mutating Substring",
  "slug": "1946-largest-number-after-mutating-substring",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 38,
    "python": 13,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 98 ms (Top 46.69%) | Memory: 28.5 MB (Top 100.00%)\r\n//change first longest encountered substring from left which can make string greater in value\r\nclass Solution {\r\npublic:\r\n    string maximumNumber(string num, vector<int>& change){\r\n        int n=num.size();\r\n        for(int i=0;i<n;i++){\r\n            int x=num[i]-'0';\r\n            if(x < change[x]){//checking whether mutating this char will increment the value or not\r\n            //the mutation continues till mutating the char will increase the value\r\n                while(i<n and num[i]-'0'<=change[num[i]-'0']){\r\n                    num[i++]=change[num[i]-'0']+'0';\r\n                }\r\n                //break the loop when substring ends\r\n                break;\r\n            }\r\n        }\r\n        return num;\r\n    }\r\n};",
    "python": "class Solution:\r\ndef maximumNumber(self, num: str, change: List[int]) -> str:\r\n    flag=0\r\n    ls=list(num)\r\n    for i in range(len(ls)):\r\n        k=int(ls[i])\r\n        if change[k]>k:\r\n            ls[i]=str(change[k])\r\n            flag=1\r\n        elif flag==1 and change[k]<k:\r\n            break\r\n    \r\n    return \"\".join(ls)",
    "java": "class Solution {\r\n    public String maximumNumber(String num, int[] change) {\r\n        int i=0, n=num.length(), startIndex=-1, substringLength=0;\r\n        \r\n        // traverse through each digit in the input string\r\n        while(i<n) {\r\n            int digit=num.charAt(i)-48;\r\n            // when we encounter a digit which has greater change\r\n            if(change[digit] > digit) {\r\n                startIndex = i;\r\n                // keep on replacing subsequent characters with with the change if they also have greater change\r\n                while(i<n) {\r\n                    digit=num.charAt(i)-48;\r\n                    if(change[digit] < digit) {\r\n                        break;\r\n                    }\r\n                    i+=1;\r\n                }\r\n                substringLength = i-startIndex;\r\n                break;\r\n            }\r\n            i+=1;\r\n        }\r\n        \r\n        // Note: Using String Builder to ensure linear time complexity as java strings are immutable\r\n        StringBuilder result=new StringBuilder(\"\");\r\n        for(int j=0; j<n; j++) {\r\n            int digit=num.charAt(j)-48;\r\n            if(j>=startIndex && j<startIndex+substringLength) {\r\n                result.append(change[digit]);    \r\n            } else {\r\n                result.append(digit);   \r\n            }\r\n        }\r\n        \r\n        return result.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 263 ms (Top 13.33%) | Memory: 66.8 MB (Top 46.67%)\r\nvar maximumNumber = function(num, change) {\r\n    const digits = num.split(\"\");\r\n\r\n    let started = false;\r\n\r\n    for (let i = 0; i < digits.length; ++i) {\r\n        const origDig = digits[i];\r\n        const changeDig = change[origDig];\r\n\r\n        if (changeDig > origDig) {\r\n            started = true;\r\n            digits[i] = changeDig;\r\n        }\r\n        else if (changeDig < origDig && started) {\r\n            break;\r\n        }\r\n    }\r\n\r\n    return digits.join(\"\");\r\n};"
  }
}
