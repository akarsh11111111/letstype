export default {
  "id": 1790,
  "name": "Check if One String Swap Can Make Strings Equal",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal",
  "relativeDir": "C/Check if One String Swap Can Make Strings Equal",
  "slug": "1790-check-if-one-string-swap-can-make-strings-equal",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 19,
    "python": 6
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.3 MB (Top 62.31%)\r\n/*\r\n    https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/\r\n\r\n    Find the number of positions which are different.\r\n    Now the strings can be made equal only if there are 0\r\n    different positions or 2 different positions and there are\r\n    chars on those positions which when swaped will make the\r\n    strings equal.\r\n    TC: O(N)\r\n    SC: O(1), At most 2 values are put in the diff_pos vector\r\n*/\r\n\r\nclass Solution {\r\npublic:\r\n    bool areAlmostEqual(string s1, string s2) {\r\n        // find the number of diff positions\r\n        vector<int> diff_pos;\r\n        for(int i = 0; i < s1.size(); i++) {\r\n            if(s1[i] != s2[i])\r\n                diff_pos.emplace_back(i);\r\n            // If there are more than 2 char positions that differ,\r\n            // the single swap op cannot anyway make the two strings equal\r\n            if(diff_pos.size() > 2)\r\n                return false;\r\n        }\r\n        // when the chars are exactly the same\r\n        if(diff_pos.empty())\r\n            return true;\r\n        // only one pair of diff positions, check if swapping makes them equal\r\n        if(diff_pos.size() == 2)\r\n            swap(s1[diff_pos[0]], s1[diff_pos[1]]);\r\n\r\n        return s1 == s2;\r\n    }\r\n};",
    "python": "# Runtime: 36 ms (Top 83.5%) | Memory: 16.25 MB (Top 70.5%)\r\n\r\nclass Solution:\r\n    def areAlmostEqual(self, s1: str, s2: str) -> bool:\r\n        diff = [[x, y] for x, y in zip(s1, s2) if x != y]\r\n        return not diff or len(diff) == 2 and diff[0][::-1] == diff[1]",
    "java": "class Solution {\r\n    public boolean areAlmostEqual(String s1, String s2) {\r\n     \r\n      int[] s1Array = new int[26];\r\n      int[] s2Array = new int[26];\r\n      int counter = 0;\r\n      for(int i = 0;i<s1.length();i++){\r\n         char s = s1.charAt(i);\r\n         char ss = s2.charAt(i);\r\n         if(s != ss)\r\n            counter++;\r\n         if(counter > 2)\r\n            return false;\r\n          s1Array[s -'a']++;\r\n         s2Array[ss -'a']++;\r\n      }\r\n      return Arrays.equals(s1Array, s2Array);\r\n    }\r\n}"
  }
}
