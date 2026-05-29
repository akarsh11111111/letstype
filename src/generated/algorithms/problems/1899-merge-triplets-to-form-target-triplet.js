export default {
  "id": 1899,
  "name": "Merge Triplets to Form Target Triplet",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/merge-triplets-to-form-target-triplet",
  "relativeDir": "M/Merge Triplets to Form Target Triplet",
  "slug": "1899-merge-triplets-to-form-target-triplet",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 29,
    "python": 11,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool mergeTriplets(vector<vector<int>>& triplets, vector<int>& target) {\r\n        int first = 0, second = 0, third = 0;\r\n        for (auto tr : triplets) {\r\n            if (tr[0] == target[0] && tr[1] <= target[1] && tr[2] <= target[2]) first = 1;\r\n            if (tr[0] <= target[0] && tr[1] == target[1] && tr[2] <= target[2]) second = 1;\r\n            if (tr[0] <= target[0] && tr[1] <= target[1] && tr[2] == target[2]) third = 1;\r\n        }\r\n        return first && second && third;\r\n    }\r\n};",
    "python": "// Runtime: 2191 ms (Top 5.08%) | Memory: 62.60 MB (Top 7.94%)\r\n\r\nclass Solution:\r\n    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:\r\n        \r\n        a, b, c = 0, 0, 0\r\n        for i, (x, y, z) in enumerate(triplets):\r\n                if not(  x > target[0] or y > target[1] or z > target[2]):\r\n                     a, b, c = max(a, x), max(b, y), max(c, z)\r\n                        \r\n        return [a, b, c] == target",
    "java": "class Solution {\r\n    public boolean mergeTriplets(int[][] triplets, int[] target) {\r\n\r\n        boolean xFound = false, yFound = false, zFound = false;\r\n                \r\n        for(int[] triplet : triplets){\r\n\t\t\r\n            //Current Triplet is target\r\n            if(triplet[0] == target[0] && triplet[1] == target[1] && triplet[2] == target[2])return true;\r\n            \r\n            if(triplet[0] == target[0]){\r\n                if(triplet[1] <= target[1] && triplet[2] <= target[2])\r\n                    if(yFound && zFound)return true;\r\n                    else xFound = true;\r\n            }\r\n            if(triplet[1] == target[1]){\r\n                if(triplet[0] <= target[0] && triplet[2] <= target[2])\r\n                    if(xFound && zFound)return true;\r\n                    else yFound = true;\r\n            }\r\n            if(triplet[2] == target[2]){\r\n                if(triplet[1] <= target[1] && triplet[0] <= target[0])\r\n                    if(yFound && xFound)return true;\r\n                    else zFound = true;\r\n            }        \r\n        }\r\n        return xFound && yFound && zFound;\r\n    }\r\n}",
    "javascript": "// Runtime: 167 ms (Top 96.67%) | Memory: 72.6 MB (Top 50.00%)\r\nvar mergeTriplets = function(triplets, target) {\r\n\r\n    let fst = false, snd = false, thrd = false;\r\n\r\n    const [t1, t2, t3] = target;\r\n\r\n    for(let i = 0; i < triplets.length; i++) {\r\n\r\n        const [a, b, c] = triplets[i];\r\n\r\n        if(a === t1 && b <= t2 && c <= t3) fst = true;\r\n\r\n        if(b === t2 && a <= t1 && c <= t3) snd = true;\r\n\r\n        if(c === t3 && a <= t1 && b <= t2) thrd = true;\r\n\r\n        if(fst && snd && thrd) return true;\r\n    }\r\n    return false;\r\n};"
  }
}
