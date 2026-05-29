export default {
  "id": 686,
  "name": "Repeated String Match",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/repeated-string-match",
  "relativeDir": "R/Repeated String Match",
  "slug": "0686-repeated-string-match",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 19,
    "python": 13,
    "javascript": 10
  },
  "languages": {
    "cpp": "// Runtime: 246 ms (Top 22.18%) | Memory: 480.2 MB (Top 5.04%)\r\nclass Solution {\r\npublic:\r\n    int repeatedStringMatch(string a, string b) {\r\n        int m=a.size(); int n=b.size();\r\n        vector<int>d; int mod=n%m; int h=n/m;\r\n\r\n        if(mod==0)\r\n        {d.push_back(h); d.push_back(h+1); }\r\n        else\r\n        { d.push_back(h+1); d.push_back(h+2); }\r\n        string s=\"\"; string t=\"\";\r\n\r\n        for(int i=0;i<d[0];i++)\r\n        {s+=a;}\r\n        for(int i=0;i<d[1];i++)\r\n        {t+=a;}\r\n\r\n        int i=0; int y1=s.size()-n; int y2=t.size()-n;\r\n\r\n        while(i<=y1)\r\n        {\r\n            string x=s.substr(i,n); //cout<<x;\r\n            if(x==b){return d[0]; break;}\r\n            i++;\r\n        }\r\n        i=0;\r\n        while(i<=y2)\r\n        {\r\n            string x=t.substr(i,n); //cout<<\"ok1\"<<x;\r\n            if(x==b){return d[1]; break;}\r\n            i++;\r\n        }\r\n        return -1;\r\n\r\n    }\r\n};",
    "python": "// Runtime: 30 ms (Top 95.42%) | Memory: 16.60 MB (Top 60.78%)\r\n\r\nclass Solution:\r\n    def repeatedStringMatch(self, A: str, B: str) -> int:\r\n        if len(A) >= len(B):\r\n            if B in A: return 1\r\n            elif B in A*2: return 2\r\n            else: return -1\r\n        prefix = max(0, B.find(A)) #prefix -- length of A1\r\n        repeat, postfix = divmod(len(B)-prefix, len(A)) #postfix -- length of A2\r\n        repeat += bool(prefix) + bool(postfix)\r\n        if B in A * repeat: return repeat\r\n        else: return -1",
    "java": "// Runtime: 305 ms (Top 62.11%) | Memory: 113.5 MB (Top 30.98%)\r\nclass Solution {\r\n    public int repeatedStringMatch(String a, String b) {\r\n        String copyA = a;\r\n        int count =1;\r\n        int repeat = b.length()/a.length();\r\n        for(int i=0;i<repeat+2;i++){\r\n            if(a.contains(b)){\r\n                return count;\r\n            }\r\n            else{\r\n                a+=copyA;\r\n                count++;\r\n            }\r\n        }\r\n        return -1;\r\n\r\n    }\r\n}",
    "javascript": "// Runtime: 116 ms (Top 37.33%) | Memory: 42.7 MB (Top 57.33%)\r\n\r\nvar repeatedStringMatch = function(a, b) {\r\n    const initRepeatTimes = Math.ceil(b.length / a.length);\r\n    const isMatch = (times) => a.repeat(times).includes(b);\r\n\r\n    if (isMatch(initRepeatTimes)) return initRepeatTimes;\r\n    if (isMatch(initRepeatTimes + 1)) return initRepeatTimes + 1;\r\n    return -1;\r\n};"
  }
}
