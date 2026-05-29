export default {
  "id": 2196,
  "name": "Create Binary Tree From Descriptions",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/create-binary-tree-from-descriptions",
  "relativeDir": "C/Create Binary Tree From Descriptions",
  "slug": "2196-create-binary-tree-from-descriptions",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 41,
    "python": 22,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 1907 ms (Top 31.92%) | Memory: 277.9 MB (Top 71.08%)\r\nclass Solution {\r\npublic:\r\n    TreeNode* createBinaryTree(vector<vector<int>>& descriptions){\r\n        unordered_map<int, TreeNode*> getNode; //to check if node alredy exist\r\n        unordered_map<int, bool> isChild; //to check if node has parent or not\r\n        for(auto &v: descriptions){\r\n            if(getNode.count(v[0])==0){\r\n                TreeNode* par = new TreeNode(v[0]);\r\n                getNode[v[0]] = par;\r\n            }\r\n            if(getNode.count(v[1])==0){\r\n                TreeNode* child = new TreeNode(v[1]);\r\n                getNode[v[1]] = child;\r\n            }\r\n            if(v[2]==1) getNode[v[0]]->left = getNode[v[1]]; //left-child\r\n            else getNode[v[0]]->right = getNode[v[1]]; //right-child\r\n            isChild[v[1]] = true;\r\n        }\r\n        TreeNode* ans = NULL;\r\n        for(auto &v: descriptions){\r\n            if(isChild[v[0]] != true){ //if node has no parent then this is root node\r\n                ans = getNode[v[0]];\r\n                break;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "\r\nclass Solution:\r\n    def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:\r\n        hashmap = {}\r\n        nodes = set()\r\n        children = set()\r\n        for parent,child,isLeft in descriptions:\r\n            nodes.add(parent)\r\n            nodes.add(child)\r\n            children.add(child)\r\n            if parent not in hashmap:\r\n                hashmap[parent] = TreeNode(parent)\r\n            if child not in hashmap:\r\n                hashmap[child] = TreeNode(child)\r\n            if isLeft:\r\n                hashmap[parent].left = hashmap[child]\r\n            if not isLeft:\r\n                hashmap[parent].right = hashmap[child]\r\n        \r\n        for node in nodes:\r\n            if node not in children:\r\n                return hashmap[node]",
    "java": "class Solution {\r\n    public TreeNode createBinaryTree(int[][] descriptions) {\r\n        HashMap<Integer,TreeNode> map=new HashMap<>();\r\n        HashSet<Integer> children=new HashSet<>();\r\n        for(int[] info:descriptions)\r\n        {\r\n            int parent=info[0],child=info[1];\r\n            boolean isLeft=info[2]==1?true:false;\r\n            TreeNode parentNode=null;\r\n            TreeNode childNode=null;\r\n            if(map.containsKey(parent))\r\n                parentNode=map.get(parent);\r\n            else\r\n                parentNode=new TreeNode(parent);\r\n            if(map.containsKey(child))\r\n                childNode=map.get(child);\r\n            else\r\n                childNode=new TreeNode(child);\r\n            if(isLeft)\r\n                parentNode.left=childNode;\r\n            else\r\n                parentNode.right=childNode;\r\n            map.put(parent,parentNode);\r\n            map.put(child,childNode);\r\n            children.add(child);\r\n            \r\n        }\r\n        TreeNode root=null;\r\n        for(int info[]:descriptions)\r\n        {\r\n            if(!children.contains(info[0]))\r\n            {\r\n                root=map.get(info[0]);\r\n                break;\r\n            }\r\n        }\r\n        return root;\r\n    }\r\n    \r\n    \r\n}",
    "javascript": "// Runtime: 516 ms (Top 87.84%) | Memory: 88.6 MB (Top 39.19%)\r\nvar createBinaryTree = function(descriptions) {\r\n  let nodes = new Map(), children = new Set();\r\n  for (let [parent, child, isLeft] of descriptions) {\r\n    let parentNode = nodes.get(parent) || new TreeNode(parent);\r\n    if (!nodes.has(parent)) nodes.set(parent, parentNode);\r\n\r\n    let childNode = nodes.get(child) || new TreeNode(child);\r\n    if (!nodes.has(child)) nodes.set(child, childNode);\r\n\r\n    if (isLeft) parentNode.left = childNode;\r\n    else parentNode.right = childNode;\r\n\r\n    children.add(child);\r\n  }\r\n\r\n  for (let [parent, child, isLeft] of descriptions) {\r\n    // a node with no parent is the root\r\n    if (!children.has(parent)) return nodes.get(parent);\r\n  }\r\n};"
  }
}
