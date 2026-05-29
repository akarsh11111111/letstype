export default {
  "id": 506,
  "name": "Relative Ranks",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/relative-ranks",
  "relativeDir": "R/Relative Ranks",
  "slug": "0506-relative-ranks",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 16,
    "python": 20,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<string> findRelativeRanks(vector<int>& score) {\r\n        int n=score.size();\r\n        vector<string> vs(n);\r\n        unordered_map<int,int> mp;\r\n        for(int i=0; i<score.size(); i++){\r\n            mp[score[i]]=i;\r\n        }\r\n        sort(score.begin(),score.end(),greater<int>());\r\n        for(int i=0; i<score.size(); i++){\r\n            int temp=mp[score[i]];\r\n            if(i==0){\r\n                vs[temp]=\"Gold Medal\";\r\n                continue;\r\n            }\r\n            if(i==1){\r\n                vs[temp]=\"Silver Medal\";\r\n                continue;\r\n            }\r\n            if(i==2){\r\n                 vs[temp]=\"Bronze Medal\";\r\n                 continue;\r\n            }\r\n            int t=i+1;\r\n            string st= to_string(t);\r\n            vs[temp]=st;\r\n        }\r\n        return vs;\r\n    }\r\n};",
    "python": "# Runtime: 162 ms (Top 33.91%) | Memory: 15.3 MB (Top 22.09%)\r\nclass Solution:\r\n    def findRelativeRanks(self, score: List[int]) -> List[str]:\r\n        scores_ids = []\r\n        for i in range(len(score)):\r\n            scores_ids.append((score[i], i))\r\n        scores_ids.sort(reverse=True)\r\n\r\n        ans = [0] * len(scores_ids)\r\n        for i in range(len(scores_ids)):\r\n            ans[scores_ids[i][1]] = str(i+1)\r\n\r\n        try:\r\n            ans[scores_ids[0][1]] = \"Gold Medal\"\r\n            ans[scores_ids[1][1]] = \"Silver Medal\"\r\n            ans[scores_ids[2][1]] = \"Bronze Medal\"\r\n        except:\r\n            pass\r\n\r\n        return ans",
    "java": "class Solution {\r\n    public String[] findRelativeRanks(int[] score) {\r\n        String[] res = new String[score.length];\r\n        TreeMap<Integer, Integer> map = new TreeMap<>();\r\n        for(int i = 0; i < score.length; i++)   map.put(score[i], i);\r\n        int rank = score.length;\r\n        for(Map.Entry<Integer, Integer> p: map.entrySet()){\r\n            if(rank == 1)   res[p.getValue()] = \"Gold Medal\";\r\n            else if(rank == 2)   res[p.getValue()] = \"Silver Medal\";\r\n            else if(rank == 3)   res[p.getValue()] = \"Bronze Medal\";\r\n            else    res[p.getValue()] = String.valueOf(rank);\r\n            rank--;\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 128 ms (Top 66.24%) | Memory: 44.7 MB (Top 73.31%)\r\nvar findRelativeRanks = function(score) {\r\n    let output=score.slice(0);\r\n    let map={};\r\n    score.sort((a,b)=>b-a).forEach((v,i)=>map[v]=i+1);\r\n    for(let item in map){\r\n        if(map[item]==1){map[item]=\"Gold Medal\"};\r\n        if(map[item]==2){map[item]=\"Silver Medal\"};\r\n        if(map[item]==3){map[item]=\"Bronze Medal\"};\r\n    }\r\n    return output.map(v=>map[v]+\"\"); // +\"\": num=>str.\r\n};"
  }
}
