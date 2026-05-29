export default {
  "id": 1943,
  "name": "Describe the Painting",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/describe-the-painting",
  "relativeDir": "D/Describe the Painting",
  "slug": "1943-describe-the-painting",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 51,
    "python": 12,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 306 ms (Top 55.72%) | Memory: 103.70 MB (Top 71.76%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<vector<long long>> splitPainting(vector<vector<int>>& seg) {\r\n        vector<vector<long long>> v;\r\n        map<long long,long long> m;\r\n        long long int i=0;\r\n        while(i<seg.size())\r\n        {\r\n            m[seg[i][0]]+=seg[i][2];\r\n            m[seg[i][1]]-=seg[i][2];\r\n            i++;\r\n        }\r\n        long long int j=0,k=0;\r\n        for(auto x:m)\r\n        {\r\n            long long int prev=j;\r\n            j+=x.second;\r\n            if(prev>0)\r\n                v.push_back({k,x.first,prev});\r\n            k=x.first;\r\n        }\r\n        return v;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def splitPainting(self, segments: List[List[int]]) -> List[List[int]]:\r\n        mix, res, last_i = DefaultDict(int), [], 0\r\n        for start, end, color in segments:\r\n            mix[start] += color\r\n            mix[end] -= color\r\n        for i in sorted(mix.keys()):\r\n            if last_i in mix and mix[last_i]:\r\n                res.append([last_i, i, mix[last_i]])\r\n                mix[i] += mix[last_i]\r\n            last_i = i\r\n        return res",
    "java": "// Runtime: 116 ms (Top 36.54%) | Memory: 59.20 MB (Top 50.0%)\r\n\r\nclass Solution {\r\n    public List<List<Long>> splitPainting(int[][] segments) {\r\n        // Create a TreeMap to store the segment start and end points as keys\r\n        // and the accumulated color values as values\r\n        TreeMap<Long, Long> tm = new TreeMap<>();\r\n        \r\n        // Process each segment\r\n        for (int[] seg : segments) {\r\n            // Increment the color value at the segment start point\r\n            tm.put((long) seg[0], tm.getOrDefault((long) seg[0], 0L) + (long) seg[2]);\r\n            \r\n            // Decrement the color value at the segment end point\r\n            tm.put((long) seg[1], tm.getOrDefault((long) seg[1], 0L) - (long) seg[2]);\r\n        }\r\n        \r\n        // Create a list to store the non-overlapping segments of mixed colors\r\n        List<List<Long>> ans = new ArrayList<>();\r\n        \r\n        // Variables to keep track of accumulated color value and segment state\r\n        long acc = 0L;\r\n        boolean st = true;\r\n        List<Long> currentSegment = null;\r\n        \r\n        // Traverse the TreeMap entries\r\n        for (var entry : tm.entrySet()) {\r\n            // Update the accumulated color value\r\n            acc += entry.getValue();\r\n            \r\n            // If the previous segment was not starting, update its end point\r\n            if (!st) {\r\n                currentSegment.set(1, entry.getKey());\r\n                st = !st;\r\n            }\r\n            \r\n            // If the current segment is starting and has a positive accumulated color value,\r\n            // create a new segment and add it to the answer list\r\n            if (st && acc > 0) {\r\n                currentSegment = new ArrayList<>();\r\n                currentSegment.add(entry.getKey());\r\n                currentSegment.add(-1L);\r\n                currentSegment.add(acc);\r\n                ans.add(currentSegment);\r\n                st = !st;\r\n            }\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 914 ms (Top 13.33%) | Memory: 98.8 MB (Top 66.67%)\r\n/**\r\n * @param {number[][]} segments\r\n * @return {number[][]}\r\n */\r\nvar splitPainting = function(segments) {\r\n    const arr = [];\r\n    segments.forEach(([start, end, val])=>{\r\n        arr.push([start, val]);\r\n        arr.push([end, -val]);\r\n    });\r\n    arr.sort((i,j)=>i[0]-j[0]);\r\n\r\n    const ans = [];\r\n    let currVal = 0, prevTime;\r\n    arr.forEach(([time, val])=>{\r\n        if(prevTime !== undefined && currVal && prevTime !== time) ans.push([prevTime, time, currVal]);\r\n        currVal += val;\r\n        prevTime = time;\r\n    })\r\n\r\n    return ans;\r\n};"
  }
}
