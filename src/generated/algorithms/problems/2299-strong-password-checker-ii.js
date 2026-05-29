export default {
  "id": 2299,
  "name": "Strong Password Checker II",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/strong-password-checker-ii",
  "relativeDir": "S/Strong Password Checker II",
  "slug": "2299-strong-password-checker-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 40,
    "python": 11,
    "javascript": 60
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool strongPasswordCheckerII(string password) {\r\n\t\tif(password.size() < 8) //8 char length\r\n            return false;\r\n\t\t\t\r\n        bool lower = 0, upper = 0;\r\n        bool digit = 0, special = 0;\r\n\t\t\r\n        for(int i=0; i<password.size(); i++){ //check rest conditions\r\n            if(i>0 && password[i] == password[i-1])   //check duplicate\r\n\t\t\t\treturn false; \r\n             \r\n\t\t\tif(password[i] >=65 && password[i] <=90)  upper = 1;  //uppercase\r\n\t\t\telse if(password[i] >=97 && password[i] <=122)   lower = 1;   //lowercase\r\n\t\t\telse if(password[i] >=48 && password[i] <=57)       digit = 1;   //digit\r\n\t\t\telse     //special char\r\n                special = 1;\r\n        }\r\n        \r\n        if(upper && lower && digit && special)\r\n            return true;\r\n        return false;\r\n    }\r\n};",
    "python": "# Runtime: 65 ms (Top 11.66%) | Memory: 13.9 MB (Top 19.37%)\r\n\r\nclass Solution:\r\n    def strongPasswordCheckerII(self, pwd: str) -> bool:\r\n        return (\r\n            len(pwd) > 7\r\n            and max(len(list(p[1])) for p in groupby(pwd)) == 1\r\n            and reduce(\r\n                lambda a, b: a | (1 if b.isdigit() else 2 if b.islower() else 4 if b.isupper() else 8), pwd, 0\r\n            ) == 15\r\n        )",
    "java": "class Solution {\r\n    public boolean strongPasswordCheckerII(String password) {\r\n           HashSet<Integer> intAscii = new HashSet<>();\r\n        String specialCharacters = \"!@#$%^&*()-+\";\r\n        for (int i = 0; i < specialCharacters.length(); i++) {\r\n            int ascii = specialCharacters.charAt(i);\r\n            intAscii.add(ascii);\r\n        }\r\n        \r\n        if(password.length() < 8){\r\n            return false;\r\n        }\r\n        boolean small = false;\r\n        boolean large = false;\r\n        boolean numbers = false;\r\n        boolean specialChars = false;\r\n        for(int i = 0 ; i < password.length() ; i++){\r\n            int ascii = (int)(password.charAt(i));\r\n            if(ascii <= 90 && ascii>=65){\r\n                large = true;\r\n            }\r\n                if(ascii <= 122 && ascii>=97){\r\n                small = true;\r\n            }\r\n            if(ascii <=57 && ascii >=48){\r\n                numbers = true;\r\n            }\r\n            if(intAscii.contains(ascii)){\r\n                specialChars = true;\r\n            }\r\n            if(i> 0 && password.charAt(i)== password.charAt(i-1)){\r\n                return false;\r\n            }\r\n        }\r\n        if(large == false || small == false || numbers == false || specialChars ==false){\r\n            return false;\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "const checkLen = (password) => password.length >= 8;\r\n\r\nconst checkSmallLetter = (password) => {\r\n    for(let i=0;i<password.length;i++){\r\n        const ind = password.charCodeAt(i);\r\n        if(ind > 96 && ind < 123){\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n}\r\n\r\nconst checkCapitalLetter = (password) => {\r\n    for(let i=0;i<password.length;i++){\r\n        const ind = password.charCodeAt(i);\r\n        if(ind > 64 && ind < 91){\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n}\r\n\r\nconst checkDigit = (password) => {\r\n    for(let i=0;i<password.length;i++){\r\n        const ind = password.charCodeAt(i);\r\n        if(ind > 47 && ind < 58){\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n}\r\n\r\nconst checkSpecialChar = (password) => {\r\n    const str = \"!@#$%^&*()-+\";\r\n     for(let i=0;i<str.length;i++){\r\n       if(password.includes(str[i])) return true;\r\n    }\r\n    return false;\r\n}\r\n\r\nconst checkAdjacentMatches = (password) => {\r\n    for(let i=1;i<password.length;i++){\r\n        if(password[i] === password[i-1]) return false;\r\n    }\r\n    return true;\r\n}\r\n\r\n\r\nvar strongPasswordCheckerII = function(password) {\r\n    const lenValidity = checkLen(password);\r\n    const smallLetterValidity = checkSmallLetter(password);    \r\n    const capitalLetterValidity = checkCapitalLetter(password);\r\n    const digitValidity = checkDigit(password);\r\n    const specialCharValidity = checkSpecialChar(password);\r\n    const adjacentMatchesValidity = checkAdjacentMatches(password);\r\n        \r\n    const passwordIsStrong = lenValidity && smallLetterValidity && capitalLetterValidity && digitValidity && specialCharValidity && adjacentMatchesValidity;\r\n  \r\n    return passwordIsStrong;\r\n};"
  }
}
