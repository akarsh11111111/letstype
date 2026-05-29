export default {
  "id": 1980,
  "name": "Find Unique Binary String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-unique-binary-string",
  "relativeDir": "F/Find Unique Binary String",
  "slug": "1980-find-unique-binary-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 8,
    "python": 7,
    "javascript": 4
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string findDifferentBinaryString(vector<string>& nums) {\r\n        unordered_set<int> s;\r\n        for (auto num : nums) s.insert(stoi(num, 0, 2));\r\n        int res = 0;\r\n        while (++res) {\r\n            if (!s.count(res)) return bitset<16>(res).to_string().substr(16-nums.size());\r\n        }\r\n        return \"\";\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def findDifferentBinaryString(self, nums):\r\n        ans='';\r\n        for i,num in enumerate(nums):\r\n            ans+= '1' if(num[i]=='0') else '0'       #ternary if else\r\n\t\t\t#ans+= str(1- int(num[i]));              # Alternate: cast to string & 1-x to flip\r\n        return ans;",
    "java": "class Solution {\r\n    public String findDifferentBinaryString(String[] nums) {\r\n        StringBuilder ans= new StringBuilder();                  \r\n        for(int i=0; i<nums.length; i++)  \r\n            ans.append(nums[i].charAt(i) == '0' ? '1' : '0');              // Using ternary operator\r\n        return ans.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 102 ms (Top 33.33%) | Memory: 41.9 MB (Top 84.85%)\r\nvar findDifferentBinaryString = function(nums) {\r\n    return nums.map((s, i) => s[i] == 1 ? '0' : '1').join('');\r\n};"
  }
}
