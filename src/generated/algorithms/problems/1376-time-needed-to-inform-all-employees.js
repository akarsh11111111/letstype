export default {
  "id": 1376,
  "name": "Time Needed to Inform All Employees",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/time-needed-to-inform-all-employees",
  "relativeDir": "T/Time Needed to Inform All Employees",
  "slug": "1376-time-needed-to-inform-all-employees",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 23,
    "python": 17,
    "javascript": 35
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int ans = INT_MIN, tmp=0;\r\n    unordered_map<int, vector<int>> mp;//manager to each subordination\r\n    vector<int>* pInformTime;\r\n    int numOfMinutes(int n, int headID, vector<int>& manager, vector<int>& informTime) {\r\n        pInformTime = &informTime;\r\n        for(int i = 0; i<n;i++) mp[manager[i]].push_back(i);\r\n        dfs(headID);\r\n        return ans;\r\n    }\r\n    void dfs(int i) {\r\n        if(mp.find(i) == mp.end()) {\r\n            ans = max(ans, tmp);\r\n        } else {\r\n            tmp+=(*pInformTime)[i];\r\n            for(auto&c: mp[i]) dfs(c);\r\n            tmp-=(*pInformTime)[i];\r\n        }\r\n    }\r\n};",
    "python": "import queue\r\nclass Solution:\r\n\tdef numOfMinutes(self, n: int, headID: int, manager: List[int],time: List[int]) -> int:\r\n\t\tnodes = []\r\n\t\tfor i in range(n): nodes.append([])\r\n\t\tfor i in range(n): \r\n\t\t\tif i != headID: nodes[manager[i]].append(i)\r\n\r\n\t\tq = queue.LifoQueue()\r\n\t\tq.put([headID,0])\r\n\t\tans = 0\r\n\t\twhile not q.empty():\r\n\t\t\tcur = q.get()\r\n\t\t\tfor nxt in nodes[cur[0]]:\r\n\t\t\t\tq.put([nxt,cur[1]+time[cur[0]]])\r\n\t\t\t\tans = max(ans,cur[1]+time[cur[0]])\r\n\t\treturn ans",
    "java": "// Runtime: 89 ms (Top 45.5%) | Memory: 63.76 MB (Top 32.3%)\r\n\r\nclass Solution {\r\n    public int numOfMinutes(int n, int headID, int[] manager, int[] informTime) {\r\n        Map<Integer, List<Integer>> graph = new HashMap<>();\r\n        for(int i=0; i<n; i++) {\r\n            graph.putIfAbsent(manager[i], new ArrayList<>());\r\n            graph.get(manager[i]).add(i);\r\n        }\r\n        return dfs(graph, headID, informTime);\r\n    }\r\n\r\n    int dfs(Map<Integer, List<Integer>> graph, int curHead, int[] informTime) {\r\n        int curMax = 0;\r\n        if(!graph.containsKey(curHead)){\r\n            return curMax;\r\n        }\r\n        for(int subordinate : graph.get(curHead)) {\r\n            curMax = Math.max(curMax, dfs(graph, subordinate, informTime));\r\n        }\r\n        return curMax + informTime[curHead];\r\n    }\r\n}",
    "javascript": "// Runtime: 742 ms (Top 20.63%) | Memory: 110.7 MB (Top 51.35%)\r\nvar numOfMinutes = function(n, headID, manager, informTime) {\r\n\r\n// Build the tree structure\r\n    let tree = {}\r\n\r\n// {manager: direct employee}\r\n    for (let i = 0 ; i < manager.length ; i++){\r\n// the head of the company does not have a manager\r\n        if (i === headID){\r\n            continue\r\n        }\r\n        let m = manager[i]\r\n        if (!tree[m]){\r\n            tree[m] = []\r\n        }\r\n        tree[m].push(i)\r\n    }\r\n\r\n// BFS\r\n// [employee, time to inform the head]\r\n    let queue = [[headID, 0]]\r\n    let res = 0\r\n\r\n    while (queue.length){\r\n        let [emp, currTime] = queue.shift()\r\n        let children = tree[emp] || []\r\n        for (let child of children){\r\n            res = Math.max(res, informTime[emp] + currTime)\r\n            queue.push([child, informTime[emp] + currTime])\r\n        }\r\n    }\r\n\r\n    return res\r\n};"
  }
}
