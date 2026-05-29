export default {
  "id": 798,
  "name": "Smallest Rotation with Highest Score",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/smallest-rotation-with-highest-score",
  "relativeDir": "S/Smallest Rotation with Highest Score",
  "slug": "0798-smallest-rotation-with-highest-score",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 26,
    "python": 25
  },
  "languages": {
    "cpp": "// Runtime: 348 ms (Top 19.35%) | Memory: 77.3 MB (Top 21.94%)\r\nclass Solution {\r\npublic:\r\n    int bestRotation(vector<int>& nums) {\r\n        int sz=nums.size();\r\n        vector<int>pointsForIShifts(2*sz+1,0);\r\n        for(int i=0;i<sz;i++){\r\n            int l=0,h=0;\r\n            if(nums[i]<=i){\r\n                l=0;h=i-nums[i];\r\n                pointsForIShifts[l]+=1;pointsForIShifts[h+1]-=1;\r\n            }\r\n            l=i+1;h=i+sz-nums[i];\r\n            pointsForIShifts[l]+=1;pointsForIShifts[h+1]-=1;\r\n        }\r\n        int maxP=pointsForIShifts[0],k=0;\r\n        for(int i=1;i<pointsForIShifts.size();i++){\r\n            pointsForIShifts[i]+=pointsForIShifts[i-1];\r\n            if(pointsForIShifts[i]>maxP){\r\n                maxP=pointsForIShifts[i];\r\n                k=i;\r\n            }\r\n        }\r\n        return k;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def bestRotation(self, nums: List[int]) -> int:\r\n        diff = [i - nums[i] for i in range(len(nums))]\r\n        \r\n        target = 0\r\n        qualified = []\r\n        for d in diff:\r\n            if d >= target:\r\n                heappush(qualified, d)\r\n        smallest_rotate = 0\r\n        highest_score = len(qualified)\r\n        \r\n        \r\n        for rotate in range(1, len(nums)):\r\n            target += 1\r\n            while qualified and qualified[0] < target:\r\n                heappop(qualified)\r\n            modified = diff[rotate-1] + len(diff)\r\n            heappush(qualified, modified)\r\n            score = len(qualified)\r\n            if score > highest_score:\r\n                smallest_rotate = rotate\r\n                highest_score = score\r\n        \r\n        return smallest_rotate",
    "java": "// Runtime: 4 ms (Top 100.0%) | Memory: 61.60 MB (Top 46.55%)\r\n\r\nclass Solution {\r\n    public int bestRotation(int[] nums) {\r\n        final int size = nums.length;\r\n        int[] rsc = new int[size];\r\n        for(int i = 0; i < size - 1; i++) {\r\n            int value = nums[i];\r\n            int downPos = (i + 1 + size - value) % size;\r\n            rsc[downPos]--;\r\n        }\r\n        int value = nums[size-1];\r\n        if( value != 0 ) rsc[size - value]--;\r\n        int bestk = 0;\r\n        int bestscore = rsc[0];\r\n        int score = rsc[0];\r\n        for(int i = 1; i < nums.length; i++) {\r\n            score += rsc[i] + 1;\r\n            if( score > bestscore ) {\r\n                bestk = i;\r\n                bestscore = score;\r\n            }\r\n        }\r\n        return bestk;\r\n    }\r\n}"
  }
}
