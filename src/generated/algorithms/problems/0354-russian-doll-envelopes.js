export default {
  "id": 354,
  "name": "Russian Doll Envelopes",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/russian-doll-envelopes",
  "relativeDir": "R/Russian Doll Envelopes",
  "slug": "0354-russian-doll-envelopes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 51,
    "python": 14,
    "javascript": 34
  },
  "languages": {
    "cpp": "// Runtime: 476 ms (Top 78.16%) | Memory: 76.3 MB (Top 100.00%)\r\nclass Solution {\r\npublic:\r\n    int maxEnvelopes(vector<vector<int>>& envelopes) {\r\n        int n = envelopes.size();\r\n        sort(envelopes.begin(), envelopes.end(), [](auto &l, auto &r)\r\n             {\r\n                return l[0] == r[0] ? l[1] > r[1] : l[0] < r[0];\r\n             });\r\n        int len = 0;\r\n        for(auto& cur: envelopes)\r\n        {\r\n            if(len==0 || envelopes[len-1][1] < cur[1])\r\n                envelopes[len++] = cur;\r\n            else\r\n                *lower_bound(envelopes.begin(), envelopes.begin()+ len, cur, [](auto &l, auto &r)\r\n                             {\r\n                                 return l[1] < r[1];\r\n                             }) = cur;\r\n        }\r\n        return len;\r\n    }\r\n};",
    "python": "# Runtime: 1587 ms (Top 72.81%) | Memory: 61.7 MB (Top 65.15%)\r\n\r\nfrom bisect import bisect_left\r\nclass Solution:\r\n    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:\r\n        envelopes = sorted(envelopes, key= lambda x:(x[0],-x[1]))\r\n        rst = []\r\n        for _,h in envelopes:\r\n            i = bisect_left(rst,h)\r\n            if i == len(rst):\r\n                rst.append(h)\r\n            else:\r\n                rst[i] = h\r\n        return len(rst)",
    "java": "class Solution {\r\n    public int maxEnvelopes(int[][] envelopes) {\r\n\t\t//sort the envelopes considering only width\r\n        Arrays.sort(envelopes, new sortEnvelopes());\r\n\t\t\r\n\t\t//Now this is a Longest Increasing Subsequence problem on heights\r\n\t\t//tempList to store the temporary elements, size of this list will be the length of LIS \r\n        ArrayList<Integer> tempList = new ArrayList<>();\r\n        tempList.add(envelopes[0][1]);\r\n\t\t\r\n        for(int i=1; i<envelopes.length; i++){\r\n            if(envelopes[i][1]>tempList.get(tempList.size()-1)){\r\n                tempList.add(envelopes[i][1]);\r\n            } else{\r\n\t\t\t//if the element is smaller than the largest(last because it is sorted) element of tempList, replace the largest smaller element of tempList with it..\r\n\t\t\t//ex->(assume if envelopes[i][1] is 4), then >>[1,7,8] will become [1,4,8]<<\r\n                int index = lowerBound(tempList, envelopes[i][1]);\r\n                tempList.set(index, envelopes[i][1]);\r\n            }\r\n        }\r\n        return tempList.size();\r\n    }\r\n    \r\n\t//finding the index of greatest smaller element \r\n    public int lowerBound(ArrayList<Integer> list, int search){\r\n        int start = 0;\r\n        int end = list.size()-1;\r\n        while(start<end){\r\n            int mid = start + (end-start)/2;\r\n            if(list.get(mid) < search){\r\n                start = mid+1;\r\n            } else{\r\n                end = mid;\r\n            }\r\n        }\r\n        return start;\r\n    }\r\n}\r\n\r\nclass sortEnvelopes implements Comparator<int[]> {\r\n    public int compare(int[] a, int[] b){\r\n        if(a[0] == b[0]){\r\n\t\t//to ignore the duplicates, we are sorting such that, for same width-> element with \r\n\t\t//largest height would be considered first, in this way all the other smaller heights would\r\n\t\t//be ignored\r\n            return b[1] - a[1];\r\n        } else{\r\n            return a[0] - b[0];\r\n        }\r\n    }\r\n}",
    "javascript": "const binarySearch = (arr, target) => {\r\n    let left = 0;\r\n    let right = arr.length - 1;\r\n    \r\n    while (left <= right) {\r\n        const mid = Math.floor((left + right) / 2);\r\n        if (arr[mid] === target) {\r\n            return mid;\r\n        }\r\n        if (arr[mid] < target) {\r\n            left = mid + 1;\r\n        } else {\r\n            right = mid - 1;\r\n        }\r\n    }\r\n    \r\n    return left;\r\n}\r\n\r\nvar maxEnvelopes = function(envelopes) {\r\n    envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);\r\n    const sub = [envelopes[0][1]];\r\n    \r\n    for (let envelope of envelopes) {\r\n        if (envelope[1] > sub[sub.length - 1]) {\r\n            sub.push(envelope[1]);\r\n        } else {\r\n            const replaceIndex = binarySearch(sub, envelope[1]);\r\n            sub[replaceIndex] = envelope[1];\r\n        }\r\n    }\r\n    \r\n    return sub.length;\r\n};"
  }
}
