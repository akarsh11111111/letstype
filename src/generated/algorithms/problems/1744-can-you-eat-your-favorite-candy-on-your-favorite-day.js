export default {
  "id": 1744,
  "name": "Can You Eat Your Favorite Candy on Your Favorite Day?",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day",
  "relativeDir": "C/Can You Eat Your Favorite Candy on Your Favorite Day",
  "slug": "1744-can-you-eat-your-favorite-candy-on-your-favorite-day",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 29,
    "python": 9
  },
  "languages": {
    "cpp": "// Runtime: 269 ms (Top 81.94%) | Memory: 121.60 MB (Top 45.83%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<bool> canEat(vector<int>& candiesCount, vector<vector<int>>& queries) {\r\n\r\n        ///lower bound and higher bound \r\n        // lower bound: eat one per day, on favourite day, the candy type i does not run out\r\n        // higher bound: eat dailycap, on favourite day, the cap reaches type i\r\n\r\n        // type + day + cap\r\n\r\n        vector <bool> outcome;\r\n\r\n        vector <long int> candyIndex(candiesCount.size());\r\n        long int x = 0;\r\n        for (int i =0; i< candiesCount.size();i++){\r\n            candyIndex[i] = x;\r\n            x += candiesCount[i];\r\n        }\r\n\r\n\r\n        for (int i =0;i< queries.size();i++){\r\n\r\n            long int highBound = (long int) queries[i][2]*(queries[i][1]+1), lowBound = queries[i][1]+1;\r\n\r\n            bool answer = candyIndex[queries[i][0]] < highBound && (candyIndex[queries[i][0]] + candiesCount[queries[i][0]]-1) >= (lowBound -1);\r\n            outcome.push_back(answer);\r\n        }\r\n        return outcome;\r\n    }\r\n};",
    "python": "// Runtime: 1128 ms (Top 98.57%) | Memory: 75.00 MB (Top 57.14%)\r\n\r\nclass Solution:\r\n    def canEat(self, candiesCount: List[int], queries: List[List[int]]) -> List[bool]:\r\n                                                                  \r\n        pref = list(accumulate(candiesCount, initial = 0))         \r\n        \r\n        return [pref[candy]//cap <= day < pref[candy + 1]\r\n                           for candy, day, cap in queries]",
    "java": "class Solution {\r\n    // T = O(n) S=O(n)\r\n    public boolean[] canEat(int[] candiesCount, int[][] queries) {\r\n        // calculate prefix sum\r\n        long[] prefix = new long[candiesCount.length+1];\r\n        boolean[] res = new boolean[queries.length];\r\n        prefix[0] = 0;\r\n        \r\n        for(int i=1; i< prefix.length; i++)\r\n            prefix[i] = prefix[i-1]+candiesCount[i-1];\r\n        \r\n        for(int i=0; i< res.length; i++) {\r\n            int type = queries[i][0];\r\n            int day  = queries[i][1];\r\n            int cap  = queries[i][2];\r\n            \r\n            // max and min day required to eat\r\n            // if we eat one candy per day including type candy (prefix[type+1]). we decrement by 1 since we need atleast one candy of type\r\n            long maxDay = prefix[type+1]-1; \r\n            // if we eat upto capacity each day upto previous candy\r\n            long minDay = prefix[type]/cap; \r\n        \r\n            // check if query day is within the limits (minDay and maxDay inclusive)\r\n            res[i] = (minDay <= day && day <= maxDay);            \r\n        }\r\n        \r\n        return res;\r\n    }\r\n}"
  }
}
