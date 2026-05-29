export default {
  "id": 852,
  "name": "Peak Index in a Mountain Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/peak-index-in-a-mountain-array",
  "relativeDir": "P/Peak Index in a Mountain Array",
  "slug": "0852-peak-index-in-a-mountain-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 6,
    "java": 21,
    "python": 12,
    "javascript": 22
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int peakIndexInMountainArray(vector<int>& arr) {\r\n        return max_element(arr.begin(), arr.end()) - arr.begin();\r\n    }\r\n};",
    "python": "class Solution:\r\n    def peakIndexInMountainArray(self, arr: List[int]) -> int:\r\n        beg = 0\r\n        end = len(arr)-1\r\n        \r\n        while beg <= end:\r\n            mid = (beg+end)//2\r\n            if arr[mid] < arr[mid+1]:\r\n                beg = mid +1\r\n            elif arr[mid] > arr[mid+1]:\r\n                end = mid -1\r\n        return beg",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 59.7 MB (Top 83.58%)\r\nclass Solution {\r\npublic int peakIndexInMountainArray(int[] arr) {\r\n\r\n    int start = 0;\r\n    int end = arr.length - 1;\r\n\r\n    while( start < end){\r\n        int mid = start + (end - start)/2;\r\n        // if mid < mid next\r\n        if(arr[mid] < arr[mid + 1]){\r\n            start = mid + 1;\r\n        }\r\n        // otherwise it can either peak element or greater element\r\n        else{\r\n            end = mid;\r\n        }\r\n    }\r\n    return start; // or we can return end also, bcz both will be on same value at the time, that's why loop breaks here.\r\n    }\r\n}",
    "javascript": "// Runtime: 119 ms (Top 38.98%) | Memory: 51.6 MB (Top 23.92%)\r\nvar peakIndexInMountainArray = function(arr) {\r\n\r\n    //lets assume we have peak it divides array in two parts\r\n    // first part is increasing order , second part is decreasing\r\n    // when we find the middle we'll compare arr[middle] > arr[middle+1], it means\r\n    //we can only find max in first part of arr (increasing part) else second part.\r\n    //there will be point where start === end that is our peak\r\n    let start = 0;\r\n    let end = arr.length -1;\r\n    while(start < end){\r\n        let mid = parseInt(start + (end - start)/2)\r\n        if( arr[mid] > arr[mid + 1]){\r\n            end = mid;\r\n        }else {\r\n            start = mid +1;\r\n        }\r\n    }\r\n\r\n    return start;\r\n\r\n};"
  }
}
