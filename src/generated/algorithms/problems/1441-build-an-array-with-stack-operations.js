export default {
  "id": 1441,
  "name": "Build an Array With Stack Operations",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/build-an-array-with-stack-operations",
  "relativeDir": "B/Build an Array With Stack Operations",
  "slug": "1441-build-an-array-with-stack-operations",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 17,
    "python": 14,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 65.19%) | Memory: 7.9 MB (Top 10.48%)\r\nclass Solution {\r\npublic:\r\n    vector<string> buildArray(vector<int>& target, int n) {\r\n        vector<string>ans;\r\n        int l=target.size(), count=0,ind=0; // ind is index of the target array\r\n\r\n        for(int i=1;i<=n;i++){\r\n            if(count==l) break;\r\n            if(target[ind]!=i){\r\n                ans.push_back(\"Push\");\r\n                ans.push_back(\"Pop\");\r\n            }\r\n            else{\r\n                ans.push_back(\"Push\");\r\n                count++;\r\n                ind++;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def buildArray(self, target: List[int], n: int) -> List[str]:\r\n        temp = []\r\n        result = []\r\n        x = target[-1]\r\n        for i in range(1,x+1):\r\n            temp.append(i)\r\n        for i in range(len(temp)):\r\n            if temp[i] in target:\r\n                result.append(\"Push\")\r\n            elif temp[i] not in target:\r\n                result.append(\"Push\")\r\n                result.append(\"Pop\")\r\n        return result",
    "java": "class Solution {\r\n    public List<String> buildArray(int[] target, int n) {\r\n      List<String> result=new ArrayList<>();\r\n        int i=1,j=0;\r\n        while(j<target.length)\r\n        {\r\n            result.add(\"Push\");\r\n            if(i==target[j]){\r\n                j++;\r\n            }else{\r\n                result.add(\"Pop\");\r\n            }\r\n            i++;\r\n        }\r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 89 ms (Top 50.63%) | Memory: 42.3 MB (Top 17.99%)\r\n/**\r\n * @param {number[]} target\r\n * @param {number} n\r\n * @return {string[]}\r\n */\r\nvar buildArray = function(target, n) {\r\n    let arr = [];\r\n    let index = 0;\r\n    for(let i = 1; i <= target[target.length-1];i++){\r\n        if(target[index] == i){\r\n            arr.push('Push');\r\n            index++;\r\n        }else{\r\n            arr.push('Push');\r\n            arr.push('Pop');\r\n        }\r\n    }\r\n    return arr;\r\n};"
  }
}
