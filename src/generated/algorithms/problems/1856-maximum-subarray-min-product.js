export default {
  "id": 1856,
  "name": "Maximum Subarray Min-Product",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-subarray-min-product",
  "relativeDir": "M/Maximum Subarray Min-Product",
  "slug": "1856-maximum-subarray-min-product",
  "availableLanguages": [
    "java",
    "javascript"
  ],
  "defaultLanguage": "java",
  "lineCounts": {
    "java": 50,
    "javascript": 37
  },
  "languages": {
    "java": "class Solution {\r\n    public int maxSumMinProduct(int[] nums) {\r\n        int mod=(int)Math.pow(10,9)+7;\r\n        int n=nums.length;\r\n        \r\n        //next smaller on left\r\n        int[] left=new int[n];\r\n        Stack<Integer> st=new Stack<>();\r\n        left[0]=-1;\r\n        st.push(0);\r\n        for(int i=1;i<n;i++){\r\n            while(st.size()>0 && nums[st.peek()]>=nums[i]){\r\n                st.pop();\r\n            }\r\n            \r\n            if(st.size()==0) left[i]=-1;\r\n            else left[i]=st.peek();\r\n            \r\n            st.push(i);\r\n        }\r\n        \r\n        //next smaller on right\r\n        int[] right=new int[n];\r\n        st=new Stack<>();\r\n        right[n-1]=n;\r\n        st.push(n-1);\r\n        for(int i=n-2;i>=0;i--){\r\n        while(st.size()>0 && nums[st.peek()]>=nums[i]) st.pop();\r\n            \r\n            if(st.size()>0) right[i]=st.peek();\r\n            else right[i]=n;\r\n            \r\n            st.push(i);\r\n        }\r\n        \r\n        long[] prefixSum=new long[n];\r\n        prefixSum[0]=nums[0];\r\n        for(int i=1;i<n;i++) prefixSum[i]=prefixSum[i-1]+nums[i];\r\n        \r\n      \r\n        long max=0;\r\n        for(int i=0;i<nums.length;i++){\r\n            int l=left[i];\r\n            int r=right[i]-1;\r\n            \r\n            max=Math.max(max,(prefixSum[r]-(l==-1?0:prefixSum[l]))*nums[i]);\r\n        }\r\n        return (int)(max%mod);\r\n    }\r\n}",
    "javascript": "var maxSumMinProduct = function(nums) {\r\n    var mod = BigInt(1000000007);\r\n    var n = nums.length;\r\n    var max = 0n;\r\n    if(n === 1)\r\n    {\r\n        return (nums[0]*nums[0]) % mod;\r\n    }\r\n    var sum = new Array(n+1).fill(0);\r\n    for(var i = 1; i<=n; i++)\r\n    {\r\n        sum[i] = sum[i-1] + nums[i-1];\r\n    }\r\n    for(var i = 0;i<n; i++)\r\n    {\r\n        var l = i-1;\r\n        var r = i+1;\r\n        while(l>=0 && nums[l]>=nums[i])\r\n        {\r\n            l--;\r\n        }\r\n        l++;\r\n        while(r<n && nums[r]>=nums[i])\r\n        {\r\n            r++;\r\n        }\r\n        r--;\r\n        var s = BigInt(sum[r+1] - sum[l]);\r\n        var factor = BigInt(nums[i]);\r\n        var prod = s*factor;\r\n        if(prod > max)\r\n        {\r\n            max = prod;\r\n        }\r\n    }\r\n    return Number(max % mod); \r\n};"
  }
}
