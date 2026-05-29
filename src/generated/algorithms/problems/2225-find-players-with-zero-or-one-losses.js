export default {
  "id": 2225,
  "name": "Find Players With Zero or One Losses",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-players-with-zero-or-one-losses",
  "relativeDir": "F/Find Players With Zero or One Losses",
  "slug": "2225-find-players-with-zero-or-one-losses",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 40,
    "python": 15,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 954 ms (Top 69.51%) | Memory: 160.9 MB (Top 95.44%)\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> findWinners(vector<vector<int>>& matches) {\r\n        unordered_map<int,int> umap;\r\n        vector<vector<int>> result(2);\r\n        for(int i=0;i<matches.size();i++)\r\n        {\r\n            umap[matches[i][1]]++;\r\n        }\r\n        for(auto i=umap.begin();i!=umap.end();i++)\r\n        {\r\n            if(i->second==1)\r\n            {\r\n                result[1].push_back(i->first);\r\n            }\r\n        }\r\n        for(int i=0;i<matches.size();i++)\r\n        {\r\n            if(umap[matches[i][0]]==0)\r\n            {\r\n                result[0].push_back(matches[i][0]);\r\n                umap[matches[i][0]]=1;\r\n            }\r\n        }\r\n\r\n        sort(result[0].begin(),result[0].end());\r\n\r\n        sort(result[1].begin(),result[1].end());\r\n\r\n        return result;\r\n    }\r\n};",
    "python": "# Runtime: 5248 ms (Top 5.11%) | Memory: 68.3 MB (Top 89.11%)\r\nclass Solution:\r\n    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:\r\n        winners, losers, table = [], [], {}\r\n        for winner, loser in matches:\r\n            # map[key] = map.get(key, 0) + change . This format ensures that KEY NOT FOUND error is always prevented.\r\n            # map.get(key, 0) returns map[key] if key exists and 0 if it does not.\r\n            table[winner] = table.get(winner, 0) # Winner\r\n            table[loser] = table.get(loser, 0) + 1\r\n        for k, v in table.items(): # Player k with losses v\r\n            if v == 0:\r\n                winners.append(k) # If player k has no loss ie v == 0\r\n            if v == 1:\r\n                losers.append(k) # If player k has one loss ie v == 1\r\n        return [sorted(winners), sorted(losers)] # Problem asked to return sorted arrays.",
    "java": "// Runtime: 22 ms (Top 99.73%) | Memory: 91.90 MB (Top 61.98%)\r\n\r\nclass Solution {\r\n    public List<List<Integer>> findWinners(int[][] matches) {\r\n        int[] losses = new int[100001];\r\n\r\n        for (int i = 0; i < matches.length; i++) {\r\n            int win = matches[i][0];\r\n            int loss = matches[i][1];\r\n\r\n            if (losses[win] == 0) {\r\n                losses[win] = -1;\r\n            } \r\n\r\n            if (losses[loss] == -1) {\r\n                losses[loss] = 1;\r\n            } else {\r\n                losses[loss]++;\r\n            }\r\n        }\r\n\r\n        List<Integer> zeroLoss = new ArrayList<>();\r\n        List<Integer> oneLoss = new ArrayList<>();\r\n\r\n        List<List<Integer>> result = new ArrayList<>();\r\n\r\n        for (int i = 0; i < losses.length; i++) {\r\n            if (losses[i] == -1) {\r\n                zeroLoss.add(i);\r\n            } else if (losses[i] == 1) {\r\n                oneLoss.add(i);\r\n            }\r\n        }\r\n\r\n        result.add(zeroLoss);\r\n        result.add(oneLoss);\r\n\r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 735 ms (Top 32.40%) | Memory: 116.4 MB (Top 54.23%)\r\n/**\r\n * @param {number[][]} matches\r\n * @return {number[][]}\r\n */\r\nvar findWinners = function(matches) {\r\n    var looser = {};\r\n    var allPlayer={};\r\n    for(var i=0; i<matches.length; i++)\r\n        {\r\n            if(looser[matches[i][1]])\r\n                looser[matches[i][1]]++;\r\n            else\r\n                looser[matches[i][1]]=1\r\n\r\n            if(!allPlayer[matches[i][0]])\r\n                allPlayer[matches[i][0]]=1\r\n            if(!allPlayer[matches[i][1]])\r\n                allPlayer[matches[i][1]]=1\r\n        }\r\n    var first=[], second=[];\r\n    for(var key in allPlayer)\r\n        {\r\n            if(!looser[key])\r\n                first.push(key);\r\n            if(looser[key] == 1)\r\n                second.push(key);\r\n        }\r\n    return [first, second]\r\n};"
  }
}
