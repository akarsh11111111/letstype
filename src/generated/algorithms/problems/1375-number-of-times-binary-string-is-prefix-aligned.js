export default {
  "id": 1375,
  "name": "Number of Times Binary String Is Prefix-Aligned",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned",
  "relativeDir": "N/Number of Times Binary String Is Prefix-Aligned",
  "slug": "1375-number-of-times-binary-string-is-prefix-aligned",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 61,
    "java": 10,
    "python": 15,
    "javascript": 20
  },
  "languages": {
    "cpp": "class BIT{\r\n  public:\r\nvector<int>bit;\r\nint n;\r\nBIT(int n){\r\n    bit.resize(n+1,0);\r\n    this->n=n;\r\n}\r\n\r\nint findSum(int i){\r\n    \r\n    int sum=0;\r\n    while(i>0){\r\n        sum+=bit[i];\r\n        i-=(i&(-i));\r\n    }\r\n    return sum;\r\n}\r\n\r\nvoid update(int i,int val){\r\n    \r\n\r\n    while(i<=n){\r\n        bit[i]+=val;\r\n        i+=(i&(-i));\r\n    }  \r\n}\r\n\r\n};\r\n\r\n\r\nclass Solution {\r\npublic:\r\nint numTimesAllBlue(vector<int>& flips) {\r\n\r\n    int n=flips.size();\r\n    BIT tree(n+1);\r\n    int res=0;\r\n    string s=string(n,'0');\r\n   \r\n    int maxi=0;\r\n    for(auto &x:flips){\r\n        if(s[x-1]=='1'){\r\n            tree.update(x,-1);\r\n            s[x-1]='0';\r\n        }\r\n        else {\r\n            s[x-1]='1';\r\n            tree.update(x,1);\r\n        }\r\n        maxi=max(maxi,x);\r\n        if(tree.findSum(x)==x && tree.findSum(maxi)==maxi)\r\n            res++;\r\n        \r\n     \r\n    \r\n    }\r\n    \r\n\t return res;   \r\n\t}\r\n};",
    "python": "class Solution:\r\n    def numTimesAllBlue(self, flips: List[int]) -> int:\r\n        \r\n        \r\n        l = len(flips)\r\n        s = 0\r\n        c = 0\r\n        \r\n        for i in range(len(flips)):\r\n            f = flips[i]\r\n            s = 1 << (f - 1) | s\r\n            if s ==  (1 << (i+1))-1:\r\n                c += 1\r\n        \r\n        return c",
    "java": "class Solution {\r\n    public int numTimesAllBlue(int[] flips) {\r\n        int counter=0,total=0,max=Integer.MIN_VALUE;\r\n        for(int i=0;i<flips.length;i++){\r\n            if(max<flips[i])max=flips[i];\r\n            if(++counter==max)total++;\r\n        }\r\n        return total;\r\n    }\r\n}",
    "javascript": "var numTimesAllBlue = function(flips) {\r\n    const flipped = new Array(flips.length).fill(0);\r\n    let prefixAlignedCount = 0;\r\n    flips.forEach((i, step) => {\r\n        flipped[i - 1] = 1;\r\n        if(isPrefixAligned(step)) {\r\n            ++prefixAlignedCount;\r\n        }\r\n    })\r\n    return prefixAlignedCount;\r\n    \r\n    function isPrefixAligned(step) {\r\n        for(let i = 0; i < flips.length; ++i) {\r\n            if((i < step && flipped[i] === 0) || (i > step && flipped[i] === 1)) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n};"
  }
}
