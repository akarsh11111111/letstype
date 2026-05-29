export default {
  "id": 1146,
  "name": "Snapshot Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/snapshot-array",
  "relativeDir": "S/Snapshot Array",
  "slug": "1146-snapshot-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 56,
    "java": 41,
    "python": 19,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 366 ms (Top 61.08%) | Memory: 85.5 MB (Top 97.26%)\r\nclass SnapshotArray {\r\n    int timestamp;\r\n    unordered_map<int, vector<int>> toSnaps, toValues;\r\npublic:\r\n    SnapshotArray(int length) {\r\n        timestamp = 0;\r\n    }\r\n\r\n    void set(int index, int val) {\r\n        if (toSnaps.count(index) == 0) {\r\n            // After lower_bound, prevent returning negative lo\r\n            toSnaps[index].push_back(-1);\r\n            // 0 means not found\r\n            toValues[index].push_back(0);\r\n        }\r\n        // same timestamp -> just update value\r\n        if (toSnaps[index].back() == timestamp) {\r\n            toValues[index].back() = val;\r\n        }\r\n        // not -> add timestamp and value\r\n        else {\r\n            toSnaps[index].push_back(timestamp);\r\n            toValues[index].push_back(val);\r\n        }\r\n    }\r\n\r\n    int snap() {\r\n        return timestamp++;\r\n    }\r\n\r\n    int get(int index, int snap_id) {\r\n        // check whether index exists or not\r\n        if (toSnaps.count(index) == 0) return 0;\r\n        auto& snaps = toSnaps[index];\r\n        int lo = 0, hi = snaps.size()-1;\r\n        while (lo < hi) {\r\n            int m = lo + (hi - lo)/2;\r\n            if (snaps[m] >= snap_id) hi = m;\r\n            else lo = m + 1;\r\n        }\r\n        // lower bound can be larger than target\r\n        if (snaps[lo] > snap_id) lo--;\r\n        // if lo is negative, then ther is no value of index at lo time\r\n        //if (lo < 0) return 0;\r\n        return toValues[index][lo];\r\n    }\r\n};\r\n\r\n/**\r\n * Your SnapshotArray object will be instantiated and called as such:\r\n * SnapshotArray* obj = new SnapshotArray(length);\r\n * obj->set(index,val);\r\n * int param_2 = obj->snap();\r\n * int param_3 = obj->get(index,snap_id);\r\n */",
    "python": "# Runtime: 600 ms (Top 65.10%) | Memory: 33.5 MB (Top 72.09%)\r\nclass SnapshotArray:\r\n\r\n    def __init__(self, length: int):\r\n        self.snap_id = 0\r\n        self.history = defaultdict(dict)\r\n\r\n    def set(self, index: int, val: int) -> None:\r\n        self.history[self.snap_id][index] = val\r\n\r\n    def snap(self) -> int:\r\n        self.snap_id += 1\r\n        return self.snap_id-1\r\n\r\n    def get(self, index: int, snap_id: int) -> int:\r\n        for i in range(snap_id,-1,-1):\r\n            if index in self.history[i]:\r\n                return self.history[i][index]\r\n        return 0 # default value in case it wasn't set earlier",
    "java": "// Runtime: 43 ms (Top 90.65%) | Memory: 81.4 MB (Top 44.17%)\r\nclass SnapshotArray {\r\n\r\n    TreeMap<Integer,Integer>[] snapshotArray;\r\n    int currSnapId;\r\n\r\n    public SnapshotArray(int length) {\r\n        snapshotArray = new TreeMap[length];\r\n        for(int i=0;i<length;i++)\r\n        {\r\n            snapshotArray[i] = new TreeMap();\r\n        }\r\n        currSnapId =0;\r\n    }\r\n\r\n    public void set(int index, int val) {\r\n        snapshotArray[index].put(currSnapId,val);\r\n    }\r\n\r\n    public int snap() {\r\n        return currSnapId++;\r\n    }\r\n\r\n    public int get(int index, int snap_id) {\r\n        Integer lowerKey = snapshotArray[index].floorKey(snap_id);\r\n\r\n        if(lowerKey !=null)\r\n        {\r\n            return snapshotArray[index].get(lowerKey);\r\n        }\r\n        return 0;\r\n    }\r\n}\r\n\r\n/**\r\n * Your SnapshotArray object will be instantiated and called as such:\r\n * SnapshotArray obj = new SnapshotArray(length);\r\n * obj.set(index,val);\r\n * int param_2 = obj.snap();\r\n * int param_3 = obj.get(index,snap_id);\r\n */",
    "javascript": "var SnapshotArray = function(length) {\r\n    this.snaps = []\r\n    this.currentIndex = 0\r\n    this.currentSnaps = []\r\n}\r\n\r\nSnapshotArray.prototype.set = function(index, val) {\r\n    this.currentSnaps[index] = val\r\n}\r\n\r\nSnapshotArray.prototype.snap = function() {\r\n    this.snaps[this.currentIndex] = [...this.currentSnaps]\r\n    \r\n    return this.currentIndex++\r\n}\r\n\r\nSnapshotArray.prototype.get = function(index, snap_id) {\r\n    const res = this.snaps[snap_id]\r\n    \r\n    if (res[index] === undefined) return 0\r\n    \r\n    return res[index]\r\n}"
  }
}
