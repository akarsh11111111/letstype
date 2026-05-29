export default {
  "id": 1921,
  "name": "Eliminate Maximum Number of Monsters",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/eliminate-maximum-number-of-monsters",
  "relativeDir": "E/Eliminate Maximum Number of Monsters",
  "slug": "1921-eliminate-maximum-number-of-monsters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 31,
    "python": 6,
    "javascript": 38
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int eliminateMaximum(vector<int>& dist, vector<int>& speed) {\r\n        priority_queue<double, vector<double>, greater<double>> pq;\r\n        \r\n        for(int i = 0; i < dist.size(); ++i)\r\n            pq.push(ceil((double)dist[i] / speed[i] ));\r\n        \r\n        int t = 0;\r\n        while(pq.size() && pq.top() > t++) pq.pop();\r\n        return dist.size() - pq.size();\r\n    }\r\n};",
    "python": "class Solution:\r\n    def eliminateMaximum(self, dist: List[int], speed: List[int]) -> int:\r\n        for i, t in enumerate(sorted([(d - 1) // s for d, s in zip(dist, speed)])):\r\n            if i > t:\r\n                return i\r\n        return len(dist)",
    "java": "// Runtime: 18 ms (Top 72.0%) | Memory: 54.86 MB (Top 75.9%)\r\n\r\nclass Solution {\r\n    public int eliminateMaximum(int[] dist, int[] speed) {\r\n        \r\n        int n = dist.length;\r\n        \r\n        int[] time = new int[n];\r\n        \r\n        for(int i = 0; i < n; i++){\r\n            time[i] = (int)Math.ceil(dist[i] * 1.0 / speed[i]);\r\n        }\r\n        \r\n        Arrays.sort(time);\r\n        \r\n        int eliminated = 0;\r\n\t\t\r\n\t\t// At i = 0, minute = 0 ( therefore, we can use i in place of minute )\r\n        \r\n        for(int i = 0; i < n; i++){\r\n\t\t\t \r\n            if(time[i] > i){  // At ith minute, eliminate the first monster arriving after ith minute\r\n                eliminated++;\r\n            }else{\r\n                break; // Monster reached the city\r\n            }\r\n        }\r\n        \r\n        return eliminated;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} dist\r\n * @param {number[]} speed\r\n * @return {number}\r\n */\r\nvar eliminateMaximum = function(dist, speed) {\r\n    let res = 0;\r\n    let len = dist.length;\r\n    let map = new Map();\r\n    for(let i=0; i<len; i++){\r\n        // the last time to eliminate\r\n        let a = Math.ceil(dist[i] / speed[i]);\r\n        if(map.has(a)){\r\n            let c = map.get(a);\r\n            c ++;\r\n            map.set(a, c);\r\n        }else{\r\n            map.set(a, 1);\r\n        }\r\n    }\r\n\r\n    let keys = Array.from(map.keys());\r\n    keys.sort((a, b) => a-b);\r\n    // time to eliminate\r\n    let t = 0;\r\n    for(let i=0; i<keys.length; i++){\r\n        let c = map.get(keys[i]);\r\n        if(c > keys[i]-t){\r\n            res += keys[i]-t;\r\n            break;\r\n        }else{\r\n            res += c;\r\n            t += c;\r\n        }\r\n    }\r\n\r\n    return res;\r\n};"
  }
}
