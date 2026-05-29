export default {
  "id": 1313,
  "name": "Decompress Run-Length Encoded List",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/decompress-run-length-encoded-list",
  "relativeDir": "D/Decompress Run-Length Encoded List",
  "slug": "1313-decompress-run-length-encoded-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 13,
    "python": 9,
    "javascript": 9
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tvector<int> decompressRLElist(vector<int>& nums) {\r\n\r\n\t\tvector<int> ans;\r\n\r\n\t\tfor(int i=0 ; i<nums.size() ; i+=2){\r\n\r\n\t\t\tint freq = nums[i];\r\n\t\t\tint val = nums[i+1];\r\n\r\n\t\t\twhile(freq--){\r\n\t\t\t\tans.push_back(val);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn ans;\r\n\t}\r\n};",
    "python": "class Solution:\r\n    def decompressRLElist(self, nums: List[int]) -> List[int]:\r\n        answer = []\r\n        \r\n        for i in range(0, len(nums), 2):\r\n            for j in range(0, nums[i]):\r\n                answer.append(nums[i + 1])\r\n        \r\n        return answer",
    "java": "class Solution {\r\n    public int[] decompressRLElist(int[] nums) {\r\n        ArrayList<Integer> arr = new ArrayList<>();\r\n        for (int i = 0; i+1 < nums.length; i += 2) {\r\n            for (int j = 0; j < nums[i]; ++j) {\r\n                arr.add(nums[i+1]);\r\n            }\r\n        }\r\n        int[] res = new int[arr.size()];\r\n        for (int i = 0; i < res.length; ++i) res[i] = arr.get(i);\r\n        return res;\r\n    }\r\n}",
    "javascript": "var decompressRLElist = function(nums) {\r\n    let solution  = [];\r\n    for(let i = 0;i<nums.length;i+=2){\r\n        for(let j = 0;j<nums[i];j++){\r\n            solution.push(nums[i+1])\r\n        }\r\n    }\r\n    return (solution)\r\n};"
  }
}
