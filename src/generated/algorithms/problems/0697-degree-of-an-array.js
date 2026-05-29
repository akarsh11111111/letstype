export default {
  "id": 697,
  "name": "Degree of an Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/degree-of-an-array",
  "relativeDir": "D/Degree of an Array",
  "slug": "0697-degree-of-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 47,
    "python": 18,
    "javascript": 33
  },
  "languages": {
    "cpp": "// Runtime: 51 ms (Top 82.87%) | Memory: 25.5 MB (Top 58.45%)\r\nclass Solution {\r\npublic:\r\n    int findShortestSubArray(vector<int>& nums)\r\n    {\r\n        unordered_map<int,int> cnt,first;\r\n        int deg=0,ans=0;\r\n        for(int i=0;i<nums.size();i++)\r\n        {\r\n            if(cnt[nums[i]]==0)\r\n                first[nums[i]]=i;\r\n            cnt[nums[i]]++;\r\n            if(cnt[nums[i]]>deg)\r\n            {\r\n                ans=i-first[nums[i]]+1;\r\n                deg=cnt[nums[i]];\r\n            }\r\n            else if(cnt[nums[i]]==deg)\r\n            {\r\n                ans=min(ans,i-first[nums[i]]+1);\r\n            }\r\n\r\n        }\r\n        return ans;\r\n\r\n    }\r\n};\r\n//if you like the solution plz upvote.",
    "python": "# Runtime: 198 ms (Top 78.1%) | Memory: 18.99 MB (Top 16.6%)\r\n\r\nclass Solution:\r\n    def findShortestSubArray(self, nums):\r\n        # Group indexes by element type\r\n        d = defaultdict(list)\r\n        for i,x in enumerate(nums):\r\n            d[x].append(i)\r\n        #\r\n        # Find highest Degree\r\n        m = max([ len(v) for v in d.values() ])\r\n        #\r\n        # Find shortest span for max. degree\r\n        best = len(nums)\r\n        for v in d.values():\r\n            if len(v)==m:\r\n                best = min(best,v[-1]-v[0]+1)\r\n        return best",
    "java": "// Runtime: 15 ms (Top 84.55%) | Memory: 49.70 MB (Top 5.99%)\r\n\r\nclass Solution {\r\n    public int findShortestSubArray(int[] nums) {\r\n        // The int is an array of [firstEncounter, lastEncounter, frequency]\r\n        HashMap<Integer, int[]> map = new HashMap<>();\r\n        for(int i = 0; i < nums.length; i++){\r\n\r\n            // If the key does not exist in the map, we put it with the first encounter and last encounter set to the current position, 'i', and the freqency 1\r\n            if(!map.containsKey(nums[i])){\r\n                map.put(nums[i], new int[]{i, i, 1});\r\n            } \r\n\r\n            // If it does exist, we update the last encounter to the current position and we increase the frequency by 1\r\n            else {\r\n                int[] arr = map.get(nums[i]);\r\n                arr[1] = i;\r\n                arr[2]++;\r\n                map.put(nums[i], arr);\r\n            }\r\n        }\r\n        // Maximim frequency\r\n        int maxFreq = Integer.MIN_VALUE;\r\n\r\n        // Minimum distance\r\n        int minDist = Integer.MAX_VALUE;\r\n\r\n        // Going through all the values of the HashMap\r\n        for(int[] value : map.values()){\r\n            // value[0] = the first encounter index\r\n            // value[1] = the last encounter index\r\n            // value[2] = frequency\r\n\r\n            // If the frecuency is greater than the maxFreq, then we update it and also set the minDist\r\n            if(value[2] > maxFreq){\r\n                maxFreq = value[2];\r\n                minDist = value[1] - value[0] + 1;\r\n            } \r\n\r\n            // If the frecuency is equal to the current max, we take the minimum between the exiting minDist and the minimum distance for the current value\r\n            else if(value[2] == maxFreq){\r\n                minDist = Math.min(minDist, value[1] - value[0] + 1);\r\n            }\r\n        }\r\n        return minDist;\r\n    }\r\n}",
    "javascript": "// Runtime: 132 ms (Top 59.47%) | Memory: 49 MB (Top 28.57%)\r\n/**\r\n * 1. compute all positions for each number\r\n * 2. filter arrays of max length\r\n * 3. select minimum difference between its first and last elems\r\n */\r\nvar findShortestSubArray = function(nums) {\r\n    const numPositions = {};\r\n    for (let i=0; i<nums.length; i++) {\r\n        const num = nums[i];\r\n        if (numPositions[num] == null) numPositions[num] = [];\r\n        numPositions[num].push(i);\r\n    }\r\n\r\n    let maxLen = 0;\r\n    // will store the positions of most frequent numbers\r\n    let maxPos = [];\r\n    for (const positions of Object.values(numPositions)) {\r\n        const curLen = positions.length;\r\n        if (curLen === maxLen) {\r\n            maxPos.push(positions);\r\n        } else if (curLen > maxLen) {\r\n            maxLen = curLen;\r\n            maxPos = [positions]\r\n        }\r\n    }\r\n\r\n    let minDist = Number.MAX_SAFE_INTEGER;\r\n    for (const positions of maxPos) {\r\n        minDist = Math.min(minDist, positions[positions.length-1] - positions[0] + 1);\r\n    }\r\n    return minDist;\r\n};"
  }
}
