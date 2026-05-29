export default {
  "id": 1357,
  "name": "Apply Discount Every n Orders",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/apply-discount-every-n-orders",
  "relativeDir": "A/Apply Discount Every n Orders",
  "slug": "1357-apply-discount-every-n-orders",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 39,
    "python": 35,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 178 ms (Top 77.65%) | Memory: 121.20 MB (Top 12.35%)\r\n\r\nclass Cashier {\r\npublic:\r\n    int n;\r\n    int dis;\r\n    unordered_map<int,int>price;\r\n    int idx=0;\r\n    Cashier(int n, int discount, vector<int>& products, vector<int>& prices) {\r\n        this->n=n;\r\n        this->dis=discount;\r\n        for(int i=0;i<products.size();i++){\r\n            price[products[i]]=prices[i];\r\n        }\r\n    }\r\n    \r\n    double getBill(vector<int> product, vector<int> amount) {\r\n        double res=0;\r\n        idx++;\r\n        for(int i=0;i<product.size();i++){\r\n            res+=(price[product[i]]*amount[i]);\r\n        }\r\n        if(idx%n==0){\r\n            return (res*(100-dis))/100;\r\n        }\r\n        return res;\r\n    }\r\n};\r\n\r\n/**\r\n * Your Cashier object will be instantiated and called as such:\r\n * Cashier* obj = new Cashier(n, discount, products, prices);\r\n * double param_1 = obj->getBill(product,amount);\r\n */",
    "python": "class Cashier:\r\n\r\n    def __init__(self, n: int, discount: int, products: List[int], prices: List[int]):\r\n        \r\n        self.n = n \r\n        self.discount = discount \r\n        self.price = { }\r\n        self.customer = 0 \r\n        \r\n        for i in range(len(products))  : \r\n            self.price[products[i]] = prices[i]\r\n\r\n    def getBill(self, product: List[int], amount: List[int]) -> float:\r\n        \r\n        self.customer += 1\r\n        \r\n        bill = 0 \r\n        \r\n        for i in range(len(product)) : \r\n            bill += amount[i] * self.price[product[i]]\r\n        \r\n        \r\n        if self.customer == self.n : \r\n            bill = bill * (1 - self.discount / 100)\r\n            self.customer = 0 \r\n            \r\n            \r\n        return bill\r\n            \r\n        \r\n\r\n\r\n# Your Cashier object will be instantiated and called as such:\r\n# obj = Cashier(n, discount, products, prices)\r\n# param_1 = obj.getBill(product,amount)",
    "java": "// Runtime: 99 ms (Top 93.75%) | Memory: 76.80 MB (Top 6.6%)\r\n\r\nclass Cashier {\r\n    private final int[] prices;\r\n    private final int n;\r\n    private final int discount;\r\n    private int customerNumber;\r\n\r\n    public Cashier(int n, int discount, int[] products, int[] prices) {\r\n        this.prices = new int[200];\r\n\r\n        for(int i = 0; i < products.length; ++i)\r\n            this.prices[products[i] - 1] = prices[i];\r\n\r\n        this.n = n;\r\n        this.discount = discount;\r\n        this.customerNumber = 1;\r\n    }\r\n    \r\n    public double getBill(int[] product, int[] amount) {\r\n        double sum = 0;\r\n\r\n        for(int i = 0; i < product.length; ++i)\r\n            sum += this.prices[product[i] - 1] * amount[i];\r\n\r\n        if(this.customerNumber != 0 && this.customerNumber % n == 0)\r\n            sum *= (double) (100 - this.discount) / 100;\r\n\r\n        this.customerNumber++;\r\n\r\n        return sum;\r\n    }\r\n}\r\n\r\n/**\r\n * Your Cashier object will be instantiated and called as such:\r\n * Cashier obj = new Cashier(n, discount, products, prices);\r\n * double param_1 = obj.getBill(product,amount);\r\n */",
    "javascript": "// Runtime: 324 ms (Top 7.14%) | Memory: 58.2 MB (Top 21.43%)\r\nvar Cashier = function(n, discount, products, prices) {\r\n    this.n = n;\r\n    this.cc = 0;\r\n    this.discount = (100 - discount) / 100;\r\n    this.products = new Map();\r\n    const len = products.length;\r\n    for(let i = 0; i < len; i++) {\r\n        this.products.set(products[i], prices[i]);\r\n    }\r\n};\r\n\r\nCashier.prototype.getBill = function(product, amount) {\r\n    let total = 0, len = product.length;\r\n    for(let i = 0; i < len; i++) {\r\n        total += amount[i] * this.products.get(product[i]);\r\n    }\r\n    this.cc++;\r\n    if(this.cc % this.n == 0) {\r\n        total = total * this.discount;\r\n        this.cc = 0;\r\n    }\r\n    return total;\r\n};"
  }
}
