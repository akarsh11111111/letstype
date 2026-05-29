export default {
  "id": 705,
  "name": "Design HashSet",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/design-hashset",
  "relativeDir": "D/Design HashSet",
  "slug": "0705-design-hashset",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 47,
    "python": 16,
    "javascript": 39
  },
  "languages": {
    "cpp": "// Runtime: 365 ms (Top 20.28%) | Memory: 39.4 MB (Top 95.17%)\r\nclass MyHashSet {\r\n    vector<int> v;\r\npublic:\r\n    MyHashSet() {\r\n\r\n    }\r\n\r\n    void add(int key) {\r\n        auto it = find(v.begin(), v.end(), key);\r\n        if(it == v.end()){\r\n            v.push_back(key);\r\n        }\r\n\r\n    }\r\n\r\n    void remove(int key) {\r\n        auto it = find(v.begin(), v.end(), key);\r\n        if(it != v.end()){\r\n            v.erase(it);\r\n        }\r\n    }\r\n\r\n    bool contains(int key) {\r\n        return find(v.begin(), v.end(), key) != v.end();\r\n    }\r\n};",
    "python": "# Runtime: 1864 ms (Top 22.23%) | Memory: 174.5 MB (Top 5.09%)\r\nclass MyHashSet:\r\n\r\n    def __init__(self):\r\n        self.hash_list = [0]*10000000\r\n\r\n    def add(self, key: int) -> None:\r\n        self.hash_list[key]+=1\r\n\r\n    def remove(self, key: int) -> None:\r\n        self.hash_list[key] = 0\r\n\r\n    def contains(self, key: int) -> bool:\r\n        if self.hash_list[key] > 0:\r\n            return True\r\n        return False",
    "java": "class MyHashSet {\r\n\tArrayList<LinkedList<Integer>> list;\r\n\tint size = 100;\r\n\r\n\tpublic MyHashSet() {\r\n\t\tlist = new ArrayList<>(size);\r\n\t\tfor (int i = 0; i < size; i++) {\r\n\t\t\tlist.add(new LinkedList<Integer>());\r\n\t\t}\r\n\t}\r\n\r\n\tpublic int hash(int key) {\r\n\t\treturn key % list.size();\r\n\t}\r\n\r\n\tpublic int search(int key) {\r\n\t\tint i = hash(key);\r\n\r\n\t\tLinkedList<Integer> temp = list.get(i);\r\n\t\tint ans = -1;\r\n\r\n\t\tfor (int j = 0; j < temp.size(); j++) {\r\n\t\t\tif (key == temp.get(j)) {\r\n\t\t\t\treturn j;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn ans;\r\n\t}\r\n\r\n\tpublic void add(int key) {\r\n\t\tif (search(key) == -1) {\r\n\t\t\tint i = hash(key);\r\n\t\t\tlist.get(i).add(key);\r\n\t\t}\r\n\t}\r\n\r\n\tpublic void remove(int key) {\r\n\t\tif (search(key) != -1) {\r\n\t\t\tint i = hash(key);\r\n\t\t\tlist.get(i).remove(Integer.valueOf(key));\r\n\t\t}\r\n\t}\r\n\r\n\tpublic boolean contains(int key) {\r\n\t\treturn search(key) != -1;\r\n\t}\r\n}",
    "javascript": "var MyHashSet = function() {\r\n  \r\n    // Really you should just \r\n    // Make your own object, but instead\r\n    // we have attached ourself to the \r\n    // `this` object which then becomes our hashmap.\r\n    \r\n    // What you should instead do is this:\r\n    // this.hash_map = {}\r\n    // And then update our following functions\r\n};\r\n\r\nMyHashSet.prototype.add = function(key) {\r\n    \r\n    // Constant Time\r\n    // Linear Space | To the size of the input key\r\n    // You can access objects using array notation\r\n\r\n    this[key] = null;\r\n};\r\n\r\nMyHashSet.prototype.remove = function(key) {\r\n    \r\n    // Constant Time\r\n    // Constant Space\r\n    // You can access objects using array notation\r\n    // Here we use the delete keyword.\r\n\r\n    delete this[key]\r\n};\r\n\r\nMyHashSet.prototype.contains = function(key) {\r\n    \r\n    // Constant Time\r\n    // Constant Space\r\n    // This just asks if the property exists\r\n\r\n    return this.hasOwnProperty(key)\r\n};"
  }
}
