export default {
  "id": 2032,
  "name": "Two Out of Three",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/two-out-of-three",
  "relativeDir": "T/Two Out of Three",
  "slug": "2032-two-out-of-three",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 14,
    "python": 14,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> twoOutOfThree(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3) {\r\n        vector<int>f(110, 0);\r\n        for (int n : nums1) f[n] |= 1<<0;\r\n        for (int n : nums2) f[n] |= 1<<1;\r\n        for (int n : nums3) f[n] |= 1<<2;\r\n        \r\n        vector<int>ret;\r\n        for (int i = 1; i <= 100; i++) if (f[i] == 3 || f[i] >= 5) ret.push_back(i);\r\n        return ret;\r\n    }\r\n};",
    "python": "# Runtime: 65 ms (Top 93.8%) | Memory: 16.30 MB (Top 83.7%)\r\n\r\nclass Solution:\r\n    def twoOutOfThree(self, nums1: List[int], nums2: List[int], nums3: List[int]) -> List[int]:\r\n        output = []\r\n        for i in nums1:\r\n            if i in nums2 or i in nums3:\r\n                if i not in output:\r\n                    output.append(i)\r\n        for j in nums2:\r\n            if j in nums3 or j in nums1:\r\n                if j not in output:\r\n                    output.append(j)\r\n        return output",
    "java": "// Runtime: 2 ms (Top 97.56%) | Memory: 46.7 MB (Top 58.76%)\r\nclass Solution {\r\n    public List<Integer> twoOutOfThree(int[] nums1, int[] nums2, int[] nums3) {\r\n        int[] bits = new int[101];\r\n        for (int n : nums1) bits[n] |= 0b110;\r\n        for (int n : nums2) bits[n] |= 0b101;\r\n        for (int n : nums3) bits[n] |= 0b011;\r\n        List<Integer> result = new ArrayList();\r\n        for (int i = bits.length - 1; i > 0; i--)\r\n            if (bits[i] == 0b111)\r\n                result.add(i);\r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 79 ms (Top 11.11%) | Memory: 46.80 MB (Top 14.81%)\r\n\r\n// time O(n) Space O(n)\r\nvar twoOutOfThree = function(nums1, nums2, nums3) {\r\n    const array = [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)]\r\n    const map = {}\r\n    const result = []\r\n    \r\n    for(const number of array) {\r\n        if(map[number]) {\r\n            map[number] += 1\r\n        } else {\r\n            map[number] = 1\r\n        }\r\n    }\r\n    \r\n    for(const key in map) {\r\n        if(map[key] >= 2) {\r\n            result.push(key)\r\n        }\r\n    }\r\n    \r\n  return result  \r\n};"
  }
}
