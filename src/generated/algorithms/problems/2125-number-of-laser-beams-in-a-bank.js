export default {
  "id": 2125,
  "name": "Number of Laser Beams in a Bank",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-laser-beams-in-a-bank",
  "relativeDir": "N/Number of Laser Beams in a Bank",
  "slug": "2125-number-of-laser-beams-in-a-bank",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 14,
    "python": 9,
    "javascript": 7
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numberOfBeams(vector<string>& bank) \r\n    {\r\n        int rowLaserCount=0,totalLaserCount=0,prevCount=0;\r\n        for(int i=0;i<bank.size();i++)\r\n        {\r\n            rowLaserCount=0;\r\n            for(char j:bank[i])\r\n            {\r\n              if(j=='1')  rowLaserCount++;\r\n            }totalLaserCount+=(prevCount*rowLaserCount);\r\n            if(rowLaserCount)prevCount=rowLaserCount;\r\n        }\r\n        return totalLaserCount;\r\n        \r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def numberOfBeams(self, bank):\r\n        ans, pre = 0, 0\r\n        for s in bank:\r\n            n = s.count('1')\r\n            if n == 0: continue\r\n            ans += pre * n\r\n            pre = n\r\n        return ans",
    "java": "// Runtime: 34 ms (Top 22.34%) | Memory: 54.9 MB (Top 32.26%)\r\nclass Solution {\r\n    public int numberOfBeams(String[] bank) {\r\n        int ans = 0, pre = 0;\r\n        for (int i = 0;i < bank.length; i ++) {\r\n            int n = 0;\r\n            for (int j = 0; j < bank[i].length(); j ++) if(bank[i].charAt(j) == '1') n ++;\r\n            if (n == 0) continue;\r\n            ans += pre * n;;\r\n            pre = n;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var numberOfBeams = function(bank) {\r\n    let totalBeams = 0;\r\n    const maximumSecurityDevicePerRow = bank.map(row => (row.match(/1/g) || []).length).filter(Boolean)\r\n    for (let index = 0; index < maximumSecurityDevicePerRow.length - 1; index++) \r\n        totalBeams+= maximumSecurityDevicePerRow[index] * maximumSecurityDevicePerRow[index + 1];\r\n    return totalBeams;\r\n};"
  }
}
