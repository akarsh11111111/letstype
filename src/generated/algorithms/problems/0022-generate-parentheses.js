export default {
  "id": 22,
  "name": "Generate Parentheses",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/generate-parentheses",
  "relativeDir": "G/Generate Parentheses",
  "slug": "0022-generate-parentheses",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 30,
    "python": 27,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 11.70 MB (Top 85.79%)\r\n\r\nclass Solution {\r\n    private:\r\n    void solve(int cnt1,int cnt2,int n,vector<string> &ans,string &op,int ind)\r\n    {\r\n        if(ind>=n*2)\r\n        {\r\n            ans.push_back(op);\r\n            return;}\r\n        if(cnt1<n and ind<n*2-1)\r\n        {\r\n            op+='(';\r\n            solve(cnt1+1,cnt2,n,ans,op,ind+1);\r\n            op.pop_back();\r\n        }\r\n        \r\n        if(cnt2<cnt1 and ind>0)\r\n        {\r\n            op+=')';\r\n \r\n            solve(cnt1,cnt2+1,n,ans,op,ind+1);\r\n            op.pop_back();\r\n        }\r\n        \r\n    }\r\npublic:\r\n    vector<string> generateParenthesis(int n) {\r\n         string op=\"\";\r\n        vector<string> ans;\r\n        solve(0,0,n,ans,op,0);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def generateParenthesis(self, n: int) -> list[str]:\r\n\r\n        # Initialize the result\r\n        res = []\r\n\r\n        # Recursively go through all possible combinations\r\n        def add(open, close, partialRes):\r\n\r\n            nonlocal res\r\n\r\n            # If we have added opening and closing parentheses n times, we reaches a solution\r\n            if open == close == n:\r\n                res.append(\"\".join(partialRes))\r\n                return\r\n\r\n            # Add a closing parenthesis to the partial result if we have at least 1 opening parenthesis\r\n            if close < open:\r\n                add(open, close + 1, partialRes + [\")\"])\r\n\r\n            # Add an opening parenthesis to the partial result if we haven't added n parenthesis yet\r\n            if open < n:\r\n                add(open + 1, close, partialRes + [\"(\"])\r\n\r\n        add(0, 0, [])\r\n\r\n        return res",
    "java": "class Solution {\r\n    List<String> s = new ArrayList<>();\r\n    public void get(int n, int x, String p)\r\n    {\r\n        if(n==0 && x==0)\r\n        {\r\n            s.add(p);\r\n            return;\r\n        }\r\n        if(n==0)\r\n        {\r\n            get(n,x-1,p+\")\");\r\n        }\r\n        else if(x==0)\r\n        {\r\n            get(n-1,x+1,p+\"(\");\r\n        }\r\n        else\r\n        {\r\n            get(n,x-1,p+\")\");\r\n            get(n-1,x+1,p+\"(\");\r\n        }\r\n    }\r\n    public List<String> generateParenthesis(int n) \r\n    {\r\n        s.clear();\r\n        get(n,0,\"\");\r\n        return s;\r\n    }\r\n}",
    "javascript": "// Runtime: 98 ms (Top 42.29%) | Memory: 42.5 MB (Top 72.31%)\r\nvar generateParenthesis = function(n) {\r\n    let ans = []\r\n    generate_parenthisis(n, 0, 0, \"\")\r\n    return ans\r\n\r\n    function generate_parenthisis(n, open, close, res){\r\n\r\n        if(open==n && close == n){\r\n            ans.push(res)\r\n            return\r\n        }\r\n\r\n        if(open<n){\r\n            generate_parenthisis(n, open+1, close, res + \"(\")\r\n        }\r\n\r\n        if(close<open){\r\n            generate_parenthisis(n, open, close+1, res+\")\")\r\n        }\r\n\r\n    }\r\n};"
  }
}
