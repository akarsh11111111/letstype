export default {
  "id": 2191,
  "name": "Sort the Jumbled Numbers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sort-the-jumbled-numbers",
  "relativeDir": "S/Sort the Jumbled Numbers",
  "slug": "2191-sort-the-jumbled-numbers",
  "availableLanguages": [
    "cpp",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "python": 4
  },
  "languages": {
    "cpp": "// Runtime: 243 ms (Top 80.44%) | Memory: 106.00 MB (Top 36.23%)\r\n\r\nclass Solution {\r\npublic:\r\n    #include<map>    \r\n    int getvalue(int n,vector<int>& mapping){\r\n        int value=0,t=1;\r\n        if(n==0)\r\n            return mapping[0];\r\n        while(n!=0){\r\n            int temp=n%10;            \r\n            value=mapping[temp]*t+value;\r\n            t=t*10, n=n/10;\r\n        }\r\n        return value;\r\n    }            \r\n    vector<int> sortJumbled(vector<int>& mapping, vector<int>& nums) {        \r\n        multimap<int,int> m;\r\n        for(int a:nums){            \r\n            int temp=getvalue(a,mapping);                        \r\n            m.insert(make_pair(temp,a));\r\n        }        \r\n        nums.clear();\r\n        for(auto itr=m.begin();itr!=m.end();itr++){\r\n            nums.push_back(itr->second);\r\n        }\r\n        return nums;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def sortJumbled(self, mapping: List[int], nums: List[int]) -> List[int]:\r\n        \r\n        return sorted(nums, key = lambda x: int(\"\".join([str(mapping[int(digit)]) for digit in str(x)])))"
  }
}
