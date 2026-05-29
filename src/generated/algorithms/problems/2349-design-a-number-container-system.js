export default {
  "id": 2349,
  "name": "Design a Number Container System",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/design-a-number-container-system",
  "relativeDir": "D/Design a Number Container System",
  "slug": "2349-design-a-number-container-system",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 23,
    "python": 22,
    "javascript": 45
  },
  "languages": {
    "cpp": "// Runtime: 652 ms (Top 85.73%) | Memory: 179 MB (Top 14.04%)\r\nclass NumberContainers {\r\npublic:\r\n    map<int, int> indexToNumber; // stores number corresponding to an index.\r\n    map<int, set<int>>numberToIndex; // stores all the indexes corresponding to a number.\r\n    NumberContainers() {}\r\n\r\n    void change(int index, int number) {\r\n\r\n        if (!indexToNumber.count(index)) { // if there is no number at the given index.\r\n            numberToIndex[number].insert(index); // store index corresponding to the given number\r\n            indexToNumber[index] = number; // store number corresponding to the index.\r\n        }\r\n        else { // Update both map.\r\n\r\n            int num = indexToNumber[index]; // number at given index currently.\r\n\r\n            // remove the index\r\n            numberToIndex[num].erase(index);\r\n            if (numberToIndex[num].empty()) numberToIndex.erase(num);\r\n\r\n            // insert the new number at the given index and store the index corresponding to that number.\r\n            numberToIndex[number].insert(index);\r\n            indexToNumber[index] = number;\r\n        }\r\n    }\r\n\r\n    int find(int number) {\r\n        if (!numberToIndex.count(number)) return -1;\r\n        // returning first element in the set as it will be the smallest index always.\r\n        return *numberToIndex[number].begin();\r\n    }\r\n};",
    "python": "class NumberContainers:\r\n    def __init__(self):\r\n        self.numbersByIndex = {}\r\n        self.numberIndexes = defaultdict(set)\r\n        self.numberIndexesHeap = defaultdict(list)\r\n\r\n    def change(self, index: int, number: int) -> None:\r\n        if index in self.numbersByIndex:\r\n            if number != self.numbersByIndex[index]:\r\n                self.numberIndexes[self.numbersByIndex[index]].remove(index)\r\n                self.numbersByIndex[index] = number\r\n                self.numberIndexes[number].add(index)\r\n                heappush(self.numberIndexesHeap[number], index)\r\n        else:\r\n            self.numbersByIndex[index] = number\r\n            self.numberIndexes[number].add(index)\r\n            heappush(self.numberIndexesHeap[number], index)\r\n\r\n    def find(self, number: int) -> int:\r\n        while self.numberIndexesHeap[number] and self.numberIndexesHeap[number][0] not in self.numberIndexes[number]:\r\n                heappop(self.numberIndexesHeap[number])  # make sure the smallest index in heap is still an index for number\r\n        return self.numberIndexesHeap[number][0] if self.numberIndexesHeap[number] else -1",
    "java": "class NumberContainers {\r\n    \r\n    Map<Integer,TreeSet<Integer>> map;\r\n    Map<Integer,Integer> m;\r\n    public NumberContainers() {\r\n        map=new HashMap<>();\r\n        m=new HashMap<>();\r\n        \r\n    }\r\n    public void change(int index, int number) {\r\n        m.put(index,number);\r\n        if(!map.containsKey(number)) map.put(number,new TreeSet<>());\r\n        map.get(number).add(index);\r\n    }\r\n    \r\n    public int find(int number) {\r\n        if(!map.containsKey(number)) return -1;\r\n        for(Integer a:map.get(number)){\r\n            if(m.get(a)==number) return a;\r\n        }\r\n        return -1;\r\n    }\r\n}",
    "javascript": "// Runtime: 7877 ms (Top 5.15%) | Memory: 105.2 MB (Top 88.00%)\r\n\r\nvar NumberContainers = function() {\r\n    this.obj = {}\r\n    this.global = {}\r\n};\r\n\r\nNumberContainers.prototype.change = function(index, number) {\r\n\r\n    if(this.global[index])\r\n        {\r\n            for(var key in this.obj)\r\n            {\r\n               let ind = this.obj[key].indexOf(index)\r\n                if(ind != -1)\r\n                    {\r\n                         this.obj[key].splice(ind, 1);\r\n                        if(this.obj[number])\r\n                            this.obj[number].push(index);\r\n                        else\r\n                            this.obj[number] = [index];\r\n\r\n                        this.global[index]=1;\r\n                        return;\r\n                    }\r\n            }\r\n        }\r\n\r\n    if(this.obj[number])\r\n        this.obj[number].push(index);\r\n    else\r\n        this.obj[number] = [index];\r\n    this.global[index]=1;\r\n};\r\n\r\nNumberContainers.prototype.find = function(number) {\r\n    if(this.obj[number])\r\n        {\r\n            if(this.obj[number].length == 0)\r\n                return -1\r\n            else\r\n                return Math.min(...this.obj[number])\r\n        }\r\n    return -1;\r\n};"
  }
}
