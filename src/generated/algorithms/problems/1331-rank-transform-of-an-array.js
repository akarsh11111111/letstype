export default {
  "id": 1331,
  "name": "Rank Transform of an Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/rank-transform-of-an-array",
  "relativeDir": "R/Rank Transform of an Array",
  "slug": "1331-rank-transform-of-an-array",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "python": 8,
    "javascript": 25
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    #define pii pair<int,int>\r\n    \r\n    vector<int> arrayRankTransform(vector<int>& arr) {\r\n        if(arr.size()==0) return {};\r\n        \r\n        priority_queue<pii, vector<pii>, greater<pii>> pq;\r\n        \r\n        for(int i=0; i<arr.size(); i++)\r\n            pq.push({arr[i],i});\r\n\r\n        int temp = pq.top().first;\r\n        int rank = 1;\r\n        while(!pq.empty()) {\r\n            pii p = pq.top();\r\n            pq.pop();\r\n            if(temp == p.first)\r\n                arr[p.second] = rank;\r\n            else {\r\n                arr[p.second] = ++rank;\r\n                temp = p.first;\r\n            }\r\n        }\r\n        return arr;\r\n    }\r\n};",
    "python": "# Runtime: 325 ms (Top 99.70%) | Memory: 33.7 MB (Top 29.42%)\r\nclass Solution:\r\n    def arrayRankTransform(self, arr: List[int]) -> List[int]:\r\n        arr_set = list(sorted(set(arr)))\r\n        rank = {}\r\n        for i, e in enumerate(arr_set):\r\n            rank[e] = i+1\r\n        return [ rank[e] for e in arr]",
    "javascript": "/**\r\n * @param {number[]} arr\r\n * @return {number[]}\r\n */\r\nvar arrayRankTransform = function(arr) {\r\n    if(arr.length==0){\r\n            return arr;\r\n        }\r\n        let a=arr.map((num)=>num);\r\n        \r\n        arr.sort((a,b)=>a-b);\r\n        let map=new Map();\r\n        map.set(arr[0],1);\r\n        for(let i=1;i<arr.length;i++){\r\n            if(arr[i]==arr[i-1]){\r\n                continue;\r\n            }\r\n            else{\r\n                map.set(arr[i],map.get(arr[i-1])+1);\r\n            }\r\n        }\r\n       \r\n        let rank=a.map((num)=>map.get(num));\r\n        return rank;\r\n};"
  }
}
