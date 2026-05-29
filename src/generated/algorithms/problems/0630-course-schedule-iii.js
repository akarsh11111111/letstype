export default {
  "id": 630,
  "name": "Course Schedule III",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/course-schedule-iii",
  "relativeDir": "C/Course Schedule III",
  "slug": "0630-course-schedule-iii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 20,
    "python": 21,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 280 ms (Top 87.39%) | Memory: 56.3 MB (Top 66.94%)\r\nclass Solution {\r\npublic:\r\n    bool static cmp(vector<int> &a,vector<int>&b) {\r\n        return a[1] < b[1];\r\n    }\r\n    int scheduleCourse(vector<vector<int>>& courses) {\r\n         sort(courses.begin(),courses.end(),cmp);\r\n         int sm = 0;\r\n         priority_queue<int> pq;\r\n         for(int i=0; i<courses.size(); i++) {\r\n               pq.push(courses[i][0]);\r\n               sm+=courses[i][0]; // sum of duration of courses\r\n               // when there exists a course duration that is invalid and can't be completed on that day!\r\n               if(sm>courses[i][1]) {\r\n                    sm-=pq.top(); // remove the biggest invalid course duration!\r\n                    pq.pop();\r\n               }\r\n         }\r\n        return pq.size();\r\n    }\r\n};",
    "python": "class Solution {\r\npublic:\r\n    bool static cmp(vector<int> &a,vector<int>&b) {\r\n        return a[1] < b[1];\r\n    }\r\n    int scheduleCourse(vector<vector<int>>& courses) {\r\n         sort(courses.begin(),courses.end(),cmp);\r\n         int sm = 0;\r\n         priority_queue<int> pq;\r\n         for(int i=0; i<courses.size(); i++) {\r\n               pq.push(courses[i][0]);  \r\n               sm+=courses[i][0]; // sum of duration of courses\r\n               // when there exists a course duration that is invalid and can't be completed on that day!\r\n               if(sm>courses[i][1]) { \r\n                    sm-=pq.top();  // remove the biggest invalid course duration!\r\n                    pq.pop();\r\n               }\r\n         }\r\n        return pq.size();\r\n    }\r\n};",
    "java": "// Runtime: 32 ms (Top 83.06%) | Memory: 54.60 MB (Top 52.82%)\r\n\r\nclass Solution {\r\n    public int scheduleCourse(int[][] C) {\r\n        Arrays.sort(C, (a,b) -> a[1] - b[1]);\r\n        PriorityQueue<Integer> pq = new PriorityQueue<>((a,b) -> b - a);\r\n        int total = 0;\r\n        for (int[] course : C) {\r\n            int dur = course[0], end = course[1];\r\n            if (dur + total <= end) {\r\n                total += dur;\r\n                pq.add(dur);\r\n            } else if (pq.size() > 0 && pq.peek() > dur) {\r\n                total += dur - pq.poll();\r\n                pq.add(dur);\r\n            }\r\n        }\r\n        return pq.size();\r\n    }\r\n}",
    "javascript": "\r\nvar scheduleCourse = function(courses) {\r\n  courses.sort((a,b)=>a[1]-b[1]);\r\n  let pq = new PQ(), currentDay = 0;\r\n\r\n  for(let [duration,lastDay] of courses){\r\n    if(duration > lastDay) continue;    \r\n \r\n    if(currentDay + duration <= lastDay){\r\n      pq.offer(duration);\r\n      currentDay += duration;\r\n    }\r\n    \r\n    else if(duration < pq.peek() && pq.size())\r\n      {\r\n        currentDay += duration-pq.poll();\r\n        pq.offer(duration);\r\n      }  \r\n  }\r\n  return pq.size();   \r\n};"
  }
}
