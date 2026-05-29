export default {
  "id": 1665,
  "name": "Minimum Initial Energy to Finish Tasks",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks",
  "relativeDir": "M/Minimum Initial Energy to Finish Tasks",
  "slug": "1665-minimum-initial-energy-to-finish-tasks",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 22,
    "python": 15,
    "javascript": 16
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minimumEffort(vector<vector<int>>& tasks) {\r\n        int diff=INT_MAX,ans=0;\r\n        for(auto i : tasks){\r\n            diff=min(diff,i[1]-i[0]);\r\n            ans+=i[0];\r\n        }\r\n        int val=0;\r\n        for(auto i : tasks)\r\n            val=max(val,i[1]);\r\n        return max(ans+diff,val);\r\n    }\r\n};",
    "python": "// Runtime: 4002 ms (Top 5.39%) | Memory: 59.1 MB (Top 9.23%)\r\nclass Solution:\r\n    def minimumEffort(self, tasks: List[List[int]]) -> int:\r\n        tasks.sort(key=lambda x: x[0]-x[1])\r\n        def ok(mid):\r\n            for actual, minimum in tasks:\r\n                if minimum > mid or actual > mid: return False\r\n                if minimum <= mid: mid -= actual\r\n            return True\r\n        l, r = 0, 10 ** 9\r\n        while l <= r:\r\n            mid = (l+r) // 2\r\n            if ok(mid): r = mid - 1\r\n            else: l = mid + 1\r\n        return l",
    "java": "import java.util.*;\r\nclass Solution {\r\n    public int minimumEffort(int[][] tasks)\r\n    {\r\n        Arrays.sort(tasks, new Comparator<int[]>(){\r\n            @Override\r\n            public int compare(int[] a, int[] b)\r\n            {\r\n                return (b[1]-b[0])-(a[1]-a[0]);\r\n            }\r\n        });\r\n        int sum=0, max=0;\r\n        for(int i=0;i<tasks.length;i++)\r\n        {\r\n            max=Math.max(max, sum+tasks[i][1]);\r\n            sum+=tasks[i][0];\r\n        }\r\n        \r\n        return max;\r\n        \r\n    }\r\n}```",
    "javascript": "var minimumEffort = function(tasks) {\r\n  let minimumStartingEnergy = 0;\r\n  let currentEnergy = 0;\r\n  \r\n  tasks.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]) );\r\n  \r\n  for (let task of tasks) {\r\n    if (task[1] > currentEnergy) {\r\n      minimumStartingEnergy += (task[1] - currentEnergy);\r\n      currentEnergy = task[1];\r\n    }\r\n    currentEnergy -= task[0];\r\n  }\r\n  \r\n  return minimumStartingEnergy;\r\n};"
  }
}
