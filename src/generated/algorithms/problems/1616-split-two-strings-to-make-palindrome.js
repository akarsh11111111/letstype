export default {
  "id": 1616,
  "name": "Split Two Strings to Make Palindrome",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/split-two-strings-to-make-palindrome",
  "relativeDir": "S/Split Two Strings to Make Palindrome",
  "slug": "1616-split-two-strings-to-make-palindrome",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 35,
    "python": 31,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 228 ms (Top 5.18%) | Memory: 36.6 MB (Top 14.81%)\r\n// samll trick: for plaindrome question always try to follow concept that if corners are equal we need to only work\r\n// on middle string to check whether it is also palindrome, instead of check complete strings(both given strings).\r\nclass Solution {\r\npublic:\r\n    bool ispalind(string x, int i, int j){\r\n        while(i<j){\r\n            if(x[i]!=x[j]) return false;\r\n            i++;\r\n            j--;\r\n        }\r\n        return true;\r\n    }\r\n    bool checkpositions(string a, string b){\r\n        int i=0,j=b.size()-1;\r\n        while(i<j){\r\n            if(a[i]!=b[j]) break;\r\n            i++;\r\n            j--;\r\n        }\r\n         /*\r\n          left cut\r\n          //agar same hote toh\r\n            \"ulacfd\" ul.zalu //to check for palindrome : za(from b)\r\n            \"jizalu\" ji.acfd //to check for palindrome : ac(from a)\r\n        */\r\n        /*\r\n         right cut\r\n         //agar samee hote toh\r\n            \"ulacfd\" jiza.fd //to check for palindrome : za(from b)\r\n            \"jizalu\" ulac.lu //to check for palindrome : ac(from a)\r\n        */\r\n        return ispalind(a,i,j) || ispalind(b,i,j);\r\n    }\r\n    bool checkPalindromeFormation(string a, string b) {\r\n              //cut one(from left) //cut two(from right)\r\n        return checkpositions(a,b)||checkpositions(b,a);\r\n    }\r\n};",
    "python": "# Runtime: 271 ms (Top 15.83%) | Memory: 15.4 MB (Top 41.73%)\r\nclass Solution:\r\n    def checkPalindromeFormation(self, a: str, b: str) -> bool:\r\n        def pal(x):\r\n            return x == x[::-1]\r\n        if pal(a) or pal(b): return True\r\n        # either grow from inside to outside, or vice versa\r\n        ina = len(a)-1\r\n        inb = 0\r\n        outa = 0\r\n        outb = len(b)-1\r\n\r\n        while a[ina] == b[inb]:\r\n            ina -= 1\r\n            inb += 1\r\n            if ina <= inb:\r\n                return True # short circuit found break point\r\n        # jump into each string now!?\r\n        # is a or b a palindrome in this portion from inb to ina\r\n        if pal(a[inb:ina+1]) or pal(b[inb:ina+1]):\r\n            return True # either one is breakpoint, so check remainder is palindrome\r\n\r\n        while a[outa] == b[outb]:\r\n            outa += 1\r\n            outb -= 1\r\n            if outa >= outb:\r\n                return True\r\n        if pal(a[outa:outb+1]) or pal(b[outa:outb+1]):\r\n            return True # either one is breakpoint, so check remainder\r\n\r\n        return False",
    "java": "// Runtime: 3 ms (Top 100.0%) | Memory: 45.60 MB (Top 14.69%)\r\n\r\nclass Solution {\r\n    public boolean checkPalindromeFormation(String a, String b) {\r\n        // either way of split should give us a palindrome\r\n        return cut(a, b) || cut(b, a);\r\n    }\r\n\r\n    // method to match letters from both ends\r\n    private boolean cut(String a, String b) {\r\n        int i = 0, j = a.length() - 1;\r\n        // converge from both ends till we have same letters\r\n        while (i < j && a.charAt(i) == b.charAt(j)) {\r\n            i++; j--;\r\n        }\r\n\r\n        // the case when we surpassed the mid point from both ends\r\n        if (i >= j) return true;\r\n        // the case when there is still a substring left in between\r\n        // or say we didn't reach the mid point\r\n        // we will check if that substring is a palindrome or not\r\n        return isPalindrome(a, i, j) || isPalindrome(b, i, j);\r\n    }\r\n\r\n    // method to check if a string is palindrome\r\n    private boolean isPalindrome(String s, int i, int j) {\r\n        while (i < j) {\r\n            if (s.charAt(i++) != s.charAt(j--)) {\r\n                return false;\r\n            }\r\n        }\r\n\r\n        return true;\r\n    }\r\n}",
    "javascript": "var checkPalindromeFormation = function(a, b) {\r\n    function isPal(str, l, r) {\r\n        while (l < r) {\r\n            if (str[l] === str[r]) l++, r--;\r\n            else return false;\r\n        } return true;\r\n    }\r\n    \r\n    // aprefix + bsuffix\r\n    let l = 0, r = b.length - 1;\r\n    while (l < r && a[l] === b[r]) l++, r--;\r\n    if (isPal(a, l, r) || isPal(b, l, r)) return true;\r\n    \r\n    // bprefix + asuffix\r\n    l = 0, r = a.length - 1;\r\n    while (l < r && b[l] === a[r]) l++, r--;\r\n    if (isPal(a, l, r) || isPal(b, l, r)) return true;\r\n    \r\n    return false;\r\n};"
  }
}
