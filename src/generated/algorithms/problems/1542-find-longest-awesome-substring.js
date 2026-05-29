export default {
  "id": 1542,
  "name": "Find Longest Awesome Substring",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-longest-awesome-substring",
  "relativeDir": "F/Find Longest Awesome Substring",
  "slug": "1542-find-longest-awesome-substring",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 30,
    "python": 27,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 403 ms (Top 40.21%) | Memory: 10.8 MB (Top 68.53%)\r\nclass Solution {\r\npublic:\r\n    int longestAwesome(string s) {\r\n        unordered_map<int,int> map;\r\n        int mask = 0, maxL = 0;\r\n        map[mask] = -1;\r\n\r\n        for(int i=0; i<s.size(); ++i){\r\n            int ch = s[i]-'0';\r\n            mask^= (1<<ch);\r\n\r\n            if(map.find(mask) != map.end()){\r\n                maxL = max(maxL, i-map[mask]);\r\n            }\r\n\r\n            for(int x=0; x<=9; ++x){\r\n                int newMask = mask^(1<<x);\r\n                if(map.find(newMask) != map.end()){\r\n                    maxL = max(maxL, i-map[newMask]);\r\n                }\r\n            }\r\n\r\n            if(map.find(mask) == map.end()){\r\n                map[mask] = i;\r\n            }\r\n        }\r\n        return maxL;\r\n    }\r\n};",
    "python": "// Runtime: 658 ms (Top 96.88%) | Memory: 18.30 MB (Top 28.13%)\r\n\r\nclass Solution:\r\n    def longestAwesome(self, s: str) -> int:\r\n        # li = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]\r\n        li = [2**i for i in range(10)]\r\n        # checker = {0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512}\r\n        checker = set(li)\r\n        checker.add(0)\r\n        # di: k = prefix xor, v = the first idx I got a new prefix_xor_value.\r\n        di = collections.OrderedDict({0: -1})\r\n        maxLength = prefix_xor = 0\r\n        \r\n        for i in range(len(s)):\r\n            prefix_xor ^= li[int(s[i])]\r\n            # Found a new prefix_xor_value\r\n            if prefix_xor not in di:\r\n                di[prefix_xor] = i\r\n            \r\n            # XOR operation with previous prefix_xor_value\r\n            for key in di.keys():\r\n                if i - di[key] <= maxLength:\r\n                    break\r\n\t\t\t\t# s[di[key] : i] is Awesome Substring\r\n                if key ^ prefix_xor in checker:\r\n                    maxLength = i - di[key]\r\n        return maxLength",
    "java": "class Solution {\r\n    public int longestAwesome(String s) {\r\n        Map<Integer,Integer>map=new HashMap<>();\r\n        map.put(0,-1);\r\n        \r\n        int state=0;\r\n        int ans=0;\r\n        for(int i=0;i<s.length();i++){\r\n            int bit=(1<<(s.charAt(i)-'0'));\r\n            state ^=bit; //if odd freq then it becomes even or if even becomes odd\r\n            \r\n            if(map.containsKey(state))\r\n               ans=Math.max(ans,i-map.get(state));\r\n            \r\n                for(int odd=0;odd<=9;odd++){ //become odds one by one\r\n                    int mask=(1<<odd);\r\n                    \r\n                    Integer j=map.get(state^mask);\r\n                    \r\n                    if(j!=null)\r\n                        ans=Math.max(ans,i-j);\r\n                }\r\n            \r\n            if(!map.containsKey(state))\r\n                map.put(state,i);\r\n        }\r\n        return ans;\r\n        \r\n    }\r\n}",
    "javascript": "var longestAwesome = function(s) {\r\n    // freq starts with 0:0 because 9 0s is also a state and if I come across a \r\n    // 0 down the road, that means that the whole array up to index i is of the required type\r\n    let firstIndex={0:0}, result=-1, curr=0\r\n    for (let i = 0; i < s.length; i++) {\r\n       curr^= 1<<s[i]\r\n       // Check if you have seen curr^0=curr before, \r\n\t   // because that would make the inbetween elements' xor = 000000000\r\n       if(firstIndex[curr]!==undefined)\r\n            result=Math.max(result,i-firstIndex[curr]+1)\r\n       // Check all the other xors, because that would make \r\n\t   // the inbetween elements of the required type (100000000,010000000,......,000000001)\r\n       for (let j = 0; j <10; j++) {\r\n            let ele=1<<j\r\n            if(firstIndex[curr^ele]!==undefined)\r\n                //i-firstIndex[curr^ele] because on freq I saved\r\n\t\t\t\t//the smallest index where I last met curr^ele\r\n                result=Math.max(result,i-firstIndex[curr^ele]+1)\r\n       }\r\n       if(firstIndex[curr]===undefined)\r\n\t\t   firstIndex[curr]=i+1// +1 cos 0th place is for my 0 state\r\n    }\r\n \r\n    return result\r\n};"
  }
}
