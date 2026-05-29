export default {
  "id": 870,
  "name": "Advantage Shuffle",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/advantage-shuffle",
  "relativeDir": "A/Advantage Shuffle",
  "slug": "0870-advantage-shuffle",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 41,
    "java": 20,
    "python": 29
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> advantageCount(vector<int>& nums1, vector<int>& nums2) {\r\n        \r\n        int n1 = nums1.size();\r\n        \r\n        int n2 = nums2.size();\r\n        \r\n        multiset<int> s(nums1.begin(), nums1.end());\r\n        \r\n        for(int i = 0; i < n2; i++)\r\n        {\r\n            int val = nums2[i];\r\n            \r\n            auto it = s.upper_bound(val);\r\n            \r\n            if(it != s.end())\r\n            {\r\n                nums1[i] = *it;\r\n                \r\n                s.erase(it);\r\n            }\r\n            else\r\n            {\r\n                nums1[i] = -1;\r\n            }\r\n        }\r\n        \r\n        for(int i = 0; i < n1; i++)\r\n        {\r\n            if(nums1[i] == -1)\r\n            {\r\n                nums1[i] = *s.begin();\r\n                \r\n                s.erase(s.begin());\r\n            }\r\n        }\r\n        \r\n        return nums1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def advantageCount(self, nums1: List[int], nums2: List[int]) -> List[int]:\r\n        # sort by ascend order\r\n        nums1.sort()\r\n\r\n        # heapq in python is a minimal heap, so if we need to use a maximal heap, the element in the queue should be like: (-num, index)\r\n        q = []\r\n        for i, n in enumerate(nums2):\r\n            heapq.heappush(q, (-n, i))\r\n\r\n        n = len(nums1)\r\n        l = 0\r\n        r = n - 1\r\n        ans = [0] * n\r\n\r\n        while q:\r\n            # pop out the maximum number from nums2\r\n            num, i = heapq.heappop(q)\r\n            num = -num\r\n\r\n            # no number in nums1 > max number in nums2, so grap the minimum numer from nums1\r\n            if nums1[r] <= num:\r\n                ans[i] = nums1[l]\r\n                l += 1\r\n            else:\r\n                ans[i] = nums1[r]\r\n                r -= 1\r\n\r\n        return ans",
    "java": "class Solution {\r\n    public int[] advantageCount(int[] nums1, int[] nums2) {\r\n        Arrays.sort(nums1);\r\n        PriorityQueue<int[]> pq = new PriorityQueue<>((a,b)->(b[0]-a[0]));\r\n        for(int i=0;i<nums2.length;i++) pq.add(new int[]{nums2[i],i});\r\n        int left=0, right=nums1.length-1;\r\n        while(left<=right){\r\n            int[] get=pq.poll();\r\n            int pos=get[1], max=get[0];\r\n            if(nums1[right]>max){\r\n                nums2[pos]=nums1[right];\r\n                right--;\r\n            }else{\r\n                nums2[pos]=nums1[left];\r\n                left++;\r\n            }\r\n        }\r\n        return nums2;\r\n    }\r\n}"
  }
}
