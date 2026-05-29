export default {
  "id": 1276,
  "name": "Number of Burgers with No Waste of Ingredients",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients",
  "relativeDir": "N/Number of Burgers with No Waste of Ingredients",
  "slug": "1276-number-of-burgers-with-no-waste-of-ingredients",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 22,
    "python": 11,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 13 ms (Top 17.35%) | Memory: 7.1 MB (Top 91.58%)\r\nclass Solution {\r\npublic:\r\n    vector<int> numOfBurgers(int tomatoSlices, int cheeseSlices) {\r\n        // Observation\r\n        // Total Number of Burgers is Equal to Number of cheeseSlices\r\n        // Try to make 1 --> cheeseSlices Amount of Jumbo Burgers and\r\n        // remaining will be Small Burger\r\n        vector <int> ans;\r\n        if(tomatoSlices == 0 and cheeseSlices == 0) {\r\n            ans.push_back(0), ans.push_back(0);\r\n            return ans;\r\n        }\r\n        // Do Binary Search to Get Ideal Division.\r\n        int low = 0, high = cheeseSlices;\r\n        while(low < high) {\r\n            int mid = (low + high) / 2;\r\n            int jumbo = mid, small = cheeseSlices - mid;\r\n            // Jumbo needs 4 tomatoes per burger\r\n            // Small needs 2 tomatoes per burger\r\n            int needJumboTom = jumbo * 4;\r\n            int needSmallTom = small * 2;\r\n            // Should Add Upto tomatoSlices\r\n            if(needJumboTom + needSmallTom == tomatoSlices) {\r\n                ans.push_back(jumbo), ans.push_back(small);\r\n                break;\r\n            } else if(needJumboTom + needSmallTom < tomatoSlices) {\r\n                low = mid + 1;\r\n            } else {\r\n                high = mid;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def numOfBurgers(self, t, c):\r\n        \r\n        if t==c==0:\r\n            return [0,0]\r\n        four=(t-2*c)//2  # no of jumbo burgers by solving 4x+2y=t and x+y=c\r\n        two=c-four #number of small burgers\r\n        if c>=t or (t-2*c)%2==1 or four<0 or two<0: #if cheese is less than tomatoes or if number of jumbo burgers is a decimal or number of burgers are negtive we return empty list\r\n            return []\r\n        \r\n        return [four,two]",
    "java": "// Runtime: 786 ms (Top 7.64%) | Memory: 42.4 MB (Top 87.50%)\r\nclass Solution {\r\n    public List<Integer> numOfBurgers(int tomatoSlices, int cheeseSlices) {\r\n        List<Integer>list=new ArrayList<>();\r\n        int ts=tomatoSlices;\r\n        int cs=cheeseSlices;\r\n        if (ts<cs*2 || ts>cs*4 || ts%2!=0 || (ts==0 && cs>0) || (cs==0 && ts>0))\r\n        {\r\n            return list;\r\n        }\r\n        int cnt=0;\r\n        while(ts>0 && cs>0 && ts!=cs*2)\r\n        {\r\n            ts-=4;\r\n            cnt++;\r\n            cs--;\r\n        }\r\n        list.add(cnt);\r\n        list.add(cs);\r\n        return list;\r\n    }\r\n}",
    "javascript": "// Runtime: 117 ms (Top 64.71%) | Memory: 44.5 MB (Top 5.88%)\r\n/**\r\n * @param {number} tomatoSlices\r\n * @param {number} cheeseSlices\r\n * @return {number[]}\r\n */\r\nvar numOfBurgers = function(tomatoSlices, cheeseSlices) {\r\n    if (tomatoSlices & 1) return []; // return [] if tomatoSlices is odd\r\n    const j = (tomatoSlices >> 1) - cheeseSlices; // jumbo = (tomatoSlices / 2) - cheeseSlices\r\n    return j < 0 || j > cheeseSlices ? [] : [j, cheeseSlices - j]; // small = cheeseSlices - jumbo, if any of jmbo and small < 0 return [] otherwise return [jumbo, small]\r\n};"
  }
}
