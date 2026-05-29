export default {
  "id": 2037,
  "name": "Minimum Number of Moves to Seat Everyone",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone",
  "relativeDir": "M/Minimum Number of Moves to Seat Everyone",
  "slug": "2037-minimum-number-of-moves-to-seat-everyone",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 12,
    "python": 5,
    "javascript": 8
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minMovesToSeat(vector<int>& seats, vector<int>& students) {\r\n        sort(seats.begin(), seats.end());\r\n        sort(students.begin(), students.end());\r\n        \r\n        int res = 0;\r\n        for (int i = 0; i < seats.size(); i++) res += abs(seats[i] - students[i]);\r\n        \r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:\r\n        seats.sort()\r\n        students.sort()\r\n        return sum(abs(seat - student) for seat, student in zip(seats, students))",
    "java": "// Runtime: 2 ms (Top 99.78%) | Memory: 41.7 MB (Top 99.11%)\r\nclass Solution {\r\n    public int minMovesToSeat(int[] seats, int[] students) {\r\n        Arrays.sort(seats);\r\n        Arrays.sort(students);\r\n        int diff = 0;\r\n        for(int i=0; i<seats.length; i++){\r\n            diff += Math.abs(students[i]-seats[i]);\r\n        }\r\n        return diff;\r\n    }\r\n}",
    "javascript": "var minMovesToSeat = function(seats, students) {\r\n    let sum = 0\r\n    seats=seats.sort((a,b)=>a-b)    \r\n    students=students.sort((a,b)=>a-b)\r\n    for(let i=0;i<seats.length;i++)\r\n        sum+=Math.abs(seats[i]-students[i])\r\n    return sum\r\n};"
  }
}
