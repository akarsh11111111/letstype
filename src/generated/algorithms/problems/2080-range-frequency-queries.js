export default {
  "id": 2080,
  "name": "Range Frequency Queries",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/range-frequency-queries",
  "relativeDir": "R/Range Frequency Queries",
  "slug": "2080-range-frequency-queries",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 43,
    "python": 8,
    "javascript": 44
  },
  "languages": {
    "cpp": "// Runtime: 887 ms (Top 68.93%) | Memory: 235.7 MB (Top 56.17%)\r\nclass RangeFreqQuery {\r\nprivate:\r\n    int size;\r\n    unordered_map< int, vector<int> > mp;\r\npublic:\r\n    RangeFreqQuery(vector<int>& arr) {\r\n        size=arr.size();\r\n        for (int i=0; i<size;i++){\r\n            mp[arr[i]].push_back(i);\r\n        }\r\n    }\r\n    int query(int left, int right, int value) {\r\n        int first = lower_bound(mp[value].begin(),mp[value].end(),left)- mp[value].begin();\r\n        int second = upper_bound(mp[value].begin(),mp[value].end(),right)- mp[value].begin();\r\n        return second-first;\r\n    }\r\n};",
    "python": "# Runtime: 3295 ms (Top 30.98%) | Memory: 53.7 MB (Top 24.88%)\r\nclass RangeFreqQuery:\r\n    def __init__(self, arr: List[int]):\r\n        self.l = [[] for _ in range(10001)]\r\n        for i, v in enumerate(arr):\r\n            self.l[v].append(i)\r\n    def query(self, left: int, right: int, v: int) -> int:\r\n        return bisect_right(self.l[v], right) - bisect_left(self.l[v], left)",
    "java": "class RangeFreqQuery {\r\n    //Use map's key to store arr's value, map's value to keep <value's location, cummulative arr's value count>\r\n    HashMap<Integer, TreeMap<Integer, Integer>> map;\r\n    public RangeFreqQuery(int[] arr) {\r\n        //O(nlog(n))\r\n        map = new HashMap<>();\r\n        for(int i = 0; i < arr.length; i++){\r\n            map.putIfAbsent(arr[i], new TreeMap<>());\r\n            TreeMap<Integer, Integer> tree = map.get(arr[i]);\r\n            //i = value's location\r\n            //tree.size() = cummulative arr's value count - 1\r\n            tree.put(i, tree.size());\r\n        }\r\n    }\r\n    \r\n    public int query(int left, int right, int value) {\r\n        //O(log(n))\r\n        \r\n        //check if value exist in map\r\n        if(!map.containsKey(value)){\r\n            return 0;\r\n        }\r\n        TreeMap<Integer, Integer> tree = map.get(value);\r\n        \r\n        //check if there exist position >= left and position <= right\r\n        //if not, return 0\r\n        if(tree.ceilingKey(left) == null || tree.floorKey(right) == null){\r\n            return 0;\r\n        }\r\n        //get leftMost position's cummulative count\r\n        int leftMost = tree.get(tree.ceilingKey(left));\r\n        //get rightMost position's cummulative count\r\n        int rightMost = tree.get(tree.floorKey(right));\r\n        \r\n        return rightMost - leftMost + 1;\r\n    }\r\n}\r\n\r\n/**\r\n * Your RangeFreqQuery object will be instantiated and called as such:\r\n * RangeFreqQuery obj = new RangeFreqQuery(arr);\r\n * int param_1 = obj.query(left,right,value);\r\n */",
    "javascript": "\r\n var RangeFreqQuery = function(arr) {\r\n\r\n    this.array = arr;\r\n    this.subRangeSize = Math.sqrt(this.array.length) >> 0;\r\n    this.subRangeFreqs = [];\r\n\r\n    let freq = {};\r\n\r\n    for(let i = 0; i < arr.length; i++) {\r\n\r\n        const num = arr[i];\r\n    \r\n        if(i >= this.subRangeSize && i % this.subRangeSize === 0) {\r\n            this.subRangeFreqs.push({...freq});\r\n            freq = {};\r\n        }\r\n        \r\n        freq[num] = (freq[num] || 0) + 1;        \r\n    }\r\n\r\n    this.subRangeFreqs.push(freq);\r\n\r\n};\r\n\r\nRangeFreqQuery.prototype.query = function(left, right, value) {\r\n\r\n    let fr = 0;\r\n\r\n    const leftIdx = left / this.subRangeSize >> 0, rightIdx = right / this.subRangeSize >> 0;\r\n\r\n    for(let i = leftIdx; i <= rightIdx; i++) {\r\n        fr += this.subRangeFreqs[i][value] || 0;\r\n    }\r\n\r\n    for(let i = leftIdx * this.subRangeSize; i < left; i++) {\r\n        fr -= this.array[i] === value ? 1 : 0;\r\n    }\r\n\r\n    for(let i = right + 1; i < Math.min((rightIdx + 1) * this.subRangeSize, this.array.length); i++) {\r\n        fr -= this.array[i] === value ? 1 : 0;\r\n    }\r\n    return fr;\r\n};"
  }
}
