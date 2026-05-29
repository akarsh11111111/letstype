export default {
  "id": 2028,
  "name": "Find Missing Observations",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-missing-observations",
  "relativeDir": "F/Find Missing Observations",
  "slug": "2028-find-missing-observations",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 26,
    "python": 9,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> missingRolls(vector<int>& rolls, int mean, int n) {\r\n        int size=rolls.size(),sum=accumulate(rolls.begin(),rolls.end(),0),missingSum=0;\r\n         missingSum=mean*(n+size)-sum;\r\n        if(missingSum<n || missingSum>6*n)\r\n            return {};\r\n         int rem=missingSum%n;\r\n         vector<int>ans(n,missingSum/n);\r\n        for(int i=0;i<rem;i++)\r\n            ans[i]+=1;\r\n        return ans;   \r\n    }\r\n};",
    "python": "class Solution:\r\n    def missingRolls(self, rolls: List[int], mean: int, n: int) -> List[int]:\r\n        missing_val, rem = divmod(mean * (len(rolls) + n) - sum(rolls), n)\r\n        if rem == 0:\r\n            if 1 <= missing_val <= 6:\r\n                return [missing_val] * n\r\n        elif 1 <= missing_val < 6:\r\n            return [missing_val + 1] * rem + [missing_val] * (n - rem)\r\n        return []",
    "java": "// Runtime: 3 ms (Top 98.11%) | Memory: 61.90 MB (Top 20.33%)\r\n\r\nclass Solution {\r\n    public int[] missingRolls(int[] rolls, int mean, int n) {\r\n        \r\n    \tint i,m=rolls.length,sum=0;\r\n    \tfor(i=0;i<m;i++)\r\n    \t\tsum+=rolls[i];\r\n\t\t\t\r\n    \tint x=(mean*(m+n))-sum;\r\n\t\t\r\n\t\tif(x<=0||n*6<x||((x/n)==0)) {\r\n    \t\treturn new int[] {};\r\n\t\t}\r\n\t\t\t\r\n    \tint arr[]=new int[n];\r\n    \t\r\n\t\tint p=x/n,q=x%n;\r\n    \tfor(i=0;i<n;i++)  {\r\n\t\t\r\n    \t\tarr[i]=p+(q>0?1:0);\r\n    \t\tq--;\r\n    \t}\r\n    \treturn arr;\r\n    }\r\n}",
    "javascript": "// Runtime: 262 ms (Top 83.78%) | Memory: 64.50 MB (Top 83.78%)\r\n\r\nvar missingRolls = function(rolls, mean, n) {\r\n  const diff = mean * (rolls.length + n) - rolls.reduce((a, b) => a + b);\r\n  if (diff < n) return []; // Cannot be covered even by case 1 1 1 ...\r\n  if (diff > 6 * n) return []; // Cannot be covered even by case 6 6 6 ...\r\n  return Array(n)\r\n    .fill(Math.ceil(diff / n), 0, diff % n)\r\n    .fill(Math.floor(diff / n), diff % n);\r\n};"
  }
}
