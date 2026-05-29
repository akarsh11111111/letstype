export default {
  "id": 1491,
  "name": "Average Salary Excluding the Minimum and Maximum Salary",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary",
  "relativeDir": "A/Average Salary Excluding the Minimum and Maximum Salary",
  "slug": "1491-average-salary-excluding-the-minimum-and-maximum-salary",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 14,
    "python": 4,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    double average(vector<int>& salary) {\r\n        int n = salary.size();\r\n        double ans=0;\r\n        sort(salary.begin(),salary.end());\r\n        for(int i=1;i<n-1;i++){\r\n            ans+=salary[i];\r\n        }\r\n        return ans/(n-2);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def average(self, salary: List[int]) -> float:       \r\n\r\n        return (sum(salary)-min(salary)-max(salary))/(len(salary)-2)",
    "java": "class Solution {\r\n    public double average(int[] salary) {\r\n        int n = salary.length-2;\r\n        int max = Integer.MIN_VALUE;\r\n        int min = Integer.MAX_VALUE;\r\n        int sum = 0;\r\n        for(int i=0;i<n+2;i++){\r\n            sum += salary[i];\r\n            max = Math.max(max,salary[i]);\r\n            min = Math.min(min,salary[i]);\r\n        }\r\n        return (double)(sum-max-min)/n;\r\n    }\r\n}",
    "javascript": "// Runtime: 53 ms (Top 99.20%) | Memory: 42 MB (Top 50.52%)\r\nvar average = function(salary) {\r\n    let max = salary[0], min = salary[salary.length-1], sum = 0;\r\n    for(let i = 0; i < salary.length; i++) {\r\n        if(salary[i] > max) {\r\n            max = salary[i];\r\n        }\r\n        else if(salary[i] < min) {\r\n            min = salary[i];\r\n        }\r\n        sum += salary[i];\r\n    }\r\n    return (sum-min-max)/(salary.length-2);\r\n};"
  }
}
