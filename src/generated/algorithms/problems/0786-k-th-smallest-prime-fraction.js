export default {
  "id": 786,
  "name": "K-th Smallest Prime Fraction",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/k-th-smallest-prime-fraction",
  "relativeDir": "K/K-th Smallest Prime Fraction",
  "slug": "0786-k-th-smallest-prime-fraction",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "python": 18,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> kthSmallestPrimeFraction(vector<int>& arr, int k) {\r\n        priority_queue<pair<double, pair<int, int>>, vector<pair<double, pair<int, int>>>, greater<pair<double, pair<int, int>>>> myHeap;\r\n        for (int i=0; i<arr.size(); ++i) {\r\n            for (int j=i + 1; j < arr.size(); ++j) {\r\n                myHeap.push({(double)arr[i] / (double)arr[j], {arr[i], arr[j]}});\r\n\t\t\t\t// Add all pair of numbers in the heap\r\n            }\r\n        }\r\n        for (int i=1; i<k; ++i) {\r\n            myHeap.pop();\r\n        }\r\n        return {myHeap.top().second.first, myHeap.top().second.second};\r\n    }\r\n};\r\n// Time : O(n^2 + klogn)\r\n// Space : O(m^2)",
    "python": "class Solution {\r\npublic:\r\n    vector<int> kthSmallestPrimeFraction(vector<int>& arr, int k) {\r\n        priority_queue<pair<double, pair<int, int>>, vector<pair<double, pair<int, int>>>, greater<pair<double, pair<int, int>>>> myHeap;\r\n        for (int i=0; i<arr.size(); ++i) {\r\n            for (int j=i + 1; j < arr.size(); ++j) {\r\n                myHeap.push({(double)arr[i] / (double)arr[j], {arr[i], arr[j]}});\r\n\t\t\t\t// Add all pair of numbers in the heap\r\n            }\r\n        }\r\n        for (int i=1; i<k; ++i) {\r\n            myHeap.pop();\r\n        }\r\n        return {myHeap.top().second.first, myHeap.top().second.second};\r\n    }\r\n};\r\n// Time : O(n^2 + klogn)\r\n// Space : O(m^2)",
    "javascript": "class Solution {\r\npublic:\r\n    vector<int> kthSmallestPrimeFraction(vector<int>& arr, int k) {\r\n        priority_queue<pair<double, pair<int, int>>, vector<pair<double, pair<int, int>>>, greater<pair<double, pair<int, int>>>> myHeap;\r\n        for (int i=0; i<arr.size(); ++i) {\r\n            for (int j=i + 1; j < arr.size(); ++j) {\r\n                myHeap.push({(double)arr[i] / (double)arr[j], {arr[i], arr[j]}});\r\n\t\t\t\t// Add all pair of numbers in the heap\r\n            }\r\n        }\r\n        for (int i=1; i<k; ++i) {\r\n            myHeap.pop();\r\n        }\r\n        return {myHeap.top().second.first, myHeap.top().second.second};\r\n    }\r\n};\r\n// Time : O(n^2 + klogn)\r\n// Space : O(m^2)"
  }
}
