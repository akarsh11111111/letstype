export default {
  "id": 1338,
  "name": "Reduce Array Size to The Half",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reduce-array-size-to-the-half",
  "relativeDir": "R/Reduce Array Size to The Half",
  "slug": "1338-reduce-array-size-to-the-half",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 33,
    "python": 15,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 206 ms (Top 94.14%) | Memory: 91.1 MB (Top 6.28%)\r\n\r\nclass Solution {\r\npublic:\r\n    int minSetSize(vector<int>& arr) {\r\n        const int n=1e5+10 ;\r\n        int a[n]={0} ;\r\n        for(int i=0 ;i<arr.size() ;i++)\r\n        {\r\n            a[arr[i]]++ ;\r\n        }\r\n        priority_queue<int> maxh ;\r\n        for(int i=0; i<n ;i++)\r\n        {\r\n            maxh.push(a[i]) ;\r\n        }\r\n        int sum=0 ;\r\n        int count=0 ;\r\n\r\n        while(sum<(arr.size()/2))\r\n        {\r\n            sum=sum+maxh.top() ;\r\n            maxh.pop() ;\r\n            count++ ;\r\n        }\r\n        return count ;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minSetSize(self, arr: List[int]) -> int:\r\n        n = len(arr)\r\n        half = n // 2\r\n        \r\n        c = Counter(arr)\r\n        s = 0\r\n        ans = 0\r\n        \r\n        for num, occurances in c.most_common():\r\n            s += occurances\r\n            ans += 1\r\n            if s >= half:\r\n                return ans\r\n        return ans",
    "java": "class Solution {\r\n    public int minSetSize(int[] arr) {\r\n        int size=arr.length;\r\n        int deletedSize=0;\r\n        int countIteration=0;\r\n        Map<Integer,Integer> hashMap=new HashMap<>();\r\n        Queue<Map.Entry<Integer,Integer>> queue=new PriorityQueue<>((a,b)->b.getValue()-a.getValue());\r\n        \r\n        for(int i=0;i<size;i++)\r\n        {\r\n            if(hashMap.get(arr[i])!=null)\r\n               hashMap.put(arr[i],hashMap.get(arr[i])+1);\r\n            else \r\n                hashMap.put(arr[i],1);\r\n        }\r\n        \r\n        for(Map.Entry<Integer,Integer> entry:hashMap.entrySet())\r\n        {\r\n            queue.add(entry);\r\n        }\r\n        \r\n        while(!queue.isEmpty())\r\n        {\r\n            int totalOccurence=queue.poll().getValue();\r\n            deletedSize+=totalOccurence; \r\n            countIteration++;\r\n            if(deletedSize>=size/2)\r\n                return countIteration;\r\n           \r\n        }\r\n        return countIteration;\r\n    }\r\n}",
    "javascript": "// Runtime: 105 ms (Top 71.97%) | Memory: 57.90 MB (Top 93.94%)\r\n\r\nvar minSetSize = function(arr) {\r\n  let half = arr.length / 2\r\n  if (half === 1) return 1\r\n  const counts = {}\r\n  for (let n of arr) {\r\n    if (counts[n] === undefined) counts[n] = 1\r\n    else if (++counts[n] >= half) return 1\r\n  }\r\n  const aggr = Object.values(counts).sort((a, b) => a - b)\r\n  let i = aggr.length;\r\n  while (half > 0) half -= aggr[--i]\r\n  return aggr.length - i\r\n}"
  }
}
