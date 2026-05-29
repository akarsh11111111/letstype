export default {
  "id": 754,
  "name": "Reach a Number",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reach-a-number",
  "relativeDir": "R/Reach a Number",
  "slug": "0754-reach-a-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 49,
    "java": 18,
    "python": 15,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 5.9 MB (Top 74.21%)\r\nlong long fun(long long a){ //sum of all natural from 1 to a\r\n    long long b=a*(a+1)/2;\r\n    return b;\r\n}\r\n\r\nclass Solution {\r\npublic:\r\n    int reachNumber(int target) {\r\n\r\n         long long i=1,j=pow(10,5),x=abs(target),ans=0; //for -ve or +ve positive of a number the minimum no. of steps from the origin will be same\r\n\r\n    while(i<=j){ // binary search to search if x is continous sum of some natural number starting from 1\r\n        long long m=(i+j)/2;\r\n\r\n        if(fun(m)==x){\r\n            ans=m;\r\n        }\r\n        if(x>fun(m)){\r\n            i=m+1;\r\n        }\r\n        else{\r\n            j=m-1;\r\n        }\r\n\r\n    }\r\n\r\n    if(ans!=0){ // If we found our ans return it\r\n\r\n        return ans;\r\n    }\r\n    else{\r\n     //in this for loop i have set the limit too high it can be less then 10^6 as max value j can be is 44723, so loop will never run fully, whatever the value of j will be, loop will maximum run for 3-10 iterations\r\n    for(int l=j+1;l<100000;l++){ // in the end of binary search we get the value of j(or high end) as the position of the number(in the sequence of continous sum of natural number from 1, i.e. 1, 3,6,10........) whose value is just less than x(searching element)\r\n\r\n        if((fun(l)-x)%2 ==0){ // as the total step will be more than x if we go backward from zero, thing to note is that if we go -ve direction we also have to come back so we covering even distance\r\n             ans=l;// when the first fun(l) - x is even that l is our minimum jump\r\n\r\n            break; // no need to search further\r\n\r\n    }\r\n    }\r\n\r\n    }\r\n\r\n        return ans;\r\n    }\r\n\r\n};",
    "python": "class Solution: \r\n  def  reachNumber(self,target):\r\n    jumpCount = 1 \r\n    sum = 0 \r\n    while sum<abs(target):\r\n      sum+=jump \r\n      jumpCount+=1 \r\n    \r\n    if (sum-target)%2==0: return jumpCount-1 \r\n    else:\r\n      \r\n      if ((sum+jumpCount)-target)%2==0: \r\n        return jumpCount\r\n      else:\r\n        return jumpCount+1",
    "java": "class Solution {\r\n    public int reachNumber(int target) {\r\n        int sum =0 ,steps = 0;\r\n        if(target ==0) return 0;\r\n        target = Math.abs(target);\r\n        while(sum< target){\r\n            sum+=steps;\r\n            steps++;\r\n        }\r\n        \r\n        while(((sum-target)%2!=0)){\r\n            sum+=steps;\r\n            steps++;\r\n        }\r\n        return steps-1;\r\n\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} target\r\n * @return {number}\r\n */\r\nvar reachNumber = function(target) {\r\n    target = Math.abs(target);\r\n    let steps = 0, sum = 0;\r\n    while (sum < target) {\r\n        steps++;\r\n        sum += steps;\r\n    }\r\n    while ((sum - target) % 2 !== 0) {\r\n        steps++;\r\n        sum += steps;\r\n    }\r\n    return steps;\r\n};"
  }
}
