export default {
  "id": 2058,
  "name": "Find the Minimum and Maximum Number of Nodes Between Critical Points",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points",
  "relativeDir": "F/Find the Minimum and Maximum Number of Nodes Between Critical Points",
  "slug": "2058-find-the-minimum-and-maximum-number-of-nodes-between-critical-points",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 28,
    "python": 20,
    "javascript": 36
  },
  "languages": {
    "cpp": "// Runtime: 166 ms (Top 87.34%) | Memory: 113.60 MB (Top 78.69%)\r\n\r\nclass Solution {\r\n   public:\r\n    vector<int> nodesBetweenCriticalPoints(ListNode *head) {\r\n        ListNode *curr = head, *prev = NULL;\r\n        int minDistance = INT_MAX, maxDistance = -1, size = 0, preCP = 0,\r\n            first = 0;\r\n        while (curr) {\r\n            if (curr->next && prev) {\r\n                if ((curr->val < prev->val && curr->val < curr->next->val) ||\r\n                    (curr->val > prev->val && curr->val > curr->next->val)) {\r\n                    if (first == 0) {\r\n                        first = size;\r\n                    } else {\r\n                        minDistance = min(minDistance, size - preCP);\r\n                        maxDistance = max(maxDistance, size - first);\r\n                    }\r\n                    preCP = size;\r\n                }\r\n            }\r\n            size++;\r\n            prev = curr;\r\n            curr = curr->next;\r\n        }\r\n        return {minDistance == INT_MAX ? -1 : minDistance, maxDistance};\r\n    }\r\n};",
    "python": "# Runtime: 687 ms (Top 71.4%) | Memory: 56.78 MB (Top 82.0%)\r\n\r\nclass Solution:\r\n    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:\r\n        idx, i = [], 1\r\n        prev, cur = head, head.next\r\n        while cur and cur.next:\r\n            if prev.val < cur.val > cur.next.val or prev.val > cur.val < cur.next.val:\r\n                idx.append(i)\r\n            prev = cur\r\n            cur = cur.next\r\n            i += 1\r\n\r\n        if len(idx) < 2:\r\n            return [-1, -1]\r\n        \r\n        minDist = min(j - i for i, j in pairwise(idx))\r\n        maxDist = idx[-1] - idx[0]\r\n\r\n        return [minDist, maxDist]",
    "java": "// Runtime: 9 ms (Top 51.50%) | Memory: 100.7 MB (Top 69.00%)\r\n\r\nclass Solution {\r\n    public int[] nodesBetweenCriticalPoints(ListNode head) {\r\n        int res[]=new int[]{-1,-1};\r\n        if(head==null||head.next==null||head.next.next==null) return res;\r\n        int minidx=Integer.MAX_VALUE,curridx=-1,lastidx=-1;\r\n        ListNode prev=head,ptr=head.next;\r\n        int idx=1,minD=Integer.MAX_VALUE;\r\n        while(ptr!=null&&ptr.next!=null){\r\n            if((ptr.val>prev.val&&ptr.val>ptr.next.val)||(ptr.val<prev.val&&ptr.val<ptr.next.val)){\r\n                if(idx<minidx) minidx=idx;\r\n                lastidx=curridx;\r\n                curridx=idx;\r\n                if(lastidx!=-1&&curridx-lastidx<minD) minD=curridx-lastidx;\r\n            }\r\n            prev=ptr;\r\n            ptr=ptr.next;\r\n            idx++;\r\n        }\r\n        if(lastidx==-1) return res;\r\n        else{\r\n            res[0]=minD;\r\n            res[1]=curridx-minidx;\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "var nodesBetweenCriticalPoints = function(head) {\r\n    const MAX = Number.MAX_SAFE_INTEGER;\r\n    const MIN = Number.MIN_SAFE_INTEGER;\r\n    \r\n    let currNode = head.next;\r\n    let prevVal = head.val;\r\n    \r\n    let minIdx = MAX;\r\n    let maxIdx = MIN;\r\n    \r\n    let minDist = MAX;\r\n    let maxDist = MIN;\r\n    \r\n    for (let i = 1; currNode.next != null; ++i) {\r\n        const currVal = currNode.val;\r\n        const nextNode = currNode.next;\r\n        const nextVal = nextNode.val;\r\n        \r\n        // Triggers when we have either a maxima or a minima\r\n        if ((prevVal < currVal && currVal > nextVal) || (prevVal > currVal && currVal < nextVal)) {\r\n            if (maxIdx != MIN) minDist = Math.min(minDist, i - maxIdx);\r\n            if (minIdx != MAX) maxDist = Math.max(maxDist, i - minIdx);\r\n            \r\n            if (minIdx == MAX) minIdx = i;\r\n            maxIdx = i;\r\n        }\r\n        \r\n        prevVal = currVal;\r\n        currNode = nextNode;\r\n    }\r\n\r\n    const minRes = minDist === MAX ? -1 : minDist;\r\n    const maxRes = maxDist === MIN ? -1 : maxDist;\r\n    \r\n    return [minRes, maxRes];\r\n};"
  }
}
