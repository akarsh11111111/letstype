export default {
  "id": 2300,
  "name": "Successful Pairs of Spells and Potions",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/successful-pairs-of-spells-and-potions",
  "relativeDir": "S/Successful Pairs of Spells and Potions",
  "slug": "2300-successful-pairs-of-spells-and-potions",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 26,
    "python": 16,
    "javascript": 42
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> successfulPairs(vector<int>& spells, vector<int>& potions, long long success) {\r\n        \r\n        vector<int> res;\r\n        int n(size(potions));\r\n        sort(begin(potions), end(potions));\r\n        \r\n        for (auto& spell : spells) {\r\n            int start(0), end(n);\r\n            while (start < end) {\r\n                int mid = start + (end-start)/2;\r\n                ((long long)spell*potions[mid] >= success) ? end = mid : start = mid+1;\r\n            }\r\n            res.push_back(n-start);\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 3070 ms (Top 29.46%) | Memory: 37.4 MB (Top 40.00%)\r\nclass Solution:\r\n    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:\r\n        result = self.function(spells,potions,success)\r\n        return result\r\n\r\n    def function(self,arr1,arr2,success):\r\n        n2 = len(arr2)\r\n        arr2.sort() #Sorting Enables Us To Do Binary Search\r\n        ans = []\r\n        for i in arr1:\r\n            val = math.ceil(success/i) #Finding the Value Of Portion With Least Strength So That It Can Be Greater Than Success\r\n            idx = bisect.bisect_left(arr2,val) #Finding The Left Most Index So That The Value Can Be Inserted\r\n            res = n2-idx+1 #Calculating the remaining numbers after finding the suitable index\r\n            ans.append(res-1)\r\n        return ans",
    "java": "// Runtime: 40 ms (Top 80.4%) | Memory: 58.00 MB (Top 19.8%)\r\n\r\nclass Solution {\r\n    public int[] successfulPairs(int[] spells, int[] potions, long success) {\r\n        int n = spells.length;\r\n        int m = potions.length;\r\n        int[] pairs = new int[n];\r\n        Arrays.sort(potions);\r\n        for (int i = 0; i < n; i++) {\r\n            int spell = spells[i];\r\n            int left = 0;\r\n            int right = m - 1;\r\n            while (left <= right) {\r\n                int mid = left + (right - left) / 2;\r\n                long product = (long) spell * potions[mid];\r\n                if (product >= success) {\r\n                    right = mid - 1;\r\n                } else {\r\n                    left = mid + 1;\r\n                }\r\n            }\r\n            pairs[i] = m - left;\r\n        }\r\n        return pairs;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} spells\r\n * @param {number[]} potions\r\n * @param {number} success\r\n * @return {number[]}\r\n */\r\n var successfulPairs = function(spells, potions, success) {\r\n    let res = [];\r\n    potions.sort((a, b) => b-a);\r\n    let map = new Map();\r\n    \r\n    for(let i=0; i<spells.length; i++){\r\n        if(!map.has(spells[i])){\r\n            let s = success / spells[i];\r\n            let len = search(potions, s);\r\n            res.push(len);\r\n            map.set(spells[i], len);\r\n        }else{\r\n            let len = map.get(spells[i]);\r\n            res.push(len);\r\n        }\r\n    }\r\n    \r\n    return res;\r\n};\r\n\r\nfunction search(potions, target){\r\n    let res = 0;\r\n    let left = 0;\r\n    let right = potions.length-1;\r\n    while(left <= right){\r\n        let mid = Math.floor((left + right) / 2);\r\n        if(potions[mid] < target){\r\n            right = mid - 1;\r\n        }else{\r\n            left = mid + 1;\r\n            res = mid + 1;\r\n        }\r\n    }\r\n\r\n    return res;\r\n}"
  }
}
