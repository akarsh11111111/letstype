export default {
  "id": 871,
  "name": "Minimum Number of Refueling Stops",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-refueling-stops",
  "relativeDir": "M/Minimum Number of Refueling Stops",
  "slug": "0871-minimum-number-of-refueling-stops",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 17,
    "python": 11,
    "javascript": 24
  },
  "languages": {
    "cpp": "/*\r\n\r\nThe approach here used is - first cosider the stations which are possible at a particular time and then take the one with maximum fuel that can be filled this ensure that with only one fill up the vehicle will move to furthest distance.\r\n\r\nNow there might be case where if we don't fill up from multiple stations ata paritcular time, then it will not be possible to reach end as there might not be any stations at the ending side of the target. \r\n\r\nTo handle above case, when such situation arise then we need to take the next max fuel refill that is pissible from the already seen stations.\r\nLike this way keep on taking fuels from stations in decreasing manner.\r\n\r\nIf at any point of time the queue is empty then, it means we do not have sufficent fuel to reach target.\r\n\r\n=> This logic can be implemented by simply using a priority queue where the max fuel station is at top of the queue.\r\n\r\n\r\n*/\r\n\r\nclass Solution {\r\npublic:\r\n    int minRefuelStops(int target, int startFuel, vector<vector<int>>& stations) {\r\n        auto comp = [](vector<int> a, vector<int> b){ return a[1] < b[1]; };\r\n        priority_queue<vector<int>, vector<vector<int>>, decltype(comp)> pq(comp);\r\n        int i = 0, distance = startFuel, refillCount = 0;\r\n        while(distance < target ){\r\n            while(i < stations.size() && distance >= stations[i][0]){\r\n                pq.push(stations[i++]);\r\n            }\r\n            if(pq.empty()) return -1;\r\n            distance += pq.top()[1];\r\n            refillCount++;\r\n            pq.pop();\r\n        }\r\n        return refillCount;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minRefuelStops(self, t, F, S):\r\n        S.append([t, 0])\r\n        heap, ans = [], 0\r\n        for p,f in S:\r\n            while heap and p > F:\r\n                F -= heapq.heappop(heap)\r\n                ans += 1\r\n            if p > F: return -1\r\n            heapq.heappush(heap, -f)\r\n        return ans",
    "java": "// Runtime: 5 ms (Top 28.3%) | Memory: 45.04 MB (Top 8.2%)\r\n\r\nclass Solution {\r\n    public int minRefuelStops(int target, int startFuel, int[][] stations) {\r\n        if(startFuel >= target) return 0;\r\n        int[][] dp = new int[stations.length + 1][stations.length + 1];\r\n        for (int i = 0; i < dp.length; i++) dp[i][0] = startFuel;\r\n        for (int j = 1; j < dp.length; j++) {\r\n            for (int i = j; i < dp.length; i++) {\r\n                dp[i][j] = Math.max(dp[i-1][j], stations[i-1][0] > dp[i-1][j-1] ?\r\n                        Integer.MIN_VALUE : dp[i-1][j-1] + stations[i-1][1]);\r\n                if(dp[i][j] >= target) return j;\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n}",
    "javascript": "var minRefuelStops = function(target, startFuel, stations) {\r\n    let pq = new MaxPriorityQueue({compare: (a, b) => b[1] - a[1]});\r\n    let idx = 0, reachablePosition = startFuel, refuels = 0;\r\n    // reachablePosition is the farthest position reachable so far\r\n    \r\n    while (reachablePosition < target) {\r\n        // While reachablePosition is >= to the current station's position, add the current station to the heap\r\n        // These stations are all reachable based on the fuel available\r\n        // Once reachablePosition is less than a station's position, the while loop ends\r\n        while (idx < stations.length && reachablePosition >= stations[idx][0]) {\r\n            pq.enqueue([stations[idx][0], stations[idx][1]]);\r\n            idx++;\r\n        }\r\n        // Next, add fuel from the heap in a greedy manner: the station with the most fuel gets added first\r\n        // All stations in the heap are reachable, so the position is irrelevant \r\n        if (pq.size()) {\r\n            let [pos, fuel] = pq.dequeue();\r\n            reachablePosition += fuel;\r\n            refuels++;\r\n        } else break;\r\n    }\r\n    \r\n    return reachablePosition >= target ? refuels : -1;\r\n};"
  }
}
