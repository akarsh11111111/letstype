export default {
  "id": 508,
  "name": "Most Frequent Subtree Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/most-frequent-subtree-sum",
  "relativeDir": "M/Most Frequent Subtree Sum",
  "slug": "0508-most-frequent-subtree-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 36,
    "python": 25,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 46 ms (Top 11.65%) | Memory: 24.7 MB (Top 31.13%)\r\nclass Solution {\r\nprivate:\r\n    unordered_map<int, int> m;\r\n    int maxi = 0;\r\n    int f(TreeNode* root){\r\n        if(!root) return 0;\r\n        int l = f(root->left);\r\n        int r = f(root->right);\r\n        int sum = root->val + l + r;\r\n        m[sum]++;\r\n        maxi = max(maxi, m[sum]);\r\n        return sum;\r\n    }\r\npublic:\r\n    vector<int> findFrequentTreeSum(TreeNode* root) {\r\n        vector<int> ans;\r\n        f(root);\r\n        for(auto &e : m){\r\n            if(e.second == maxi) ans.push_back(e.first);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    def findFrequentTreeSum(self, root: Optional[TreeNode]) -> List[int]:\r\n        def dfs(root):\r\n            \r\n            if not root: return 0\r\n            \r\n            l = dfs(root.left)\r\n            r = dfs(root.right)\r\n            res = root.val + l + r\r\n            \r\n            d[res] += 1\r\n            return res\r\n        \r\n        d = collections.Counter()\r\n        dfs(root)\r\n        maxi = max(d.values())\r\n        return [i for i in d if d[i] == maxi]\r\n        \r\n\t\t# An Upvote will be encouraging",
    "java": "// Runtime: 14 ms (Top 14.50%) | Memory: 44.9 MB (Top 83.15%)\r\nclass Solution {\r\n    public int[] findFrequentTreeSum(TreeNode root) {\r\n\r\n        HashMap<Integer,Integer> map=new HashMap<>();\r\n        int sum=sum(root,map);\r\n        int max=0;\r\n        int count=0;\r\n        for(Integer key:map.keySet()){\r\n            max=Math.max(max,map.get(key));\r\n        }\r\n\r\n        for(Integer key:map.keySet()){\r\n            if(max==map.get(key)){\r\n                count++;\r\n            }\r\n        }\r\n        int[] ans=new int[count];\r\n        int counter=0;\r\n        for(Integer key:map.keySet()){\r\n            if(max==map.get(key)){\r\n                ans[counter++]=key;\r\n            }\r\n        }\r\n\r\n        return ans;\r\n\r\n    }\r\n    public int sum(TreeNode root,HashMap<Integer,Integer> map){\r\n        if(root==null)return 0;\r\n        int lh=sum(root.left,map);\r\n        int rh=sum(root.right,map);\r\n        map.put(lh+rh+root.val,map.getOrDefault(lh+rh+root.val,0)+1);\r\n        return lh+rh+root.val;\r\n    }\r\n}",
    "javascript": "var findFrequentTreeSum = function(root) {\r\n\tconst hash = new Map();\r\n\tconst result = [];\r\n\tlet max = 0;\r\n\tconst dfs = (node = root) => {\r\n\t\tif (!node) return 0;\r\n\t\tconst { left, right, val } = node;\r\n\t\tconst sum = val + dfs(left) + dfs(right);\r\n\t\tconst count = hash.get(sum) ?? 0;\r\n\t\thash.set(sum, count + 1);\r\n\t\tmax = Math.max(max, count + 1);\r\n\t\treturn sum;\r\n\t};\r\n\r\n\tdfs();\r\n\thash.forEach((value, key) => value === max && result.push(key));\r\n\treturn result;\r\n};"
  }
}
