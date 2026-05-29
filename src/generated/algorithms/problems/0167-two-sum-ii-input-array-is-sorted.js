export default {
  "id": 167,
  "name": "Two Sum II - Input Array Is Sorted",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted",
  "relativeDir": "T/Two Sum II - Input Array Is Sorted",
  "slug": "0167-two-sum-ii-input-array-is-sorted",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "python": 14,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> twoSum(vector<int>& numbers, int target) {\r\n        int low = 0;\r\n        int high = numbers.size()-1; \r\n        vector<int> ans;\r\n        while(low<=high)\r\n        {\r\n            int sum =numbers[low] + numbers[high] ; \r\n            \r\n            if(sum == target)    \r\n                return vector<int>{ low+1, high+1};\r\n            \r\n            else if(sum>target)\r\n                high=high-1;\r\n            \r\n            else\r\n                low=low+1;\r\n        }\r\n         return vector<int>{ };;\r\n    }\r\n    \r\n};",
    "python": "class Solution:\r\n    def twoSum(self, numbers: List[int], target: int) -> List[int]:\r\n        s=0\r\n        e=len(numbers)-1\r\n        while s<e:\r\n            sumi = numbers[s]+numbers[e]\r\n            if(sumi==target):\r\n                return [s+1, e+1]\r\n                \r\n            elif(sumi<target):\r\n                s+=1\r\n            \r\n            else:\r\n                e-=1",
    "javascript": "var twoSum = function(numbers, target) {\r\n    let store = {}\r\n    for(let i=0;i<numbers.length;i++){\r\n        if(store[numbers[i]]!==undefined){\r\n            return [store[numbers[i]],i+1]\r\n        }else{\r\n            store[target-numbers[i]] = i+1\r\n        }\r\n    }\r\n};"
  }
}
