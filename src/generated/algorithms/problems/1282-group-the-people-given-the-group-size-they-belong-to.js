export default {
  "id": 1282,
  "name": "Group the People Given the Group Size They Belong To",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to",
  "relativeDir": "G/Group the People Given the Group Size They Belong To",
  "slug": "1282-group-the-people-given-the-group-size-they-belong-to",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 35,
    "python": 19,
    "javascript": 16
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<vector<int>> groupThePeople(vector<int>& groupSizes) {\r\n        vector<vector<int>>ans;\r\n        unordered_map<int,vector<int>> store;\r\n        \r\n        for(int i=0;i<groupSizes.size();i++){\r\n            if(store[groupSizes[i]].size()==groupSizes[i]){\r\n               ans.push_back(store[groupSizes[i]]) ;\r\n                store[groupSizes[i]].clear();\r\n                }\r\n            store[groupSizes[i]].push_back(i);}\r\n        \r\n        for(auto &x:store){\r\n            ans.push_back(x.second);}\r\n        return ans;     \r\n    }\r\n};",
    "python": "# Runtime: 75 ms (Top 97.76%) | Memory: 14 MB (Top 88.55%)\r\nclass Solution(object):\r\n    def groupThePeople(self, groupSizes):\r\n        \"\"\"\r\n        :type groupSizes: List[int]\r\n        :rtype: List[List[int]]\r\n        \"\"\"\r\n        dict_group={}\r\n        for i in range(len(groupSizes)):\r\n            if groupSizes[i] not in dict_group:\r\n                dict_group[groupSizes[i]]=[i]\r\n            else:\r\n                dict_group[groupSizes[i]].append(i)\r\n        return_list=[]\r\n        for i in dict_group:\r\n            num_list=dict_group[i]\r\n            for j in range(0,len(num_list),i):\r\n                return_list.append(num_list[j:j+i])\r\n        return return_list",
    "java": "// Runtime: 54 ms (Top 5.31%) | Memory: 53.9 MB (Top 61.36%)\r\nclass Solution {\r\n    public List<List<Integer>> groupThePeople(int[] groupSizes) {\r\n\r\n        List<List<Integer>> temp = new ArrayList<List<Integer>>();\r\n        List<List<Integer>> result = new ArrayList<List<Integer>>();\r\n        for(int i = 0; i<groupSizes.length; i++){\r\n            int k = groupSizes[i];\r\n            boolean flag = true;\r\n            for(int j = 0; j<temp.size(); j++){\r\n                // If there is a list of reqired group size and it is filled lesser than we can put element in that one\r\n                if(k == temp.get(j).get(0) && k >temp.get(j).get(1)){\r\n                    result.get(j).add(i);\r\n                    temp.get(j).set(1,temp.get(j).get(1)+1);\r\n                    flag=false;\r\n                    break;\r\n                }\r\n            }\r\n            if(flag){\r\n                // comment 1\r\n                // We create a list with index and put it to result\r\n                List<Integer> res = new ArrayList();\r\n                res.add(i);\r\n                result.add(res);\r\n                // comment 2\r\n                // we create a new list recording max value can stored and currently filled\r\n                List<Integer> tempRes = new ArrayList();\r\n                tempRes.add(k);\r\n                tempRes.add(1);\r\n                temp.add(tempRes);\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} groupSizes\r\n * @return {number[][]}\r\n */\r\nvar groupThePeople = function(groupSizes) {\r\n    let indices = [], result = [];\r\n    groupSizes.forEach((x, idx) => {\r\n        if (indices[x]) indices[x].push(idx);\r\n        else indices[x] = [idx];\r\n        if (indices[x].length === x) {\r\n            result.push(indices[x]);\r\n            indices[x] = undefined;\r\n        }\r\n    });\r\n    return result;\r\n};"
  }
}
