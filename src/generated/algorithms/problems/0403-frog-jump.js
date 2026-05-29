export default {
  "id": 403,
  "name": "Frog Jump",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/frog-jump",
  "relativeDir": "F/Frog Jump",
  "slug": "0403-frog-jump",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 48,
    "java": 39,
    "python": 23,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 418 ms (Top 31.73%) | Memory: 49.8 MB (Top 48.21%)\r\nclass Solution {\r\npublic:\r\n    bool canCross(vector<int>& stones) {\r\n       unordered_map<int,bool>mp; //to see the position where stone is present\r\n       for(int i=0;i<stones.size();i++)\r\n       {\r\n           mp[stones[i]]=true;\r\n       }\r\n       int stone=1; //current stone\r\n       int jump=1; //jump made\r\n       int last_stone=stones[stones.size()-1]; //last stone on which frog will land to cross river\r\n       map<pair<int,int>,bool>dp;\r\n       return fun(mp,stone,jump,dp,last_stone);\r\n    }\r\n    bool fun( unordered_map<int,bool>&mp,int stone,int jump,map<pair<int,int>,bool>&dp,int &ls)\r\n    {\r\n        if(stone==ls) //reached last stone\r\n        {\r\n            return true;\r\n        }\r\n        if(mp.find(stone)==mp.end()) //stone is not present\r\n        {\r\n            return false;\r\n        }\r\n        if(dp.find({stone,jump})!=dp.end())\r\n        {\r\n            return dp[{stone,jump}];\r\n        }\r\n        bool jump1=false;\r\n        bool jump2=false;\r\n        bool jump3=false;\r\n        if((stone+jump-1)>stone) //can take jump of k-1 units\r\n        {\r\n            jump1=fun(mp,stone+jump-1,jump-1,dp,ls);\r\n        }\r\n        if((stone+jump)>stone) //can take jump of k units\r\n        {\r\n            jump2=fun(mp,stone+jump,jump,dp,ls);\r\n        }\r\n        if((stone+jump+1)>stone) //can take jump of k+1 units\r\n        {\r\n            jump3=fun(mp,stone+jump+1,jump+1,dp,ls);\r\n        }\r\n        dp[{stone,jump}]=jump1 or jump2 or jump3;\r\n        return dp[{stone,jump}];\r\n    }\r\n};",
    "python": "# Runtime: 231 ms (Top 72.60%) | Memory: 19.2 MB (Top 61.18%)\r\nclass Solution:\r\n    def possible(self, i, n, stones, pos, allowedJumps):\r\n        if i == n - 1:\r\n            return True\r\n        key = tuple([i] + allowedJumps)\r\n        if key in self.cache:\r\n            return self.cache[key]\r\n        for jump in allowedJumps:\r\n            if jump > 0 and stones[i] + jump in pos:\r\n                if self.possible(pos[stones[i] + jump], n, stones, pos, [jump - 1, jump, jump + 1]):\r\n                    self.cache[key] = True\r\n                    return True\r\n        self.cache[key] = False\r\n        return False\r\n\r\n    def canCross(self, stones: List[int]) -> bool:\r\n        n = len(stones)\r\n        pos = {}\r\n        for i, stone in enumerate(stones):\r\n            pos[stone] = i\r\n        self.cache = {}\r\n        return self.possible(0, n, stones, pos, [1])",
    "java": "class Solution {\r\n    static boolean flag = false;   // If flag is true no more operations in recursion, directly return statement\r\n    public boolean canCross(int[] stones) {\r\n        int i = 0; // starting stone\r\n        int k = 1; // starting jump\r\n        flag = false; \r\n        return canBeCrossed(stones, k, i);\r\n    }\r\n    \r\n    public boolean canBeCrossed(int[] stones, int k, int i){\r\n        if(!flag){ // If flag is false \r\n        if(stones[i] + k == stones[stones.length - 1]){ // If frog do 'k' jump from current stone lands on last stones, no more recusive calls and return true\r\n            flag = true;\r\n            return true;\r\n        }\r\n\t\t// If frog do 'k' jump from current stone crosses last stone or not able to reach next stone\r\n\t\t//return false\r\n        if((stones[i] + k > stones[stones.length - 1]) || (stones[i]+k<stones[i+1])) return false;\r\n        int temp = i+1; // identify which next stone frog can reach\r\n\t\t//Find untill which stone frog can jump \r\n\t\t//So jump from current stone not greater than next possible stone exit loop\r\n        while(stones[i]+k > stones[temp]) temp++;\r\n\t\t//If loop exited 2 condition possible\r\n\t\t//jump from current stone is reached next possible stone\r\n\t\t//or not\r\n\t\t\r\n\t\t//If next possible stone reached\r\n\t\t//then do all possible jumps from this stone \r\n\t\t//the current stone is 'temp'\r\n\t\t//possible jumps are 'k-1', k, 'k+1'\r\n        if(stones[i]+k == stones[temp]) return (canBeCrossed(stones, k+1, temp) || canBeCrossed(stones, k, temp) || canBeCrossed(stones,k-1,temp));\r\n\t\t\r\n\t\t//If next possible stone not reached means jump from the current stone can't reach any stone\r\n\t\t//hence return false\r\n        else return false;\r\n    }\r\n        else return true;\r\n    }\r\n}",
    "javascript": "var canCross = function(stones) {\r\n    let hash = {};\r\n    function dfs(idx = 0, jumpUnits = 0) {\r\n        let key = `${idx}-${jumpUnits}`;\r\n        if (key in hash) return hash[key];\r\n\t\t\r\n        if (idx === stones.length - 1) return true;\r\n        if (idx >= stones.length) return false;\r\n\t\t\r\n        let minJump = jumpUnits - 1, maxJump = jumpUnits + 1;\r\n        for (let i = idx + 1; i < stones.length; i++) {\r\n            let jump = stones[i] - stones[idx];\r\n            if (jump >= minJump && jump <= maxJump) {\r\n                if (dfs(i, jump)) return hash[idx] = true;\r\n            } else if (jump > maxJump) break;\r\n        } return hash[key] = false;\r\n    }\r\n    return dfs();\r\n};"
  }
}
