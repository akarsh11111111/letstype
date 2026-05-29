export default {
  "id": 1847,
  "name": "Closest Room",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/closest-room",
  "relativeDir": "C/Closest Room",
  "slug": "1847-closest-room",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 33,
    "python": 33
  },
  "languages": {
    "cpp": "// Runtime: 1335 ms (Top 26.39%) | Memory: 149.2 MB (Top 71.30%)\r\nclass Solution {\r\npublic:\r\n    vector<int> closestRoom(vector<vector<int>>& rooms, vector<vector<int>>& queries) {\r\n        const int n = rooms.size(), m = queries.size();\r\n        for(int i = 0; i < m; i++) queries[i].push_back(i);\r\n        sort(begin(queries), end(queries), [](const auto& a, const auto& b){return a[1] > b[1];});\r\n        sort(begin(rooms), end(rooms), [](const auto& a, const auto& b){return a[1] > b[1];});\r\n        vector<int> ans(m, -1);\r\n        set<int> ids;\r\n        int j = 0;\r\n        for(const auto& q: queries){\r\n            while(j < n && rooms[j][1] >=q[1]) ids.insert(rooms[j++][0]);\r\n            if(ids.empty()) continue;\r\n            int id = q[0];\r\n            auto it = ids.lower_bound(id);\r\n            int id1 = (it != end(ids) )? *it : INT_MAX;\r\n            int id2 = id1;\r\n            if(it != begin(ids)) id2 = *prev(it);\r\n            ans[q[2]] = abs(id1 - id) < abs(id2 - id) ? id1 : id2;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 1741 ms (Top 100.0%) | Memory: 67.86 MB (Top 93.7%)\r\n\r\nclass Solution:\r\n    def closestRoom(self, rooms: List[List[int]], queries: List[List[int]]) -> List[int]:\r\n        ans = [0] * len(queries)\r\n        \r\n        # sort queries to handle largest size queries first\r\n        q = deque(sorted([(size, room, i) for i, (room, size) in enumerate(queries)], key=lambda a: (-a[0], a[1], a[2])))\r\n\r\n        # sort rooms by descending size\r\n        rooms = deque(sorted(rooms, key=lambda x: -x[1]))\r\n\r\n        # current available room ids\r\n        cands = []\r\n        \r\n        \r\n        while q:\r\n            size, room, i = q.popleft()\r\n            # add room ids to candidates as long as top of room size meet the requirements\r\n            while rooms and rooms[0][1] >= size:\r\n                bisect.insort(cands, rooms.popleft()[0])\r\n                    \r\n            # if no room size available, return -1\r\n            if not cands: ans[i] = -1\r\n                \r\n            # else use bisect to find optimal room ids\r\n            else:\r\n                loc = bisect.bisect_left(cands, room)\r\n                if loc == 0: ans[i] = cands[loc]\r\n                elif loc == len(cands): ans[i] = cands[-1]\r\n                else: ans[i] = cands[loc - 1] if room - cands[loc - 1] <= cands[loc] - room else cands[loc]\r\n        \r\n        return ans",
    "java": "// Runtime: 164 ms (Top 39.53%) | Memory: 127.2 MB (Top 83.72%)\r\nclass Solution {\r\n    public int[] closestRoom(int[][] rooms, int[][] queries) {\r\n        int n = rooms.length, k = queries.length;\r\n        Integer[] indexes = new Integer[k];\r\n        for (int i = 0; i < k; i++) indexes[i] = i;\r\n        Arrays.sort(rooms, (a, b) -> Integer.compare(b[1], a[1])); //Sort by decreasing order of room size\r\n        Arrays.sort(indexes, (a, b) -> Integer.compare(queries[b][1], queries[a][1])); // Sort by decreasing order of query minSize\r\n        TreeSet<Integer> roomIdsSoFar = new TreeSet<>();\r\n        int[] ans = new int[k];\r\n        int i = 0;\r\n        for (int index : indexes) {\r\n            while (i < n && rooms[i][1] >= queries[index][1]) { // Add id of the room which its size >= query minSize\r\n                roomIdsSoFar.add(rooms[i++][0]);\r\n            }\r\n            ans[index] = searchClosetRoomId(roomIdsSoFar, queries[index][0]);\r\n        }\r\n        return ans;\r\n    }\r\n    int searchClosetRoomId(TreeSet<Integer> treeSet, int preferredId) {\r\n        Integer floor = treeSet.floor(preferredId);\r\n        Integer ceiling = treeSet.ceiling(preferredId);\r\n        int ansAbs = Integer.MAX_VALUE, ans = -1;\r\n        if (floor != null) {\r\n            ans = floor;\r\n            ansAbs = Math.abs(preferredId - floor);\r\n        }\r\n        if (ceiling != null && ansAbs > Math.abs(preferredId - ceiling)) {\r\n            ans = ceiling;\r\n        }\r\n        return ans;\r\n    }\r\n}"
  }
}
