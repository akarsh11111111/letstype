export default {
  "id": 324,
  "name": "Wiggle Sort II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/wiggle-sort-ii",
  "relativeDir": "W/Wiggle Sort II",
  "slug": "0324-wiggle-sort-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 19,
    "python": 40,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 39 ms (Top 34.86%) | Memory: 18.3 MB (Top 20.63%)\r\nclass Solution {\r\npublic:\r\n    void wiggleSort(vector<int>& nums) {\r\n\r\n        priority_queue<int> pq;\r\n        for(auto &i : nums)\r\n            pq.push(i);\r\n\r\n        for(int i = 1; i < nums.size(); i += 2)\r\n            nums[i] = pq.top(), pq.pop();\r\n\r\n        for(int i = 0; i < nums.size(); i += 2)\r\n            nums[i] = pq.top(), pq.pop();\r\n    }\r\n};",
    "python": "class Heap:\r\n\tdef __init__(self):\r\n\t\tself.q = []\r\n\tdef push(self,data):\r\n\t\ti = len(self.q)\r\n\t\tself.q.append(data)\r\n\t\twhile i>0:\r\n\t\t\tif self.q[i] > self.q[(i-1)//2]:\r\n\t\t\t\tself.q[i], self.q[(i-1)//2] = self.q[(i-1)//2], self.q[i]\r\n\t\t\t\ti = (i-1)//2\r\n\t\t\telse: return \r\n\tdef pop(self):\r\n\t\tif len(self.q)==0:return\r\n\t\tself.q[0] = self.q[-1]\r\n\t\tself.q.pop()\r\n\t\tdef heapify(i):\r\n\t\t\tind = i\r\n\t\t\tl = 2*i+1\r\n\t\t\tr = 2*i+2\r\n\t\t\tif r<len(self.q) and self.q[ind] < self.q[r]: ind = r\r\n\t\t\tif l<len(self.q) and self.q[ind] < self.q[l]: ind = l            \r\n\t\t\tif ind != i:\r\n\t\t\t\tself.q[i], self.q[ind] = self.q[ind], self.q[i]\r\n\t\t\t\theapify(ind)\r\n\t\theapify(0)\r\n\tdef top(self):  \r\n\t\treturn self.q[0] \r\n\r\n\r\nclass Solution:\r\n\tdef wiggleSort(self, nums: List[int]) -> None:\r\n\t\tn = len(nums)\r\n\t\th = Heap()\r\n\t\tfor i in nums: h.push(i)\r\n\t\tfor i in range(1,n,2):\r\n\t\t\tnums[i] = h.top()\r\n\t\t\th.pop()\r\n\t\tfor i in range(0,n,2):\r\n\t\t\tnums[i] = h.top()\r\n\t\t\th.pop()",
    "java": "// Runtime: 7 ms (Top 77.52%) | Memory: 56 MB (Top 40.18%)\r\nclass Solution {\r\n    public void wiggleSort(int[] nums) {\r\n        int a[]=nums.clone();\r\n        Arrays.sort(a);\r\n        int left=(nums.length-1)/2;\r\n        int right=nums.length-1;\r\n        for(int i=0;i<nums.length;i++){\r\n            if(i%2==0){\r\n                nums[i]=a[left];\r\n                left--;\r\n            }\r\n            else{\r\n                nums[i]=a[right];\r\n                right--;\r\n            }\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 133 ms (Top 67.12%) | Memory: 47 MB (Top 71.23%)\r\n\r\nvar wiggleSort = function(nums) {\r\n    nums.sort((a,b) => a - b);\r\n\r\n    let temp = [...nums];\r\n\r\n    let low = Math.floor((nums.length-1)/2), high = nums.length-1;\r\n\r\n    for(let i=0; i < nums.length; i++){\r\n        if(i % 2 === 0){\r\n            nums[i] = temp[low];\r\n            low--;\r\n        }else{\r\n            nums[i] = temp[high];\r\n            high--;\r\n        }\r\n    }\r\n\r\n    return nums;\r\n};"
  }
}
