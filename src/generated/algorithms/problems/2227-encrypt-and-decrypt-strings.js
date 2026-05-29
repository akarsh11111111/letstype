export default {
  "id": 2227,
  "name": "Encrypt and Decrypt Strings",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/encrypt-and-decrypt-strings",
  "relativeDir": "E/Encrypt and Decrypt Strings",
  "slug": "2227-encrypt-and-decrypt-strings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 44,
    "java": 36,
    "python": 18,
    "javascript": 22
  },
  "languages": {
    "cpp": "class Encrypter {\r\npublic:\r\n    unordered_set<string> dict;\r\n    unordered_map<char,string> en;\r\n    unordered_map<string,vector<char>> dy;\r\n   \r\n    Encrypter(vector<char>& keys, vector<string>& values, vector<string>& dictionary) {\r\n        for(auto& t:dictionary)\r\n         {   dict.insert(t);}\r\n        for(int i=0;i<keys.size();i++)\r\n        {\r\n            char c=keys[i];\r\n            string s=values[i];\r\n            en[c]=s;\r\n            dy[s].push_back(c);\r\n        }\r\n        \r\n    }\r\n    \r\n    string encrypt(string word1) {\r\n        string ans=\"\";\r\n        for(char c:word1)\r\n        {\r\n            ans+=en[c];\r\n        }\r\n        return ans;\r\n    }\r\n    \r\n    int decrypt(string word2) {\r\n        int cnt=0;\r\n        for(auto t:dict)\r\n        {\r\n            string ans=\"\";\r\n            for(int i=0;i<t.size();i++)\r\n            {\r\n                ans+=en[t[i]];\r\n            }\r\n            if(ans==word2)\r\n                cnt++;\r\n        }\r\n        return cnt;\r\n    }\r\n \r\n};",
    "python": "class Encrypter:\r\n\r\n    def __init__(self, keys: List[str], values: List[str], dictionary: List[str]):\r\n        self.hashmap = dict()\r\n        for i in range(len(keys)):\r\n            self.hashmap[keys[i]] = values[i]\r\n        self.dictmap = defaultdict(int)\r\n        for word in dictionary:\r\n            self.dictmap[self.encrypt(word)] += 1\r\n\r\n    def encrypt(self, word1: str) -> str:\r\n        output = ''\r\n        for char in word1:\r\n            output += self.hashmap[char]\r\n        return output\r\n\r\n    def decrypt(self, word2: str) -> int:\r\n        return self.dictmap[word2]",
    "java": "class Encrypter {\r\n    \r\n    Map<String, Integer> encryptedDictCount;\r\n    int[] keys;\r\n    Set<String> dictionary;\r\n    String[] val;\r\n    \r\n    public Encrypter(char[] keys, String[] values, String[] dictionary) {\r\n        this.keys = new int[26];\r\n        encryptedDictCount = new HashMap<>();\r\n        this.val = values.clone();\r\n        this.dictionary = new HashSet<>(Arrays.asList(dictionary));\r\n        \r\n        for(int i=0; i<keys.length; i++) {\r\n            this.keys[keys[i] - 'a'] = i;\r\n        }\r\n        \r\n        for(String dict : dictionary) {\r\n            String encrpted = encrypt(dict);\r\n            encryptedDictCount.put(encrpted, encryptedDictCount.getOrDefault(encrpted, 0) + 1);\r\n        }\r\n    }\r\n    \r\n    public String encrypt(String word1) {\r\n        StringBuilder sb = new StringBuilder();\r\n        for(int i =0; i < word1.length(); i++) {\r\n            int c = word1.charAt(i) - 'a';\r\n            sb.append(val[keys[c]]);\r\n        }\r\n        return sb.toString();\r\n    }\r\n    \r\n    public int decrypt(String word2) {\r\n        return encryptedDictCount.getOrDefault(word2, 0);\r\n    }\r\n}",
    "javascript": "var Encrypter = function(keys, values, dictionary) {\r\n    this.encryptMap = new Map();\r\n    for (let i = 0; i < keys.length; i++) {\r\n        this.encryptMap.set(keys[i], values[i]);\r\n    }\r\n    this.dict = new Set(dictionary);\r\n    // Encypt the values in dict for easy comparison later\r\n    this.encryptedVals = [];\r\n    for (let word of this.dict) {\r\n        this.encryptedVals.push(this.encrypt(word));\r\n    }\r\n};\r\nEncrypter.prototype.encrypt = function(word1) {\r\n    let encrypted = '';\r\n    for (let char of word1) {\r\n        encrypted += this.encryptMap.get(char);\r\n    }\r\n    return encrypted;\r\n};\r\nEncrypter.prototype.decrypt = function(word2) {\r\n    return this.encryptedVals.filter(x => x === word2).length;\r\n};"
  }
}
