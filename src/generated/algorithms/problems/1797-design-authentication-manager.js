export default {
  "id": 1797,
  "name": "Design Authentication Manager",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/design-authentication-manager",
  "relativeDir": "D/Design Authentication Manager",
  "slug": "1797-design-authentication-manager",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 30,
    "python": 22,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 233 ms (Top 27.28%) | Memory: 30.2 MB (Top 62.58%)\r\nclass AuthenticationManager {\r\n    int ttl;\r\n    unordered_map<string, int> tokens;\r\npublic:\r\n    AuthenticationManager(int timeToLive) {\r\n        ttl = timeToLive;\r\n    }\r\n\r\n    void generate(string tokenId, int currentTime) {\r\n        tokens[tokenId] = currentTime + ttl;\r\n    }\r\n\r\n    void renew(string tokenId, int currentTime) {\r\n        auto tokenIt = tokens.find(tokenId);\r\n        if (tokenIt != end(tokens) && tokenIt->second > currentTime) {\r\n            tokenIt->second = currentTime + ttl;\r\n        }\r\n    }\r\n\r\n    int countUnexpiredTokens(int currentTime) {\r\n        int res = 0;\r\n        for (auto token: tokens) {\r\n            if (token.second > currentTime) res++;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 732 ms (Top 5.07%) | Memory: 15.5 MB (Top 65.88%)\r\nclass AuthenticationManager(object):\r\n\r\n    def __init__(self, timeToLive):\r\n        self.token = dict()\r\n        self.time = timeToLive # store timeToLive and create dictionary\r\n\r\n    def generate(self, tokenId, currentTime):\r\n        self.token[tokenId] = currentTime # store tokenId with currentTime\r\n\r\n    def renew(self, tokenId, currentTime):\r\n        limit = currentTime-self.time # calculate limit time to filter unexpired tokens\r\n        if tokenId in self.token and self.token[tokenId]>limit: # filter tokens and renew its time\r\n            self.token[tokenId] = currentTime\r\n\r\n    def countUnexpiredTokens(self, currentTime):\r\n        limit = currentTime-self.time # calculate limit time to filter unexpired tokens\r\n        c = 0\r\n        for i in self.token:\r\n            if self.token[i]>limit: # count unexpired tokens\r\n                c+=1\r\n        return c",
    "java": "class AuthenticationManager {\r\n    private int ttl;\r\n    private Map<String, Integer> map;\r\n\r\n    public AuthenticationManager(int timeToLive) {\r\n        this.ttl = timeToLive;\r\n        this.map = new HashMap<>();\r\n    }\r\n    \r\n    public void generate(String tokenId, int currentTime) {\r\n        map.put(tokenId, currentTime + this.ttl);\r\n    }\r\n    \r\n    public void renew(String tokenId, int currentTime) {\r\n        Integer expirationTime = this.map.getOrDefault(tokenId, null);\r\n        if (expirationTime == null || expirationTime <= currentTime)\r\n            return;\r\n        \r\n        generate(tokenId, currentTime);\r\n    }\r\n    \r\n    public int countUnexpiredTokens(int currentTime) {\r\n        int count = 0;\r\n        for (Map.Entry<String, Integer> entry: this.map.entrySet())\r\n            if (entry.getValue() > currentTime)\r\n                count++;\r\n        \r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 211 ms (Top 9.0%) | Memory: 51.68 MB (Top 72.7%)\r\n\r\n// O(n)\r\nvar AuthenticationManager = function(timeToLive) {\r\n    this.ttl = timeToLive;\r\n    this.map = {};\r\n};\r\nAuthenticationManager.prototype.generate = function(tokenId, currentTime) {\r\n    this.map[tokenId] = currentTime + this.ttl;\r\n};\r\nAuthenticationManager.prototype.renew = function(tokenId, currentTime) {\r\n    let curr = this.map[tokenId];\r\n    if (curr > currentTime) {\r\n        this.generate(tokenId, currentTime);\r\n    }\r\n};\r\nAuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {\r\n    return Object.keys(this.map).filter(key => this.map[key] > currentTime).length;\r\n};"
  }
}
