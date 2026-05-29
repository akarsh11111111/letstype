export default {
  "id": 229,
  "name": "Majority Element II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/majority-element-ii",
  "relativeDir": "M/Majority Element II",
  "slug": "0229-majority-element-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 47,
    "java": 32,
    "python": 56,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 36 ms (Top 22.99%) | Memory: 15.8 MB (Top 91.31%)\r\nclass Solution {\r\npublic:\r\n    vector<int> majorityElement(vector<int>& nums) {\r\n\r\n        int n = nums.size();\r\n\r\n        vector<int> result;\r\n\r\n        int num1 = -1 , num2 = -1 , count1 = 0 , count2 = 0;\r\n\r\n        for(auto it : nums){\r\n\r\n            if(num1 == it) ++count1;\r\n            else if(num2 == it) ++count2;\r\n            else if(count1 == 0){\r\n                num1 = it;\r\n                count1 = 1;\r\n            }\r\n            else if(count2 == 0){\r\n                num2 =it;\r\n                count2 = 1;\r\n            }\r\n            else{\r\n                --count1;\r\n                --count2;\r\n            }\r\n\r\n        }\r\n\r\n        count1 = 0;\r\n        count2 = 0;\r\n\r\n        for(auto it : nums){\r\n\r\n            if(it == num1) ++count1;\r\n            else if(it == num2) ++count2;\r\n\r\n        }\r\n\r\n        if(count1>(n/3)) result.push_back(num1);\r\n        if(count2>(n/3)) result.push_back(num2);\r\n\r\n        return result;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def majorityElement(self, nums: List[int]) -> List[int]:\r\n        \r\n        #Boyer Moore Voting Algo (As used in ME1 ques) \r\n        #now we can observe that there cannot be more than two elements occuring more than n//3 times in an array\r\n        #so find two majority elements(me=majority element)\r\n        \r\n\r\n        n=len(nums)\r\n        req=n//3  #for an element to be ME required number of times present \r\n\r\n        c1=0 #count 1\r\n        c2=0 #count 2\r\n        me1=None #majority element 1\r\n        me2=None #majority element 2\r\n\r\n        for i in nums:\r\n            if i == me1:\r\n                c1+=1\r\n\r\n            elif i == me2:\r\n                c2+=1\r\n\r\n            elif c1 == 0:\r\n                me1=i\r\n                c1=1\r\n\r\n            elif c2 == 0:\r\n                me2=i\r\n                c2=1\r\n\r\n            else:\r\n                c1-=1\r\n                c2-=1\r\n        #here we have found our majority elements now check if the found majority element is ME\r\n        # print(me1,me2)\r\n\r\n        #check if the found majority element is ME\r\n        c1=0\r\n        c2=0\r\n        for i in nums:\r\n            if i==me1:\r\n                c1+=1\r\n            if i==me2:\r\n                c2+=1\r\n        # print(c1,c2)\r\n\r\n        if c1 > req  and c2 > req:\r\n\r\n            return [me1,me2]\r\n\r\n        elif c1> req :\r\n            return [me1]\r\n\r\n        elif c2> req :\r\n            return [me2]",
    "java": "class Solution {\r\n    public List<Integer> majorityElement(int[] nums) {\r\n        int val1 = nums[0], val2 = nums[0], cnt1 = 1, cnt2 = 0;\r\n        for(int i = 1; i < nums.length; i++){\r\n            if(val1 == nums[i]){\r\n                cnt1++;\r\n            } else if(val2 == nums[i]){\r\n                cnt2++;\r\n            } else{\r\n                if(cnt1 == 0){\r\n                    val1 = nums[i];\r\n                    cnt1++;\r\n                } else if(cnt2 == 0){\r\n                    val2 = nums[i];\r\n                    cnt2++;\r\n                } else{\r\n                    cnt1--;\r\n                    cnt2--;\r\n                }\r\n            }\r\n        }\r\n        int check1 = 0, check2 = 0;\r\n        for(int i = 0; i < nums.length; i++){\r\n            if(val1 == nums[i])check1++;\r\n            else if(val2 == nums[i])check2++;\r\n        }\r\n        List<Integer> ans = new ArrayList<>();\r\n        if(check1 > nums.length / 3) ans.add(val1);\r\n        if(check2 > nums.length / 3) ans.add(val2);\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 105 ms (Top 48.44%) | Memory: 43 MB (Top 93.77%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @return {number[]}\r\n */\r\nvar majorityElement = function(nums) {\r\n    const objElement = {};\r\n    const timesVar = Math.floor(nums.length/3);\r\n    const resultSet = new Set();\r\n\r\n    for(var indexI=0; indexI<nums.length; indexI++){\r\n       if(objElement[nums[indexI]]) {\r\n               objElement[nums[indexI]] = objElement[nums[indexI]] + 1;\r\n        }\r\n       else objElement[nums[indexI]] = 1;\r\n\r\n       if(objElement[nums[indexI]]>timesVar) resultSet.add(nums[indexI]);\r\n    }\r\n\r\n    return [...resultSet];\r\n};"
  }
}
