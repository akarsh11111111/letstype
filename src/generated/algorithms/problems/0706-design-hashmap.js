export default {
  "id": 706,
  "name": "Design HashMap",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/design-hashmap",
  "relativeDir": "D/Design HashMap",
  "slug": "0706-design-hashmap",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 62,
    "java": 64,
    "python": 12,
    "javascript": 38
  },
  "languages": {
    "cpp": "// Runtime: 105 ms (Top 72.29%) | Memory: 61.60 MB (Top 55.94%)\r\n\r\nclass MyHashMap {\r\n\tvector<vector<pair<int, int>>> map;\r\n\tconst int size = 10000;\r\npublic:\r\n\t/** Initialize your data structure here. */\r\n\tMyHashMap() {\r\n\t\tmap.resize(size);\r\n\t}\r\n\r\n\t/** value will always be non-negative. */\r\n\tvoid put(int key, int value) {\r\n\t\tint index = key % size;\r\n        vector<pair<int, int>> &row = map[index];\r\n        for(auto iter = row.begin(); iter != row.end(); iter++)\r\n        {\r\n            if(iter->first == key)\r\n            {\r\n                iter->second = value;\r\n                return;\r\n            }\r\n        }\r\n\t\trow.push_back(make_pair(key, value));\r\n\t}\r\n\r\n\t/** Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */\r\n\tint get(int key) {\r\n\t\tint index = key % size;\r\n        vector<pair<int, int>> &row = map[index];\r\n\t\tfor (auto iter = row.begin(); iter != row.end(); iter++)\r\n\t\t{\r\n\t\t\tif (iter->first == key)\r\n\t\t\t{\r\n\t\t\t\treturn iter->second;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn -1;\r\n\t}\r\n\r\n\t/** Removes the mapping of the specified value key if this map contains a mapping for the key */\r\n\tvoid remove(int key) {\r\n\t\tint index = key % size;\r\n        vector<pair<int, int>> &row = map[index];\r\n\t\tfor (auto iter = row.begin(); iter != row.end(); iter++)\r\n\t\t{\r\n\t\t\tif (iter->first == key)\r\n\t\t\t{\r\n\t\t\t\trow.erase(iter);\r\n                return;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n};\r\n\r\n/**\r\n * Your MyHashMap object will be instantiated and called as such:\r\n * MyHashMap* obj = new MyHashMap();\r\n * obj->put(key,value);\r\n * int param_2 = obj->get(key);\r\n * obj->remove(key);\r\n */",
    "python": "// Runtime: 285 ms (Top 33.03%) | Memory: 43.10 MB (Top 5.35%)\r\n\r\nclass MyHashMap:\r\n    def __init__(self):\r\n        self.data = [None] * 1000001\r\n    def put(self, key: int, val: int) -> None:\r\n        self.data[key] = val\r\n    def get(self, key: int) -> int:\r\n        val = self.data[key]\r\n        return val if val != None else -1\r\n    def remove(self, key: int) -> None:\r\n        self.data[key] = None",
    "java": "class MyHashMap {\r\n\r\n\t/** Initialize your data structure here. */\r\n\tLinkedList<Entry>[] map;\r\n\tpublic static int SIZE = 769;\r\n\tpublic MyHashMap() {\r\n\t\tmap = new LinkedList[SIZE];\r\n\t}\r\n\r\n\t/** value will always be non-negative. */\r\n\tpublic void put(int key, int value) {\r\n\t\tint bucket = key % SIZE;\r\n\t\tif(map[bucket] == null) {\r\n\t\t\tmap[bucket] = new LinkedList<Entry>();\r\n\t\t\tmap[bucket].add(new Entry(key, value));\r\n\t\t}\r\n\t\telse {\r\n\t\t\tfor(Entry entry : map[bucket]){\r\n\t\t\t\tif(entry.key == key){\r\n\t\t\t\t\tentry.val = value;\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tmap[bucket].add(new Entry(key, value));\r\n\t\t}\r\n\t}\r\n\r\n\t/** Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */\r\n\tpublic int get(int key) {\r\n\t\tint bucket = key % SIZE;\r\n\t\tLinkedList<Entry> entries = map[bucket];\r\n\t\tif(entries == null) return -1;\r\n\t\tfor(Entry entry : entries) {\r\n\t\t\tif(entry.key == key) return entry.val;\r\n\t\t}\r\n\t\treturn -1;\r\n\t}\r\n\r\n\t/** Removes the mapping of the specified value key if this map contains a mapping for the key */\r\n\tpublic void remove(int key) {\r\n\t\tint bucket = key % SIZE;\r\n\t\tEntry toRemove = null;\r\n\t\tif(map[bucket] == null) return;\r\n\t\telse {\r\n\t\t\tfor(Entry entry : map[bucket]){\r\n\t\t\t\tif(entry.key == key) {\r\n\t\t\t\t\ttoRemove = entry;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tif(toRemove == null) return;\r\n\t\t\tmap[bucket].remove(toRemove);\r\n\t\t}\r\n\t}\r\n}\r\n\r\nclass Entry {\r\n\tpublic int key;\r\n\tpublic int val;\r\n\r\n\tpublic Entry(int key, int val){\r\n\t\tthis.key = key;\r\n\t\tthis.val = val;\r\n\t}\r\n}",
    "javascript": "// Runtime: 312 ms (Top 39.41%) | Memory: 57.1 MB (Top 18.96%)\r\n\r\nvar MyHashMap = function() {\r\n    this.hashMap = [];\r\n};\r\n\r\n/**\r\n * @param {number} key\r\n * @param {number} value\r\n * @return {void}\r\n */\r\nMyHashMap.prototype.put = function(key, value) {\r\n    this.hashMap[key] = [key, value];\r\n};\r\n\r\n/**\r\n * @param {number} key\r\n * @return {number}\r\n */\r\nMyHashMap.prototype.get = function(key) {\r\n    return this.hashMap[key] ? this.hashMap[key][1] : -1;\r\n};\r\n\r\n/**\r\n * @param {number} key\r\n * @return {void}\r\n */\r\nMyHashMap.prototype.remove = function(key) {\r\n    delete this.hashMap[key];\r\n};\r\n\r\n/**\r\n * Your MyHashMap object will be instantiated and called as such:\r\n * var obj = new MyHashMap()\r\n * obj.put(key,value)\r\n * var param_2 = obj.get(key)\r\n * obj.remove(key)\r\n */"
  }
}
