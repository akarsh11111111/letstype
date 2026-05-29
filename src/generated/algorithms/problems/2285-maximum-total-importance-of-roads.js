export default {
  "id": 2285,
  "name": "Maximum Total Importance of Roads",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-total-importance-of-roads",
  "relativeDir": "M/Maximum Total Importance of Roads",
  "slug": "2285-maximum-total-importance-of-roads",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 14,
    "python": 14,
    "javascript": 36
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    long long maximumImportance(int n, vector<vector<int>>& roads) {\r\n        vector<int>ind(n,0);\r\n        \r\n        for(auto it:roads)\r\n        {\r\n            ind[it[0]]++;\r\n            ind[it[1]]++;\r\n        }\r\n        \r\n        priority_queue<long long> pq;\r\n        long long val = n,ans=0;\r\n        \r\n        for(int i=0;i<n;i++)\r\n            pq.push(ind[i]);\r\n        \r\n        while(!pq.empty())\r\n        {\r\n            ans += pq.top() * val;\r\n            val--;\r\n            pq.pop();\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 1313 ms (Top 92.99%) | Memory: 41.50 MB (Top 72.32%)\r\n\r\nclass Solution:\r\n    def maximumImportance(self, n: int, roads: List[List[int]]) -> int:\r\n        Arr = [0] * n  # i-th city has Arr[i] roads\r\n        for A,B in roads:\r\n            Arr[A] += 1 # Each road increase the road count\r\n            Arr[B] += 1\r\n        Arr.sort()  # Cities with most road should receive the most score\r\n        summ = 0\r\n        for i in range(len(Arr)):\r\n            summ += Arr[i] * (i+1)  # Multiply city roads with corresponding score\r\n        \r\n        return summ",
    "java": "// Runtime: 28 ms (Top 55.58%) | Memory: 124.3 MB (Top 45.11%)\r\nclass Solution {\r\n    public long maximumImportance(int n, int[][] roads) {\r\n        long ans = 0, x = 1;\r\n        long degree[] = new long[n];\r\n        for(int road[] : roads){\r\n            degree[road[0]]++;\r\n            degree[road[1]]++;\r\n        }\r\n        Arrays.sort(degree);\r\n        for(long i : degree) ans += i * (x++) ;\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 443 ms (Top 37.00%) | Memory: 86.7 MB (Top 40.00%)\r\nvar maximumImportance = function(n, roads) {\r\n    const connectionCount = Array(n).fill(0)\r\n\r\n    // Count the connections from each city\r\n    // e.g. the 0th city's count will be stored at index zero in the array\r\n    for (let [cityTo, cityFrom] of roads) {\r\n        connectionCount[cityTo]++\r\n        connectionCount[cityFrom]++\r\n    }\r\n\r\n    let cityToConnectionCount = []\r\n    for (let city = 0; city < n; city++) {\r\n        cityToConnectionCount.push([city, connectionCount[city]])// Store the [city, numberOfConnections]\r\n    }\r\n\r\n    // Created new array(sortedCities) for readability\r\n    const sortedCities = cityToConnectionCount.sort((a,b) => b[1] - a[1])// sort by number of connections, the city with the greatest number of connections should be\r\n    // the city with the greatest importance\r\n\r\n    const values = Array(n).fill(0)\r\n    let importance = n\r\n    for (let i = 0; i < sortedCities.length; i++) {\r\n        const [city, connectionCount] = cityToConnectionCount[i]\r\n        values[city] = importance// City at the 0th position array is should be the city with the greatest importance\r\n        importance--\r\n    }\r\n\r\n    // Sum the importance of each city, toCity => fromCity\r\n    let res = 0\r\n    for (let [to, from] of roads) {\r\n        res += values[to] + values[from]\r\n    }\r\n\r\n    return res\r\n};```"
  }
}
