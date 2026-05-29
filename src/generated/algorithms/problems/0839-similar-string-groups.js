export default {
  "id": 839,
  "name": "Similar String Groups",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/similar-string-groups",
  "relativeDir": "S/Similar String Groups",
  "slug": "0839-similar-string-groups",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 34,
    "python": 29,
    "javascript": 41
  },
  "languages": {
    "cpp": "// Runtime: 97 ms (Top 54.91%) | Memory: 10.70 MB (Top 62.14%)\r\n\r\nclass Solution {\r\npublic:\r\n    bool similar(string &s,string &t){\r\n        int dif=0;\r\n        for(int i=0;i<s.size();i++){\r\n            if(s[i]!=t[i]){\r\n                dif++;\r\n            }\r\n        }\r\n        return dif<=2;\r\n    }\r\n    void dfs(int node,vector<int>&vis,vector<vector<int>>&graph){\r\n        vis[node]=1;\r\n        for(auto&child:graph[node]){\r\n            if(!vis[child]){\r\n                dfs(child,vis,graph);\r\n            }\r\n        }\r\n    }\r\n    int numSimilarGroups(vector<string>& strs) {\r\n        int n=strs.size();\r\n        vector<vector<int>>graph(strs.size());\r\n        for(int i=1;i<n;i++){\r\n            for(int j=0;j<i;j++){\r\n                if(similar(strs[i],strs[j])){\r\n                    graph[i].push_back(j);\r\n                    graph[j].push_back(i);\r\n                }\r\n            }\r\n        }\r\n        int ans=0;\r\n        vector<int>vis(n);\r\n        for(int i=0;i<n;i++){\r\n            if(!vis[i]){\r\n                dfs(i,vis,graph);\r\n                ans++;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 5068 ms (Top 15.23%) | Memory: 14.3 MB (Top 64.62%)\r\nclass Solution: #839. Similar String Groups\r\n    def numSimilarGroups(self, strs: List[str]) -> int:\r\n        #memo\r\n        visited = set()\r\n        count = 0\r\n        for i in range(len(strs)):\r\n            if i not in visited:\r\n                #dfs\r\n                self.dfs(strs, i, visited)\r\n                #add a new connected area\r\n                count += 1\r\n        return count\r\n\r\n    #dfs to search the similar string from 0 to n-1\r\n    def dfs(self, strs, i, visited):\r\n        #add current string to memo\r\n        visited.add(i)\r\n        for j in range(len(strs)):\r\n            if self.isSimilar(strs[i], strs[j]) and j not in visited:\r\n                self.dfs(strs, j , visited)\r\n\r\n    # calculate the similarity of two strings\r\n    def isSimilar(self, str1, str2):\r\n        diff_count = 0\r\n        for i in range(len(str1)):\r\n            if str1[i] != str2[i]:\r\n                diff_count += 1\r\n        return diff_count <= 2",
    "java": "class Solution {\r\n    public int numSimilarGroups(String[] strs) {\r\n        boolean[] visited = new boolean[strs.length]; // record the word that we checked\r\n        int res = 0;\r\n        for (int i = 0; i < strs.length; i++) {\r\n            if (!visited[i]) {\r\n                res++;\r\n                dfs(strs, visited, i);\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n    \r\n    void dfs(String[] strs, boolean[] visited, int index) { // explore all similar words we can explore\r\n        visited[index] = true;\r\n        String curr = strs[index];\r\n        for (int i = 0; i < strs.length; i++) {\r\n            if (!visited[i] && isSimilar(curr, strs[i])) {\r\n                dfs(strs, visited, i);\r\n            } \r\n        }\r\n    }\r\n    \r\n    boolean isSimilar(String a, String b) {\r\n        int diff = 0;\r\n        for (int i = 0; i < a.length(); i++) {\r\n            if (a.charAt(i) != b.charAt(i)) {\r\n                diff++;\r\n                if (diff > 2) return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 66 ms (Top 91.43%) | Memory: 53.50 MB (Top 5.71%)\r\n\r\n// Main function\r\nvar numSimilarGroups = function(strs) {\r\n    const n = strs.length, uf = new UnionFind(n);\r\n\r\n    // Compare each string with all other string\r\n    for(let i=0; i<n; ++i) {\r\n        for(let j=i+1; j<n; ++j) {\r\n            if(isSimilar(strs[i], strs[j])) uf.union(i, j);\r\n        }\r\n    }\r\n    return uf.count;\r\n    // uf.count gives number of non connected components in UnionFind data structure\r\n};\r\n\r\n// UnionFind Data Structure with Strongly connected components\r\nclass UnionFind {\r\n    constructor(n) {\r\n        this.parent = Array(n).fill().map((_,i) => i);\r\n        this.count = n; // Keep track of number of groups\r\n    }\r\n    find(i) {\r\n        if(this.parent[i] !== i) this.parent[i] = this.find(this.parent[i])\r\n        return this.parent[i];\r\n    }\r\n    union(i,j) {\r\n        const x = this.find(i), y = this.find(j);\r\n        if(x !== y) this.parent[y] = x, this.count--;\r\n    }\r\n}\r\n\r\n// Function to check if 2 strings are different at less than 2 positions or not\r\nvar isSimilar = function(str1, str2) {\r\n    if(str1 === str2) return true;\r\n    let count = 0;\r\n    for(let i=0; i<str1.length; ++i) {\r\n        if(str1[i] !== str2[i] && ++count > 2) return false;\r\n    }\r\n    return true;\r\n}"
  }
}
