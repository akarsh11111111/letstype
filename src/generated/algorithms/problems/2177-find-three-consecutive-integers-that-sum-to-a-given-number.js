export default {
  "id": 2177,
  "name": "Find Three Consecutive Integers That Sum to a Given Number",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number",
  "relativeDir": "F/Find Three Consecutive Integers That Sum to a Given Number",
  "slug": "2177-find-three-consecutive-integers-that-sum-to-a-given-number",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "python": 9,
    "javascript": 4
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.1 MB (Top 19.77%)\r\nclass Solution {\r\npublic:\r\n    vector<long long> sumOfThree(long long num) {\r\n        //binary Search\r\n\r\n        long long lo = -1;// -1 becoz we have num == 0 as well if we put lo=0 then it will fail in 1 testcase\r\n        long long hi = num;\r\n        while(lo<=hi){\r\n            long long mid = lo +(hi-lo)/2;\r\n            long long val = 3*mid+3;//mid+mid+1mid+2 == num\r\n            if(val == num){\r\n                return {mid,mid+1,mid+2};\r\n            }\r\n            else if(val>num){\r\n                hi = mid-1;\r\n            }\r\n            else{\r\n                lo = mid+1;\r\n            }\r\n        }\r\n\r\n        return {};\r\n    }\r\n};",
    "python": "// Runtime: 35 ms (Top 76.35%) | Memory: 17.40 MB (Top 18.24%)\r\n\r\nclass Solution:\r\n    def sumOfThree(self, num: int) -> List[int]:\r\n        temp=(num-3)/3\r\n        if floor(temp)==ceil(temp):\r\n            return [int(temp),int(temp)+1,int(temp)+2]\r\n        else:\r\n            return []",
    "javascript": "// Runtime: 93 ms (Top 52.17%) | Memory: 42.1 MB (Top 65.22%)\r\nvar sumOfThree = function(num) {\r\n    return (num % 3 === 0) ? [num / 3 - 1, num / 3, num / 3 + 1] : [];\r\n};"
  }
}
