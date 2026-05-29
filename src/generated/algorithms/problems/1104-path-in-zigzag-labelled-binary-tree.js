export default {
  "id": 1104,
  "name": "Path In Zigzag Labelled Binary Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree",
  "relativeDir": "P/Path In Zigzag Labelled Binary Tree",
  "slug": "1104-path-in-zigzag-labelled-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 30,
    "python": 20,
    "javascript": 37
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.2 MB (Top 69.70%)\r\nclass Solution\r\n{\r\npublic:\r\n    vector<int> pathInZigZagTree(int label)\r\n    {\r\n        vector<int> v;\r\n        int n = 0, num = label;\r\n        while (label)\r\n        {\r\n            n++;\r\n            label = label >> 1;\r\n        }\r\n\r\n        int l, r, c, ans;\r\n        for (int i = n; i >= 2; i--)\r\n        {\r\n\r\n            r = pow(2, i) - 1;\r\n            l = pow(2, i - 1);\r\n            c = r - num;\r\n            ans = l + c;\r\n            if ((n + i) % 2)\r\n            {\r\n                v.push_back(ans);\r\n            }\r\n            else\r\n            {\r\n                v.push_back(num);\r\n            }\r\n            num /= 2;\r\n        }\r\n        v.push_back(1);\r\n        sort(v.begin(), v.end());\r\n        return v;\r\n    }\r\n};",
    "python": "// Runtime: 31 ms (Top 88.8%) | Memory: 16.50 MB (Top 52.0%)\r\n\r\nclass Solution:\r\n    def pathInZigZagTree(self, label: int) -> List[int]:\r\n        \r\n        x = label\r\n        mask = 0 \r\n        while x > 1:\r\n            x >>= 1\r\n            mask <<= 1\r\n            mask |= 1\r\n            \r\n        x = label\r\n        res = deque()\r\n        while x:\r\n            res.appendleft(x)\r\n            x >>= 1\r\n            mask >>= 1\r\n            x ^= mask\r\n        return res",
    "java": "class Solution {\r\n    \r\n   \r\n    \r\n    \r\n    public List<Integer> pathInZigZagTree(int label) \r\n    {\r\n        int level, upper, parent, i = label;\r\n        double min, max;\r\n        List<Integer> ans = new ArrayList<Integer> ();\r\n        \r\n        ans.add(i);\r\n        \r\n        while( i> 1)\r\n        {\r\n            level = (int)(Math.log(i) / Math.log(2));\r\n            upper = level -1;\r\n            min = Math.pow(2.0, upper);\r\n            max = Math.pow(2.0, level) - 1;\r\n            parent = (int)(min + max) - i/2; \r\n            \r\n            ans.add(0, parent);\r\n            i = parent;\r\n        }\r\n        \r\n        return ans;\r\n        \r\n        \r\n    }\r\n}",
    "javascript": "var pathInZigZagTree = function(label) {\r\n    //store highest and lowest value for each level\r\n    let levels = [[1,1]] //to reduce space complexity we will fill the levels array with out output as we go\r\n    let totalNodes = 1\r\n    let nodesInLastRow = 1\r\n    \r\n    //Calculate which level the label lies in\r\n    while (totalNodes < label) {      \r\n        let lowest = totalNodes + 1\r\n        \r\n        nodesInLastRow = nodesInLastRow * 2\r\n        totalNodes += nodesInLastRow\r\n          \r\n        let highest = totalNodes\r\n        \r\n        levels.push([lowest, highest])\r\n    }\r\n    \r\n\r\n    let index = levels.length\r\n    let childBoundaries = levels[levels.length -1]\r\n    levels[levels.length -1] = label\r\n    \r\n    //Work bottom up, for each level, calculate the value based on the child and the child boundaries boundaries\r\n    for (let i=levels.length-2; i>=0; i--) {\r\n        let childLevel = i+2 //2 because i is index of 0, so 1 is to preset it to 1...n and then and second one is parent level\r\n        let childValue = levels[i+1]    \r\n        \r\n        let inversionCalculation = Math.abs((childBoundaries[0] + childBoundaries[1]) - childValue)\r\n        \r\n        childBoundaries = levels[i]\r\n        \r\n        levels[i] = Math.floor(inversionCalculation/2)   \r\n    }\r\n    \r\n    return levels\r\n};"
  }
}
