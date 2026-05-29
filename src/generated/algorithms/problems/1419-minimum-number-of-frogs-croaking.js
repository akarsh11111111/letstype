export default {
  "id": 1419,
  "name": "Minimum Number of Frogs Croaking",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-frogs-croaking",
  "relativeDir": "M/Minimum Number of Frogs Croaking",
  "slug": "1419-minimum-number-of-frogs-croaking",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "java": 30,
    "python": 33,
    "javascript": 38
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minNumberOfFrogs(string croakOfFrogs) {\r\n        unordered_map<char,int> mp;\r\n        int size=croakOfFrogs.size();\r\n        \r\n        for(int i=0;i<size;i++)\r\n        {\r\n            mp[croakOfFrogs[i]]++;\r\n            if(mp['c']<mp['r'] || mp['r']<mp['o'] || mp['o']<mp['a'] || mp['a']<mp['k'])\r\n                return -1;\r\n        }\r\n        \r\n        int count=mp[croakOfFrogs[0]];\r\n        for(auto i:croakOfFrogs)\r\n        {\r\n            if(count!=mp[i])\r\n                return -1;\r\n        }\r\n        \r\n        int ans=0;\r\n        int i=0;\r\n        int temp=0;\r\n        \r\n        for(i=0;i<size;i++)\r\n        {\r\n            if(croakOfFrogs[i]=='c')\r\n            {\r\n                temp++;\r\n            }\r\n            else if(croakOfFrogs[i]=='k')\r\n            {\r\n                temp--;\r\n            }\r\n            if(temp>ans)\r\n                ans=temp;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 137 ms (Top 87.7%) | Memory: 17.15 MB (Top 48.6%)\r\n\r\nclass Solution:\r\n    def minNumberOfFrogs(self, croakOfFrogs: str) -> int:\r\n        c = r = o = a = k = max_frog_croak = present_frog_croak = 0\r\n        # need to know, at particular point,\r\n        # what are the max frog are croaking,\r\n\r\n        for i, v in enumerate(croakOfFrogs):\r\n            if v == 'c':\r\n                c += 1\r\n\t\t\t\t# c gives a signal for a frog\r\n                present_frog_croak += 1\r\n            elif v == 'r':\r\n                r += 1\r\n            elif v == 'o':\r\n                o += 1\r\n            elif v == 'a':\r\n                a += 1\r\n            else:\r\n                k += 1\r\n\t\t\t\t# frog stop croaking\r\n                present_frog_croak -= 1\r\n\r\n            max_frog_croak = max(max_frog_croak, present_frog_croak)\r\n            # if any inoder occurs;\r\n            if c < r or r < o or o < a or a < k:\r\n                return -1\r\n\r\n        # if all good, else -1\r\n        if present_frog_croak == 0 and c == r and r == o and o == a and a == k:\r\n            return max_frog_croak\r\n        return -1",
    "java": "// Runtime: 12 ms (Top 80.36%) | Memory: 46.5 MB (Top 68.93%)\r\nclass Solution {\r\n    public int minNumberOfFrogs(String croakOfFrogs) {\r\n        int[] index = new int[26];\r\n        String corak = \"croak\";\r\n\r\n        // Giving index to each characters\r\n        for (int i = 0; i < corak.length(); ++i)\r\n            index[corak.charAt(i) - 'a'] = i;\r\n\r\n        int ans = 0, sum = 0;\r\n        int[] count = new int[5];\r\n\r\n        for (char c : croakOfFrogs.toCharArray()) {\r\n            int i = index[c - 'a'];\r\n            // If it is not 'c' it will decrease the sum\r\n            if (c != 'c') {\r\n                if (count[i - 1]-- <= 0) return -1;\r\n                sum--;\r\n            }\r\n            // If it is not 'k' it will increase the sum\r\n            if (c != 'k') {\r\n                count[i]++;\r\n                sum++;\r\n            }\r\n            ans = Math.max(ans, sum);\r\n        }\r\n        return sum == 0 ? ans : -1;\r\n    }\r\n}",
    "javascript": "var minNumberOfFrogs = function(croakOfFrogs) {\r\n    const croakArr = new Array(5).fill(0); //Array to store occurence of each char\r\n    let overlap = 0;  //Store the number of overlaps\r\n    for(let i = 0; i < croakOfFrogs.length; i++) {\r\n        switch(croakOfFrogs[i]) {\r\n            case 'c':\r\n                croakArr[0] += 1;\r\n                //Check if new start, is overlapping with others\r\n                if((croakArr[0] - croakArr[4] - overlap) > 1) {\r\n                    ++overlap;\r\n                }\r\n                break;\r\n            case 'r':\r\n                //Condition to check if r comes before c\r\n                if(croakArr[0] <= croakArr[1]) return -1;\r\n                croakArr[1] += 1;\r\n                break;\r\n            case 'o':\r\n                //Condition to check if o comes before r\r\n                if(croakArr[1] <= croakArr[2]) return -1;\r\n                croakArr[2] += 1;\r\n                break;\r\n            case 'a':\r\n                //Condition to check if a comes before o\r\n                if(croakArr[2] <= croakArr[3]) return -1;\r\n                croakArr[3] += 1;\r\n                break;\r\n            case 'k':\r\n                //Condition to check if k comes before a\r\n                if(croakArr[3] <= croakArr[4]) return -1;\r\n                croakArr[4] += 1;\r\n                break;\r\n        }\r\n    }\r\n    //Check if all items of array have same count else return -1\r\n    //If all items have same count return overlap + 1\r\n    return (Math.max(...croakArr) === Math.min(...croakArr)) ? overlap + 1 : -1;\r\n};"
  }
}
