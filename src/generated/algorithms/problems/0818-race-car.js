export default {
  "id": 818,
  "name": "Race Car",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/race-car",
  "relativeDir": "R/Race Car",
  "slug": "0818-race-car",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 48,
    "java": 43,
    "python": 17,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 27 ms (Top 58.02%) | Memory: 9.5 MB (Top 46.80%)\r\nstruct Position {\r\n    long long int pos;\r\n    long long int speed;\r\n    long long int moves;\r\n\r\n    Position(int pos, int speed, int moves) {\r\n        this -> pos = pos;\r\n        this -> speed = speed;\r\n        this -> moves = moves;\r\n    }\r\n};\r\n\r\nclass Solution {\r\npublic:\r\n    int racecar(int target) {\r\n        queue<Position> q;\r\n        Position p(0, 1, 0);\r\n        q.push(p);\r\n\r\n        set<pair<long long int, long long int>> s;\r\n\r\n        while(!q.empty()) {\r\n            Position u = q.front();\r\n            q.pop();\r\n\r\n            if(u.pos == target) return u.moves;\r\n\r\n            if(s.find({u.pos, u.speed}) != s.end()) continue;\r\n            else {\r\n                s.insert({u.pos, u.speed});\r\n\r\n                // only cases when you might need to move backwards\r\n                if((u.pos + u.speed > target && u.speed > 0) ||\r\n                   (u.pos + u.speed < target && u.speed < 0)) {\r\n                    long long int speed = u.speed > 0 ? -1 : 1;\r\n                    Position bkwd(u.pos, speed, u.moves + 1);\r\n                    q.push(bkwd);\r\n                }\r\n\r\n                Position fwd(u.pos + u.speed, 2 * u.speed, u.moves + 1);\r\n                q.push(fwd);\r\n            }\r\n        }\r\n\r\n        return -1;\r\n    }\r\n};",
    "python": "# Runtime: 95 ms (Top 46.38%) | Memory: 14.3 MB (Top 75.93%)\r\nclass Solution:\r\n    def racecar(self, target: int) -> int:\r\n        q = [(0, 1)]\r\n        steps = 0\r\n\r\n        while q:\r\n            num = len(q)\r\n            for i in range(num):\r\n                pos, speed = q.pop(0)\r\n                if pos == target:\r\n                    return steps\r\n                q.append((pos+speed, speed*2))\r\n                rev_speed = -1 if speed > 0 else 1\r\n                if (pos+speed) < target and speed < 0 or (pos+speed) > target and speed > 0:\r\n                    q.append((pos, rev_speed))\r\n            steps += 1",
    "java": "// Runtime: 8 ms (Top 86.11%) | Memory: 41.5 MB (Top 82.95%)\r\nclass Solution {\r\n    public int racecar(int target) {\r\n        Queue<int[]> queue = new LinkedList<>();\r\n        queue.add(new int[]{0, 1, 0});\r\n        Set<String> visited = new HashSet<>();\r\n\r\n        while(!queue.isEmpty()){\r\n            int[] item = queue.poll();\r\n            int currPos = item[0];\r\n            int currSpeed = item[1];\r\n            int distance = item[2];\r\n\r\n            if(currPos == target)\r\n                return distance;\r\n\r\n            // Choosing A\r\n            int nextPos = currPos + currSpeed;\r\n            int nextSpeed = currSpeed * 2;\r\n            String posSpeed = new StringBuilder().append(nextPos).append(\",\").append(nextSpeed).toString();\r\n\r\n            // If the particular state (position & speed) is not encountered earlier then we explore that state\r\n            // And we also check if the nextPos is not beyond twice the size of target, then there is no point in exploring that route\r\n            if(!visited.contains(posSpeed) && Math.abs(nextPos) < 2 * target){\r\n                visited.add(posSpeed);\r\n                queue.add(new int[]{nextPos, nextSpeed, distance + 1});\r\n            }\r\n\r\n            // Choosing R\r\n            // We go in reverse only when we are moving away from the target in the positive or in the negative direction\r\n            if((currPos + currSpeed > target && currSpeed > 0) || (currPos + currSpeed < target && currSpeed < 0)) {\r\n                nextSpeed = currSpeed > 0 ? -1 : 1;\r\n                posSpeed = new StringBuilder().append(currPos).append(\",\").append(nextSpeed).toString();\r\n\r\n                if(!visited.contains(posSpeed) && Math.abs(currPos) < 2 * target){\r\n                    visited.add(posSpeed);\r\n                    queue.add(new int[]{currPos, nextSpeed, distance + 1});\r\n                }\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n}",
    "javascript": "// Runtime: 56 ms (Top 92.31%) | Memory: 46.30 MB (Top 65.38%)\r\n\r\n/**\r\n * @param {number} target\r\n * @return {number}\r\n */\r\nvar racecar = function(target) {    \r\n    const queue = [{position: 0, speed: 1, sequence: \"\"}]\r\n\r\n    while(queue.length){\r\n        let { position, speed, sequence } = queue.shift()\r\n        \r\n        if(position === target) return sequence.length\r\n\r\n        const newPosition = position + speed\r\n\r\n        queue.push({ position: newPosition, speed: speed*2, sequence: sequence + 'A' })\r\n        \r\n        if(newPosition > target && speed > 0 || newPosition < target && speed < 0) {\r\n            queue.push({ sequence: sequence + 'R', position, speed: Math.sign(speed) === 1 ? -1:1 })\r\n        }\r\n    }\r\n\r\n    return 0\r\n};"
  }
}
