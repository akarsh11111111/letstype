export default {
  "id": 1915,
  "name": "Number of Wonderful Substrings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-wonderful-substrings",
  "relativeDir": "N/Number of Wonderful Substrings",
  "slug": "1915-number-of-wonderful-substrings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 27,
    "python": 10,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 1019 ms (Top 30.96%) | Memory: 17.6 MB (Top 38.10%)\r\nclass Solution {\r\npublic:\r\n    long long wonderfulSubstrings(string word) {\r\n        int n=word.length();\r\n        int mask=0;\r\n        unordered_map<int,int>m;\r\n        m[0]++;\r\n        long long int ans=0;\r\n        for(int i=0;i<n;i++){\r\n            mask = mask^(1<<(word[i]-'a'));\r\n            int temp=mask;\r\n            int j=0;\r\n            while(j<=9){\r\n               int x=temp^(1<<j);\r\n                ans+=m[x];\r\n                j++;\r\n\r\n            }\r\n            ans+=m[mask];\r\n            m[mask]++;\r\n        }\r\n\r\n        return ans;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def wonderfulSubstrings(self, word: str) -> int:\r\n        cnt, res, mask = [1] + [0] * 1023, 0, 0\r\n        for ch in word:\r\n            mask ^= 1 << (ord(ch) - ord('a'))\r\n            res += cnt[mask]\r\n            for n in range(10):\r\n                res += cnt[mask ^ 1 << n];\r\n            cnt[mask] += 1\r\n        return res",
    "java": "class Solution {\r\n    public long wonderfulSubstrings(String word) {\r\n        int n = word.length();\r\n        long count = 0;\r\n        \r\n        long[] freq = new long[(1 << 10) + 1]; // Since we have to take only 2^10 possibilies, we can avoid an HashMap\r\n        \r\n        freq[0] = 1;\r\n        int res = 0; // initialize the frequency of 0000000000 as 1 because when no element is encountered, then th bitmask is 0\r\n        \r\n        for (int i = 0; i < n; i++) {\r\n            int mask = (1 << (word.charAt(i) - 'a'));\r\n            res ^= mask; // toggling bit of the current character to make it from odd to even OR even to odd\r\n            int chkMask = 1;\r\n            \r\n            count += freq[res];\r\n            for (int j = 1; j <= 10; j++) {  // Loop for checking all possiblities of different places of the Different Bit\r\n                count += freq[chkMask ^ res];\r\n                chkMask <<= 1;\r\n            }\r\n            \r\n            freq[res]++; // increasing the frequency of the current bitmask\r\n        }\r\n        \r\n        return count;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} word\r\n * @return {number}\r\n */\r\nvar wonderfulSubstrings = function(word) {\r\n    let hashMap={},ans=0,binaryRepresentation=0,t,pos,number,oneBitToggled;\r\n    hashMap[0]=1;\r\n    for(let i=0;i<word.length;i++){\r\n        pos = word[i].charCodeAt(0)-\"a\".charCodeAt(0);//Let's use position 0 for a, 1 for b .... 9 for j\r\n        t = (1 << pos);\r\n        binaryRepresentation = (binaryRepresentation^t);//Toggle the bit at pos in the current mask(pattern)\r\n        //This loop will check same binaryRepresentation and all the other binaryRepresentation with difference of 1 bit\r\n        for(let i=0;i<10;i++){//Check all the numbers by changing 1 position\r\n            number = (1<<i);//Change 1 bit at a time \r\n            oneBitToggled = (binaryRepresentation^number);\r\n            if(hashMap[oneBitToggled]!==undefined){\r\n                ans += hashMap[oneBitToggled];\r\n            }\r\n        }\r\n        if(hashMap[binaryRepresentation]===undefined){\r\n            hashMap[binaryRepresentation]=1;\r\n        }else{\r\n            ans += hashMap[binaryRepresentation];\r\n            hashMap[binaryRepresentation]++;\r\n        }\r\n    }\r\n    return ans;\r\n};"
  }
}
