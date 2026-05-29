export default {
  "id": 1094,
  "name": "Car Pooling",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/car-pooling",
  "relativeDir": "C/Car Pooling",
  "slug": "1094-car-pooling",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 22,
    "python": 21,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 33 ms (Top 28.06%) | Memory: 10.9 MB (Top 28.46%)\r\nclass Solution {\r\ntypedef pair<int, int> pd;\r\npublic:\r\n    bool carPooling(vector<vector<int>>& trips, int capacity) {\r\n        int seat=0;\r\n        priority_queue<pd, vector<pd>, greater<pd>>pq;\r\n        for(auto it : trips)\r\n        {\r\n              pq.push({it[1], +it[0]});\r\n              pq.push({it[2], -it[0]});\r\n        }\r\n        while(!pq.empty())\r\n        {\r\n            // cout<<pq.top().first<<\" \"<<pq.top().second<<endl;\r\n            // cout<<\"seat-\"<<seat<<endl;\r\n            seat+=pq.top().second;\r\n            if(seat>capacity) return false;\r\n            pq.pop();\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:\r\n        endheap = []\r\n        startheap = []\r\n        \r\n        for i in range(len(trips)):\r\n            endheap.append((trips[i][2],trips[i][0],trips[i][1]))\r\n            startheap.append((trips[i][1],trips[i][0],trips[i][2]))\r\n        heapify(endheap)\r\n        heapify(startheap)\r\n        cur = 0\r\n        while startheap:\r\n            start,num,end = heappop(startheap)\r\n            while start >= endheap[0][0]:\r\n                newend,newnum,newstart = heappop(endheap)\r\n                cur -= newnum\r\n            cur += num\r\n            print(cur)\r\n            if cur >capacity:\r\n                return False\r\n        return True",
    "java": "// Runtime: 10 ms (Top 30.51%) | Memory: 45.4 MB (Top 20.46%)\r\nclass Solution {\r\n    public boolean carPooling(int[][] trips, int capacity) {\r\n        Map<Integer, Integer> destinationToPassengers = new TreeMap<>();\r\n        for(int[] trip : trips) {\r\n            int currPassengersAtPickup = destinationToPassengers.getOrDefault(trip[1], 0);\r\n            int currPassengersAtDrop = destinationToPassengers.getOrDefault(trip[2], 0);\r\n            destinationToPassengers.put(trip[1], currPassengersAtPickup + trip[0]);\r\n            destinationToPassengers.put(trip[2], currPassengersAtDrop - trip[0]);\r\n        }\r\n\r\n        int currPassengers = 0;\r\n        for(int passengers : destinationToPassengers.values()) {\r\n            currPassengers += passengers;\r\n\r\n            if(currPassengers > capacity) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[][]} trips\r\n * @param {number} capacity\r\n * @return {boolean}\r\n */\r\nvar carPooling = function(trips, capacity) {\r\n    \r\n    // sort trips by destination distance\r\n    trips.sort((a, b) => a[2] - b[2]);\r\n    \r\n    // build result array, using max distance\r\n    const lastTrip = trips[trips.length - 1];\r\n    const maxDistance = lastTrip[lastTrip.length - 1];\r\n    const arr = new Array(maxDistance + 1).fill(0);\r\n    \r\n    // build partial sum array\r\n    for (const [val, start, end] of trips) {\r\n        arr[start] += val;\r\n        arr[end] -= val;\r\n    }\r\n\r\n    // build combined sum array\r\n    let sum = 0;\r\n    for (let i = 0; i < arr.length; i++) {\r\n        sum += arr[i];\r\n        if (sum > capacity) return false;\r\n    }\r\n    \r\n    return true;\r\n};"
  }
}
