export default {
  "id": 594,
  "name": "Longest Harmonious Subsequence",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-harmonious-subsequence",
  "relativeDir": "L/Longest Harmonious Subsequence",
  "slug": "0594-longest-harmonious-subsequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 66,
    "python": 15,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 175 ms (Top 32.17%) | Memory: 41.7 MB (Top 33.74%)\r\nclass Solution {\r\npublic:\r\n    int findLHS(vector<int>& nums)\r\n    {\r\n        map<int,int> m;\r\n        for(int i=0;i<nums.size();i++)\r\n        {\r\n            m[nums[i]]++;\r\n        }\r\n        int ans=0;\r\n        int x=-1,y=0;\r\n        for(auto i=m.begin();i!=m.end();i++)\r\n        {\r\n            if(i->first-x==1)\r\n            {\r\n                ans=max(ans,y+i->second);\r\n            }\r\n            x=i->first;\r\n            y=i->second;\r\n        }\r\n        return ans;\r\n\r\n    }\r\n};\r\n//if you like the solution plz upvote.",
    "python": "\"\"\r\nfrom collections import Counter\r\nclass Solution:\r\n\tdef findLHS(self, nums: List[int]) -> int:\r\n\t\tcounter=Counter(nums)\r\n\t\t# values=set(nums)\r\n\t\tres=0\r\n\t\t# if len(values)==1:return 0\r\n\t\tfor num in nums:\r\n\t\t\tif num+1 in counter or num-1 in counter:\r\n\t\t\t\tres=max(res,counter[num]+counter.get(num+1,0))\r\n\t\t\t\tres=max(res,counter[num]+counter.get(num-1,0))\r\n\r\n\t\treturn res\r\n\"\"",
    "java": "// Runtime: 26 ms (Top 74.55%) | Memory: 54.5 MB (Top 74.21%)\r\nclass Solution {\r\n    public static int firstOccurence(int[] arr,int target)\r\n    {\r\n        int res=-1;\r\n        int start=0;\r\n        int end=arr.length-1;\r\n        while(start<=end)\r\n        {\r\n            int mid=start + (end-start)/2;\r\n            if(arr[mid]==target)\r\n            {\r\n                res=mid;\r\n                end=mid-1;\r\n            }\r\n            else if(arr[mid]<target)\r\n            {\r\n                start=mid+1;\r\n            }\r\n            else\r\n            {\r\n                end=mid-1;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n    public static int lastOccurence(int[] arr,int target)\r\n    {\r\n        int res=-1;\r\n        int start=0;\r\n        int end=arr.length-1;\r\n        while(start<=end)\r\n        {\r\n            int mid=start + (end-start)/2;\r\n            if(arr[mid]==target)\r\n            {\r\n                res=mid;\r\n                start=mid+1;\r\n            }\r\n            else if(arr[mid]<target)\r\n            {\r\n                start=mid+1;\r\n            }\r\n            else\r\n            {\r\n                end=mid-1;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n    public int findLHS(int[] nums) {\r\n        Arrays.sort(nums);\r\n        int maxLen=0;\r\n        for(int i=0;i<nums.length-1;i++)\r\n        {\r\n            if(nums[i+1]==nums[i]+1)\r\n            {\r\n            int a=firstOccurence(nums,nums[i]);\r\n            int b=lastOccurence(nums,nums[i]+1);\r\n            if(b-a+1>maxLen)\r\n                maxLen=b-a+1;\r\n            }\r\n        }\r\n        return maxLen;\r\n    }\r\n}",
    "javascript": "var findLHS = function(nums) {\r\n    let countNumber = {};\r\n    let result = [];\r\n    for (let i=0; i<nums.length; i++) {\r\n        if (!countNumber[nums[i]]) {\r\n            countNumber[nums[i]] = 1;\r\n        } else {\r\n            countNumber[nums[i]]++;\r\n        }\r\n    }\r\n    for (let value of Object.keys(countNumber)) {\r\n        let count;\r\n        let current = parseInt(value);\r\n        if (countNumber[current + 1]) {\r\n            count = countNumber[current] + countNumber[current + 1];    \r\n            result.push(count);\r\n        }\r\n    };\r\n    if (result.length === 0) {\r\n        return 0;\r\n    }\r\n    return Math.max(...result);\r\n};"
  }
}
