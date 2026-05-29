export default {
  "id": 1573,
  "name": "Number of Ways to Split a String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-ways-to-split-a-string",
  "relativeDir": "N/Number of Ways to Split a String",
  "slug": "1573-number-of-ways-to-split-a-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 41,
    "python": 46,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int MOD = 1e9 + 7 ;\r\n    int numWays(string s) {\r\n        int ones = count(begin(s),end(s),'1') , n = s.size() ;\r\n        if(ones % 3) return 0 ;\r\n        if(!ones) return (((n-1) * 1LL * (n-2) * 1LL) / 2) % MOD ; /// n- 1 C 2\r\n        \r\n        int left = 0 , right = 0 , count = 0 , i = 0 ;\r\n        while(count <= ones / 3){\r\n            count += s[i++] == '1' ;\r\n            if(count == ones/3) ++left ;\r\n        }\r\n        i = n - 1 , count = 0 ;\r\n        while(count <= ones/3){\r\n            count += s[i--] == '1' ;\r\n            if(count == ones/3) ++ right ;\r\n        }\r\n        \r\n        return (left * 1LL * right * 1LL) % MOD ;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numWays(self, s: str) -> int:\r\n        ones = 0\r\n\r\n        # Count number of Ones\r\n        for char in s:\r\n            if char == \"1\":\r\n                ones += 1\r\n\r\n        # Can't be grouped equally if the ones are not divisible by 3\r\n        if ones > 0 and ones % 3 != 0:\r\n            return 0\r\n\r\n        # Ways of selecting two dividers from n - 1 dividers \r\n        if ones == 0:\r\n            n = len(s)\r\n\t\t\t# n = {3: 1, 4: 3, 5: 6, 6: 10, 7: 15 ... }\r\n            return (((n - 1) * (n - 2)) // 2) % ((10 ** 9) + 7)\r\n\r\n        # Number of ones in each group\r\n        ones_interval = ones // 3\r\n\r\n        # Number of zeroes which lie on the borders\r\n        left, right = 0, 0\r\n\r\n        # Iterator\r\n        i = 0\r\n        temp = 0\r\n\r\n        # Finding the zeroes on the left and right border\r\n        while i < len(s):\r\n            temp += int(s[i]) & 1\r\n            if temp == ones_interval:\r\n                if s[i] == '0':\r\n                    left += 1\r\n            if temp == 2 * ones_interval:\r\n                if s[i] == '0':\r\n                    right += 1\r\n            i += 1\r\n        \r\n        # The result is the product of number of (left + 1) and (right + 1)\r\n        # Because let's assume it as we only want to fill up the middle group\r\n        # The solution would be if we have zero then there might be a zero in the middle\r\n        # Or there might not be the zero, so this might case is added and then\r\n\t\t# the events are independent so product of both the events\r\n        return ((left + 1) * (right + 1)) % ((10 ** 9) + 7)",
    "java": "class Solution {\r\n    public int numWays(String s) {\r\n        long n=s.length();\r\n        long one=0;//to count number of ones\r\n        long mod=1_000_000_007;\r\n        char[] c=s.toCharArray();\r\n        for(int i=0;i<c.length;i++)\r\n        {\r\n            if(c[i]=='1')\r\n                one++;\r\n        }\r\n        \r\n             //there will be 3 cases\r\n            // 1.no ones present in the string\r\n            // 2.number of ones present in the string isnt divisible by 3(since we need to cut 3 parts)\r\n            // 3.number of ones divisible by 3\r\n        \r\n        if(one==0)//case 1\r\n        {\r\n            return (int)((((n-1)*(n-2))/2)%mod);\r\n        }\r\n        if(one%3!=0)//case 2,which means we cant split ones equally\r\n            return 0;\r\n        //case 3\r\n        long ones=one/3;//number of ones that should be present in each part\r\n        one=0;\r\n        long part1=0;//number of ways in which part1 and part2 can be split\r\n        long part2=0;\r\n        for(int i=0;i<c.length;i++)\r\n        {\r\n            if(c[i]=='1')\r\n                one++;\r\n            if(one==ones)\r\n                part1++;\r\n            if(one==2*ones)\r\n                part2++;\r\n        }\r\n        \r\n        return (int)((part1*part2)%mod);\r\n    }\r\n}",
    "javascript": "// Runtime: 91 ms (Top 100.00%) | Memory: 47.1 MB (Top 69.23%)\r\nvar numWays = function(s) {\r\n    let one = 0;\r\n    let list = [];\r\n    for(let i = 0; i < s.length; i++){\r\n        if(s[i]===\"1\") one++, list.push(i);\r\n    }\r\n    if(one%3!==0) return 0;\r\n    if(one===0) return ((s.length-1)*(s.length-2)/2) % 1000000007;\r\n    one/=3;\r\n    return ((list[one]-list[one-1])*(list[2*one]-list[2*one-1])) % 1000000007;\r\n};"
  }
}
