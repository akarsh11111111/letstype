export default {
  "id": 1545,
  "name": "Find Kth Bit in Nth Binary String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-kth-bit-in-nth-binary-string",
  "relativeDir": "F/Find Kth Bit in Nth Binary String",
  "slug": "1545-find-kth-bit-in-nth-binary-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 29,
    "python": 6,
    "javascript": 26
  },
  "languages": {
    "cpp": "// Runtime: 2599 ms (Top 5.05%) | Memory: 326.4 MB (Top 5.74%)\r\nclass Solution {\r\npublic:\r\n    string Reverse(string s){\r\n        for(int i=0;i<s.length()/2;i++){\r\n            swap(s[i],s[s.length()-1-i]);\r\n        }\r\n        return s;\r\n    }\r\n\r\n    string invert(string s){\r\n        for(int i=0;i<s.length();i++){\r\n            if(s[i]=='1') s[i]='0';\r\n            else s[i]='1';\r\n        }\r\n        return s;\r\n    }\r\n\r\n    string S(int n) {\r\n        if(n==1){\r\n            return \"0\";\r\n        }\r\n        return S(n-1) + \"1\" + Reverse(invert(S(n-1)));\r\n    }\r\n\r\n    char findKthBit(int n, int k) {\r\n        if(n==1) return '0';\r\n        string s = S(n-1) + \"1\" + Reverse(invert(S(n-1)));\r\n        return s[k-1];\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findKthBit(self, n: int, k: int) -> str:\r\n        i, s, hash_map = 1, '0', {'1': '0', '0': '1'}\r\n        for i in range(1, n):\r\n            s = s + '1' + ''.join((hash_map[i] for i in s))[::-1]\r\n        return s[k-1]",
    "java": "// Runtime: 2755 ms (Top 5.21%) | Memory: 238.8 MB (Top 5.21%)\r\nclass Solution {\r\n   private String invert(String s){\r\n        char [] array=s.toCharArray();\r\n        for(int i=0;i<s.length();i++){\r\n            if(array[i]=='1'){\r\n                array[i]='0';\r\n            }\r\n            else{\r\n                array[i]='1';\r\n            }\r\n        }\r\n        return new String(array);\r\n    }\r\n    private String reverse(String s){\r\n        StringBuilder str=new StringBuilder(s);\r\n        return str.reverse().toString();\r\n    }\r\n    private String func(int i){\r\n        if(i==0){\r\n            return \"0\";\r\n        }\r\n        return func(i-1)+\"1\"+reverse(invert(func(i-1)));\r\n    }\r\n    public char findKthBit(int n, int k) {\r\n        String s=func(n-1);\r\n        return s.charAt(k-1);\r\n    }\r\n}",
    "javascript": "// Runtime: 54 ms (Top 95.65%) | Memory: 41.70 MB (Top 91.3%)\r\n\r\nvar findKthBit = function(n, k) {\r\n   if (k === 1)    return '0';\r\n   if (k === 2)    return '1';\r\n   \r\n   let binary = 2;\r\n   while (binary < k) {\r\n       binary *= 2;\r\n   }\r\n   \r\n   let count = 0;\r\n   while (binary > 2) {\r\n       if (k == binary/2) {\r\n//             The starting number is 1 if at position power of 2 (2^x)\r\n           return (count%2 == 0) ? '1' : '0';\r\n       }\r\n       if (k > binary/2) {\r\n           k = binary-k;\r\n           count++;\r\n       }\r\n       binary /= 2;\r\n   }\r\n\r\n   return (count%2 == 0) ? '0' : '1';\r\n};"
  }
}
