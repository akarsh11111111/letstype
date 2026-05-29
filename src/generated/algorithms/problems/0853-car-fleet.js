export default {
  "id": 853,
  "name": "Car Fleet",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/car-fleet",
  "relativeDir": "C/Car Fleet",
  "slug": "0853-car-fleet",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 34,
    "python": 20,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 215 ms (Top 30.21%) | Memory: 78.90 MB (Top 67.67%)\r\n\r\nclass Car{\r\npublic:\r\n    Car(int pos, int speed){\r\n        this->pos = pos;\r\n        this->speed= speed;\r\n    }\r\n    int pos;\r\n    int speed;\r\n};\r\n\r\nclass Solution {\r\npublic:\r\n    int carFleet(int target, vector<int>& position, vector<int>& speed) {\r\n        vector<Car> cars;\r\n        int N = position.size();\r\n        for(int i = 0; i<N; i++){\r\n            cars.emplace_back(position.at(i), speed.at(i));\r\n        }\r\n        \r\n        sort(cars.begin(), cars.end(), [](const Car& a, const Car& b){\r\n            return a.pos<b.pos;\r\n        });\r\n        \r\n        stack<float> mono;\r\n        for(int i = 0; i<N; i++){\r\n            float time = \r\n                (target-cars.at(i).pos)/(float)cars.at(i).speed;\r\n            while(!mono.empty() && time >= mono.top()){\r\n                mono.pop();\r\n            }\r\n            mono.push(time);\r\n        }\r\n        return mono.size();\r\n    }\r\n};",
    "python": "# Runtime: 1570 ms (Top 45.22%) | Memory: 36.4 MB (Top 42.14%)\r\nclass Solution:\r\n    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:\r\n        def computeArrivalTime(curr_pos, curr_speed):\r\n            nonlocal target\r\n            return (target - curr_pos) / curr_speed\r\n            # avoid integer division, as a car may arrive at 5.2s and another at 5.6s\r\n\r\n        cars = list(zip(position, speed))\r\n        cars.sort(key=lambda x: x[0], reverse=True)\r\n        arrival_bound = None # time upper bound\r\n        fleet = 0\r\n        for pos, sp in cars:\r\n            curr_arrival = computeArrivalTime(pos, sp)\r\n            if not arrival_bound or curr_arrival > arrival_bound:\r\n                arrival_bound = curr_arrival\r\n                fleet += 1\r\n        return fleet\r\n    # time O(n logn): sort = (nlogn); loop = (n)\r\n    # space O(n): depend on sort",
    "java": "// Runtime: 186 ms (Top 36.59%) | Memory: 87.4 MB (Top 48.79%)\r\nclass Solution {\r\n    class pair implements Comparable<pair>{\r\n        int pos;\r\n        double time;\r\n        pair(int pos,double time){\r\n            this.pos=pos;\r\n            this.time=time;\r\n        }\r\n        public int compareTo(pair o){\r\n            return o.pos-this.pos;\r\n        }\r\n    }\r\n    public int carFleet(int target, int[] position, int[] speed) {\r\n        double []arr=new double[position.length];\r\n        for(int i=0;i<position.length;i++){\r\n            arr[i]=(target-position[i])*1.0/speed[i];\r\n        }\r\n        PriorityQueue<pair>pq=new PriorityQueue<>();\r\n        for(int i=0;i<position.length;i++){\r\n            pq.add(new pair(position[i],arr[i]));\r\n        }\r\n        double updatetime=0;\r\n        int fleet=0;\r\n        while(pq.size()>0){\r\n            pair rem=pq.remove();\r\n            if(updatetime<rem.time){\r\n               fleet++;\r\n               updatetime=rem.time;\r\n            }\r\n        }\r\n        return fleet;\r\n    }\r\n}",
    "javascript": "var carFleet = function(target, position, speed) {\r\n    for (let i = 0 ; i < position.length ; i ++) {\r\n        position[i] = [target - position[i], speed[i]]\r\n    }\r\n    position.sort((a, b) => { return a[0] - b[0] })\r\n    let count = 1, prev = position[0][0] / position[0][1]\r\n    for (let i = 1 ; i < position.length ; i ++) {\r\n\t\t// if the time taken is longer then it will cause another fleet\r\n        if (position[i][0] / position[i][1] > prev) {\r\n            count ++\r\n            prev = position[i][0] / position[i][1]\r\n        }\r\n    }\r\n    \r\n    return count\r\n};"
  }
}
