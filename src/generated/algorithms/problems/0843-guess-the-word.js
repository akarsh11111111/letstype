export default {
  "id": 843,
  "name": "Guess the Word",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/guess-the-word",
  "relativeDir": "G/Guess the Word",
  "slug": "0843-guess-the-word",
  "availableLanguages": [
    "python"
  ],
  "defaultLanguage": "python",
  "lineCounts": {
    "python": 34
  },
  "languages": {
    "python": "class Solution:\r\n    def findSecretWord(self, words: List[str], master: 'Master') -> None:        \r\n        k = 1 # for tracing the number of loops\r\n        matches = 0\r\n        blacklists = [[] for i in range(6)]\r\n        \r\n        while matches != 6:\r\n            n = len(words)\r\n            r = random.randint(0, n - 1)\r\n            matches = master.guess(words[r])\r\n            key = words[r]\r\n            # print(k, n, r, matches, key)\r\n            \r\n            words.pop(r)\r\n            \r\n            if matches == 0:\r\n                for i in range(6):\r\n                    blacklists[i].append(key[i])\r\n                # print(blacklists)\r\n            \r\n            elif matches > 0 and matches < 6:\r\n                candidates = []\r\n                for i in range(n - 1):\r\n                    count = 0\r\n                    for j in range(6):\r\n                        if words[i][j] not in blacklists[j] and words[i][j] == key[j]:\r\n                            count += 1\r\n                    if count >= matches:\r\n                        candidates.append(words[i])\r\n                            \r\n                words = candidates.copy()\r\n                # print(words)\r\n            \r\n            k += 1"
  }
}
