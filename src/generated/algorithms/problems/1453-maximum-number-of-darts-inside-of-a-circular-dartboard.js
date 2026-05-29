export default {
  "id": 1453,
  "name": "Maximum Number of Darts Inside of a Circular Dartboard",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard",
  "relativeDir": "M/Maximum Number of Darts Inside of a Circular Dartboard",
  "slug": "1453-maximum-number-of-darts-inside-of-a-circular-dartboard",
  "availableLanguages": [
    "python"
  ],
  "defaultLanguage": "python",
  "lineCounts": {
    "python": 71
  },
  "languages": {
    "python": "# Runtime: 275 ms (Top 78.13%) | Memory: 14.5 MB (Top 9.38%)\r\nclass Solution:\r\n    def numPoints(self, points: List[List[int]], r: int) -> int:\r\n\r\n        def getPointsInside(i, r, n):\r\n            # This vector stores alpha and beta and flag\r\n            # is marked true for alpha and false for beta\r\n            angles = []\r\n\r\n            for j in range(n):\r\n\r\n                if i != j and distance[i][j] <= 2 * r:\r\n                    # acos returns the arc cosine of the complex\r\n                    # used for cosine inverse\r\n                    B = math.acos(distance[i][j] / (2 * r))\r\n\r\n                    # arg returns the phase angle of the complex\r\n                    x1, y1 = points[i]\r\n                    x2, y2 = points[j]\r\n\r\n                    A = math.atan2(y1 - y2, x1 - x2)\r\n\r\n                    alpha = A - B\r\n\r\n                    beta = A + B\r\n\r\n                    angles.append((alpha, False))\r\n\r\n                    angles.append((beta, True))\r\n\r\n            # angles vector is sorted and traversed\r\n            angles.sort()\r\n            # count maintains the number of points inside\r\n            # the circle at certain value of theta\r\n            # res maintains the maximum of all count\r\n            cnt, res = 1, 1\r\n            for angle in angles:\r\n                # entry angle\r\n                if angle[1] == False:\r\n                    cnt += 1\r\n                # exit angle\r\n                else:\r\n                    cnt -= 1\r\n\r\n                res = max(cnt, res)\r\n\r\n            return res\r\n\r\n        # Returns count of maximum points that can lie\r\n        # in a circle of radius r.\r\n        #a dis array stores the distance between every\r\n        # pair of points\r\n        n = len(points)\r\n        max_pts = n\r\n        distance = [[0 for _ in range(max_pts)] for _ in range(max_pts)]\r\n        for i in range(n - 1):\r\n            for j in range(i + 1, n):\r\n                # abs gives the magnitude of the complex\r\n                # number and hence the distance between\r\n                # i and j\r\n                x1, y1 = points[i]\r\n                x2, y2 = points[j]\r\n                distance[i][j] = distance[j][i] = sqrt((x1 - x2)**2 + (y1 - y2)**2)\r\n\r\n        # This loop picks a point p\r\n        ans = 0\r\n        # maximum number of points for point arr[i]\r\n        for i in range(n):\r\n            ans = max(ans, getPointsInside(i, r, n))\r\n\r\n        return ans"
  }
}
