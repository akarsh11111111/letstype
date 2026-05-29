export default {
  "id": 1552,
  "name": "Magnetic Force Between Two Balls",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/magnetic-force-between-two-balls",
  "relativeDir": "M/Magnetic Force Between Two Balls",
  "slug": "1552-magnetic-force-between-two-balls",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 39,
    "python": 28,
    "javascript": 38
  },
  "languages": {
    "cpp": "// Runtime: 165 ms (Top 51.74%) | Memory: 58.10 MB (Top 98.81%)\r\n\r\n// OJ: https://leetcode.com/contest/weekly-contest-202/problems/magnetic-force-between-two-balls/\r\n// Author: github.com/lzl124631x\r\n// Time: O(log(max(A)) * N + NlogN)\r\n// Space: O(1)\r\nclass Solution {\r\n    bool valid(vector<int> &A, int M, int m) {\r\n        int prev = 0;\r\n        for (int i = 1, j = 1; i < m; ++i) {\r\n            while (j < A.size() && A[j] < A[prev] + M) ++j;\r\n            if (j >= A.size()) return false;\r\n            prev = j;\r\n        }\r\n        return true;\r\n    }\r\npublic:\r\n    int maxDistance(vector<int>& A, int m) {\r\n        sort(begin(A), end(A));\r\n        if (m == 2) return A.back() - A[0];\r\n        int L = 1, R = A.back() - A[0];\r\n        while (L <= R) {\r\n            int M = (L + R) / 2;\r\n            if (valid(A, M, m)) L = M + 1;\r\n            else R = M - 1;\r\n        }\r\n        return R;\r\n    }\r\n};",
    "python": "class Solution:\r\n  def possible (self,distance,positions,M):\r\n    ball = 1 \r\n    lastPos = positions[0]  \r\n    for pos in positions:\r\n      if pos-lastPos >= distance:\r\n        ball+=1 \r\n        if ball == M: return True \r\n        lastPos=pos \r\n     \r\n    return False \r\n        \r\n      \r\n    \r\n  def maxDistance(self, positions,M):\r\n    positions.sort()\r\n    low = 0 \r\n    high = positions [-1] \r\n    ans = 0\r\n    while low<=high:\r\n      distance = low+(high-low)//2 \r\n      \r\n      if self.possible(distance,positions,M):\r\n        ans = distance\r\n        low=distance+1 \r\n      else:\r\n        high=distance-1 \r\n    return ans",
    "java": "// Runtime: 44 ms (Top 68.1%) | Memory: 57.23 MB (Top 20.3%)\r\n\r\nclass Solution {\r\n    public int maxDistance(int[] position, int m) {\r\n        Arrays.sort(position);\r\n        int low=Integer.MAX_VALUE;\r\n        int high=0;\r\n        for(int i=1;i<position.length;i++){\r\n            low=Math.min(low,position[i]-position[i-1]);\r\n        }\r\n        high=position[position.length-1]-position[0];\r\n        int ans=-1;\r\n        while(low<=high){\r\n            int mid=low+(high-low)/2;\r\n            if(blackbox(mid,position,m)){\r\n                ans=mid;\r\n                low=mid+1;\r\n            }\r\n            else{\r\n                high=mid-1;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n\t\tpublic boolean blackbox(int maxPossibleDist,int[] position, int m){\r\n        int balls=1;\r\n        int prevballplace=position[0];\r\n        for(int i=1;i<position.length;i++){\r\n            if(position[i]-prevballplace>=maxPossibleDist){\r\n                prevballplace=position[i];\r\n                balls++;\r\n            }\r\n        }\r\n        if(balls>=m){\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 184 ms (Top 100.0%) | Memory: 54.40 MB (Top 6.82%)\r\n\r\n/**\r\n * @param {number[]} position\r\n * @param {number} m\r\n * @return {number}\r\n */\r\nvar maxDistance = function(position, m) {\r\n    position.sort((a, b) => a - b);\r\n\r\n    let left = 1, right = Math.max(...position) - Math.min(...position);\r\n    max = -1;\r\n    while (left <= right) {\r\n        const p = Math.floor((left + right) / 2);\r\n        if (isValid(position, m, p)) {\r\n            max = p;\r\n            left = p + 1;\r\n        } else {\r\n            right = p - 1;\r\n        }\r\n    }\r\n\r\n    return max;   \r\n};\r\n \r\n\r\nconst isValid = (sortedPosition, m, p) => {\r\n    let counter = 1;\r\n    let prev = sortedPosition[0];\r\n    for (let i = 1; i < sortedPosition.length; ++i) {\r\n        if (sortedPosition[i] - prev >= p) {\r\n            counter++;\r\n            prev = sortedPosition[i];\r\n        } \r\n    }\r\n\r\n    return counter >= m;\r\n}"
  }
}
