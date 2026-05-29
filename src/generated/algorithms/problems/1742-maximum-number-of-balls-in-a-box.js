export default {
  "id": 1742,
  "name": "Maximum Number of Balls in a Box",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-balls-in-a-box",
  "relativeDir": "M/Maximum Number of Balls in a Box",
  "slug": "1742-maximum-number-of-balls-in-a-box",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 18,
    "python": 12,
    "javascript": 10
  },
  "languages": {
    "cpp": "// Runtime: 11 ms (Top 84.52%) | Memory: 6.1 MB (Top 75.30%)\r\nclass Solution {\r\npublic:\r\n    int countBalls(int lowLimit, int highLimit) {\r\n\r\n        vector<int> box (46,0);\r\n        for(int i = lowLimit;i<=highLimit;i++)\r\n        {\r\n            int sum = 0;\r\n            int temp = i;\r\n            while(temp)\r\n            {\r\n                sum = sum + temp%10;\r\n                temp = temp/10;\r\n            }\r\n            box[sum]++;\r\n        }\r\n\r\n        return *max_element(box.begin(),box.end());\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countBalls(self, lowLimit: int, highLimit: int) -> int:\r\n        boxes = [0] * 100\r\n        \r\n        for i in range(lowLimit, highLimit + 1):\r\n\t\t\t\r\n\t\t\t# For the current number \"i\", convert it into a list of its digits.\r\n\t\t\t# Compute its sum and increment the count in the frequency table.\r\n\t\t\t\r\n            boxes[sum([int(j) for j in str(i)])] += 1\r\n        \r\n        return max(boxes)",
    "java": "// Runtime: 85 ms (Top 20.04%) | Memory: 49.5 MB (Top 50.90%)\r\nclass Solution {\r\n    public int countBalls(int lowLimit, int highLimit) {\r\n        Map<Integer,Integer> map = new HashMap<>();\r\n        int count = Integer.MIN_VALUE;\r\n        for(int i = lowLimit;i<=highLimit;i++){\r\n            int value = 0;\r\n            int temp = i;\r\n            while (temp!=0){\r\n                value += temp%10;\r\n                temp/=10;\r\n            }\r\n            map.put(value,map.getOrDefault(value,0)+1);\r\n            count = map.get(value) > count ? map.get(value) : count;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 140 ms (Top 67.23%) | Memory: 48.3 MB (Top 43.50%)\r\nvar countBalls = function(lowLimit, highLimit) {\r\n    let obj={};\r\n    for(let i=lowLimit; i<=highLimit; i++){\r\n        i+=''; let sum=0;\r\n        for(let j=0; j<i.length; j++){ sum+=i[j]*1; }\r\n        obj[sum]?obj[sum]+=1:obj[sum]=1\r\n    }\r\n    return Math.max(...Object.values(obj));\r\n};"
  }
}
