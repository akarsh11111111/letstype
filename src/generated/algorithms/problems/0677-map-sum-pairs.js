export default {
  "id": 677,
  "name": "Map Sum Pairs",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/map-sum-pairs",
  "relativeDir": "M/Map Sum Pairs",
  "slug": "0677-map-sum-pairs",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 41,
    "python": 34,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 66.87%) | Memory: 7.9 MB (Top 80.77%)\r\nclass MapSum {\r\npublic:\r\n    map<string,int>mp;\r\n    MapSum() {\r\n\r\n    }\r\n\r\n    void insert(string key, int val) {\r\n        mp[key]=val;\r\n    }\r\n\r\n    int sum(string prefix) {\r\n        int count=0;\r\n        for(auto i:mp){\r\n            int j;\r\n            for(j=0;j<i.first.size() && j<prefix.size();j++){\r\n                if(i.first[j]!=prefix[j])break;\r\n            }\r\n            if(j==prefix.size())count+=i.second;\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "// Runtime: 29 ms (Top 97.14%) | Memory: 17.50 MB (Top 9.54%)\r\n\r\nclass MapSum:\r\n\r\n    def __init__(self):\r\n        self.trie = {}\r\n\r\n    def insert(self, key: str, val: int) -> None:\r\n        node = self.trie\r\n        for ch in key:\r\n            node = node.setdefault(ch, {})\r\n        node['val'] = val\r\n        return\r\n\r\n    def sum(self, prefix: str) -> int:\r\n        def traverse(node):\r\n            nonlocal res\r\n            if not node:\r\n                return\r\n            if 'val' in node:\r\n                res += node['val']\r\n            for child in node:\r\n                if child == 'val': continue\r\n                traverse(node[child])\r\n            return\r\n            \r\n        node = self.trie\r\n        for ch in prefix:\r\n            node = node.get(ch, {})\r\n            if not node:\r\n                return 0\r\n        res = 0\r\n        traverse(node)\r\n        return res",
    "java": "class MapSum {\r\n    private Map<String, Integer> map;\r\n    private Map<String, Integer> words;\r\n\r\n    public MapSum() {\r\n        this.map = new HashMap<>();\r\n        this.words = new HashMap<>();\r\n    }\r\n    \r\n    public void insert(String key, int val) {\r\n        Integer lookup = this.words.getOrDefault(key, null);\r\n        int diff;\r\n        if (lookup == null)\r\n            diff = val;\r\n        else\r\n            diff = val - lookup;\r\n        \r\n        int k = key.length();\r\n        \r\n        StringBuilder sb = new StringBuilder(); \r\n        for (int i = 0; i < k; i++) {\r\n            sb.append(key.charAt(i));\r\n            \r\n            String prefix = sb.toString();\r\n            map.put(prefix, map.getOrDefault(prefix, 0) + diff);\r\n        }\r\n        \r\n        this.words.put(key, val);\r\n    }\r\n    \r\n    public int sum(String prefix) {\r\n        return this.map.getOrDefault(prefix, 0);\r\n    }\r\n}\r\n\r\n/**\r\n * Your MapSum object will be instantiated and called as such:\r\n * MapSum obj = new MapSum();\r\n * obj.insert(key,val);\r\n * int param_2 = obj.sum(prefix);\r\n */",
    "javascript": "// Runtime: 121 ms (Top 6.20%) | Memory: 43.8 MB (Top 29.46%)\r\nvar MapSum = function() {\r\n    this.hashKeys = new Map();\r\n    this.hashVals = new Map();\r\n};\r\n\r\nMapSum.prototype.insert = function(key, val) {\r\n    let prefix = '';\r\n    for (const str of key) {\r\n        prefix += str;\r\n        const hashKey = this.hashKeys.get(prefix) ?? new Set();\r\n        hashKey.add(key);\r\n        !this.hashKeys.has(prefix) && this.hashKeys.set(prefix, hashKey);\r\n    }\r\n    this.hashVals.set(key, val);\r\n};\r\n\r\nMapSum.prototype.sum = function(prefix) {\r\n    const hashKey = this.hashKeys.get(prefix);\r\n    if (!hashKey) return 0;\r\n    let sum = 0;\r\n    hashKey.forEach(key => sum += this.hashVals.get(key));\r\n    return sum;\r\n};"
  }
}
