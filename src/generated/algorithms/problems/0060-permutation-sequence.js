export default {
  "id": 60,
  "name": "Permutation Sequence",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/permutation-sequence",
  "relativeDir": "P/Permutation Sequence",
  "slug": "0060-permutation-sequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 22,
    "python": 18,
    "javascript": 31
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string getPermutation(int n, int k) {\r\n        int fact=1;\r\n        vector<int> numbers;\r\n        for(int i=1;i<n;i++){\r\n            fact=fact*i;\r\n            numbers.push_back(i);\r\n        }\r\n        numbers.push_back(n);\r\n        string ans=\"\";\r\n        k=k-1;\r\n        while(true){\r\n            ans=ans+to_string(numbers[k/fact]);\r\n            numbers.erase(numbers.begin()+(k/fact));\r\n            if(numbers.size()==0) break;\r\n            k=k%fact;\r\n            fact=fact/numbers.size();\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 38 ms (Top 71.08%) | Memory: 17.30 MB (Top 15.2%)\r\n\r\nclass Solution:\r\n    def getPermutation(self, n: int, k: int) -> str:\r\n        nums = [i for i in range(1, n+1)] # list of numbers from 1 to n\r\n        factorial = [1] * n\r\n        for i in range(1, n):\r\n            factorial[i] = factorial[i-1] * i\r\n        \r\n        k -= 1\r\n        result = []\r\n        for i in range(n-1, -1, -1):\r\n            index = k // factorial[i]\r\n            result.append(str(nums[index]))\r\n            nums.pop(index)\r\n            k = k % factorial[i]\r\n        \r\n        return ''.join(result)",
    "java": "class Solution {\r\n    public String getPermutation(int n, int k) {\r\n        int fact = 1;\r\n        List<Integer> nums = new ArrayList<>();\r\n        for(int i = 1; i<n; i++){\r\n            fact = fact * i;\r\n            nums.add(i);\r\n        }\r\n        nums.add(n); // Add last permutation number.\r\n        String res = \"\";\r\n        k = k - 1; // We use 0 indexing.\r\n        while(true){\r\n            res = res + nums.get(k / fact); \r\n            nums.remove(k / fact); \r\n            if(nums.size() == 0) break;\r\n            \r\n            k = k % fact;\r\n            fact = fact / nums.size();\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "const dfs = (path, visited, result, numbers, limit) => {\r\n    // return if we already reached the permutation needed\r\n    if(result.length === limit) {\r\n        return;\r\n    }\r\n    \r\n    // commit the result\r\n    if(path.length === numbers.length) {\r\n        result.push(path.join(''))\r\n        return;\r\n    }\r\n    \r\n    // easier to reason and less prone to miss the -1 offset of normal for loop\r\n    for(const [index, number] of numbers.entries()) {\r\n        if(visited[index]) continue;\r\n        \r\n        path.push(number);\r\n        visited[index] = true;\r\n        dfs(path, visited, result, numbers);\r\n        path.pop();\r\n        visited[index] = false;\r\n    }\r\n}\r\n\r\nvar getPermutation = function(n, k) {\r\n    const numbers = Array.from({length: n}, (_, i) => i + 1);\r\n    let visitedNumbers = Array.from(numbers, () => false);\r\n    let result = [];\r\n    dfs([], visitedNumbers, result, numbers, k);\r\n    return result[k - 1];\r\n};"
  }
}
