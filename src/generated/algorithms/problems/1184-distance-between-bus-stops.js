export default {
  "id": 1184,
  "name": "Distance Between Bus Stops",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/distance-between-bus-stops",
  "relativeDir": "D/Distance Between Bus Stops",
  "slug": "1184-distance-between-bus-stops",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 27,
    "python": 7,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 5 ms (Top 31.98%) | Memory: 9.00 MB (Top 37.67%)\r\n\r\nclass Solution {\r\npublic:\r\n    int distanceBetweenBusStops(vector<int>& distance, int start, int destination) {\r\n        int n = distance.size();\r\n        if (start == destination)\r\n            return 0;\r\n\r\n        int one_way = 0;\r\n        int i = start;\r\n        while (i != destination) // find distance of one way\r\n        {\r\n            one_way += distance[i];\r\n            i = (i+1)%n;\r\n        }\r\n        \r\n        int second_way = 0;\r\n        i = destination;\r\n        while (i != start) // find distance of second way\r\n        {\r\n            second_way += distance[i];\r\n            i = (i+1)%n;\r\n        }\r\n        \r\n        return one_way<second_way? one_way : second_way; // return the minimum\r\n    }\r\n};",
    "python": "class Solution:\r\n    def distanceBetweenBusStops(self, distance: List[int], start: int, destination: int) -> int:\r\n        # switch start and destination if destination is before start\r\n        if start>destination:    \r\n            start,destination=destination,start\r\n        #find minimum for clockwise and counterclockwise direction\r\n        return  min(sum(distance[start:destination]),sum(distance[:start]+distance[destination:]))",
    "java": "// Runtime: 2 ms (Top 7.93%) | Memory: 42.8 MB (Top 57.93%)\r\nclass Solution {\r\n    public int distanceBetweenBusStops(int[] distance, int start, int destination) {\r\n        int firstDistance = 0;\r\n        int secondDistance = 0;\r\n        if (start < destination) {\r\n            //check clockwise rotation\r\n            for (int i = start; i < destination; i++)\r\n                firstDistance += distance[i];\r\n            //check clockwise rotation from destination to end\r\n            for (int i = destination; i < distance.length; i++)\r\n                secondDistance += distance[i];\r\n            //continues checking till start (if needed)\r\n            for (int i = 0; i < start; i++)\r\n                secondDistance += distance[i];\r\n        }\r\n        else {\r\n            for (int i = start; i < distance.length; i++)\r\n                firstDistance += distance[i];\r\n            for (int i = 0; i < destination; i++)\r\n                firstDistance += distance[i];\r\n            for (int i = start - 1; i >= destination; i--)\r\n                secondDistance += distance[i];\r\n        }\r\n        return Math.min(firstDistance, secondDistance);\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} distance\r\n * @param {number} start\r\n * @param {number} destination\r\n * @return {number}\r\n */\r\nlet sumArray = (arr) => {\r\n    return arr.reduce((prev, curr) => prev + curr, 0)\r\n}\r\n\r\nvar distanceBetweenBusStops = function(distance, start, destination) {\r\n    let dist = sumArray(distance.slice((start < destination)?start:destination, (start < destination)?destination:start));\r\n    return Math.min(dist, sumArray(distance) - dist)\r\n};"
  }
}
