export default {
  "id": 881,
  "name": "Boats to Save People",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/boats-to-save-people",
  "relativeDir": "B/Boats to Save People",
  "slug": "0881-boats-to-save-people",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 24,
    "python": 14,
    "javascript": 25
  },
  "languages": {
    "cpp": "\t\t\t\t// 😉😉😉😉Please upvote if it helps 😉😉😉😉\r\nclass Solution {\r\npublic:\r\n    int numRescueBoats(vector<int>& people, int limit) {\r\n       \r\n        // sort vector\r\n        sort(people.begin(),people.end());\r\n        \r\n        int i = 0, j = people.size() - 1,cnt = 0;\r\n        \r\n        while(i <= j)\r\n        {   \r\n            // lightest person + heaviest person sum <= limit\r\n            // they can go together\r\n            if(people[i] + people[j] <= limit)\r\n            {\r\n                ++i;\r\n                --j;\r\n            }\r\n            // if sum is over the limit,\r\n            // heaviest will go alone.\r\n            else\r\n                --j;\r\n            \r\n            ++cnt;  // number of boats\r\n        }\r\n        \r\n        return cnt;\r\n        \r\n    }\r\n\t// for github repository link go to my profile.\r\n};",
    "python": "class Solution:\r\n    def numRescueBoats(self, people: List[int], limit: int) -> int:\r\n        people.sort()\r\n        lo = 0\r\n        hi = len(people)-1\r\n        boats = 0\r\n        while lo <= hi:\r\n            if people[lo] + people[hi] <= limit:\r\n                lo += 1\r\n                hi -= 1\r\n            else:\r\n                hi -= 1\r\n            boats += 1\r\n        return boats",
    "java": "// Runtime: 24 ms (Top 38.47%) | Memory: 65.6 MB (Top 33.01%)\r\nclass Solution {\r\n    public int numRescueBoats(int[] people, int limit) {\r\n        int boatCount = 0;\r\n        Arrays.sort(people);\r\n\r\n        int left = 0;\r\n        int right = people.length - 1;\r\n\r\n        while(left <= right){\r\n            int sum = people[left] + people[right];\r\n            if(sum <= limit){\r\n                boatCount++;\r\n                left++;\r\n                right--;\r\n            }\r\n            else{\r\n                boatCount++;\r\n                right--;\r\n            }\r\n        }\r\n        return boatCount;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} people\r\n * @param {number} limit\r\n * @return {number}\r\n */\r\nvar numRescueBoats = function(people, limit) {\r\n    people = people.sort((a,b) => a - b)\r\n\r\n    let left = 0\r\n    let right = people.length - 1\r\n    let res = 0\r\n    \r\n    while (left <= right) {\r\n       if (people[left] + people[right] <= limit) {\r\n           res++\r\n           right--\r\n           left++\r\n       } else if (people[right] <= limit) {\r\n           res++ \r\n           right--\r\n       }\r\n    }\r\n    \r\n    return res\r\n};"
  }
}
