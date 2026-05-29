export default {
  "id": 955,
  "name": "Delete Columns to Make Sorted II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/delete-columns-to-make-sorted-ii",
  "relativeDir": "D/Delete Columns to Make Sorted II",
  "slug": "0955-delete-columns-to-make-sorted-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 45,
    "java": 25,
    "python": 50,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 12 ms (Top 58.21%) | Memory: 10.9 MB (Top 12.31%)\r\n// in this i have iterated for every column and then for every string\r\n// i have used array arr[101] in order to store wich indices are valid and which are not\r\n// i have taken an array of positions(vector) done[101] to find at which previous locations i found this particular (jth index string ) to be smaller than its successor\r\n\r\nclass Solution {\r\npublic:\r\n     int arr[101]={0}; // arr is to check which columns are valid(0) and invalid(-1)\r\n    vector<int> done[101]; // where u found string j was greater than string j+1 ,u put it into vector\r\n\r\n // below is a helper function in order to check all the locations (at which string j has been classified as done ) are still present or not\r\n    bool check(vector<int>& a){\r\n      for(int i:a){\r\n          if(arr[i]!=-1){\r\n              return 1;\r\n          }\r\n      }\r\n        return 0;\r\n    }\r\nint minDeletionSize(vector<string>& strs) {\r\n\r\n        int ans=0;\r\n// for iterating columns\r\n     for(int i=0;i<strs[0].size();i++){\r\n   // for iterating the strings\r\n         for(int j=0;j<strs.size()-1;j++){\r\n\r\n           if((done[j].size()==0 || check(done[j])==0) && strs[j][i]>strs[j+1][i]){\r\n\r\n                ans++;\r\n               arr[i]=-1; // make the column invalid\r\n                break;\r\n            }\r\n             if(strs[j][i]<strs[j+1][i]){\r\n\r\n                 done[j].push_back(i); // here we are storing at which index (i) said string j is ok\r\n             }\r\n         }\r\n\r\n     }\r\n\r\n        return ans;\r\n    }\r\n\r\n};",
    "python": "class Solution:\r\n    def minDeletionSize(self, strs: List[str]) -> int:\r\n        n = len(strs)\r\n        col_size = len(strs[0])\r\n        # a b c d e f g h i j k l m n o p q r s t u v w x y z\r\n        \r\n        i = 0\r\n        ans = 0\r\n        \r\n        def getRemoved(idx):\r\n             # removing the idx column \r\n            for x in range(n):           \r\n                strs[x] = strs[x][:idx] + strs[x][idx+1:]\r\n        \r\n        while i < col_size:\r\n            tmp = strs[0][:i+1]\r\n            flag = True\r\n            similar = False\r\n            \r\n            for j in range(1,n):                 \r\n                if  strs[j][:i+1] < tmp :\r\n                    # previous element is larger ( unsorted )\r\n                    flag = False\r\n                    break\r\n                \r\n                elif strs[j][:i+1] > tmp : \r\n                    # previous element is smaller ( sorted )\r\n                    tmp = strs[j][:i+1]\r\n                \r\n                else:\r\n                    # previous element is equal ( not clear )\r\n                    tmp = strs[j][:i+1]\r\n                    similar = True\r\n            \r\n            if flag == True and similar == False:\r\n                # all are sorted and we are ready to return ans\r\n                return ans\r\n            \r\n            elif flag == True and similar == True:\r\n                # all are sorted but can't be decided for further columns. check for next col\r\n                i += 1\r\n            \r\n            elif flag == False:\r\n                # unsorted column = removal\r\n                getRemoved(i)\r\n                # increment the answer and since we removed i th col decrement col_size\r\n                ans += 1\r\n                col_size -= 1\r\n        \r\n        return ans",
    "java": "class Solution {\r\n    public int minDeletionSize(String[] strs) {\r\n       boolean[] sorted = new boolean[strs.length];\r\n        int res = 0;\r\n        for(int i = 0;i<strs[0].length();i++){\r\n            int j = 0;\r\n           for(;j<strs.length-1;j++){\r\n              if(!sorted[j]&&strs[j].charAt(i)>strs[j+1].charAt(i)){\r\n                  res++;\r\n                  break;\r\n              }  \r\n            }\r\n            if(j<strs.length-1){\r\n                continue;\r\n            }\r\n            j = 0;\r\n            for(;j<strs.length-1;j++){\r\n                if(strs[j].charAt(i)<strs[j+1].charAt(i)){\r\n                    sorted[j] = true;\r\n                }\r\n            }\r\n        }\r\n        return res;\r\n}\r\n}",
    "javascript": "var minDeletionSize = function(strs) {\r\n    const length = strs.length;\r\n    let inOrder = true, count = 0, deleteIndex = 0;\r\n    while(strs[0].length > 0) {\r\n        inOrder = true;\r\n        for(let i=0; i<length; i++) {\r\n            if(strs[i] > strs[i+1]) {\r\n                inOrder = false;\r\n                for(let index = 0; index<strs[i].length;index++) {\r\n                    if(strs[i][index] > strs[i+1][index]) {\r\n                        deleteIndex = index;\r\n                        break;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        for(let i=0; i<length; i++) {\r\n            strs[i] = strs[i].substring(0,deleteIndex) + strs[i].substring(deleteIndex+1);\r\n        }\r\n        if(inOrder) {\r\n            break;\r\n        } \r\n        else {\r\n            count++;\r\n        }\r\n    }\r\n    return count;    \r\n};"
  }
}
