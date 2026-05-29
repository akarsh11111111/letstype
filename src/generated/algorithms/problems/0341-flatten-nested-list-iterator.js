export default {
  "id": 341,
  "name": "Flatten Nested List Iterator",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/flatten-nested-list-iterator",
  "relativeDir": "F/Flatten Nested List Iterator",
  "slug": "0341-flatten-nested-list-iterator",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 25,
    "python": 22,
    "javascript": 73
  },
  "languages": {
    "cpp": "class NestedIterator {\r\n    vector<int> v;\r\n    int index;\r\n    void helper(vector<NestedInteger> &nestedList, vector<int>& v)\r\n    {\r\n        for (int i = 0; i < nestedList.size(); i++)\r\n        {\r\n            if (nestedList[i].isInteger())\r\n            {\r\n                v.push_back(nestedList[i].getInteger());\r\n            }\r\n            else\r\n            {\r\n                helper(nestedList[i].getList(), v);\r\n            }\r\n        }\r\n    }\r\npublic:\r\n    NestedIterator(vector<NestedInteger> &nestedList) {\r\n        helper(nestedList, v);\r\n        index = 0;\r\n    }\r\n    \r\n    int next() {\r\n        return v[index++];\r\n    }\r\n    \r\n    bool hasNext() {\r\n        if (v.size() <= index)\r\n        {\r\n            return false;\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "class NestedIterator:\r\n    def __init__(self, nestedList: [NestedInteger]):\r\n        self.flattened_lst = self.flattenList(nestedList)\r\n        self.idx = 0\r\n    \r\n    def next(self) -> int:\r\n        if self.idx >= len(self.flattened_lst):\r\n            raise Exception(\"Index out of bound\")\r\n        self.idx += 1\r\n        return self.flattened_lst[self.idx-1]\r\n    \r\n    def hasNext(self) -> bool:\r\n        return self.idx < len(self.flattened_lst)\r\n    \r\n    def flattenList(self, lst):\r\n        flattened_lst = []\r\n        for ele in lst:\r\n            if ele.isInteger():\r\n                flattened_lst.append(ele.getInteger())\r\n            else:\r\n                flattened_lst.extend(self.flattenList(ele.getList()))\r\n        return flattened_lst",
    "java": "// Runtime: 4 ms (Top 77.47%) | Memory: 46.1 MB (Top 81.31%)\r\npublic class NestedIterator implements Iterator<Integer> {\r\n    List<Integer> list=new ArrayList();\r\n    void flatten(List<NestedInteger> nestedList){\r\n        for(NestedInteger nested:nestedList){\r\n            if(nested.isInteger())\r\n                list.add(nested.getInteger());\r\n            else\r\n                flatten(nested.getList());\r\n        }\r\n    }\r\n    public NestedIterator(List<NestedInteger> nestedList) {\r\n        flatten(nestedList);\r\n    }\r\n    int index=0;\r\n    @Override\r\n    public Integer next() {\r\n        return list.get(index++);\r\n    }\r\n\r\n    @Override\r\n    public boolean hasNext() {\r\n        return index<list.size();\r\n    }\r\n}",
    "javascript": "// Runtime: 86 ms (Top 46.9%) | Memory: 54.48 MB (Top 31.0%)\r\n\r\n/**\r\n * // This is the interface that allows for creating nested lists.\r\n * // You should not implement it, or speculate about its implementation\r\n * function NestedInteger() {\r\n *\r\n *     Return true if this NestedInteger holds a single integer, rather than a nested list.\r\n *     @return {boolean}\r\n *     this.isInteger = function() {\r\n *         ...\r\n *     };\r\n *\r\n *     Return the single integer that this NestedInteger holds, if it holds a single integer\r\n *     Return null if this NestedInteger holds a nested list\r\n *     @return {integer}\r\n *     this.getInteger = function() {\r\n *         ...\r\n *     };\r\n *\r\n *     Return the nested list that this NestedInteger holds, if it holds a nested list\r\n *     Return null if this NestedInteger holds a single integer\r\n *     @return {NestedInteger[]}\r\n *     this.getList = function() {\r\n *         ...\r\n *     };\r\n * };\r\n */\r\n/**\r\n * @constructor\r\n * @param {NestedInteger[]} nestedList\r\n */\r\nvar NestedIterator = function(nestedList) {\r\n    this.nestedList = []\r\n    this.ptr = 0\r\n    const dfs = (elem) => {\r\n        if(!elem.isInteger()) {\r\n            let list = elem.getList()\r\n            for(let i = 0;i<list.length;i++) {\r\n                dfs(list[i])\r\n            }\r\n        }else {\r\n            this.nestedList.push(elem.getInteger())\r\n        }\r\n    }\r\n    for(let i = 0;i<nestedList.length;i++) {\r\n        dfs(nestedList[i])\r\n    }\r\n};\r\n\r\n\r\n/**\r\n * @this NestedIterator\r\n * @returns {boolean}\r\n */\r\nNestedIterator.prototype.hasNext = function() {\r\n    if(this.ptr < this.nestedList.length) return true\r\n    else return false\r\n};\r\n\r\n/**\r\n * @this NestedIterator\r\n * @returns {integer}\r\n */\r\nNestedIterator.prototype.next = function() {\r\n    return this.nestedList[this.ptr++]\r\n};\r\n\r\n/**\r\n * Your NestedIterator will be called like this:\r\n * var i = new NestedIterator(nestedList), a = [];\r\n * while (i.hasNext()) a.push(i.next());\r\n*/"
  }
}
