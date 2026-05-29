export default {
  "id": 554,
  "name": "Brick Wall",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/brick-wall",
  "relativeDir": "B/Brick Wall",
  "slug": "0554-brick-wall",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 23,
    "python": 14,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 31 ms (Top 87.54%) | Memory: 21.90 MB (Top 67.02%)\r\n\r\nclass Solution {\r\npublic:\r\n    int leastBricks(vector<vector<int>>& wall) \r\n    {\r\n        unordered_map<int, int> edge_frequency;     //HashMap to store the number of common edges among the rows\r\n        int max_frequency = 0;         //Variable to store the frequency of most occuring edge\r\n        \r\n        for(int row=0; row<wall.size(); row++)        //Iterating through each row\r\n        {\r\n            int edge_postion = 0;       //Variable to store different edge postion\r\n            \r\n            for(int brick_no=0; brick_no< wall[row].size() -1; brick_no++)    //Iterating through each brick inside a row\r\n            { \r\n                int current_brick_length = wall[row][brick_no];  //Length of the current brick\r\n                edge_postion = edge_postion + current_brick_length ;  //Next Edge Position = Previous Edge Position + Current Brick's Length\r\n                edge_frequency[edge_postion]++;  //Incrementing the Frequency of just calculated Edge Postion\r\n                max_frequency = max(edge_frequency[edge_postion],max_frequency);  //Comparing the \"Frequency of just calculated Edge Postion\" with \"Max Frequency seen till now\" & storing whichever is greater.\r\n            }\r\n        }\r\n        return wall.size() - max_frequency; // returning (Number of Bricks Crossed by Line) i.e. (Number of Rows in Wall - Frequency of Most Occuring Edge) \r\n    }\r\n};",
    "python": "class Solution:\r\n    def leastBricks(self, wall: List[List[int]]) -> int:\r\n        m = len(wall)\r\n        ctr = {}\r\n        res = m\r\n        for i in range(m):\r\n            n = len(wall[i])\r\n            curr = 0\r\n            for j in range(n - 1):\r\n                curr += wall[i][j]\r\n                x = ctr.get(curr, m) - 1\r\n                ctr[curr] = x\r\n                res = min(res, x)\r\n        return res",
    "java": "// Runtime: 16 ms (Top 21.1%) | Memory: 46.16 MB (Top 61.8%)\r\n\r\nclass Solution {\r\n    public int leastBricks(List<List<Integer>> wall) \r\n    {\r\n        HashMap<Integer, Integer> edge_frequency = new HashMap<>(); //HashMap to store the number of common edges among the rows\r\n        int max_frequency = 0; //Variable to store the frequency of most occuring edge\r\n        \r\n        for(int row=0; row<wall.size(); row++) //Iterating through each row\r\n        {\r\n            int edge_postion = 0; //Variable to store different edge postion\r\n            \r\n            for(int brick_no=0; brick_no<wall.get(row).size()-1; brick_no++) //Iterating through each brick inside a row\r\n            {\r\n                int current_brick_length = wall.get(row).get(brick_no); //Length of the current brick\r\n                edge_postion = edge_postion + current_brick_length; //Next Edge Position = Previous Edge Position + Current Brick's Length\r\n                edge_frequency.put(edge_postion,edge_frequency.getOrDefault(edge_postion,0)+1); //Incrementing the Frequency of just calculated Edge Postion\r\n                max_frequency = Math.max(edge_frequency.get(edge_postion),max_frequency); //Comparing the \"Frequency of just calculated Edge Postion\" with \"Max Frequency seen till now\" & storing whichever is greater.\r\n            }\r\n        }\r\n        return wall.size() - max_frequency; // returning (Number of Bricks Crossed by Line) i.e. (Number of Rows in Wall - Frequency of Most Occuring Edge)\r\n    }\r\n}",
    "javascript": "var leastBricks = function(wall) {\r\n\tconst hash = wall.reduce((map, row) => {\r\n\t\tlet sum = 0;\r\n\r\n\t\tfor (let index = 0; index < row.length - 1; index++) {\r\n\t\t\tsum += row[index];\r\n\t\t\tconst hashCount = map.get(sum) ?? 0;\r\n\t\t\tmap.set(sum, hashCount + 1);\r\n\t\t}\r\n\t\treturn map;\r\n\t}, new Map());\r\n\r\n\tlet result = wall.length;\r\n\thash.forEach(value => result = Math.min(result, wall.length - value));\r\n\r\n\treturn result;\r\n};"
  }
}
