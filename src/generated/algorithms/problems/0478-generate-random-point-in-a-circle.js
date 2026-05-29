export default {
  "id": 478,
  "name": "Generate Random Point in a Circle",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/generate-random-point-in-a-circle",
  "relativeDir": "G/Generate Random Point in a Circle",
  "slug": "0478-generate-random-point-in-a-circle",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 21,
    "python": 18,
    "javascript": 15
  },
  "languages": {
    "cpp": "\r\nclass Solution {\r\npublic:\r\n    double r,x,y;\r\n    Solution(double radius, double x_center, double y_center) {\r\n        r = radius;\r\n        x = x_center;\r\n        y = y_center;\r\n    }\r\n    \r\n    vector<double> randPoint() {\r\n        double x_r = ((double)rand()/RAND_MAX * (2*r)) + (x-r);\r\n        double y_r = ((double)rand()/RAND_MAX * (2*r)) + (y-r);\r\n        \r\n        while(solve(x_r,y_r,x,y)>=r*r)\r\n        {\r\n            x_r = ((double)rand()/RAND_MAX * (2*r)) + (x-r);\r\n            y_r = ((double)rand()/RAND_MAX * (2*r)) + (y-r);\r\n        }\r\n        \r\n        return {x_r,y_r};\r\n    }\r\n    \r\n    double solve(double x_r,double y_r,double x,double y)\r\n    {\r\n        return (x-x_r)*(x-x_r) + (y-y_r)*(y-y_r);\r\n    }\r\n};",
    "python": "class Solution:\r\n\r\n    def __init__(self, radius: float, x_center: float, y_center: float):\r\n        self.rad = radius\r\n        self.xc = x_center\r\n        self.yc = y_center\r\n\r\n    def randPoint(self) -> List[float]:\r\n        while True:\r\n            xg=self.xc+random.uniform(-1, 1)*self.rad*2\r\n            yg=self.yc+random.uniform(-1, 1)*self.rad*2\r\n            if (xg-self.xc)**2 + (yg-self.yc)**2 <= self.rad**2:\r\n                return [xg, yg]\r\n\r\n\r\n# Your Solution object will be instantiated and called as such:\r\n# obj = Solution(radius, x_center, y_center)\r\n# param_1 = obj.randPoint()",
    "java": "class Solution {\r\n    double radius;\r\n    double x_center;\r\n    double y_center;\r\n    Random r=new Random();\r\n    public Solution(double radius, double x_center, double y_center) {\r\n        this.radius=radius;\r\n        this.x_center=x_center;\r\n        this.y_center=y_center;\r\n    }\r\n    \r\n    public double[] randPoint() {\r\n        double angle=r.nextDouble(Math.PI*2);\r\n\t\t//For probability is inversely proportional to radius, we use sqrt of random number.\r\n        double rad=Math.sqrt(r.nextDouble())*radius;\r\n        double[] ret=new double[2];\r\n        ret[0]=rad*Math.cos(angle)+x_center;\r\n        ret[1]=rad*Math.sin(angle)+y_center;\r\n        return ret;\r\n    }\r\n}",
    "javascript": "// Runtime: 131 ms (Top 92.86%) | Memory: 68.70 MB (Top 7.14%)\r\n\r\nvar Solution = function(radius, x_center, y_center) {\r\n    this.radius = radius;\r\n    this.x_center = x_center;\r\n    this.y_center = y_center;\r\n};\r\n\r\nSolution.prototype.randPoint = function() {\r\n    let r = this.radius * Math.sqrt(Math.random());\r\n    let theta = Math.random() * 2 * Math.PI;\r\n    let x = this.x_center + r * Math.cos(theta);\r\n    let y = this.y_center + r * Math.sin(theta);\r\n    return [x, y];\r\n};"
  }
}
