export default {
  "id": 893,
  "name": "Groups of Special-Equivalent Strings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/groups-of-special-equivalent-strings",
  "relativeDir": "G/Groups of Special-Equivalent Strings",
  "slug": "0893-groups-of-special-equivalent-strings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 69,
    "python": 3,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 15 ms (Top 43.19%) | Memory: 10.3 MB (Top 18.60%)\r\nclass Solution {\r\npublic:\r\n    int numSpecialEquivGroups(vector<string>& words) {\r\n        int n = words.size();\r\n        vector<pair<string, string>>v;\r\n        for(auto it:words) {\r\n            string even = \"\";\r\n            string odd = \"\";\r\n            for(int i = 0;i<it.size();i+=2) even+=it[i];\r\n            for(int i = 1;i<it.size();i+=2) odd+=it[i];\r\n            sort(even.begin(), even.end());\r\n            sort(odd.begin(), odd.end());\r\n            even+=odd;\r\n            v.push_back({it, even});\r\n\r\n        }\r\n\r\n        map<string, int>m;\r\n        for(auto it:v) {\r\n            m[it.second]++;\r\n        }\r\n\r\n        return m.size();\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numSpecialEquivGroups(self, words) -> int:\r\n        return len(set([(''.join(sorted(i[::2])),''.join(sorted(i[1::2]))) for i in words]))",
    "java": "// Runtime: 698 ms (Top 5.47%) | Memory: 145 MB (Top 5.47%)\r\n\r\nclass Solution {\r\n    public int numSpecialEquivGroups(String[] words) {\r\n        if(words.length == 0 || words.length == 1) return words.length;\r\n\r\n        // To store group sizes\r\n        HashMap<String, Integer> hashmap = new HashMap<>();\r\n\r\n        // To mark the strings already part of some groups\r\n        boolean[] isGrouped = new boolean[words.length];\r\n\r\n        for(int index = 0; index < words.length; index++) {\r\n            if(isGrouped[index]) continue; // Already grouped\r\n            String word = words[index];\r\n            for(int j = index + 1; j < words.length; j++) {\r\n                if(isGrouped[j]) continue; // Already grouped\r\n                String string = words[j];\r\n\r\n                // The idea is to store count of characters on even and odd indices\r\n                // It is done by incrementing counts of characters in both even and odd maps respectively\r\n                // Then compare the two strings by reducing the same count in both even and odd maps\r\n                // If both the maps are empty at last, the two strings for a group\r\n                HashMap<Character, Integer> evens = new HashMap<>();\r\n                HashMap<Character, Integer> odds = new HashMap<>();\r\n                boolean isSpecialEquivalent = true;\r\n\r\n                for(int i = 0; i < word.length(); i++) {\r\n                    if(i % 2 == 0) {\r\n                        evens.put(word.charAt(i), evens.getOrDefault(word.charAt(i), 0) + 1);\r\n                    } else {\r\n                        odds.put(word.charAt(i), odds.getOrDefault(word.charAt(i), 0) + 1);\r\n                    }\r\n                }\r\n\r\n                for(int i = 0; i < string.length(); i++) {\r\n                    char character = string.charAt(i);\r\n                    if(i % 2 == 0) {\r\n                        if(!evens.containsKey(character)) {\r\n                            isSpecialEquivalent = false;\r\n                            break;\r\n                        }\r\n\r\n                        evens.put(character, evens.get(character) - 1);\r\n                        if(evens.get(character) == 0) evens.remove(character);\r\n                    } else {\r\n                        if(!odds.containsKey(character)) {\r\n                            isSpecialEquivalent = false;\r\n                            break;\r\n                        }\r\n\r\n                        odds.put(character, odds.get(character) - 1);\r\n                        if(odds.get(character) == 0) odds.remove(character);\r\n                    }\r\n                }\r\n\r\n                if(isSpecialEquivalent) {\r\n                    hashmap.put(word, hashmap.getOrDefault(word, 0) + 1);\r\n                    isGrouped[j] = true;\r\n                }\r\n            }\r\n\r\n            // If no group is formed, the word alone forms a group of size 1\r\n            if(!hashmap.containsKey(word)) hashmap.put(word, 1);\r\n        }\r\n\r\n        return hashmap.size();\r\n    }\r\n}",
    "javascript": "// Runtime: 135 ms (Top 21.74%) | Memory: 46.8 MB (Top 86.96%)\r\nvar numSpecialEquivGroups = function(words) {\r\n    const set = new Set()\r\n    const a = 'a'.charCodeAt(0)\r\n    const alphaCounter = new Array(26).fill(0)\r\n    for (const word of words) {\r\n        const [even, odd] = [[...alphaCounter], [...alphaCounter]]\r\n        word.split('').forEach((l,i) => {\r\n            l = l.charCodeAt(0) - a\r\n            if (i%2) odd[l]++\r\n            else even[l]++\r\n        })\r\n        const hashkey = even.join('') + odd.join('')\r\n        set.add(hashkey)\r\n    }\r\n    return set.size\r\n};"
  }
}
