export default {
  "id": 954,
  "name": "Array of Doubled Pairs",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/array-of-doubled-pairs",
  "relativeDir": "A/Array of Doubled Pairs",
  "slug": "0954-array-of-doubled-pairs",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 55,
    "java": 35,
    "python": 27,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 221 ms (Top 44.66%) | Memory: 64.2 MB (Top 9.81%)\r\nclass Solution {\r\npublic:\r\n    bool func(vector<int> pos){\r\n        map<int,int> mp;\r\n        for(int i=0;i<pos.size();i++){\r\n            mp[pos[i]]++;\r\n        }\r\n\r\n        for(auto it:mp){\r\n            if(mp.find(2*it.first)==mp.end()){\r\n                return false;\r\n            }\r\n            if(mp[it.first]>mp[2*it.first]){\r\n                return false;\r\n            }\r\n            mp[2*it.first]-=mp[it.first];\r\n            if(mp[2*it.first]==0)\r\n                mp.erase(2*it.first);\r\n        }\r\n\r\n        return true;\r\n    }\r\n\r\n    bool canReorderDoubled(vector<int>& arr) {\r\n        int n=arr.size();\r\n        vector<int> pos,neg;\r\n        int zeroes=0;\r\n        for(int i:arr){\r\n            if(i>0){\r\n                pos.push_back(i);\r\n            }else if(i<0){\r\n                neg.push_back(i);\r\n            }else{\r\n                zeroes++;\r\n            }\r\n        }\r\n\r\n        if(zeroes%2!=0){\r\n            return false;\r\n        }\r\n\r\n        if(neg.size()%2!=0 or pos.size()%2!=0){\r\n            return false;\r\n        }\r\n\r\n        for(int i=0;i<neg.size();i++){\r\n            neg[i]=-1*neg[i];\r\n        }\r\n\r\n        sort(pos.begin(),pos.end());\r\n        sort(neg.begin(),neg.end());\r\n        return func(pos) and func(neg);\r\n    }\r\n};",
    "python": "# Runtime: 1769 ms (Top 5.17%) | Memory: 16.6 MB (Top 56.95%)\r\nclass Solution:\r\n    def canReorderDoubled(self, arr: List[int]) -> bool:\r\n        n = len(arr)\r\n        arr.sort()\r\n        times = n//2\r\n        count = {}\r\n        for i in arr :\r\n            if i in count:count[i] += 1\r\n            else: count[i] = 1\r\n        for i in count:\r\n            if i == 0:\r\n                tmp = count[0]//2\r\n                times -= tmp\r\n                if times <=0 : return True\r\n            else:\r\n                if i*2 in count:\r\n                    ct1 = count[i]\r\n                    ct2 = count[i*2]\r\n                    while ct1 > 0 and ct2 > 0 and times > 0:\r\n                        ct1 -= 1\r\n                        ct2 -= 1\r\n                        times -= 1\r\n                    count[i] = ct1\r\n                    count[i*2] = ct2\r\n                    if times == 0:return True\r\n        return False",
    "java": "class Solution {\r\n    public boolean canReorderDoubled(int[] arr) {\r\n        Map<Integer,Integer> map=new HashMap<>();\r\n        int zeroCount=0,out=0,len=arr.length;\r\n        Arrays.sort(arr);\r\n        for(int ar:arr){\r\n           if(ar%2==1)\r\n               map.put(ar,map.getOrDefault(ar,0)+1);\r\n           else\r\n           {\r\n               if(ar>0)\r\n               {\r\n                   int val=map.getOrDefault(ar/2,0);\r\n                   if(val>0){\r\n                       out++;\r\n                       map.put(ar/2,val-1);\r\n                   }\r\n                   else map.put(ar,map.getOrDefault(ar,0)+1);\r\n               }\r\n               else if(ar<0)\r\n               {\r\n                  int val=map.getOrDefault(ar2,0);\r\n                   if(val>0){\r\n                       out++;\r\n                       map.put(ar2,val-1);\r\n                   } \r\n                   else map.put(ar,map.getOrDefault(ar,0)+1);\r\n               }\r\n               else zeroCount++;   \r\n           }\r\n        }\r\n        zeroCount=zeroCount/2;\r\n        return out+zeroCount==len/2;\r\n    }\r\n}",
    "javascript": "// Runtime: 85 ms (Top 92.31%) | Memory: 47.10 MB (Top 100.0%)\r\n\r\nvar canReorderDoubled = function(arr) {\r\n    const hashMap = arr.reduce((map, num) => {\r\n        const count = map.get(num) ?? 0;\r\n        return map.set(num, count + 1);\r\n    }, new Map());\r\n\r\n    const nums = [...hashMap.keys()].sort((a, b) => {\r\n        return a < 0 && b < 0 ? b - a : a - b;\r\n    });\r\n\r\n    for (const num of nums) {\r\n        const count = hashMap.get(num);\r\n        const pairsCount = hashMap.get(num * 2);\r\n        if (count > pairsCount) return false;\r\n        if (count > 0 && pairsCount === undefined) return false;\r\n    \r\n        hashMap.set(num * 2, pairsCount - count);\r\n    }\r\n    return true;\r\n};"
  }
}
