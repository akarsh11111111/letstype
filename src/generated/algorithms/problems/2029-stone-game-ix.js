export default {
  "id": 2029,
  "name": "Stone Game IX",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/stone-game-ix",
  "relativeDir": "S/Stone Game IX",
  "slug": "2029-stone-game-ix",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 45,
    "java": 50,
    "python": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n  int helper(unsigned long s, unsigned long n0, unsigned long n1, unsigned long n2, int turn){\r\n    if(n0 == 0 && n1 == 0 && n2 == 0) return 1;\r\n    \r\n    int next_turn = 1^turn;\r\n    int tmp = next_turn;\r\n    \r\n    if(s == 0){\r\n      if(n1 || n2){\r\n        if(n1)                tmp = helper(1, n0, n1-1, n2, next_turn);\r\n        if(tmp != turn && n2) tmp = helper(2, n0, n1, n2-1, next_turn);\r\n      }\r\n    }\r\n    else if(s == 1){\r\n      if(n0 || n1){\r\n        if(n0)                tmp = helper(1, n0-1, n1, n2, next_turn);\r\n        if(tmp != turn && n1) tmp = helper(2, n0, n1-1, n2, next_turn);\r\n      }\r\n    }\r\n    else{\r\n      if(n0 || n2){\r\n        if(n0)                tmp = helper(2, n0-1, n1, n2, next_turn);\r\n        if(tmp != turn && n2) tmp = helper(1, n0, n1, n2-1, next_turn);\r\n      }\r\n    }\r\n    \r\n    return tmp;\r\n  }\r\n  \r\n  \r\n  bool stoneGameIX(vector<int>& stones) {\r\n    int n0 = 0, n1 = 0, n2 = 0;\r\n    \r\n    for(auto &x: stones){\r\n      int tmp = x % 3;\r\n      if(tmp == 0) n0++;\r\n      else if(tmp == 1) n1++;\r\n    }\r\n   \r\n    n2 = stones.size() - n0 - n1;\r\n    n0 = n0%2;                                      //without this small line we will have TLE and whan I wrote contest I don't consider it =(\r\n    return helper(0, n0, n1, n2, 0) == 0;\r\n  }\r\n};",
    "python": "# Runtime: 2982 ms (Top 22.53%) | Memory: 27.5 MB (Top 95.77%)\r\nclass Solution:\r\n    def stoneGameIX(self, stones: List[int]) -> bool:\r\n        u, d, t = 0, 0, 0\r\n        for stone in stones:\r\n            if stone % 3 == 1:\r\n                u += 1\r\n            elif stone % 3 == 2:\r\n                d += 1\r\n            else:\r\n                t += 1\r\n        if not u and d <= 2 or u <= 2 and not d: #situation 1 part 2\r\n            return False\r\n        if not u and d > 2 or u > 2 and not d: #situation 1 part 1\r\n            if not t % 2:\r\n                return False\r\n            else:\r\n                return True\r\n        if u == d or abs(u - d) <= 2: #situation 2 and situation 3\r\n            if t % 2:\r\n                return False\r\n            else:\r\n                return True\r\n        return True #default situation",
    "java": "class Solution {\r\n    public boolean stoneGameIX(int[] stones) {\r\n        Map<Integer, Integer> div3 = new HashMap<>();\r\n        div3.put(0, 0);\r\n        div3.put(1, 0);\r\n        div3.put(2, 0);\r\n        \r\n        for(int stone : stones){\r\n            div3.put(stone%3, div3.get(stone%3)+1);\r\n        }\r\n\t\t// the count of 3's don't matter, only whether it is even or odd\r\n        div3.put(0, div3.get(0)%2);\r\n        \r\n        \r\n        if(div3.get(1) == 0 && div3.get(2) == 0){\r\n            return false;\r\n        }\r\n        \r\n        int smaller = Math.min(div3.get(1), div3.get(2));\r\n        int larger = Math.max(div3.get(2), div3.get(1));\r\n\t\t// the combinations of 1's and 2's will work with each other in a complementary way. \r\n\t\t// A pair of 1 and 2 makes modulo 3 to be 0\r\n\t\t// Three counts of 1 or 2 makes modulo 3 to be 0\r\n\t\t// so, we need only relative counts\r\n        \r\n        // if there are even 3's, then bob can't reverse alice's win\r\n        // so, if all three digits chosen are the same then bob wins, but if there is another option then alice wins\r\n        // [1,2,2,2] -> alice picks 1 and wins\r\n        // [1,3,3,2] -> alice picks 1 or two and wins\r\n        // [2,2,2] -> alice has to pick the third 2 and loses\r\n\r\n        if(div3.get(0) == 0){\r\n            return smaller != 0;\r\n        }\r\n        \r\n        // all cases now have odd number of 3's, so result can be reversed\r\n        \r\n        // [1,1,1,1,3] -> 1,1,3,1 picked or 1,3,1,1 picked means alice wins\r\n        // similar for 2 because the other number doesn't exist to make a %3 pair\r\n        \r\n        // if the difference of number counts is more than 2 then alice can always force bob\r\n        // [3,1,2,2,2] -> \r\n\t\t// [3,1,2,2,2,2] ->\r\n        if(larger > smaller + 2){\r\n            return true;\r\n        }\r\n        \r\n        return false;\r\n    }\r\n}"
  }
}
