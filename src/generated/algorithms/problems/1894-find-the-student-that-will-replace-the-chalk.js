export default {
  "id": 1894,
  "name": "Find the Student that Will Replace the Chalk",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk",
  "relativeDir": "F/Find the Student that Will Replace the Chalk",
  "slug": "1894-find-the-student-that-will-replace-the-chalk",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 18,
    "python": 17,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    // T(n) = O(n) S(n) = O(1) \r\n    int chalkReplacer(vector<int>& chalk, int k) {\r\n        // Size of the vector\r\n        int n = chalk.size();\r\n        // Store the sum of the elements in the vector\r\n        long sum = 0;\r\n        // Calculate the sum of the elements \r\n        for (int n : chalk) sum += n;\r\n        // Update k as the remainder of the sum \r\n        // to make sure that the while loop\r\n\t\t// will traverse the vector at most 1 time\r\n        k = k % sum;\r\n        // Start from the initial value in the array\r\n        int idx = 0;\r\n        // While the next student has enough chalk\r\n        while (k >= chalk[idx]) {\r\n            // Decrease the remaining chalk\r\n            k -= chalk[idx];\r\n            // Increase the index\r\n            idx = (idx + 1) % n;\r\n        }\r\n        // Return the index of the student without\r\n        // enough chalk\r\n        return idx;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def chalkReplacer(self, chalk: List[int], k: int) -> int:\r\n        x = sum(chalk)\r\n        if x<k:\r\n            k = k%x\r\n        if x == k:\r\n            return 0\r\n        i = 0\r\n        n = len(chalk)\r\n        while True:\r\n            if chalk[i]<=k:\r\n                k -= chalk[i]\r\n            else:\r\n                break\r\n            i +=1\r\n               \r\n        return i",
    "java": "class Solution {\r\n\r\npublic int chalkReplacer(int[] chalk, int k) {\r\n    long sum = 0;\r\n    for (int c : chalk) {\r\n        sum += c;\r\n    }\r\n    long left = k % sum; \r\n    for (int i = 0; i < chalk.length; i++){\r\n        if(left >= chalk[i]){ \r\n            left -= chalk[i];\r\n        } else {    \r\n            return i;\r\n        }\r\n    }\r\n    return -1;  //just for return statement, put whatever you want here\r\n}\r\n}",
    "javascript": "var chalkReplacer = function(chalk, k) {\r\n    const sum = chalk.reduce((r, c) => r + c, 0);\r\n    \r\n    k %= sum;\r\n    \r\n    for (let i = 0; i < chalk.length; i++) {\r\n        if (chalk[i] > k) {\r\n            return i;\r\n        }\r\n\r\n        k -= chalk[i];\r\n    }\r\n};"
  }
}
