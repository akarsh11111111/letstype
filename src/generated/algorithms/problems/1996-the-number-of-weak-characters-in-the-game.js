export default {
  "id": 1996,
  "name": "The Number of Weak Characters in the Game",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/the-number-of-weak-characters-in-the-game",
  "relativeDir": "T/The Number of Weak Characters in the Game",
  "slug": "1996-the-number-of-weak-characters-in-the-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 19,
    "python": 15,
    "javascript": 63
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    static bool cmp(vector<int>& a, vector<int>& b) {\r\n        if (a[0] != b[0]) return a[0] > b[0];\r\n        return a[1] < b[1];\r\n    }\r\n    \r\n    int numberOfWeakCharacters(vector<vector<int>>& properties) {\r\n        sort(properties.begin(), properties.end(), cmp);\r\n\r\n        int res = 0, mx = INT_MIN;\r\n        for (auto p : properties) {\r\n            if (mx > p[1]) res++;\r\n            else mx = p[1];\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 4914 ms (Top 7.28%) | Memory: 66.6 MB (Top 91.64%)\r\nclass Solution:\r\n    def numberOfWeakCharacters(self, properties: List[List[int]]) -> int:\r\n\r\n        properties.sort(key=lambda x: (-x[0],x[1]))\r\n\r\n        ans = 0\r\n        curr_max = 0\r\n\r\n        for _, d in properties:\r\n            if d < curr_max:\r\n                ans += 1\r\n            else:\r\n                curr_max = d\r\n        return ans",
    "java": "// Runtime: 23 ms (Top 90.90%) | Memory: 138 MB (Top 23.61%)\r\nclass Solution {\r\n    public int numberOfWeakCharacters(int[][] properties) {\r\n        int[] maxH = new int[100002];\r\n        int count = 0;\r\n        for(int[] point:properties){\r\n            maxH[point[0]] = Math.max(point[1],maxH[point[0]]);\r\n        }\r\n        for(int i=100000;i>=0;i--){\r\n            maxH[i] = Math.max(maxH[i+1],maxH[i]);\r\n        }\r\n\r\n        for(int[] point:properties){\r\n            if(point[1]<maxH[point[0]+1])\r\n                count++;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 1076 ms (Top 5.06%) | Memory: 153.3 MB (Top 5.00%)\r\n var numberOfWeakCharacters = function(properties) {\r\n    // sort strongest to weakest\r\n    properties.sort((a, b) => {\r\n        if (b[0] - a[0]) {\r\n            return b[0] - a[0];\r\n        }\r\n        return b[1] - a[1];\r\n    });\r\n\r\n    // map all the unique index 0 values to a (descending)\r\n    // sorted array\r\n    const uniqueZeroIndexToOneIndex = new Map();\r\n    for (const [a, b] of properties) {\r\n        if (!uniqueZeroIndexToOneIndex.has(a)) {\r\n            uniqueZeroIndexToOneIndex.set(a, []);\r\n        }\r\n        uniqueZeroIndexToOneIndex.get(a).push(b);\r\n    }\r\n\r\n    // get all the unique index 0 values\r\n    const nums = [...uniqueZeroIndexToOneIndex.keys()];\r\n\r\n    let maxValue = -1;\r\n    let numWeakCharacters = 0;\r\n    for (let i = 0; i < nums.length; i++) {\r\n        // skip key in case if we deleted the key\r\n        if (!uniqueZeroIndexToOneIndex.has(nums[i])) continue;\r\n\r\n        const maxValOfI = uniqueZeroIndexToOneIndex.get(nums[i])[0];\r\n        if (maxValOfI <= maxValue) continue;\r\n        maxValue = maxValOfI;\r\n\r\n        for (let j = i + 1; j < nums.length; j++) {\r\n            // skip key in case if we deleted the key\r\n            if (!uniqueZeroIndexToOneIndex.has(nums[j])) continue;\r\n\r\n            // valuesOfJ will be sorted in descending order\r\n            const valuesOfJ = uniqueZeroIndexToOneIndex.get(nums[j])\r\n\r\n            // pop off all the weak values and add to numWeakCharacters\r\n            for (let k = valuesOfJ.length - 1; k >= 0; k--) {\r\n                if (maxValue > valuesOfJ[k]) {\r\n                    valuesOfJ.pop();\r\n                    numWeakCharacters++;\r\n                } else {\r\n                    // we won't be able to find any more weak characters\r\n                    // in valuesOfJ\r\n                    break;\r\n                }\r\n            }\r\n            if (valuesOfJ.length === 0) {\r\n                // delete the key if all the values were weak characters\r\n                uniqueZeroIndexToOneIndex.delete(nums[j]);\r\n            } else {\r\n                // if there is a stronger character updated it so we can\r\n                // eliminate more characters\r\n                maxValue = Math.max(valuesOfJ[0], maxValue);\r\n            }\r\n        }\r\n    }\r\n    return numWeakCharacters;\r\n};"
  }
}
