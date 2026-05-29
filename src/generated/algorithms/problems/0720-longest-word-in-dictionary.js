export default {
  "id": 720,
  "name": "Longest Word in Dictionary",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-word-in-dictionary",
  "relativeDir": "L/Longest Word in Dictionary",
  "slug": "0720-longest-word-in-dictionary",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 32,
    "python": 19,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 48 ms (Top 93.64%) | Memory: 30 MB (Top 50.94%)\r\nstruct node{\r\n    int end=0;\r\n    node* adj[26];\r\n};\r\n\r\nclass Solution {\r\npublic:\r\n    string longestWord(vector<string>& words) {\r\n        auto root = new node();\r\n        auto insert = [&](string&s, int ind){\r\n            node* cur = root;\r\n            int i;\r\n            for(char&c:s){\r\n                i=c - 'a';\r\n                if(!cur->adj[i])cur->adj[i] = new node();\r\n                cur=cur->adj[i];\r\n            }\r\n            cur->end=ind;\r\n        };\r\n\r\n        int ind = 0;\r\n        for(string&s : words) insert(s,++ind);\r\n\r\n        stack<node*> st;\r\n        st.push(root);\r\n        string ans = \"\";\r\n        while(!st.empty()){\r\n            node* cur = st.top();st.pop();\r\n            if(cur->end>0 || cur==root){\r\n                if(cur!=root){\r\n                    string word = words[cur->end-1];\r\n                    if(word.size()>ans.size() ||\r\n                      (word.size()==ans.size() && word<ans)){ans = word;}\r\n                }\r\n\r\n                for(int j=0;j<26;j++)\r\n                    if(cur->adj[j])st.push(cur->adj[j]);\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 240 ms (Top 36.59%) | Memory: 15.2 MB (Top 46.59%)\r\nclass Solution:\r\n    def longestWord(self, words: List[str]) -> str:\r\n        TrieNode = lambda: defaultdict(TrieNode)\r\n        root = TrieNode()\r\n        for i,s in enumerate(words):\r\n            cur = root\r\n            for c in s: cur=cur[c]\r\n            cur['$']=i\r\n\r\n        ans = ''\r\n        st = list(root.values())\r\n        while st:\r\n            cur = st.pop()\r\n            if '$' in cur:\r\n                w = words[cur['$']]\r\n                if len(ans)<len(w) or len(ans)==len(w) and w<ans:ans=w\r\n                st.extend([cur[i] for i in cur if i!='$'])\r\n        return ans",
    "java": "class Solution {\r\n    private class Node{\r\n        Node[] sub;\r\n        Node(){\r\n            sub = new Node[26];\r\n        }\r\n    }\r\n    Node root;\r\n    StringBuilder ans;\r\n    private void buildTire(String word){\r\n        Node temp = root;\r\n        int n = word.length();\r\n        for(int i = 0; i < n-1; i++){\r\n            int index = word.charAt(i)-'a';\r\n            if(temp.sub[index] == null) return;\r\n            temp = temp.sub[index];\r\n        }\r\n        int index = word.charAt(n-1)-'a';\r\n        temp.sub[index] = new Node();\r\n        \r\n        if(word.length() > ans.length())\r\n            ans = new StringBuilder(word);\r\n    }\r\n    public String longestWord(String[] words) {\r\n        this.ans = new StringBuilder();\r\n        this.root = new Node();\r\n        PriorityQueue<String> pq = new PriorityQueue<>();\r\n        pq.addAll(Arrays.asList(words));\r\n        while(!pq.isEmpty()) buildTire(pq.poll());\r\n        return ans.toString();\r\n    }\r\n}",
    "javascript": "var longestWord = function(words) {\r\n  words.sort();\r\n  let trie = new Trie();\r\n  let result = \"\"\r\n  \r\n  for (const word of words) {\r\n      if (word.length === 1) {\r\n          trie.insert(word);\r\n          result = word.length > result.length ? word : result;\r\n      } else {\r\n          let has = trie.search(word.slice(0, word.length-1));\r\n          if (has) {\r\n              trie.insert(word);\r\n              result = word.length > result.length ? word : result;\r\n          }\r\n      }\r\n  }\r\n  \r\n  return result;\r\n};"
  }
}
