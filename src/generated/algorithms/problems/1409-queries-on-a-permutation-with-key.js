export default {
  "id": 1409,
  "name": "Queries on a Permutation With Key",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/queries-on-a-permutation-with-key",
  "relativeDir": "Q/Queries on a Permutation With Key",
  "slug": "1409-queries-on-a-permutation-with-key",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 27,
    "python": 9,
    "javascript": 15
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> processQueries(vector<int>& queries, int m) {\r\n        \r\n        vector<int> p;\r\n\r\n        for(int i=0; i<m; i++) p.push_back(m-i);\r\n        \r\n        for(int i=0; i<queries.size(); i++)\r\n        {\r\n            auto it = find(p.begin(), p.end(), queries[i]);\r\n            int j = it - p.begin();\r\n            int tmp = p[j];\r\n            p.erase(it);\r\n            p.push_back(tmp);\r\n            queries[i] = m-j-1;\r\n        }\r\n        return queries;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def processQueries(self, queries: List[int], m: int) -> List[int]:\r\n        perm=[i for i in range(1,m+1)]\r\n        res=[]\r\n        for i in queries:\r\n            ind=perm.index(i)\r\n            res.append(ind)\r\n            perm=[perm.pop(ind)]+perm\r\n        return res",
    "java": "// Runtime: 15 ms (Top 39.19%) | Memory: 43.3 MB (Top 49.82%)\r\nclass Solution {\r\n    public int[] processQueries(int[] queries, int m) {\r\n        int[] results = new int[queries.length];\r\n        ArrayList<Integer> permutations = new ArrayList<Integer>();\r\n\r\n        // Filling the permuations array with numbers.\r\n        for (int i = 0; i < m; i++)\r\n            permutations.add(i+1);\r\n\r\n        // Looping on the queries & checking their index in the permuations\r\n        for (int i = 0; i < queries.length; i++) {\r\n            int query = queries[i];\r\n            for (int j = 0; j < permutations.size(); j++)\r\n                if (permutations.get(j) == query) {\r\n                    results[i] = j;\r\n                    int temp = permutations.get(j);\r\n                    permutations.remove(j);\r\n                    permutations.add(0, temp);\r\n                    break;\r\n                }\r\n        }\r\n\r\n        return results;\r\n\r\n    }\r\n}",
    "javascript": "var processQueries = function(queries, m) {\r\n    let result = [];\r\n    let permutation = [];\r\n    for(let i=0; i<m; i++){\r\n        permutation.push(i+1);\r\n    }\r\n    \r\n    for(let i=0; i<queries.length; i++){\r\n        let index = permutation.indexOf(queries[i]);\r\n        result.push(index);\r\n        permutation.splice(index,1);\r\n        permutation.unshift(queries[i]);\r\n    }\r\n    return result;\r\n};"
  }
}
