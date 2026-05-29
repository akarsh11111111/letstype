export default {
  "id": 1356,
  "name": "Sort Integers by The Number of 1 Bits",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits",
  "relativeDir": "S/Sort Integers by The Number of 1 Bits",
  "slug": "1356-sort-integers-by-the-number-of-1-bits",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 38,
    "python": 16,
    "javascript": 16
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> sortByBits(vector<int>& arr) {\r\n        int n = size(arr);\r\n        priority_queue<pair<int, int>> pq;\r\n        \r\n        for(auto &x : arr) {\r\n            int count = 0;\r\n            int a = x;\r\n            while(a) {\r\n                count += a & 1;\r\n                a >>= 1;\r\n            }\r\n            pq.push({count, x});\r\n        }\r\n        n = n - 1;\r\n        while(!pq.empty()) {\r\n            arr[n--] = pq.top().second;\r\n            pq.pop();\r\n        }\r\n        \r\n        return arr;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def sortByBits(self, arr: List[int]) -> List[int]:\r\n        binary = []\r\n        final = []\r\n        arr.sort()\r\n        for i in arr:\r\n            binary.append(bin(i).count(\"1\"))\r\n        for i,j in zip(arr,binary):\r\n            final.append((i,j))\r\n        z = sorted(final, key=lambda x:x[1])\r\n        \r\n        ls = []\r\n        for k in z:\r\n            ls.append(k[0])\r\n        \r\n        return ls",
    "java": "// Runtime: 9 ms (Top 70.77%) | Memory: 42.3 MB (Top 96.77%)\r\nclass Solution {\r\n    public int[] sortByBits(int[] arr) {\r\n\r\n        Integer[] arrInt = new Integer[arr.length];\r\n\r\n        for(int i=0;i<arr.length;i++) {\r\n            arrInt[i]=arr[i];\r\n        }\r\n\r\n        Arrays.sort(arrInt, new Comparator<Integer>() {\r\n            @Override\r\n            public int compare(Integer a, Integer b) {\r\n                int aBits=numOfBits(a);\r\n                int bBits=numOfBits(b);\r\n                if(aBits==bBits) {\r\n                    return a-b;\r\n                }\r\n                return aBits-bBits;\r\n            }\r\n        });\r\n\r\n        for(int i=0;i<arr.length;i++) {\r\n            arr[i]=arrInt[i];\r\n        }\r\n        return arr;\r\n    }\r\n\r\n    public int numOfBits(int a) {\r\n        int bits=0;\r\n        while(a!=0) {\r\n            bits+=a&1;\r\n            a=a>>>1;\r\n        }\r\n\r\n        return bits;\r\n    }\r\n}",
    "javascript": "var sortByBits = function(arr) {\r\n    const map = {};\r\n    \r\n    for (let n of arr) {\r\n        let counter = 0, item = n;\r\n        \r\n        while (item > 0) {\r\n\t\t\tcounter += (item & 1);    //increment counter if the lowest (i.e. the rightest) bit is 1\r\n\t\t\titem = (item >> 1);        //bitwise right shift (here is equivalent to division by 2)\r\n        }\r\n        \r\n        map[n] = counter;\r\n    }\r\n\r\n    return arr.sort((a, b) => map[a] - map[b] || a - b) //sort by number of 1 bits; if equal, sort by value\r\n};"
  }
}
