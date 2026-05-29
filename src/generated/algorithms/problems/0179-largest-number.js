export default {
  "id": 179,
  "name": "Largest Number",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-number",
  "relativeDir": "L/Largest Number",
  "slug": "0179-largest-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 17,
    "python": 7,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string largestNumber(vector<int>& nums) {\r\n        sort(nums.begin(),nums.end(),[&](int a,int b){\r\n            string order1 = to_string(a)+to_string(b);\r\n            string order2 = to_string(b)+to_string(a);\r\n            return order1>order2;\r\n        });\r\n        \r\n        string ans = \"\";\r\n        for(int i = 0;i<nums.size();i++){\r\n            if(nums[0]==0) return \"0\";\r\n            ans += to_string(nums[i]);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "from functools import cmp_to_key\r\nclass Solution:\r\n    def largestNumber(self, nums: List[int]) -> str:\r\n        nums = list(map(str, nums))\r\n        nums = reversed(sorted(nums, key = cmp_to_key(lambda x, y: -1 if int(x+y) < int(y+x) else ( 1 if int(x+y) > int(y+x) else 0))))\r\n        res = \"\".join(nums)\r\n        return res if int(res) else \"0\"",
    "java": "// Runtime: 9 ms (Top 69.93%) | Memory: 44.3 MB (Top 32.60%)\r\n\r\nclass Solution {\r\n    public String largestNumber(int[] nums) {\r\n        String[] arr=new String[nums.length];\r\n        for(int i=0;i<nums.length;i++){\r\n            arr[i]=Integer.toString(nums[i]);\r\n        }\r\n        Arrays.sort(arr,(a,b)->(b+a).compareTo(a+b));\r\n        if(arr[0].equals(\"0\")) return \"0\";\r\n        StringBuilder builder=new StringBuilder();\r\n        for(String item:arr){\r\n            builder.append(item);\r\n        }\r\n        return builder.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 115 ms (Top 22.99%) | Memory: 46.6 MB (Top 5.11%)\r\nvar largestNumber = function(nums) {\r\n    var arr=[]\r\n    nums.forEach((item)=>{\r\n        arr.push(item.toString());\r\n    })\r\n    arr.sort((a,b)=>(b+a).localeCompare(a+b));\r\n    var ret=\"\"\r\n    if(arr[0]==\"0\") return \"0\";\r\n    arr.forEach((item)=>{\r\n        ret+=item;\r\n    })\r\n    return ret;\r\n};"
  }
}
