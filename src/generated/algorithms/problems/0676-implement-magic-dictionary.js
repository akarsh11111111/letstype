export default {
  "id": 676,
  "name": "Implement Magic Dictionary",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/implement-magic-dictionary",
  "relativeDir": "I/Implement Magic Dictionary",
  "slug": "0676-implement-magic-dictionary",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 49,
    "java": 40,
    "python": 27,
    "javascript": 38
  },
  "languages": {
    "cpp": "struct node{\r\n\tbool end = false;\r\n\tnode *children[26];\r\n};\r\n\r\nclass MagicDictionary {\r\npublic:\r\n\r\n\tnode* root;\r\n\tvoid insert(string&s){\r\n\t\tnode* cur = root;\r\n\t\tfor(char&c : s){\r\n\t\t\tif(!cur->children[c-'a']){\r\n\t\t\t\tcur->children[c-'a'] = new node();\r\n\t\t\t}\r\n\t\t\tcur = cur->children[c-'a'];\r\n\t\t}\r\n\t\tcur->end=true;\r\n\t}\r\n\tMagicDictionary() {\r\n\t\troot = new node();\r\n\t}\r\n\r\n\tvoid buildDict(vector<string> dictionary) {\r\n\t\tfor(string&s : dictionary)insert(s);\r\n\t}\r\n\t\r\n\tbool find(int i, string& s,node* cur, int mismatch){\r\n\t\tif(i == s.size() and mismatch==0) return cur->end;\r\n\t\tif(mismatch<0)return false;\r\n\t\tif((!cur || i == s.size()) and mismatch!=0) return false;\r\n\r\n\t\tint ind = s[i]-'a';\r\n\t\tbool ans = false;\r\n\t\tfor(int j=0;j<26;j++){\r\n\t\t\tif(cur->children[j]){\r\n\t\t\t\tif(j!=ind){\r\n\t\t\t\t\tans |= find(i+1,s,cur->children[j],mismatch-1);\r\n\t\t\t\t}else{\r\n\t\t\t\t\tans |= find(i+1,s,cur->children[j],mismatch);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn ans;\r\n\t}\r\n\tbool search(string searchWord) {\r\n\t\treturn find(0,searchWord,root,1);\r\n\t}\r\n};",
    "python": "class MagicDictionary:\r\n\r\n\tdef __init__(self):\r\n\t\tTrieNode = lambda : defaultdict(TrieNode)\r\n\t\tself.root = TrieNode()\r\n\r\n\tdef buildDict(self, dictionary: List[str]) -> None:\r\n\t\tfor s in dictionary:\r\n\t\t\tcur = self.root\r\n\t\t\tfor c in s: cur = cur[ord(c)-ord('a')]\r\n\t\t\tcur['$']=True\r\n\r\n\tdef search(self, searchWord: str) -> bool:\r\n\t\tdef find(i,cur,mis):\r\n\t\t\tif i==len(searchWord) and mis==0: return('$' in cur)\r\n\t\t\tif mis < 0: return False\r\n\t\t\tif i==len(searchWord) and mis!=0: return False\r\n\t\t\tind = ord(searchWord[i])-ord('a')\r\n\t\t\tans = False\r\n\t\t\tfor j in range(26):\r\n\t\t\t\tif j in cur:\r\n\t\t\t\t\tif(j!=ind):\r\n\t\t\t\t\t\tans |= find(i+1,cur[j],mis-1)\r\n\t\t\t\t\telse: ans |= find(i+1,cur[j],mis)\r\n\t\t\treturn ans\r\n\t\t\t\r\n\t\treturn find(0,self.root,1)",
    "java": "class MagicDictionary {\r\n    private String[] dictionary;\r\n    \r\n    public MagicDictionary() {}\r\n    \r\n    public void buildDict(String[] dictionary) {\r\n        this.dictionary = dictionary;\r\n    }\r\n    \r\n    public boolean search(String searchWord) {\r\n        for (String dictWord: this.dictionary) {\r\n            if (this.match(searchWord, dictWord, 1))\r\n                return true;\r\n        }\r\n        \r\n        return false;\r\n    }\r\n    \r\n    private boolean match(String s, String t, int expectedDiff) {\r\n        if (s.length() != t.length())\r\n            return false;\r\n        \r\n        int diff = 0;\r\n        for (int i = 0; i < s.length(); i++) {\r\n            if (s.charAt(i) != t.charAt(i))\r\n                diff++;\r\n            if (diff > expectedDiff)\r\n                return false;\r\n        }\r\n        \r\n        return diff == expectedDiff;\r\n    }\r\n}\r\n\r\n/**\r\n * Your MagicDictionary object will be instantiated and called as such:\r\n * MagicDictionary obj = new MagicDictionary();\r\n * obj.buildDict(dictionary);\r\n * boolean param_2 = obj.search(searchWord);\r\n */",
    "javascript": "// Runtime: 101 ms (Top 58.8%) | Memory: 57.40 MB (Top 26.4%)\r\n\r\nfunction TrieNode(){\r\n    this.children = new Map()\r\n    this.endOfWord = false;\r\n}\r\n\r\nvar MagicDictionary = function() {\r\n    this.root = new TrieNode()\r\n};\r\n\r\nMagicDictionary.prototype.buildDict = function(dictionary) {\r\n    for(let word of dictionary){\r\n        let curr = this.root\r\n        for(let letter of word){\r\n            let map = curr.children\r\n            if(!map.has(letter)) map.set(letter, new TrieNode())\r\n            curr = map.get(letter)\r\n        }\r\n        curr.endOfWord = true\r\n    }\r\n};\r\n\r\nMagicDictionary.prototype.search = function(searchWord){\r\n    return  dfs(this.root, searchWord, 0, 0)\r\n}\r\n\r\nfunction dfs(root, str, i, count){\r\n    if(count>1) return false\r\n    if(i==str.length) return count == 1 && root.endOfWord\r\n\t\r\n    for(let [char, node] of root.children){\r\n        let c = 0;\r\n        if(char != str[i]) c = 1\r\n        if(dfs(node, str, i+1, count+c)) return true;\r\n    }\r\n    return false\r\n}"
  }
}
