export default {
  "id": 2190,
  "name": "Most Frequent Number Following Key In an Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/most-frequent-number-following-key-in-an-array",
  "relativeDir": "M/Most Frequent Number Following Key In an Array",
  "slug": "2190-most-frequent-number-following-key-in-an-array",
  "availableLanguages": [
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "java",
  "lineCounts": {
    "java": 23,
    "python": 6,
    "javascript": 24
  },
  "languages": {
    "python": "# Runtime: 90 ms (Top 49.1%) | Memory: 16.67 MB (Top 9.2%)\r\n\r\nclass Solution:\r\n    def mostFrequent(self, nums: List[int], key: int) -> int:\r\n        l = [t for k,t in zip(nums, nums[1:]) if k == key]\r\n        return max(set(l), key = l.count)",
    "java": "// Runtime: 3 ms (Top 55.1%) | Memory: 43.05 MB (Top 60.9%)\r\n\r\nclass Solution {\r\n    public int mostFrequent(int[] nums, int key) {\r\n        int n=nums.length;\r\n        HashMap<Integer,Integer> map=new HashMap<>();\r\n        for(int i=0;i<n-1;i++){\r\n            if(nums[i]==key){\r\n                int target=nums[i+1];\r\n                map.put(target,map.getOrDefault(target,0)+1);\r\n            }\r\n        }\r\n        int max=0;\r\n        int re=0;\r\n        for(int x:map.keySet()){\r\n            if(map.get(x)>max){\r\n                re=x;\r\n                max=map.get(x);\r\n            }\r\n        }\r\n        return re;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @param {number} key\r\n * @return {number}\r\n */\r\nvar mostFrequent = function(nums, key) {\r\n    const obj={} // to keep track the occurances after the key\r\n    let count=0;\r\n    let res=nums[0]\r\n    for(let i=1;i<nums.length;i++){\r\n        if(nums[i-1]===key){\r\n            if(obj[nums[i]]){\r\n                obj[nums[i]]+=1\r\n            }else{\r\n                obj[nums[i]]=1\r\n            }\r\n            if(count<obj[nums[i]]){\r\n                count=obj[nums[i]]\r\n                res=nums[i]\r\n            }\r\n        }\r\n    }\r\n    return res\r\n};"
  }
}
