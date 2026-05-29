export default {
  "id": 621,
  "name": "Task Scheduler",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/task-scheduler",
  "relativeDir": "T/Task Scheduler",
  "slug": "0621-task-scheduler",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "python": 22,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution:\r\n    def leastInterval(self, tasks: List[str], n: int) -> int:\r\n        max_heap = []\r\n        queue = deque()\r\n        word_count = defaultdict(int)\r\n        timer = 0\r\n        for i in range(len(tasks)):\r\n            word_count[tasks[i]] += 1\r\n        for _ , val in word_count.items():\r\n            heappush(max_heap, -1*val)\r\n        while max_heap or queue:\r\n            timer += 1\r\n            if max_heap:\r\n                v = -1* heappop(max_heap)\r\n                v -= 1\r\n                if v:\r\n                    queue.append((v, timer+n))\r\n            if queue and queue[0][1] == timer:\r\n                heappush(max_heap, -1*queue.popleft()[0])\r\n        return timer",
    "python": "# Runtime: 1043 ms (Top 25.15%) | Memory: 14.3 MB (Top 64.15%)\r\n\r\nclass Solution:\r\n    def leastInterval(self, tasks: List[str], n: int) -> int:\r\n        max_heap = []\r\n        queue = deque()\r\n        word_count = defaultdict(int)\r\n        timer = 0\r\n        for i in range(len(tasks)):\r\n            word_count[tasks[i]] += 1\r\n        for _ , val in word_count.items():\r\n            heappush(max_heap, -1*val)\r\n        while max_heap or queue:\r\n            timer += 1\r\n            if max_heap:\r\n                v = -1* heappop(max_heap)\r\n                v -= 1\r\n                if v:\r\n                    queue.append((v, timer+n))\r\n            if queue and queue[0][1] == timer:\r\n                heappush(max_heap, -1*queue.popleft()[0])\r\n        return timer",
    "javascript": "class Solution:\r\n    def leastInterval(self, tasks: List[str], n: int) -> int:\r\n        max_heap = []\r\n        queue = deque()\r\n        word_count = defaultdict(int)\r\n        timer = 0\r\n        for i in range(len(tasks)):\r\n            word_count[tasks[i]] += 1\r\n        for _ , val in word_count.items():\r\n            heappush(max_heap, -1*val)\r\n        while max_heap or queue:\r\n            timer += 1\r\n            if max_heap:\r\n                v = -1* heappop(max_heap)\r\n                v -= 1\r\n                if v:\r\n                    queue.append((v, timer+n))\r\n            if queue and queue[0][1] == timer:\r\n                heappush(max_heap, -1*queue.popleft()[0])\r\n        return timer"
  }
}
