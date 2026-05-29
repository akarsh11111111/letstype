export default {
  "id": 1128,
  "name": "Number of Equivalent Domino Pairs",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-equivalent-domino-pairs",
  "relativeDir": "N/Number of Equivalent Domino Pairs",
  "slug": "1128-number-of-equivalent-domino-pairs",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 36,
    "python": 15,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 95 ms (Top 39.89%) | Memory: 22 MB (Top 89.42%)\r\nclass Solution {\r\npublic:\r\n    int numEquivDominoPairs(vector<vector<int>>& dominoes)\r\n    {\r\n        map<pair<int,int>,int> m;\r\n        int ans=0;\r\n        for(auto &d:dominoes)\r\n        {\r\n            int a=min(d[0],d[1]),b=max(d[0],d[1]);\r\n            m[{a,b}]++;\r\n        }\r\n        for(auto &p:m)\r\n        {\r\n            int n=p.second;\r\n            ans+=((n-1)*n)/2;\r\n        }\r\n        return ans;\r\n\r\n    }\r\n};\r\n//if you like the solution plz upvote.",
    "python": "import math\r\nclass Solution:\r\n    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:\r\n        d=dict()\r\n        for i in dominoes:\r\n            i.sort()            #Just to make everything equal and comparable\r\n            if(tuple(i) in d.keys()):   #In python, lists are unhashable so converted the list into tuples\r\n                d[tuple(i)]+=1\r\n            else:\r\n                d[tuple(i)]=1\r\n        count=0\r\n        for x,y in d.items():\r\n            if(y>1):\r\n\t\t\t\tcount+=y*(y-1)//2        #To check the number of pairs, if 2 elements pairs is 1,if 3 pair is 3 and so                                                                     on.....formula is n*n-1/2\r\n        return count",
    "java": "class Solution {\r\n    /** Algorithm\r\n        1. Brute force cannot be used because of the set size.\r\n        2. Traverse the dominos and group & count them by min-max value.\r\n           As pieces can be from 1 to 9, means their groups will be from 11 to 99.\r\n            eg: [1,2] will be the same as [2,1]. Their value is 10 * (min(1,2)) + max(1,2)\r\n                => 10 * 1 + 2 = 12.\r\n            so pieces[12]++;\r\n        3. After finishing traversing, iterate over the counted pieces and if the count is\r\n          > 1, calculate the combinations of X by 2.\r\n        4. The formula is n!/ (k! * (n-k)!)\r\n           As n! can be very large, use the short version of it; (n * (n-1)) / 2. EG n= 40\r\n           Eg:  40!         simplify this(divide by 38!) 39 * 40\r\n              --------                                  ---------   \r\n               2! * (38!)                                   2\r\n        5. Return the total result      \r\n    */\r\n    public int numEquivDominoPairs(int[][] dominoes) {\r\n        int[] pieces = new int[100];\r\n        for (int[] domino : dominoes) {\r\n            pieces[10 * Math.min(domino[0], domino[1]) + Math.max(domino[0], domino[1])]++;\r\n        }\r\n        int pairs = 0;\r\n        for (int i = 11; i <= 99; i++) {\r\n            if (pieces[i] > 1) {\r\n                pairs += getCombinations(pieces[i]);\r\n            }\r\n        }\r\n        \r\n        return pairs;    \r\n    }\r\n    \r\n    private int getCombinations(int n) {\r\n        return (n * (n-1)) / 2;\r\n    }\r\n}",
    "javascript": "var numEquivDominoPairs = function(dominoes) {\r\n    let map = {};\r\n    let count = 0;\r\n    for (let [a, b] of dominoes) {\r\n        if (b > a) {\r\n            [a, b] = [b, a];\r\n        }\r\n        let key = `${a}-${b}`;\r\n        if (map.hasOwnProperty(key)) {\r\n            map[key]++;\r\n            count += map[key];\r\n        } else {\r\n            map[key] = 0;\r\n        }\r\n    }\r\n    return count;\r\n};"
  }
}
