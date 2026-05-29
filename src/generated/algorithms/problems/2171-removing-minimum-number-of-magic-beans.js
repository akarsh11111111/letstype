export default {
  "id": 2171,
  "name": "Removing Minimum Number of Magic Beans",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/removing-minimum-number-of-magic-beans",
  "relativeDir": "R/Removing Minimum Number of Magic Beans",
  "slug": "2171-removing-minimum-number-of-magic-beans",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 19,
    "python": 5,
    "javascript": 22
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    long long minimumRemoval(vector<int>& beans) {\r\n      long long n = beans.size();\r\n      sort(beans.begin(), beans.end());\r\n      long long sum = 0;\r\n            for(int i=0; i<n; i++)\r\n            {\r\n                    sum += beans[i];\r\n            }\r\n       long long ans = sum;\r\n       for(int i=0; i<n; i++)\r\n       {\r\n            long long curr = sum - (n-i)*beans[i];\r\n            if(ans > curr)\r\n            ans = curr;\r\n       }\r\n      return ans;      \r\n    }    \r\n};",
    "python": "// Runtime: 1076 ms (Top 41.88%) | Memory: 30.80 MB (Top 35.63%)\r\n\r\nclass Solution:\r\n    def minimumRemoval(self, A: List[int]) -> int:\r\n        return sum(A) - max((len(A) - i) * n for i, n in enumerate(sorted(A)))",
    "java": "class Solution {\r\n    public long minimumRemoval(int[] beans) {\r\n        Arrays.parallelSort(beans);\r\n        long sum=0,min=Long.MAX_VALUE;\r\n        int n=beans.length;\r\n        for(int i:beans)\r\n            sum+=i;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            long temp=sum-((n-i+0L)*beans[i]);\r\n            min=(long)Math.min(min,temp);\r\n           \r\n        }\r\n        return min;\r\n        \r\n        \r\n        \r\n    }\r\n}",
    "javascript": "// Runtime: 218 ms (Top 90.0%) | Memory: 61.37 MB (Top 60.0%)\r\n\r\n/**\r\n * @param {number[]} beans\r\n * @return {number}\r\n */\r\n // time complexity -> O(NlogN) and Space is O(logN) due to sorting. \r\n var minimumRemoval = function(beans) {\r\n    beans.sort((a, b) => a - b);\r\n    let frontSum = beans.reduce((sum , a) => sum + a, 0);\r\n    let backSum = 0;\r\n    let done = 0;\r\n    let result = Number.MAX_SAFE_INTEGER;\r\n    for(let j = beans.length - 1; j >= 0; j--){\r\n        frontSum -= beans[j];\r\n        count = frontSum + (backSum - (beans[j] * done));\r\n        result = Math.min(result, count);\r\n        done++;\r\n        backSum += beans[j];\r\n    }\r\n    return result;\r\n};"
  }
}
