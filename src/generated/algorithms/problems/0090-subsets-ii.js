export default {
  "id": 90,
  "name": "Subsets II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/subsets-ii",
  "relativeDir": "S/Subsets II",
  "slug": "0090-subsets-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 43,
    "python": 14,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 25 ms (Top 5.31%) | Memory: 8.3 MB (Top 35.96%)\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> ans;\r\n    void recur(vector<int>& nums, int i, vector<int> vec){\r\n        if(i > nums.size()){\r\n            return;\r\n        }\r\n        for(int j = i; j < nums.size(); j++){\r\n            vec.push_back(nums[j]);\r\n\r\n            vector<int> temp = vec;\r\n            sort(vec.begin(), vec.end());\r\n\r\n            if(find(ans.begin(), ans.end(), vec) == ans.end()){\r\n                ans.push_back(vec);\r\n            }\r\n\r\n            recur(nums, j + 1, vec);\r\n\r\n            //can't just pop_back any need to pop_back the one we added\r\n            vec = temp;\r\n            vec.pop_back();\r\n        }\r\n    }\r\n\r\n    vector<vector<int>> subsetsWithDup(vector<int>& nums) {\r\n        vector<int> vec;\r\n        ans.push_back(vec);\r\n        recur(nums, 0, vec);\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:\r\n        ans = []\r\n        nums.sort()\r\n        def subset(p, up):\r\n            if len(up) == 0:\r\n                if p not in ans:\r\n                    ans.append(p)\r\n                return \r\n            ch = up[0]\r\n            subset(p+[ch], up[1:])\r\n            subset(p, up[1:])\r\n        subset([], nums)\r\n        return ans",
    "java": "// Runtime: 1 ms (Top 99.9%) | Memory: 44.19 MB (Top 7.0%)\r\n\r\nclass Solution {\r\n    public List<List<Integer>> subsetsWithDup(int[] nums) {\r\n        // Sort the input array to handle duplicates properly\r\n        Arrays.sort(nums);\r\n        // Start the recursion with an empty prefix list\r\n        return subset(new ArrayList<Integer>(), nums);\r\n    }\r\n    \r\n    // Recursive function to generate subsets\r\n    public List<List<Integer>> subset(ArrayList<Integer> prefix, int[] nums) {\r\n        List<List<Integer>> result = new ArrayList<>();\r\n        \r\n        // Base case: If there are no elements in nums, add the current prefix to result\r\n        if (nums.length == 0) {\r\n            result.add(new ArrayList<>(prefix));\r\n            return result;\r\n        }\r\n        \r\n        // Include the first element of nums in the prefix\r\n        ArrayList<Integer> withCurrent = new ArrayList<>(prefix);\r\n        withCurrent.add(nums[0]);\r\n        \r\n        // Recursive call with the first element included\r\n        List<List<Integer>> left = subset(withCurrent, Arrays.copyOfRange(nums, 1, nums.length));\r\n        \r\n        List<List<Integer>> right = new ArrayList<>();\r\n        \r\n        // Check for duplicates in the prefix and decide whether to include the first element again\r\n        if (prefix.size() > 0 && prefix.get(prefix.size() - 1) == nums[0]) {\r\n            // If the current element is a duplicate, don't include it in the prefix\r\n            // This avoids generating duplicate subsets\r\n        } else {\r\n            // If the current element is not a duplicate, include it in the prefix\r\n            right = subset(prefix, Arrays.copyOfRange(nums, 1, nums.length));\r\n        }\r\n        \r\n        // Combine the subsets with and without the current element\r\n        left.addAll(right);\r\n        return left;\r\n    }\r\n}",
    "javascript": "// Runtime: 125 ms (Top 19.54%) | Memory: 44.7 MB (Top 48.96%)\r\nvar subsetsWithDup = function(nums) {\r\n    let result = [];\r\n    //sort the nums to avoid duplicates;\r\n    nums.sort((a,b) => a -b);\r\n    result.push([]);\r\n\r\n    let startIdx = 0;\r\n    let endIdx = 0;\r\n\r\n    for(let i =0; i<nums.length; i++){\r\n        let current = nums[i];\r\n        startIdx = 0;\r\n\r\n        //check for duplicates and get the idx of last subset\r\n        if(i> 0 && nums[i] === nums[i-1]){\r\n            startIdx = endIdx +1;\r\n        }\r\n        endIdx = result.length - 1;\r\n\r\n        for(let j = startIdx; j< endIdx+1; j++){\r\n            let set1 = result[j].slice(0);\r\n            set1.push(current);\r\n            result.push(set1);\r\n        }\r\n    }\r\n\r\n    return result;\r\n\r\n};"
  }
}
