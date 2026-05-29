export default {
  "id": 1481,
  "name": "Least Number of Unique Integers after K Removals",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals",
  "relativeDir": "L/Least Number of Unique Integers after K Removals",
  "slug": "1481-least-number-of-unique-integers-after-k-removals",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 16,
    "python": 19,
    "javascript": 62
  },
  "languages": {
    "cpp": "class Solution {\r\r\npublic:\r\r\n    int findLeastNumOfUniqueInts(vector<int>& arr, int k) {\r\r\n        int ans;\r\r\n        unordered_map<int,int> mp;\r\r\n        for(int i=0; i<arr.size(); i++){\r\r\n            mp[arr[i]]++;\r\r\n        }\r\r\n\r\r\n        priority_queue< int, vector<int>, greater<int>> pq;\r\r\n        for(auto it : mp){\r\r\n            pq.push(it.second);\r\r\n        }\r\r\n\r\r\n        while(k>0){\r\r\n           k-= pq.top();   \r\r\n           if(k>=0){\r\r\n              pq.pop(); \r\r\n           }\r\r\n        }\r\r\n        return pq.size();\r\r\n    }\r\r\n};",
    "python": "from heapq import heappop, heapify\r\r\n\r\r\nclass Solution:\r\r\n    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:\r\r\n        counter = collections.Counter(arr)\r\r\n        min_heap = [(count, num) for num, count in counter.items()]\r\r\n\r\r\n        heapify(min_heap)\r\r\n\r\r\n        while k > 0:\r\r\n            count, num = min_heap[0]\r\r\n\r\r\n            if count > k:\r\r\n                break\r\r\n\r\r\n            heappop(min_heap)\r\r\n            k -= count\r\r\n\r\r\n        return len(min_heap)",
    "java": "class Solution {\r\n    public int findLeastNumOfUniqueInts(int[] arr, int k) {\r\n        Map<Integer,Integer> freqMap = new HashMap<>();\r\n        for(int a: arr) freqMap.put(a, freqMap.getOrDefault(a,0)+1);\r\n        PriorityQueue<Integer> pq = new PriorityQueue<>((i1,i2)->Integer.compare(freqMap.get(i1), freqMap.get(i2)));\r\n        pq.addAll(freqMap.keySet());\r\n        while(k>0 && !pq.isEmpty()){\r\n            int element = pq.poll();\r\n            int toBeDeleted = Math.min(k,freqMap.get(element));\r\n            k-=toBeDeleted;\r\n            if(toBeDeleted<freqMap.get(element)) \r\n                pq.add(element);\r\n        }\r\n        return pq.size();\r\n    }\r\n}",
    "javascript": "var findLeastNumOfUniqueInts = function(arr, k) {\r\n    var hsh = {};\r\n    var instance = {};  // store set with index # of occurence\r\n    var count = 0;\r\n    for (var i = 0; i < arr.length; i++)\r\n    {\r\n        if (hsh[arr[i]] == null)\r\n        {\r\n            count ++;\r\n            hsh[arr[i]] = 1;\r\n            if (instance[1] == null)\r\n            {\r\n                var intro = new Set();\r\n                intro.add(arr[i]);\r\n                instance[1] = intro;\r\n            }\r\n            else\r\n            {\r\n                instance[1].add(arr[i]);\r\n            }\r\n        }\r\n        else\r\n        {\r\n            hsh[arr[i]] ++;\r\n            var numTimes = hsh[arr[i]];\r\n            instance[numTimes - 1].delete(arr[i]);\r\n            \r\n            if (instance[numTimes] == null)\r\n            {\r\n                instance[numTimes] = new Set();\r\n                instance[numTimes].add(arr[i]);\r\n            }\r\n            else\r\n            {\r\n                instance[numTimes].add(arr[i]);\r\n            }\r\n        }\r\n    }\r\n    \r\n    var removenum = 0;\r\n    \r\n    for (key in instance)\r\n    {\r\n        var instanceKey = instance[key].size;\r\n        if (k == 0)\r\n        {\r\n            break;\r\n        }\r\n        else if (k >= key*instanceKey)\r\n        {\r\n            k -= key*instanceKey;\r\n            count -= instanceKey;\r\n        }\r\n        else\r\n        {\r\n            count -= Math.floor(k/key);\r\n            break;\r\n        }\r\n        \r\n    }\r\n    return count;\r\n};"
  }
}
