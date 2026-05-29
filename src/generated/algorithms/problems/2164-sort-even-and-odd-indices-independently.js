export default {
  "id": 2164,
  "name": "Sort Even and Odd Indices Independently",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sort-even-and-odd-indices-independently",
  "relativeDir": "S/Sort Even and Odd Indices Independently",
  "slug": "2164-sort-even-and-odd-indices-independently",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 35,
    "python": 10,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 10 ms (Top 19.4%) | Memory: 12.16 MB (Top 53.0%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> sortEvenOdd(vector<int>& nums) {\r\n        vector<int> odd, even;\r\n        for(int i = 0; i < nums.size(); i++) {\r\n            if(i & 1) {\r\n                odd.push_back(nums[i]);\r\n            } else {\r\n                even.push_back(nums[i]);\r\n            }\r\n        }\r\n        sort(odd.begin(), odd.end(), greater<int>());\r\n        sort(even.begin(), even.end());\r\n        for(int i = 0; i < nums.size(); i++) {\r\n            if(i & 1) {\r\n                nums[i] = odd[0];\r\n                odd.erase(odd.begin());\r\n            } else {\r\n                nums[i] = even[0];\r\n                even.erase(even.begin());\r\n            }\r\n        }\r\n        return nums;\r\n    }\r\n};",
    "python": "# Runtime: 63 ms (Top 80.35%) | Memory: 13.8 MB (Top 69.47%)\r\n\r\nclass Solution(object):\r\n    def sortEvenOdd(self, nums):\r\n        \"\"\"\r\n        :type nums: List[int]\r\n        :rtype: List[int]\r\n        \"\"\"\r\n        nums[::2], nums[1::2] = sorted(nums[::2]), sorted(nums[1::2], reverse=True)\r\n        return nums",
    "java": "// Runtime: 2 ms (Top 98.20%) | Memory: 44.5 MB (Top 79.13%)\r\n\r\nclass Solution {\r\n    public int[] sortEvenOdd(int[] nums) {\r\n        int[] even = new int[101];\r\n        int[] odd = new int[101];\r\n        int length = nums.length;\r\n        for (int i = 0; i < length; ++i) {\r\n            if (i % 2 == 0) {\r\n                even[nums[i]]++;\r\n            } else {\r\n                odd[nums[i]]++;\r\n            }\r\n        }\r\n        int e = 0;\r\n        int o = 100;\r\n        for (int i = 0; i < length; ++i) {\r\n            if (i % 2 == 0) {\r\n                // check even\r\n                while (even[e] == 0) {\r\n                    ++e;\r\n                }\r\n                nums[i] = e;\r\n                even[e]--;\r\n            } else {\r\n                while(odd[o] == 0) {\r\n                    --o;\r\n                }\r\n                nums[i] = o;\r\n                odd[o]--;\r\n            }\r\n        }\r\n        return nums;\r\n    }\r\n}",
    "javascript": "var sortEvenOdd = function(nums) {\r\n\r\nlet odd= nums.filter((num,i,arr)=> i%2!=0).sort((a,b)=> b-a);  //decreasing order\r\nlet even= nums.filter((num,i,arr)=> i%2==0).sort((a,b)=> a-b); //increasing order\r\nlet x=0,y=0;\r\n    \r\n   nums.forEach((num,i,nums)=> {\r\n        nums[i]= i%2==0 ? even[x++] : odd[y++];       //refilling the array \r\n    });\r\n    return nums;\r\n};"
  }
}
