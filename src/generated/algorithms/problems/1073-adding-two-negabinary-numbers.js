export default {
  "id": 1073,
  "name": "Adding Two Negabinary Numbers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/adding-two-negabinary-numbers",
  "relativeDir": "A/Adding Two Negabinary Numbers",
  "slug": "1073-adding-two-negabinary-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 62,
    "python": 51
  },
  "languages": {
    "cpp": "// Runtime: 11 ms (Top 68.21%) | Memory: 19.6 MB (Top 18.50%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> addNegabinary(vector<int>& arr1, vector<int>& arr2) {\r\n\r\n        int i = arr1.size()-1;\r\n        int j = arr2.size()-1;\r\n\r\n        // prestore bits and carry for different sum values\r\n        vector<int>bits = {0,1,0,1,0,1};\r\n        vector<int>carries = {1,1,0,0,-1,-1};\r\n\r\n        vector<int>res;\r\n\r\n        int sum;\r\n        int carry = 0;\r\n\r\n        // perform binary addition using sum and prestored bit and carry values\r\n        while(i>=0 || j>=0 || carry)\r\n        {\r\n            sum = carry + (i>=0 ? arr1[i--] : 0) + (j>=0 ? arr2[j--] : 0);\r\n\r\n            carry = carries[sum+2];\r\n\r\n            res.push_back(bits[sum+2]);\r\n        }\r\n\r\n        // remove leading zeroes\r\n        while(res.size() > 1 && res.back()==0)res.pop_back();\r\n\r\n        reverse(res.begin(),res.end());\r\n\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def addNegabinary(self, arr1: List[int], arr2: List[int]) -> List[int]:\r\n        \r\n        //final answer\r\n        new = []\r\n        carry = 0\r\n        \r\n\t\t//make arrays length equal \r\n        if len(arr1) < len(arr2):\r\n            diff = len(arr2) - len(arr1)\r\n            arr1 = ([0] * diff) + arr1\r\n        \r\n        if len(arr1) > len(arr2):\r\n            diff = len(arr1) - len(arr2)\r\n            arr2 = ([0] * diff) + arr2\r\n            \r\n            \r\n        \r\n        //add values at every index and set carry and new value appropriately\r\n        while arr1 and arr2:\r\n            \r\n            top = arr1.pop()\r\n            down = arr2.pop()\r\n            \r\n            add = top + down + carry\r\n            \r\n            if add == -1:\r\n                new = [1] + new\r\n                carry = 1\r\n            \r\n            elif add == 1 or add == 0:\r\n                new =  [add] + new\r\n                carry = 0\r\n                \r\n            elif add == 2:\r\n                new = [0] + new\r\n                carry = -1\r\n            \r\n            else:\r\n                new = [1] + new\r\n                carry = -1\r\n                \r\n         // if carry -1 add 1 1 since -1 is 11 in negabinary\r\n        if carry == -1:\r\n            new = [1,1] + new\r\n            \r\n\t\t//remove any leading zeros\r\n        while new[0] == 0 and len(new) >1:\r\n            new = new[1:]\r\n            \r\n        return new",
    "java": "// Runtime: 1 ms (Top 100.00%) | Memory: 42.4 MB (Top 98.61%)\r\nclass Solution {\r\n    public int[] addNegabinary(int[] arr1, int[] arr2) {\r\n\r\n        List<Integer> result = new ArrayList();\r\n        int pointer_1 = arr1.length-1;\r\n        int pointer_2 = arr2.length-1;\r\n\r\n        int carry = 0;\r\n        int current = 0;\r\n        int sum = 0;\r\n\r\n        while(pointer_1 >= 0 || pointer_2 >= 0){\r\n\r\n            int a = (pointer_1 >=0)? arr1[pointer_1]: 0;\r\n            int b = (pointer_2 >=0)? arr2[pointer_2]: 0;\r\n\r\n            sum = a+b+carry;\r\n            if(sum == 3){\r\n                current = 1; carry = -1;\r\n            }\r\n            else if(sum == 2){\r\n                current = 0; carry = -1;\r\n            }\r\n            else if(sum == 1){\r\n                current = 1; carry = 0;\r\n            }\r\n            else if(sum == 0){\r\n                current = 0; carry = 0;\r\n            }\r\n            else if(sum == -1)\r\n            {\r\n                current = 1; carry = 1;\r\n            }\r\n\r\n            result.add(current);\r\n            pointer_1--;\r\n            pointer_2--;\r\n        }\r\n\r\n        if(carry != 0)\r\n            result.add(1);\r\n        if(carry == -1)\r\n            result.add(1);\r\n\r\n        // Removing leading zeros\r\n        int idx = result.size()-1;\r\n        while(idx > 0 && result.get(idx) == 0)\r\n            idx--;\r\n\r\n        // reversing the list and adding the result to an array\r\n        int len = idx+1;\r\n        int[] negaBinary = new int[len];\r\n        for(int i=0; i<len; i++){\r\n            negaBinary[i] = result.get(idx);\r\n            idx--;\r\n        }\r\n\r\n        return negaBinary;\r\n\r\n    }\r\n}"
  }
}
