export default {
  "id": 1318,
  "name": "Minimum Flips to Make a OR b Equal to c",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c",
  "relativeDir": "M/Minimum Flips to Make a OR b Equal to c",
  "slug": "1318-minimum-flips-to-make-a-or-b-equal-to-c",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 27,
    "python": 16,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minFlips(int a, int b, int c) {\r\n        int changeBits = 0;\r\n\r\n        for(int i=0; i<32; i++){\r\n            int lastBitA = 0;\r\n            int lastBitB = 0;\r\n            int lastBitC = 0;\r\n            if(((a >> i) & 1) == 1){\r\n                lastBitA = 1;\r\n            }\r\n            if (((b >> i) & 1) == 1){\r\n                lastBitB = 1;\r\n            }\r\n            if (((c >> i) & 1) == 1){\r\n                lastBitC = 1;\r\n            }\r\n            if(lastBitC == 1){\r\n                if(lastBitA == 0 & lastBitB == 0){\r\n                    changeBits++;\r\n                }\r\n            }\r\n            else{\r\n                if(lastBitA == 1 || lastBitB == 1){\r\n                    if(lastBitA == 1){\r\n                        changeBits++;\r\n                    }\r\n                    if(lastBitB == 1){\r\n                        changeBits++;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return changeBits;\r\n    }\r\n};",
    "python": "# Runtime: 37 ms (Top 81.40%) | Memory: 13.8 MB (Top 80.93%)\r\nclass Solution:\r\n    def minFlips(self, a: int, b: int, c: int) -> int:\r\n        res = 0\r\n        for i in range(32):\r\n            if (a & 1) | (b & 1) != (c & 1):\r\n                if (c & 1) == 1: # (a & 1) | (b & 1) should be == 1 ; so changing any of a, b we can get 1\r\n                    res += 1\r\n                else: # (a & 1) | (b & 1) should be == 0 ; is (a & 1) == 1 and (b & 1) == 1 we need to change both to 0 so res += 1; if any of them is 1 then change only 1 i.e. res += 1\r\n                    res += (a & 1) + (b & 1)\r\n            a, b, c = a>>1, b>>1, c>>1 # right-shift by 1\r\n\r\n        return res\r\n\r\n# Time: O(1)\r\n# Space: O(1)",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 39.2 MB (Top 89.45%)\r\nclass Solution {\r\n    public int minFlips(int a, int b, int c) {\r\n        int j=-1;\r\n        int x=a|b;\r\n        int count=0;\r\n        while(c!=0 || x!=0){\r\n            j++;\r\n            int aa=x%2;\r\n            int bb=c%2;\r\n            if(aa==0 && bb==1)count++;\r\n            else if(aa==1 && bb==0) count+=funcount(j,a,b);\r\n            x=x>>1;\r\n            c=c>>1;\r\n        }\r\n        return count;\r\n    }\r\n    public static int funcount(int shift,int a,int b){\r\n        int cc=0;\r\n        int mask=1<<shift;\r\n        int b1=a&mask;\r\n        int b2=b&mask;\r\n        if(b1!=0)cc++;\r\n        if(b2!=0)cc++;\r\n        return cc;\r\n    }\r\n}```",
    "javascript": "var minFlips = function(a, b, c) {\r\n    let ans = 0;\r\n    for(let bit = 0; bit < 32; bit++) {\r\n        let bit_a = (a >> bit)&1, bit_b = (b >> bit)&1, bit_c = (c >> bit)&1;\r\n        if(bit_c !== (bit_a | bit_b)) {\r\n            if(bit_c === 1) { //a b will be 0 0\r\n                ans += 1;\r\n            } else { //a b -> 0 1 -> 1 0 -> 1 1\r\n                ans += (bit_a + bit_b === 2 ? 2 : 1);\r\n            }\r\n        }\r\n    }\r\n    return ans;\r\n};"
  }
}
