export default {
  "id": 1111,
  "name": "Maximum Nesting Depth of Two Valid Parentheses Strings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings",
  "relativeDir": "M/Maximum Nesting Depth of Two Valid Parentheses Strings",
  "slug": "1111-maximum-nesting-depth-of-two-valid-parentheses-strings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 9,
    "python": 12,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 5 ms (Top 33.5%) | Memory: 7.72 MB (Top 13.7%)\r\n\r\n    class Solution {\r\npublic:\r\n    vector<int> maxDepthAfterSplit(string seq) {\r\n        //since we want the difference to be as low as possible so we will try to balance both A and B by trying to maintain the number of paranthesis as close as close as possible\r\n        vector<int> indexA, indexB, res(seq.length(), 0 );\r\n\t\t//initailly assuming all parenthesis belong to A so filling res with 0\r\n        int i = 0;\r\n        int addToA = 0, addToB = 0;\r\n        while(i < seq.length()){\r\n            if(seq[i] == '('){\r\n                if(addToA <= addToB){\r\n                    //adding depth to A when it's depth is lesser or equal to b\r\n                    indexA.push_back(i);\r\n                    addToA ++;\r\n                }else{\r\n                    indexB.push_back(i);\r\n                    addToB++;\r\n                }\r\n            }else{\r\n                // removing depth from string whose depth is maximum as we have to keep the difference minimum\r\n                if(addToA >= addToB){\r\n                    addToA--;\r\n                    indexA.push_back(i);\r\n                }else{\r\n                    indexB.push_back(i);\r\n                    addToB--;\r\n                }\r\n            }\r\n           i++;\r\n        }\r\n         for(i = 0; i < indexB.size(); i++){\r\n                res[indexB[i]] = 1;\r\n            }\r\n         return res;   \r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxDepthAfterSplit(self, seq: str) -> List[int]:\r\n        ans = []\r\n        last = 1\r\n        for i in seq:\r\n            if i == '(':\r\n                if last == 0: ans.append(1)\r\n                else:ans.append(0)\r\n            else:\r\n                ans.append(last)\r\n            last = (last + 1) % 2\r\n        return ans",
    "java": "class Solution {\r\n    public int[] maxDepthAfterSplit(String seq) {\r\n        int[] res = new int[seq.length()];\r\n        for(int i=0; i<seq.length(); i++){\r\n            res[i] = seq.charAt(i) == '(' ? i & 1 : 1-i & 1; \r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} seq\r\n * @return {number[]}\r\n */\r\nvar maxDepthAfterSplit = function(seq) {\r\n    let arr = []\r\n    for(let i=0; i<seq.length; i++){\r\n        arr.push(seq[i] == \"(\" ? i & 1 : 1-i & 1)\r\n    }\r\n    return arr\r\n};"
  }
}
