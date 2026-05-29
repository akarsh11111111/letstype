export default {
  "id": 946,
  "name": "Validate Stack Sequences",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/validate-stack-sequences",
  "relativeDir": "V/Validate Stack Sequences",
  "slug": "0946-validate-stack-sequences",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 18,
    "python": 11,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {\r\n        stack<int> st; // Create a stack\r\n        \r\n        int j = 0; // Intialise one pointer pointing on popped array\r\n        \r\n        for(auto val : pushed){\r\n            st.push(val); // insert the values in stack\r\n            while(st.size() > 0 && st.top() == popped[j]){ // if st.peek() values equal to popped[j];\r\n                st.pop(); // then pop out\r\n                j++; // increment j\r\n            }\r\n        }\r\n        return st.size() == 0; // check if stack is empty return true else false\r\n    }\r\n};",
    "python": "class Solution:\r\n    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:\r\n        stack=[]\r\n        i=0\r\n        for num in pushed:\r\n            stack.append(num) #we are pushing the number to the stack\r\n            while  len(stack) >0 and stack[len(stack)-1] == popped[i] :\r\n                #if the last element of the stack is equal to the popped element\r\n                stack.pop()\r\n                i+=1 #we are incrementing i\r\n        return True if len(stack) ==0 else False",
    "java": "// Runtime: 5 ms (Top 57.66%) | Memory: 44.5 MB (Top 82.21%)\r\n\r\nclass Solution {\r\n    public boolean validateStackSequences(int[] pushed, int[] popped) {\r\n        Stack<Integer> st = new Stack<>(); // Create a stack\r\n\r\n        int j = 0; // Intialise one pointer pointing on popped array\r\n\r\n        for(int val : pushed){\r\n            st.push(val); // insert the values in stack\r\n            while(!st.isEmpty() && st.peek() == popped[j]){ // if st.peek() values equal to popped[j];\r\n                st.pop(); // then pop out\r\n                j++; // increment j\r\n            }\r\n        }\r\n        return st.isEmpty(); // check if stack is empty return true else false\r\n    }\r\n}",
    "javascript": "var validateStackSequences = function(pushed, popped) {\r\n    let stack = [];\r\n    let j = 0;\r\n    \r\n    for(let i=0; i<pushed.length; i++){\r\n        stack.push(pushed[i]);\r\n        while(stack.length != 0 && popped[j]== stack[stack.length-1]){\r\n            stack.pop();\r\n            j++\r\n        }\r\n    }\r\n    return stack.length<1\r\n\r\n};"
  }
}
