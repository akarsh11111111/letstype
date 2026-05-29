export default {
  "id": 1431,
  "name": "Kids With the Greatest Number of Candies",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies",
  "relativeDir": "K/Kids With the Greatest Number of Candies",
  "slug": "1431-kids-with-the-greatest-number-of-candies",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 22,
    "python": 15,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {\r\n        vector<bool> ans;\r\n        int i = 0, size, max = 0;\r\n        size = candies.size();\r\n        for(i = 0; i<size; i++){\r\n            if(candies[i]>max) max = candies[i];\r\n        }\r\n        for(i = 0; i<size;i++){\r\n            if(candies[i]+extraCandies >= max){\r\n                ans.push_back(true);\r\n            }\r\n            else ans.push_back(false);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def kidsWithCandies(self, candy, extra):\r\n        #create an array(res) with all values as True and it's lenght is same as candies\r\n        res = [True]*len(candy)\r\n        #iterate over the elements in the array candy\r\n        for i in range(len(candy)):\r\n            #if the no. of canides at curr position + extra is greater than or equal to the maximum of candies then continue \r\n            if (candy[i] + extra) >= max(candy):\r\n                continue\r\n            #if not \r\n            else:\r\n                #change the value of that position in res as false\r\n                res[i] = False\r\n        #return the res list\r\n        return res",
    "java": "// Runtime: 1 ms (Top 99.09%) | Memory: 42.9 MB (Top 55.32%)\r\nclass Solution {\r\n    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {\r\n        List<Boolean>result = new ArrayList<>(candies.length); // better practice since the length is known\r\n        int theHighest=candies[0]; //always good practice to start from known value or to check constraints, 0 or -1\r\n        for (int i = 1; i<candies.length; i++) {\r\n          theHighest = Math.max(theHighest,candies[i]); //returns the greatest value for us to compare later\r\n            }\r\n        //Since we are comparing with greatest value, we can use math logic to subtract extraCandies the other side\r\n        //(candies[i]+extraCandies >= theHighest) or (candies[i] >= theHighest-extraCandies)\r\n          int mathLogic = theHighest - extraCandies;\r\n        for (int i = 0; i<candies.length; i++) {\r\n           //logic: 6+5>=10 or 6 >=10-5\r\n               if (candies[i] >= mathLogic) {\r\n                   result.add(true);\r\n               } else {\r\n                    result.add(false);\r\n                    }\r\n            }\r\n        return result;\r\n        }\r\n}",
    "javascript": "var kidsWithCandies = function(candies, extraCandies) {\r\n    //First find out maximum number in array:->\r\n    let max=0, res=[]; \r\n    for(let i=0; i<candies.length; i++){\r\n        if(candies[i]>max) max=candies[i];\r\n    }\r\n    console.log(max)\r\n    \r\n    /*Now add extraCandies with every element in array and checks if\r\n\tthat sum is equals to or greater than max and return true and false otherwise; */\r\n    \r\n    for(let i=0; i<candies.length; i++){\r\n        let temp=candies[i]+extraCandies;\r\n        if(temp>=max) res.push(true);\r\n        else res.push(false);\r\n    }\r\n    return res;\r\n};"
  }
}
