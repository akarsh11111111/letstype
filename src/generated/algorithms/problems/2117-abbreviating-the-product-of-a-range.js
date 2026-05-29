export default {
  "id": 2117,
  "name": "Abbreviating the Product of a Range",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/abbreviating-the-product-of-a-range",
  "relativeDir": "A/Abbreviating the Product of a Range",
  "slug": "2117-abbreviating-the-product-of-a-range",
  "availableLanguages": [
    "cpp",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 80,
    "python": 35
  },
  "languages": {
    "cpp": "// Runtime: 29 ms (Top 64.0%) | Memory: 6.70 MB (Top 64.0%)\r\n\r\nclass Solution {\r\npublic:\r\n    string abbreviateProduct(int left, int right) {\r\n       \r\n        // upper 12 digit of product\r\n        double upper = 1;\r\n        \r\n        // lower 12 digit of product\r\n        long long lower = 1L;\r\n        \r\n        // offset to make 12 digit in upper and lower\r\n        long long Offset = 1e12;\r\n        \r\n        // offset to make 5 digit in upper and lower\r\n        long long cutOffset = 1e5;\r\n        \r\n        // store log value of the product        \r\n        double product = 0.0;\r\n        \r\n        // count trailing zero in the product\r\n        int trailing = 0;\r\n        \r\n        for(int i=left;i<=right;i++)\r\n        {\r\n            // update log value of product\r\n            product +=  log10(i);\r\n            \r\n            // multiple value with upper and lower 12 digit\r\n            upper *= i;\r\n            lower *= i;\r\n            \r\n            // keep 12 digit in upper\r\n            while(upper>=Offset)upper/=10;\r\n            \r\n            // remove trailing zeroes\r\n            while(lower%10==0)lower/=10,trailing++;\r\n            \r\n            // keep 12 digits in lower\r\n            lower %= Offset;\r\n        }\r\n        \r\n        // count total digits in product except trailing zeroes\r\n        int digitLength = (int)product + 1 - trailing;\r\n        \r\n        // keep 5 digit in upper and lower\r\n        while(upper>=cutOffset)upper/=10;\r\n        lower %= cutOffset;\r\n        \r\n        int upperInt = upper;\r\n        \r\n        // take digit length digits from upper and lower when digit length <= 10\r\n        if(digitLength<=10)\r\n        {\r\n            // make all digit 0 to tackle missing MSB zeroes in lower\r\n            string result(digitLength,'0');\r\n            string upperStr = to_string(upperInt);\r\n            string lowerStr = to_string(lower);\r\n            \r\n            for(int i=0;i<upperStr.length() && digitLength >0; i++,digitLength--)\r\n                result[i] = upperStr[i];\r\n            \r\n            for(int k=1;!lowerStr.empty() && digitLength >0; digitLength--,k++)\r\n            {\r\n                result[result.length()-k] = lowerStr.back();\r\n                lowerStr.pop_back();\r\n            }\r\n\r\n            \r\n            return result + \"e\" + to_string(trailing);\r\n        } \r\n        else\r\n        {   \r\n           // take upper and lower 5 digits \r\n           string result = to_string(lower);\r\n           return to_string(upperInt) + \"...\" + string(5-result.size(),'0') + result  + \"e\" + to_string(trailing);\r\n        }\r\n    }\r\n};",
    "python": "class Solution:\r\n    def abbreviateProduct(self, left: int, right: int) -> str:\r\n        c2 = c5 = 0\r\n        top12 = tail5 = 1\r\n\r\n        for i in range(left, right+1):\r\n            # count and remove all 2 and 5\r\n            while i % 2 == 0:\r\n                i //= 2\r\n                c2 += 1\r\n            while i % 5 == 0:\r\n                i //= 5\r\n                c5 += 1\r\n\r\n            # track top 12 and last 5\r\n            top12 = int(str(top12 * i)[:12])\r\n            tail5 = tail5 * i % 100000\r\n        \r\n        # multiply the remained 2 or 5\r\n        if c2 > c5:\r\n            for _ in range(c2 - c5):\r\n                top12 = int(str(top12 * 2)[:12])\r\n                tail5 = tail5 * 2 % 100000\r\n        elif c2 < c5:\r\n            for _ in range(c5 - c2):\r\n                top12 = int(str(top12 * 5)[:12])\r\n                tail5 = tail5 * 5 % 100000\r\n\r\n        zero = min(c2, c5)\r\n\r\n        # as is included in top 12, it's easy to tell when d<=10\r\n        if len(str(top12))<=10:\r\n            return str(top12)+'e'+str(zero)\r\n        \r\n        return str(top12)[:5] + '.'*3 + '0'*(5-len(str(tail5)))+str(tail5)+'e'+str(zero)"
  }
}
