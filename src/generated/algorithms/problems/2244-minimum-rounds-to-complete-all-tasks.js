export default {
  "id": 2244,
  "name": "Minimum Rounds to Complete All Tasks",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks",
  "relativeDir": "M/Minimum Rounds to Complete All Tasks",
  "slug": "2244-minimum-rounds-to-complete-all-tasks",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 32,
    "python": 20,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 149 ms (Top 85.0%) | Memory: 104.00 MB (Top 63.18%)\r\n\r\nclass Solution {\r\npublic:\r\n    int minimumRounds(vector<int>& tasks) {\r\n        unordered_map<int,int> mp;\r\n        for(int i=0;i<tasks.size();i++){\r\n            mp[tasks[i]]++;\r\n        }\r\n        \r\n        int output=0;\r\n        \r\n        for (auto freq : mp){\r\n            if(freq.second==1)\r\n                return -1;\r\n            if(freq.second%3==0){\r\n                output += freq.second/3;\r\n            }\r\n            else{\r\n                output += freq.second/3 + 1;\r\n            }\r\n        }\r\n        return output;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumRounds(self, tasks: List[int]) -> int:\r\n        dic={}\r\n        c=0\r\n        for i in tasks:\r\n            if i in dic.keys():\r\n                dic[i]+=1\r\n            else:\r\n                dic[i]=1\r\n        for i in dic.keys():\r\n            if dic[i]==1:\r\n                return -1\r\n            while dic[i]>=2:\r\n                if dic[i]-3>1:\r\n                    dic[i]-=3\r\n                    c+=1\r\n                else:\r\n                    dic[i]-=2\r\n                    c+=1\r\n        return c",
    "java": "/**\r\n\tEach round, we can complete either 2 or 3 tasks of the same difficulty level\r\n    Time: O(n)\r\n    Space: O(n)\r\n*/\r\nclass Solution {\r\n    public int minimumRounds(int[] tasks) {\r\n        int round = 0;\r\n        Map<Integer, Integer> taskMap = new HashMap<>(); // map of <task,  number of each task>\r\n        for (int i = 0; i < tasks.length; i++) {\r\n            taskMap.put(tasks[i], taskMap.getOrDefault(tasks[i], 0) + 1);\r\n        }\r\n        \r\n        for (Map.Entry<Integer, Integer> entry : taskMap.entrySet()) {\r\n            if (entry.getValue() == 1) {\r\n                return -1; // we cannot complete if there is only 1 task\r\n            }\r\n\t\t\t// try to take as many 3's as possible\r\n            round += entry.getValue() / 3; \r\n\t\t\t\r\n            /*\r\n\t\t\t\tWe can have 1 or 2 tasks remaining. We're not supposed to take task of count 1, but we can 'borrow' 1 from the previous\r\n\t\t\t\tex. [5,5,5,5,5,5,5] -> [5,5,5][5,5,5][5]\r\n\t\t\t\tIn this example, treat the last [5,5,5], [5] as [5,5], [5,5]\r\n            */\r\n            if (entry.getValue() % 3 != 0) { \r\n                round++; \r\n            }\r\n        }\r\n        return round;\r\n    }\r\n}",
    "javascript": "// Runtime: 171 ms (Top 86.61%) | Memory: 55.3 MB (Top 97.32%)\r\nvar minimumRounds = function(tasks) {\r\n    const hash = {};\r\n    let minRounds = 0;\r\n\r\n    for (const task of tasks) {\r\n        hash[task] = hash[task] + 1 || 1;\r\n    }\r\n\r\n    for (const count of Object.values(hash)) {\r\n        if (count < 2) return -1;\r\n        minRounds += Math.ceil(count / 3);\r\n    }\r\n\r\n    return minRounds;\r\n};"
  }
}
