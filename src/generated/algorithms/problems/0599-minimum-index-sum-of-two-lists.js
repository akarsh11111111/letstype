export default {
  "id": 599,
  "name": "Minimum Index Sum of Two Lists",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-index-sum-of-two-lists",
  "relativeDir": "M/Minimum Index Sum of Two Lists",
  "slug": "0599-minimum-index-sum-of-two-lists",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 32,
    "python": 40,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 70 ms (Top 74.0%) | Memory: 37.30 MB (Top 38.8%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<string> findRestaurant(vector<string>& list1, vector<string>& list2) {\r\n        int min=INT_MAX;\r\n       unordered_map<string,int>un;\r\n        vector<string>v;\r\n        for(int i=0;i<list1.size();i++){\r\n            un[list1[i]]=i;\r\n        }\r\n        for(int i=0;i<list2.size();i++){\r\n            if(un.count(list2[i])!=0){\r\n              int sum=i+un[list2[i]];\r\n                if(sum<min){\r\n                    min=sum;\r\n                    v.clear();\r\n                    v.push_back(list2[i]);\r\n                }else if(sum==min){\r\n                     v.push_back(list2[i]);\r\n                }\r\n            }\r\n        }\r\n        return v;\r\n        \r\n        \r\n    }\r\n    };",
    "python": "class Solution:\r\n    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:\r\n        \r\n      \r\n        hashmap1 = {}\r\n        hashmap2 = {}\r\n        common = {}\r\n        for i in range(len(list1)):\r\n            \r\n            hashmap1[list1[i]] = i \r\n            \r\n            \r\n        for j in range(len(list2)):\r\n            hashmap2[list2[j]] = j \r\n            \r\n     \r\n        \r\n        for i in hashmap1:\r\n            \r\n            if i in hashmap2:\r\n                print(1)\r\n                common[i] = hashmap1[i] + hashmap2[i]\r\n                \r\n        \r\n        common = list(common.items())\r\n        \r\n        answer =[]\r\n        minimum = float(\"inf\")\r\n        \r\n        for  i in range(0,len(common)):\r\n            \r\n            if common[i][1] < minimum:\r\n                minimum = common[i][1]\r\n                \r\n        for i in range(len(common)):\r\n            \r\n            if common[i][1] == minimum:\r\n                answer.append(common[i][0])\r\n        \r\n        return answer",
    "java": "// Runtime: 7 ms (Top 93.08%) | Memory: 45.40 MB (Top 19.13%)\r\n\r\nclass Solution {\r\n    public String[] findRestaurant(String[] list1, String[] list2) {\r\n        if (list1.length > list2.length) {\r\n            return findRestaurant(list2, list1);\r\n        }\r\n        \r\n        Map<String, Integer> map1 = new HashMap<>();\r\n        for (int i = 0; i < list1.length; i++) {\r\n            map1.put(list1[i], i);\r\n        }\r\n        \r\n        List<String> mins = new ArrayList<>();\r\n        int minSum = Integer.MAX_VALUE;\r\n        for (int i = 0; i < list2.length; i++) {\r\n            String rest2 = list2[i];\r\n            if (map1.containsKey(rest2)) {\r\n                int sum = map1.get(rest2) + i;\r\n                if (sum < minSum) {\r\n                    mins = new ArrayList<>();\r\n                    minSum = sum;\r\n                }\r\n                if (sum == minSum) {\r\n                    mins.add(rest2);\r\n                }\r\n            }\r\n        }\r\n        \r\n        return mins.toArray(new String[mins.size()]);\r\n    }\r\n}",
    "javascript": "// Runtime: 170 ms (Top 33.33%) | Memory: 48.8 MB (Top 57.06%)\r\nvar findRestaurant = function(list1, list2) {\r\n    let obj ={}\r\n    for(let i =0; i <list1.length; i ++){\r\n        if(list2.indexOf(list1[i]) !==-1){\r\n            const sum = i+ list2.indexOf(list1[i])\r\n            if(obj[sum]!==undefined)\r\n                {\r\n                    obj[sum]['value'].push(list1[i])\r\n                }\r\n            else{\r\n                obj[sum]={}\r\n                obj[sum]['sum']=sum\r\n                obj[sum]['value']=[]\r\n                obj[sum]['value'].push(list1[i])\r\n            }\r\n\r\n        }\r\n    }\r\n    return Object.values(obj)[0]['value']\r\n\r\n};"
  }
}
