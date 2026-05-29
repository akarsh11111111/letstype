export default {
  "id": 1238,
  "name": "Circular Permutation in Binary Representation",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/circular-permutation-in-binary-representation",
  "relativeDir": "C/Circular Permutation in Binary Representation",
  "slug": "1238-circular-permutation-in-binary-representation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 62,
    "java": 25,
    "python": 5,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 280 ms (Top 7.77%) | Memory: 78.8 MB (Top 5.30%)\r\nclass Solution {\r\npublic:\r\n    vector<string> get_val(int n)\r\n    {\r\n        if(n==1)return {\"0\",\"1\"};\r\n        vector<string> v = get_val(n-1);\r\n        vector<string> ans;\r\n        for(int i = 0;i<v.size();i++)\r\n        {\r\n            ans.push_back(\"0\" + v[i]);\r\n        }\r\n\r\n        for(int i = v.size()-1;i>=0;i--)\r\n        {\r\n            ans.push_back(\"1\" + v[i]);\r\n        }\r\n        return ans;\r\n    }\r\n\r\n    vector<int> solve(int n)\r\n    {\r\n        vector<string> v = get_val(n);\r\n        vector<int> ans;\r\n        for(int i = 0;i<v.size();i++)\r\n        {\r\n            string s = v[i];\r\n            int x = 0;\r\n            for(int j = 0;j<s.size();j++)\r\n            {\r\n                x = x*2 + s[j]-'0';\r\n            }\r\n            ans.push_back(x);\r\n        }\r\n        return ans;\r\n    }\r\n\r\n    vector<int> circularPermutation(int n, int start) {\r\n\r\n        vector<int> v = solve(n);\r\n        int ind;\r\n        for(int i = 0;i<v.size();i++)\r\n        {\r\n            if(v[i]==start)\r\n            {\r\n                ind = i;\r\n                break;\r\n            }\r\n        }\r\n\r\n        vector<int> ans;\r\n        for(int i = ind;i<v.size();i++)\r\n        {\r\n            ans.push_back(v[i]);\r\n        }\r\n        for(int i = 0;i<ind;i++)\r\n        {\r\n            ans.push_back(v[i]);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def circularPermutation(self, n: int, start: int) -> List[int]:\r\n        gray_code = [x ^ (x >> 1) for x in range(2 ** n)]\r\n        start_i = gray_code.index(start)\r\n        return gray_code[start_i:] + gray_code[:start_i]",
    "java": "class Solution {\r\n    public List<Integer> circularPermutation(int n, int start) {\r\n        List<Integer> l = new ArrayList<Integer>();\r\n        int i=0;\r\n        int len = (int)Math.pow(2,n);\r\n        int[] arr = new int[len];\r\n        while(i<len){\r\n            arr[i]=(i)^(i/2);\r\n            i++;\r\n        }\r\n        \r\n        i=0;\r\n        while(arr[i]!=start)i++;\r\n        while(i<arr.length){\r\n            l.add(arr[i]);\r\n            i++;\r\n        }\r\n        i=0;\r\n        while(i<arr.length && arr[i]!=start){\r\n            l.add(arr[i]);\r\n            i++;\r\n        }\r\n        return l;\r\n    }\r\n}",
    "javascript": "// Runtime: 152 ms (Top 85.71%) | Memory: 56.7 MB (Top 28.57%)\r\nvar circularPermutation = function(n, start) {\r\n    const grayCodes = [];\r\n\r\n    let startIdx = -1;\r\n\r\n    for (let i = 0; i <= 2**n - 1; i++) {\r\n        grayCodes[i] = i ^ (i >> 1);\r\n\r\n        if (grayCodes[i] == start) startIdx = i;\r\n    }\r\n\r\n    const res = [];\r\n\r\n    for (let i = 0; i <= 2**n - 1; i++) {\r\n        res[i] = grayCodes[startIdx];\r\n\r\n        startIdx++;\r\n\r\n        if (startIdx == grayCodes.length) startIdx = 0;\r\n    }\r\n\r\n    return res;\r\n};"
  }
}
