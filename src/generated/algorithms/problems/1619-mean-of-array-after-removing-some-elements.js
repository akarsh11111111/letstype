export default {
  "id": 1619,
  "name": "Mean of Array After Removing Some Elements",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/mean-of-array-after-removing-some-elements",
  "relativeDir": "M/Mean of Array After Removing Some Elements",
  "slug": "1619-mean-of-array-after-removing-some-elements",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 10,
    "java": 17,
    "python": 6,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    double trimMean(vector<int>& arr) {\r\n        auto first = arr.begin() + arr.size() / 20;\r\n        auto second = arr.end() - arr.size() / 20;\r\n        nth_element(arr.begin(), first, arr.end());\r\n        nth_element(first, second, arr.end());\r\n        return accumulate(first, second, 0.0) / distance(first, second);\r\n    }\r\n};",
    "python": "# Runtime: 137 ms (Top 11.43%) | Memory: 14.1 MB (Top 36.03%)\r\nclass Solution:\r\n    def trimMean(self, arr: List[int]) -> float:\r\n        arr.sort()\r\n\r\n        return statistics.mean(arr[int(len(arr)*5/100):len(arr)-int(len(arr)*5/100)])",
    "java": "class Solution {\r\n    public double trimMean(int[] arr) {\r\n        Arrays.sort(arr);\r\n        int length = arr.length;\r\n        int toRemove = length * 5 / 100;\r\n        int total = 0;\r\n        for (int number: arr) {\r\n            total += number;\r\n        }\r\n        for (int i=0; i<toRemove; i++)\r\n            total -= arr[i];\r\n        for (int i=length-1; i>= length-toRemove; i--)\r\n            total -= arr[i];\r\n        length -= (2 * toRemove);\r\n        return (double) ((double)total / (double)length);\r\n    }\r\n}",
    "javascript": "// Runtime: 57 ms (Top 60.0%) | Memory: 42.00 MB (Top 98.0%)\r\n\r\nvar trimMean = function(arr) {\r\n    arr.sort((a,b)=>a-b);\r\n    let  sum = 0;\r\n    for (let i = arr.length / 20; i < arr.length - arr.length / 20; i++) {\r\n        sum += arr[i];\r\n    }\r\n    return sum / (arr.length - arr.length / 10);\r\n};"
  }
}
