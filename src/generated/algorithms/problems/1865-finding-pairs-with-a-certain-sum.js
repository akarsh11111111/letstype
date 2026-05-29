export default {
  "id": 1865,
  "name": "Finding Pairs With a Certain Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/finding-pairs-with-a-certain-sum",
  "relativeDir": "F/Finding Pairs With a Certain Sum",
  "slug": "1865-finding-pairs-with-a-certain-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 67,
    "java": 37,
    "python": 23,
    "javascript": 66
  },
  "languages": {
    "cpp": "// Runtime: 338 ms (Top 40.57%) | Memory: 74.10 MB (Top 78.77%)\r\n\r\nclass FindSumPairs {\r\npublic:\r\n    unordered_map<int, int> mp2;\r\n    \r\n    unordered_map<int, int> mp1;\r\n    \r\n    vector<int> arr;\r\n    \r\n    FindSumPairs(vector<int>& nums1, vector<int>& nums2) {\r\n        \r\n        for(auto x : nums1)\r\n        {\r\n            mp1[x]++;\r\n        }\r\n        \r\n        arr = nums2;\r\n        \r\n        for(auto x : nums2)\r\n        {\r\n            mp2[x]++;\r\n        }\r\n    }\r\n    \r\n    void add(int index, int val) {\r\n        \r\n        mp2[arr[index]]--;\r\n        \r\n        if(mp2[arr[index]] == 0)\r\n        {\r\n            mp2.erase(arr[index]);\r\n        }\r\n        \r\n        arr[index] += val;\r\n        \r\n        mp2[arr[index]]++;\r\n    }\r\n    \r\n    int count(int tot) {\r\n        \r\n        int count = 0;\r\n        \r\n        for(auto x : mp1)\r\n        {\r\n            int val = x.first;\r\n            \r\n            int freq = x.second;\r\n            \r\n            int need = tot - val;\r\n            \r\n            if(mp2.count(need))\r\n            {\r\n                count += mp2[need] * freq;\r\n            }\r\n        }\r\n        \r\n        return count;\r\n    }\r\n};\r\n\r\n/**\r\n * Your FindSumPairs object will be instantiated and called as such:\r\n * FindSumPairs* obj = new FindSumPairs(nums1, nums2);\r\n * obj->add(index,val);\r\n * int param_2 = obj->count(tot);\r\n */",
    "python": "// Runtime: 1039 ms (Top 5.41%) | Memory: 80.00 MB (Top 22.7%)\r\n\r\nclass FindSumPairs:\r\n\r\n    def __init__(self, nums1: List[int], nums2: List[int]):\r\n        self.nums1 = sorted(nums1)\r\n        self.nums2 = nums2\r\n        self.hash2 = defaultdict(int)\r\n        for n in nums2:\r\n            self.hash2[n] += 1\r\n\r\n    def add(self, index: int, val: int) -> None:\r\n        self.hash2[self.nums2[index]] -= 1\r\n        self.nums2[index] += val\r\n        self.hash2[self.nums2[index]] += 1\r\n\r\n    def count(self, tot: int) -> int:\r\n        result = 0\r\n        for n in self.nums1:\r\n            if n >= tot:\r\n                break\r\n            result += self.hash2[tot - n]\r\n        return result",
    "java": "class FindSumPairs {\r\n\r\n    private int [] nums1;\r\n    private int [] nums2;\r\n    Map<Integer, Integer> map = new HashMap<>();\r\n    public FindSumPairs(int[] nums1, int[] nums2) {\r\n        this.nums1 = nums1;\r\n        this.nums2 = nums2;\r\n        for (int number : nums2) {\r\n            map.put(number, map.getOrDefault(number, 0) + 1);\r\n        } \r\n        \r\n    }\r\n    \r\n    public void add(int index, int val) {\r\n        map.put(nums2[index], map.get(nums2[index]) - 1);\r\n        nums2[index] += val;\r\n        map.put(nums2[index], map.getOrDefault(nums2[index], 0) + 1);\r\n    }\r\n    \r\n    public int count(int tot) {\r\n        int result = 0;\r\n        for (int number : nums1) {\r\n            if (map.containsKey(tot - number)) {\r\n                result += map.get(tot - number);\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n}\r\n\r\n/**\r\n * Your FindSumPairs object will be instantiated and called as such:\r\n * FindSumPairs obj = new FindSumPairs(nums1, nums2);\r\n * obj.add(index,val);\r\n * int param_2 = obj.count(tot);\r\n */",
    "javascript": "// Runtime: 1920 ms (Top 7.69%) | Memory: 104.2 MB (Top 15.38%)\r\nfunction Counter(arr) {\r\n\r\n    // input: array\r\n    // output: corresponding occurrence-based dictionary\r\n\r\n    let keyOccDict = {};\r\n\r\n    arr.forEach(val => keyOccDict[val] = (keyOccDict[val] || 0) + 1);\r\n\r\n    return keyOccDict;\r\n}\r\n\r\nvar FindSumPairs = function(nums1, nums2) {\r\n    this.arrA = nums1;\r\n    this.arrB = nums2;\r\n\r\n    // maintain mapping between distinct number and occurrence for array A\r\n    this.dictA = Counter(this.arrA );\r\n\r\n    // maintain mapping between distinct number and occurrence for array B\r\n    this.dictB = Counter(this.arrB );\r\n\r\n    return\r\n};\r\n\r\nFindSumPairs.prototype.add = function(index, val) {\r\n\r\n    // update mapping for arrB\r\n\r\n    let old_value = this.arrB[index];\r\n    this.arrB[index] += val;\r\n    let new_value = this.arrB[index];\r\n\r\n    this.dictB[ old_value ] = this.dictB[old_value] - 1;\r\n    this.dictB[ new_value ] = (this.dictB[new_value] || 0) + 1;\r\n\r\n    return\r\n};\r\n\r\nFindSumPairs.prototype.count = function(tot) {\r\n\r\n    /*\r\n      Goal:\r\n\r\n      Find the method count of a + b = total,\r\n      where a comes from array A, and b comes from array B\r\n\r\n      apply the concept learned from Leetcode #1 Two sum\r\n      a + b = total <=> b = total - a\r\n\r\n      speed-up by dictionary\r\n    */\r\n\r\n    let counter = 0;\r\n\r\n    for( const [a, occ_a] of Object.entries(this.dictA) ){\r\n\r\n        let b = tot - a;\r\n\r\n        counter += occ_a * (this.dictB[b] || 0);\r\n\r\n    }\r\n\r\n    return counter;\r\n};"
  }
}
