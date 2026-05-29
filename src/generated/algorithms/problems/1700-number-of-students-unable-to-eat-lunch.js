export default {
  "id": 1700,
  "name": "Number of Students Unable to Eat Lunch",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-students-unable-to-eat-lunch",
  "relativeDir": "N/Number of Students Unable to Eat Lunch",
  "slug": "1700-number-of-students-unable-to-eat-lunch",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 29,
    "python": 17,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 34.04%) | Memory: 8.7 MB (Top 65.50%)\r\nclass Solution {\r\npublic:\r\n    int countStudents(vector<int>& students, vector<int>& sandwiches) {\r\n        int size = students.size();\r\n        queue<int> student_choice;\r\n        for(int i = 0 ; i < size ; ++i){\r\n            student_choice.push(students[i]);\r\n        }\r\n        int rotations = 0 , i = 0;\r\n        while(student_choice.size() && rotations < student_choice.size()){\r\n            if(student_choice.front() == sandwiches[i]){\r\n                student_choice.pop();\r\n                i++;\r\n                rotations = 0;\r\n            } else {\r\n                int choice = student_choice.front();\r\n                student_choice.pop();\r\n                student_choice.push(choice);\r\n                rotations++;\r\n            }\r\n        }\r\n        return student_choice.size();\r\n    }\r\n};",
    "python": "// Runtime: 76 ms (Top 5.69%) | Memory: 17.30 MB (Top 7.83%)\r\n\r\nclass Solution:\r\n    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:\r\n        count = 0\r\n        while len(students) > count:\r\n            if students[0] == sandwiches[0]:\r\n                sandwiches.pop(0)\r\n                count = 0\r\n            else:\r\n                students.append(students[0])\r\n                count+=1\r\n\r\n            students.pop(0)\r\n        return len(students)\r\n\t\t\r\n#Upvote will be encouraging.",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.4 MB (Top 83.22%)\r\nclass Solution {\r\n    public int countStudents(int[] students, int[] sandwiches) {\r\n        int ones = 0; //count of students who prefer type1\r\n        int zeros = 0; //count of students who prefer type0\r\n\r\n        for(int stud : students){\r\n            if(stud == 0) zeros++;\r\n            else ones++;\r\n        }\r\n\r\n        // for each sandwich in sandwiches\r\n        for(int sandwich : sandwiches){\r\n            if(sandwich == 0){ // if sandwich is of type0\r\n                if(zeros == 0){ // if no student want a type0 sandwich\r\n                    return ones;\r\n                }\r\n                zeros--;\r\n            }\r\n            else{ // if sandwich is of type1\r\n                if(ones == 0){ // if no student want a type1 sandwich\r\n                    return zeros;\r\n                }\r\n                ones--;\r\n            }\r\n        }\r\n        return 0;\r\n    }\r\n}",
    "javascript": "// Runtime: 112 ms (Top 15.11%) | Memory: 42.1 MB (Top 57.33%)\r\nvar countStudents = function(students, sandwiches) {\r\nwhile (students.length>0 && students.indexOf(sandwiches[0])!=-1) {\r\n    if (students[0] == sandwiches[0]) {\r\n        students.shift();\r\n        sandwiches.shift();\r\n    }\r\n    else students.push(students.shift());\r\n}\r\nreturn students.length\r\n};"
  }
}
