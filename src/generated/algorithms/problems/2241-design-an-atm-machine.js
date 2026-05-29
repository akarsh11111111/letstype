export default {
  "id": 2241,
  "name": "Design an ATM Machine",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/design-an-atm-machine",
  "relativeDir": "D/Design an ATM Machine",
  "slug": "2241-design-an-atm-machine",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 27,
    "python": 21,
    "javascript": 51
  },
  "languages": {
    "cpp": "// Runtime: 164 ms (Top 93.21%) | Memory: 101.50 MB (Top 99.09%)\r\n\r\nclass ATM {\r\npublic:\r\n    long long bank[5] = {}, val[5] = {20, 50, 100, 200, 500};\r\n    void deposit(vector<int> banknotesCount) {\r\n        for (int i = 0; i < 5; ++i)\r\n            bank[i] += banknotesCount[i];\r\n    }\r\n    vector<int> withdraw(int amount) {\r\n        vector<int> take(5);\r\n        for (int i = 4; i >= 0; --i) {\r\n            take[i] = min(bank[i], amount / val[i]);\r\n            amount -= take[i] * val[i];\r\n        }\r\n        if (amount)\r\n            return { -1 };\r\n        for (int i = 0; i < 5; ++i)\r\n            bank[i] -= take[i];            \r\n        return take;\r\n    }\r\n};",
    "python": "// Runtime: 906 ms (Top 67.28%) | Memory: 18 MB (Top 21.66%)\r\nclass ATM:\r\n    def __init__(self):\r\n        self.cash = [0] * 5\r\n        self.values = [20, 50, 100, 200, 500]\r\n\r\n    def deposit(self, banknotes_count: List[int]) -> None:\r\n        for i, n in enumerate(banknotes_count):\r\n            self.cash[i] += n\r\n\r\n    def withdraw(self, amount: int) -> List[int]:\r\n        res = []\r\n        for val, n in zip(self.values[::-1], self.cash[::-1]):\r\n            need = min(n, amount // val)\r\n            res = [need] + res\r\n            amount -= (need * val)\r\n        if amount == 0:\r\n            self.deposit([-x for x in res])\r\n            return res\r\n        else:\r\n            return [-1]",
    "java": "class ATM {\r\n\tlong[] notes = new long[5];                                                // Note: use long[] instead of int[] to avoid getting error in large testcases\r\n\tint[] denoms;\r\n\tpublic ATM() {\r\n\t\tdenoms = new int[]{ 20,50,100,200,500 };                               // create an array to represent money value.\r\n\t}\r\n\r\n\tpublic void deposit(int[] banknotesCount) {\r\n\t\tfor(int i = 0; i < banknotesCount.length; i++){\r\n\t\t\tnotes[i] += banknotesCount[i];                                       // add new deposit money to existing\r\n\t\t}\r\n\t}\r\n\r\n\tpublic int[] withdraw(int amount) {                 \r\n\t\tint[] result = new int[5];                                              // create result array to store quantity of each notes we will be using to withdraw \"amount\"\r\n\t\tfor(int i = 4; i >= 0; i--){\r\n\t\t\tif(amount >= denoms[i] ){                                              \r\n\t\t\t\tint quantity = (int) Math.min(notes[i], amount / denoms[i]);     // pick the minimum quanity. because if say, amount/denoms[i] gives 3 but you only have 1 note. so you have to use 1 only instead of 3 \r\n\t\t\t\tamount -= denoms[i] * quantity;                                 // amount left = 100\r\n\t\t\t\tresult[i] = quantity;\r\n\t\t\t}\r\n\t\t}\r\n\t\tif(amount != 0){ return new int[]{-1}; }\r\n\t\tfor(int i = 0; i < 5; i++){  notes[i] -= result[i];  }                   // deduct the quantity we have used.\r\n\t\treturn result;\r\n\t}\r\n}",
    "javascript": "// Runtime: 617 ms (Top 12.20%) | Memory: 63.7 MB (Top 39.02%)\r\n\r\nvar ATM = function() {\r\n    this.bankNotes = new Array(5).fill(0)\r\n    this.banksNotesValue = [20, 50, 100, 200, 500]\r\n};\r\n\r\n/**\r\n * @param {number[]} banknotesCount\r\n * @return {void}\r\n */\r\nATM.prototype.deposit = function(banknotesCount) {\r\n    for (let i = 0; i < 5; i++) {\r\n       this.bankNotes[i] += banknotesCount[i]\r\n    }\r\n    return this.bankNotes\r\n};\r\n\r\n/**\r\n * @param {number} amount\r\n * @return {number[]}\r\n */\r\nATM.prototype.withdraw = function(amount) {\r\n    let remain = amount\r\n    let usedBankNotes = new Array(5).fill(0)\r\n    let temp = [...this.bankNotes]\r\n    for (let i = 4; i >= 0; i--) {\r\n        if (temp[i] > 0 && remain >= this.banksNotesValue[i]) {\r\n            const bankNote = Math.floor(remain / this.banksNotesValue[i])\r\n            const maxCanUse = Math.min(temp[i], bankNote)\r\n            usedBankNotes[i] = maxCanUse\r\n            temp[i] -= maxCanUse\r\n\r\n            remain -= maxCanUse * this.banksNotesValue[i]\r\n        }\r\n    }\r\n\r\n    if (remain > 0) {\r\n        return [-1]\r\n    } else {\r\n        this.bankNotes = temp\r\n        return usedBankNotes\r\n    }\r\n};\r\n\r\n/**\r\n * Your ATM object will be instantiated and called as such:\r\n * var obj = new ATM()\r\n * obj.deposit(banknotesCount)\r\n * var param_2 = obj.withdraw(amount)\r\n */"
  }
}
