export default {
  "id": 748,
  "name": "Shortest Completing Word",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/shortest-completing-word",
  "relativeDir": "S/Shortest Completing Word",
  "slug": "0748-shortest-completing-word",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 56,
    "python": 14,
    "javascript": 31
  },
  "languages": {
    "cpp": "\tclass Solution {\r\npublic:\r\n    string shortestCompletingWord(string licensePlate, vector<string>& words) \r\n    {\r\n        string ans=\"\";\r\n        vector<int> m(26,0);\r\n        for(auto &lp:licensePlate)\r\n        {\r\n            if(isalpha(lp))\r\n                m[tolower(lp)-'a']++;\r\n        }\r\n        for(auto &word:words)\r\n        {\r\n            vector<int> v=m;\r\n            for(auto &ch:word)\r\n            {\r\n                v[tolower(ch)-'a']--;\r\n            }\r\n            bool flag=true;\r\n            for(int i=0;i<26;i++)\r\n            {\r\n                if(v[i]>0)\r\n                    flag =false;\r\n            }\r\n            if(flag&&(ans==\"\"||ans.size()>word.size()))\r\n                ans=word;\r\n        }\r\n        return ans;\r\n        \r\n    }\r\n};\r\n//if you like the solution plz upvote.",
    "python": "class Solution:\r\n    def shortestCompletingWord(self, licensePlate: str, words: List[str]) -> str:\r\n        newPlate = ''         # modify the licensePlate\r\n        for i in licensePlate:\r\n            if i.isalpha():\r\n                newPlate += i.lower()\r\n                \r\n        c = Counter(newPlate)\r\n        l1 = []         # store (word,len,index)\r\n        for idx,word in enumerate(words):\r\n            if Counter(word) >= c:\r\n                l1.append((word,len(word),idx))\r\n        l1.sort(key = lambda x:(x[1],idx))\r\n        return l1[0][0]",
    "java": "// Runtime: 6 ms (Top 66.6%) | Memory: 43.77 MB (Top 64.6%)\r\n\r\nclass Solution {\r\n    public String shortestCompletingWord(String licensePlate, String[] words) {\r\n        //Store count of letters in LicensePlate\r\n        int[] licensePlateCount = new int[26];\r\n        \r\n        //To store all words which meet the criteria\r\n        ArrayList<String> res = new ArrayList<>();\r\n        //To find min length word that meets the criteria\r\n        int min = Integer.MAX_VALUE;\r\n        \r\n        //Add char count for each char in LicensePlate\r\n        for(Character c:licensePlate.toCharArray()) {\r\n            if(isChar(c)) {\r\n                licensePlateCount[Character.toLowerCase(c) - 'a']++;\r\n            }\r\n        }\r\n        \r\n        //Add char count for each word in words\r\n        for(String word : words) {\r\n            int[] wordCharCount = new int[26];\r\n            boolean flag = true;\r\n            \r\n            for(Character c:word.toCharArray()) {\r\n                wordCharCount[Character.toLowerCase(c) - 'a']++;\r\n            }\r\n            \r\n            //Eliminate words that don't satisfy the criteria\r\n            for(int i = 0; i<26;i++) {\r\n                if(licensePlateCount[i] > wordCharCount[i]) flag = false;\r\n            }\r\n            \r\n            //Add words satisfying criteria to res and calculate min word length\r\n            if(flag) {\r\n                res.add(word);\r\n                if(word.length() < min) min = word.length();\r\n            }\r\n        }\r\n        \r\n        //Return 1st word in array meeting all criteria\r\n        for(int i = 0; i < res.size();i++) {\r\n            if(res.get(i).length() == min) return res.get(i);\r\n        }\r\n        \r\n        //If not found, return -1 (or whatever interviewer expects)\r\n        return \"-1\";\r\n    }\r\n    \r\n    private boolean isChar(Character c) {\r\n        if((c >='a' && c <='z') ||\r\n           (c>='A' && c<='Z')) return true;\r\n        \r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 102 ms (Top 73.77%) | Memory: 44.2 MB (Top 95.08%)\r\nvar shortestCompletingWord = function(licensePlate, words) {\r\n\r\n    // Object to hold the shortest word that matches\r\n    var match = {'found':false, 'word':''};\r\n\r\n    // Char array to hold the upper case characters we want to match\r\n    var licensePlateChars = licensePlate.toUpperCase().replace(/[^A-Z]/g, '').split('');\r\n\r\n    words.forEach(function (word) {\r\n        // if we already have a match make sure that the word we are checking is shorter\r\n        if (!match.found || word.length < match.word.length) {\r\n            var replaceWord = word.toUpperCase();\r\n\r\n            // Loop over each character in the license plate and replace one at a time\r\n            // the key here is that replace will only replace 1 S even if there are 2\r\n            licensePlateChars.forEach(function (lChar) {\r\n                replaceWord = replaceWord.replace(lChar, '');\r\n            });\r\n\r\n            // We know the word works if the length of the word minus\r\n            // the length of chars equals the length of the new word\r\n            if (word.length - licensePlateChars.length === replaceWord.length) {\r\n                match.found = true;\r\n                match.word = word\r\n            }\r\n        }\r\n    });\r\n\r\n    return match.word;\r\n};"
  }
}
