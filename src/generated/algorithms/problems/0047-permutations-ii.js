export default {
  "id": 47,
  "name": "Permutations II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/permutations-ii",
  "relativeDir": "P/Permutations II",
  "slug": "0047-permutations-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 28,
    "python": 25,
    "javascript": 36
  },
  "languages": {
    "cpp": "// Runtime: 6 ms (Top 90.54%) | Memory: 8.5 MB (Top 90.65%)\r\nclass Solution {\r\npublic:\r\n    void fun(vector<int>& nums, vector<vector<int>>&ans,int i)\r\n    {\r\n        if(i==nums.size())\r\n        {\r\n            ans.push_back(nums);\r\n            return;\r\n        }\r\n        int freq[21]={0};\r\n        for(int j=i;j<nums.size();j++)\r\n        {\r\n            if(freq[nums[j]+10]==0)\r\n            {\r\n            swap(nums[i],nums[j]);\r\n            fun(nums,ans,i+1);\r\n            swap(nums[i],nums[j]);\r\n            }\r\n            freq[nums[j]+10]++;\r\n        }\r\n\r\n    }\r\n    vector<vector<int>> permuteUnique(vector<int>& nums) {\r\n        vector<vector<int>>ans;\r\n        fun(nums,ans,0);\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 136 ms (Top 31.20%) | Memory: 14.2 MB (Top 62.53%)\r\nclass Solution(object):\r\n    def permuteUnique(self, nums):\r\n        \"\"\"\r\n        :type nums: List[int]\r\n        :rtype: List[List[int]]\r\n        \"\"\"\r\n        if len(nums) == 1:\r\n            return [[nums[0]]]\r\n\r\n        res = self.permuteUnique(nums[1:])\r\n\r\n        for i in range(len(res)-1, -1 , -1):\r\n            j = 0\r\n            while j < len(res[i]):\r\n                if res[i][j] == nums[0]: #to account for repeated nums\r\n                    break\r\n                lst = res[i][:]\r\n                lst.insert(j, nums[0])\r\n                res.append(lst)\r\n                j += 1\r\n\r\n            res[i].insert(j,nums[0])\r\n\r\n        return res",
    "java": "class Solution {\r\n    public List<List<Integer>> permuteUnique(int[] nums) {\r\n        List<List<Integer>> ans = new ArrayList<>();\r\n        Arrays.sort(nums);\r\n        boolean used[] = new boolean[nums.length];\r\n        \r\n        permutationsFinder(nums,ans,new ArrayList<>(),used);\r\n        \r\n        return ans;\r\n    }\r\n    \r\n    static void permutationsFinder(int[] nums,List<List<Integer>> ans,List<Integer> list,boolean used[]){\r\n        if(list.size() == nums.length){\r\n            ans.add(new ArrayList<>(list));\r\n            return;\r\n        }\r\n        \r\n        for(int i=0;i<nums.length;i++){\r\n            if(used[i]) continue;\r\n            if(i>0 && nums[i]==nums[i-1] && !used[i-1]) continue;\r\n            list.add(nums[i]);\r\n            used[i] = true;\r\n            permutationsFinder(nums,ans,list,used);\r\n            list.remove(list.size()-1);\r\n            used[i] = false;\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 122 ms (Top 61.38%) | Memory: 44.5 MB (Top 89.57%)\r\nvar permuteUnique = function(nums) {\r\n    const answer = []\r\n\r\n    function perm (pos, array) {\r\n\r\n        if (pos >= array.length) {\r\n            answer.push(array)\r\n        }\r\n\r\n        const setObject = new Set()\r\n\r\n        for (let index=pos; index<array.length; index++) {\r\n            if (setObject.has(array[index])) {\r\n                continue\r\n            }\r\n            setObject.add(array[index])\r\n\r\n            // swap numbers\r\n            let temp = array[pos]\r\n            array[pos] = array[index]\r\n            array[index] = temp\r\n\r\n            perm(pos + 1, [...array])\r\n\r\n            // undo swapping for next iteration\r\n            temp = array[index]\r\n            array[index] = array[pos]\r\n            array[pos] = temp\r\n        }\r\n    }\r\n\r\n    perm(0, nums)\r\n\r\n    return answer\r\n};"
  }
}
