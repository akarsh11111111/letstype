export default {
  "id": 1603,
  "name": "Design Parking System",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/design-parking-system",
  "relativeDir": "D/Design Parking System",
  "slug": "1603-design-parking-system",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 10,
    "java": 20,
    "python": 20,
    "javascript": 17
  },
  "languages": {
    "cpp": "class ParkingSystem {\r\npublic: vector<int> vehicle;\r\npublic:\r\n    ParkingSystem(int big, int medium, int small) {\r\n        vehicle = {big, medium, small};\r\n    }\r\n\r\n    bool addCar(int carType) {\r\n        return vehicle[carType - 1]-- > 0;\r\n    }",
    "python": "# Runtime: 111 ms (Top 92.4%) | Memory: 16.70 MB (Top 96.9%)\r\n\r\nclass ParkingSystem:\r\n    def __init__(self, big: int, medium: int, small: int):\r\n        self.vehicle  =[big,medium,small]\r\n\r\n    def addCar(self, carType: int) -> bool:\r\n        if carType == 1 :\r\n            if self.vehicle[0] > 0:\r\n                self.vehicle[0]-=1\r\n                return True\r\n        elif carType == 2:\r\n            if self.vehicle[1] > 0:\r\n                self.vehicle[1]-=1\r\n                return True\r\n        elif carType == 3:\r\n            if self.vehicle[2] > 0:\r\n                self.vehicle[2]-=1\r\n                return True\r\n        return False",
    "java": "// Runtime: 7 ms (Top 99.5%) | Memory: 45.00 MB (Top 40.87%)\r\n\r\nclass ParkingSystem {\r\n    private int slots[] = new int[3];\r\n    public ParkingSystem(int big, int medium, int small) {\r\n        slots[0] = big;\r\n        slots[1] = medium;\r\n        slots[2] = small;\r\n    }\r\n    \r\n    public boolean addCar(int carType) {\r\n        if(slots[carType-1]>0)\r\n        {   \r\n            slots[carType-1]--;\r\n            return true;\r\n            \r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "var ParkingSystem = function(big, medium, small) {\r\n    this.count = [big, medium, small];\r\n};\r\n\r\n/** \r\n * @param {number} carType\r\n * @return {boolean}\r\n */\r\nParkingSystem.prototype.addCar = function(carType) {\r\n  return this.count[carType - 1]-- > 0;\r\n};\r\n\r\n/** \r\n * Your ParkingSystem object will be instantiated and called as such:\r\n * var obj = new ParkingSystem(big, medium, small)\r\n * var param_1 = obj.addCar(carType)\r\n */"
  }
}
