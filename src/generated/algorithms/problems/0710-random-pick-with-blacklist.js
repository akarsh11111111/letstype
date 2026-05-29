export default {
  "id": 710,
  "name": "Random Pick with Blacklist",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/random-pick-with-blacklist",
  "relativeDir": "R/Random Pick with Blacklist",
  "slug": "0710-random-pick-with-blacklist",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "python": 23,
    "javascript": 34
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int idx;\r\n    unordered_map<int, int>mp;\r\n    set<int> s;\r\n    Solution(int n, vector<int>& blacklist) {\r\n       idx = n - blacklist.size();\r\n       n--;\r\n       for(int i = 0; i<blacklist.size(); i++) s.insert(blacklist[i]);\r\n       for(int i = 0; i<blacklist.size(); i++){\r\n           if(blacklist[i] < idx){\r\n           while(s.find(n) != s.end())n--;\r\n           mp[blacklist[i]] = n;\r\n           n--; \r\n           }\r\n       } \r\n    }\r\n    \r\n    int pick() {\r\n      int ans = rand()%(idx);\r\n      if(mp.count(ans)) return mp[ans];\r\n      return ans;\r\n    }\r\n};",
    "python": "# Runtime: 841 ms (Top 10.38%) | Memory: 24.8 MB (Top 56.73%)\r\nclass Solution:\r\n\r\n    def __init__(self, n: int, blacklist: List[int]):\r\n        self.hashmap={}\r\n        for b in blacklist:\r\n            self.hashmap[b]=-1\r\n        self.length=n-len(blacklist)\r\n        flag=n-1\r\n        for b in blacklist:\r\n            if b<self.length:\r\n                while flag in self.hashmap:\r\n                    flag-=1\r\n                self.hashmap[b]=flag\r\n                flag-=1\r\n\r\n    def pick(self) -> int:\r\n        seed=random.randrange(self.length)\r\n        return self.hashmap.get(seed,seed)\r\n\r\n# Your Solution object will be instantiated and called as such:\r\n# obj = Solution(n, blacklist)\r\n# param_1 = obj.pick()",
    "javascript": "// Runtime: 253 ms (Top 88.89%) | Memory: 75.80 MB (Top 22.22%)\r\n\r\n/**\r\n * @param {number} n\r\n * @param {number[]} blacklist\r\n */\r\nvar Solution = function(n, blacklist) {\r\n    this.space = n - blacklist.length;\r\n    this.map = {};\r\n\r\n    blacklist.forEach((b, i) => {\r\n        const next = this.space + i;\r\n\r\n        const head = this.map[b] === undefined ? b : this.map[b];\r\n        const tail = this.map[next] === undefined ? next : this.map[next];\r\n\r\n        this.map[head] = tail;\r\n        this.map[tail] = head;\r\n    });\r\n};\r\n\r\n/**\r\n * @return {number}\r\n */\r\nSolution.prototype.pick = function() {\r\n    const result = Math.floor(Math.random() * this.space);\r\n    return this.map[result] || result;\r\n};\r\n\r\n/** \r\n * Your Solution object will be instantiated and called as such:\r\n * var obj = new Solution(n, blacklist)\r\n * var param_1 = obj.pick()\r\n */"
  }
}
