export default {
  "id": 1452,
  "name": "People Whose List of Favorite Companies Is Not a Subset of Another List",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list",
  "relativeDir": "P/People Whose List of Favorite Companies Is Not a Subset of Another List",
  "slug": "1452-people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 42,
    "java": 27,
    "python": 21,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 2231 ms (Top 12.50%) | Memory: 55 MB (Top 76.79%)\r\n/*\r\n * author: deytulsi18\r\n * problem: https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/\r\n * time complexity: O(n*n*m)\r\n * auxiliary space: O(1)\r\n * language: cpp\r\n */\r\nclass Solution {\r\npublic:\r\n    bool isSubset(vector<string> &b, vector<string> &a)\r\n    {\r\n       return (includes(a.begin(), a.end(),\r\n                  b.begin(), b.end()));\r\n    }\r\n    vector<int> peopleIndexes(vector<vector<string>>& favoriteCompanies) {\r\n\r\n        int n = favoriteCompanies.size();\r\n        vector<int> res;\r\n\r\n        for (auto &i : favoriteCompanies)\r\n        sort(begin(i), end(i));\r\n\r\n        for (int i = 0; i < n; i++)\r\n        {\r\n            bool isValid = true;\r\n\r\n            for (int j = 0; j < n; j++)\r\n                if (i != j)\r\n                    if (isSubset(favoriteCompanies[i], favoriteCompanies[j]))\r\n                    {\r\n                        isValid = false;\r\n                        break;\r\n                    }\r\n\r\n            if (isValid)\r\n                res.emplace_back(i);\r\n        }\r\n\r\n        return res;\r\n    }\r\n};;",
    "python": "class Solution:\r\n    def peopleIndexes(self, favoriteCompanies: List[List[str]]) -> List[int]:\r\n        \r\n        F = favoriteCompanies\r\n        ans = [] \r\n        \r\n        seen = set() \r\n        \r\n        for i in range(len(F)):\r\n            for j in range(i+1,len(F)):\r\n                st1 = set(F[i])\r\n                st2 = set(F[j])\r\n                if st1.intersection(st2) == st1: seen.add(i)\r\n                if st2.intersection(st1) == st2: seen.add(j) \r\n\r\n        ans = []\r\n        for i in range(len(F)):\r\n            if i in seen: continue \r\n            ans.append(i) \r\n            \r\n        return ans",
    "java": "// Runtime: 362 ms (Top 62.96%) | Memory: 52.4 MB (Top 92.59%)\r\nclass Solution {\r\n    public List<Integer> peopleIndexes(List<List<String>> favoriteCompanies) {\r\n        Set<String>[] fav = new Set[favoriteCompanies.size()];\r\n        Set<Integer> set = new HashSet<>();\r\n        for (int i = 0; i < favoriteCompanies.size(); i++) {\r\n            set.add(i);\r\n            fav[i] = new HashSet<>(favoriteCompanies.get(i));\r\n        }\r\n        for (int i = 1; i < favoriteCompanies.size(); i++) {\r\n            if (!set.contains(i)) continue;\r\n            for (int j = 0; j < i; j++) {\r\n                if (!set.contains(j)) continue;\r\n                if (isSubSet(fav[j], fav[i])) set.remove(j);\r\n                if (isSubSet(fav[i], fav[j])) set.remove(i);\r\n            }\r\n        }\r\n        List<Integer> ans = new ArrayList<>(set);\r\n        Collections.sort(ans);\r\n        return ans;\r\n    }\r\n\r\n    private boolean isSubSet(Set<String> child, Set<String> parent) {\r\n        if (child.size() > parent.size()) return false;\r\n        return parent.containsAll(child);\r\n    }\r\n}",
    "javascript": "// Runtime: 2497 ms (Top 5.55%) | Memory: 83.5 MB (Top 16.67%)\r\nvar peopleIndexes = function(favoriteCompanies) {\r\n    let arr = favoriteCompanies\r\n    let len = arr.length\r\n    let ret = []\r\n    for(let i = 0; i < len; i++) {\r\n        let item1 = arr[i]\r\n        let isSubset = false\r\n        for(let j = 0; j < len; j++) {\r\n            if(i === j) continue\r\n            let item2 = arr[j]\r\n            let s = new Set(item2)\r\n            if(item1.every(a => s.has(a))) {\r\n                isSubset = true\r\n                break\r\n            }\r\n        }\r\n        if(!isSubset) ret.push(i)\r\n    }\r\n    return ret\r\n};"
  }
}
