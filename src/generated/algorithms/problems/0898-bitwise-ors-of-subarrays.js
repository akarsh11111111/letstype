export default {
  "id": 898,
  "name": "Bitwise ORs of Subarrays",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/bitwise-ors-of-subarrays",
  "relativeDir": "B/Bitwise ORs of Subarrays",
  "slug": "0898-bitwise-ors-of-subarrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 25,
    "python": 37,
    "javascript": 52
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int subarrayBitwiseORs(vector<int>& arr) {\r\n        vector<int>s;\r\n        int l=0;\r\n        for(int a:arr) {\r\n            int r=s.size();\r\n            s.push_back(a);\r\n            for(int i=l;i<r;i++)\r\n              if(s.back()!=(s[i]|a))\r\n                s.push_back(s[i] | a);\r\n              l=r;\r\n            }\r\n    return unordered_set<int>(begin(s), end(s)).size();\r\n    }\r\n};",
    "python": "class Solution:\r\n    def subarrayBitwiseORs(self, arr: List[int]) -> int:\r\n        \r\n        \r\n        ans=set(arr)\r\n        \r\n        # each element is a subarry\r\n        \r\n        \r\n        one = set()\r\n        \r\n        # to get the ans for the subarray of  size >1\r\n        # starting from 0th element to the ending element\r\n        \r\n        \r\n        one.add(arr[0])\r\n        \r\n        for i in  range(1,len(arr)):\r\n            \r\n            two=set()\r\n            \r\n            for j in one:\r\n                \r\n                two.add(j |  arr[i])\r\n                \r\n                # subarray from the element in one set to the current ele(i th one)\r\n                \r\n                ans.add(j| arr[i])\r\n                \r\n            \r\n            two.add(arr[i])\r\n            \r\n            # adding curr element to set two so that from next iteration we can take sub array starting from curr element \r\n            \r\n            one = two\r\n            \r\n        return len(ans)",
    "java": "// Runtime: 454 ms (Top 75.74%) | Memory: 71.3 MB (Top 97.04%)\r\nclass Solution {\r\n    public int subarrayBitwiseORs(int[] arr) {\r\n        int n = arr.length;\r\n        Set<Integer> s = new HashSet();\r\n        LinkedList<Integer> queue = new LinkedList();\r\n        for(int i = 0; i< n; i++){\r\n            int size = queue.size();\r\n            if(!queue.contains(arr[i])){\r\n                queue.offer(arr[i]);\r\n                s.add(arr[i]);\r\n            }\r\n            int j = 0;\r\n            while(j<size){\r\n                int tmp = queue.poll()|arr[i];\r\n                if(!queue.contains(tmp)){\r\n                    queue.offer(tmp);\r\n                    s.add(tmp);\r\n                }\r\n                j++;\r\n            }\r\n        }\r\n        return s.size();\r\n    }\r\n}",
    "javascript": "/** https://leetcode.com/problems/bitwise-ors-of-subarrays/\r\n * @param {number[]} arr\r\n * @return {number}\r\n */\r\nvar subarrayBitwiseORs = function(arr) {\r\n  // Hashset to store the unique bitwise\r\n  this.uniqueBw = new Set();\r\n  \r\n  // Dynamic programming\r\n  dp(arr, arr.length - 1);\r\n  \r\n  return this.uniqueBw.size;\r\n};\r\n\r\nvar dp = function(arr, currIdx) {\r\n  // Base, reach beginning of the array\r\n  if (currIdx === 0) {\r\n    // Store the value to unique bitwise, since it's only single number, we store the actual value\r\n    this.uniqueBw.add(arr[0]);\r\n    \r\n    // Return array\r\n    return [arr[0]];\r\n  }\r\n  \r\n  // DP to previous index\r\n  let prev = dp(arr, currIdx - 1);\r\n  \r\n  // Number at current index\r\n  let firstBw = arr[currIdx];\r\n  \r\n  // Add number at current index to hashset, since it's only single number, we store the actual value\r\n  this.uniqueBw.add(firstBw);\r\n  \r\n  // Another hashset to store the result of bitwise operation between number at current index with result from previous index\r\n  let currRes = new Set();\r\n  currRes.add(firstBw);\r\n  \r\n  // Loop through result form previous index\r\n  for (let i = 0; i < prev.length; i++) {\r\n    // Perform bitwise operation OR\r\n    let curr = arr[currIdx] | prev[i];\r\n    \r\n    // Add to unique bitwise collection\r\n    this.uniqueBw.add(curr);\r\n    \r\n    // Add to current result\r\n    currRes.add(curr);\r\n  }\r\n\r\n  // Return current result as an array\r\n  return [...currRes];\r\n};"
  }
}
