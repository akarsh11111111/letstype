export default {
  "id": 380,
  "name": "Insert Delete GetRandom O(1)",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/insert-delete-getrandom-o1",
  "relativeDir": "I/Insert Delete GetRandom O(1)",
  "slug": "0380-insert-delete-getrandom-o-1",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 39,
    "python": 19,
    "javascript": 51
  },
  "languages": {
    "cpp": "class RandomizedSet {\r\npublic:\r\n    unordered_map<int, int> mp;\r\n    vector<int> v;\r\n    RandomizedSet() {\r\n        \r\n    }\r\n    \r\n    bool insert(int val) {\r\n        if(mp.find(val) != mp.end()) return false;\r\n        mp[val] = v.size();\r\n        v.push_back(val);\r\n        return true;\r\n    }\r\n    \r\n    bool remove(int val) {\r\n        if(mp.find(val) != mp.end()){\r\n            v[mp[val]] = v.back();\r\n            mp[v.back()] = mp[val];\r\n            v.pop_back();\r\n            mp.erase(val);\r\n            return true;\r\n        } \r\n        return false;\r\n    }\r\n    \r\n    int getRandom() {\r\n        return v[rand()%v.size()];\r\n    }\r\n};",
    "python": "class RandomizedSet:\r\n\r\n    def __init__(self):\r\n        self.data = set() \r\n\r\n    def insert(self, val: int) -> bool:\r\n      if val not in self.data:\r\n        self.data.add(val)\r\n        return True \r\n      return False \r\n        \r\n    def remove(self, val: int) -> bool:\r\n        if val in self.data:\r\n          self.data.remove(val)\r\n          return True \r\n        return False \r\n\r\n    def getRandom(self) -> int:\r\n        return  random.choice(list(self.data))",
    "java": "class RandomizedSet {\r\n    HashMap<Integer, Integer> map;\r\n    ArrayList<Integer> list;\r\n    Random rand;\r\n    public RandomizedSet() {\r\n        map = new HashMap<>();\r\n        list = new ArrayList<>();\r\n        rand = new Random();\r\n    }\r\n    \r\n    public boolean insert(int val) {\r\n        if (!map.containsKey(val)){\r\n            map.put(val, list.size());\r\n            list.add(val);\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n    \r\n    public boolean remove(int val) {\r\n        if (map.containsKey(val)){\r\n            int index = map.get(val);\r\n            int last = list.get(list.size() - 1);\r\n            if (index != list.size() - 1){\r\n                list.set(index, last);\r\n                map.put(last, index);\r\n            }\r\n            list.remove(list.size() - 1);  \r\n            map.remove(val);\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n    \r\n    public int getRandom() {\r\n        int r = rand.nextInt(list.size());   \r\n        return list.get(r);\r\n    }\r\n}",
    "javascript": "var RandomizedSet = function() {\r\n    this.ranArray = []\r\n    this.ranObj = {}\r\n};\r\n\r\n/** \r\n * @param {number} val\r\n * @return {boolean}\r\n */\r\nRandomizedSet.prototype.insert = function(val) {\r\n    if (this.ranObj[val] === undefined) {\r\n        this.ranArray[this.ranArray.length] = val\r\n        this.ranObj[val] = this.ranArray.length - 1\r\n        return true\r\n    } else {\r\n        return false\r\n    }\r\n};\r\n\r\n/** \r\n * @param {number} val\r\n * @return {boolean}\r\n */\r\nRandomizedSet.prototype.remove = function(val) {\r\n    if (this.ranObj[val] === undefined) {\r\n        return false\r\n    } else {\r\n        let tempLastVal = this.ranArray[this.ranArray.length - 1]\r\n        let tempRemoveIndex = this.ranObj[val]\r\n        this.ranObj[tempLastVal] = tempRemoveIndex\r\n        this.ranArray[tempRemoveIndex] = tempLastVal\r\n        this.ranArray.pop()\r\n        delete this.ranObj[val]\r\n        return true\r\n    }\r\n};\r\n\r\n/**\r\n * @return {number}\r\n */\r\nRandomizedSet.prototype.getRandom = function() {\r\n    return this.ranArray[Math.floor(Math.random()*this.ranArray.length)]\r\n};\r\n\r\n/** \r\n * Your RandomizedSet object will be instantiated and called as such:\r\n * var obj = new RandomizedSet()\r\n * var param_1 = obj.insert(val)\r\n * var param_2 = obj.remove(val)\r\n * var param_3 = obj.getRandom()\r\n */"
  }
}
