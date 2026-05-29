export default {
  "id": 1845,
  "name": "Seat Reservation Manager",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/seat-reservation-manager",
  "relativeDir": "S/Seat Reservation Manager",
  "slug": "1845-seat-reservation-manager",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 20,
    "python": 10,
    "javascript": 47
  },
  "languages": {
    "cpp": "// Runtime: 730 ms (Top 38.78%) | Memory: 147.5 MB (Top 81.13%)\r\nclass SeatManager {\r\npublic:\r\n    priority_queue<int, vector<int>, greater<int> > pq;\r\n    SeatManager(int n) {\r\n        for(int i = 1; i <= n; i++) pq.push(i);\r\n    }\r\n\r\n    int reserve() {\r\n        int top = pq.top(); pq.pop();\r\n        return top;\r\n    }\r\n\r\n    void unreserve(int seatNumber) {\r\n        pq.push(seatNumber);\r\n    }\r\n};",
    "python": "class SeatManager:\r\n    def __init__(self, n: int):\r\n        self.lis = list(range(1,n+1))\r\n    def reserve(self) -> int:\r\n        mini = min(self.lis)\r\n        self.lis.remove(mini)\r\n        return mini\r\n\r\n    def unreserve(self, seatNumber: int) -> None:\r\n        self.lis.append(seatNumber)",
    "java": "// Runtime: 88 ms (Top 72.91%) | Memory: 105 MB (Top 67.49%)\r\nclass SeatManager {\r\n    PriorityQueue<Integer> pq;\r\n    int count;\r\n    public SeatManager(int n) {\r\n        count = 1;\r\n        pq = new PriorityQueue();\r\n    }\r\n\r\n    public int reserve() {\r\n        if(pq.size()==0)\r\n            return count++;\r\n\r\n        return pq.poll();\r\n    }\r\n\r\n    public void unreserve(int seatNumber) {\r\n        pq.add(seatNumber);\r\n    }\r\n}",
    "javascript": "var SeatManager = function(n) {\r\n    \r\n    this.min = 1\r\n    this.n = n\r\n    this.seat = []\r\n    \r\n};\r\n\r\nSeatManager.prototype.reserve = function() {\r\n\r\n    let res\r\n\t\r\n    if( !this.seat[this.min] ){\r\n        \r\n        res = this.min\r\n        this.min = this.n < this.min ? NaN : this.min + 1\r\n\r\n    } else {\r\n        \r\n        res = this.min\r\n        this.min = this.seat[this.min]\r\n        \r\n    }\r\n    \r\n    return res\r\n};\r\n\r\nSeatManager.prototype.unreserve = function(seatNumber) {\r\n    \r\n    if (this.min < seatNumber ) {\r\n        \r\n        let pre_inx = this.min \r\n        let next_inx = this.seat[this.min]\r\n        \r\n        while(next_inx < seatNumber){\r\n            pre_inx = next_inx\r\n            next_inx = this.seat[next_inx]\r\n        }\r\n        \r\n        [ this.seat[pre_inx], this.seat[seatNumber] ] = [ seatNumber, this.seat[pre_inx] ]\r\n        \r\n    } else {\r\n        \r\n        [ this.seat[seatNumber], this.min ] = [ this.min, seatNumber ]\r\n        \r\n    }\r\n};"
  }
}
