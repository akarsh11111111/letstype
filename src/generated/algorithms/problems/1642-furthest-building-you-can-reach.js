export default {
  "id": 1642,
  "name": "Furthest Building You Can Reach",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/furthest-building-you-can-reach",
  "relativeDir": "F/Furthest Building You Can Reach",
  "slug": "1642-furthest-building-you-can-reach",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "python": 15,
    "javascript": 31
  },
  "languages": {
    "cpp": "// Runtime: 358 ms (Top 7.94%) | Memory: 54 MB (Top 23.61%)\r\nclass Solution {\r\npublic:\r\n    int furthestBuilding(vector<int>& heights, int bricks, int ladders) {\r\n\r\n        // Priority Queue for storing the bricks used in each step in decreasing order (Max at top)\r\n        priority_queue<int> maxB;\r\n\r\n        int i=0, diff =0; // i is used for storing the position and diff for storing difference.\r\n        for(i=0; i<heights.size()-1; i++){ // go till before the last building.\r\n\r\n            //difference of the height of corresponding buildings\r\n            diff = heights[i+1]-heights[i];\r\n\r\n            //If next building is equal or samaller than current then go to next building.\r\n            if(diff <= 0){\r\n                continue;\r\n            }\r\n\r\n            bricks -= diff; //taking the bricks needed for going to next building.\r\n            maxB.push(diff); //adding the number of bricks used in priority queue.\r\n\r\n            // if bricks become negetive then there were not enough bricks. So add a ladder in place of the step where most bricks were used.\r\n            if(bricks < 0){\r\n                bricks += maxB.top(); //taking back bricks from that step\r\n                maxB.pop(); //As max bricks were removed so pop\r\n                ladders--; //1 ladder used\r\n            }\r\n\r\n            //if ladder is negetive then the ladder was not provided to go to next building. So we can't proceed.\r\n            if(ladders < 0) break;\r\n        }\r\n\r\n        // return the present position.\r\n        return i;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def furthestBuilding(self, H: List[int], B: int, L: int) -> int:\r\n        heap = []\r\n        for i in range(len(H) - 1):\r\n            diff = H[i+1] - H[i]\r\n            if diff > 0:\r\n                if L > 0:\r\n                    heappush(heap, diff)\r\n                    L -= 1\r\n                elif heap and diff > heap[0]:\r\n                    heappush(heap, diff)\r\n                    B -= heappop(heap)\r\n                else: B -= diff\r\n                if B < 0: return i\r\n        return len(H) - 1",
    "javascript": "// Runtime: 249 ms (Top 29.29%) | Memory: 59.2 MB (Top 22.22%)\r\nvar furthestBuilding = function(heights, bricks, ladders) {\r\n    const heap = new MaxPriorityQueue({priority: x => x});\r\n\r\n    let i;\r\n\r\n    for(i = 0; i < heights.length-1; i++) {\r\n        if(heights[i] >= heights[i+1]) continue;\r\n\r\n        const diff = heights[i+1] - heights[i];\r\n\r\n        // if not enough bricks are left\r\n        if(diff > bricks) {\r\n            // if not enough ladders are left\r\n            if(ladders === 0) break;\r\n\r\n            // if the max bricks used at once > current jump\r\n            // replace the max bricks with a ladder and use those bricks for current jump\r\n            // else use ladder for the current jump\r\n            if(!heap.isEmpty() && heap.front().element > diff) {\r\n                bricks += heap.dequeue().element - diff;\r\n                heap.enqueue(diff)\r\n            }\r\n            ladders--;\r\n        } else { // greedly use bricks when possible\r\n            bricks -= diff;\r\n            heap.enqueue(diff);\r\n        }\r\n    }\r\n    return i;\r\n};"
  }
}
