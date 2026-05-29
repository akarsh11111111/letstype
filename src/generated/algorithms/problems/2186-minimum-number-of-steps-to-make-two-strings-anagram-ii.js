export default {
  "id": 2186,
  "name": "Minimum Number of Steps to Make Two Strings Anagram II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii",
  "relativeDir": "M/Minimum Number of Steps to Make Two Strings Anagram II",
  "slug": "2186-minimum-number-of-steps-to-make-two-strings-anagram-ii",
  "availableLanguages": [
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "java",
  "lineCounts": {
    "java": 15,
    "python": 22,
    "javascript": 11
  },
  "languages": {
    "python": "class Solution:\r\n    def minSteps(self, s: str, t: str) -> int:\r\n        sMap = dict()\r\n        tMap = dict()\r\n        \r\n        for character in s:\r\n            sMap[character] = sMap.get(character, 0) + 1\r\n        \r\n        for character in t:\r\n            tMap[character] = tMap.get(character, 0) + 1\r\n            \r\n        count = 0\r\n        \r\n        for key, value in sMap.items():\r\n            if value >= tMap.get(key, 0):\r\n                count += (value - tMap.get(key, 0))\r\n        \r\n        for key, value in tMap.items():\r\n            if value >= sMap.get(key, 0):\r\n                count += (value - sMap.get(key, 0))\r\n        \r\n        return count",
    "java": "// Runtime: 246 ms (Top 18.10%) | Memory: 118.1 MB (Top 5.07%)\r\nclass Solution {\r\n    public int minSteps(String s, String t) {\r\n        HashMap<Character,Integer> hmap = new HashMap<>();\r\n        for(char ch:s.toCharArray())\r\n            hmap.put(ch,hmap.getOrDefault(ch,0)+1);\r\n        for(char ch:t.toCharArray())\r\n            hmap.put(ch,hmap.getOrDefault(ch,0)-1);\r\n        int count=0;\r\n        for(char key:hmap.keySet())\r\n            if(hmap.get(key)!=0)\r\n                count+=(Math.abs(hmap.get(key)));\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 158 ms (Top 82.00%) | Memory: 53.8 MB (Top 52.00%)\r\nvar minSteps = function(s, t) {\r\n  let sFreq = Array(26).fill(0), tFreq = Array(26).fill(0);\r\n  for (let char of s) sFreq[char.charCodeAt() - 97]++;\r\n  for (let char of t) tFreq[char.charCodeAt() - 97]++;\r\n  let ans = 0;\r\n  for (let i = 0; i < 26; i++) {\r\n    ans += Math.abs(sFreq[i] - tFreq[i]);\r\n  }\r\n  return ans;\r\n};"
  }
}
