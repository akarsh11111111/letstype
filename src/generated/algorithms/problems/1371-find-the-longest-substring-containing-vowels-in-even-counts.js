export default {
  "id": 1371,
  "name": "Find the Longest Substring Containing Vowels in Even Counts",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts",
  "relativeDir": "F/Find the Longest Substring Containing Vowels in Even Counts",
  "slug": "1371-find-the-longest-substring-containing-vowels-in-even-counts",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 54,
    "python": 29,
    "javascript": 36
  },
  "languages": {
    "cpp": "// Runtime: 124 ms (Top 78.91%) | Memory: 16.3 MB (Top 35.00%)\r\n//When the xor of all the even times numbers are done it results in 0. The xor of the vowels are done by indicating\r\n//them with a single digit and the xor value is stored in a map\r\nclass Solution {\r\npublic:\r\n    int findTheLongestSubstring(string s) {\r\n        int x= 0;\r\n        unordered_map<int,int>mp;\r\n        mp[0]=-1;\r\n        int n=0;\r\n        for(int i=0;i<s.length();i++){\r\n            if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u'){\r\n                x^= (s[i]-'a'+1);\r\n               if(mp.find(x)==mp.end())\r\n                  mp[x]=i;\r\n            }\r\n            if(mp.find(x)!=mp.end())\r\n                n= max(n,i-mp[x]);\r\n        }\r\n        return n;\r\n    }\r\n};",
    "python": "// Runtime: 636 ms (Top 16.95%) | Memory: 64.80 MB (Top 5.08%)\r\n\r\nclass Solution:\r\n    def findTheLongestSubstring(self, s: str) -> int:\r\n        integrals = [(False, False, False, False, False)] # integrals[10][mapping[\"a\"]] == False means we have seen \"a\" appears even times before index 10\r\n        mapping = {\r\n            \"a\": 0,\r\n            \"i\": 1,\r\n            \"u\": 2,\r\n            \"e\": 3,\r\n            \"o\": 4\r\n        }\r\n\r\n        for v in s:\r\n            vector = list(integrals[-1])\r\n            if v in mapping: # if v is a vowel\r\n                vector[mapping[v]] = not vector[mapping[v]] # toggle that dimension, because if v had appeared even times before, it becomes odd times now\r\n            integrals.append(tuple(vector))\r\n\r\n        seen = {}\r\n        res = 0\r\n\r\n        for i, v in enumerate(integrals):\r\n            if v in seen: # we have seen this vector before\r\n                res = max(res, i - seen[v]) # compare its substring length\r\n            else:\r\n                seen[v] = i # just record the first time each vector appears\r\n\r\n        return res",
    "java": "// Runtime: 12 ms (Top 87.39%) | Memory: 45.40 MB (Top 86.55%)\r\n\r\nclass Solution {\r\n\r\n    // taken help as for my code TLE T.C = (n^2);\r\n\r\n/*    static boolean check(String s){\r\n        int n = s.length();\r\n\r\n        int arr[] = new int[26];\r\n\r\n        for(int i=0; i<n; i++){\r\n            int a = s.charAt(i)-97;\r\n            arr[a]++;\r\n        }\r\n\r\n        if(arr[0]%2!=0 || arr[4]%2!=0 || arr[8]%2!=0 || arr[14]%2!=0 ||arr[20]%2!=0) return false;\r\n        else return true; \r\n    }\r\n\r\n    static int helper(String str){\r\n        int ans = 0;\r\n        int n = str.length();\r\n        StringBuilder s = new StringBuilder(str);\r\n\r\n        for(int k=1; k<=n; k++){\r\n            for(int i=0; i<=n-k; i++){\r\n                String x = s.substring(i,i+k);\r\n                if(check(x)){\r\n                    ans = Math.max(ans,k);\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n\r\n    */\r\n    public int findTheLongestSubstring(String s) {\r\n\r\n        int[] map = new int[32];\r\n        Arrays.fill(map, -2);\r\n        map[0] = -1;\r\n        int n = s.length(), mask = 0, len = 0;\r\n        for (int i = 0; i < n; i++) {\r\n            char ch = s.charAt(i);\r\n            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') mask ^= 1 << (4 -\r\n                    (ch == 'a' ? 0 : ch == 'e' ? 1 : ch == 'i' ? 2 : ch == 'o' ? 3 : 4));\r\n            if (map[mask] == -2) map[mask] = i;\r\n            else len = Math.max(len, i - map[mask]);\r\n        }\r\n        return len;\r\n    }\r\n}",
    "javascript": "// Runtime: 196 ms (Top 22.22%) | Memory: 46.2 MB (Top 66.67%)\r\nvar findTheLongestSubstring = function(s) {\r\n    // u o i e a\r\n    // 0 0 0 0 0 => initial state, all are even letters\r\n    // s = \"abcab\"\r\n    // 0 0 0 0 1 => at index 0, only a is odd count\r\n    // 0 0 0 0 1 => at index 1, max = 1\r\n    // 0 0 0 0 1 => at index 2, max = 2\r\n    // 0 0 0 0 0 => at index 3, max = 4\r\n    // 0 0 0 0 0 => at index 4, max = 5\r\n\r\n    // valid condition: same state in previous index, then it means we have a even count for all letters within the middle substring.\r\n    var mask = 0;\r\n    var t = \"aeiou\";\r\n    var count = new Map(); // <mask, first_idx>\r\n    count.set(0,-1);\r\n    var res = 0;\r\n    for(var i = 0; i<s.length; i++)\r\n    {\r\n        if(t.indexOf(s[i])>=0)\r\n        {\r\n            var j = t.indexOf(s[i]);\r\n            mask = mask ^ (1 << j);\r\n        }\r\n        if(!count.has(mask))\r\n        {\r\n            count.set(mask,i);\r\n        }\r\n        else\r\n        {\r\n            // substring is from [prevIdx+1, i];\r\n            res = Math.max(res, i - count.get(mask));\r\n        }\r\n    }\r\n    return res;\r\n};"
  }
}
