export default {
  "id": 1510,
  "name": "Stone Game IV",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/stone-game-iv",
  "relativeDir": "S/Stone Game IV",
  "slug": "1510-stone-game-iv",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 43,
    "python": 11,
    "javascript": 42
  },
  "languages": {
    "cpp": "// Runtime: 50 ms (Top 83.42%) | Memory: 7.9 MB (Top 52.59%)\r\nclass Solution {\r\npublic:\r\n    bool winnerSquareGame(int n) {\r\n\r\n        vector<int> dp(n+1,false);\r\n\r\n        for(int i=1;i<=n;i++){\r\n            for(int j=sqrt(i);j>=1;j--){\r\n                if(dp[i-j*j] == false){\r\n                    dp[i] = true;\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n\r\n        return dp[n];\r\n    }\r\n};",
    "python": "# Runtime: 189 ms (Top 93.6%) | Memory: 21.09 MB (Top 49.0%)\r\n\r\nclass Solution:\r\n    def winnerSquareGame(self, n: int) -> bool:\r\n        squares = lambda x: (i * i for i in range(isqrt(x), 0, -1))\r\n        \r\n        @cache\r\n        def can_win(n: int) -> bool:\r\n            return n and not all(can_win(n - s) for s in squares(n))\r\n        \r\n        return can_win(n)",
    "java": "// Runtime: 1188 ms (Top 5.04%) | Memory: 258.9 MB (Top 5.04%)\r\nclass Solution {\r\n    // idea: Alice wins a game with n stones if and only if there exists\r\n    // some perfect square p <= n such that Alice wins a game with\r\n    // n - p stones... i.e., Bob DOES NOT win a game with n - p stones\r\n    public boolean winnerSquareGame(int n) {\r\n        // this bit would be better with just an array of booleans, but this\r\n        // is how i thought of it at the time, so leaving it this way...\r\n        // maybe it will be \"more explicit\" and help someone better understand dp?\r\n        HashMap<Integer, Boolean> memo = new HashMap<>();\r\n        memo.put(1, true); // if there is one stone in the pile to begin the game, the next player to go wins\r\n        memo.put(0, false); // if there are zero stones in the pile to begin the game, the next player to go loses\r\n        List<Integer> perfectSquares = new ArrayList<>();\r\n        int i = 1;\r\n        while (i * i <= n) {\r\n            perfectSquares.add(i * i);\r\n            i++;\r\n        }\r\n        // if there are some perfect square number of stones in the pile to begin the game, the next player to go wins\r\n        perfectSquares.forEach(p -> memo.put(p, true));\r\n        // Alice goes first...\r\n        return this.playerWins(n, perfectSquares, memo);\r\n    }\r\n\r\n    private boolean playerWins(int n, List<Integer> P, HashMap<Integer, Boolean> m) {\r\n        if (m.containsKey(n)) { return m.get(n); } // if we already computed the answer for n, just return it\r\n        m.put(n, false); // otherwise, assume it's false to begin...\r\n        for (Integer p : P) { // check every perfect square p...\r\n            if (p <= n && !playerWins(n - p, P, m)) {\r\n                // if p <= n AND the player who goes next (e.g., Bob) does not win a game that begins with\r\n                // n - p stones, then we know that the player whose turn it is right now (e.g., Alice) wins\r\n                // a game that begins with n stones, so record this discovery in the memo and then break out\r\n                // of the loop because there's no more work to do...\r\n                m.put(n, true);\r\n                break;\r\n            } // else p >= n OR taking p stones would not result in a win for the player whose turn it is right now...\r\n        }\r\n        // we put false in before the loop; if we never found a reason to change it to true,\r\n        // then false is the correct result...\r\n        return m.get(n);\r\n    }\r\n\r\n}",
    "javascript": "// Runtime: 86 ms (Top 65.0%) | Memory: 44.60 MB (Top 65.0%)\r\n\r\n// DP problem\r\nvar winnerSquareGame = function(n) {\r\n\r\n//             //////////////////////////////////\r\n//     1. Define an array that Alice will win or loss (T/F)\r\n//             //////////////////////////////////\r\n\r\n    const res = new Array(n+1).fill(false);\r\n    let k = 1;\r\n    \r\n    for (let i = 1; i <= n; i++) {\r\n\r\n//             //////////////////////////////////\r\n//     2. if it is square number, obviously, Alice win\r\n//             //////////////////////////////////\r\n        \r\n        if (k*k === i) {\r\n            res[i] = true;\r\n            k++;\r\n            continue;\r\n        }\r\n\r\n//             //////////////////////////////////\r\n//     3. after Alice removes j*j (1 <= j < k) stones, find whether res[i-j*j] is T/F (= Bob win/loss)\r\n//        if j exists that res[i-j*j] = false, it means that Bob will lose the game with the remaining i-j*j stones => Alice wins\r\n//        otherwise, Alice lose \r\n//             //////////////////////////////////\r\n\r\n        let AliceWin = false;\r\n        for (let j = 1; j < k && j*j <= i; j++) {\r\n            if (!res[i-j*j]) {\r\n                AliceWin = true;\r\n                break;\r\n            }\r\n        }\r\n        res[i] = AliceWin;\r\n    }\r\n    \r\n    return res[n];\r\n};"
  }
}
