export default {
  "id": 1286,
  "name": "Iterator for Combination",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/iterator-for-combination",
  "relativeDir": "I/Iterator for Combination",
  "slug": "1286-iterator-for-combination",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 31,
    "python": 29,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 81.19%) | Memory: 13.10 MB (Top 50.99%)\r\n\r\nclass CombinationIterator {\r\npublic:\r\n\tvector<string>ans;\r\n\tint j=0;\r\n\tvoid comb(int i,string& s,int k,string& t){\r\n\t\tif(i==s.size()){\r\n\t\t\tif(t.size()==k) ans.push_back(t);\r\n\t\t\treturn;\r\n\t\t}\r\n//      Pick\r\n\t\tt.push_back(s[i]);\r\n\t\tcomb(i+1,s,k,t);\r\n\t\tt.pop_back();\r\n//      NotPick\r\n\t\tcomb(i+1,s,k,t);\r\n\t}\r\n\r\n\tCombinationIterator(string characters, int combinationLength) {\r\n\t\tsort(characters.begin(),characters.end());\r\n\t\tstring t=\"\";\r\n\t\tcomb(0,characters,combinationLength,t);\r\n\t}\r\n\r\n\tstring next() {\r\n\t\treturn ans[j++];\r\n\t}\r\n\r\n\tbool hasNext() {\r\n\t\tif(j==ans.size())return false;\r\n\t\treturn true;\r\n\t}\r\n};",
    "python": "// Runtime: 54 ms (Top 68.38%) | Memory: 20.00 MB (Top 5.53%)\r\n\r\nclass CombinationIterator:\r\n\r\n    def __init__(self, characters: str, combinationLength: int):\r\n        self.characters = characters\r\n        self.n = len(characters)\r\n        self.combinations = gen_combinations(self.n, combinationLength)\r\n        self.ind = len(self.combinations) - 1\r\n\r\n    def next(self) -> str:\r\n        s = \"\"\r\n        for i in range(self.n):\r\n            if self.combinations[self.ind][i] != \"0\":\r\n                s += self.characters[i]\r\n        self.ind -= 1\r\n        return s\r\n\r\n    def hasNext(self) -> bool:\r\n        return self.ind > -1 \r\n    \r\ndef gen_combinations(l, n):\r\n    end = int(\"1\" * l, 2)\r\n    ans = []\r\n    for i in range(end + 1):\r\n        b = bin(i)[2:]\r\n        if b.count('1') == n:\r\n            ans.append(b.zfill(l))\r\n    return ans",
    "java": "class CombinationIterator {\r\n\r\n    private Queue<String> allCombinations;\r\n    public CombinationIterator(String characters, int combinationLength) {\r\n        this.allCombinations = new LinkedList<>();\r\n        generateAllCombinations(characters,0,combinationLength,new StringBuilder());\r\n    }\r\n    \r\n    private void generateAllCombinations(String characters,int index,int combinationLength,StringBuilder currentString){\r\n        \r\n        if(currentString.length() == combinationLength){\r\n            this.allCombinations.offer(currentString.toString());\r\n            return;\r\n        }\r\n        \r\n        for(int i = index ; i < characters.length() ; i++){\r\n            currentString.append(characters.charAt(i));\r\n            generateAllCombinations(characters,i+1,combinationLength,currentString);\r\n            currentString.deleteCharAt(currentString.length()-1);\r\n        }\r\n        \r\n    }\r\n    \r\n    public String next() {\r\n        return this.allCombinations.poll();\r\n    }\r\n    \r\n    public boolean hasNext() {\r\n      return !this.allCombinations.isEmpty();\r\n    }\r\n}",
    "javascript": "// Runtime: 91 ms (Top 48.4%) | Memory: 50.62 MB (Top 48.4%)\r\n\r\nvar CombinationIterator = function(characters, combinationLength) {\r\n    this.stack = Array.from({ length: combinationLength }, (_, i) => i);\r\n    this.combinationLength = combinationLength;\r\n    this.characters = characters;\r\n};\r\n\r\nCombinationIterator.prototype.next = function() {\r\n    const word = this.stack.map((i) => this.characters[i]).join(\"\");\r\n\r\n    for (let lastIndex = this.characters.length - 1; this.stack.at(-1) == lastIndex; )\r\n        lastIndex = this.stack.pop() - 1;\r\n\r\n    if (this.stack.length > 0)\r\n        for (let i = this.stack.pop() + 1; this.stack.length < this.combinationLength; i++)\r\n            this.stack.push(i);\r\n    \r\n    return word;\r\n};\r\n\r\nCombinationIterator.prototype.hasNext = function() {\r\n    return this.stack.length > 0;\r\n};"
  }
}
