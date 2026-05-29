export default {
  "id": 1636,
  "name": "Sort Array by Increasing Frequency",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sort-array-by-increasing-frequency",
  "relativeDir": "S/Sort Array by Increasing Frequency",
  "slug": "1636-sort-array-by-increasing-frequency",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "python": 13,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 14 ms (Top 50.42%) | Memory: 11.5 MB (Top 16.59%)\r\nclass Solution {\r\npublic:\r\n    vector<int> frequencySort(vector<int>& nums) {\r\n        map<int,int> mp;\r\n        for(int i=0;i<nums.size();i++){\r\n            mp[nums[i]]++;\r\n        }\r\n        priority_queue<pair<int,int>> pq;\r\n        for(auto it : mp){\r\n            pq.push({-it.second,it.first});\r\n        }\r\n        vector<int> result;\r\n        while(!pq.empty()){\r\n            int x = pq.top().first;\r\n            for(int i=0;i<abs(x);i++){\r\n                result.push_back(pq.top().second);\r\n            }\r\n            pq.pop();\r\n        }\r\n        return result;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def frequencySort(self, nums: List[int]) -> List[int]:\r\n        \r\n        r = Counter(nums).most_common()\r\n        r.sort(key = lambda x: x[0], reverse=True)\r\n        r.sort(key = lambda x: x[1])\r\n        \r\n        t = []\r\n        for i in r:\r\n            a, b = i\r\n            t.extend([a]*b)\r\n            \r\n        return t",
    "javascript": "// Runtime: 84 ms (Top 90.67%) | Memory: 44.9 MB (Top 27.33%)\r\nvar frequencySort = function(nums) {\r\n  const map = new Map()\r\n  for(let n of nums){\r\n    map.set(n, (map.get(n) || 0)+1)\r\n  }\r\n  return nums.sort((a,b)=>{\r\n    if(map.get(a) === map.get(b)){\r\n      return b-a\r\n    }else{\r\n      return map.get(a) - map.get(b)\r\n    }\r\n  })\r\n};"
  }
}
