export default {
  "id": 997,
  "name": "Find the Town Judge",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-town-judge",
  "relativeDir": "F/Find the Town Judge",
  "slug": "0997-find-the-town-judge",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 42,
    "python": 13,
    "javascript": 39
  },
  "languages": {
    "cpp": "// Runtime: 171 ms (Top 17.21%) | Memory: 69.00 MB (Top 40.7%)\r\n\r\nclass Solution {\r\npublic:\r\n    int findJudge(int N, vector<vector<int>>& trust) {\r\n        vector<int> Trusted(N + 1, 0);\r\n        for(auto person : trust){\r\n            Trusted[person[0]]--;\r\n            Trusted[person[1]]++;\r\n        }\r\n        for(int i = 1;i <= N;i++){\r\n            if(Trusted[i] == N - 1)\r\n                return i;\r\n        }\r\n        return -1;\r\n    }\r\n};",
    "python": "// Runtime: 623 ms (Top 88.48%) | Memory: 22.50 MB (Top 12.84%)\r\n\r\nclass Solution:\r\n    def findJudge(self, N: int, trust: List[List[int]]) -> int:\r\n        Trusted = [0] * (N+1)\r\n        for (a, b) in trust:\r\n            Trusted[a] -= 1\r\n            Trusted[b] += 1\r\n            \r\n        for i in range(1, len(Trusted)):\r\n            if Trusted[i] == N-1:\r\n                return i\r\n        return -1",
    "java": "// Runtime: 13 ms (Top 25.2%) | Memory: 50.15 MB (Top 25.4%)\r\n\r\nclass Solution {\r\n    public int findJudge(int n, int[][] trust) {\r\n        int count=0;\r\n        int x[]=new int[n+1];\r\n        int y[]=new int[n+1];\r\n         Arrays.fill(x, 0);\r\n         Arrays.fill(y, 0);\r\n        for(int i=0;i<trust.length;i++)\r\n        {\r\n            x[trust[i][0]]=1;\r\n        }\r\n        for(int i=1;i<=n;i++)\r\n        {\r\n            if(x[i]!=0)\r\n            count++;\r\n            if(x[i]==0)\r\n            y[i]=1;\r\n        }\r\n        if(count==n)\r\n        return -1;\r\n       for(int i=1;i<=n;i++)\r\n       System.out.println(y[i]);\r\n       int jud=0;\r\n         for(int i=1;i<=n;i++)\r\n        {\r\n            if(y[i]==1)\r\n            jud=i;\r\n        }\r\n        int c=0;\r\n        for(int i=0;i<trust.length;i++)\r\n        {\r\n            if(trust[i][1]==jud)\r\n            c++;\r\n        }\r\n        if(c==n-1)\r\n        return jud;\r\n        return -1;\r\n       \r\n    }\r\n}",
    "javascript": "// Runtime: 207 ms (Top 21.58%) | Memory: 50.5 MB (Top 79.28%)\r\nvar findJudge = function(n, trust) {\r\n    const length = trust.length;\r\n    let possibleJudge = [], judgeMap = new Map(), value, judge = -1;\r\n    for(let i = 0; i < length; i++) {\r\n        if(judgeMap.has(trust[i][0])){\r\n            value = judgeMap.get(trust[i][0]);\r\n            value.push(trust[i][1]);\r\n            judgeMap.set(trust[i][0], value);\r\n        }\r\n        else {\r\n            judgeMap.set(trust[i][0], [trust[i][1]]);\r\n        }\r\n    }\r\n    value = [];\r\n    for(let i = 1; i <= n; i++) {\r\n        if(!judgeMap.has(i)) {\r\n            possibleJudge.push(i);\r\n        }\r\n        else {\r\n            value.push([i,judgeMap.get(i)]);\r\n        }\r\n    }\r\n    if(!value.length || value.length !== n-1) {\r\n        if(possibleJudge.length === 1) return possibleJudge[0];\r\n        return judge;\r\n    }\r\n    for(let i = 0; i < possibleJudge.length; i++) {\r\n        judge = possibleJudge[i];\r\n        for(let j = 0; j < value.length; j++) {\r\n            if(value[j][1].indexOf(judge) < 0) {\r\n                judge = -1;\r\n                break;\r\n            }\r\n        }\r\n        if(judge !== -1) break;\r\n    }\r\n    return judge;\r\n};"
  }
}
