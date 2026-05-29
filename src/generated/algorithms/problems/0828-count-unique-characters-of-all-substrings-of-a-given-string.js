export default {
  "id": 828,
  "name": "Count Unique Characters of All Substrings of a Given String",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string",
  "relativeDir": "C/Count Unique Characters of All Substrings of a Given String",
  "slug": "0828-count-unique-characters-of-all-substrings-of-a-given-string",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "python": 56,
    "javascript": 31
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int uniqueLetterString(string s) {\r\n        vector<vector<int>> counting(26);\r\n        int ans = 0;\r\n        \r\n        // step 1: record the position for each char;\r\n        for(int curr = 0; curr < 26; curr++){\r\n            counting[curr].push_back(-1);\r\n        }\r\n        \r\n        for(int curr = 0; curr < s.size(); curr++){\r\n            counting[s[curr] - 'A'].push_back(curr);\r\n        }\r\n        \r\n        for(int curr = 0; curr < 26; curr++){\r\n            counting[curr].push_back(s.size());\r\n        }\r\n        \r\n        // step 2: for each char in s, find the # of contrubution for substring;\r\n        for(int curr = 0; curr < 26; curr++){\r\n            for(int pos = 1; pos < counting[curr].size() - 1; pos++){\r\n                ans += (counting[curr][pos] - counting[curr][pos - 1]) * (counting[curr][pos + 1] - counting[curr][pos]);\r\n            }\r\n        }\r\n        \r\n        return ans;     \r\n    }\r\n};",
    "python": "class Solution:\r\n    def uniqueLetterString(self, s: str) -> int:\r\n        ans = 0\r\n        idx_recorder = collections.defaultdict(list)\r\n        n = len(s)\r\n        \r\n        # record the index for every character\r\n        # s = \"ABCA\"\r\n        # {\r\n        #     \"A\": [0, 3],\r\n        #     \"B\": [1],\r\n        #     \"C\": [2],\r\n        # }\r\n        for idx in range(len(s)):\r\n            c = s[idx]\r\n            idx_recorder[c].append(idx)\r\n        \r\n        \r\n        def helper(idxes):\r\n            ans = 0\r\n\r\n            for i in range(len(idxes)):\r\n                # Count the number of substring which contain the character without duplicating\r\n                # get the left, right value to compute the result.\r\n                # \r\n                # Take the middle A (idx=3) as example\r\n                # s = 'AxxAxxxAxx'\r\n                #         -\r\n                # left = 3 - 0 = 3 \r\n                # right = 7 - 3 = 4\r\n                #\r\n                # The number of substring which contain this A (idx=3) without containing\r\n                # other A is 3 * 4 = 12\r\n                \r\n                if i == 0:\r\n                    # If it is a first one: it means that there is\r\n                    # no duplicate character in left\r\n                    left = idxes[i] + 1\r\n                else:\r\n                    left = idxes[i] - idxes[i-1]\r\n                \r\n                if i == len(idxes) - 1:\r\n                    # If it is a last one: it means that there is\r\n                    # no duplicate character in right side\r\n                    right = n - idxes[i]\r\n                else:\r\n                    right = idxes[i+1] - idxes[i]\r\n                \r\n                ans += left * right\r\n                \r\n            return ans\r\n        \r\n        ans = 0\r\n        for c in idx_recorder:\r\n            ans += helper(idx_recorder[c])\r\n        return ans",
    "javascript": "var uniqueLetterString = function(s) {\r\n  \r\n  // Returns the number of unique characters inside the window [left, right]\r\n  const countUniqueCharacters = (left, right) => {\r\n    const counts = new Map();\r\n    for (let i = left; i < right; i += 1) {\r\n      counts.set(s[i], (counts.get(s[i]) || 0) + 1);\r\n    }\r\n    return Array.from(counts.values()).filter((x) => x === 1).length;\r\n  }; \r\n  \r\n  let sum = 0;\r\n  const seen = new Set();\r\n  const substring = (left, right) => {\r\n    \r\n    if (seen.has(`${left}, ${right}`)) return;\r\n    if (right - left <= 0) return;\r\n    \r\n    seen.add(`${left}, ${right}`);\r\n    \r\n    sum += countUniqueCharacters(left, right);\r\n    \r\n    for (let i = left; i < right; i += 1) {\r\n      substring(left + 1, right);\r\n      substring(left, right - 1);\r\n    }\r\n  };\r\n  \r\n  substring(0, s.length);\r\n  return sum;\r\n};"
  }
}
