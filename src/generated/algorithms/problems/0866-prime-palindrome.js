export default {
  "id": 866,
  "name": "Prime Palindrome",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/prime-palindrome",
  "relativeDir": "P/Prime Palindrome",
  "slug": "0866-prime-palindrome",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 37,
    "python": 24,
    "javascript": 44
  },
  "languages": {
    "cpp": "// Runtime: 13 ms (Top 80.40%) | Memory: 5.8 MB (Top 81.91%)\r\nclass Solution {\r\n\r\npublic:\r\n    bool isPrime(int N) {\r\n    if (N < 2) return false;\r\n    int R = (int)sqrt(N);\r\n    for (int d = 2; d <= R; ++d)\r\n        if (N % d == 0) return false;\r\n    return true;\r\n    }\r\n\r\npublic:\r\n    int reverse(int N) {\r\n    int ans = 0;\r\n    while (N > 0) {\r\n        ans = 10 * ans + (N % 10);\r\n           N /= 10;\r\n        }\r\n    return ans;\r\n    }\r\npublic:\r\n    int primePalindrome(int n) {\r\n        while (true) {\r\n            if (n == reverse(n) && isPrime(n))\r\n                return n;\r\n            n++;\r\n\r\n            // Any even length palindrome must be divisble by 11\r\n            // so we will skip numbers N = [10,000,000, 99,999,999]\r\n            if (10000000 < n && n < 100000000)\r\n                n = 100000000;\r\n        }\r\n    }\r\n};",
    "python": "// Runtime: 32 ms (Top 99.21%) | Memory: 17.20 MB (Top 18.9%)\r\n\r\nclass Solution:\r\n    def isPrime(self, num):\r\n        from math import sqrt\r\n        if num < 2 or num % 2 == 0:\r\n            return num == 2\r\n        for i in range(3, int(sqrt(num)) + 1, 2):\r\n            if num % i == 0:\r\n                return False\r\n        return True\r\n\r\n    def primePalindrome(self, n: int) -> int:\r\n        if 8 <= n <= 11:\r\n            return 11\r\n        if len(str(n)) % 2 == 0:\r\n            limit = pow(10, len(str(n)) // 2)\r\n        else:\r\n            n_string = str(n)\r\n            limit = n_string[:len(str(n)) // 2 + 1]\r\n        for i in range(int(limit), 20000):\r\n            y = int(str(i) + str(i)[:-1][::-1])\r\n            if y >= n and self.isPrime(y):\r\n                return y",
    "java": "// Prime Palindrome\r\n// Leetcode problem: https://leetcode.com/problems/prime-palindrome/\r\n\r\nclass Solution {\r\n    public int primePalindrome(int n) {\r\n        while (true) {\r\n            if (isPrime(n) && isPalindrome(n)) {\r\n                return n;\r\n            }\r\n            n++;\r\n        }       \r\n    }\r\n    private boolean isPrime(int n) {\r\n        if (n == 1) {\r\n            return false;\r\n        }\r\n        for (int i = 2; i <= Math.sqrt(n); i++) {\r\n            if (n % i == 0) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n    private boolean isPalindrome(int n) {\r\n        String s = String.valueOf(n);\r\n        int i = 0;\r\n        int j = s.length() - 1;\r\n        while (i < j) {\r\n            if (s.charAt(i) != s.charAt(j)) {\r\n                return false;\r\n            }\r\n            i++;\r\n            j--;\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 175 ms (Top 46.15%) | Memory: 48.7 MB (Top 53.85%)\r\n/**\r\n * @param {number} n\r\n * @return {number}\r\n */\r\nvar primePalindrome = function(n) {\r\n\r\n    while (true){\r\n        let str = String(n)\r\n        if (String(n).length % 2 == 0 && n > 11){\r\n            n = Math.pow(10, Math.ceil(Math.log10(n+1)))\r\n            // or n = 1 + Array(str.length).fill(0).join(\"\")\r\n            continue\r\n        }\r\n        if (!isPalindrome(str)) {\r\n            n++\r\n            continue\r\n        }\r\n        if (isPrime(n)) return n\r\n        n++\r\n    }\r\n\r\n};\r\n\r\nfunction isPrime(n){\r\n    if (n <= 1) return false\r\n    if (n <= 3) return true\r\n    if (n % 2 == 0 || n % 3 == 0) return false\r\n\r\n    for (let i = 3; i <= Math.floor(Math.sqrt(n)) + 1;i+=2){\r\n        if (n % i == 0) return false\r\n    }\r\n    return true\r\n}\r\n\r\nfunction isPalindrome(str){\r\n    let l = 0, r = str.length-1\r\n    while (l < r){\r\n        if (str[l] != str[r]) return false\r\n        l++\r\n        r--\r\n    }\r\n    return true\r\n}"
  }
}
