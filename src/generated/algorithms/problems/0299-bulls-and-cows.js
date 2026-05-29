export default {
  "id": 299,
  "name": "Bulls and Cows",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/bulls-and-cows",
  "relativeDir": "B/Bulls and Cows",
  "slug": "0299-bulls-and-cows",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 29,
    "python": 34,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution\r\n{\r\npublic:\r\n    string getHint(string secret, string guess)\r\n    {\r\n        int bulls = 0;\r\n        vector<int> v1(10, 0);\r\n        vector<int> v2(10, 0);\r\n        for (int i = 0; i < secret.size(); ++i)\r\n        {\r\n            if (secret[i] == guess[i])\r\n            {\r\n                ++bulls;\r\n            }\r\n            else\r\n            {\r\n                ++v1[secret[i] - '0'];\r\n                ++v2[guess[i] - '0'];\r\n            }\r\n        }\r\n        int cows = 0;\r\n        for (int i = 0; i < 10; ++i)\r\n        {\r\n            cows += min(v1[i], v2[i]);\r\n        }\r\n        return to_string(bulls) + \"A\" + to_string(cows) + \"B\";\r\n    }\r\n};",
    "python": "class Solution:\r\n    def getHint(self, secret: str, guess: str) -> str:\r\n        \r\n        # Setup counts for bulls and cows\r\n        bulls = cows = 0\r\n        \r\n        # Copy secret and guess into lists that are easier to work with\r\n        secretCopy = list(secret)\r\n        guessCopy = list(guess)\r\n        \r\n        # In a for loop, check every pair of letters at the same index in both guess and secret for matching letters, AKA bulls\r\n        for i in range(len(secret)):\r\n            \r\n            # If they match, bulls += 1 and pop() the letters from the copy lists via their .index()\r\n            if secret[i] == guess[i]:\r\n                bulls += 1\r\n                secretCopy.pop(secretCopy.index(secret[i]))\r\n                guessCopy.pop(guessCopy.index(guess[i]))\r\n                \r\n                \r\n        # Count() the letters remaining in secret and guess lists\r\n        secretCounter = Counter(secretCopy)\r\n        guessCounter = Counter(guessCopy)\r\n        \r\n        # Counter1 - Counter2 gives us Counter1 with any matching values of Counter1 and Counter2 removed; leftover Counter2 values are trashed\r\n        # secretCounter - guessCounter gives us the secretCounter except for any correctly guessed letters\r\n        # Therefore, subtract this difference from the OG secretCounter to be left with a counter of only correctly guessed letters\r\n        dif = secretCounter - (secretCounter - guessCounter)\r\n        \r\n        # The .total() of the dif Counter is the number of cows\r\n        cows = dif.total()\r\n\r\n        # return the formatted string with req. info\r\n        return f'{bulls}A{cows}B'",
    "java": "// Runtime: 5 ms (Top 87.58%) | Memory: 41.90 MB (Top 54.72%)\r\n\r\nclass Solution {\r\n    public String getHint(String secret, String guess) {\r\n        int bulls = 0, cows = 0;\r\n\r\n        int[] secretFreq = new int[10],\r\n        guessFreq = new int[10];\r\n\r\n        for (int i = 0; i < secret.length(); i++) {\r\n            char s = secret.charAt(i);\r\n            char g = guess.charAt(i);\r\n\r\n            if (s == g) bulls++;\r\n            else {\r\n                secretFreq[s - '0']++;\r\n                guessFreq[g - '0']++;\r\n            }\r\n        }\r\n\r\n        for (int i = 0; i < 10; i++) {\r\n            cows += Math.min(secretFreq[i], guessFreq[i]);\r\n        }\r\n\r\n        return bulls + \"A\" + cows + \"B\";\r\n    }\r\n}\r\n\r\n// TC: O(n), SC: O(1)",
    "javascript": "// Runtime: 149 ms (Top 11.68%) | Memory: 44.9 MB (Top 52.42%)\r\nvar getHint = function(secret, guess) {\r\n    let ACount = 0, BCount = 0;\r\n    const secretMap = new Map(), guessMap = new Map();\r\n    for(let i = 0; i < secret.length; i++) {\r\n        if(secret[i] == guess[i]) {\r\n            ACount++;\r\n        }\r\n        else {\r\n            if(secretMap.has(secret[i])) {\r\n                secretMap.set(secret[i], secretMap.get(secret[i])+1);\r\n            }\r\n            else {\r\n                secretMap.set(secret[i], 1);\r\n            }\r\n        }\r\n    }\r\n    for(let i = 0; i < guess.length; i++) {\r\n        if(secret[i] !== guess[i]) {\r\n            if(secretMap.get(guess[i]) > 0) {\r\n                secretMap.set(guess[i], secretMap.get(guess[i])-1);\r\n                BCount++;\r\n            }\r\n        }\r\n    }\r\n    return ACount+'A'+BCount+'B';\r\n};"
  }
}
