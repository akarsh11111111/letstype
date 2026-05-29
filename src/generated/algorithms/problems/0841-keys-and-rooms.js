export default {
  "id": 841,
  "name": "Keys and Rooms",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/keys-and-rooms",
  "relativeDir": "K/Keys and Rooms",
  "slug": "0841-keys-and-rooms",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 39,
    "python": 35,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 23 ms (Top 5.63%) | Memory: 11.70 MB (Top 10.19%)\r\n\r\nclass Solution {\r\n    void dfs(vector<vector<int>>& rooms, unordered_set<int> & keys, unordered_set<int> & visited, int curr) {\r\n        visited.insert(curr);\r\n        for (int k : rooms[curr]) keys.insert(k);\r\n        for (int k : keys) if (visited.find(k) == visited.end()) dfs(rooms, keys, visited, k);\r\n    }\r\n    \r\npublic:\r\n    bool canVisitAllRooms(vector<vector<int>>& rooms) {\r\n        unordered_set<int> keys;\r\n        unordered_set<int> visited;\r\n        dfs(rooms, keys, visited, 0);\r\n        return visited.size() == rooms.size();\r\n    }\r\n};",
    "python": "class Solution:\r\n    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:\r\n        # Create a set of for rooms visited\r\n        visited_rooms = set()\r\n        \r\n        # Create a queue to do a breadth first search visiting rooms\r\n        # Append the first room, 0, to the queue to begin the search\r\n        queue = collections.deque()\r\n        queue.append(0)\r\n        \r\n        # Perform the breadth first search with the queue\r\n        while queue:\r\n            for _ in range(0, len(queue)):\r\n                # Search the room\r\n                room_number = queue.popleft()\r\n                \r\n                # If we haven't visited the room, get the keys from the room\r\n                if room_number not in visited_rooms:\r\n                \r\n                    # Collect the keys from the room\r\n                    found_keys = rooms[room_number]\r\n                    \r\n                    # Add the keys to the queue so they can be tested\r\n                    for key in found_keys:\r\n                        queue.append(key)\r\n                        \r\n                    # Add the current room to the visited set\r\n                    visited_rooms.add(room_number)\r\n        \r\n        # If we visited all of the rooms, then the number of visited rooms should be\r\n        # equal to the number of total rooms\r\n        if len(visited_rooms) == len(rooms):\r\n            return True\r\n        \r\n        return False",
    "java": "class Solution {\r\n    public boolean canVisitAllRooms(List<List<Integer>> rooms) {\r\n    \t\t boolean[] visited = new boolean[rooms.size()];\r\n    \t\t visited[0]= true;\r\n    \t\t for(int a:rooms.get(0))\r\n    \t\t {\r\n    \t\t\t if(!visited[a])\r\n    \t\t\t {\r\n    \t\t\t\t bfs(a, visited, rooms.size()-1, rooms);\r\n    \t\t\t\t \r\n    \t\t\t }\r\n    \t\t }\r\n    \t\t //System.out.println(\"arr -->>\"+Arrays.toString(visited));\r\n    \t\tfor(boolean a:visited)\r\n    \t\t{\r\n    \t\t\tif(!a)\r\n    \t\t\t\treturn false;\r\n    \t\t}\r\n    \t      return true;\r\n    \t        \r\n    \t    }\r\n    \t public void bfs(int key, boolean[] vivsted, int target,List<List<Integer>> rooms)\r\n    \t {\r\n    \t\t\r\n    \t\t\r\n    \t\t vivsted[key] = true;\r\n    \t\t for(int a:rooms.get(key))\r\n    \t\t {\r\n    \t\t\t if(!vivsted[a])\r\n    \t\t\t {\r\n    \t\t\t\t bfs(a, vivsted, target, rooms);\r\n    \t\t\t }\r\n    \t\t }\r\n    \t\t \r\n    \t\t \r\n    \t\t\r\n    \t }\r\n       \r\n}",
    "javascript": "// Runtime: 107 ms (Top 32.92%) | Memory: 43.9 MB (Top 83.84%)\r\nfunction dfs(current,all,visited){\r\n    if(visited.size==all.length){\r\n        return true;\r\n    }\r\n    for(let i=0;i<all[current].length;i++){\r\n        if(!visited.has(all[current][i])){\r\n            visited.add(all[current][i]);\r\n            if(dfs(all[current][i],all,visited))\r\n                return true;\r\n        }\r\n\r\n    }\r\n    return false;\r\n\r\n}\r\nvar canVisitAllRooms = function(rooms) {\r\n    let visited=new Set();\r\n    visited.add(0);\r\n    if (dfs(0,rooms,visited)) return true;\r\n    return false;\r\n};"
  }
}
