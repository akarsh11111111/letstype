export default {
  "id": 1871,
  "name": "Jump Game VII",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/jump-game-vii",
  "relativeDir": "J/Jump Game VII",
  "slug": "1871-jump-game-vii",
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
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool canReach(string s, int minJump, int maxJump) {\r\n        int n = s.length();\r\n        if(s[n-1]!='0')\r\n            return false;\r\n        \r\n        int i = 0;\r\n        queue<int> q;\r\n        q.push(0);\r\n        int curr_max = 0;\r\n        \r\n        while(!q.empty()){\r\n            i = q.front();\r\n            q.pop();\r\n            if(i == n-1)\r\n                return true;\r\n            \r\n            for(int j = max(i + minJump, curr_max); j <= min(i + maxJump, n - 1); j++){\r\n                if(s[j] == '0')   q.push(j);\r\n            }   \r\n            curr_max = min(i+maxJump+1, n);\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:\r\n\t\t# dp[i] represents whether i is reachable\r\n        dp = [False for _ in s]\r\n        dp[0] = True\r\n\r\n        for i in range(1, len(s)):\r\n            if s[i] == \"1\":\r\n                continue\r\n\r\n\t\t\t# iterate through the solutions in range [i - maxJump, i - minJump]\r\n\t\t\t# and if any previous spot in range is reachable, then i is also reachable\r\n            window_start = max(0, i - maxJump)\r\n            window_end = i - minJump\r\n            for j in range(window_start, window_end + 1):\r\n                if dp[j]:\r\n                    dp[i] = True\r\n                    break\r\n        \r\n        return dp[-1]",
    "java": "class Solution {\r\n    public boolean canReach(String s, int minJump, int maxJump) {\r\n        if(s.charAt(s.length() - 1) != '0')\r\n            return false;\r\n        \r\n        Queue<Integer> queue = new LinkedList<>();\r\n        queue.add(0);\r\n        \r\n        // This variable tells us till which index we have processed\r\n        int maxReach = 0;\r\n        \r\n        while(!queue.isEmpty()){\r\n            int idx = queue.remove();\r\n            // If we reached the last index\r\n            if(idx == s.length() - 1)\r\n                return true;\r\n            \r\n            // start the loop from max of [current maximum (idx + minJump), maximum processed index (maxReach)]\r\n            for(int j = Math.max(idx + minJump, maxReach); j <= Math.min(idx + maxJump, s.length() - 1); j++){\r\n                if(s.charAt(j) == '0')\r\n                    queue.add(j);\r\n            }\r\n            \r\n            // since we have processed till idx + maxJump so update maxReach to next index\r\n            maxReach = Math.min(idx + maxJump + 1, s.length() - 1);\r\n        }\r\n        \r\n        return false;\r\n    }\r\n}",
    "javascript": "var canReach = function(s, minJump, maxJump) {\r\n    const validIdxs = [0];\r\n    for (let i = 0; i < s.length; i++) {\r\n        // skip if character is a 1 or if all the \r\n        // valid indicies are too close\r\n        if (s[i] === '1' || i - validIdxs[0] < minJump) {\r\n            continue;\r\n        }\r\n        \r\n        // remove all the indexes that are too far\r\n        while (validIdxs.length && i - validIdxs[0] > maxJump) {\r\n            validIdxs.shift();\r\n        }\r\n        if (validIdxs.length === 0) {\r\n            return false;\r\n        }\r\n        \r\n        validIdxs.push(i);\r\n        \r\n        // if we are at the last index\r\n        // return if we have an index within range\r\n        if (i === s.length - 1) {\r\n            return i - validIdxs[0] >= minJump;\r\n        }\r\n    }\r\n    // if the last character is a 1 we must return False\r\n    return false;\r\n};"
  }
}
