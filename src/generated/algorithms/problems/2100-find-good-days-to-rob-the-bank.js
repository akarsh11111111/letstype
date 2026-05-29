export default {
  "id": 2100,
  "name": "Find Good Days to Rob the Bank",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-good-days-to-rob-the-bank",
  "relativeDir": "F/Find Good Days to Rob the Bank",
  "slug": "2100-find-good-days-to-rob-the-bank",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 34,
    "python": 11,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> goodDaysToRobBank(vector<int>& security, int time) {\r\n        int n = security.size();\r\n        vector<int> prefix(n), suffix(n);\r\n        vector<int> ans;\r\n        \r\n        prefix[0] = 0;\r\n        for(int i=1;i<n;i++) {\r\n            if(security[i] <= security[i-1]) prefix[i] = prefix[i-1]+1;\r\n            else prefix[i] = 0;\r\n        }\r\n        \r\n        suffix[n-1] = 0;\r\n        for(int i=(n-2);i>=0;i--) {\r\n            if(security[i] <= security[i+1]) suffix[i] = suffix[i+1]+1;\r\n            else suffix[i] = 0;\r\n        }\r\n        \r\n        for(int i=0;i<n;i++) {\r\n            if(prefix[i]>=time && suffix[i]>=time) ans.push_back(i);\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def goodDaysToRobBank(self, security: List[int], time: int) -> List[int]:\r\n        decreasing = [0] * len(security)\r\n        increasing = [0] * len(security)\r\n        for i in range(len(security)):\r\n            if i > 0 and security[i - 1] >= security[i]:\r\n                decreasing[i] = decreasing[i - 1] + 1\r\n        for i in reversed(range(len(security))):\r\n            if i < len(security) - 1 and security[i] <= security[i + 1]:\r\n                increasing[i] = increasing[i + 1] + 1\r\n        return [i for i in range(len(security)) if increasing[i] >= time and decreasing[i] >= time]",
    "java": "// Runtime: 12 ms (Top 6.78%) | Memory: 59.90 MB (Top 5.93%)\r\n\r\nclass Solution {\r\n    public List<Integer> goodDaysToRobBank(int[] security, int time) {\r\n        List<Integer> res = new ArrayList<>();\r\n        if (time == 0) {\r\n            for (int i = 0; i < security.length; i++) res.add(i);\r\n            return res;\r\n        }\r\n        Set<Integer> set = new HashSet<>();\r\n        int count = 1;\r\n        for (int i = 1; i < security.length; i++) {\r\n            if (security[i] <= security[i - 1]) {\r\n                count++;\r\n            } else {\r\n                count = 1;\r\n            }\r\n            if (count > time) {\r\n                set.add(i);\r\n            }\r\n        }\r\n        \r\n        count = 1;\r\n        for (int i = security.length - 2; i >= 0; i--) {\r\n            if (security[i] <= security[i + 1]) {\r\n                count++;\r\n            } else {\r\n                count = 1;\r\n            }\r\n            if (count > time && set.contains(i)) res.add(i);\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 116 ms (Top 100.0%) | Memory: 67.60 MB (Top 61.9%)\r\n\r\nvar goodDaysToRobBank = function(security, time) {\r\n    let decrease = [0];\r\n    let increase = Array(security.length).fill(0);\r\n    \r\n    // Prefix\r\n    for (let i = 1; i < security.length; i++) {\r\n        if (security[i] <= security[i - 1]) decrease[i] = decrease[i - 1] + 1;\r\n        else decrease[i] = 0;\r\n    }\r\n\t\r\n    // Suffix\r\n    for (let j = security.length - 2; j >= 0; j--) {\r\n        if (security[j] <= security[j + 1]) increase[j] = increase[j + 1] + 1;\r\n        else increase[j] = 0;\r\n    }\r\n    \r\n    let output = [];\r\n    for (let k = 0; k < security.length; k++) {\r\n        let left = decrease[k];\r\n        let right = increase[k];\r\n        if (left >= time && right >= time) output.push(k);\r\n    }\r\n    \r\n    return output;\r\n};"
  }
}
