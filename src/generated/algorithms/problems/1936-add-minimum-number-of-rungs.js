export default {
  "id": 1936,
  "name": "Add Minimum Number of Rungs",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/add-minimum-number-of-rungs",
  "relativeDir": "A/Add Minimum Number of Rungs",
  "slug": "1936-add-minimum-number-of-rungs",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 47,
    "java": 14,
    "python": 9,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int addRungs(vector<int>& rungs, int dist) \r\n    {\r\n         //to keep the track of the number of extra rung to be added\r\n         long long int count = 0;\r\n       \r\n         //our curr pos at the beggining\r\n         long long int currpos = 0;\r\n\r\n         //to keep the track of the next pos to be climed\r\n         long long int nextposidx = 0;\r\n\r\n         while(true)\r\n         {\r\n             if(currpos == rungs[rungs.size()-1])\r\n             {\r\n                 break;\r\n             }\r\n\r\n             if((rungs[nextposidx] - currpos) <= dist)\r\n             {\r\n                 currpos = rungs[nextposidx];\r\n                 nextposidx++;\r\n             }\r\n             else\r\n             {\r\n                 //cout<<\"hello\"<<endl;\r\n                 long long int temp = (rungs[nextposidx] - currpos);\r\n                 //cout<<\"temp = \"<<temp<<endl;\r\n                 \r\n                 if((temp%dist) == 0)\r\n                 {\r\n                     long long int val = temp/dist;\r\n                     count = count + (val - 1);\r\n                 }\r\n                 else\r\n                 {\r\n                    long long int val = floor(((temp*1.00)/(dist*1.00)));\r\n                    count = count + (val);\r\n                 }\r\n                 currpos = rungs[nextposidx];\r\n             }\r\n         }\r\n         return count;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def addRungs(self, rungs: List[int], dist: int) -> int:\r\n        rungs=[0]+rungs\r\n        i,ans=1,0\r\n        while i<len(rungs): \r\n            if rungs[i]-rungs[i-1] > dist:\r\n                ans+=ceil((rungs[i]-rungs[i-1])/dist)-1\r\n            i+=1\r\n        return ans",
    "java": "// Runtime: 4 ms (Top 46.95%) | Memory: 72.5 MB (Top 49.39%)\r\nclass Solution {\r\n    public int addRungs(int[] rungs, int dist) {\r\n        int ans = 0;\r\n        for (int i=0 ; i<rungs.length ; i++) {\r\n            int d = (i==0) ? rungs[i] : rungs[i] - rungs[i-1];\r\n            if ( d > dist ) {\r\n                ans += d/dist;\r\n                ans += ( d%dist == 0 ) ? -1 : 0;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 129 ms (Top 42.86%) | Memory: 49.9 MB (Top 85.71%)\r\nvar addRungs = function(rungs, dist) {\r\n    let res = 0;\r\n    let prev = 0;\r\n    for ( let i = 0; i < rungs.length; i++ ){\r\n        res += Math.floor(( rungs[i] - prev - 1 ) / dist );\r\n        prev = rungs[i];\r\n    }\r\n    return res;\r\n};"
  }
}
