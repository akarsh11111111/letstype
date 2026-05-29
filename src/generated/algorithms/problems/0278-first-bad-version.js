export default {
  "id": 278,
  "name": "First Bad Version",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/first-bad-version",
  "relativeDir": "F/First Bad Version",
  "slug": "0278-first-bad-version",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 19,
    "python": 8,
    "javascript": 40
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int firstBadVersion(int n) {\r\n\t//Using Binary Search\r\n        int lo = 1, hi = n, mid;\r\n        while (lo < hi) {\r\n            mid = lo + (hi - lo) / 2;\r\n            if (isBadVersion(mid)) hi = mid;\r\n            else lo = mid+1;\r\n        }\r\n        return lo;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def firstBadVersion(self, n: int) -> int:\r\n        fast, slow = int(n/2), n\r\n        diff = abs(fast-slow)\r\n        while isBadVersion(fast) == isBadVersion(slow) or diff > 1:\r\n            fast, slow = fast + (-1)**isBadVersion(fast) * (int(diff/2) or 1), fast\r\n            diff = abs(fast-slow)\r\n        return fast if isBadVersion(fast) else slow",
    "java": "/* The isBadVersion API is defined in the parent class VersionControl.\r\n      boolean isBadVersion(int version); */\r\n\r\npublic class Solution extends VersionControl {\r\n    public int firstBadVersion(int n) {\r\n        int s = 0; int e = n;\r\n        \r\n        while(s < e) {\r\n            int mid = s +(e-s)/2;\r\n            \r\n            if(isBadVersion(mid)){\r\n                e = mid ;\r\n            } else {\r\n                s = mid +1;\r\n            }\r\n        }\r\n        return e ;\r\n    }\r\n}",
    "javascript": "// Runtime: 109 ms (Top 17.20%) | Memory: 41.9 MB (Top 54.94%)\r\n/**\r\n * Definition for isBadVersion()\r\n *\r\n * @param {integer} version number\r\n * @return {boolean} whether the version is bad\r\n * isBadVersion = function(version) {\r\n * ...\r\n * };\r\n */\r\n\r\n/**\r\n * @param {function} isBadVersion()\r\n * @return {function}\r\n */\r\nvar solution = function(isBadVersion) {\r\n    /**\r\n     * @param {integer} n Total versions\r\n     * @return {integer} The first bad version\r\n     */\r\n    return function(n) {\r\n        let ceiling = n\r\n        let floor = 1\r\n        let firstBadVersion = -1\r\n\r\n        while (floor <= ceiling) {\r\n            const middle = Math.floor((ceiling + floor) / 2)\r\n\r\n            if (isBadVersion(middle)) {\r\n\r\n                firstBadVersion = middle\r\n                ceiling = middle - 1\r\n            } else {\r\n                floor = middle + 1\r\n            }\r\n        }\r\n\r\n        return firstBadVersion\r\n    };\r\n};"
  }
}
