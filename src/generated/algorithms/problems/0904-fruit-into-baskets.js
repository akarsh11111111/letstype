export default {
  "id": 904,
  "name": "Fruit Into Baskets",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/fruit-into-baskets",
  "relativeDir": "F/Fruit Into Baskets",
  "slug": "0904-fruit-into-baskets",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 29,
    "python": 29,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int totalFruit(vector<int>& fruits) {\r\n        int i=0, j=0, ans = 1;\r\n        unordered_map<int, int>mp;\r\n        while(j<fruits.size()){\r\n            mp[fruits[j]]++;\r\n            \r\n            if(mp.size()<2){\r\n                ans = max(ans, j-i+1);\r\n                j++;\r\n            }\r\n            else if(mp.size()==2){\r\n                ans = max(ans, j-i+1);\r\n                j++;\r\n            }\r\n            else if(mp.size()>2){\r\n                while(mp.size()>2){\r\n                    mp[fruits[i]]--;\r\n                    if(mp[fruits[i]]==0)\r\n                        mp.erase(fruits[i]);\r\n                    i++;\r\n                }\r\n                if(mp.size()==2){\r\n                    ans = max(ans, j-i+1);\r\n                }\r\n                j++;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def totalFruit(self, fruits: List[int]) -> int:\r\n        ans=0\r\n        fruitdict=defaultdict()\r\n        stack=[]\r\n        i,j=0,0\r\n\r\n        while j<len(fruits):\r\n            if fruits[j] not in fruitdict and len(fruitdict)<2:\r\n                stack.append(fruits[j])\r\n                fruitdict[fruits[j]]=j\r\n                j+=1\r\n\r\n            elif  fruits[j] in fruitdict:\r\n                fruitdict[fruits[j]]=j\r\n                j+=1\r\n\r\n            else:  \r\n                if fruitdict[stack[0]]>fruitdict[stack[1]]  :\r\n                    i = fruitdict[stack[1]]+1\r\n                    del fruitdict[stack[1]]\r\n                    stack.pop()\r\n                else:\r\n                    i = fruitdict[stack[0]]+1\r\n                    del fruitdict[stack[0]] \r\n                    stack.pop(0)              \r\n            \r\n            ans=max(ans,j-i)\r\n        return ans",
    "java": "// Runtime: 61 ms (Top 63.76%) | Memory: 95 MB (Top 59.07%)\r\nclass Solution {\r\n    public int totalFruit(int[] fruits) {\r\n        if (fruits == null || fruits.length == 0) {\r\n            return 0;\r\n        }\r\n        int start = 0, end = 0, res = 0;\r\n        HashMap<Integer, Integer> map = new HashMap<>(); //key = type of fruit on tree, value = last index / newest index of that fruit\r\n\r\n        while (end < fruits.length) {\r\n            if (map.size() <= 2) {\r\n                map.put(fruits[end], end);\r\n                end++;\r\n            }\r\n\r\n            if (map.size() > 2) {\r\n                int leftMost = fruits.length;\r\n                for (int num : map.values()) {\r\n                    leftMost = Math.min(leftMost, num);\r\n                }\r\n                map.remove(fruits[leftMost]);\r\n                start = leftMost + 1;\r\n            }\r\n\r\n            res = Math.max(res, end - start);\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "var totalFruit = function(fruits) {\r\n    let myFruits = {};\r\n    let n = fruits.length;\r\n    let windowStart = 0;\r\n    let ans = -Number.MAX_VALUE;\r\n    \r\n    for(let windowEnd = 0; windowEnd < n; windowEnd++) {\r\n        let fruit = fruits[windowEnd];\r\n        \r\n        if(fruit in myFruits) {\r\n            myFruits[fruit]++;\r\n        }\r\n        else {\r\n            myFruits[fruit] = 1;\r\n        }\r\n        \r\n        while(Object.keys(myFruits).length > 2) {\r\n            let throwOut = fruits[windowStart];\r\n            myFruits[throwOut]--;\r\n            if(myFruits[throwOut] == 0) {\r\n                delete myFruits[throwOut];\r\n            }\r\n            windowStart++;\r\n        }\r\n        ans = Math.max(ans, windowEnd - windowStart + 1);\r\n    }\r\n    return ans;\r\n};"
  }
}
