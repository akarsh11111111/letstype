export default {
  "id": 2086,
  "name": "Minimum Number of Buckets Required to Collect Rainwater from Houses",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-buckets-required-to-collect-rainwater-from-houses",
  "relativeDir": "M/Minimum Number of Buckets Required to Collect Rainwater from Houses",
  "slug": "2086-minimum-number-of-buckets-required-to-collect-rainwater-from-houses",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "python": 19,
    "javascript": 29
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minimumBuckets(string street) {\r\n        unordered_map<int,int>mp;\r\n        int res=0;\r\n        for(int i=0;i<street.size();i++){\r\n            if(street[i]=='H'){\r\n                if(mp[i+1]>0 or mp[i-1]>0)continue;\r\n                if(i+1<street.size() and street[i+1]=='.'){\r\n                    res++;\r\n                    mp[i+1]++;\r\n                    continue;\r\n                }\r\n                if(i-1>=0 and street[i-1]=='.'){\r\n                    res++;\r\n                    continue;\r\n                }\r\n                return -1;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumBuckets(self, street: str) -> int:\r\n        street = list(street)\r\n        print(street)\r\n        num = 0\r\n        for i in range(len(street)):\r\n            if street[i] == \"H\":\r\n                if i > 0 and street[i-1] == \"B\":\r\n                    continue\r\n                if i < len(street) - 1 and street[i+1] == \".\":\r\n                    street[i+1] = \"B\"\r\n                    num += 1\r\n                    continue\r\n                if i > 0 and street[i-1] == \".\":\r\n                    street[i-1] = \"B\"\r\n                    num += 1\r\n                    continue\r\n                return -1\r\n        return num",
    "javascript": "var minimumBuckets = function(street) {\r\n    const n = street.length;\r\n    const chars = street.split(\"\");\r\n    \r\n    let count = 0;\r\n    \r\n    for (let i = 0; i < n; ++i) {\r\n        const char = chars[i];\r\n        \r\n        if (char === \"H\") {\r\n            if (i > 0 && chars[i - 1] === \"B\"){\r\n                continue;\r\n            }\r\n            else if (i < n - 1 && chars[i + 1] === \".\") {\r\n                ++count;\r\n                chars[i + 1] = \"B\";\r\n            }\r\n            else if (i > 0 && chars[i - 1] === \".\") {\r\n                ++count;\r\n                chars[i - 1] = \"B\";\r\n            }\r\n            else {\r\n                return -1;\r\n            } \r\n        }\r\n    }    \r\n    \r\n    return count;\r\n};"
  }
}
