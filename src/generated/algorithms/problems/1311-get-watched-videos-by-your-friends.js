export default {
  "id": 1311,
  "name": "Get Watched Videos by Your Friends",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/get-watched-videos-by-your-friends",
  "relativeDir": "G/Get Watched Videos by Your Friends",
  "slug": "1311-get-watched-videos-by-your-friends",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 47,
    "python": 20,
    "javascript": 44
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n  vector<string> watchedVideosByFriends(vector<vector<string>>& watchedVideos, vector<vector<int>>& friends, int id, int level) {\r\n    vector<vector<int>>graph(watchedVideos.size());\r\n    \r\n    for(int i = 0;i != friends.size(); i++)\r\n      for(auto &f: friends[i])\r\n        graph[f].push_back(i), graph[i].push_back(f);\r\n    \r\n    int tmp_level = 0;\r\n    vector<int>vis(watchedVideos.size(),0);\r\n    vector<string>ans;\r\n    \r\n    queue<int>q;\r\n    q.push(id);\r\n    while(!q.empty()){\r\n      if(tmp_level++ == level){\r\n        unordered_map<string,int>mp;\r\n        while(!q.empty()){\r\n          int t = q.front(); q.pop();\r\n          if(vis[t])continue;\r\n          vis[t] = 1;\r\n          for(auto &v: watchedVideos[t]) mp[v]++;\r\n        }\r\n        set<pair<int,string>>st;  \r\n        for(auto &[s, n]: mp) st.insert({n,s});\r\n        for(auto &it: st) ans.push_back(it.second);\r\n      }\r\n                    \r\n      int n = q.size();\r\n      while(n--){\r\n        int t = q.front(); q.pop();\r\n        if(vis[t])continue;\r\n        vis[t] = 1;\r\n        \r\n        for(auto &x: graph[t])\r\n          if(!vis[x]) q.push(x);\r\n      }\r\n    }\r\n    \r\n    return ans;\r\n  }\r\n};",
    "python": "class Solution:\r\n\tdef watchedVideosByFriends(self, watchedVideos: List[List[str]], friends: List[List[int]], id: int, level: int) -> List[str]:\r\n\t\tq=[id]\r\n\t\tvis=set([id])\r\n\t\tl=0\r\n\t\twhile l<level:\r\n\t\t\tnew_q=[]\r\n\t\t\tfor x in q:\r\n\t\t\t\tfor friend in friends[x]:\r\n\t\t\t\t\tif not friend in vis:\r\n\t\t\t\t\t\tvis.add(friend)\r\n\t\t\t\t\t\tnew_q.append(friend)\r\n\t\t\tq=new_q\r\n\t\t\tl+=1\r\n\t\ta=Counter()\r\n\t\tfor x in q:\r\n\t\t\tfor vids in watchedVideos[x]:\r\n\t\t\t\ta[vids]+=1\r\n\t\tA=sorted([[a[x],x] for x in a])\r\n\t\treturn [x[1] for x in A]",
    "java": "class Solution {\r\n    public List<String> watchedVideosByFriends(List<List<String>> watchedVideos, int[][] friends, int id, int level) {\r\n        int n = friends.length;\r\n        boolean[] visited = new boolean[n];\r\n        List<List<Integer>> graph = new ArrayList<>();\r\n        for(int i=0;i<n;i++) graph.add(new ArrayList<>());\r\n        for(int i=0;i<n;i++){\r\n            for(int j=0;j<friends[i].length;j++){\r\n                graph.get(i).add(friends[i][j]);\r\n            }\r\n        }\r\n        // System.out.println(graph.get(0));\r\n        Queue<Integer> queue = new ArrayDeque<>();\r\n        queue.offer(id);\r\n        visited[id] = true;\r\n        Map<String,Integer> answer = new HashMap<>();\r\n        while(!queue.isEmpty() && level>0){\r\n            int size = queue.size();\r\n            for(int i=0;i<size;i++){\r\n                int vertex = queue.remove();\r\n                for(int child: graph.get(vertex)){\r\n                    if(!visited[child]){\r\n                        //   if(level == 1) System.out.println(watchedVideos.get(child));\r\n                        if(level == 1) {\r\n                            for(String a: watchedVideos.get(child)){\r\n                                answer.put(a,answer.getOrDefault(a,0)+1);\r\n                            }\r\n                        }\r\n                        visited[child] = true;\r\n                        queue.offer(child);\r\n                    }\r\n                }\r\n            }\r\n            level--;\r\n        }\r\n        Queue<String[]> sortedQueue = new PriorityQueue<>((a,b)->{\r\n            if(a[1].equals(b[1])) return a[0].compareTo(b[0]);\r\n            return Integer.parseInt(a[1])-Integer.parseInt(b[1]);\r\n        });\r\n        for(String key: answer.keySet()){\r\n            sortedQueue.offer(new String[]{key,Integer.toString(answer.get(key))});\r\n        }\r\n        List<String> finalAnswer = new ArrayList<>();\r\n        while(!sortedQueue.isEmpty()) finalAnswer.add(sortedQueue.remove()[0]);\r\n        return finalAnswer;\r\n    }\r\n}",
    "javascript": "// Runtime: 300 ms (Top 33.33%) | Memory: 55.7 MB (Top 66.67%)\r\n/**\r\n * @param {string[][]} watchedVideos\r\n * @param {number[][]} friends\r\n * @param {number} id\r\n * @param {number} level\r\n * @return {string[]}\r\n */\r\nvar watchedVideosByFriends = function(watchedVideos, friends, id, level) {\r\n  const queue = [];\r\n  queue.push([id, 0]);\r\n  const seen = new Set();\r\n  const map = {};\r\n\r\n  while (queue.length > 0) {\r\n    const [id, _level] = queue.shift();\r\n    if (seen.has(id)) {\r\n      continue;\r\n    }\r\n    seen.add(id);\r\n    if (_level == level) {\r\n      for (const video of watchedVideos[id]) {\r\n        if (!map[video]) {\r\n          map[video] = 1\r\n        } else {\r\n          map[video] += 1;\r\n        }\r\n      }\r\n      continue;\r\n    }\r\n\r\n    for (const f of friends[id]) {\r\n      queue.push([f, _level + 1]);\r\n    }\r\n  }\r\n\r\n  return Object.keys(map).sort((a, b) => {\r\n    const diff = map[a] - map[b];\r\n    if (diff == 0) {\r\n      return a.localeCompare(b);\r\n    }\r\n    return diff;\r\n  })\r\n};"
  }
}
