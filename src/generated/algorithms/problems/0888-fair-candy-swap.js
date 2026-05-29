export default {
  "id": 888,
  "name": "Fair Candy Swap",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/fair-candy-swap",
  "relativeDir": "F/Fair Candy Swap",
  "slug": "0888-fair-candy-swap",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 55,
    "python": 55,
    "javascript": 55
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\nvector<int> fairCandySwap(vector<int>& aliceSizes, vector<int>& bobSizes) {\r\n\r\n    sort(bobSizes.begin(),bobSizes.end());\r\n    sort(aliceSizes.begin(),aliceSizes.end());\r\n\r\n    int sum1=0;\r\n    int sum2=0;\r\n    vector <int> ans;\r\n    for(int i =0 ; i <aliceSizes.size(); i++)\r\n    {\r\n        sum1+=aliceSizes[i];\r\n    }\r\n    for(int i =0 ; i <bobSizes.size(); i++)\r\n    {\r\n        sum2+=bobSizes[i];\r\n    }\r\n    \r\n    int dif = (sum1-sum2)/2;\r\n    \r\n    \r\n    for(int i = 0 ; i <aliceSizes.size(); i++)\r\n    {\r\n        \r\n        int st=0;\r\n        int end = bobSizes.size()-1;\r\n        \r\n        while(st<=end)\r\n        {\r\n            int mid = (st+end)/2;\r\n            \r\n            if(bobSizes[mid]==aliceSizes[i]-dif)\r\n            {\r\n             ans.push_back(aliceSizes[i]);\r\n             ans.push_back(bobSizes[mid]);\r\n             return ans;\r\n            }\r\n            \r\n            else if(bobSizes[mid]<aliceSizes[i]-dif)\r\n            {\r\n                st=mid+1;\r\n            }\r\n            else if(bobSizes[mid]>aliceSizes[i]-dif)\r\n            {\r\n                end=mid-1;\r\n            }\r\n              \r\n        }    \r\n    }\r\n    \r\n    return ans;\r\n    \r\n}\r\n};",
    "python": "class Solution {\r\npublic:\r\nvector<int> fairCandySwap(vector<int>& aliceSizes, vector<int>& bobSizes) {\r\n\r\n    sort(bobSizes.begin(),bobSizes.end());\r\n    sort(aliceSizes.begin(),aliceSizes.end());\r\n\r\n    int sum1=0;\r\n    int sum2=0;\r\n    vector <int> ans;\r\n    for(int i =0 ; i <aliceSizes.size(); i++)\r\n    {\r\n        sum1+=aliceSizes[i];\r\n    }\r\n    for(int i =0 ; i <bobSizes.size(); i++)\r\n    {\r\n        sum2+=bobSizes[i];\r\n    }\r\n    \r\n    int dif = (sum1-sum2)/2;\r\n    \r\n    \r\n    for(int i = 0 ; i <aliceSizes.size(); i++)\r\n    {\r\n        \r\n        int st=0;\r\n        int end = bobSizes.size()-1;\r\n        \r\n        while(st<=end)\r\n        {\r\n            int mid = (st+end)/2;\r\n            \r\n            if(bobSizes[mid]==aliceSizes[i]-dif)\r\n            {\r\n             ans.push_back(aliceSizes[i]);\r\n             ans.push_back(bobSizes[mid]);\r\n             return ans;\r\n            }\r\n            \r\n            else if(bobSizes[mid]<aliceSizes[i]-dif)\r\n            {\r\n                st=mid+1;\r\n            }\r\n            else if(bobSizes[mid]>aliceSizes[i]-dif)\r\n            {\r\n                end=mid-1;\r\n            }\r\n              \r\n        }    \r\n    }\r\n    \r\n    return ans;\r\n    \r\n}\r\n};",
    "javascript": "class Solution {\r\npublic:\r\nvector<int> fairCandySwap(vector<int>& aliceSizes, vector<int>& bobSizes) {\r\n\r\n    sort(bobSizes.begin(),bobSizes.end());\r\n    sort(aliceSizes.begin(),aliceSizes.end());\r\n\r\n    int sum1=0;\r\n    int sum2=0;\r\n    vector <int> ans;\r\n    for(int i =0 ; i <aliceSizes.size(); i++)\r\n    {\r\n        sum1+=aliceSizes[i];\r\n    }\r\n    for(int i =0 ; i <bobSizes.size(); i++)\r\n    {\r\n        sum2+=bobSizes[i];\r\n    }\r\n    \r\n    int dif = (sum1-sum2)/2;\r\n    \r\n    \r\n    for(int i = 0 ; i <aliceSizes.size(); i++)\r\n    {\r\n        \r\n        int st=0;\r\n        int end = bobSizes.size()-1;\r\n        \r\n        while(st<=end)\r\n        {\r\n            int mid = (st+end)/2;\r\n            \r\n            if(bobSizes[mid]==aliceSizes[i]-dif)\r\n            {\r\n             ans.push_back(aliceSizes[i]);\r\n             ans.push_back(bobSizes[mid]);\r\n             return ans;\r\n            }\r\n            \r\n            else if(bobSizes[mid]<aliceSizes[i]-dif)\r\n            {\r\n                st=mid+1;\r\n            }\r\n            else if(bobSizes[mid]>aliceSizes[i]-dif)\r\n            {\r\n                end=mid-1;\r\n            }\r\n              \r\n        }    \r\n    }\r\n    \r\n    return ans;\r\n    \r\n}\r\n};"
  }
}
