export default {
  "id": 2007,
  "name": "Find Original Array From Doubled Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-original-array-from-doubled-array",
  "relativeDir": "F/Find Original Array From Doubled Array",
  "slug": "2007-find-original-array-from-doubled-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 35,
    "python": 29,
    "javascript": 38
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> findOriginalArray(vector<int>& changed) {\r\n        unordered_map<int, int> freq;\r\n        for (auto num : changed) freq[num]++;\r\n        \r\n        sort(changed.begin(), changed.end());\r\n        \r\n        vector<int> res;\r\n        for (auto num : changed) {\r\n            if (freq[num] && freq[num*2]) {\r\n                freq[num]--;\r\n                freq[num*2]--;\r\n                res.push_back(num);\r\n            }\r\n        }\r\n        \r\n        for (auto [a, b] : freq)\r\n            if (b) return {};\r\n        \r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findOriginalArray(self, changed: List[int]) -> List[int]:\r\n        counter = collections.Counter(changed)\r\n        res = []\r\n        for k in counter.keys():\r\n            \r\n            if k == 0:\r\n                # handle zero as special case\r\n                if counter[k] % 2 > 0:\r\n                    return []\r\n                res += [0] * (counter[k] // 2)\r\n                \r\n            elif counter[k] > 0:\r\n                x = k\r\n                \r\n                # walk down the chain\r\n                while x % 2 == 0 and x // 2 in counter:\r\n                    x = x // 2\r\n                    \r\n                # walk up and process all numbers within the chain. mark the counts as 0\r\n                while x in counter:\r\n                    if counter[x] > 0:\r\n                        res += [x] * counter[x]\r\n                        if counter[x+x] < counter[x]:\r\n                            return []\r\n                        counter[x+x] -= counter[x]\r\n                        counter[x] = 0\r\n                    x += x\r\n        return res",
    "java": "// Runtime: 93 ms (Top 85.10%) | Memory: 128.6 MB (Top 72.29%)\r\nclass Solution {\r\n    public int[] findOriginalArray(int[] changed) {\r\n\r\n        Arrays.sort(changed);\r\n\r\n        if(changed.length%2!=0) return new int[0];\r\n\r\n        int mid = changed.length/2;\r\n\r\n        int[] res = new int[mid];\r\n\r\n        int[] freq = new int[100001];\r\n\r\n        for(int no : changed)\r\n            freq[no]++;\r\n\r\n        int idx=0;\r\n\r\n        for(int no: changed){\r\n            if(freq[no] > 0 && no*2 <= 100000 && freq[no*2]>0){\r\n                freq[no]--;\r\n                freq[no*2]--;\r\n                res[idx++] = no;\r\n            }\r\n        }\r\n\r\n        for(int i=0; i<freq.length; i++){\r\n            if(freq[i]!=0) return new int[0];\r\n        }\r\n\r\n        return res;\r\n\r\n    }\r\n}",
    "javascript": "// Idea is to sort the input array first then start traversing the array\r\n// now if we saw half of the current element before and that half is unmatched then\r\n// match both of them otherwise note the occurence of current element inorder\r\n// to match it with its double element in the future\r\n\r\n// Time -> O(nlogn) due to sorting\r\n// Space -> O(n) due to map\r\n\r\n/**\r\n * @param {number[]} changed\r\n * @return {number[]}\r\n */\r\nvar findOriginalArray = function(changed) {\r\n    \r\n    const n = changed.length\r\n    if(n%2 === 1) return []\r\n    \r\n    let original = []\r\n    let map = new Map()\r\n    \r\n    changed.sort((a,b) => {\r\n        return a-b\r\n    })\r\n    \r\n    for(let ele of changed) {\r\n        const half = ele/2\r\n        if(map.has(half) && map.get(half) > 0) {\r\n            original.push(half)\r\n            map.set(half, map.get(half)-1)\r\n        } else {\r\n            map.set(ele, map.has(ele) ? map.get(ele)+1: 1)\r\n        }\r\n    }\r\n    \r\n    if(original.length !== n/2) return []\r\n    \r\n    return original\r\n};"
  }
}
