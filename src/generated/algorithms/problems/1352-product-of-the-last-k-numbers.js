export default {
  "id": 1352,
  "name": "Product of the Last K Numbers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/product-of-the-last-k-numbers",
  "relativeDir": "P/Product of the Last K Numbers",
  "slug": "1352-product-of-the-last-k-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 19,
    "python": 16,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 164 ms (Top 94.71%) | Memory: 69.9 MB (Top 70.96%)\r\nclass ProductOfNumbers {\r\nprivate:\r\n    vector<int> prefixProduct;\r\npublic:\r\n    ProductOfNumbers() {\r\n\r\n    }\r\n\r\n    void add(int num) {\r\n        if(num == 0){\r\n            prefixProduct.clear();\r\n            return;\r\n        }\r\n        if(prefixProduct.empty()){\r\n            prefixProduct.push_back(num);\r\n        }else{\r\n            int prod = prefixProduct[prefixProduct.size() - 1] * num;\r\n            prefixProduct.push_back(prod);\r\n        }\r\n\r\n    }\r\n    int getProduct(int k) {\r\n        if(k > prefixProduct.size()){\r\n            return 0;\r\n        }\r\n        int size = prefixProduct.size();\r\n        if(k == size) return prefixProduct[size - 1];\r\n        int prod = prefixProduct[size - 1] / prefixProduct[size - k - 1];\r\n        return prod;\r\n\r\n    }\r\n};",
    "python": "# Runtime: 732 ms (Top 6.90%) | Memory: 163.2 MB (Top 5.18%)\r\nclass ProductOfNumbers:\r\n    def __init__(self):\r\n        self.prods = [1]\r\n        self.max = 0\r\n\r\n    def add(self, num: int) -> None:\r\n        if num == 0:\r\n            num = 1\r\n            self.max = len(self.prods)\r\n        self.prods.append(self.prods[-1] * num)\r\n\r\n    def getProduct(self, k: int) -> int:\r\n        if k >= len(self.prods) - self.max:\r\n            return 0\r\n        return self.prods[-1] // self.prods[-k-1]",
    "java": "class ProductOfNumbers {\r\n    List<Integer> prefix;\r\n    public ProductOfNumbers() {\r\n        prefix = new ArrayList<>();\r\n        prefix.add(1);\r\n    }\r\n    \r\n    public void add(int num) {\r\n        if(num==0){\r\n            prefix.clear();\r\n            prefix.add(1);\r\n        }\r\n        else prefix.add(num*prefix.get(prefix.size()-1));\r\n    }\r\n    public int getProduct(int k) {\r\n        if(k>=prefix.size()) return 0;\r\n        return prefix.get(prefix.size()-1)/prefix.get(prefix.size()-k-1);\r\n    }\r\n}",
    "javascript": "// Runtime: 295 ms (Top 61.43%) | Memory: 73.80 MB (Top 71.43%)\r\n\r\nvar ProductOfNumbers = function() {\r\n  this.products = [];\r\n};\r\n\r\nProductOfNumbers.prototype.add = function(num) {\r\n  if (num == 0) {\r\n    this.products = [];\r\n  } else {\r\n    const N = this.products.length;\r\n    this.products.push(N == 0 ? num : num * this.products[N - 1]);\r\n  }\r\n};\r\n\r\nProductOfNumbers.prototype.getProduct = function(k) {\r\n  const N = this.products.length;\r\n  if (N - k < 0) return 0;\r\n  if (N == k) return this.products[N - 1];\r\n  return this.products[N - 1] / this.products[N - k - 1];\r\n};"
  }
}
