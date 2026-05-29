export default {
  "id": 381,
  "name": "Insert Delete GetRandom O(1) - Duplicates allowed",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed",
  "relativeDir": "I/Insert Delete GetRandom O(1) - Duplicates allowed",
  "slug": "0381-insert-delete-getrandom-o-1-duplicates-allowed",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 68,
    "java": 49,
    "python": 23
  },
  "languages": {
    "cpp": "class RandomizedCollection {\r\npublic:\r\n    \r\n    unordered_map<int, unordered_set<int>> mp;\r\n    \r\n    vector<int> arr;\r\n    \r\n    RandomizedCollection() {\r\n        \r\n    }\r\n    \r\n    bool insert(int val) {\r\n        \r\n        arr.push_back(val);\r\n        \r\n        mp[val].insert(arr.size() - 1);\r\n        \r\n        return mp[val].size() == 1;\r\n    }\r\n    \r\n    bool remove(int val) {\r\n        \r\n        if(mp.count(val))\r\n        {\r\n            // pick one occurance of val and delete it\r\n            \r\n            // find the index\r\n            \r\n            int idx = *(mp[val].begin());\r\n            \r\n            // erase from set\r\n            \r\n            mp[val].erase(mp[val].begin());\r\n            \r\n            // replace this index with last element\r\n            \r\n            int last_val = arr.back();\r\n           \r\n            arr[idx] = last_val;\r\n            \r\n            mp[last_val].insert(idx);\r\n            \r\n            mp[last_val].erase(arr.size() - 1);\r\n            \r\n            arr.pop_back();\r\n            \r\n            // if there is no occurance of val is present then erase it from map\r\n            \r\n            if(mp[val].size() == 0)\r\n            {\r\n                mp.erase(val);\r\n            }\r\n            \r\n            return true;\r\n        }\r\n        \r\n        return false;\r\n    }\r\n    \r\n    int getRandom() {\r\n        \r\n        // generate the random index\r\n        \r\n        int rand_idx = rand() % arr.size();\r\n        \r\n        return arr[rand_idx];\r\n    }\r\n};",
    "python": "class RandomizedCollection:\r\n\r\n    def __init__(self):\r\n        self.items = []\r\n\r\n    def insert(self, val: int) -> bool:\r\n        self.items.append(val)\r\n        if self.items.count(val) > 1:\r\n            return False\r\n        else:\r\n            return True\r\n\r\n    def remove(self, val: int) -> bool:\r\n        if val in self.items:\r\n            flag = True\r\n            self.items.remove(val)\r\n        else:\r\n            flag = False\r\n        \r\n        return flag\r\n\r\n    def getRandom(self) -> int:\r\n        return choice(self.items)",
    "java": "class RandomizedCollection {\r\n    List<Integer> multiSet;\r\n    HashMap<Integer, PriorityQueue<Integer>> map;\r\n    Random random;\r\n    public RandomizedCollection() {\r\n        map = new HashMap<>();\r\n        multiSet = new ArrayList<>();\r\n        random = new Random();\r\n    }\r\n    \r\n    public boolean insert(int val) {\r\n        boolean contains = map.containsKey(val);\r\n        multiSet.add(val);\r\n        PriorityQueue<Integer> pq;\r\n        if(!contains){\r\n            pq = new PriorityQueue<>(Collections.reverseOrder());\r\n            map.put(val, pq);\r\n        }else\r\n            pq = map.get(val);\r\n        \r\n        pq.add(multiSet.size()-1);\r\n        return !contains;\r\n    }\r\n    \r\n    public boolean remove(int val) {\r\n        if(!map.containsKey(val))\r\n            return false;\r\n        \r\n        PriorityQueue<Integer> pq = map.get(val);\r\n        int indexToRemove = pq.poll();\r\n        if(pq.size() == 0) map.remove(val);\r\n        \r\n        int lastIndex = multiSet.size()-1;\r\n        if(indexToRemove != lastIndex){\r\n            int valLast = multiSet.get(lastIndex);\r\n            PriorityQueue<Integer> temp = map.get(valLast);\r\n            temp.poll();\r\n            temp.add(indexToRemove);\r\n            multiSet.set(indexToRemove, valLast);\r\n        }\r\n        multiSet.remove(lastIndex);\r\n        return true;\r\n    }\r\n    \r\n    public int getRandom() {\r\n        int index = random.nextInt(multiSet.size());\r\n        return multiSet.get(index);\r\n    }\r\n}"
  }
}
