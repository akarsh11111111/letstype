export default {
  "id": 458,
  "name": "Poor Pigs",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/poor-pigs",
  "relativeDir": "P/Poor Pigs",
  "slug": "0458-poor-pigs",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 9,
    "java": 13,
    "python": 16,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int poorPigs(int buckets, int minutesToDie, int minutesToTest) {\r\n        // min_pig_count determined by equation: buckets =max_sub_job_load ** min_pig_count\r\n\t\t// max_sub_job_load  = minutesToTest / minutesToDie + 1\r\n        // min_pig_count = ceil(log(buckets) / log(minutesToTest / minutesToDie + 1));\r\n        return ceil(log(buckets) / log(minutesToTest / minutesToDie + 1));\r\n    }\r\n};",
    "python": "# Runtime: 32 ms (Top 93.2%) | Memory: 16.18 MB (Top 93.2%)\r\n\r\nclass Solution(object):\r\n    def poorPigs(self, buckets, minutesToDie, minutesToTest):\r\n        # Calculate the max time for a pig to test buckets...\r\n        # Note that, max time will not be (minutesToTest / minutesToDie)...\r\n        # Thinking about all pigs drinking all buckets at last, but no one died immediately, so the poison bucket is the last bucket...\r\n        max_time = minutesToTest / minutesToDie + 1\r\n        # Initialize the required minimum number of pigs...\r\n        req_pigs = 0\r\n        # To find the minimum number of pigs, find the minimum req_pigs such that Math.pow(max_time, req_pigs) >= buckets...\r\n        while (max_time) ** req_pigs < buckets:\r\n            # Increment until it will be greater or equals to bucket...\r\n            req_pigs += 1\r\n        # Return the required minimum number of pigs...\r\n        return req_pigs",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 40.5 MB (Top 75.55%)\r\nclass Solution {\r\n    public int poorPigs(int buckets, int minutesToDie, int minutesToTest) {\r\n        int T = (minutesToTest/minutesToDie) + 1;\r\n        int cnt = 0;\r\n        int total = 1;\r\n        while (total < buckets) {\r\n            total *= T;\r\n            cnt++;\r\n        }\r\n        return cnt;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} buckets\r\n * @param {number} minutesToDie\r\n * @param {number} minutesToTest\r\n * @return {number}\r\n */\r\nvar poorPigs = function(buckets, minutesToDie, minutesToTest) {\r\n  let answer = 1;\r\n  let n = minutesToTest / minutesToDie >> 0;\r\n  n += 1;\r\n  \r\n  // calculation with loop\r\n  // while(n ** answer <= buckets) {\r\n  //   answer++;\r\n  // }\r\n  \r\n  return Math.ceil(Math.log(buckets) / Math.log(n));\r\n};"
  }
}
