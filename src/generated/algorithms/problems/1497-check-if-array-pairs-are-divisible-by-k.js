export default {
  "id": 1497,
  "name": "Check If Array Pairs Are Divisible by k",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k",
  "relativeDir": "C/Check If Array Pairs Are Divisible by k",
  "slug": "1497-check-if-array-pairs-are-divisible-by-k",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 18,
    "python": 31,
    "javascript": 32
  },
  "languages": {
    "cpp": "// Runtime: 377 ms (Top 24.57%) | Memory: 76 MB (Top 31.59%)\r\n\r\n//ask the interviewer\r\n//can we have negative values?\r\n\r\nclass Solution {\r\npublic:\r\n    bool canArrange(vector<int>& arr, int k)\r\n    {\r\n        unordered_map<int,int>memo;//remainder : occurence\r\n\r\n        //we are storing the frequency of curr%k\r\n        //i.e. the frequency of the remainder\r\n        for(auto curr : arr)\r\n        {\r\n            int remainder = ((curr%k)+k)%k;\r\n            memo[remainder]++;\r\n        }\r\n\r\n        for(int i =1; i<=k/2; i++)\r\n        {\r\n            if(memo[i] != memo[k-i])\r\n                return false;\r\n        }\r\n        if(memo[0]%2 != 0)\r\n            return false;\r\n        return true;\r\n    }\r\n};",
    "python": "# Runtime: 556 ms (Top 81.4%) | Memory: 30.00 MB (Top 97.8%)\r\n\r\nclass Solution:\r\n    def canArrange(self, arr: List[int], k: int) -> bool:\r\n        #The idea is to count the residues\r\n        \r\n        #If every residue has the counter residue\r\n        #such that x+y == k,then we found a pair\r\n        \r\n        count = [0]*k\r\n        for num in arr:\r\n            count[num%k] +=1\r\n        \r\n        #Now since we have 0,1,2,.....k-1 as residues\r\n        #If count[1] == count[k-1],pairs+=count[1]\r\n        #since we have odd number of complimenting residues,\r\n        #we should also care about residue=0 and residue=k//2\r\n        \r\n        i,j =1,k-1\r\n        pairs  = 0\r\n        while i<j :\r\n            if count[i]!=count[j]:\r\n                return False\r\n            pairs += count[i]\r\n            i+=1\r\n            j-=1\r\n        if pairs>0 and i==j:\r\n            pairs+=count[i]/2\r\n        pairs+= count[0]/2\r\n        n = len(arr)\r\n        return pairs == n//2",
    "java": "// Runtime: 5 ms (Top 78.2%) | Memory: 60.02 MB (Top 5.2%)\r\n\r\nclass Solution {\r\n    public boolean canArrange(int[] arr, int k) {\r\n        int[] frequency = new int[k];\r\n        for(int num : arr){\r\n            num %= k;\r\n            if(num < 0) num += k;\r\n            frequency[num]++;\r\n        }\r\n        if(frequency[0]%2 != 0) return false;\r\n        \r\n        for(int i = 1; i <= k/2; i++)\r\n            if(frequency[i] != frequency[k-i]) return false;\r\n\t\t\t\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 88 ms (Top 87.5%) | Memory: 59.10 MB (Top 40.63%)\r\n\r\n/**\r\n * @param {number[]} arr\r\n * @param {number} k\r\n * @return {boolean}\r\n */\r\nvar canArrange = function(arr, k) {\r\n    let result=new Array(k).fill(0);\r\n    let tmp;\r\n\r\n    //caculate the number of all mod\r\n    for(let i=0;i<arr.length;i++){\r\n        tmp=arr[i];\r\n\r\n        //caculate the mod\r\n        if(tmp>=k||tmp<=-k)tmp%=k;\r\n\r\n        //turn negative to Positive number, so it could use as array's index \r\n        if(tmp<0)tmp+=k;\r\n        \r\n        result[tmp]+=1;//counting\r\n    }\r\n\r\n    //Notice when i=0 and i==k-i\r\n    if(result[0]%2==1)return false;\r\n    for(let i=1;i<Math.ceil(result.length/2);i++){\r\n        if(i==k-1&&result[i]%2==1)return false;\r\n        if(result[i]!=result[k-i])return false;\r\n    }\r\n    return true;\r\n};"
  }
}
