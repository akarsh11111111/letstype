export default {
  "id": 775,
  "name": "Global and Local Inversions",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/global-and-local-inversions",
  "relativeDir": "G/Global and Local Inversions",
  "slug": "0775-global-and-local-inversions",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 11,
    "python": 7
  },
  "languages": {
    "cpp": "/*\r\nApproach :-> Given nums are from 0 to n-1 so to make local and global count equal  it must have swapping \r\nbetween adjacent element in sorted array so for any element at index if it is either swapped with i or i+1 or i-1 this is\r\nonly condition when both are equal else it got swapped with j > i+1 or j<i-1 then global count become greater \r\nthan local count\r\n*/\r\nclass Solution {\r\npublic:\r\n    bool isIdealPermutation(vector<int>& nums) {\r\n        for(int i=0;i<nums.size();i++){\r\n            if(nums[i]==i || nums[i]==i-1 || nums[i]==i+1) continue;\r\n            else return false;\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "// Runtime: 620 ms (Top 99.42%) | Memory: 31.10 MB (Top 5.81%)\r\n\r\nclass Solution:\r\n    def isIdealPermutation(self, A: List[int]) -> bool:\r\n        for i in range(len(A)):\r\n            if i - A[i] > 1 or i - A[i] < -1: return False\r\n        return True",
    "java": "// Runtime: 4 ms (Top 34.63%) | Memory: 77.1 MB (Top 70.64%)\r\nclass Solution {\r\n    public boolean isIdealPermutation(int[] nums) {\r\n\r\n        for(int i=0;i<nums.length;i++){\r\n            if(Math.abs(nums[i]-i)>1) return false;\r\n        }\r\n\r\n        return true;\r\n    }\r\n}"
  }
}
