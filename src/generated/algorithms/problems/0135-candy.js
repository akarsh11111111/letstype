export default {
  "id": 135,
  "name": "Candy",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/candy",
  "relativeDir": "C/Candy",
  "slug": "0135-candy",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 28,
    "python": 18,
    "javascript": 48
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int candy(vector<int>& ratings) {\r\n        ios_base::sync_with_stdio(false);\r\n        cin.tie(NULL);\r\n        int ans = 0, i;\r\n        vector<int> store(ratings.size(), 1);\r\n        for (i = 0; i < ratings.size()-1; i++) if(ratings[i+1] > ratings[i]) store[i+1] = store[i]+1;\r\n        for (i = ratings.size()-1; i > 0; i--) if(ratings[i-1] > ratings[i]) store[i-1] = max(store[i-1], store[i]+1);\r\n        for (auto i:store) ans += i;\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 175 ms (Top 92.56%) | Memory: 16.8 MB (Top 75.67%)\r\nclass Solution:\r\n    def candy(self, ratings: List[int]) -> int:\r\n        n=len(ratings)\r\n        temp = [1]*n\r\n\r\n        for i in range(1,n):\r\n            if(ratings[i]>ratings[i-1]):\r\n                temp[i]=temp[i-1]+1\r\n        if(n>1):\r\n            if(ratings[0]>ratings[1]):\r\n                temp[0]=2\r\n\r\n        for i in range(n-2,-1,-1):\r\n            if(ratings[i]>ratings[i+1] and temp[i]<=temp[i+1]):\r\n                temp[i]=temp[i+1]+1\r\n\r\n        return sum(temp)",
    "java": "// Runtime: 16 ms (Top 14.09%) | Memory: 53.1 MB (Top 8.48%)\r\nclass Solution {\r\n    public int candy(int[] ratings) {\r\n\r\n        int[] left = new int[ratings.length];\r\n        Arrays.fill(left, 1);\r\n\r\n        // we are checking from left to right that if the element next to our current element has greater rating, if yes then we are increasing their candy\r\n        for(int i = 0; i<ratings.length-1; i++){\r\n            if(ratings[i] < ratings[i+1])\r\n                left[i+1] = left[i]+1;\r\n        }\r\n\r\n        int[] right = new int[ratings.length];\r\n        Arrays.fill(right, 1);\r\n\r\n        //we are checking from right to left if the element after than our current element is greater or not , if yes then we are also checking their candies if greater rating has less number of candies then increasing their candy\r\n        for(int i = ratings.length -2; i>=0; i--){\r\n            if(ratings[i+1] < ratings[i] && right[i] <= right[i+1])\r\n                right[i] = right[i+1]+1;\r\n        }\r\n        int sum = 0;\r\n        for(int i = 0; i<right.length; i++){\r\n            sum += Math.max(right[i], left[i]);\r\n        }\r\n\r\n    return sum;}\r\n}",
    "javascript": "/**\r\n * @param {number[]} ratings\r\n * @return {number}\r\n */\r\nvar candy = function(ratings) {\r\n    const n = ratings.length;    \r\n    \r\n    let candies = [...Array(n)].fill(1);\r\n \r\n    let index = 0;\r\n    let copy = [ratings[0]];\r\n    \r\n    let isDecreasing = true;\r\n    for(let i = 1; i < n; i++) {\r\n        if (ratings[i] > ratings[i - 1]) {\r\n            isDecreasing = false;\r\n            break;\r\n        }\r\n        /* In case of decreasing sequence, make a copy of the current rating, but in inverted format */\r\n        copy.unshift(ratings[i]);\r\n    }\r\n    \r\n    if (isDecreasing) {\r\n        ratings = copy;\r\n    } else {\r\n        copy = [];\r\n    }\r\n    \r\n    while(index >= 0) {\r\n        \r\n        if (index >= n) {\r\n            break;\r\n        }\r\n\r\n        if (ratings[index] > ratings[index + 1] && candies[index + 1] >= candies[index]) {            \r\n            candies[index] = candies[index] + 1;            \r\n            index = Math.max(-1, index - 2);\r\n        }\r\n        else if (ratings[index] > ratings[index - 1] && candies[index - 1] >= candies[index]) {            \r\n            candies[index] = candies[index - 1] + 1;\r\n        }\r\n\r\n        index++;\r\n     }\r\n\r\n    \r\n    return candies.reduce((sum, candy) => sum + candy, 0);\r\n}"
  }
}
