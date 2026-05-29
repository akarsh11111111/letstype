export default {
  "id": 1578,
  "name": "Minimum Time to Make Rope Colorful",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-time-to-make-rope-colorful",
  "relativeDir": "M/Minimum Time to Make Rope Colorful",
  "slug": "1578-minimum-time-to-make-rope-colorful",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 40,
    "python": 11,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minCost(string colors, vector<int>& neededTime) {\r\n        int time=0;\r\n        for(int i=0;i<colors.length()-1;i++){\r\n            if(colors[i]==colors[i+1]){\r\n                if(neededTime[i]>neededTime[i+1]){\r\n                    swap(neededTime[i],neededTime[i+1]);\r\n                }\r\n                time+=min(neededTime[i],neededTime[i+1]);\r\n            }\r\n        }return time;\r\n    }\r\n};",
    "python": "# Runtime: 862 ms (Top 94.6%) | Memory: 27.26 MB (Top 71.4%)\r\n\r\nclass Solution:\r\n    def minCost(self, s: str, cost: List[int]) -> int:\r\n        ans = prev = 0 # index of previously retained letter \r\n        for i in range(1, len(s)): \r\n            if s[prev] != s[i]: prev = i\r\n            else: \r\n                ans += min(cost[prev], cost[i])\r\n                if cost[prev] < cost[i]: prev = i\r\n        return ans",
    "java": "class Solution {\r\n    public int minCost(String colors, int[] neededTime) {\r\n        return minCost(colors, neededTime, 0, neededTime.length - 1);\r\n    }\r\n    \r\n    public int minCost(String colors, int[] neededTime, int start, int end) {\r\n        if (start == end) {\r\n            return 0;\r\n        }\r\n        \r\n        int mid = (start + end) / 2;\r\n        int lEnd = mid;\r\n        int rStart = mid + 1;\r\n        int t1 = minCost(colors, neededTime, start, lEnd);\r\n        int t2 = minCost(colors, neededTime, rStart, end);\r\n        \r\n        while (neededTime[lEnd] < 0 && lEnd >= start) {\r\n            --lEnd;\r\n        }\r\n        while (neededTime[rStart] < 0 && rStart <= end) {\r\n            ++rStart;\r\n        }\r\n        \r\n        if (colors.charAt(lEnd) != colors.charAt(rStart)) {\r\n            return t1 + t2;\r\n        }\r\n        \r\n        int removeTime = 0;\r\n        if (neededTime[lEnd] <= neededTime[rStart]) {\r\n            removeTime = neededTime[lEnd];\r\n            neededTime[lEnd] *= -1;\r\n        }\r\n        else {\r\n            removeTime = neededTime[rStart];\r\n            neededTime[rStart] *= -1;\r\n        }\r\n            \r\n        return t1 + t2 + removeTime;\r\n    }\r\n}",
    "javascript": "// Runtime: 148 ms (Top 52.13%) | Memory: 56 MB (Top 21.28%)\r\nvar minCost = function(colors, neededTime) {\r\n    let stack = [], time = 0;\r\n    for (let i = 0; i < colors.length; i++) {\r\n        let skipPush = false;\r\n        while (stack.length && colors[i] === colors[stack[stack.length - 1]]) {\r\n            if (neededTime[i] >= neededTime[stack[stack.length - 1]]) {\r\n                time += neededTime[stack.pop()];\r\n            }\r\n            else if (neededTime[i] < neededTime[stack[stack.length - 1]]) {\r\n                time += neededTime[i];\r\n                skipPush = true;\r\n                break;\r\n            }\r\n        }\r\n        if (!skipPush) stack.push(i);\r\n    }\r\n    return time;\r\n};"
  }
}
