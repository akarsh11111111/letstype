export default {
  "id": 1320,
  "name": "Minimum Distance to Type a Word Using Two Fingers",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers",
  "relativeDir": "M/Minimum Distance to Type a Word Using Two Fingers",
  "slug": "1320-minimum-distance-to-type-a-word-using-two-fingers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "java": 45,
    "python": 16,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string alpha = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\r\n    unordered_map<char, pair<int, int>> m;\r\n    int distCalc(char a, char b) {\r\n        pair<int, int> p_a = m[a];\r\n        pair<int, int> p_b = m[b];\r\n        \r\n        int x_diff = abs(p_a.first - p_b.first);\r\n        int y_diff = abs(p_a.second - p_b.second);\r\n        \r\n        return x_diff + y_diff;\r\n    }\r\n    int dp[301][27][27];\r\n    int minDist(string word, int i, char finger1_char, char finger2_char) {\r\n        if(i == word.size()) return 0;\r\n       \r\n        if(dp[i][finger1_char - 'A'][finger2_char - 'A'] != -1) return dp[i][finger1_char - 'A'][finger2_char - 'A'];\r\n        \r\n        //finger1\r\n        int op1 =  (finger1_char == '[' ? 0 : distCalc(finger1_char, word[i])) + minDist(word, i + 1, word[i], finger2_char);\r\n        \r\n        //finger2\r\n        int op2 =  (finger2_char == '[' ? 0 : distCalc(finger2_char, word[i])) + minDist(word, i + 1, finger1_char, word[i]);\r\n        \r\n        return dp[i][finger1_char - 'A'][finger2_char - 'A'] = min(op1, op2);\r\n    }\r\n    int minimumDistance(string word) {\r\n        //each letter has choice to be clicked by finger 1 or 2\r\n        \r\n        int row = -1;\r\n        for(int i = 0; i < alpha.length(); i++) {\r\n            int col = i % 6;\r\n            if(col == 0) row++;\r\n            m[alpha[i]] = {row, col};\r\n        }\r\n         memset(dp, -1, sizeof(dp));\r\n         return minDist(word, 0, '[', '[');\r\n    }\r\n};",
    "python": "from functools import cache\r\nclass Solution:\r\n    def minimumDistance(self, word: str) -> int:\r\n        alphabets = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\"\r\n        COL = 6\r\n        index = { c:(i//COL, i%COL) for i, c in enumerate(alphabets)}\r\n        def dist(a, b):\r\n            return abs(index[a][0] - index[b][0]) + abs(index[a][1] - index[b][1])\r\n        @cache\r\n        def dfs(lhand, rhand, i):\r\n            if i == len(word): return 0\r\n            res = float('inf')\r\n            res = min(res, dfs(word[i], rhand, i+1)) if lhand == -1 else min(res, dist(lhand, word[i])+dfs(word[i], rhand, i+1))\r\n            res = min(res, dfs(lhand, word[i],i+1)) if rhand == -1 else min(res, dist(word[i], rhand) + dfs(lhand, word[i], i+1))\r\n            return res\r\n        return dfs(-1, -1, 0)",
    "java": "class Solution {\r\n    HashMap<Character,Integer[]> pos;\r\n    int [][][]memo;\r\n    int type(String word,int index,char finger1,char finger2){\r\n        if (index==word.length()) return 0;\r\n        int ans=9999999;\r\n        if (memo[index][finger1-'A'][finger2-'A']!=-1) return memo[index][finger1-'A'][finger2-'A'];\r\n        if (finger1=='['){\r\n            \r\n            ans=Math.min(ans,type(word,index+1,word.charAt(index),finger2));\r\n        }\r\n        else{\r\n            \r\n            Integer [] prev=pos.get(finger1);\r\n            Integer [] curr=pos.get(word.charAt(index));\r\n            int dist=Math.abs(prev[0]-curr[0])+Math.abs(prev[1]-curr[1]);\r\n            ans=Math.min(ans,type(word,index+1,word.charAt(index),finger2)+dist);\r\n        }\r\n        if (finger2=='['){\r\n            ans=Math.min(ans,type(word,index+1,finger1,word.charAt(index)));\r\n        }\r\n        else{\r\n            Integer [] prev=pos.get(finger2);\r\n            Integer [] curr=pos.get(word.charAt(index));\r\n            int dist=Math.abs(prev[0]-curr[0])+Math.abs(prev[1]-curr[1]);\r\n            ans=Math.min(ans,type(word,index+1,finger1,word.charAt(index))+dist);\r\n        }\r\n        memo[index][finger1-'A'][finger2-'A']=ans;\r\n        return ans;\r\n    }\r\n    public int minimumDistance(String word) {\r\n        pos=new HashMap();\r\n        for (int i=0;i<26;i++){\r\n            Integer [] coord={i/6,i%6};\r\n            pos.put((char)('A'+i),coord);\r\n        }\r\n        memo=new int [word.length()]['z'-'a'+3]['z'-'a'+3];\r\n        for (int[][] row : memo) {\r\n            for (int[] rowColumn : row) {\r\n                Arrays.fill(rowColumn, -1);\r\n            }\r\n        }\r\n        return  type(word,0,'[','[');\r\n        }\r\n}",
    "javascript": "const dist = function(from, to){\r\n    if(from==-1) return 0; \r\n    const d1 = Math.abs((from.charCodeAt(0)-65)%6-(to.charCodeAt(0)-65)%6),\r\n          d2 = Math.abs(Math.floor((from.charCodeAt(0)-65)/6)-Math.floor((to.charCodeAt(0)-65)/6));\r\n    return d1 + d2;\r\n}\r\nvar minimumDistance = function(word) {\r\n\r\n    const dp = new Map();\r\n    \r\n    const dfs = function(i, lpos, rpos){\r\n        if(i==word.length) \r\n            return 0;\r\n        const key = [i,lpos,rpos].join(',');\r\n        if(dp.get(key)) \r\n            return dp.get(key);\r\n        dp.set(key, Math.min(dist(lpos,word[i])+dfs(i+1,word[i],rpos), dist(rpos,word[i])+dfs(i+1,lpos,word[i])));\r\n        return dp.get(key);\r\n    }\r\n    return dfs(0, -1, -1);\r\n};"
  }
}
