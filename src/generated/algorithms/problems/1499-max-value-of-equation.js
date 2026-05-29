export default {
  "id": 1499,
  "name": "Max Value of Equation",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/max-value-of-equation",
  "relativeDir": "M/Max Value of Equation",
  "slug": "1499-max-value-of-equation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 22,
    "python": 27,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int findMaxValueOfEquation(vector<vector<int>>& points, int k) {\r\n        deque<pair<int, int>> dq;\r\n        int res = -INT_MAX;\r\n        for(auto point: points){\r\n            while(!dq.empty() && point[0]-dq.front().second>k){\r\n                dq.pop_front();\r\n            }\r\n            if(!dq.empty()){\r\n                res = max(res, dq.front().first+point[0]+point[1]);\r\n            }\r\n            while(!dq.empty() && point[1]-point[0]>=dq.back().first){\r\n                dq.pop_back();\r\n            }\r\n            dq.push_back({point[1]-point[0], point[0]});\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findMaxValueOfEquation(self, points: List[List[int]], k: int) -> int:\r\n        \"\"\"\r\n            Eqn is: yi + yj + |xi - xj|\r\n            Since points is sorted by x values, \r\n                therefore, xj will always be greater than xi\r\n                therefore xi - xj will always be negative\r\n            So the above eqn can be rewritten as,\r\n                (yj+xj) + (yi-xi)\r\n            Now the problem boils down to finding maximum in sliding window of k size.\r\n            (https://leetcode.com/problems/sliding-window-maximum/discuss/1911533/Python-or-Dequeue-or-Sliding-Window-or-Simple-Solution)\r\n        \"\"\"\r\n        queue = deque()\r\n        maxVal = -sys.maxsize\r\n        for x,y in points:\r\n            while queue and abs(queue[0][0] - x) > k:\r\n                queue.popleft()\r\n            \r\n            if queue:\r\n                maxVal = max(maxVal, y+x+queue[0][1])\r\n            \r\n            while queue and queue[-1][1] <= y-x:\r\n                queue.pop()\r\n            \r\n            queue.append((x, y-x))\r\n            \r\n        return maxVal",
    "java": "// Runtime: 16 ms (Top 80.93%) | Memory: 104.9 MB (Top 83.74%)\r\nclass Solution {\r\n    public int findMaxValueOfEquation(int[][] points, int k) {\r\n        int ans=Integer.MIN_VALUE;\r\n        int i=0;\r\n        int f=1;\r\n        while(i < points.length) {\r\n            if(f<i+1)\r\n                f=i+1;\r\n            for (int j = f; j <= points.length-1; j++) {\r\n                if(points[j][0]>(points[i][0]+k))\r\n                    break;\r\n                if((points[i][1]+points[j][1]+points[j][0]-points[i][0])>ans){\r\n                    ans=points[i][1]+points[j][1]+points[j][0]-points[i][0];\r\n                    f=j-1;\r\n                }\r\n            }\r\n            i++;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var findMaxValueOfEquation = function(points, k) {\r\n    let result = -Infinity;\r\n    let queue = [];\r\n    for(let point of points) {\r\n        while(queue.length && point[0] - queue[0][1] > k) {\r\n            queue.shift();\r\n        }\r\n        if(queue.length) {\r\n            result = Math.max(result, queue[0][0] + point[1] + point[0]);\r\n        }\r\n        while(queue.length && point[1] - point[0] > queue[queue.length - 1][0]) {\r\n            queue.pop();\r\n        }\r\n        queue.push([point[1] - point[0], point[0]]);\r\n    }\r\n    return result;\r\n};"
  }
}
