export default {
  "id": 763,
  "name": "Partition Labels",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/partition-labels",
  "relativeDir": "P/Partition Labels",
  "slug": "0763-partition-labels",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 37,
    "python": 23,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 91.66%) | Memory: 6.7 MB (Top 69.45%)\r\nclass Solution {\r\npublic:\r\n    vector<int> partitionLabels(string s) {\r\n        unordered_map<char,int>mp;\r\n        // filling impact of character's\r\n        for(int i = 0; i < s.size(); i++){\r\n            char ch = s[i];\r\n            mp[ch] = i;\r\n        }\r\n        // making of result\r\n        vector<int> res;\r\n        int prev = -1;\r\n        int maxi = 0;\r\n\r\n        for(int i = 0; i < s.size(); i++){\r\n            maxi = max(maxi, mp[s[i]]);\r\n            if(maxi == i){\r\n                // partition time\r\n                res.push_back(maxi - prev);\r\n                prev = maxi;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def partitionLabels(self, s: str) -> List[int]:\r\n        d = defaultdict(list)\r\n        for i, char in enumerate(s):\r\n            d[char].append(i)\r\n        nums = []\r\n        \r\n        for v in d.values():\r\n            nums.append([v[0], v[-1]])\r\n\r\n        start = nums[0][0]\r\n        maxIndex = nums[0][1]\r\n        ans = []\r\n        for i in range(1, len(nums)):\r\n            if nums[i][0] <= maxIndex:\r\n                maxIndex = max(maxIndex, nums[i][1])\r\n            else:\r\n                ans.append(maxIndex - start + 1)\r\n                start = nums[i][0]\r\n                maxIndex = nums[i][1]\r\n        ans.append(maxIndex - start + 1)\r\n        # print(ans)\r\n        return ans",
    "java": "// Runtime: 17 ms (Top 5.9%) | Memory: 43.57 MB (Top 5.0%)\r\n\r\nclass Solution {\r\n    public List<Integer> partitionLabels(String s) {\r\n        \r\n    List<Integer>lr=new ArrayList<>();\r\n\r\n    HashMap<Character,Boolean>mp=new HashMap<>();\r\n\r\n    int count=0;\r\n\r\n    for(int i=0;i<s.length();i++){\r\n\r\n    if(!mp.containsKey(s.charAt(i))&&s.lastIndexOf(Character.toString(s.charAt(i)))!=i){\r\n        mp.put(s.charAt(i),true);\r\n    }\r\n    else if(mp.containsKey(s.charAt(i))&&s.lastIndexOf(Character.toString(s.charAt(i)))==i){\r\n\r\n    mp.remove(s.charAt(i));\r\n\r\n    }\r\n    \r\n    if(mp.isEmpty()){\r\n    lr.add(count+1);\r\n    count=0;\r\n    }\r\n    else{\r\n        count++;\r\n    }\r\n    }\r\n\r\n\r\n    return lr;\r\n\r\n\r\n    }\r\n}",
    "javascript": "// Runtime: 123 ms (Top 25.53%) | Memory: 43.7 MB (Top 74.47%)\r\nvar partitionLabels = function(s) {\r\n    let last = 0, first = 0;\r\n\r\n    let arr = [...new Set(s)], ss = [];\r\n    let temp = '';\r\n\r\n    first = s.indexOf(arr[0]);\r\n    last = s.lastIndexOf(arr[0]);\r\n\r\n    for(let i = 1; i<arr.length; i++){\r\n        if(s.indexOf(arr[i]) < last){\r\n            if(last < s.lastIndexOf(arr[i])){\r\n            last = s.lastIndexOf(arr[i]);\r\n            }\r\n        }\r\n        else{\r\n            temp = s.slice(first,last+1);\r\n            ss.push(temp.length);\r\n            first = s.indexOf(arr[i]);\r\n            last = s.lastIndexOf(arr[i]);\r\n        }\r\n    }\r\n\r\n    temp = s.slice(first,last+1);\r\n    ss.push(temp.length);\r\n    return ss;\r\n};"
  }
}
