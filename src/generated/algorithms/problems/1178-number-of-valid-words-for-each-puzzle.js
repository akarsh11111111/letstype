export default {
  "id": 1178,
  "name": "Number of Valid Words for Each Puzzle",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-valid-words-for-each-puzzle",
  "relativeDir": "N/Number of Valid Words for Each Puzzle",
  "slug": "1178-number-of-valid-words-for-each-puzzle",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 40,
    "python": 24,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 392 ms (Top 85.55%) | Memory: 69 MB (Top 97.11%)\r\nclass Solution {\r\npublic:\r\n    vector<int> findNumOfValidWords(vector<string>& words, vector<string>& puzzles) {\r\n        unordered_map<int, int> maskCnt;\r\n        for(const auto& w: words) ++maskCnt[bitmask(w)];\r\n        vector<int> ans(puzzles.size(), 0);\r\n        for(int i = 0; i < puzzles.size(); i++){\r\n            int mask, subMask = mask = bitmask(puzzles[i]), first = bitmask(puzzles[i].substr(0,1));\r\n            do{\r\n                if( (first & subMask) == first && maskCnt.count(subMask)) ans[i] += maskCnt[subMask]; //ok\r\n            }while(subMask = (subMask - 1) & mask);\r\n        }\r\n        return ans;\r\n    }\r\n\r\nprivate:\r\n    int bitmask(const string& word, int mask = 0){\r\n        for(auto c: word) mask |= (1 << (c - 'a'));\r\n        return mask;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findNumOfValidWords(self, words: List[str], puzzles: List[str]) -> List[int]:\r\n        look_up=collections.defaultdict(int)\r\n        def get_mask(word):\r\n            mask=0\r\n            for c in word:\r\n                mask |= 1<<(ord(c)-ord('a'))\r\n            return mask\r\n        for word in words:\r\n            mask=get_mask(word)\r\n            look_up[mask]+=1\r\n        ans=[]\r\n        def solve(puzzle_idx,mask,c_idx):\r\n            if c_idx==len(puzzles[puzzle_idx]):\r\n                ans[-1]+=look_up[mask]\r\n                return\r\n            #take this c_idx\r\n            solve(puzzle_idx,mask | 1<<(ord(puzzles[puzzle_idx][c_idx])-ord('a')),c_idx+1)\r\n            #dont take this c_idx\r\n            solve(puzzle_idx,mask,c_idx+1)\r\n        for i,puzzle in enumerate(puzzles):\r\n            ans.append(0)\r\n            solve(i,1<<(ord(puzzle[0])-ord('a')),1)\r\n        return ans",
    "java": "class Solution {\r\n\r\npublic List<Integer> findNumOfValidWords(String[] words, String[] puzzles) {\r\n    \r\n    Map<Integer, Integer> map = new HashMap<>();\r\n    \r\n    for(String w : words){\r\n        int mask = 0;\r\n        for(int i = 0; i < w.length(); i++){\r\n            mask |= 1 << (w.charAt(i) - 'a');\r\n        }\r\n        map.put(mask, map.getOrDefault(mask, 0) + 1);\r\n    }\r\n    \r\n    List<Integer> res = new ArrayList<>();\r\n    \r\n    for(String p : puzzles){\r\n        int mask = 0;\r\n        for(int i = 0; i < p.length(); i++){\r\n            mask |= 1 << (p.charAt(i) - 'a');\r\n        }\r\n        int c = 0;\r\n        int sub = mask;\r\n        int first = 1 << (p.charAt(0) - 'a');\r\n        while(true){\r\n            if((sub & first) == first && map.containsKey(sub)){\r\n                c += map.get(sub);\r\n            }\r\n            \r\n            if(sub == 0) break;\r\n            \r\n            sub = (sub - 1) & mask; // get the next substring\r\n        }\r\n        \r\n        res.add(c);\r\n    }\r\n    \r\n    return res;\r\n}\r\n}",
    "javascript": "var findNumOfValidWords = function(words, puzzles) {\r\n\t// Form map of word's bitmasks\r\n    const wordsMaskMap = words.reduce((map, word) => addToMap(map, getMask(word)), new Map())\r\n\r\n    return puzzles.map(puzzle => {\r\n        const pMask = getMask(puzzle)\r\n        const pFirstMask = getFirstMask(puzzle)\r\n        let count = 0\r\n        \r\n\t\t// Verify each bitmask against a given puzzle\r\n        for (let wMask of wordsMaskMap.keys()) {\r\n            if((wMask & pFirstMask) && (!((wMask | pMask) ^ pMask))) {\r\n                count += wordsMaskMap.get(wMask)\r\n            }\r\n        }\r\n        return count\r\n    })\r\n}\r\n\r\n// Transform a char into a bit index\r\nvar getBit = (char) => 1 << char.charCodeAt(0) - 'a'.charCodeAt(0)\r\n\r\n// Transform a word into a bitmask\r\nvar getMask = (word) => word.split('').reduce((acc, c) => acc | getBit(c), 0)\r\n\r\n// Get a bitmask for the first letter of a word\r\nvar getFirstMask = (word) => getBit(word[0])\r\n\r\n// Helper function to count hashes in a Map object \r\nvar addToMap = (map, val) => map.has(val) ? map.set(val, map.get(val) + 1) : map.set(val, 1)"
  }
}
