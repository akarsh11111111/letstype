export default {
  "id": 1817,
  "name": "Finding the Users Active Minutes",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/finding-the-users-active-minutes",
  "relativeDir": "F/Finding the Users Active Minutes",
  "slug": "1817-finding-the-users-active-minutes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 30,
    "python": 18,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 209 ms (Top 72.33%) | Memory: 91.00 MB (Top 60.25%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> findingUsersActiveMinutes(vector<vector<int>>& logs, int k) {\r\n        unordered_map<int,set<int>> map;\r\n        vector<int> res(k,0);\r\n        for(auto &log : logs){\r\n            map[log[0]].insert(log[1]);\r\n        }\r\n        for(auto i : map){\r\n            res[i.second.size()-1]++;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findingUsersActiveMinutes(self, logs: List[List[int]], k: int) -> List[int]:\r\n        ret = [0] * k  # UAM store\r\n        user_acts = {}  # User minutes store\r\n        \r\n        # Adding user minutes to hash table\r\n\t\tfor log in logs:\r\n            if user_acts.get(log[0], 0):\r\n                user_acts[log[0]].append(log[1])\r\n            else:\r\n                user_acts[log[0]] = [log[1]]\r\n                \r\n        # Calculating UAM\r\n\t\tfor k, v in user_acts.items():\r\n            l = len(set(v))\r\n            ret[l-1] += 1\r\n    \r\n        return ret",
    "java": "// Runtime: 18 ms (Top 74.46%) | Memory: 56.30 MB (Top 38.32%)\r\n\r\nclass Solution {\r\n    public int[] findingUsersActiveMinutes(int[][] logs, int k) {\r\n        // create a hashmap to record the ids of users \r\n        // and a set to store the minutes in which they were active\r\n        Map<Integer, Set<Integer>> map = new HashMap<>();\r\n        for (int[] l : logs) {\r\n            // l[0] -> id, l[1] -> active minute\r\n            map.putIfAbsent(l[0], new HashSet<>()); // if new id\r\n            map.get(l[0]).add(l[1]);  // add the minute of activeness to the set\r\n        }\r\n\r\n        // create answer array\r\n        int[] ans = new int[k];     \r\n        for (int id : map.keySet()) {\r\n            // the set contains all the minutes in which the id was active\r\n            // so the set size will be the number of active minutes\r\n            // or the 'User Active Minutes' (UAM)\r\n            int uam = map.get(id).size();\r\n            // each index in ans array is a UAM, \r\n            // and we need to put the number of users having that UAM\r\n            // whenever we enocunter a UAM, we increment the value in array\r\n            // which means we have found one more user with the same UAM\r\n            ans[uam-1]++;  // since array is 1 based indexing, we substract 1\r\n        }\r\n\r\n        return ans;     // return ans array\r\n    }\r\n}",
    "javascript": "// Runtime: 457 ms (Top 37.59%) | Memory: 71.1 MB (Top 76.60%)\r\nvar findingUsersActiveMinutes = function(logs, k) {\r\n    const map = new Map();\r\n\r\n    for (const [userID, minute] of logs) {\r\n        if (!map.has(userID)) map.set(userID, new Set());\r\n        map.get(userID).add(minute);\r\n    }\r\n\r\n    const count = new Array(k).fill(0);\r\n\r\n    for (const actions of map.values()) {\r\n        count[actions.size - 1]++;\r\n    }\r\n\r\n    return count;\r\n};"
  }
}
