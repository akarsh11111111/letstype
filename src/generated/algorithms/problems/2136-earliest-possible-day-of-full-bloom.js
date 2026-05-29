export default {
  "id": 2136,
  "name": "Earliest Possible Day of Full Bloom",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/earliest-possible-day-of-full-bloom",
  "relativeDir": "E/Earliest Possible Day of Full Bloom",
  "slug": "2136-earliest-possible-day-of-full-bloom",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 24,
    "python": 11,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 544 ms (Top 44.20%) | Memory: 158.5 MB (Top 92.40%)\r\n\r\nclass Solution {\r\npublic:\r\n    int earliestFullBloom(vector<int>& plantTime, vector<int>& growTime) {\r\n        int n = plantTime.size();\r\n        // growTime larger first\r\n        vector<pair<int, int>> times(n);\r\n        for (int i = 0; i < n; i++) {\r\n            times[i].first = -growTime[i];\r\n            times[i].second = plantTime[i];\r\n        }\r\n        sort(times.begin(), times.end());\r\n        int tot = 0;\r\n        int cur = 0;\r\n        for (int i = 0; i < n; i++) {\r\n            tot = max(tot, cur + times[i].second - times[i].first);\r\n            cur += times[i].second;\r\n        }\r\n        return tot;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def earliestFullBloom(self, plantTime: List[int], growTime: List[int]) -> int:\r\n        data = list(zip(plantTime, growTime))\r\n        data.sort(key=lambda x: -x[1]) #sort by grow time in descending order\r\n        \r\n        res = 0\r\n        start_time = 0\r\n        for plant, grow in data:\r\n            start_time += plant\r\n            res = max(res, start_time + grow)\r\n        return res",
    "java": "// Runtime: 168 ms (Top 19.82%) | Memory: 126.2 MB (Top 22.91%)\r\nclass Solution {\r\n    public int earliestFullBloom(int[] plantTime, int[] growTime) {\r\n        int n = plantTime.length;\r\n        int[][] plants = new int[n][2];\r\n        int totalPlantTime = 0;\r\n        for (int i = 0; i < n; i++) {\r\n            plants[i] = new int[]{plantTime[i], growTime[i]};\r\n            totalPlantTime += plantTime[i];\r\n        }\r\n        // Sort plants by grow time.\r\n        // The plant with fewer grow time can be planted at the end.\r\n        Arrays.sort(plants, (a, b) -> a[1] - b[1]);\r\n        // Max grow + plant time\r\n        int maxTime = 0;\r\n        for (int[] plant : plants) {\r\n            maxTime = Math.max(maxTime, totalPlantTime + plant[1]);\r\n            // After putting this plant at the end of the chain,\r\n            // we can take the current plant time out of the total plant time\r\n            totalPlantTime -= plant[0];\r\n        }\r\n        return maxTime;\r\n    }\r\n}",
    "javascript": "// Runtime: 176 ms (Top 92.31%) | Memory: 75.70 MB (Top 73.08%)\r\n\r\n/**\r\n * @param {number[]} plantTime\r\n * @param {number[]} growTime\r\n * @return {number}\r\n */\r\n\r\nvar earliestFullBloom = function(plantTime, growTime) {\r\n    // create array of plant indices to identify plants after sorting \r\n    const plants = plantTime.map((v, i) => i)\r\n    // sort plants by longest grow time\r\n    const sortedByGrowTime = plants.sort((a,b) => growTime[b] - growTime[a])\r\n    \r\n    // iterate over plants, planting those with longest grow time first\r\n    // track the sum of plantTimes\r\n    // Max of current plantTime sum + growTime[i] for all plants will be earliest bloom day\r\n    let plantTimeSum =0, fullBloomDay = -1\r\n    for(const plant of sortedByGrowTime) {\r\n        plantTimeSum += plantTime[plant]\r\n        fullBloomDay = Math.max(fullBloomDay, plantTimeSum + growTime[plant])\r\n    }\r\n    return fullBloomDay\r\n};"
  }
}
