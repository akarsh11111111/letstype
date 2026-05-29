export default {
  "id": 2212,
  "name": "Maximum Points in an Archery Competition",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-points-in-an-archery-competition",
  "relativeDir": "M/Maximum Points in an Archery Competition",
  "slug": "2212-maximum-points-in-an-archery-competition",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 41,
    "java": 30,
    "python": 33,
    "javascript": 25
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxscore; \r\n    vector<int> ans;\r\n    \r\n    void helper(vector<int> &bob, int i, vector<int>& alice, int remarrows, int score)\r\n    {\r\n        if(i == -1  or  remarrows <= 0)\r\n        {\r\n            if(score >= maxscore)\r\n            {\r\n                maxscore = score; \r\n                ans = bob; \r\n            }\r\n            return; \r\n        }\r\n        \r\n        helper(bob, i-1, alice, remarrows, score);\r\n        if(remarrows > alice[i])\r\n        {\r\n            bob[i] = alice[i] + 1;\r\n            remarrows -= (alice[i] + 1);\r\n            score += i; \r\n            helper(bob, i-1, alice, remarrows, score);\r\n            bob[i] = 0;\r\n        } \r\n    }\r\n    \r\n    vector<int> maximumBobPoints(int numArrows, vector<int>& aliceArrows) {\r\n        vector<int> bob(12, 0);\r\n        maxscore = INT_MIN; \r\n        helper(bob, 11, aliceArrows, numArrows, 0);\r\n        \r\n        int arrows_used = 0; \r\n        for(int a : ans)\r\n            arrows_used += a; \r\n        if(arrows_used < numArrows)\r\n            ans[0] += (numArrows - arrows_used);\r\n        return ans; \r\n    }\r\n};",
    "python": "// Runtime: 114 ms (Top 97.78%) | Memory: 16.60 MB (Top 73.33%)\r\n\r\nclass Solution:\r\n    def maximumBobPoints(self, numArrows: int, aliceArrows: List[int]) -> List[int]:\r\n        max_score = [0, None]\r\n        def calc(i, remaining, score, arrows):\r\n\t\t    # Base case. Update max score.\r\n            if remaining == 0 or i == -1:\r\n                if score > max_score[0]:\r\n                    max_score[0] = score\r\n                    max_score[1] = arrows[:]\r\n                return\r\n\r\n\t\t\t# Special handling for the last section. Use up all the arrows.\r\n            if i == 0:\r\n                arrows[i] = remaining\r\n                calc(i - 1, 0, score + i, arrows)\r\n                arrows[i] = 0\r\n                return\r\n\r\n\t\t    # Try to compete with Alice if there are enough arrows.\r\n            arrowsNeeded = aliceArrows[i] + 1\r\n            if remaining >= arrowsNeeded:\r\n                arrows[i] = arrowsNeeded\r\n                calc(i - 1, remaining - arrowsNeeded, score + i, arrows)\r\n                arrows[i] = 0\r\n\r\n            # Skip this section and go to the next section.\r\n            calc(i - 1, remaining, score, arrows)\r\n        \r\n\t\t# Kick off the recursion\r\n        calc(len(aliceArrows) - 1, numArrows, 0, [0 for _ in aliceArrows])\r\n        return max_score[1]",
    "java": "// Runtime: 5 ms (Top 88.89%) | Memory: 40.7 MB (Top 100.00%)\r\n   class Solution {\r\n        int bobPoint = 0;\r\n        int[] maxbob = new int[12];\r\n        public int[] maximumBobPoints(int numArrows, int[] aliceArrows) {\r\n            int[] bob = new int[12];\r\n            calculate(aliceArrows, bob, 11, numArrows, 0); //Start with max point that is 11\r\n            return maxbob;\r\n        }\r\n        public void calculate(int[] alice, int[] bob, int index, int remainArr, int point) {\r\n            if(index < 0 || remainArr <= 0) {\r\n                if(remainArr > 0)\r\n                    bob[0] += remainArr;\r\n                if(point > bobPoint) { // Update the max points and result output\r\n                    bobPoint = point;\r\n                    maxbob = bob.clone();\r\n                }\r\n                return;\r\n            }\r\n            //part 1: assign 1 more arrow than alice\r\n            if(remainArr >= alice[index]+1) {\r\n                bob[index] = alice[index] + 1;\r\n                calculate(alice, bob, index-1, remainArr-(alice[index]+1), point + index);\r\n                bob[index] = 0;\r\n            }\r\n            //part 2: assign no arrow and move to next point\r\n            calculate(alice, bob, index-1, remainArr, point);\r\n            bob[index] = 0;\r\n        }\r\n    }",
    "javascript": "var maximumBobPoints = function(numArrows, aliceArrows) {\r\n  let max = 0, n = aliceArrows.length, res;\r\n  backtrack(numArrows, 0, 0, Array(n).fill(0));\r\n  return res;\r\n\r\n  function backtrack(arrows, idx, points, bobArrows) {\r\n    if (idx === n || arrows === 0) {\r\n      let origVal = bobArrows[n - 1];\r\n      if (arrows > 0) bobArrows[n - 1] += arrows; // put extra arrows in any slot\r\n      if (points > max) {\r\n        max = points;\r\n        res = [...bobArrows]; \r\n      }\r\n      bobArrows[n - 1] = origVal;\r\n      return;\r\n    }\r\n\r\n    backtrack(arrows, idx + 1, points, bobArrows); // don't use any arrows\r\n    if (aliceArrows[idx] + 1 <= arrows) { // use aliceArrows[idx] + 1 arrows to gain idx points\r\n      bobArrows[idx] = aliceArrows[idx] + 1;\r\n      backtrack(arrows - (aliceArrows[idx] + 1), idx + 1, points + idx, bobArrows);\r\n      bobArrows[idx] = 0;\r\n    }\r\n  }  \r\n};"
  }
}
