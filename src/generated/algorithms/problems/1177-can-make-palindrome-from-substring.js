export default {
  "id": 1177,
  "name": "Can Make Palindrome from Substring",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/can-make-palindrome-from-substring",
  "relativeDir": "C/Can Make Palindrome from Substring",
  "slug": "1177-can-make-palindrome-from-substring",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 44,
    "python": 25,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 966 ms (Top 29.96%) | Memory: 142.8 MB (Top 55.90%)\r\nclass Solution {\r\npublic:\r\n  vector<bool> canMakePaliQueries(string s, vector<vector<int>>& queries) {\r\n    vector<vector<int>>table(s.size(), vector<int>(26,0));\r\n    vector<bool>ans;\r\n\r\n    table[0][s[0]-'a']++;\r\n    for(int i = 1; i != s.size(); i++){\r\n      for(int j = 0; j != 26; j++) table[i][j] = table[i-1][j];\r\n      table[i][s[i]-'a']++;\r\n    }\r\n\r\n    for(auto &q: queries){\r\n      int odd = 2 + (q[2]<<1);\r\n      for(int i = 0; i != 26; i++){\r\n        int val = table[q[1]][i] - (q[0] ? table[q[0]-1][i] : 0);\r\n        if( (val & 1) && --odd == 0){ans.push_back(false); goto mark;}\r\n      }\r\n\r\n      ans.push_back(true);\r\n      mark:;\r\n    }\r\n\r\n    return ans;\r\n  }\r\n};",
    "python": "class Solution:\r\n    def canMakePaliQueries(self, s: str, queries: List[List[int]]) -> List[bool]:\r\n        hash_map = {s[0]: 1}\r\n        x = hash_map\r\n        prefix = [hash_map]\r\n        for i in range(1, len(s)):\r\n            x = x.copy()\r\n            x[s[i]] = x.get(s[i], 0) + 1\r\n            prefix.append(x)\r\n            \r\n        result = []\r\n        for query in queries:\r\n            cnt = 0\r\n            for key, value in prefix[query[1]].items():\r\n                if query[0] > 0:\r\n                    x = value - prefix[query[0]-1].get(key, 0)\r\n                else:\r\n                    x = value\r\n                if x % 2:\r\n                    cnt+=1\r\n            if cnt - 2 * query[2] > 1:\r\n                result.append(False)\r\n            else:\r\n                result.append(True)\r\n        return result",
    "java": "// Runtime: 29 ms (Top 84.38%) | Memory: 106.10 MB (Top 54.69%)\r\n\r\nclass Solution \r\n{ public List<Boolean> canMakePaliQueries(String s, int[][] queries) \r\n    {\r\n        List<Boolean> list = new ArrayList<>();\r\n        \r\n        int n = s.length();\r\n        // prefix map to count number of time each letters have occured to access in queries in O(1)\r\n       //s=  a b c d a\r\n        // a 1 1 1 1 2\r\n        // b 0 1 1 1 1\r\n        // c 0 0 1 1 1\r\n        // d 0 0 0 1 1\r\n        // e\r\n        // f\r\n        // .\r\n        // .\r\n        // .\r\n        int[][] map = new int[n+1][26];\r\n        for(int i=0;i<s.length();i++)\r\n        {\r\n            for(int j=0;j<26;j++)\r\n                map[i+1][j] = map[i][j];\r\n            \r\n            map[i+1][s.charAt(i) - 'a']++;\r\n        }\r\n        \r\n        for(int[] q : queries)\r\n        {\r\n            int l = q[0];\r\n            int r = q[1];\r\n            int k = q[2];\r\n            int count = 0;\r\n            \r\n            for(int i=0;i<26;i++)\r\n                count += (map[r+1][i] - map[l][i]) % 2;// count total characters that have odd count, so that we can replace the half of them with their pair.\r\n            \r\n            list.add(count/2 <= k);// if we can replace half of them with their pair\r\n        }\r\n        \r\n        return list;\r\n    }\r\n}",
    "javascript": "// Runtime: 315 ms (Top 46.15%) | Memory: 86.7 MB (Top 38.46%)\r\nconst getBitCount = (n) => {\r\n    let cnt = 0;\r\n    while(n > 0) {\r\n        cnt += n & 1;\r\n        n >>= 1;\r\n    }\r\n    return cnt;\r\n}\r\n\r\nvar canMakePaliQueries = function(s, queries) {\r\n    const masks = [0], base = 'a'.charCodeAt(0);\r\n    let mask = 0;\r\n    for(let c of s) {\r\n        mask ^= (1 << (c.charCodeAt(0) - base));\r\n        masks.push(mask);\r\n    }\r\n    return queries.map(([l, r, k]) => {\r\n        const cnt = getBitCount(masks[l] ^ masks[r+1]);\r\n        return cnt - 1 <= 2 * k\r\n    });\r\n};"
  }
}
