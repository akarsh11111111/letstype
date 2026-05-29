export default {
  "id": 539,
  "name": "Minimum Time Difference",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-time-difference",
  "relativeDir": "M/Minimum Time Difference",
  "slug": "0539-minimum-time-difference",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "java": 20,
    "python": 20,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 156 ms (Top 5.09%) | Memory: 13.4 MB (Top 68.16%)\r\nclass Solution {\r\npublic:\r\n    int findMinDifference(vector<string>& timePoints) {\r\n        unordered_set<string> st;\r\n        for(auto &i: timePoints)\r\n        {\r\n            if(st.count(i)) return 0;\r\n            st.insert(i);\r\n        }\r\n        int ans = INT_MAX;\r\n        int first = -1,prev = 0; // first variable will take the diffrence of the first time stamp given in the input and 00:00\r\n        int hour = 0, minute = 0;\r\n        while(hour<24)\r\n        {\r\n            minute=0;\r\n            while(minute < 60)\r\n            {\r\n                string hh = to_string(hour), mm = to_string(minute);\r\n                if(hh.size() == 1) hh = '0' + hh;\r\n                if(mm.size() == 1) mm = '0' + mm;\r\n                string p = hh + \":\"+ mm;\r\n                if(st.count(p))\r\n                {\r\n                    if(first == -1){first = prev;}\r\n                    else\r\n                    {\r\n                        ans = min(ans,prev);\r\n                    }\r\n                    prev = 0;\r\n                }\r\n                prev++;\r\n                minute++;\r\n            }\r\n            hour++;\r\n        }\r\n        ans = min(first+prev,ans);\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 68 ms (Top 91.63%) | Memory: 20.60 MB (Top 5.75%)\r\n\r\nclass Solution:\r\n    def findMinDifference(self, timePoints: List[str]) -> int:\r\n        # Convert time points to minutes since midnight and sort the list\r\n        minutes = sorted([int(time[:2]) * 60 + int(time[3:]) for time in timePoints])\r\n        \r\n        # Calculate the minimum difference between adjacent time points\r\n        min_diff = float('inf')\r\n        for i in range(len(minutes) - 1):\r\n            diff = minutes[i+1] - minutes[i]\r\n            if diff < min_diff:\r\n                min_diff = diff\r\n        \r\n        # Calculate the difference between the first and last time points\r\n        diff = (24*60 - minutes[-1] + minutes[0]) % (24*60)\r\n        if diff < min_diff:\r\n            min_diff = diff\r\n        \r\n        return min_diff",
    "java": "// Runtime: 9 ms (Top 62.54%) | Memory: 46.9 MB (Top 41.18%)\r\nclass Solution {\r\n    public int findMinDifference(List<String> timePoints) {\r\n        int N = timePoints.size();\r\n        int[] minutes = new int[N];\r\n        for(int i = 0; i < N; i++){\r\n            int hr = Integer.parseInt(timePoints.get(i).substring(0, 2));\r\n            int min = Integer.parseInt(timePoints.get(i).substring(3, 5));\r\n            minutes[i] = hr * 60 + min;\r\n        }\r\n        Arrays.sort(minutes);\r\n        int res = Integer.MAX_VALUE;\r\n        for(int i = 0; i < N - 1; i++){\r\n            res = Math.min(res, minutes[i + 1] - minutes[i]);\r\n        }\r\n        int b = minutes[0];\r\n        int a = minutes[N - 1];\r\n        return Math.min(res, (b - a + 1440) % 1440);\r\n    }\r\n}",
    "javascript": "// Runtime: 101 ms (Top 73.64%) | Memory: 42.7 MB (Top 97.01%)\r\nvar findMinDifference = function(timePoints) {\r\n    const DAY_MINUTES = 24 * 60;\r\n    const set = new Set();\r\n\r\n    for (let index = 0; index < timePoints.length; index++) {\r\n        const time = timePoints[index];\r\n        const [hours, minutes] = time.split(':');\r\n        const totalMinutes = hours * 60 + +minutes;\r\n        if (set.has(totalMinutes)) return 0;\r\n        set.add(totalMinutes);\r\n    }\r\n\r\n    const timeMinutes = [...set].sort((a, b) => a - b);\r\n    return timeMinutes.reduce((min, time, index) => {\r\n        const next = timeMinutes[index + 1];\r\n        const diff = next ? next - time : DAY_MINUTES - time + timeMinutes[0];\r\n        return Math.min(min, diff);\r\n    }, Infinity);\r\n};"
  }
}
