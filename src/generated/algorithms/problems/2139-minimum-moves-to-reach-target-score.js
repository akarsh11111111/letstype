export default {
  "id": 2139,
  "name": "Minimum Moves to Reach Target Score",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-moves-to-reach-target-score",
  "relativeDir": "M/Minimum Moves to Reach Target Score",
  "slug": "2139-minimum-moves-to-reach-target-score",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 17,
    "python": 10,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minMoves(int target, int maxDoubles) {\r\n        int cnt = 0;\r\n        while(target>1 && maxDoubles>0){\r\n            if(target%2==0){\r\n                cnt++;\r\n                maxDoubles--;\r\n                target = target/2;\r\n            }\r\n            else{\r\n                cnt++;\r\n                target--;\r\n            }\r\n        }\r\n        return cnt + (target-1);\r\n    }\r\n};",
    "python": "# Runtime: 58 ms (Top 30.40%) | Memory: 14 MB (Top 14.20%)\r\nclass Solution:\r\n    def minMoves(self, target: int, maxDoubles: int) -> int:\r\n        c=0\r\n        while(maxDoubles>0 and target>1):\r\n            c += target%2\r\n            target //= 2\r\n            c += 1\r\n            maxDoubles -=1\r\n        return c + target-1",
    "java": "class Solution {\r\n    public int minMoves(int target, int maxDoubles) {\r\n        int ans = 0;\r\n        for(int i=0;i<maxDoubles;i++){\r\n            if(target==1)break;\r\n            \r\n            if(target%2==0){\r\n                ans+=1;\r\n                target=(target)/2;\r\n            }else{\r\n                 ans+=2;\r\n                target=(target-1)/2;\r\n            }\r\n        }\r\n        return ans+target-1;\r\n    }\r\n}",
    "javascript": "// Runtime: 5040 ms (Top 9.23%) | Memory: 41.7 MB (Top 89.23%)\r\nvar minMoves = function(target, maxDoubles) {\r\n    if (maxDoubles === 0) return target - 1;\r\n    let count = 0;\r\n\r\n    while (target > 1) {\r\n        if (target % 2 === 0 && maxDoubles > 0) {\r\n            target /= 2;\r\n            maxDoubles--;\r\n        } else {\r\n            target--;\r\n        }\r\n\r\n        count++;\r\n    }\r\n\r\n    return count;\r\n};"
  }
}
