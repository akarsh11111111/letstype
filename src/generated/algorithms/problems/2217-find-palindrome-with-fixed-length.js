export default {
  "id": 2217,
  "name": "Find Palindrome With Fixed Length",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-palindrome-with-fixed-length",
  "relativeDir": "F/Find Palindrome With Fixed Length",
  "slug": "2217-find-palindrome-with-fixed-length",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 30,
    "python": 20,
    "javascript": 22
  },
  "languages": {
    "cpp": "#define ll long long\r\nclass Solution {\r\npublic:\r\n    vector<long long> kthPalindrome(vector<int>& queries, int intLength) {\r\n        vector<ll> result;\r\n        ll start = intLength % 2 == 0 ? pow(10, intLength/2 - 1) : pow(10, intLength/2);\r\n        for(int q: queries) { \r\n            string s = to_string(start + q - 1);\r\n            string palindrome = s;\r\n            reverse(s.begin(), s.end());\r\n            if(intLength % 2 == 0) {\r\n                palindrome += s;\r\n            } else {\r\n                palindrome += s.substr(1, s.size() - 1);\r\n            }\r\n\t\t\t\r\n\t\t\t// len of palindrome should be intLength, otherwise -1\r\n            if (palindrome.size() == intLength)\r\n                result.push_back(stoll(palindrome));\r\n            else\r\n                result.push_back(-1);\r\n        }\r\n        \r\n        return result;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def kthPalindrome(self, queries: List[int], intLength: int) -> List[int]:\r\n        ogLength = intLength\r\n        isOdd = intLength & 1\r\n        if isOdd:\r\n            intLength += 1\r\n        k = intLength // 2\r\n        k = 10 ** (k - 1)\r\n        op = []\r\n        for q in queries:\r\n            pal = str(k + q - 1)\r\n            if isOdd:\r\n                pal += pal[::-1][1:]\r\n            else:\r\n                pal += pal[::-1]\r\n            if len(pal) == ogLength:\r\n                op.append(int(pal))\r\n            else:\r\n                op.append(-1)\r\n        return op",
    "java": "// Runtime: 121 ms (Top 54.38%) | Memory: 96.6 MB (Top 65.63%)\r\n\r\nclass Solution {\r\n    public long[] kthPalindrome(int[] queries, int intLength) {\r\n        long[] res= new long[queries.length];\r\n        for(int i=0;i<queries.length;i++){\r\n            res[i]=nthPalindrome(queries[i],intLength);\r\n        }\r\n        return res;\r\n    }\r\n    public long nthPalindrome(int nth, int kdigit)\r\n    {\r\n    long temp = (kdigit & 1)!=0 ? (kdigit / 2) : (kdigit/2 - 1);\r\n    long palindrome = (long)Math.pow(10, temp);\r\n    palindrome += nth - 1;\r\n    long res1=palindrome;\r\n    if ((kdigit & 1)>0)\r\n        palindrome /= 10;\r\n    while (palindrome>0)\r\n    {\r\n        res1=res1*10+(palindrome % 10);\r\n        palindrome /= 10;\r\n    }\r\n    String g=\"\";\r\n    g+=res1;\r\n    if(g.length()!=kdigit)\r\n        return -1;\r\n    return res1;\r\n}\r\n}",
    "javascript": "// Runtime: 513 ms (Top 19.44%) | Memory: 80.3 MB (Top 30.56%)\r\nvar kthPalindrome = function(queries, intLength) {\r\n    let output=[];\r\n    // 1. We use FIRST 2 digits to create palindromes: Math.floor((3+1)/2)=2\r\n    let digit=Math.floor((intLength+1)/2);\r\n\r\n    for(let i=0; i<queries.length; i++){\r\n        // 2A. Get Nth 2-digits numbers: 10*(2-1)-1+[5,98]=[14,107]\r\n        let helper=10**(digit-1)-1+queries[i];\r\n        // 2B. Digits checking: 107>=100, which is INVALID\r\n        if(helper>=10**digit){output.push(-1)}\r\n        else{\r\n            let m=intLength-digit;\r\n            // 3A. We still need m digits for REFLECTION: 14=>[\"1\",\"4\"]=>\"41\"\r\n            let add=helper.toString().substr(0, m).split(\"\").reverse().join(\"\");\r\n            // 3B. Multiply 10**m for reversed digits: 14=>1400=>1441\r\n            helper=helper*10**m+add*1;\r\n            output.push(helper);\r\n        }\r\n    }\r\n    return output; // [1441,-1]\r\n};"
  }
}
