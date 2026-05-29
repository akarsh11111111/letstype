export default {
  "id": 1424,
  "name": "Diagonal Traverse II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/diagonal-traverse-ii",
  "relativeDir": "D/Diagonal Traverse II",
  "slug": "1424-diagonal-traverse-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 36,
    "python": 16,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> findDiagonalOrder(vector<vector<int>>& nums) {\r\n        int n = nums.size();\r\n        int m = 0;\r\n        for(vector<int> &v : nums)\r\n        {\r\n            int y = v.size();\r\n            m = max(m, y);\r\n        }\r\n        vector<int> D2[n+m-1];\r\n        for(int i = 0; i < n; i++)\r\n        {\r\n            for(int j = 0; j < nums[i].size(); j++)\r\n            {\r\n                D2[i+j].push_back(nums[i][j]);\r\n            }\r\n        }\r\n        vector<int> ans;\r\n        for(int i = 0; i < n+m-1; i++)\r\n        {\r\n            int x = D2[i].size();\r\n            while(x--)\r\n            {\r\n                ans.push_back(D2[i][x]);\r\n                D2[i].pop_back();\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findDiagonalOrder(self, nums: List[List[int]]) -> List[int]:\r\n\t\t# sort the index of element\r\n        heap = list()\r\n        n = len(nums)\r\n        for i in range(n):\r\n            m = len(nums[i])\r\n            for j in range(m):\r\n                heapq.heappush(heap,[i+j,j,i])\r\n\t\t\t\t\r\n\t\t# append the element one by one\r\n        ans = []\r\n        while heap:\r\n            temp = heapq.heappop(heap)\r\n            ans.append(nums[temp[2]][temp[1]])\r\n        return ans",
    "java": "\tclass Solution {\r\npublic int[] findDiagonalOrder(List<List<Integer>> nums) {\r\n    HashMap<Integer , Stack<Integer>> map = new HashMap();\r\n    \r\n    for(int i = 0 ; i < nums.size() ; i++){\r\n        for(int j = 0 ; j < nums.get(i).size() ; j++){\r\n            int z = i + j;\r\n            if(map.containsKey(z)){\r\n                map.get(z).add(nums.get(i).get(j));\r\n            }else{\r\n              Stack<Integer> stk = new Stack<>();\r\n                stk.push(nums.get(i).get(j));\r\n                map.put(z , stk);\r\n            }\r\n        }\r\n    }\r\n    ArrayList<Integer> arr = new ArrayList<>();\r\n    int k = 0;\r\n    while(true){\r\n        if(map.containsKey(k)){\r\n            int size = map.get(k).size();\r\n            while(size-- > 0){\r\n                arr.add(map.get(k).pop());\r\n            }\r\n            k++;\r\n        }else{\r\n            break;\r\n        }\r\n    }\r\n    int[] res = new int[arr.size()];\r\n    for(int i = 0 ; i < res.length ; i++){\r\n        res[i] = arr.get(i);\r\n    }\r\n    \r\n    return res;\r\n}}",
    "javascript": "// Runtime: 579 ms (Top 22.58%) | Memory: 89.6 MB (Top 70.97%)\r\nvar findDiagonalOrder = function(nums) {\r\n  let vals = []; // [row, diagonal value, actual value]\r\n  for (let i = 0; i < nums.length; i++) {\r\n    for (let j = 0; j < nums[i].length; j++) {\r\n      vals.push([i, i + j, nums[i][j]]);\r\n    }\r\n  }\r\n  vals.sort((a, b) => {\r\n    if (a[1] === b[1]) return b[0] - a[0];\r\n    return a[1] - b[1];\r\n  })\r\n  return vals.map(val => val[2]);\r\n};"
  }
}
