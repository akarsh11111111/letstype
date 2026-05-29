export default {
  "id": 1864,
  "name": "Minimum Number of Swaps to Make the Binary String Alternating",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating",
  "relativeDir": "M/Minimum Number of Swaps to Make the Binary String Alternating",
  "slug": "1864-minimum-number-of-swaps-to-make-the-binary-string-alternating",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 30,
    "python": 27,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\n    \r\n    int minFillPos(string& s, char ch, int current = 0) {\r\n        int count = 0;\r\n        for(int i=0; i<s.size(); i+=2) {\r\n            if(s[i] != ch) count++;\r\n        }\r\n        return count;\r\n    }\r\n    \r\npublic:\r\n    int minSwaps(string s) {\r\n        int oneCount = count(s.begin(), s.end(), '1');\r\n        int zeroCount = count(s.begin(), s.end(), '0');\r\n        if(abs(oneCount-zeroCount) > 1) return -1;\r\n        if(oneCount > zeroCount) return minFillPos(s,'1');\r\n        if(zeroCount > oneCount) return minFillPos(s,'0');\r\n        return min(minFillPos(s,'0'), minFillPos(s,'1'));\r\n    }\r\n};",
    "python": "class Solution:\r\ndef minSwaps(self, st: str) -> int:\r\n    \r\n    def swap(st,c):\r\n        n = len(st)\r\n        mis = 0\r\n        for i in range(n):\r\n            if i%2==0 and st[i]!=c:\r\n                mis+=1\r\n            if i%2==1 and st[i]==c:\r\n                mis+=1\r\n        return mis//2\r\n            \r\n    dic = Counter(st)\r\n    z = dic['0']\r\n    o = dic['1']\r\n    res=0\r\n    if abs(z-o)>1:\r\n        return -1\r\n    elif z>o:\r\n        res = swap(st,'0')\r\n    elif o>z:\r\n        res = swap(st,'1')\r\n    else:\r\n        res = min(swap(st,'0'),swap(st,'1'))\r\n    \r\n    return res",
    "java": "class Solution {\r\n    public int minSwaps(String s) {\r\n        int cntZero=0 , cntOne=0;\r\n        for(char ch:s.toCharArray()){\r\n            if(ch=='0') cntZero++;\r\n            else cntOne++;\r\n        }\r\n        \r\n        //Invalid\r\n        if(Math.abs(cntOne-cntZero)>1) return -1;\r\n        \r\n        \r\n        if(cntOne>cntZero){  //one must be at even posotion\r\n            return countSwaps(s,'1');    \r\n        }else if(cntOne<cntZero){\r\n            return countSwaps(s,'0'); //zero must be at even position\r\n        }\r\n        \r\n        return Math.min(countSwaps(s,'0'),countSwaps(s,'1'));    \r\n    }\r\n    \r\n    //wrong count \r\n    private int countSwaps(String s,char start){\r\n        int wrongPosition=0;\r\n        for(int i=0;i<s.length();i+=2){\r\n            if(s.charAt(i)!=start) wrongPosition++;\r\n        }\r\n        return wrongPosition;\r\n    }\r\n}",
    "javascript": "var minSwaps = function(s) {\r\n    let ones = 0;\r\n    let zeroes = 0;\r\n    \r\n    for(let c of s) {\r\n        if(c === \"1\") ones++\r\n        else zeroes++\r\n    }\r\n    \r\n    if(Math.abs(ones - zeroes) > 1) return -1\r\n    \r\n    function count(i) {\r\n        let res = 0\r\n        for(let c of s) {\r\n            if(i !== c) res++;\r\n            if(i === \"1\") i = \"0\";\r\n            else i = \"1\";\r\n        }\r\n        \r\n        return res/2;\r\n    };\r\n    \r\n    if(ones > zeroes) return count(\"1\")\r\n    if(zeroes > ones) return count(\"0\")\r\n\r\n    return Math.min(count(\"1\"), count(\"0\"));\r\n};"
  }
}
