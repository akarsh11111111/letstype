export default {
  "id": 42,
  "name": "Trapping Rain Water",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/trapping-rain-water",
  "relativeDir": "T/Trapping Rain Water",
  "slug": "0042-trapping-rain-water",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 25,
    "python": 19,
    "javascript": 26
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int trap(vector<int>& height) {\r\n        int left=0,right=height.size()-1;\r\n        int maxleft=0,maxright=0;\r\n        int res=0;\r\n        while(left<=right){\r\n            if(height[left]<=height[right]){\r\n                if(height[left]>=maxleft)maxleft=height[left];\r\n                else res += maxleft-height[left];\r\n                left++;\r\n            }else{\r\n                 if(height[right]>=maxright)maxright=height[right];\r\n                else res += maxright-height[right];\r\n                right--;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 254 ms (Top 43.79%) | Memory: 16.1 MB (Top 46.67%)\r\nclass Solution:\r\n    def trap(self, a: List[int]) -> int:\r\n        l=0\r\n        r=len(a)-1\r\n        maxl=0\r\n        maxr=0\r\n        res=0\r\n\r\n        while (l<=r):\r\n            if a[l]<=a[r]:\r\n                if a[l]>=maxl: maxl=a[l] #update maxl if a[l] is >=\r\n                else: res+=maxl-a[l] #adding captured water when maxl>a[l]\r\n                l+=1\r\n            else:\r\n                if a[r]>=maxr: maxr=a[r]\r\n                else: res+=maxr-a[r]\r\n                r-=1\r\n        return res",
    "java": "class Solution {\r\n    public int trap(int[] height) {\r\n        int left = 0;\r\n        int right = height.length - 1;\r\n        \r\n        int l_max = height[left];\r\n        int r_max = height[right];\r\n        int res = 0;\r\n        \r\n        while(left < right) {\r\n            if(l_max < r_max) {\r\n                left+=1;\r\n                l_max = Math.max(l_max, height[left]);\r\n                res += l_max - height[left];\r\n            }\r\n            else{\r\n                right-=1;\r\n                r_max = Math.max(r_max, height[right]);\r\n                res += r_max - height[right];\r\n            }\r\n        }\r\n        \r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 53 ms (Top 86.36%) | Memory: 44.80 MB (Top 38.62%)\r\n\r\nvar trap = function(height) {\r\n    let landArea = 0;\r\n    let maxFromLeft = 0;\r\n    let maxAreaFromLeft = 0;\r\n    \r\n    for (let h of height) {\r\n        landArea += h;\r\n        maxFromLeft = Math.max(maxFromLeft, h);\r\n        maxAreaFromLeft += maxFromLeft;\r\n    }\r\n    \r\n    let maxFromRight = 0;\r\n    let maxAreaFromRight = 0;\r\n    \r\n    for (let i = height.length - 1; i >= 0; i--) {\r\n        maxFromRight = Math.max(maxFromRight, height[i]);\r\n        maxAreaFromRight += maxFromRight;\r\n    }\r\n    \r\n    const boundingArea = height.length * maxFromLeft;\r\n    const leftVoid = boundingArea - maxAreaFromLeft;\r\n    const rightVoid = boundingArea - maxAreaFromRight;\r\n    return boundingArea - leftVoid - rightVoid - landArea;\r\n};"
  }
}
