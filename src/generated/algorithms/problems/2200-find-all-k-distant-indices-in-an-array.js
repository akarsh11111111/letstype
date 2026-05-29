export default {
  "id": 2200,
  "name": "Find All K-Distant Indices in an Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-all-k-distant-indices-in-an-array",
  "relativeDir": "F/Find All K-Distant Indices in an Array",
  "slug": "2200-find-all-k-distant-indices-in-an-array",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "python": 16,
    "javascript": 29
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> findKDistantIndices(vector<int>& nums, int key, int k) {\r\n        \r\n        vector<int>v;\r\n        for(int i=0; i<nums.size(); i++)\r\n        {\r\n            for(int j= 0; j<nums.size(); j++)\r\n            {\r\n                if(abs(i-j) <= k && nums[j] == key)\r\n                {\r\n                    v.push_back(i);\r\n                    break;\r\n                }\r\n                \r\n            }\r\n        }\r\n        sort(v.begin(),v.end());\r\n        return v;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findKDistantIndices(self, nums: List[int], key: int, k: int) -> List[int]:\r\n        lis=deque([])\r\n        prev_popped=-1\r\n        for i in range(len(nums)):\r\n            if(nums[i]==key):\r\n                lis.append(i)\r\n        ans=[]\r\n        for i in range(len(nums)):\r\n            if(len(lis)>0 and lis[0]<i):\r\n                prev_popped = lis.popleft()\r\n            if(prev_popped!=-1 and (i-prev_popped) <=k):\r\n                ans.append(i)\r\n            elif(len(lis)>0 and (lis[0]-i)<=k):\r\n                ans.append(i)\r\n        return ans",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @param {number} key\r\n * @param {number} k\r\n * @return {number[]}\r\n */\r\nvar findKDistantIndices = function(nums, key, k) {\r\n    \r\n    let ind = [];\r\n    let ans = [];\r\n    \r\n    nums.forEach((val, i) => {\r\n       if (val == key) {\r\n           ind.push(i);\r\n       } \r\n    });\r\n    \r\n    let temp = new Set();\r\n    for (let i = 0; i < ind.length; i++) {\r\n        let mn = Math.max(ind[i]-k, 0);\r\n        let mx = Math.min(Math.abs(ind[i]+k), nums.length-1);\r\n    \r\n        for (let j = mn; j <= mx; j++) {\r\n            temp.add(j);\r\n        } \r\n    }\r\n    \r\n    return [...temp];\r\n};"
  }
}
