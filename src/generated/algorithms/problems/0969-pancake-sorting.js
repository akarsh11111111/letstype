export default {
  "id": 969,
  "name": "Pancake Sorting",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/pancake-sorting",
  "relativeDir": "P/Pancake Sorting",
  "slug": "0969-pancake-sorting",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 41,
    "python": 32,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\nprivate:\r\n    void reverse(vector<int>&arr,int start,int end){\r\n        while(start<end){\r\n            swap(arr[start++],arr[end--]);\r\n        }\r\n    }\r\npublic:\r\n    vector<int> pancakeSort(vector<int>& arr) {\r\n        vector<int>copy=arr;\r\n        sort(copy.begin(),copy.end());\r\n        int end=copy.size()-1;\r\n        vector<int>ans;\r\n        while(end>0){\r\n            if(arr[end]!=copy[end]){\r\n                int pos=end-1;\r\n                while(arr[pos]!=copy[end]){\r\n                    pos--;\r\n                }\r\n                reverse(arr,0,pos);\r\n                if(pos!=0){\r\n                    ans.push_back(pos+1);\r\n                }\r\n                reverse(arr,0,end);\r\n                ans.push_back(end+1);\r\n            }\r\n            end--;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def pancakeSort(self, arr: List[int]) -> List[int]:\r\n        #helper function to flip the numbers in the array\r\n\t\tdef flip(i, j):\r\n            while i < j:\r\n                arr[i], arr[j] = arr[j], arr[i]\r\n                j -= 1\r\n                i += 1\r\n        \r\n        #sort from 0 to i\r\n        def sort(i):\r\n\t\t\t#base case where all the numbers are sorted, thus no more recursive calls\r\n            if i < 0:\r\n                return []\r\n            ret = []\r\n\t\t\t#find the biggest number, which always will be the len(arr), or i + 1\r\n            idx = arr.index(i + 1)\r\n\t\t\t# if the biggest number is in the right place, as in idx == i, then we don't change anything, but just move to sort the next biggest number\r\n            if idx == i:\r\n                return sort(i - 1)\r\n            \r\n\t\t\t#we flip it with the first element (even if the biggest number is the first element, it will flip itself (k = 1) and does not affect the result\r\n            ret.append(idx + 1)\r\n            flip(0, idx)\r\n\t\t\t#we know the biggest number is the first element of the array. Flip the whole array in the boundary so that the biggest number would be in the last of the subarray (notice not len(arr) - 1 because that will flip the already-sorted elements as well)\r\n            ret.append(i + 1)\r\n            flip(0, i)\r\n\t\t\t#sort the next biggest number by setting a new boundary i - 1\r\n            return ret + sort(i - 1)\r\n            \r\n            \r\n        return sort(len(arr) - 1)",
    "java": "// Runtime: 2 ms (Top 77.93%) | Memory: 42.7 MB (Top 83.40%)\r\n// BruteForce Approach!\r\n// Author - Nikhil Sharma\r\n// LinkedIn - https://www.linkedin.com/in/nikhil-sharma-41a287226/\r\n// Twitter - https://twitter.com/Sharma_Nikh12\r\n\r\nclass Solution {\r\n    public List<Integer> pancakeSort(int[] arr) {\r\n        List<Integer> list = new ArrayList<>();\r\n        int n = arr.length;\r\n        while(n!=1) {\r\n            int maxIndex = findIndex(arr,n);\r\n            reverse(arr, maxIndex);\r\n            reverse(arr, n-1);\r\n            list.add(maxIndex+1);\r\n            list.add(n);\r\n            n--;\r\n        }\r\n        return list;\r\n    }\r\n\r\n    static int findIndex(int[] arr, int value) {\r\n        for(int i=0; i<arr.length; i++) {\r\n            if(arr[i] == value){\r\n                return i;\r\n            }\r\n        }\r\n        return 0;\r\n    }\r\n\r\n    static void reverse(int[] arr, int maxIndex) {\r\n        int l = 0;\r\n        while(l<maxIndex) {\r\n            int temp = arr[l];\r\n            arr[l] = arr[maxIndex];\r\n            arr[maxIndex] = temp;\r\n            l++;\r\n            maxIndex--;\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 134 ms (Top 20.79%) | Memory: 44.1 MB (Top 74.26%)\r\nvar pancakeSort = function(arr) {\r\nlet res = [];\r\n\r\nfor(let i=arr.length; i>0; i--){//search the array for all values from 1 to n\r\n    let idx = arr.indexOf(i);\r\n    if(idx!=i-1){// if value is not present at its desired index\r\n        let pancake = arr.slice(0,idx+1).reverse();//flip the array with k=index of value i to put it in front of the array\r\n        res.push(idx+1);\r\n        arr = arr.slice(idx+1);\r\n        arr = pancake.concat(arr);//value i is now at index 0\r\n        pancake = arr.slice(0,i).reverse();//flip the array with k = i-1 to put the value at its place\r\n        res.push(i);\r\n        arr = arr.slice(i);\r\n        arr = pancake.concat(arr);//now the array is sorted from i to n\r\n    }\r\n}\r\nreturn res;\r\n};"
  }
}
