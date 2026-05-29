export default {
  "id": 564,
  "name": "Find the Closest Palindrome",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-closest-palindrome",
  "relativeDir": "F/Find the Closest Palindrome",
  "slug": "0564-find-the-closest-palindrome",
  "availableLanguages": [
    "cpp",
    "java",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 42,
    "javascript": 58
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 46.35%) | Memory: 7.10 MB (Top 5.62%)\r\n\r\nclass Solution {\r\npublic:\r\n    string nearestPalindromic(string n) {\r\n        int l = n.size();\r\n        set<long> candidates;\r\n        // biggest, one more digit, 10...01\r\n        candidates.insert(long(pow(10, l)) + 1);\r\n        // smallest, one less digit, 9...9 or 0\r\n        candidates.insert(long(pow(10, l - 1)) - 1);\r\n        // the closest must be in middle digit +1, 0, -1, then flip left to right\r\n        long prefix = stol(n.substr(0, (l + 1) / 2));\r\n        for ( long i = -1; i <= 1; ++i ) {\r\n            string p = to_string(prefix + i);\r\n            string pp = p + string(p.rbegin() + (l & 1), p.rend());\r\n            candidates.insert(stol(pp));\r\n        }\r\n        long num = stol(n), minDiff = LONG_MAX, diff, minVal;\r\n        candidates.erase(num);\r\n        for ( long val : candidates ) {\r\n            diff = abs(val - num);\r\n            if ( diff < minDiff ) {\r\n                minDiff = diff;\r\n                minVal = val;\r\n            } else if ( diff == minDiff ) {\r\n                minVal = min(minVal, val);\r\n            }\r\n        }\r\n        return to_string(minVal);\r\n    }\r\n};",
    "python": "",
    "java": "class Solution {\r\n    static long pow(long base,long exp){\r\n        long ans = 1;\r\n        for(;exp != 0;){\r\n            if((exp & 1) == 1){\r\n                ans *= base;\r\n            }\r\n            base *= base;\r\n            exp >>= 1;\r\n        }\r\n        return ans;\r\n    }\r\n    public String nearestPalindromic(String n) {\r\n        long num = Long.parseLong(n);\r\n        if(num <= 10){\r\n            return String.valueOf(num - 1);\r\n        }\r\n        long comp[] = new long[5];\r\n        comp[0] = pow(10,n.length() - 1) - 1;\r\n        comp[1] = pow(10,n.length()) + 1;\r\n        int mid = (n.length() + 1) / 2;\r\n        long half = Long.parseLong(n.substring(0,mid));\r\n        long pref[] = {half,half + 1,half - 1};\r\n        for(int i = 0;i < 3;i++){\r\n            StringBuilder st = new StringBuilder(String.valueOf(pref[i]));\r\n            if(n.length() % 2 == 1) st.deleteCharAt(st.length() - 1);\r\n            st.reverse();\r\n            comp[i + 2] = Long.parseLong(String.valueOf(pref[i]) + st.toString()); \r\n        }\r\n        long min = Long.MAX_VALUE;\r\n        long ans = Long.MAX_VALUE;\r\n        for(int i = 0;i < 5;i++){\r\n            long dif = Math.abs(num - comp[i]);\r\n            if(dif != 0 && min > dif){\r\n                min = dif;\r\n                ans = comp[i];\r\n            }\r\n            else if(min == dif) ans = Math.min(ans,comp[i]);\r\n        }\r\n        return String.valueOf(ans);\r\n    }\r\n}",
    "javascript": "var nearestPalindromic = function(n) {\r\n\r\n    //special case return immediately\r\n    if(n.length === 1){\r\n        return String(n-1)\r\n    }\r\n    \r\n    const gen99=(len)=>{\r\n        return \"9\".repeat(len)\r\n    } \r\n    const gen101=(len)=>{\r\n        return \"1\" + \"0\".repeat(len-1) + \"1\"\r\n    } \r\n    \r\n    let case1 = gen99(n.length-1)\r\n    let case2 = gen101(n.length-1)\r\n    let case3 = gen99(n.length)\r\n    let case4 = gen101(n.length)\r\n    \r\n    let tempPalindrome = ''\r\n    let tempPalindromeRev = ''\r\n    let startCode = 0\r\n    let endCode = n.length - 1\r\n    while(endCode-startCode > 1){\r\n        tempPalindrome = tempPalindrome + n[startCode]\r\n        tempPalindromeRev = n[startCode] + tempPalindromeRev\r\n        startCode += 1\r\n        endCode -= 1\r\n    }       \r\n    const addCenterStr=(add)=> {\r\n        if(n.length%2 !== 0){\r\n            return tempPalindrome + (Number(n[startCode]) + add)\r\n        } else {\r\n            return tempPalindrome + (Number(n[startCode]) + add) + (Number(n[startCode]) + add)\r\n        }\r\n    }\r\n    let case5 = addCenterStr(0) + tempPalindromeRev\r\n    let case6 = addCenterStr(-1) + tempPalindromeRev\r\n    let case7 = addCenterStr(1) + tempPalindromeRev\r\n    \r\n    //Find smallest difference ans\r\n    const list = [case1,case2,case3,case4,case5,case6,case7]\r\n    let tempDiff = null\r\n    let ans = ''\r\n    for (let i of list){\r\n       if (i != n){\r\n           let diff = Math.abs(n-i)\r\n            if(diff == tempDiff && Number(i) < Number(ans)){\r\n                ans = i\r\n            }\r\n           if(diff < tempDiff || !tempDiff){\r\n                tempDiff = diff\r\n                ans = i\r\n           }\r\n       }\r\n   }\r\n    return String(ans)\r\n};"
  }
}
