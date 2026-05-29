export default {
  "id": 692,
  "name": "Top K Frequent Words",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/top-k-frequent-words",
  "relativeDir": "T/Top K Frequent Words",
  "slug": "0692-top-k-frequent-words",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 23,
    "python": 22,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool static comp(pair<string, int> a, pair<string, int> b){\r\n        if(a.second > b.second) return true;\r\n        else if(a.second < b.second) return false;\r\n        else{\r\n            return a.first < b.first;\r\n        }\r\n    }\r\n    vector<string> topKFrequent(vector<string>& words, int k) {\r\n        unordered_map<string, int> m;\r\n        for(auto i : words){\r\n            m[i]++;\r\n        }\r\n        vector<pair<string, int>> v;\r\n        for(auto i : m){\r\n            v.push_back(i);\r\n        }\r\n        sort(v.begin(), v.end(), comp);\r\n        vector<string> ans;\r\n        for(int i=0; i<k; i++){\r\n            ans.push_back(v[i].first);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "import heapq\r\nclass Solution:\r\n    def topKFrequent(self, words: List[str], k: int) -> List[str]:\r\n        \r\n        li = {}\r\n        for i in words:\r\n            if i in li:\r\n                li[i]+=1\r\n            else:\r\n                li[i]=1\r\n        \r\n        heap = []\r\n        for i in li:\r\n            heap.append([-li[i],i])\r\n        \r\n        heapq.heapify(heap)\r\n        \r\n        ans = []\r\n        for i in range(k):\r\n            ans.append(heapq.heappop(heap)[1])\r\n        \r\n        return ans",
    "java": "class Solution {\r\n    public List<String> topKFrequent(String[] words, int k) {\r\n        Map<String,Integer> map=new LinkedHashMap<>();\r\n        for(String word:words) \r\n            map.put(word,map.getOrDefault(word,0)+1);\r\n        PriorityQueue<Pair<String,Integer>> queue=new PriorityQueue<>(new Comparator<Pair<String,Integer>>(){\r\n            @Override\r\n            public int compare(Pair<String,Integer> a,Pair<String,Integer> b){\r\n                if(a.getValue()!=b.getValue()) return b.getValue()-a.getValue();\r\n                return a.getKey().compareTo(b.getKey());\r\n            }\r\n        });\r\n        map.forEach((key,val)->{\r\n            queue.add(new Pair(key,val));\r\n        });\r\n        List<String> list=new ArrayList<>();\r\n        while(k>0){\r\n            list.add(queue.poll().getKey());\r\n            k--;\r\n        }\r\n        return list;\r\n    }\r\n}",
    "javascript": "var topKFrequent = function(words, k) {\r\n    let map=new Map()\r\n    let res=[]\r\n    for(let i of words){\r\n        if(map.has(i)){\r\n            map.set(i,map.get(i)+1)\r\n        }else{\r\n            map.set(i,1)\r\n        }\r\n    }\r\n    \r\n    res=[...map.keys()].sort((a,b)=>{\r\n        if(map.get(a)===map.get(b)){\r\n            return b < a ? 1:-1\r\n        }\r\n        return map.get(b)-map.get(a)\r\n    }).slice(0,k)\r\n    \r\n    return res\r\n};"
  }
}
