export default {
  "id": 649,
  "name": "Dota2 Senate",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/dota2-senate",
  "relativeDir": "D/Dota2 Senate",
  "slug": "0649-dota2-senate",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 31,
    "python": 22,
    "javascript": 48
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 77.31%) | Memory: 8.1 MB (Top 16.67%)\r\nclass Solution {\r\npublic:\r\n    string predictPartyVictory(string senate) {\r\n        queue<int> D, R;\r\n        int len = senate.size();\r\n        for (int i = 0; i < len; i++) {\r\n            if (senate[i] == 'D') {\r\n                D.push(i);\r\n            }\r\n            else {\r\n                R.push(i);\r\n            }\r\n        }\r\n\r\n        while (!D.empty() && !R.empty()) {\r\n            int dIdx = D.front();\r\n            D.pop();\r\n\r\n            int rIdx = R.front();\r\n            R.pop();\r\n\r\n            if (dIdx < rIdx) {\r\n                D.push(dIdx + len);\r\n            }\r\n            else {\r\n                R.push(rIdx + len);\r\n            }\r\n        }\r\n\r\n        return D.empty() ? \"Radiant\" : \"Dire\";\r\n    }\r\n};",
    "python": "// Runtime: 44 ms (Top 92.53%) | Memory: 16.90 MB (Top 59.64%)\r\n\r\nfrom collections import deque\r\n\r\nclass Solution:\r\n    def predictPartyVictory(self, senate: str) -> str:\r\n        n = len(senate)\r\n        radiant = deque()\r\n        dire = deque()\r\n        for i, s in enumerate(senate):\r\n            if s == 'R':\r\n                radiant.append(i)\r\n            else:\r\n                dire.append(i)\r\n        while radiant and dire:\r\n            r_idx = radiant.popleft()\r\n            d_idx = dire.popleft()\r\n            if r_idx < d_idx:\r\n                radiant.append(r_idx + n)\r\n            else:\r\n                dire.append(d_idx + n)\r\n        return \"Radiant\" if radiant else \"Dire\"",
    "java": "// Two Queues Solution\r\n// Two queues to store the R index and D index.\r\n// If the senate can execute his right, the senate is alive and can execute in the next round.\r\n// Then we can add the senate back to the queue and process in the next round (idx + N).\r\n// Time complexity: O(N), each loop we add/remove 1 senate in the queue.\r\n// Space complexity: O(N)\r\nclass Solution {\r\n    public String predictPartyVictory(String senate) {\r\n        if (senate == null || senate.length() == 0) throw new IllegalArgumentException(\"Invalid input.\");\r\n        final int N = senate.length();\r\n        Queue<Integer> queR = new ArrayDeque<>();  // store the R index\r\n        Queue<Integer> queD = new ArrayDeque<>();  // store the D index\r\n        for (int i = 0; i < N; i++) {\r\n            if (senate.charAt(i) == 'R') {\r\n                queR.add(i);\r\n            } else {\r\n                queD.add(i);\r\n            }\r\n        }\r\n        while (!queR.isEmpty() && !queD.isEmpty()) {\r\n            int r = queR.poll();\r\n            int d = queD.poll();\r\n            if (r < d) {  // R is alive in the next round.\r\n                queR.add(r + N);\r\n            } else {  // D is alive in the next round.\r\n                queD.add(d + N);\r\n            }\r\n        }\r\n        return queR.isEmpty() ? \"Dire\" : \"Radiant\";\r\n    }\r\n}",
    "javascript": "var predictPartyVictory = function(senate) {\r\n    let index = 0, RCount = 0, DCount = 0, deletion = false, delCount = 1;\r\n    while(delCount || index < senate.length) {\r\n        if(index >= senate.length) {\r\n            index = 0;\r\n            delCount = 0;\r\n        }\r\n        deletion = false;\r\n        if(senate.charAt(index) == 'R') {\r\n            if(DCount > 0) {\r\n                senate = senate.slice(0,index)+senate.slice(index+1);\r\n                DCount--;\r\n                index--;\r\n                deletion = true;\r\n                delCount++;\r\n            }\r\n            else {\r\n                RCount++;\r\n            }\r\n        }\r\n        else if(senate.charAt(index) == 'D') {\r\n            if(RCount > 0) {\r\n                senate = senate.slice(0,index)+senate.slice(index+1);\r\n                RCount--;\r\n                index--;\r\n                deletion = true;\r\n                delCount++;\r\n            }\r\n            else {\r\n                DCount++;\r\n            }\r\n        }\r\n        if(index == senate.length-1) {\r\n            if(senate.charAt(0) == 'R' && senate.charAt(index) == 'D' && DCount > 0 && !deletion) {\r\n                senate = senate.slice(1);\r\n                DCount--;\r\n                index = -1;\r\n            }\r\n            else if(senate.charAt(0) == 'D' && senate.charAt(index) == 'R' && RCount > 0 && !deletion) {\r\n                senate = senate.slice(1);\r\n                RCount--;\r\n                index = -1;\r\n            }            \r\n        }\r\n        index++;\r\n    }\r\n    return senate.charAt(0) == 'D' ? 'Dire' : 'Radiant';\r\n};"
  }
}
