export default {
  "id": 451,
  "name": "Sort Characters By Frequency",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sort-characters-by-frequency",
  "relativeDir": "S/Sort Characters By Frequency",
  "slug": "0451-sort-characters-by-frequency",
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
    "python": 15,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 22 ms (Top 36.06%) | Memory: 8.5 MB (Top 65.22%)\r\nclass Solution {\r\npublic:\r\n    string frequencySort(string s)\r\n    {\r\n        unordered_map<char,int>mp;\r\n        for(int i=0;i<s.length();i++) //get the frequency of every char of the string\r\n        {\r\n            mp[s[i]]++;\r\n        }\r\n\r\n        priority_queue<pair<int,char>>pq; //store the freq and char pair in max heap\r\n        for(auto it=mp.begin();it!=mp.end();it++)\r\n        {\r\n            pq.push({it->second,it->first});\r\n        }\r\n        string str=\"\";\r\n        int val;\r\n        while(!pq.empty())\r\n        {\r\n            val=pq.top().first; //append the char frequency times\r\n            while(val--)\r\n            {\r\n                str.push_back(pq.top().second);\r\n            }\r\n            pq.pop();\r\n        }\r\n        return str;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def frequencySort(self, s: str) -> str:\r\n        di = Counter(s)\r\n        #it wont strike immediately that this is a heap kind of question.\r\n        heap = []\r\n        heapq.heapify(heap)\r\n        for key,val in di.items():\r\n            heapq.heappush(heap,(-1*val,key))\r\n        # n = len(s)\r\n        res = \"\"\r\n        # print(heap)\r\n        while(len(heap)):\r\n            val,ch = heapq.heappop(heap)\r\n            res+=(ch*(-1*val))\r\n        return res",
    "java": "// Runtime: 12 ms (Top 83.68%) | Memory: 45.80 MB (Top 20.05%)\r\n\r\nclass Solution {\r\n    public String frequencySort(String s) {\r\n        int len = s.length();\r\n        HashMap<Integer,HashSet<Character>> map = new HashMap();       \r\n        HashMap<Character,Integer> freqMap = new HashMap();\r\n        \r\n        for(int idx = 0;idx<len;idx++){\r\n            char ch = s.charAt(idx);\r\n            freqMap.put(ch,freqMap.getOrDefault(ch,0)+1);\r\n        }\r\n        \r\n        int maxFreq = 0 , minFreq = s.length();\r\n        \r\n        for(char ch : freqMap.keySet()){\r\n            HashSet<Character> set = map.getOrDefault(freqMap.get(ch),new HashSet());\r\n            set.add(ch);\r\n            map.put(freqMap.get(ch),set);\r\n            maxFreq = Math.max(maxFreq , freqMap.get(ch));\r\n            minFreq = Math.min(minFreq,freqMap.get(ch));\r\n        }\r\n        \r\n        StringBuilder ansStr = new StringBuilder();\r\n        \r\n        for(int freq = maxFreq;freq>=minFreq;freq--){\r\n            if(map.containsKey(freq)){\r\n                HashSet<Character> set = map.get(freq);\r\n                for(char ch : set){\r\n                    int temp = freq;\r\n                    while(temp>0){\r\n                        ansStr.append(ch);\r\n                        temp--;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        \r\n        return ansStr.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 109 ms (Top 73.96%) | Memory: 44.4 MB (Top 83.33%)\r\nvar frequencySort = function(s) {\r\n    let obj = {}\r\n    for(const i of s){\r\n        obj[i] = (obj[i] || 0) +1\r\n    }\r\n    let sorted = Object.entries(obj).sort((a,b)=> b[1]-a[1])\r\n    return sorted.map((e)=> e[0].repeat(e[1])).join('')\r\n};"
  }
}
