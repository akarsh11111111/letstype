export default {
  "id": 1103,
  "name": "Distribute Candies to People",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/distribute-candies-to-people",
  "relativeDir": "D/Distribute Candies to People",
  "slug": "1103-distribute-candies-to-people",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 22,
    "python": 19,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> distributeCandies(int candies, int num_people) {\r\n        vector<int> Candies (num_people, 0);\r\n        int X = 0;\r\n        while (candies)\r\n        {\r\n            for (int i = 0; i < num_people; ++i)\r\n            {\r\n                int Num = X * num_people + i + 1;\r\n                if (candies >= Num)\r\n                {\r\n                    Candies[i] += Num;\r\n                    candies -= Num;\r\n                }\r\n                else\r\n                {\r\n                    Candies[i] += candies;\r\n                    candies = 0;\r\n                    break;\r\n                }\r\n            }\r\n            ++X;\r\n        }\r\n        return Candies;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def distributeCandies(self, candies: int, num_people: int) -> List[int]:\r\n        candy_dict = {}\r\n        for i in range(num_people) : \r\n            candy_dict[i] = 0 \r\n        \r\n        candy, i, totalCandy = 1, 0, 0\r\n        while totalCandy < candies : \r\n            if i >= num_people : \r\n                i = 0\r\n            if candies - totalCandy >= candy : \r\n                candy_dict[i] += candy \r\n                totalCandy += candy\r\n            else : \r\n                candy_dict[i] += candies - totalCandy\r\n                totalCandy += candies - totalCandy\r\n            i += 1 \r\n            candy += 1  \r\n        return candy_dict.values()",
    "java": "class Solution {\r\n    public int[] distributeCandies(int candies, int num_people) {\r\n        int n=num_people;\r\n        int a[]=new int[n];\r\n        int k=1;\r\n        while(candies>0){\r\n            for(int i=0;i<n;i++){\r\n                if(candies>=k){\r\n                    a[i]+=k;\r\n                    candies-=k;\r\n                    k++;\r\n                }\r\n                else{\r\n                    a[i]+=candies;\r\n                    candies=0;\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        return a;\r\n    }\r\n}",
    "javascript": "// Runtime: 83 ms (Top 56.82%) | Memory: 42.8 MB (Top 7.95%)\r\nvar distributeCandies = function(candies, num_people) {\r\n\r\n    let i = 1, j=0;\r\n    const result = new Array(num_people).fill(0);\r\n    while(candies >0){\r\n        result[j] += i;\r\n        candies -= i;\r\n        if(candies < 0){\r\n            result[j] += candies;\r\n            break;\r\n        }\r\n        j++;\r\n        if(j === num_people)\r\n            j=0;\r\n\r\n        i++;\r\n    }\r\n    return result;\r\n};"
  }
}
