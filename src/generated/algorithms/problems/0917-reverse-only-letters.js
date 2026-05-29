export default {
  "id": 917,
  "name": "Reverse Only Letters",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reverse-only-letters",
  "relativeDir": "R/Reverse Only Letters",
  "slug": "0917-reverse-only-letters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 47,
    "python": 12,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 43.65%) | Memory: 6.1 MB (Top 17.51%)\r\nclass Solution {\r\npublic:\r\n    string reverseOnlyLetters(string s) {\r\n        int a=0,b=s.size()-1;\r\n        for(;a<b;)\r\n        {\r\n            if(((s[a]>='a'&&s[a]<='z')||(s[a]>='A'&&s[a]<='Z'))&&((s[b]>='a'&&s[b]<='z')||(s[b]>='A'&&s[b]<='Z')))\r\n               {\r\n                   char z=s[a];\r\n                   s[a]=s[b];\r\n                   s[b]=z;\r\n                   a++;\r\n                   b--;\r\n               }\r\n               else if(!((s[a]>='a'&&s[a]<='z')||(s[a]>='A'&&s[a]<='Z'))&&((s[b]>='a'&&s[b]<='z')||(s[b]>='A'&&s[b]<='Z')))\r\n                       {\r\n                           a++;\r\n                       }\r\n                       else if(((s[a]>='a'&&s[a]<='z')||(s[a]>='A'&&s[a]<='Z'))&&!((s[b]>='a'&&s[b]<='z')||(s[b]>='A'&&s[b]<='Z')))\r\n                       b--;\r\n                       else{\r\n                           a++;\r\n                           b--;\r\n                       }\r\n\r\n    }\r\n        return s;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def reverseOnlyLetters(self, s: str) -> str:\r\n        st,sp=[],[]\r\n        for i,ch in enumerate(s):\r\n            if ch.isalpha():\r\n                st.append(ch)\r\n            else:\r\n                sp.append([i,ch])\r\n        st=st[::-1]\r\n        for i in sp:\r\n            st.insert(i[0],i[1])\r\n        return (''.join(st))",
    "java": "// Runtime: 1 ms (Top 90.35%) | Memory: 40.8 MB (Top 87.29%)\r\nclass Solution {\r\n    public String reverseOnlyLetters(String s) {\r\n        // converting the string to the charArray...\r\n        char[] ch = s.toCharArray();\r\n\r\n        int start = 0;\r\n        int end = s.length()-1;\r\n\r\n        // Storing all the english alphabets in a hashmap so that the searching becomes easy...\r\n        HashMap<Character , Integer> hash = new HashMap<>();\r\n        for(int i=0 ; i<26 ;i++){\r\n            hash.put((char)(97+i) , 1);\r\n        }\r\n        for(int i=0 ; i<26 ; i++){\r\n            hash.put((char)(65+i) , 1);\r\n        }\r\n\r\n        // using two while loops ..since the constraints are too less thats why we can prefer nested loops approach..\r\n        while(start<end){\r\n\r\n            // interating untill start pointer reacher a good character\r\n            while(start<end&&!hash.containsKey(ch[start])){\r\n                start++;\r\n            }\r\n            // iterating untill the end pointer reaches the good character..\r\n            while(end>start&&!hash.containsKey(ch[end])){\r\n                end--;\r\n            }\r\n\r\n            // swapping the array elements..\r\n            char temp = ch[start];\r\n            ch[start] = ch[end];\r\n            ch[end] = temp;\r\n\r\n            start++;\r\n            end--;\r\n        }\r\n\r\n        // converting the charArray to the string again..\r\n        String ans = new String(ch);\r\n        return ans;\r\n\r\n        // Time Complexity : O(N) (since the loops will run only till the number of charcters in the string..)\r\n        // Space Complexity : O(N) since we used hashmap..\r\n    }\r\n}",
    "javascript": "var reverseOnlyLetters = function(s) {\r\n    let valid = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'\r\n    let arr = s.split('')\r\n    \r\n    let r = arr.length - 1;\r\n    let l = 0;\r\n    \r\n    while (l < r) {\r\n        while (!valid.includes(arr[l]) && l < r) {\r\n            l++;\r\n            continue;\r\n        }\r\n    \r\n        while (!valid.includes(arr[r]) && l < r) {\r\n            r--;\r\n            continue\r\n        }\r\n        \r\n        if (l >= r) break;\r\n        \r\n        [arr[l], arr[r]] = [arr[r], arr[l]];\r\n        l++;\r\n        r--;\r\n    }\r\n    \r\n    \r\n    return arr.join('')\r\n\t```"
  }
}
