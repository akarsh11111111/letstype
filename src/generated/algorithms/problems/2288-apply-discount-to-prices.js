export default {
  "id": 2288,
  "name": "Apply Discount to Prices",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/apply-discount-to-prices",
  "relativeDir": "A/Apply Discount to Prices",
  "slug": "2288-apply-discount-to-prices",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 22,
    "python": 12,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string discountPrices(string sentence, int discount) {\r\n        \r\n\t\t// doit is a function\r\n        auto doit = [&](string word) {\r\n\t\t\r\n            int n(size(word));\r\n            if (word[0] != '$' or n == 1)   return word;\r\n            \r\n            long long price = 0;\r\n            for (int i=1; i<n; i++) {\r\n                if (!isdigit(word[i]))  return word;\r\n                price = price*10 + (word[i]-'0');\r\n            }\r\n            \r\n\t\t\tstringstream ss2;\r\n            double discountPercentage = (100 - discount) / 100.0;\r\n            ss2 << fixed << setprecision(2) << (discountPercentage * price);\r\n            return \"$\" + ss2.str();\r\n        };\r\n        \r\n        string word, res;\r\n        stringstream ss(sentence);\r\n        \r\n        while (ss >> word) {\r\n            res += doit(word)+\" \";\r\n        }\r\n        \r\n        res.pop_back();\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def discountPrices(self, sentence: str, discount: int) -> str:\r\n        s = sentence.split() # convert to List to easily update\r\n        m = discount / 100 \r\n        for i,word in enumerate(s):\r\n            if word[0] == \"$\" and word[1:].isdigit(): # Check whether it is in correct format\r\n                num = int(word[1:]) * (1-m) # discounted price\r\n                w = \"$\" + \"{:.2f}\".format(num) #correctly format\r\n                s[i] = w #Change inside the list\r\n        \r\n        return \" \".join(s) #Combine the updated list\r\n\t\t```",
    "java": "class Solution {\r\n\r\n    public String discountPrices(String sentence, int discount) {\r\n        String x[] = sentence.split(\" \");\r\n        StringBuilder sb = new StringBuilder();\r\n        for (String s : x) {\r\n            if (isPrice(s)) sb.append(calc(Double.parseDouble(s.substring(1)), discount) + \" \"); \r\n            else sb.append(s + \" \");\r\n        }\r\n        sb.deleteCharAt(sb.length() - 1);\r\n        return sb.toString();\r\n    }\r\n\r\n    boolean isPrice(String s) {\r\n        return s.startsWith(\"$\") && s.substring(1).matches(\"\\\\d+\");\r\n    }\r\n\r\n    String calc(double num, double discount) {\r\n        double ans = num - (double) ((double) num * discount / 100.00);\r\n        return \"$\" + String.format(\"%.2f\", ans);\r\n    }\r\n}",
    "javascript": "var discountPrices = function(sentence, discount) {\r\n    let isNum = (num) => {\r\n        if(num.length <= 1 || num[0] != '$') return false;\r\n        for(let i = 1; i < num.length; ++i)\r\n            if(!(num[i] >= '0' && num[i] <= '9'))\r\n                return false;\r\n        return true;\r\n    };\r\n    let x = sentence.split(' ');\r\n    discount = 1 - (discount/100);\r\n    for(let i = 0; i < x.length; ++i) \r\n        !isNum(x[i]) || (x[i] = `$${(Number(x[i].slice(1))*discount).toFixed(2)}`);\r\n    return x.join(' ');\r\n};"
  }
}
