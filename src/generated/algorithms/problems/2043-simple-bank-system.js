export default {
  "id": 2043,
  "name": "Simple Bank System",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/simple-bank-system",
  "relativeDir": "S/Simple Bank System",
  "slug": "2043-simple-bank-system",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 32,
    "python": 43,
    "javascript": 55
  },
  "languages": {
    "cpp": "class Bank {\r\npublic:\r\n\tvector<long long> temp;\r\n\tint n;\r\n\tBank(vector<long long>& balance) {\r\n\t\ttemp=balance;\r\n\t\tn=balance.size();\r\n\t}\r\n\r\n\tbool transfer(int account1, int account2, long long money) {\r\n\t\tif(account1<=n && account2<=n && account1>0 && account2>0 && temp[account1-1]>=money){\r\n\t\t\ttemp[account1-1]-=money;\r\n\t\t\ttemp[account2-1]+=money;\r\n\t\t\treturn true;\r\n\t\t}\r\n\t\treturn false;\r\n\t}\r\n\r\n\tbool deposit(int account, long long money) {\r\n\t\tif(account>n || account<0)return false;\r\n\t\ttemp[account-1]+=money;\r\n\t\treturn true;\r\n\t}\r\n\r\n\tbool withdraw(int account, long long money) {\r\n\t\tif(account<=n && account>0 && temp[account-1]>=money){\r\n\t\t\ttemp[account-1]-=money;\r\n\t\t\treturn true;\r\n\t\t}\r\n\t\treturn false;\r\n\t}\r\n};",
    "python": "# Runtime: 1834 ms (Top 5.30%) | Memory: 43.9 MB (Top 45.70%)\r\nclass Bank:\r\n\r\n    def __init__(self, bal: List[int]):\r\n        self.store = bal # storage list\r\n\r\n    def transfer(self, a1: int, a2: int, money: int) -> bool:\r\n        try:\r\n            # checking if both accounts exist. and if the transaction would be valid\r\n            if self.store[a1 - 1] >= money and self.store[a2 - 1] >= 0:\r\n                # performing the transaction\r\n                self.store[a1 - 1] -= money\r\n                self.store[a2 - 1] += money\r\n                return True\r\n            else:\r\n                # retrning false on invalid transaction\r\n                return False\r\n        except:\r\n            # returning false when accounts don't exist\r\n            return False\r\n\r\n    def deposit(self, ac: int, mn: int) -> bool:\r\n        try:\r\n            # if account exists performing transaction\r\n            self.store[ac - 1] += mn\r\n            return True\r\n        except:\r\n            # returning false when account doesn't exist\r\n            return False\r\n\r\n    def withdraw(self, ac: int, mn: int) -> bool:\r\n        try:\r\n            # checking if transaction is valid\r\n            if self.store[ac - 1] >= mn:\r\n                # performing the transaction\r\n                self.store[ac - 1] -= mn\r\n                return True\r\n            else:\r\n                # returning false in case on invalid transaction\r\n                return False\r\n        except:\r\n            # returning false when account doesn't exist\r\n            return False",
    "java": "// Runtime: 265 ms (Top 12.10%) | Memory: 117.3 MB (Top 39.86%)\r\nclass Bank {\r\n\r\n    int N;\r\n    long[] balance;\r\n    public Bank(long[] balance) {\r\n        this.N = balance.length;\r\n        this.balance = balance;\r\n    }\r\n\r\n    public boolean transfer(int account1, int account2, long money) {\r\n        if(account1 < 1 || account1 > N || account2 < 1 || account2 > N || balance[account1 - 1] < money)\r\n            return false;\r\n        balance[account1 - 1] -= money;\r\n        balance[account2 - 1] += money;\r\n        return true;\r\n    }\r\n\r\n    public boolean deposit(int account, long money) {\r\n        if(account < 1 || account > N)\r\n            return false;\r\n        balance[account - 1] += money;\r\n        return true;\r\n    }\r\n\r\n    public boolean withdraw(int account, long money) {\r\n        if(account < 1 || account > N || balance[account - 1] < money)\r\n            return false;\r\n        balance[account - 1] -= money;\r\n        return true;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} balance\r\n */\r\nvar Bank = function(balance) {\r\n   this.arr = balance; \r\n};\r\n\r\n/** \r\n * @param {number} account1 \r\n * @param {number} account2 \r\n * @param {number} money\r\n * @return {boolean}\r\n */\r\nBank.prototype.transfer = function(account1, account2, money) {\r\n    if (this.arr[account1-1] >= money && this.arr.length >= account1 && this.arr.length >= account2) {\r\n        this.arr[account1-1] -= money;\r\n        this.arr[account2-1] += money;\r\n        return true;\r\n    }\r\n    return false;\r\n};\r\n\r\n/** \r\n * @param {number} account \r\n * @param {number} money\r\n * @return {boolean}\r\n */\r\nBank.prototype.deposit = function(account, money) {\r\n    if (this.arr.length >= account) {\r\n        this.arr[account-1] += money;\r\n        return true;\r\n    }\r\n    return false;\r\n};\r\n\r\n/** \r\n * @param {number} account \r\n * @param {number} money\r\n * @return {boolean}\r\n */\r\nBank.prototype.withdraw = function(account, money) {\r\n    if (this.arr.length >= account && this.arr[account-1] >= money) {\r\n        this.arr[account-1] -= money\r\n        return true;\r\n    }\r\n    return false;\r\n};\r\n\r\n/** \r\n * Your Bank object will be instantiated and called as such:\r\n * var obj = new Bank(balance)\r\n * var param_1 = obj.transfer(account1,account2,money)\r\n * var param_2 = obj.deposit(account,money)\r\n * var param_3 = obj.withdraw(account,money)\r\n */"
  }
}
