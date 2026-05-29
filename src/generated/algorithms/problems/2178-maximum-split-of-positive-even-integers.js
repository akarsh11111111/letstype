export default {
  "id": 2178,
  "name": "Maximum Split of Positive Even Integers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-split-of-positive-even-integers",
  "relativeDir": "M/Maximum Split of Positive Even Integers",
  "slug": "2178-maximum-split-of-positive-even-integers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 62,
    "java": 24,
    "python": 18,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 308 ms (Top 27.53%) | Memory: 40.6 MB (Top 11.24%)\r\nclass Solution {\r\npublic:\r\n    using ll = long long;\r\n\r\n    ll bs(ll low , ll high, ll fs){\r\n\r\n        ll ans = 1;\r\n        while(low<=high){\r\n            ll mid = low + (high-low)/2;\r\n            if(mid*(mid+1)>fs){\r\n                high = mid-1; // If sum till index equal to 'mid' > fs then make high = mid-1\r\n            }\r\n            else if(mid*(mid+1)==fs){\r\n                return mid; // If sum till index equal to 'mid == fs, return 'mid'\r\n            }\r\n            else{\r\n                ans = mid; // If sum till index equal to 'mid' < fs, update answer\r\n                low = mid+1; // check for better answer\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n\r\n    vector<long long> maximumEvenSplit(long long finalSum) {\r\n        // ****some base cases / corner cases****\r\n        if(finalSum&1) return {};\r\n        if(finalSum==4) return {4};\r\n        if(finalSum==8) return {2,6};\r\n\r\n        vector<ll> ans;\r\n\r\n        // assume that we are giving indices to even numbers\r\n        // EVEN NUMBERS -> 2 , 4 , 6 , 8 , 10 , 12 , 14 , 16 ..............\r\n        // THEIR INDICES-> 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ..............\r\n\r\n        // 'idx' is the index of that EVEN number uptil which the total sum of all even numbers <= finalSum\r\n        ll idx = bs(1,finalSum/2,finalSum);\r\n\r\n        //Consequently, 'end' is that EVEN number uptil which the total sum of all even numbers <= finalSum\r\n        ll start = 2, end = idx*2;\r\n\r\n        //Now, we add all the even numbers from index 1 to index 'idx-1'\r\n        // 2 + 4 + 6 + 8 ........................... + (end-2) + end\r\n        // 1 2 3 4 ........................... idx-1 idx\r\n        for(int i = start; i<= (idx-1)*2; i+=2){\r\n            ans.push_back(i);\r\n        }\r\n\r\n        // We do not add the last even number yet, so that we can modify it and add it later to make the (totalSumSoFar) == finalSum\r\n        // 'totalSumSoFar' can be easily calculated by using the formula ( totalSumSoFar = idx*(idx+1) )\r\n\r\n        // increasing the last even number 'end' by the difference of (finalSum and totalSumSoFar)\r\n        if(idx*(idx+1)<finalSum){\r\n            end = end + abs(finalSum - idx*(idx+1));\r\n        }\r\n\r\n        // adding the last even number after increasing it with the required factor\r\n        ans.push_back(end);\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 1817 ms (Top 5.05%) | Memory: 26.8 MB (Top 41.50%)\r\nclass Solution:\r\n    def maximumEvenSplit(self, finalSum: int) -> List[int]:\r\n        l=[]\r\n        if finalSum%2!=0:\r\n            return l\r\n        else:\r\n            s=0\r\n            i=2 # even pointer 2, 4, 6, 8, 10, 12...........\r\n            while(s<finalSum):\r\n                s+=i #sum\r\n                l.append(i) # append the i in list\r\n                i+=2\r\n            if s==finalSum: #if sum s is equal to finalSum then no modidfication required\r\n                return l\r\n            else:\r\n                l.pop(l.index(s-finalSum)) #Deleting the element which makes s greater than finalSum\r\n            return l",
    "java": "class Solution {\r\n    public List<Long> maximumEvenSplit(long finalSum) {\r\n        List<Long> res = new ArrayList<Long>();\r\n        //odd sum cannot be divided into even numbers\r\n        if(finalSum % 2 != 0) {\r\n            return res;\r\n        }\r\n        //Greedy approach, try to build the total sum using minimum unique even nos\r\n        long currNum = 2;\r\n        long remainingSum = finalSum;\r\n        //as long as we can add subtract this number from remaining sum\r\n        while(currNum <= remainingSum) {\r\n            res.add(currNum);\r\n            remainingSum -= currNum;//reducing remaining sum\r\n            currNum += 2;//next even number\r\n        }\r\n        //now, remaining sum cannot be fulfilled by any larger even number\r\n        //so extract the largest even number we added to the last index of res, and make it even larger by adding this current remaining sum\r\n        //add remaining sum to the last element\r\n        long last = res.remove(res.size()-1);\r\n        res.add(last+remainingSum);\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 265 ms (Top 47.0%) | Memory: 88.05 MB (Top 5.8%)\r\n\r\n var maximumEvenSplit = function(finalSum) {\r\n\r\n    if(finalSum % 2) return [];\r\n\r\n    const set = new Set();\r\n\r\n    let n = 2, sum = 0;\r\n\r\n    while(sum < finalSum) {\r\n        sum += n;\r\n        set.add(n);\r\n        n += 2;\r\n    }\r\n\r\n    set.delete(sum - finalSum);\r\n\r\n    return [...set];\r\n};"
  }
}
