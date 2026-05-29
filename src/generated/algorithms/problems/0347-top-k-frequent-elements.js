export default {
  "id": 347,
  "name": "Top K Frequent Elements",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/top-k-frequent-elements",
  "relativeDir": "T/Top K Frequent Elements",
  "slug": "0347-top-k-frequent-elements",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 17,
    "python": 3,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 5 ms (Top 98.1%) | Memory: 13.64 MB (Top 61.2%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> topKFrequent(vector<int>& nums, int k) {\r\n        unordered_map<int,int> map;\r\n        for(int num : nums){\r\n            map[num]++;\r\n        }\r\n        \r\n        vector<int> res;\r\n        // pair<first, second>: first is frequency,  second is number\r\n        priority_queue<pair<int,int>> pq; \r\n        for(auto it = map.begin(); it != map.end(); it++){\r\n            pq.push(make_pair(it->second, it->first));\r\n            if(pq.size() > (int)map.size() - k){\r\n                res.push_back(pq.top().second);\r\n                pq.pop();\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def topKFrequent(self, nums: List[int], k: int) -> List[int]:\r\n        return [i[0] for i in Counter(nums).most_common(k)]",
    "java": "class Solution {\r\n\tpublic int[] topKFrequent(int[] nums, int k) {\r\n\t\tMap<Integer, Integer> map = new HashMap<>();\r\n\r\n\t\tfor (int num : nums) {        \r\n\t\t\tmap.merge(num, 1, Integer::sum);\r\n\t\t}\r\n\r\n\t\treturn map.entrySet()\r\n\t\t\t.stream()\r\n\t\t\t.sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))\r\n\t\t\t.map(Map.Entry::getKey)\r\n\t\t\t.mapToInt(x -> x)\r\n\t\t\t.limit(k)\r\n\t\t\t.toArray();\r\n\t}\r\n}",
    "javascript": "var topKFrequent = function(nums, k) {\r\n  let store = {};\r\n    for(let i=0;i<nums.length;i++){\r\n        store[nums[i]] = store[nums[i]]+1||1\r\n    }\r\n    //returns an array of keys in sorted order\r\n    let keyArr = Object.keys(store).sort((a,b)=>store[a]-store[b])\r\n    let arrLength = keyArr.length;\r\n    let slicedArr = keyArr.slice(arrLength-k,arrLength)\r\n    return slicedArr\r\n};"
  }
}
