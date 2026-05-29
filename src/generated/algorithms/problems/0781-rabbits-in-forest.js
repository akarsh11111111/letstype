export default {
  "id": 781,
  "name": "Rabbits in Forest",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/rabbits-in-forest",
  "relativeDir": "R/Rabbits in Forest",
  "slug": "0781-rabbits-in-forest",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 24,
    "python": 25,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 59.27%) | Memory: 8.3 MB (Top 95.54%)\r\nclass Solution {\r\npublic:\r\n    int numRabbits(vector<int>& answers) {\r\n        sort(answers.begin(),answers.end());\r\n        int ans = 0;\r\n        for(int i=0;i<answers.size();i++){\r\n            ans += answers[i]+1;\r\n            int num = answers[i];\r\n            while(answers[i]==answers[i+1] && num>0 && i+1<answers.size()){\r\n                num--;\r\n                i++;\r\n            }\r\n\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 54 ms (Top 35.1%) | Memory: 16.38 MB (Top 76.8%)\r\n\r\nclass Solution:\r\n    def numRabbits(self, answers: List[int]) -> int:\r\n        counts = {}\r\n        count = 0\r\n\r\n        for answer in answers:\r\n            if answer == 0:\r\n                # This must be the only rabbit of its color.\r\n                count += 1\r\n            elif answer not in counts or counts[answer] == 0:\r\n                # This is the first time the color appears.\r\n                counts[answer] = 1\r\n                # Add all rabbits having this new color.\r\n                count += answer + 1\r\n            else:\r\n                # Add one to how many times answer occurred.\r\n                counts[answer] += 1\r\n                if counts[answer] > answer:\r\n                    # If n+1 rabbits have said n,\r\n                    # this color group is complete.\r\n                    counts[answer] = 0\r\n        \r\n        return count",
    "java": "class Solution {\r\n    public int numRabbits(int[] answers) {\r\n        HashMap<Integer, Integer> map = new HashMap<>();\r\n        int count = 0;\r\n        \r\n        for(int ele : answers) {\r\n            \r\n            if(!map.containsKey(ele+1)) {\r\n                map.put(ele+1, 1);\r\n                count += ele+1;\r\n            }\r\n            else if(map.get(ele+1) == ele+1) {\r\n                map.put(ele+1, 1);\r\n                 count += ele+1;\r\n            }\r\n            else {\r\n                int freq = map.get(ele+1);\r\n                map.put(ele+1, freq+1);\r\n            }\r\n        }\r\n        \r\n        return count;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} answers\r\n * @return {number}\r\n */\r\nvar numRabbits = function(answers) {\r\n    \r\n    var totalRabbits = 0;\r\n    var sumOfLikeAnswers = new Array(1000).fill(0);\r\n    \r\n    for (let i = 0; i < answers.length; i++) {\r\n        sumOfLikeAnswers[answers[i]] += 1;\r\n    }\r\n    \r\n    for (let i = 0; i < sumOfLikeAnswers.length; i++) {\r\n        totalRabbits += Math.ceil(sumOfLikeAnswers[i] / (i+1)) * (i+1);\r\n    }\r\n    \r\n    return totalRabbits;\r\n};"
  }
}
