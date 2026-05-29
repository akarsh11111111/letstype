export default {
  "id": 386,
  "name": "Lexicographical Numbers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/lexicographical-numbers",
  "relativeDir": "L/Lexicographical Numbers",
  "slug": "0386-lexicographical-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 54,
    "python": 18,
    "javascript": 27
  },
  "languages": {
    "cpp": "// Runtime: 14 ms (Top 73.19%) | Memory: 11.4 MB (Top 67.29%)\r\nclass Solution {\r\nprivate:\r\n    void dfs(int i, int n, vector<int> &ans){\r\n        if(i > n) return;\r\n        ans.push_back(i);\r\n        for(int j = 0; j< 10; ++j) dfs(i * 10 + j, n, ans);\r\n    }\r\npublic:\r\n    vector<int> lexicalOrder(int n) {\r\n        vector<int> ans;\r\n        for(int i =1; i<10; ++i) dfs(i, n, ans);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def lexicalOrder(self, n: int) -> List[int]:\r\n        result = []\r\n        orderDic = {}\r\n        for i in range(1, n + 1):\r\n            strI = str(i)\r\n            level = orderDic\r\n            for char in strI:\r\n                if char not in level:\r\n                    level[char] = {}\r\n                level = level[char]\r\n        self.traverse(orderDic, \"\", result)\r\n        return result\r\n        \r\n    def traverse(self, dic, temp, result):\r\n        for key in dic:\r\n            result.append(int(temp + key))\r\n            self.traverse(dic[key], temp + key, result)",
    "java": "// Runtime: 94 ms (Top 5.29%) | Memory: 74.9 MB (Top 5.05%)\r\nclass Solution {\r\n\r\n    private final TrieNode trie = new TrieNode(' ');\r\n\r\n    class TrieNode{\r\n\r\n        private Character digit;\r\n        private String value;\r\n        private boolean isWord;\r\n        private Map<Character, TrieNode> children;\r\n\r\n        TrieNode(Character c){\r\n            this.digit = c;\r\n            this.isWord = false;\r\n            this.children = new HashMap<>();\r\n        }\r\n\r\n        void insert(String s){\r\n            TrieNode current = this;\r\n            for(Character c : s.toCharArray()){\r\n                current = current.children.computeIfAbsent(c, k -> new TrieNode(c));\r\n            }\r\n            current.value = s;\r\n            current.isWord = true;\r\n        }\r\n\r\n        List<Integer> getWordsPreOrder(){\r\n            return getWordsPreOrder(this);\r\n        }\r\n\r\n        private List<Integer> getWordsPreOrder(TrieNode root){\r\n            List<Integer> result = new ArrayList<>();\r\n            if(root == null){\r\n                return result;\r\n            }\r\n\r\n            if(root.isWord){\r\n                result.add(Integer.parseInt(root.value));\r\n            }\r\n            for(TrieNode node : root.children.values()){\r\n                result.addAll(getWordsPreOrder(node));\r\n            }\r\n            return result;\r\n        }\r\n    }\r\n\r\n    public List<Integer> lexicalOrder(int n) {\r\n        for(int i = 1 ; i<=n;i++){\r\n            trie.insert(String.valueOf(i));\r\n        }\r\n        return trie.getWordsPreOrder();\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} n\r\n * @return {number[]}\r\n */\r\nvar lexicalOrder = function(n) {\r\n    const arr = [];\r\n    \r\n    function dfs(baseIndex) {\r\n        if (baseIndex * 10 > n) {\r\n            return;\r\n        }\r\n        \r\n        for(let i = baseIndex * 10; i < baseIndex * 10 + 10 && i <= n; i++)  {\r\n           arr.push(i);\r\n           dfs(i);\r\n        }\r\n    }\r\n    \r\n    let stack = [];\r\n    \r\n    for(let i = 1; i <= 9 && i <= n; i++) {\r\n        arr.push(i);        \r\n        dfs(i);\r\n    }\r\n    \r\n    return arr;\r\n};"
  }
}
