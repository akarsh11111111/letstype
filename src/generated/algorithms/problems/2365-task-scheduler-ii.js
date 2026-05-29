export default {
  "id": 2365,
  "name": "Task Scheduler II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/task-scheduler-ii",
  "relativeDir": "T/Task Scheduler II",
  "slug": "2365-task-scheduler-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 16,
    "python": 12,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 177 ms (Top 67.53%) | Memory: 102.50 MB (Top 17.88%)\r\n\r\nclass Solution {\r\npublic:\r\n    long long taskSchedulerII(vector<int>& tasks, int space) {\r\n        // Use a map to keep track of the last occurrence day for each task\r\n        unordered_map<int, long long> lastOccurrence;\r\n        \r\n        // Initialize the current day to 0\r\n        long long currentDay = 0;\r\n\r\n        // Loop through each task in the list\r\n        for(int task : tasks) {\r\n            // If the task has been executed before\r\n            if(lastOccurrence.find(task) != lastOccurrence.end()) {\r\n                // Check if the space constraint is satisfied\r\n                if(currentDay - lastOccurrence[task] <= space) {\r\n                    // If not, move the currentDay ahead\r\n                    currentDay = lastOccurrence[task] + space + 1;\r\n                } else {\r\n                    // If yes, just increment the current day\r\n                    currentDay++;\r\n                }\r\n            } else {\r\n                // If the task hasn't been executed before, simply increment the current day\r\n                currentDay++;\r\n            }\r\n\r\n            // Update the last occurrence of the task\r\n            lastOccurrence[task] = currentDay;\r\n        }\r\n\r\n        return currentDay;\r\n    }\r\n};",
    "python": "# Runtime: 2321 ms (Top 5.03%) | Memory: 29.8 MB (Top 75.04%)\r\nimport math\r\nclass Solution:\r\n    def taskSchedulerII(self, tasks: List[int], space: int) -> int:\r\n        count_dict = {}\r\n        total_days = 0\r\n        for task in tasks:\r\n            if task not in count_dict:\r\n                count_dict[task] = -math.inf\r\n            total_days = max(total_days + 1, count_dict[task] + space + 1)\r\n            count_dict[task] = total_days\r\n        return total_days",
    "java": "class Solution {\r\n    public long taskSchedulerII(int[] tasks, int space) {\r\n        HashMap<Integer, Long> map = new HashMap<>();\r\n        long day = 0;\r\n\r\n        for (int item : tasks) {\r\n            if (map.containsKey(item) && map.get(item) > day)\r\n                day = map.get(item);\r\n\r\n            day++;\r\n            map.put(item, day + space);\r\n        }\r\n\r\n        return day;\r\n    }\r\n}",
    "javascript": "var taskSchedulerII = function(tasks, n) {\r\n\tconst config = {};\r\n\tlet totalIteration = 0;\r\n\tlet currentTime = 0;\r\n\tfor (const iterator of tasks) {\r\n\t\tcurrentTime++;\r\n\t\tif (!config[iterator]) {\r\n\t\t\tconfig[iterator] = 0;\r\n\t\t} else {\r\n\t\t\tif (config[iterator] > currentTime) {\r\n\t\t\t\tlet difference = config[iterator] - currentTime;\r\n\t\t\t\ttotalIteration += difference;\r\n\t\t\t\tcurrentTime += difference;\r\n\t\t\t}\r\n\t\t}\r\n\t\tconfig[iterator] = currentTime + n + 1;\r\n\t\ttotalIteration++;\r\n\t}\r\n\r\n\treturn totalIteration;\r\n};"
  }
}
