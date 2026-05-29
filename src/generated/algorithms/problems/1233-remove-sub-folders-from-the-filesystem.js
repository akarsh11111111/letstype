export default {
  "id": 1233,
  "name": "Remove Sub-Folders from the Filesystem",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-sub-folders-from-the-filesystem",
  "relativeDir": "R/Remove Sub-Folders from the Filesystem",
  "slug": "1233-remove-sub-folders-from-the-filesystem",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 34,
    "python": 33,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    int check(string &s,unordered_map<string,int>&mp)\r\n    {\r\n        string temp;\r\n        temp.push_back(s[0]); //for maintaining prefix string \r\n        \r\n        for(int i=1;i<s.size();i++)\r\n        {\r\n            if(s[i]=='/')\r\n            {\r\n                if(mp.count(temp)) //for checking prefix exist in map\r\n                    return true;        \r\n                temp+=s[i];\r\n            }\r\n            else temp+=s[i];\r\n        }\r\n        mp[s]=1;    //if string doesnot exist put it in map\r\n        return false;\r\n    }\r\n    vector<string> removeSubfolders(vector<string>& folder) {\r\n      unordered_map<string,int>mp;\r\n      sort(folder.begin(),folder.end());\r\n     vector<string>ans;\r\n        \r\n        for(auto it:folder)\r\n        {\r\n            if(!check(it,mp))\r\n                ans.push_back(it);\r\n        }\r\n        \r\n        return ans;\r\n        \r\n    }\r\n};",
    "python": "# a TrieNode class for creating new node\r\nclass TrieNode():\r\n    def __init__(self):\r\n        self.children = {}\r\n        self.main = False\r\n        \r\n# the main class\r\nclass Solution(object):\r\n    def removeSubfolders(self, folder):     \r\n        node = TrieNode()\r\n        res = []\r\n        # sort the list to prevent adding the subfolder to the Trie first\r\n        folder.sort()\r\n        for dir in folder:\r\n            name = dir.split(\"/\")\r\n            if self.addTrie(name,node):\r\n                res.append(dir)\r\n        return res\r\n\r\n    # usign the same addTrie template and modify the else part\r\n    def addTrie(self,name,node):    \r\n        trie = node\r\n        for c in name:\r\n            if c not in trie.children:\r\n                trie.children[c] = TrieNode()\r\n            # if char is in trie,\r\n            else:\r\n                # check if it's the last sub folder. \r\n                if trie.children[c].main == True:\r\n                    return False\r\n            trie = trie.children[c]\r\n        trie.main = True\r\n        return True",
    "java": "class Solution {\r\n    TrieNode root;\r\n    public List<String> removeSubfolders(String[] folder) {\r\n        List<String> res = new ArrayList<>();\r\n        Arrays.sort(folder, (a, b) -> (a.length() - b.length()));\r\n        root = new TrieNode();\r\n        for (String f : folder) {\r\n            if (insert(f)) {\r\n                res.add(f);\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n    \r\n    private boolean insert(String folder) {\r\n        TrieNode node = root;\r\n        char[] chs = folder.toCharArray();\r\n        for (int i = 0; i < chs.length; i++) {\r\n            char ch = chs[i];\r\n            node.children.putIfAbsent(ch, new TrieNode());\r\n            node = node.children.get(ch);\r\n            if (node.isFolder && (i+1 < chs.length && chs[i+1] == '/')) {\r\n                return false;\r\n            }\r\n        }\r\n        node.isFolder = true;\r\n        return true;\r\n    }\r\n}\r\n\r\nclass TrieNode {\r\n    Map<Character, TrieNode> children = new HashMap<>();\r\n    boolean isFolder;\r\n}",
    "javascript": "var removeSubfolders = function(folder) {\r\n    folder = folder.sort()\r\n    const result = [];\r\n    for(let i in folder){\r\n        const f = folder[i];\r\n        if(result.length == 0 || !f.startsWith(result[result.length -1] + \"/\"))\r\n            result.push(f);\r\n    }\r\n    return result;\r\n};"
  }
}
