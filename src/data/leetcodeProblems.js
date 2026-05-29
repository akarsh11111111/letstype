export const LEETCODE_PROBLEMS = [
  {
    "id": 1,
    "title": "Two Sum",
    "variant": null,
    "fileName": "1stday_leetcode.cpp",
    "code": "#include <unordered_map>\n#include <vector>\n\nusing namespace std;\n\n// LeetCode #1: Two Sum\n// Aapko ek array diya hota hai nums aur ek target value.\n// Aapko aise 2 indices return karne hote hain jinke elements ka sum target ke equal ho.\n\n// Example:\n// nums = [2, 7, 11, 15], target = 9\n// Output = [0, 1]\n// Kyuki 2 + 7 = 9.\n\n// Note:\n\n// Har input ka exactly ek valid answer hota hai.\n// Same element ko do baar use nahi kar sakte.\n//\n// Question: nums array aur target diya hai; aise 2 indices return karo jinka sum = target ho.\n// Constraint yaad rakho: same element ko do baar use nahi karna, aur exactly one valid answer hota hai.\n// Approach: one-pass hash map.\n// 1) Har element ke liye need = target - nums[i] nikaalo.\n// 2) Agar need map me pehle se hai, answer mil gaya: {map[need], i}.\n// 3) Nahi to current value ka index map me store kar do.\n// Time Complexity: O(n) average, kyuki ek pass + map lookup/insert average O(1).\n// Space Complexity: O(n), worst case me map me n elements store ho sakte hain.\nclass Solution {\npublic:\n\tvector<int> twoSum(vector<int>& nums, int target) {\n\t\tunordered_map<int, int> seen;\n\n\t\tfor (int i = 0; i < static_cast<int>(nums.size()); i++) {\n\t\t\t// Jo value chahiye complement ke form me.\n\t\t\tint need = target - nums[i];\n\n\t\t\tif (seen.find(need) != seen.end()) {\n\t\t\t\t// Complement pehle mil chuka hai, dono indices return.\n\t\t\t\treturn {seen[need], i};\n\t\t\t}\n\n\t\t\t// Current value ka latest index store/update.\n\t\t\tseen[nums[i]] = i;\n\t\t}\n\n\t\treturn {};\n\t}\n};",
    "lineCount": 48
  },
  {
    "id": 2,
    "title": "Add Two Numbers",
    "variant": null,
    "fileName": "2ndday_leetcode.cpp",
    "code": "#include <vector>\n\nusing namespace std;\n\n// LeetCode #2: Add Two Numbers\n// Aapko 2 linked lists di jaati hain: l1 aur l2.\n// Har node me ek digit hota hai, aur number reverse order me stored hota hai.\n// Hume in dono numbers ka sum bhi linked list ke form me return karna hai.\n\n// Example:\n// l1 = [2,4,3]  -> number 342\n// l2 = [5,6,4]  -> number 465\n// sum = 807\n// output = [7,0,8]3r\n\n// Note:\n// 1) Digits reverse order me hain.\n// 2) Har node me single digit (0-9) hota hai.\n// 3) Result list me bhi reverse order follow hoga.\n\n// LeetCode usually ye struct already deta hai.\nstruct ListNode {\n\tint val;\n\tListNode* next;\n\tListNode() : val(0), next(nullptr) {}\n\tListNode(int x) : val(x), next(nullptr) {}\n\tListNode(int x, ListNode* next) : val(x), next(next) {}\n};\n\n// Approach: Digit-by-digit addition with carry (exactly jaise normal addition karte hain).\n// 1) Dono lists ko same time traverse karo.\n// 2) Current digits + carry ka sum nikalo.\n// 3) sum % 10 new node banega, sum / 10 next carry banega.\n// 4) Jab dono lists khatam ho jayein aur carry bhi 0 ho, loop end.\n// Time Complexity: O(max(n, m))\n// Space Complexity: O(max(n, m)) for output list (extra auxiliary apart from output is O(1)).\nclass Solution {\npublic:\n\tListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n\t\t// Dummy node use karne se head handle karna easy ho jata hai.\n\t\tListNode dummy(0);\n\n\t\t// tail hamesha result list ke last node ko point karega.\n\t\tListNode* tail = &dummy;\n\n\t\t// carry previous digit addition ka carry value rakhega.\n\t\tint carry = 0;\n\n\t\t// Jab tak l1 ya l2 me nodes bache hain, ya carry bacha hai, tab tak process karo.\n\t\twhile (l1 != nullptr || l2 != nullptr || carry != 0) {\n\t\t\tint x = 0;\n\t\t\tint y = 0;\n\n\t\t\t// Agar l1 valid hai to uska digit lo.\n\t\t\tif (l1 != nullptr) {\n\t\t\t\tx = l1->val;\n\t\t\t\tl1 = l1->next;\n\t\t\t}\n\n\t\t\t// Agar l2 valid hai to uska digit lo.\n\t\t\tif (l2 != nullptr) {\n\t\t\t\ty = l2->val;\n\t\t\t\tl2 = l2->next;\n\t\t\t}\n\n\t\t\t// Current addition: dono digits + carry.\n\t\t\tint sum = x + y + carry;\n\n\t\t\t// Next carry tens place se aata hai.\n\t\t\tcarry = sum / 10;\n\n\t\t\t// Current digit ones place hoga.\n\t\t\tint digit = sum % 10;\n\n\t\t\t// Result list me new digit node attach karo.\n\t\t\ttail->next = new ListNode(digit);\n\t\t\ttail = tail->next;\n\t\t}\n\n\t\t// Dummy ke next se actual result head milta hai.\n\t\treturn dummy.next;\n\t}\n};",
    "lineCount": 83
  },
  {
    "id": 3,
    "title": "Longest Substring Without Repeating Characters",
    "variant": null,
    "fileName": "3rdday_leetcode.cpp",
    "code": "#include <algorithm>\n#include <string>\n#include <unordered_map>\n\nusing namespace std;\n\n// LeetCode #3: Longest Substring Without Repeating Characters\n// Aapko ek string s di hoti hai.\n// Hume longest aisi substring ki length return karni hoti hai\n// jisme koi character repeat na ho.\n\n// Example:\n// s = \"abcabcbb\"\n// Answer = 3\n// Kyuki \"abc\" longest substring hai without repeating chars.\n\n// Note:\n// 1) Substring continuous hoti hai (subsequence nahi).\n// 2) Empty string ka answer 0 hota hai.\n\n// Approach: Sliding Window + last seen index map.\n// Window [left ... right] maintain karte hain jisme repeating char nahi hona chahiye.\n// Har step par s[right] ka last index check karte hain:\n// - Agar wo current window ke andar milta hai, to left ko aage shift kar dete hain.\n// - Fir current window length nikal kar max update karte hain.\n// Time Complexity: O(n), kyuki right pointer ek baar traverse karta hai,\n// aur left pointer bhi sirf aage badhta hai.\n// Space Complexity: O(min(n, charset)), map me last seen indices store hote hain.\nclass Solution {\npublic:\n\tint lengthOfLongestSubstring(string s) {\n\t\tunordered_map<char, int> lastSeen;\n\t\tint left = 0;\n\t\tint best = 0;\n\n\t\tfor (int right = 0; right < static_cast<int>(s.size()); right++) {\n\t\t\tchar ch = s[right];\n\n\t\t\t// Agar character current window me repeat ho raha hai,\n\t\t\t// to left boundary ko uske next index par le jao.\n\t\t\tif (lastSeen.find(ch) != lastSeen.end() && lastSeen[ch] >= left) {\n\t\t\t\tleft = lastSeen[ch] + 1;\n\t\t\t}\n\n\t\t\t// Current character ka latest index store karo.\n\t\t\tlastSeen[ch] = right;\n\n\t\t\t// Current valid window length se best update karo.\n\t\t\tbest = max(best, right - left + 1);\n\t\t}\n\n\t\treturn best;\n\t}\n};",
    "lineCount": 54
  },
  {
    "id": 4,
    "title": "Median of Two Sorted Arrays",
    "variant": null,
    "fileName": "4thday_leetcode.cpp",
    "code": "#include <algorithm>\n#include <climits>\n#include <vector>\n\nusing namespace std;\n\n// LeetCode #4: Median of Two Sorted Arrays\n// Aapko do sorted arrays nums1 aur nums2 diye hote hain.\n// In dono arrays ko logically merge karke median return karna hota hai.\n\n// Example 1:\n// nums1 = [1, 3], nums2 = [2]\n// merged = [1, 2, 3]\n// Answer = 2.0\n\n// Example 2:\n// nums1 = [1, 2], nums2 = [3, 4]\n// merged = [1, 2, 3, 4]\n// Answer = (2 + 3) / 2 = 2.5\n\n// Note:\n// 1) Dono arrays already sorted hain.\n// 2) Overall run time O(log(m+n)) hona chahiye.\n\n// Approach: Binary Search on Partition (optimal).\n// Idea: Dono arrays me aisa partition choose karo jahan left half me total elements\n// right half ke barabar (ya ek zyada) ho, aur left side ke saare elements <= right side.\n// 1) Hamesha chhote array par binary search lagao.\n// 2) Partition i (nums1) aur j (nums2) choose karo jisse left side me half elements aa jayein.\n// 3) Check karo:\n//    left1 <= right2  aur  left2 <= right1\n//    - Agar true hai, partition correct hai.\n//    - Nahi to i ko left/right move karke binary search continue karo.\n// 4) Correct partition milte hi:\n//    - Odd total: max(left1, left2) median hoga.\n//    - Even total: (max(left1, left2) + min(right1, right2)) / 2.0\n// Time Complexity: O(log(min(m, n)))\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tdouble findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n\t\t// Binary search hamesha chhote array par chalana best hai.\n\t\tif (nums1.size() > nums2.size()) {\n\t\t\treturn findMedianSortedArrays(nums2, nums1);\n\t\t}\n\n\t\tint m = static_cast<int>(nums1.size());\n\t\tint n = static_cast<int>(nums2.size());\n\n\t\tint low = 0;\n\t\tint high = m;\n\t\tint totalLeft = (m + n + 1) / 2;\n\n\t\twhile (low <= high) {\n\t\t\tint i = low + (high - low) / 2;\n\t\t\tint j = totalLeft - i;\n\n\t\t\tint left1 = (i == 0) ? INT_MIN : nums1[i - 1];\n\t\t\tint right1 = (i == m) ? INT_MAX : nums1[i];\n\t\t\tint left2 = (j == 0) ? INT_MIN : nums2[j - 1];\n\t\t\tint right2 = (j == n) ? INT_MAX : nums2[j];\n\n\t\t\tif (left1 <= right2 && left2 <= right1) {\n\t\t\t\tif ((m + n) % 2 == 1) {\n\t\t\t\t\treturn static_cast<double>(max(left1, left2));\n\t\t\t\t}\n\n\t\t\t\tint leftMax = max(left1, left2);\n\t\t\t\tint rightMin = min(right1, right2);\n\t\t\t\treturn (leftMax + rightMin) / 2.0;\n\t\t\t}\n\n\t\t\tif (left1 > right2) {\n\t\t\t\thigh = i - 1;\n\t\t\t} else {\n\t\t\t\tlow = i + 1;\n\t\t\t}\n\t\t}\n\n\t\t// Valid sorted input ke saath control yahan nahi aana chahiye.\n\t\treturn 0.0;\n\t}\n};",
    "lineCount": 83
  },
  {
    "id": 5,
    "title": "Longest Palindromic Substring",
    "variant": null,
    "fileName": "5thday_leetcode.cpp",
    "code": "#include <string>\n#include <utility>\n\nusing namespace std;\n\n// LeetCode #5: Longest Palindromic Substring\n// Aapko ek string s di hoti hai.\n// Hume longest aisi substring return karni hoti hai jo palindrome ho.\n// Palindrome matlab jo left se aur right se same read ho.\n\n// Example 1:\n// s = \"babad\"\n// Answer = \"bab\" (\"aba\" bhi valid hai)\n\n// Example 2:\n// s = \"cbbd\"\n// Answer = \"bb\"\n\n// Note:\n// 1) Substring continuous hoti hai.\n// 2) Multiple valid answers ho sakte hain; unme se koi ek return kar sakte hain.\n\n// Approach: Expand Around Center.\n// Har index ko center maan kar palindrome expand karte hain:\n// 1) Odd length palindrome ke liye center = (i, i)\n// 2) Even length palindrome ke liye center = (i, i + 1)\n// 3) Jitna match mile utna expand karo, aur longest range update karte raho.\n// Time Complexity: O(n^2)\n// Space Complexity: O(1)\nclass Solution {\nprivate:\n\t// Left aur right se expand karke palindrome ki boundaries return karta hai.\n\tpair<int, int> expandFromCenter(const string& s, int left, int right) {\n\t\twhile (left >= 0 && right < static_cast<int>(s.size()) && s[left] == s[right]) {\n\t\t\tleft--;\n\t\t\tright++;\n\t\t}\n\n\t\t// Loop break ke baad valid palindrome (left+1 ... right-1) hota hai.\n\t\treturn {left + 1, right - 1};\n\t}\n\npublic:\n\tstring longestPalindrome(string s) {\n\t\tif (s.empty()) {\n\t\t\treturn \"\";\n\t\t}\n\n\t\tint bestStart = 0;\n\t\tint bestEnd = 0;\n\n\t\tfor (int i = 0; i < static_cast<int>(s.size()); i++) {\n\t\t\t// Odd length palindrome check.\n\t\t\tauto odd = expandFromCenter(s, i, i);\n\t\t\tif (odd.second - odd.first > bestEnd - bestStart) {\n\t\t\t\tbestStart = odd.first;\n\t\t\t\tbestEnd = odd.second;\n\t\t\t}\n\n\t\t\t// Even length palindrome check.\n\t\t\tauto even = expandFromCenter(s, i, i + 1);\n\t\t\tif (even.second - even.first > bestEnd - bestStart) {\n\t\t\t\tbestStart = even.first;\n\t\t\t\tbestEnd = even.second;\n\t\t\t}\n\t\t}\n\n\t\treturn s.substr(bestStart, bestEnd - bestStart + 1);\n\t}\n};",
    "lineCount": 70
  },
  {
    "id": 6,
    "title": "Zigzag Conversion",
    "variant": null,
    "fileName": "6thday_leetcode.cpp",
    "code": "#include <string>\n#include <vector>\n\nusing namespace std;\n\n// LeetCode #6: Zigzag Conversion\n// Aapko ek string s aur numRows diya hota hai.\n// String ko zigzag pattern me likhkar row-by-row read karna hota hai.\n\n// Example 1:\n// s = \"PAYPALISHIRING\", numRows = 3\n// Zigzag:\n// P   A   H   N\n// A P L S I I G\n// Y   I   R\n// Answer = \"PAHNAPLSIIGYIR\"\n\n// Example 2:\n// s = \"PAYPALISHIRING\", numRows = 4\n// Answer = \"PINALSIGYAHRPI\"\n\n// Note:\n// 1) numRows = 1 ho to output same string hota hai.\n// 2) numRows >= s.length() ho to bhi arrangement change nahi hota.\n\n// Approach: Row simulation.\n// 1) Har row ke liye ek string maintain karo.\n// 2) Characters ko top-to-bottom aur phir bottom-to-top direction me place karo.\n// 3) End me sab rows ko join karke result bana do.\n// Time Complexity: O(n)\n// Space Complexity: O(n)\nclass Solution {\npublic:\n\tstring convert(string s, int numRows) {\n\t\tif (numRows == 1 || numRows >= static_cast<int>(s.size())) {\n\t\t\treturn s;\n\t\t}\n\n\t\tvector<string> rows(numRows);\n\t\tint currentRow = 0;\n\t\tbool goingDown = false;\n\n\t\tfor (char ch : s) {\n\t\t\trows[currentRow].push_back(ch);\n\n\t\t\t// First ya last row par direction flip hoti hai.\n\t\t\tif (currentRow == 0 || currentRow == numRows - 1) {\n\t\t\t\tgoingDown = !goingDown;\n\t\t\t}\n\n\t\t\tcurrentRow += goingDown ? 1 : -1;\n\t\t}\n\n\t\tstring answer;\n\t\tanswer.reserve(s.size());\n\t\tfor (const string& row : rows) {\n\t\t\tanswer += row;\n\t\t}\n\n\t\treturn answer;\n\t}\n};",
    "lineCount": 62
  },
  {
    "id": 7,
    "title": "Reverse Integer",
    "variant": null,
    "fileName": "7thday_leetcode.cpp",
    "code": "#include <climits>\n\nusing namespace std;\n\n// LeetCode #7: Reverse Integer\n// Aapko ek signed 32-bit integer x diya hota hai.\n// Uske digits ko reverse karke result return karna hota hai.\n// Agar reverse karne par value 32-bit range se bahar chali jaye, to 0 return karna hota hai.\n\n// Example 1:\n// x = 123\n// Answer = 321\n\n// Example 2:\n// x = -123\n// Answer = -321\n\n// Example 3:\n// x = 120\n// Answer = 21\n\n// Note:\n// 1) Sign preserve hota hai.\n// 2) Overflow/underflow case me 0 return karna hai.\n\n// Approach: Digit by digit reverse with overflow check.\n// 1) Har step par last digit lo.\n// 2) Answer ko 10 se multiply karke digit add karo.\n// 3) Har multiplication/addition se pehle check karo ki int range cross to nahi hogi.\n// Time Complexity: O(log10(|x|))\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tint reverse(int x) {\n\t\tlong long reversed = 0;\n\n\t\twhile (x != 0) {\n\t\t\tint digit = x % 10;\n\t\t\tx /= 10;\n\n\t\t\treversed = reversed * 10 + digit;\n\n\t\t\tif (reversed < INT_MIN || reversed > INT_MAX) {\n\t\t\t\treturn 0;\n\t\t\t}\n\t\t}\n\n\t\treturn static_cast<int>(reversed);\n\t}\n};",
    "lineCount": 50
  },
  {
    "id": 8,
    "title": "String to Integer",
    "variant": "atoi",
    "fileName": "8thday_leetcode.cpp",
    "code": "#include <climits>\n#include <cctype>\n#include <string>\n\nusing namespace std;\n\n// LeetCode #8: String to Integer (atoi)\n// Aapko ek string s di jati hai.\n// Usko 32-bit signed integer me convert karna hota hai.\n// Leading spaces ignore karne hain, optional sign handle karna hai,\n// aur overflow/underflow pe clamp karna hai.\n\n// Approach:\n// 1) Leading spaces skip karo.\n// 2) Optional sign read karo.\n// 3) Continuous digits ko long long me build karo.\n// 4) Range cross hote hi clamp karke return karo.\n// Time Complexity: O(n)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tint myAtoi(string s) {\n\t\tint index = 0;\n\t\tint length = static_cast<int>(s.size());\n\n\t\twhile (index < length && isspace(static_cast<unsigned char>(s[index]))) {\n\t\t\t++index;\n\t\t}\n\n\t\tint sign = 1;\n\t\tif (index < length && (s[index] == '+' || s[index] == '-')) {\n\t\t\tsign = (s[index] == '-') ? -1 : 1;\n\t\t\t++index;\n\t\t}\n\n\t\tlong long value = 0;\n\t\twhile (index < length && isdigit(static_cast<unsigned char>(s[index]))) {\n\t\t\tvalue = value * 10 + (s[index] - '0');\n\t\t\tlong long signedValue = sign * value;\n\n\t\t\tif (signedValue > INT_MAX) {\n\t\t\t\treturn INT_MAX;\n\t\t\t}\n\t\t\tif (signedValue < INT_MIN) {\n\t\t\t\treturn INT_MIN;\n\t\t\t}\n\n\t\t\t++index;\n\t\t}\n\n\t\treturn static_cast<int>(sign * value);\n\t}\n};",
    "lineCount": 53
  },
  {
    "id": 9,
    "title": "Palindrome Number",
    "variant": null,
    "fileName": "9thday_leetcode.cpp",
    "code": "#include <climits>\n\nusing namespace std;\n\n// LeetCode #9: Palindrome Number\n// Check if integer x is a palindrome.\n// Do this without converting to string.\n// Time Complexity: O(log x)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tbool isPalindrome(int x) {\n\t\tif (x < 0 || (x % 10 == 0 && x != 0)) {\n\t\t\treturn false;\n\t\t}\n\n\t\tint reversedHalf = 0;\n\t\twhile (x > reversedHalf) {\n\t\t\treversedHalf = reversedHalf * 10 + (x % 10);\n\t\t\tx /= 10;\n\t\t}\n\n\t\treturn (x == reversedHalf) || (x == reversedHalf / 10);\n\t}\n};",
    "lineCount": 25
  },
  {
    "id": 10,
    "title": "Regular Expression Matching",
    "variant": null,
    "fileName": "10thday_leetcode.cpp",
    "code": "#include <string>\n\nusing namespace std;\n\n// LeetCode #10: Regular Expression Matching\n// Implement regex matching with '.' and '*'.\n// '.' matches any single character\n// '*' matches zero or more of the preceding element\n// Time Complexity: O(m * n)\n// Space Complexity: O(m * n)\nclass Solution {\npublic:\n\tbool isMatch(string s, string p) {\n\t\tint m = s.size();\n\t\tint n = p.size();\n\t\tvector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));\n\n\t\tdp[0][0] = true;\n\n\t\tfor (int j = 2; j <= n; ++j) {\n\t\t\tif (p[j - 1] == '*') {\n\t\t\t\tdp[0][j] = dp[0][j - 2];\n\t\t\t}\n\t\t}\n\n\t\tfor (int i = 1; i <= m; ++i) {\n\t\t\tfor (int j = 1; j <= n; ++j) {\n\t\t\t\tif (p[j - 1] == '*') {\n\t\t\t\t\tdp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (s[i - 1] == p[j - 2] || p[j - 2] == '.'));\n\t\t\t\t} else {\n\t\t\t\t\tdp[i][j] = dp[i - 1][j - 1] && (s[i - 1] == p[j - 1] || p[j - 1] == '.');\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn dp[m][n];\n\t}\n};",
    "lineCount": 38
  },
  {
    "id": 11,
    "title": "Container With Most Water",
    "variant": null,
    "fileName": "11thday_leetcode.cpp",
    "code": "#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\n// LeetCode #11: Container With Most Water\n// Find two lines that form container with most water.\n// Time Complexity: O(n)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tint maxArea(vector<int>& height) {\n\t\tint left = 0;\n\t\tint right = height.size() - 1;\n\t\tint maxWater = 0;\n\n\t\twhile (left < right) {\n\t\t\tint currentHeight = min(height[left], height[right]);\n\t\t\tint width = right - left;\n\t\t\tint currentWater = currentHeight * width;\n\t\t\tmaxWater = max(maxWater, currentWater);\n\n\t\t\tif (height[left] < height[right]) {\n\t\t\t\t++left;\n\t\t\t} else {\n\t\t\t\t--right;\n\t\t\t}\n\t\t}\n\n\t\treturn maxWater;\n\t}\n};",
    "lineCount": 32
  },
  {
    "id": 12,
    "title": "Integer to Roman",
    "variant": null,
    "fileName": "12thday_leetcode.cpp",
    "code": "#include <string>\n\nusing namespace std;\n\n// LeetCode #12: Integer to Roman\n// Convert integer to Roman numeral string.\n// Time Complexity: O(1) - max 3999\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tstring intToRoman(int num) {\n\t\tvector<pair<int, string>> values = {\n\t\t\t{1000, \"M\"}, {900, \"CM\"}, {500, \"D\"}, {400, \"CD\"},\n\t\t\t{100, \"C\"}, {90, \"XC\"}, {50, \"L\"}, {40, \"XL\"},\n\t\t\t{10, \"X\"}, {9, \"IX\"}, {5, \"V\"}, {4, \"IV\"}, {1, \"I\"}\n\t\t};\n\n\t\tstring result;\n\t\tfor (auto& p : values) {\n\t\t\twhile (num >= p.first) {\n\t\t\t\tresult += p.second;\n\t\t\t\tnum -= p.first;\n\t\t\t}\n\t\t}\n\n\t\treturn result;\n\t}\n};",
    "lineCount": 28
  },
  {
    "id": 13,
    "title": "Roman to Integer",
    "variant": null,
    "fileName": "13thday_leetcode.cpp",
    "code": "#include <string>\n#include <unordered_map>\n\nusing namespace std;\n\n// LeetCode #13: Roman to Integer\n// Convert Roman numeral string to integer.\n// Time Complexity: O(n)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tint romanToInt(string s) {\n\t\tunordered_map<char, int> value = {\n\t\t\t{'I', 1}, {'V', 5}, {'X', 10}, {'L', 50},\n\t\t\t{'C', 100}, {'D', 500}, {'M', 1000}\n\t\t};\n\n\t\tint result = 0;\n\t\tfor (int i = 0; i < static_cast<int>(s.size()); ++i) {\n\t\t\tif (i + 1 < static_cast<int>(s.size()) && value[s[i]] < value[s[i + 1]]) {\n\t\t\t\tresult -= value[s[i]];\n\t\t\t} else {\n\t\t\t\tresult += value[s[i]];\n\t\t\t}\n\t\t}\n\n\t\treturn result;\n\t}\n};",
    "lineCount": 29
  },
  {
    "id": 14,
    "title": "Longest Common Prefix",
    "variant": null,
    "fileName": "14thday_leetcode.cpp",
    "code": "#include <string>\n#include <vector>\n\nusing namespace std;\n\n// LeetCode #14: Longest Common Prefix\n// Find longest common prefix among array of strings.\n// Time Complexity: O(n * m)\n// Space Complexity: O(1) extra\nclass Solution {\npublic:\n\tstring longestCommonPrefix(vector<string>& strs) {\n\t\tif (strs.empty()) {\n\t\t\treturn \"\";\n\t\t}\n\n\t\tstring prefix = strs[0];\n\t\tfor (int i = 1; i < static_cast<int>(strs.size()); ++i) {\n\t\t\twhile (strs[i].find(prefix) != 0) {\n\t\t\t\tprefix.pop_back();\n\t\t\t\tif (prefix.empty()) {\n\t\t\t\t\treturn \"\";\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn prefix;\n\t}\n};",
    "lineCount": 29
  },
  {
    "id": 15,
    "title": "3Sum",
    "variant": null,
    "fileName": "15thday_leetcode.cpp",
    "code": "#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\n// LeetCode #15: 3Sum\n// Find all unique triplets that sum to zero.\n// Time Complexity: O(n^2)\n// Space Complexity: O(1) excluding output\nclass Solution {\npublic:\n\tvector<vector<int>> threeSum(vector<int>& nums) {\n\t\tsort(nums.begin(), nums.end());\n\t\tvector<vector<int>> result;\n\n\t\tfor (int i = 0; i < static_cast<int>(nums.size()) - 2; ++i) {\n\t\t\tif (i > 0 && nums[i] == nums[i - 1]) continue;\n\t\t\tif (nums[i] > 0) break;\n\n\t\t\tint left = i + 1;\n\t\t\tint right = nums.size() - 1;\n\n\t\t\twhile (left < right) {\n\t\t\t\tint sum = nums[i] + nums[left] + nums[right];\n\t\t\t\tif (sum == 0) {\n\t\t\t\t\tresult.push_back({nums[i], nums[left], nums[right]});\n\t\t\t\t\twhile (left < right && nums[left] == nums[left + 1]) ++left;\n\t\t\t\t\twhile (left < right && nums[right] == nums[right - 1]) --right;\n\t\t\t\t\t++left;\n\t\t\t\t\t--right;\n\t\t\t\t} else if (sum < 0) {\n\t\t\t\t\t++left;\n\t\t\t\t} else {\n\t\t\t\t\t--right;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn result;\n\t}\n};",
    "lineCount": 41
  },
  {
    "id": 16,
    "title": "3Sum Closest",
    "variant": null,
    "fileName": "16thday_leetcode.cpp",
    "code": "#include <vector>\n#include <algorithm>\n#include <climits>\n\nusing namespace std;\n\n// LeetCode #16: 3Sum Closest\n// Find triplet closest to target sum.\n// Time Complexity: O(n^2)\n// Space Complexity: O(1) excluding output\nclass Solution {\npublic:\n\tint threeSumClosest(vector<int>& nums, int target) {\n\t\tsort(nums.begin(), nums.end());\n\t\tint closest = INT_MAX;\n\n\t\tfor (int i = 0; i < static_cast<int>(nums.size()) - 2; ++i) {\n\t\t\tint left = i + 1;\n\t\t\tint right = nums.size() - 1;\n\n\t\t\twhile (left < right) {\n\t\t\t\tint sum = nums[i] + nums[left] + nums[right];\n\n\t\t\t\tif (abs(sum - target) < abs(closest - target)) {\n\t\t\t\t\tclosest = sum;\n\t\t\t\t}\n\n\t\t\t\tif (sum < target) {\n\t\t\t\t\t++left;\n\t\t\t\t} else if (sum > target) {\n\t\t\t\t\t--right;\n\t\t\t\t} else {\n\t\t\t\t\treturn sum;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn closest;\n\t}\n};",
    "lineCount": 40
  },
  {
    "id": 17,
    "title": "Letter Combinations of a Phone Number",
    "variant": null,
    "fileName": "17thday_leetcode.cpp",
    "code": "#include <string>\n#include <vector>\n#include <unordered_map>\n\nusing namespace std;\n\n// LeetCode #17: Letter Combinations of a Phone Number\n// Return all letter combinations from phone keypad.\n// Time Complexity: O(4^n)\n// Space Complexity: O(4^n)\nclass Solution {\npublic:\n\tvector<string> letterCombinations(string digits) {\n\t\tif (digits.empty()) return {};\n\n\t\tunordered_map<char, string> mapping = {\n\t\t\t{'2', \"abc\"}, {'3', \"def\"}, {'4', \"ghi\"}, {'5', \"jkl\"},\n\t\t\t{'6', \"mno\"}, {'7', \"pqrs\"}, {'8', \"tuv\"}, {'9', \"wxyz\"}\n\t\t};\n\n\t\tvector<string> result = {\"\"};\n\n\t\tfor (char digit : digits) {\n\t\t\tvector<string> temp;\n\t\t\tfor (string& combo : result) {\n\t\t\t\tfor (char letter : mapping[digit]) {\n\t\t\t\t\ttemp.push_back(combo + letter);\n\t\t\t\t}\n\t\t\t}\n\t\t\tresult = temp;\n\t\t}\n\n\t\treturn result;\n\t}\n};",
    "lineCount": 35
  },
  {
    "id": 18,
    "title": "4Sum",
    "variant": null,
    "fileName": "18thday_leetcode.cpp",
    "code": "#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\n// LeetCode #18: 4Sum\n// Find all unique quadruplets that sum to target.\n// Time Complexity: O(n^3)\n// Space Complexity: O(1) excluding output\nclass Solution {\npublic:\n\tvector<vector<int>> fourSum(vector<int>& nums, int target) {\n\t\tsort(nums.begin(), nums.end());\n\t\tvector<vector<int>> result;\n\n\t\tint n = nums.size();\n\t\tfor (int i = 0; i < n - 3; ++i) {\n\t\t\tif (i > 0 && nums[i] == nums[i - 1]) continue;\n\n\t\t\tfor (int j = i + 1; j < n - 2; ++j) {\n\t\t\t\tif (j > i + 1 && nums[j] == nums[j - 1]) continue;\n\n\t\t\t\tint left = j + 1;\n\t\t\t\tint right = n - 1;\n\n\t\t\t\twhile (left < right) {\n\t\t\t\t\tlong long sum = (long long)nums[i] + nums[j] + nums[left] + nums[right];\n\t\t\t\t\tif (sum == target) {\n\t\t\t\t\t\tresult.push_back({nums[i], nums[j], nums[left], nums[right]});\n\t\t\t\t\t\twhile (left < right && nums[left] == nums[left + 1]) ++left;\n\t\t\t\t\t\twhile (left < right && nums[right] == nums[right - 1]) --right;\n\t\t\t\t\t\t++left;\n\t\t\t\t\t\t--right;\n\t\t\t\t\t} else if (sum < target) {\n\t\t\t\t\t\t++left;\n\t\t\t\t\t} else {\n\t\t\t\t\t\t--right;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn result;\n\t}\n};",
    "lineCount": 45
  },
  {
    "id": 19,
    "title": "Remove Nth Node From End of List",
    "variant": null,
    "fileName": "19thday_leetcode.cpp",
    "code": "#include <cstddef>\n\nusing namespace std;\n\n// LeetCode #19: Remove Nth Node From End of List\n// Remove the nth node from end of linked list.\n// Time Complexity: O(n)\n// Space Complexity: O(1)\nstruct ListNode {\n\tint val;\n\tListNode* next;\n\tListNode() : val(0), next(nullptr) {}\n\texplicit ListNode(int x) : val(x), next(nullptr) {}\n\tListNode(int x, ListNode* nextNode) : val(x), next(nextNode) {}\n};\n\nclass Solution {\npublic:\n\tListNode* removeNthFromEnd(ListNode* head, int n) {\n\t\tListNode dummy(0, head);\n\t\tListNode* first = &dummy;\n\t\tListNode* second = &dummy;\n\n\t\tfor (int i = 0; i <= n; ++i) {\n\t\t\tfirst = first->next;\n\t\t}\n\n\t\twhile (first != nullptr) {\n\t\t\tfirst = first->next;\n\t\t\tsecond = second->next;\n\t\t}\n\n\t\tsecond->next = second->next->next;\n\t\treturn dummy.next;\n\t}\n};",
    "lineCount": 36
  },
  {
    "id": 20,
    "title": "Valid Parentheses",
    "variant": null,
    "fileName": "20thday_leetcode.cpp",
    "code": "#include <stack>\n#include <string>\n\nusing namespace std;\n\n// LeetCode #20: Valid Parentheses\n// Determine if input string has valid matching brackets.\n// Time Complexity: O(n)\n// Space Complexity: O(n)\nclass Solution {\npublic:\n\tbool isValid(string s) {\n\t\tstack<char> st;\n\n\t\tfor (char ch : s) {\n\t\t\tif (ch == '(' || ch == '{' || ch == '[') {\n\t\t\t\tst.push(ch);\n\t\t\t} else {\n\t\t\t\tif (st.empty()) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\n\t\t\t\tchar top = st.top();\n\t\t\t\tst.pop();\n\n\t\t\t\tif ((ch == ')' && top != '(') ||\n\t\t\t\t\t(ch == '}' && top != '{') ||\n\t\t\t\t\t(ch == ']' && top != '[')) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn st.empty();\n\t}\n};",
    "lineCount": 36
  },
  {
    "id": 21,
    "title": "Merge Two Sorted Lists",
    "variant": null,
    "fileName": "21stday_leetcode.cpp",
    "code": "#include <cstddef>\n\nusing namespace std;\n\n// LeetCode #21: Merge Two Sorted Lists\n// Merge two sorted linked lists into one sorted list.\n// Time Complexity: O(n + m)\n// Space Complexity: O(1)\nstruct ListNode {\n\tint val;\n\tListNode* next;\n\tListNode() : val(0), next(nullptr) {}\n\texplicit ListNode(int x) : val(x), next(nullptr) {}\n\tListNode(int x, ListNode* nextNode) : val(x), next(nextNode) {}\n};\n\nclass Solution {\npublic:\n\tListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n\t\tListNode dummy(0);\n\t\tListNode* tail = &dummy;\n\n\t\twhile (list1 && list2) {\n\t\t\tif (list1->val <= list2->val) {\n\t\t\t\ttail->next = list1;\n\t\t\t\tlist1 = list1->next;\n\t\t\t} else {\n\t\t\t\ttail->next = list2;\n\t\t\t\tlist2 = list2->next;\n\t\t\t}\n\t\t\ttail = tail->next;\n\t\t}\n\n\t\ttail->next = list1 ? list1 : list2;\n\t\treturn dummy.next;\n\t}\n};",
    "lineCount": 37
  },
  {
    "id": 22,
    "title": "Generate Parentheses",
    "variant": null,
    "fileName": "22ndday_leetcode.cpp",
    "code": "#include <string>\n#include <vector>\n\nusing namespace std;\n\n// LeetCode #22: Generate Parentheses\n// Generate all combinations of well-formed parentheses.\n// Time Complexity: O(4^n / sqrt(n))\n// Space Complexity: O(n)\nclass Solution {\npublic:\n\tvector<string> generateParenthesis(int n) {\n\t\tvector<string> result;\n\t\tbacktrack(result, \"\", 0, 0, n);\n\t\treturn result;\n\t}\n\nprivate:\n\tvoid backtrack(vector<string>& result, string current, int open, int close, int n) {\n\t\tif (current.size() == 2 * n) {\n\t\t\tresult.push_back(current);\n\t\t\treturn;\n\t\t}\n\n\t\tif (open < n) {\n\t\t\tbacktrack(result, current + \"(\", open + 1, close, n);\n\t\t}\n\n\t\tif (close < open) {\n\t\t\tbacktrack(result, current + \")\", open, close + 1, n);\n\t\t}\n\t}\n};",
    "lineCount": 33
  },
  {
    "id": 23,
    "title": "Merge k Sorted Lists",
    "variant": null,
    "fileName": "23rdday_leetcode.cpp",
    "code": "#include <vector>\n#include <queue>\n\nusing namespace std;\n\n// LeetCode #23: Merge k Sorted Lists\n// Merge k sorted linked lists into one sorted list.\n// Time Complexity: O(n log k)\n// Space Complexity: O(k)\nstruct ListNode {\n\tint val;\n\tListNode* next;\n\tListNode() : val(0), next(nullptr) {}\n\texplicit ListNode(int x) : val(x), next(nullptr) {}\n\tListNode(int x, ListNode* nextNode) : val(x), next(nextNode) {}\n};\n\nclass Solution {\npublic:\n\tListNode* mergeKLists(vector<ListNode*>& lists) {\n\t\tif (lists.empty()) return nullptr;\n\n\t\tauto cmp = [](ListNode* a, ListNode* b) {\n\t\t\treturn a->val > b->val;\n\t\t};\n\t\tpriority_queue<ListNode*, vector<ListNode*>, decltype(cmp)> pq(cmp);\n\n\t\tfor (ListNode* list : lists) {\n\t\t\tif (list) pq.push(list);\n\t\t}\n\n\t\tListNode dummy(0);\n\t\tListNode* tail = &dummy;\n\n\t\twhile (!pq.empty()) {\n\t\t\tListNode* node = pq.top();\n\t\t\tpq.pop();\n\t\t\ttail->next = node;\n\t\t\ttail = tail->next;\n\n\t\t\tif (node->next) {\n\t\t\t\tpq.push(node->next);\n\t\t\t}\n\t\t}\n\n\t\treturn dummy.next;\n\t}\n};",
    "lineCount": 48
  },
  {
    "id": 24,
    "title": "Swap Nodes in Pairs",
    "variant": null,
    "fileName": "24thday_leetcode.cpp",
    "code": "#include <cstddef>\n\nusing namespace std;\n\n// LeetCode #24: Swap Nodes in Pairs\n// Swap adjacent nodes in a linked list.\n// Time Complexity: O(n)\n// Space Complexity: O(1)\nstruct ListNode {\n\tint val;\n\tListNode* next;\n\tListNode() : val(0), next(nullptr) {}\n\texplicit ListNode(int x) : val(x), next(nullptr) {}\n\tListNode(int x, ListNode* nextNode) : val(x), next(nextNode) {}\n};\n\nclass Solution {\npublic:\n\tListNode* swapPairs(ListNode* head) {\n\t\tListNode dummy(0, head);\n\t\tListNode* prev = &dummy;\n\n\t\twhile (prev->next && prev->next->next) {\n\t\t\tListNode* first = prev->next;\n\t\t\tListNode* second = prev->next->next;\n\n\t\t\tfirst->next = second->next;\n\t\t\tsecond->next = first;\n\t\t\tprev->next = second;\n\n\t\t\tprev = first;\n\t\t}\n\n\t\treturn dummy.next;\n\t}\n};",
    "lineCount": 36
  },
  {
    "id": 25,
    "title": "Reverse Nodes in k-Group",
    "variant": null,
    "fileName": "25thday_leetcode.cpp",
    "code": "#include <cstddef>\n\nusing namespace std;\n\n// LeetCode #25: Reverse Nodes in k-Group\n// Reverse nodes of a linked list k at a time.\n// Time Complexity: O(n)\n// Space Complexity: O(1)\n// struct ListNode {\n// \tint val;\n// \tListNode* next;\n// \tListNode() : val(0), next(nullptr) {}\n// \texplicit ListNode(int x) : val(x), next(nullptr) {}\n// \tListNode(int x, ListNode* nextNode) : val(x), next(nextNode) {}\n// };\n\nclass Solution {\npublic:\n\tListNode* reverseKGroup(ListNode* head, int k) {\n\t\tListNode dummy(0, head);\n\t\tListNode* prev = &dummy;\n\n\t\twhile (true) {\n\t\t\tListNode* kth = getKth(prev, k);\n\t\t\tif (!kth) break;\n\n\t\t\tListNode* nextGroup = kth->next;\n\t\t\treverse(prev->next, kth);\n\t\t\tListNode* temp = prev->next;\n\t\t\tprev->next = kth;\n\t\t\tprev = temp;\n\t\t\ttemp->next = nextGroup;\n\t\t}\n\n\t\treturn dummy.next;\n\t}\n\nprivate:\n\tListNode* getKth(ListNode* curr, int k) {\n\t\twhile (curr && k > 0) {\n\t\t\tcurr = curr->next;\n\t\t\t--k;\n\t\t}\n\t\treturn curr;\n\t}\n\n\tvoid reverse(ListNode* head, ListNode* tail) {\n\t\tListNode* prev = tail->next;\n\t\tListNode* curr = head;\n\n\t\twhile (prev != tail) {\n\t\t\tListNode* next = curr->next;\n\t\t\tcurr->next = prev;\n\t\t\tprev = curr;\n\t\t\tcurr = next;\n\t\t}\n\t}\n};",
    "lineCount": 58
  },
  {
    "id": 26,
    "title": "Remove Duplicates from Sorted Array",
    "variant": null,
    "fileName": "26thday_leetcode.cpp",
    "code": "#include <vector>\n\nusing namespace std;\n\n// LeetCode #26: Remove Duplicates from Sorted Array\n// Remove duplicates in-place, return new length.\n// Time Complexity: O(n)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tint removeDuplicates(vector<int>& nums) {\n\t\tif (nums.empty()) return 0;\n\n\t\tint write = 1;\n\t\tfor (int read = 1; read < static_cast<int>(nums.size()); ++read) {\n\t\t\tif (nums[read] != nums[read - 1]) {\n\t\t\t\tnums[write] = nums[read];\n\t\t\t\t++write;\n\t\t\t}\n\t\t}\n\n\t\treturn write;\n\t}\n};",
    "lineCount": 24
  },
  {
    "id": 27,
    "title": "Remove Element",
    "variant": null,
    "fileName": "27thday_leetcode.cpp",
    "code": "#include <vector>\n\nusing namespace std;\n\n// LeetCode #27: Remove Element\n// Remove all instances of val in-place.\n// Time Complexity: O(n)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tint removeElement(vector<int>& nums, int val) {\n\t\tint write = 0;\n\n\t\tfor (int read = 0; read < static_cast<int>(nums.size()); ++read) {\n\t\t\tif (nums[read] != val) {\n\t\t\t\tnums[write] = nums[read];\n\t\t\t\t++write;\n\t\t\t}\n\t\t}\n\n\t\treturn write;\n\t}\n};",
    "lineCount": 23
  },
  {
    "id": 28,
    "title": "Find the Index of the First Occurrence in a String",
    "variant": null,
    "fileName": "28thday_leetcode.cpp",
    "code": "#include <string>\n\nusing namespace std;\n\n// LeetCode #28: Find the Index of the First Occurrence in a String\n// Return index of first occurrence of needle in haystack.\n// Time Complexity: O(n * m)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tint strStr(string haystack, string needle) {\n\t\tif (needle.empty()) return 0;\n\n\t\tint n = haystack.size();\n\t\tint m = needle.size();\n\n\t\tfor (int i = 0; i + m <= n; ++i) {\n\t\t\tint j = 0;\n\t\t\twhile (j < m && haystack[i + j] == needle[j]) {\n\t\t\t\t++j;\n\t\t\t}\n\t\t\tif (j == m) return i;\n\t\t}\n\n\t\treturn -1;\n\t}\n};",
    "lineCount": 27
  },
  {
    "id": 29,
    "title": "Divide Two Integers",
    "variant": null,
    "fileName": "29thday_leetcode.cpp",
    "code": "#include <climits>\n\nusing namespace std;\n\n// LeetCode #29: Divide Two Integers\n// Divide without using multiplication, division or modulo.\n// Time Complexity: O(log n)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tint divide(int dividend, int divisor) {\n\t\tif (dividend == INT_MIN && divisor == -1) {\n\t\t\treturn INT_MAX;\n\t\t}\n\n\t\tlong long a = abs(static_cast<long long>(dividend));\n\t\tlong long b = abs(static_cast<long long>(divisor));\n\t\tint result = 0;\n\n\t\twhile (a >= b) {\n\t\t\tlong long temp = b;\n\t\t\tint count = 1;\n\n\t\t\twhile (a >= temp << 1) {\n\t\t\t\ttemp <<= 1;\n\t\t\t\tcount <<= 1;\n\t\t\t}\n\n\t\t\ta -= temp;\n\t\t\tresult += count;\n\t\t}\n\n\t\treturn (dividend < 0) ^ (divisor < 0) ? -result : result;\n\t}\n};",
    "lineCount": 35
  },
  {
    "id": 30,
    "title": "Substring with Concatenation of All Words",
    "variant": null,
    "fileName": "30thday_leetcode.cpp",
    "code": "#include <string>\n#include <vector>\n#include <unordered_map>\n\nusing namespace std;\n\n// LeetCode #30: Substring with Concatenation of All Words\n// Find all indices where a substring consisting of all words appears.\n// Time Complexity: O(n * m)\n// Space Complexity: O(k)\nclass Solution {\npublic:\n\tvector<int> findSubstring(string s, vector<string>& words) {\n\t\tvector<int> result;\n\t\tif (words.empty()) return result;\n\n\t\tunordered_map<string, int> wordCount;\n\t\tfor (const string& word : words) {\n\t\t\twordCount[word]++;\n\t\t}\n\n\t\tint wordLen = words[0].size();\n\t\tint totalLen = wordLen * words.size();\n\n\t\tfor (int i = 0; i + totalLen <= static_cast<int>(s.size()); ++i) {\n\t\t\tunordered_map<string, int> seen;\n\t\t\tfor (int j = 0; j < static_cast<int>(words.size()); ++j) {\n\t\t\t\tstring word = s.substr(i + j * wordLen, wordLen);\n\t\t\t\tif (wordCount.find(word) == wordCount.end()) break;\n\t\t\t\tseen[word]++;\n\t\t\t\tif (seen[word] > wordCount[word]) break;\n\t\t\t\tif (j == static_cast<int>(words.size()) - 1) {\n\t\t\t\t\tresult.push_back(i);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn result;\n\t}\n};",
    "lineCount": 40
  },
  {
    "id": 31,
    "title": "Next Permutation",
    "variant": null,
    "fileName": "31stday_leetcode.cpp",
    "code": "#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\n// LeetCode #31: Next Permutation\n// Modify array in-place to next lexicographic permutation.\n// Time Complexity: O(n)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tvoid nextPermutation(vector<int>& nums) {\n\t\tint i = nums.size() - 2;\n\n\t\twhile (i >= 0 && nums[i] >= nums[i + 1]) {\n\t\t\t--i;\n\t\t}\n\n\t\tif (i >= 0) {\n\t\t\tint j = nums.size() - 1;\n\t\t\twhile (j > i && nums[j] <= nums[i]) {\n\t\t\t\t--j;\n\t\t\t}\n\t\t\tswap(nums[i], nums[j]);\n\t\t}\n\n\t\treverse(nums.begin() + i + 1, nums.end());\n\t}\n};",
    "lineCount": 29
  },
  {
    "id": 32,
    "title": "Longest Valid Parentheses",
    "variant": null,
    "fileName": "32ndday_leetcode.cpp",
    "code": "#include <string>\n\nusing namespace std;\n\n// LeetCode #32: Longest Valid Parentheses\n// Find length of longest valid parentheses substring.\n// Time Complexity: O(n)\n// Space Complexity: O(n)\nclass Solution {\npublic:\n\tint longestValidParentheses(string s) {\n\t\tvector<int> dp(s.size(), 0);\n\t\tint maxLen = 0;\n\n\t\tfor (int i = 1; i < static_cast<int>(s.size()); ++i) {\n\t\t\tif (s[i] == ')') {\n\t\t\t\tif (s[i - 1] == '(') {\n\t\t\t\t\tdp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;\n\t\t\t\t} else if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] == '(') {\n\t\t\t\t\tdp[i] = dp[i - 1] + 2 + (i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0);\n\t\t\t\t}\n\t\t\t\tmaxLen = max(maxLen, dp[i]);\n\t\t\t}\n\t\t}\n\n\t\treturn maxLen;\n\t}\n};",
    "lineCount": 28
  },
  {
    "id": 33,
    "title": "Search in Rotated Sorted Array",
    "variant": null,
    "fileName": "33rdday_leetcode.cpp",
    "code": "#include <vector>\n\nusing namespace std;\n\n// LeetCode #33: Search in Rotated Sorted Array\n// Search target in rotated sorted array.\n// Time Complexity: O(log n)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tint search(vector<int>& nums, int target) {\n\t\tint left = 0;\n\t\tint right = nums.size() - 1;\n\n\t\twhile (left <= right) {\n\t\t\tint mid = left + (right - left) / 2;\n\n\t\t\tif (nums[mid] == target) return mid;\n\n\t\t\tif (nums[left] <= nums[mid]) {\n\t\t\t\tif (nums[left] <= target && target < nums[mid]) {\n\t\t\t\t\tright = mid - 1;\n\t\t\t\t} else {\n\t\t\t\t\tleft = mid + 1;\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tif (nums[mid] < target && target <= nums[right]) {\n\t\t\t\t\tleft = mid + 1;\n\t\t\t\t} else {\n\t\t\t\t\tright = mid - 1;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn -1;\n\t}\n};",
    "lineCount": 37
  },
  {
    "id": 34,
    "title": "Find First and Last Position of Element in Sorted Array",
    "variant": null,
    "fileName": "34thday_leetcode.cpp",
    "code": "#include <vector>\n\nusing namespace std;\n\n// LeetCode #34: Find First and Last Position of Element in Sorted Array\n// Find first and last position of target in sorted array.\n// Time Complexity: O(log n)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tvector<int> searchRange(vector<int>& nums, int target) {\n\t\tint left = findFirst(nums, target);\n\t\tint right = findLast(nums, target);\n\t\treturn {left, right};\n\t}\n\nprivate:\n\tint findFirst(vector<int>& nums, int target) {\n\t\tint left = 0, right = nums.size() - 1;\n\t\tint result = -1;\n\n\t\twhile (left <= right) {\n\t\t\tint mid = left + (right - left) / 2;\n\t\t\tif (nums[mid] == target) {\n\t\t\t\tresult = mid;\n\t\t\t\tright = mid - 1;\n\t\t\t} else if (nums[mid] < target) {\n\t\t\t\tleft = mid + 1;\n\t\t\t} else {\n\t\t\t\tright = mid - 1;\n\t\t\t}\n\t\t}\n\n\t\treturn result;\n\t}\n\n\tint findLast(vector<int>& nums, int target) {\n\t\tint left = 0, right = nums.size() - 1;\n\t\tint result = -1;\n\n\t\twhile (left <= right) {\n\t\t\tint mid = left + (right - left) / 2;\n\t\t\tif (nums[mid] == target) {\n\t\t\t\tresult = mid;\n\t\t\t\tleft = mid + 1;\n\t\t\t} else if (nums[mid] < target) {\n\t\t\t\tleft = mid + 1;\n\t\t\t} else {\n\t\t\t\tright = mid - 1;\n\t\t\t}\n\t\t}\n\n\t\treturn result;\n\t}\n};",
    "lineCount": 55
  },
  {
    "id": 35,
    "title": "Search Insert Position",
    "variant": null,
    "fileName": "35thday_leetcode.cpp",
    "code": "#include <vector>\n\nusing namespace std;\n\n// LeetCode #35: Search Insert Position\n// Return index or insertion position of target.\n// Time Complexity: O(log n)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tint searchInsert(vector<int>& nums, int target) {\n\t\tint left = 0;\n\t\tint right = nums.size();\n\n\t\twhile (left < right) {\n\t\t\tint mid = left + (right - left) / 2;\n\t\t\tif (nums[mid] < target) {\n\t\t\t\tleft = mid + 1;\n\t\t\t} else {\n\t\t\t\tright = mid;\n\t\t\t}\n\t\t}\n\n\t\treturn left;\n\t}\n};",
    "lineCount": 26
  },
  {
    "id": 36,
    "title": "Valid Sudoku",
    "variant": null,
    "fileName": "36thday_leetcode.cpp",
    "code": "#include <vector>\n#include <string>\n\nusing namespace std;\n\n// LeetCode #36: Valid Sudoku\n// Check if 9x9 Sudoku board is valid.\n// Time Complexity: O(1) - constant 81 cells\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tbool isValidSudoku(vector<vector<char>>& board) {\n\t\tvector<vector<bool>> rows(9, vector<bool>(9, false));\n\t\tvector<vector<bool>> cols(9, vector<bool>(9, false));\n\t\tvector<vector<bool>> boxes(9, vector<bool>(9, false));\n\n\t\tfor (int i = 0; i < 9; ++i) {\n\t\t\tfor (int j = 0; j < 9; ++j) {\n\t\t\t\tif (board[i][j] == '.') continue;\n\n\t\t\t\tint num = board[i][j] - '1';\n\t\t\t\tint boxIdx = (i / 3) * 3 + (j / 3);\n\n\t\t\t\tif (rows[i][num] || cols[j][num] || boxes[boxIdx][num]) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\n\t\t\t\trows[i][num] = true;\n\t\t\t\tcols[j][num] = true;\n\t\t\t\tboxes[boxIdx][num] = true;\n\t\t\t}\n\t\t}\n\n\t\treturn true;\n\t}\n};",
    "lineCount": 36
  },
  {
    "id": 37,
    "title": "Sudoku Solver",
    "variant": null,
    "fileName": "37thday_leetcode.cpp",
    "code": "#include <vector>\n\nusing namespace std;\n\n// LeetCode #37: Sudoku Solver\n// Solve a 9x9 Sudoku board using backtracking.\n// Time Complexity: O(9^(9*9)) worst case\n// Space Complexity: O(1) excluding recursion\nclass Solution {\npublic:\n\tvoid solveSudoku(vector<vector<char>>& board) {\n\t\tbacktrack(board);\n\t}\n\nprivate:\n\tbool backtrack(vector<vector<char>>& board) {\n\t\tfor (int i = 0; i < 9; ++i) {\n\t\t\tfor (int j = 0; j < 9; ++j) {\n\t\t\t\tif (board[i][j] != '.') continue;\n\n\t\t\t\tfor (char num = '1'; num <= '9'; ++num) {\n\t\t\t\t\tif (isValid(board, i, j, num)) {\n\t\t\t\t\t\tboard[i][j] = num;\n\n\t\t\t\t\t\tif (backtrack(board)) return true;\n\n\t\t\t\t\t\tboard[i][j] = '.';\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\n\t\treturn true;\n\t}\n\n\tbool isValid(vector<vector<char>>& board, int row, int col, char num) {\n\t\tfor (int i = 0; i < 9; ++i) {\n\t\t\tif (board[row][i] == num) return false;\n\t\t\tif (board[i][col] == num) return false;\n\t\t}\n\n\t\tint boxRow = (row / 3) * 3;\n\t\tint boxCol = (col / 3) * 3;\n\n\t\tfor (int i = boxRow; i < boxRow + 3; ++i) {\n\t\t\tfor (int j = boxCol; j < boxCol + 3; ++j) {\n\t\t\t\tif (board[i][j] == num) return false;\n\t\t\t}\n\t\t}\n\n\t\treturn true;\n\t}\n};",
    "lineCount": 55
  },
  {
    "id": 38,
    "title": "Count and Say",
    "variant": null,
    "fileName": "38thday_leetcode.cpp",
    "code": "#include <string>\n\nusing namespace std;\n\n// LeetCode #38: Count and Say\n// Generate count-and-say sequence.\n// Time Complexity: O(n * len)\n// Space Complexity: O(len)\nclass Solution {\npublic:\n\tstring countAndSay(int n) {\n\t\tstring result = \"1\";\n\n\t\tfor (int i = 1; i < n; ++i) {\n\t\t\tresult = nextSequence(result);\n\t\t}\n\n\t\treturn result;\n\t}\n\nprivate:\n\tstring nextSequence(string seq) {\n\t\tstring result;\n\t\tint count = 1;\n\n\t\tfor (int i = 0; i < static_cast<int>(seq.size()); ++i) {\n\t\t\tif (i + 1 < static_cast<int>(seq.size()) && seq[i] == seq[i + 1]) {\n\t\t\t\t++count;\n\t\t\t} else {\n\t\t\t\tresult += to_string(count) + seq[i];\n\t\t\t\tcount = 1;\n\t\t\t}\n\t\t}\n\n\t\treturn result;\n\t}\n};",
    "lineCount": 37
  },
  {
    "id": 39,
    "title": "Combination Sum",
    "variant": null,
    "fileName": "39thday_leetcode.cpp",
    "code": "#include <vector>\n\nusing namespace std;\n\n// LeetCode #39: Combination Sum\n// Find combinations that sum to target.\n// Time Complexity: O(N^(T/M))\n// Space Complexity: O(T/M)\nclass Solution {\npublic:\n\tvector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n\t\tvector<vector<int>> result;\n\t\tvector<int> path;\n\t\tbacktrack(candidates, target, 0, path, result);\n\t\treturn result;\n\t}\n\nprivate:\n\tvoid backtrack(vector<int>& candidates, int target, int start, vector<int>& path, vector<vector<int>>& result) {\n\t\tif (target == 0) {\n\t\t\tresult.push_back(path);\n\t\t\treturn;\n\t\t}\n\n\t\tif (target < 0) return;\n\n\t\tfor (int i = start; i < static_cast<int>(candidates.size()); ++i) {\n\t\t\tpath.push_back(candidates[i]);\n\t\t\tbacktrack(candidates, target - candidates[i], i, path, result);\n\t\t\tpath.pop_back();\n\t\t}\n\t}\n};",
    "lineCount": 33
  },
  {
    "id": 40,
    "title": "Combination Sum II",
    "variant": null,
    "fileName": "40thday_leetcode.cpp",
    "code": "#include <vector>\n\nusing namespace std;\n\n// LeetCode #40: Combination Sum II\n// Find combinations (each element used once) that sum to target.\n// Time Complexity: O(2^n)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tvector<vector<int>> combinationSum2(vector<int>& candidates, int target) {\n\t\tsort(candidates.begin(), candidates.end());\n\t\tvector<vector<int>> result;\n\t\tvector<int> path;\n\t\tbacktrack(candidates, target, 0, path, result);\n\t\treturn result;\n\t}\n\nprivate:\n\tvoid backtrack(vector<int>& candidates, int target, int start, vector<int>& path, vector<vector<int>>& result) {\n\t\tif (target == 0) {\n\t\t\tresult.push_back(path);\n\t\t\treturn;\n\t\t}\n\n\t\tif (target < 0) return;\n\n\t\tfor (int i = start; i < static_cast<int>(candidates.size()); ++i) {\n\t\t\tif (i > start && candidates[i] == candidates[i - 1]) continue;\n\n\t\t\tpath.push_back(candidates[i]);\n\t\t\tbacktrack(candidates, target - candidates[i], i + 1, path, result);\n\t\t\tpath.pop_back();\n\t\t}\n\t}\n};",
    "lineCount": 36
  },
  {
    "id": 41,
    "title": "First Missing Positive",
    "variant": null,
    "fileName": "41stday_leetcode.cpp",
    "code": "#include <vector>\n\nusing namespace std;\n\n// LeetCode #41: First Missing Positive\n// Find first missing positive integer.\n// Time Complexity: O(n)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tint firstMissingPositive(vector<int>& nums) {\n\t\tint n = nums.size();\n\n\t\tfor (int i = 0; i < n; ++i) {\n\t\t\twhile (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {\n\t\t\t\tswap(nums[i], nums[nums[i] - 1]);\n\t\t\t}\n\t\t}\n\n\t\tfor (int i = 0; i < n; ++i) {\n\t\t\tif (nums[i] != i + 1) return i + 1;\n\t\t}\n\n\t\treturn n + 1;\n\t}\n};",
    "lineCount": 26
  },
  {
    "id": 42,
    "title": "Trapping Rain Water",
    "variant": null,
    "fileName": "42ndday_leetcode.cpp",
    "code": "#include <vector>\n\nusing namespace std;\n\n// LeetCode #42: Trapping Rain Water\n// Trap rainwater between elevation bars.\n// Time Complexity: O(n)\n// Space Complexity: O(n)\nclass Solution {\npublic:\n\tint trap(vector<int>& height) {\n\t\tif (height.empty()) return 0;\n\n\t\tint n = height.size();\n\t\tvector<int> leftMax(n), rightMax(n);\n\n\t\tleftMax[0] = height[0];\n\t\tfor (int i = 1; i < n; ++i) {\n\t\t\tleftMax[i] = max(leftMax[i - 1], height[i]);\n\t\t}\n\n\t\trightMax[n - 1] = height[n - 1];\n\t\tfor (int i = n - 2; i >= 0; --i) {\n\t\t\trightMax[i] = max(rightMax[i + 1], height[i]);\n\t\t}\n\n\t\tint water = 0;\n\t\tfor (int i = 0; i < n; ++i) {\n\t\t\twater += min(leftMax[i], rightMax[i]) - height[i];\n\t\t}\n\n\t\treturn water;\n\t}\n};",
    "lineCount": 34
  },
  {
    "id": 43,
    "title": "Multiply Strings",
    "variant": null,
    "fileName": "43rdday_leetcode.cpp",
    "code": "#include <string>\n\nusing namespace std;\n\n// LeetCode #43: Multiply Strings\n// Multiply two non-negative integer strings.\n// Time Complexity: O(n * m)\n// Space Complexity: O(n + m)\nclass Solution {\npublic:\n\tstring multiply(string num1, string num2) {\n\t\tif (num1 == \"0\" || num2 == \"0\") return \"0\";\n\n\t\tint n = num1.size();\n\t\tint m = num2.size();\n\t\tvector<int> result(n + m, 0);\n\n\t\tfor (int i = n - 1; i >= 0; --i) {\n\t\t\tfor (int j = m - 1; j >= 0; --j) {\n\t\t\t\tint mul = (num1[i] - '0') * (num2[j] - '0');\n\t\t\t\tint p1 = i + j;\n\t\t\t\tint p2 = i + j + 1;\n\t\t\t\tint sum = mul + result[p2];\n\n\t\t\t\tresult[p2] = sum % 10;\n\t\t\t\tresult[p1] += sum / 10;\n\t\t\t}\n\t\t}\n\n\t\tstring ans;\n\t\tfor (int num : result) {\n\t\t\tif (!(ans.empty() && num == 0)) {\n\t\t\t\tans += to_string(num);\n\t\t\t}\n\t\t}\n\n\t\treturn ans;\n\t}\n};",
    "lineCount": 39
  },
  {
    "id": 44,
    "title": "Wildcard Matching",
    "variant": null,
    "fileName": "44thday_leetcode.cpp",
    "code": "#include <string>\n\nusing namespace std;\n\n// LeetCode #44: Wildcard Matching\n// Implement wildcard pattern matching.\n// Time Complexity: O(n * m)\n// Space Complexity: O(n * m)\nclass Solution {\npublic:\n\tbool isMatch(string s, string p) {\n\t\tint n = s.size();\n\t\tint m = p.size();\n\t\tvector<vector<bool>> dp(n + 1, vector<bool>(m + 1, false));\n\n\t\tdp[0][0] = true;\n\n\t\tfor (int j = 1; j <= m; ++j) {\n\t\t\tif (p[j - 1] == '*') {\n\t\t\t\tdp[0][j] = dp[0][j - 1];\n\t\t\t}\n\t\t}\n\n\t\tfor (int i = 1; i <= n; ++i) {\n\t\t\tfor (int j = 1; j <= m; ++j) {\n\t\t\t\tif (p[j - 1] == '*') {\n\t\t\t\t\tdp[i][j] = dp[i][j - 1] || dp[i - 1][j];\n\t\t\t\t} else if (p[j - 1] == '?' || s[i - 1] == p[j - 1]) {\n\t\t\t\t\tdp[i][j] = dp[i - 1][j - 1];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn dp[n][m];\n\t}\n};",
    "lineCount": 36
  },
  {
    "id": 45,
    "title": "Jump Game II",
    "variant": null,
    "fileName": "45thday_leetcode.cpp",
    "code": "#include <vector>\n\nusing namespace std;\n\n// LeetCode #45: Jump Game II\n// Find minimum number of jumps to reach last index.\n// Time Complexity: O(n)\\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tint jump(vector<int>& nums) {\n\t\tint jumps = 0;\n\t\tint currentMax = 0;\n\t\tint nextMax = 0;\n\n\t\tfor (int i = 0; i < static_cast<int>(nums.size()) - 1; ++i) {\n\t\t\tnextMax = max(nextMax, i + nums[i]);\n\n\t\t\tif (i == currentMax) {\n\t\t\t\tjumps++;\n\t\t\t\tcurrentMax = nextMax;\n\t\t\t}\n\t\t}\n\n\t\treturn jumps;\n\t}\n};",
    "lineCount": 26
  },
  {
    "id": 46,
    "title": "Permutations",
    "variant": null,
    "fileName": "46thday_leetcode.cpp",
    "code": "#include <vector>\n\nusing namespace std;\n\n// LeetCode #46: Permutations\n// Generate all permutations of array.\n// Time Complexity: O(n * n!)\\n// Space Complexity: O(n!)\nclass Solution {\npublic:\n\tvector<vector<int>> permute(vector<int>& nums) {\n\t\tvector<vector<int>> result;\n\t\tbacktrack(nums, 0, result);\n\t\treturn result;\n\t}\n\nprivate:\n\tvoid backtrack(vector<int>& nums, int start, vector<vector<int>>& result) {\n\t\tif (start == static_cast<int>(nums.size())) {\n\t\t\tresult.push_back(nums);\n\t\t\treturn;\n\t\t}\n\n\t\tfor (int i = start; i < static_cast<int>(nums.size()); ++i) {\n\t\t\tswap(nums[start], nums[i]);\n\t\t\tbacktrack(nums, start + 1, result);\n\t\t\tswap(nums[start], nums[i]);\n\t\t}\n\t}\n};",
    "lineCount": 29
  },
  {
    "id": 47,
    "title": "Permutations II",
    "variant": null,
    "fileName": "47thday_leetcode.cpp",
    "code": "#include <vector>\n\nusing namespace std;\n\n// LeetCode #47: Permutations II\n// Generate all unique permutations with duplicates.\n// Time Complexity: O(n * n!)\\n// Space Complexity: O(n!)\nclass Solution {\npublic:\n\tvector<vector<int>> permuteUnique(vector<int>& nums) {\n\t\tsort(nums.begin(), nums.end());\n\t\tvector<vector<int>> result;\n\t\tvector<bool> used(nums.size(), false);\n\t\tvector<int> path;\n\t\tbacktrack(nums, used, path, result);\n\t\treturn result;\n\t}\n\nprivate:\n\tvoid backtrack(vector<int>& nums, vector<bool>& used, vector<int>& path, vector<vector<int>>& result) {\n\t\tif (path.size() == nums.size()) {\n\t\t\tresult.push_back(path);\n\t\t\treturn;\n\t\t}\n\n\t\tfor (int i = 0; i < static_cast<int>(nums.size()); ++i) {\n\t\t\tif (used[i] || (i > 0 && nums[i] == nums[i - 1] && !used[i - 1])) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\tused[i] = true;\n\t\t\tpath.push_back(nums[i]);\n\t\t\tbacktrack(nums, used, path, result);\n\t\t\tpath.pop_back();\n\t\t\tused[i] = false;\n\t\t}\n\t}\n};",
    "lineCount": 38
  },
  {
    "id": 48,
    "title": "Rotate Image",
    "variant": null,
    "fileName": "48thday_leetcode.cpp",
    "code": "#include <vector>\n\nusing namespace std;\n\n// LeetCode #48: Rotate Image\n// Rotate image 90 degrees clockwise in-place.\n// Time Complexity: O(n^2)\\n// Space Complexity: O(1)\nclass Solution {\npublic:\n\tvoid rotate(vector<vector<int>>& matrix) {\n\t\tint n = matrix.size();\n\n\t\tfor (int i = 0; i < n; ++i) {\n\t\t\tfor (int j = i + 1; j < n; ++j) {\n\t\t\t\tswap(matrix[i][j], matrix[j][i]);\n\t\t\t}\n\t\t}\n\n\t\tfor (int i = 0; i < n; ++i) {\n\t\t\treverse(matrix[i].begin(), matrix[i].end());\n\t\t}\n\t}\n};",
    "lineCount": 23
  },
  {
    "id": 49,
    "title": "Group Anagrams",
    "variant": null,
    "fileName": "49thday_leetcode.cpp",
    "code": "#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\n\nusing namespace std;\n\n// LeetCode #49: Group Anagrams\n// Group anagrams from list of strings.\n// Time Complexity: O(n * k log k)\n// Space Complexity: O(n * k)\nclass Solution {\npublic:\n\tvector<vector<string>> groupAnagrams(vector<string>& strs) {\n\t\tunordered_map<string, vector<string>> map;\n\n\t\tfor (const string& str : strs) {\n\t\t\tstring sorted_str = str;\n\t\t\tsort(sorted_str.begin(), sorted_str.end());\n\t\t\tmap[sorted_str].push_back(str);\n\t\t}\n\n\t\tvector<vector<string>> result;\n\t\tfor (auto& p : map) {\n\t\t\tresult.push_back(p.second);\n\t\t}\n\n\t\treturn result;\n\t}\n};",
    "lineCount": 30
  },
  {
    "id": 50,
    "title": "Pow",
    "variant": "x, n",
    "fileName": "50thday_leetcode.cpp",
    "code": "#include <climits>\n\nusing namespace std;\n\n// LeetCode #50: Pow(x, n)\n// Compute x raised to power n.\n// Time Complexity: O(log n)\n// Space Complexity: O(log n)\nclass Solution {\npublic:\n\tdouble myPow(double x, int n) {\n\t\tlong long N = n;\n\t\tif (N < 0) {\n\t\t\tx = 1 / x;\n\t\t\tN = -N;\n\t\t}\n\n\t\treturn fastPow(x, N);\n\t}\n\nprivate:\n\tdouble fastPow(double x, long long n) {\n\t\tif (n == 0) {\n\t\t\treturn 1.0;\n\t\t}\n\n\t\tdouble half = fastPow(x, n / 2);\n\n\t\tif (n % 2 == 0) {\n\t\t\treturn half * half;\n\t\t} else {\n\t\t\treturn half * half * x;\n\t\t}\n\t}\n};",
    "lineCount": 35
  },
  {
    "id": 51,
    "title": "N-Queens",
    "variant": null,
    "fileName": "51stday_leetcode.cpp",
    "code": "#include <vector>\n#include <string>\n#include <iostream>\n\nusing namespace std;\n\n// LeetCode #51: N-Queens\n// Problem:\n// Given an integer n, return all distinct solutions to the n-queens puzzle.\n// Each solution contains an n x n board configuration of the placement of the\n// queens, where 'Q' and '.' both indicate a queen and an empty space respectively.\n// Example (n = 4):\n// [\n//  [\".Q..\",\n//   \"...Q\",\n//   \"Q...\",\n//   \"..Q.\"],\n//  [\"..Q.\",\n//   \"Q...\",\n//   \"...Q\",\n//   \".Q..\"]\n// ]\n//\n// Approach (Backtracking):\n// We place queens row by row. For each row we try every column and check if\n// placing a queen at (row, col) conflicts with any previously placed queen.\n// To test conflicts in O(1) we maintain three boolean arrays:\n// - `cols[col]` for occupied columns,\n// - `diag1[row+col]` for occupied \"main\" diagonals,\n// - `diag2[row-col + (n-1)]` for occupied \"anti\" diagonals.\n// When we place a queen we mark those three arrays and recurse to the next row.\n// On backtrack we unmark them. When row == n we have a valid solution and\n// construct the board from the stored queen positions.\n//\n// Time Complexity: O(k) where k is number of generated placements (roughly O(n!))\n// Space Complexity: O(n) for recursion and bookkeeping arrays.\n//\n// I implemented the standard backtracking solution using vectors of booleans\n// and a vector<int> `queens` storing the column index for the queen in each row.\n\nclass Solution {\npublic:\n    vector<vector<string>> solveNQueens(int n) {\n        vector<vector<string>> res;\n        vector<int> queens(n, -1);\n        vector<bool> cols(n, false);\n        vector<bool> diag1(2 * n - 1, false); // row + col\n        vector<bool> diag2(2 * n - 1, false); // row - col + (n-1)\n\n        backtrack(0, n, queens, cols, diag1, diag2, res);\n        return res;\n    }\n\nprivate:\n    void backtrack(int row, int n, vector<int>& queens,\n                   vector<bool>& cols, vector<bool>& diag1,\n                   vector<bool>& diag2, vector<vector<string>>& res) {\n        if (row == n) {\n            res.push_back(buildBoard(queens, n));\n            return;\n        }\n\n        for (int col = 0; col < n; ++col) {\n            int d1 = row + col;\n            int d2 = row - col + (n - 1);\n            if (cols[col] || diag1[d1] || diag2[d2]) continue;\n\n            // place\n            queens[row] = col;\n            cols[col] = diag1[d1] = diag2[d2] = true;\n\n            backtrack(row + 1, n, queens, cols, diag1, diag2, res);\n\n            // undo\n            queens[row] = -1;\n            cols[col] = diag1[d1] = diag2[d2] = false;\n        }\n    }\n\n    vector<string> buildBoard(const vector<int>& queens, int n) {\n        vector<string> board;\n        for (int r = 0; r < n; ++r) {\n            string row(n, '.');\n            int c = queens[r];\n            if (c >= 0 && c < n) row[c] = 'Q';\n            board.push_back(row);\n        }\n        return board;\n    }\n};",
    "lineCount": 90
  },
  {
    "id": 52,
    "title": "N-Queens II",
    "variant": null,
    "fileName": "52ndday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #52: N-Queens II\n// Problem: Count the number of distinct solutions to the n-queens puzzle.\n// Approach: Backtracking similar to N-Queens, but increment a counter when\n// a full placement is found. Use boolean arrays for columns and diagonals.\n\nclass Solution {\npublic:\n    int totalNQueens(int n) {\n        int count = 0;\n        vector<int> queens(n, -1);\n        vector<bool> cols(n, false);\n        vector<bool> diag1(2*n-1, false);\n        vector<bool> diag2(2*n-1, false);\n        backtrack(0, n, queens, cols, diag1, diag2, count);\n        return count;\n    }\n\nprivate:\n    void backtrack(int row, int n, vector<int>& queens,\n                   vector<bool>& cols, vector<bool>& diag1,\n                   vector<bool>& diag2, int& count) {\n        if (row == n) { ++count; return; }\n        for (int col = 0; col < n; ++col) {\n            int d1 = row + col;\n            int d2 = row - col + (n-1);\n            if (cols[col] || diag1[d1] || diag2[d2]) continue;\n            queens[row] = col;\n            cols[col] = diag1[d1] = diag2[d2] = true;\n            backtrack(row+1, n, queens, cols, diag1, diag2, count);\n            cols[col] = diag1[d1] = diag2[d2] = false;\n            queens[row] = -1;\n        }\n    }\n};",
    "lineCount": 37
  },
  {
    "id": 53,
    "title": "Maximum Subarray",
    "variant": null,
    "fileName": "53rdday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #53: Maximum Subarray\n// Problem: Given an integer array, find the contiguous subarray with the largest sum.\n// Approach: Kadane's algorithm — track current max ending here and global max.\n\nclass Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        int best = nums[0];\n        int cur = nums[0];\n        for (size_t i = 1; i < nums.size(); ++i) {\n            cur = max(nums[i], cur + nums[i]);\n            best = max(best, cur);\n        }\n        return best;\n    }\n};",
    "lineCount": 19
  },
  {
    "id": 54,
    "title": "Spiral Matrix",
    "variant": null,
    "fileName": "54thday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #54: Spiral Matrix\n// Problem: Return elements of a matrix in spiral order.\n// Approach: Maintain boundaries (top,bottom,left,right) and traverse while\n// shrinking boundaries.\n\nclass Solution {\npublic:\n    vector<int> spiralOrder(vector<vector<int>>& matrix) {\n        vector<int> res;\n        if (matrix.empty() || matrix[0].empty()) return res;\n        int top = 0, bottom = matrix.size()-1;\n        int left = 0, right = matrix[0].size()-1;\n        while (top <= bottom && left <= right) {\n            for (int j = left; j <= right; ++j) res.push_back(matrix[top][j]);\n            ++top;\n            for (int i = top; i <= bottom && left <= right; ++i) res.push_back(matrix[i][right]);\n            --right;\n            if (top <= bottom) {\n                for (int j = right; j >= left; --j) res.push_back(matrix[bottom][j]);\n                --bottom;\n            }\n            if (left <= right) {\n                for (int i = bottom; i >= top; --i) res.push_back(matrix[i][left]);\n                ++left;\n            }\n        }\n        return res;\n    }\n};",
    "lineCount": 32
  },
  {
    "id": 55,
    "title": "Jump Game",
    "variant": null,
    "fileName": "55thday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #55: Jump Game\n// Problem: Determine if you can reach the last index given jump lengths.\n// Approach: Greedy — track the furthest reachable index.\n\nclass Solution {\npublic:\n    bool canJump(vector<int>& nums) {\n        int reach = 0;\n        for (int i = 0; i < (int)nums.size(); ++i) {\n            if (i > reach) return false;\n            reach = max(reach, i + nums[i]);\n            if (reach >= (int)nums.size()-1) return true;\n        }\n        return true;\n    }\n};",
    "lineCount": 19
  },
  {
    "id": 56,
    "title": "Merge Intervals",
    "variant": null,
    "fileName": "56thday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #56: Merge Intervals\n// Problem: Merge all overlapping intervals.\n// Approach: Sort by start and merge sequentially.\n\nclass Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        vector<vector<int>> res;\n        if (intervals.empty()) return res;\n        sort(intervals.begin(), intervals.end());\n        res.push_back(intervals[0]);\n        for (size_t i = 1; i < intervals.size(); ++i) {\n            auto &last = res.back();\n            if (intervals[i][0] <= last[1]) {\n                last[1] = max(last[1], intervals[i][1]);\n            } else {\n                res.push_back(intervals[i]);\n            }\n        }\n        return res;\n    }\n};",
    "lineCount": 25
  },
  {
    "id": 57,
    "title": "Insert Interval",
    "variant": null,
    "fileName": "57thday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #57: Insert Interval\n// Problem: Insert a new interval into a set of non-overlapping intervals and\n// merge if necessary.\n// Approach: Walk through intervals, add those before new interval, merge overlaps,\n// then add remaining.\n\nclass Solution {\npublic:\n    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {\n        vector<vector<int>> res;\n        int i = 0, n = intervals.size();\n        while (i < n && intervals[i][1] < newInterval[0]) res.push_back(intervals[i++]);\n        while (i < n && intervals[i][0] <= newInterval[1]) {\n            newInterval[0] = min(newInterval[0], intervals[i][0]);\n            newInterval[1] = max(newInterval[1], intervals[i][1]);\n            ++i;\n        }\n        res.push_back(newInterval);\n        while (i < n) res.push_back(intervals[i++]);\n        return res;\n    }\n};",
    "lineCount": 25
  },
  {
    "id": 58,
    "title": "Length of Last Word",
    "variant": null,
    "fileName": "58thday_leetcode.cpp",
    "code": "#include <string>\nusing namespace std;\n\n// LeetCode #58: Length of Last Word\n// Problem: Given a string s consisting of words and spaces, return the length of the last word.\n// Approach: Trim trailing spaces and count characters until next space.\n\nclass Solution {\npublic:\n    int lengthOfLastWord(const string& s) {\n        int i = s.size()-1;\n        while (i >= 0 && s[i] == ' ') --i;\n        int len = 0;\n        while (i >= 0 && s[i] != ' ') { --i; ++len; }\n        return len;\n    }\n};",
    "lineCount": 17
  },
  {
    "id": 59,
    "title": "Spiral Matrix II",
    "variant": null,
    "fileName": "59thday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #59: Spiral Matrix II\n// Problem: Generate an n x n matrix filled with elements from 1 to n^2 in spiral order.\n// Approach: Similar boundary traversal while writing numbers.\n\nclass Solution {\npublic:\n    vector<vector<int>> generateMatrix(int n) {\n        vector<vector<int>> mat(n, vector<int>(n));\n        int top = 0, bottom = n-1, left = 0, right = n-1;\n        int num = 1;\n        while (top <= bottom && left <= right) {\n            for (int j = left; j <= right; ++j) mat[top][j] = num++;\n            ++top;\n            for (int i = top; i <= bottom; ++i) mat[i][right] = num++;\n            --right;\n            if (top <= bottom) {\n                for (int j = right; j >= left; --j) mat[bottom][j] = num++;\n                --bottom;\n            }\n            if (left <= right) {\n                for (int i = bottom; i >= top; --i) mat[i][left] = num++;\n                ++left;\n            }\n        }\n        return mat;\n    }\n};",
    "lineCount": 30
  },
  {
    "id": 60,
    "title": "Permutation Sequence",
    "variant": null,
    "fileName": "60thday_leetcode.cpp",
    "code": "#include <string>\nusing namespace std;\n\n// LeetCode #60: Permutation Sequence\n// Problem: Return the k-th permutation sequence of numbers 1..n.\n// Approach: Use factorial number system to pick digits greedily.\n\nclass Solution {\npublic:\n    string getPermutation(int n, int k) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; ++i) nums[i] = i+1;\n        vector<int> fact(n+1, 1);\n        for (int i = 1; i <= n; ++i) fact[i] = fact[i-1]*i;\n        --k; // 0-based\n        string res;\n        for (int i = n; i >= 1; --i) {\n            int idx = k / fact[i-1];\n            k %= fact[i-1];\n            res.push_back(char('0' + nums[idx]));\n            nums.erase(nums.begin() + idx);\n        }\n        return res;\n    }\n};",
    "lineCount": 25
  },
  {
    "id": 61,
    "title": "Rotate List",
    "variant": null,
    "fileName": "61stday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #61: Rotate List\n// Problem: Given the head of a linked list, rotate the list to the right by k places.\n// Approach: Make list circular then break at new tail position. Handle k > length.\n\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x): val(x), next(nullptr) {}\n};\n\nclass Solution {\npublic:\n    ListNode* rotateRight(ListNode* head, int k) {\n        if (!head || k == 0) return head;\n        int len = 1;\n        ListNode* tail = head;\n        while (tail->next) { tail = tail->next; ++len; }\n        k %= len;\n        if (k == 0) return head;\n        tail->next = head; // make circular\n        int stepsToNewTail = len - k;\n        ListNode* newTail = tail;\n        while (stepsToNewTail--) newTail = newTail->next;\n        ListNode* newHead = newTail->next;\n        newTail->next = nullptr;\n        return newHead;\n    }\n};",
    "lineCount": 31
  },
  {
    "id": 62,
    "title": "Unique Paths",
    "variant": null,
    "fileName": "62ndday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #62: Unique Paths\n// Problem: Count unique paths from top-left to bottom-right in an m x n grid.\n// Approach: DP combinatorics or 1D DP. We'll use 1D DP for O(n) space.\n\nclass Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        vector<int> dp(n, 1);\n        for (int i = 1; i < m; ++i)\n            for (int j = 1; j < n; ++j)\n                dp[j] += dp[j-1];\n        return dp[n-1];\n    }\n};",
    "lineCount": 17
  },
  {
    "id": 63,
    "title": "Unique Paths II",
    "variant": null,
    "fileName": "63rdday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #63: Unique Paths II\n// Problem: Count unique paths with obstacles (1 indicates obstacle).\n// Approach: 1D DP where dp[j] = 0 if obstacle, else dp[j] + dp[j-1].\n\nclass Solution {\npublic:\n    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {\n        int m = obstacleGrid.size();\n        if (m == 0) return 0;\n        int n = obstacleGrid[0].size();\n        vector<int> dp(n, 0);\n        dp[0] = obstacleGrid[0][0] == 0 ? 1 : 0;\n        for (int i = 0; i < m; ++i) {\n            for (int j = 0; j < n; ++j) {\n                if (obstacleGrid[i][j] == 1) dp[j] = 0;\n                else if (j > 0) dp[j] += dp[j-1];\n            }\n        }\n        return dp[n-1];\n    }\n};",
    "lineCount": 24
  },
  {
    "id": 64,
    "title": "Minimum Path Sum",
    "variant": null,
    "fileName": "64thday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #64: Minimum Path Sum\n// Problem: Given a m x n grid of non-negative numbers, find a path with minimum sum.\n// Approach: In-place DP or 1D DP. We'll use 1D DP updating row by row.\n\nclass Solution {\npublic:\n    int minPathSum(vector<vector<int>>& grid) {\n        int m = grid.size();\n        int n = grid[0].size();\n        vector<int> dp(n, 0);\n        dp[0] = grid[0][0];\n        for (int j = 1; j < n; ++j) dp[j] = dp[j-1] + grid[0][j];\n        for (int i = 1; i < m; ++i) {\n            dp[0] += grid[i][0];\n            for (int j = 1; j < n; ++j) dp[j] = min(dp[j-1], dp[j]) + grid[i][j];\n        }\n        return dp[n-1];\n    }\n};",
    "lineCount": 22
  },
  {
    "id": 65,
    "title": "Valid Number",
    "variant": null,
    "fileName": "65thday_leetcode.cpp",
    "code": "#include <string>\nusing namespace std;\n\n// LeetCode #65: Valid Number\n// Problem: Validate if a string represents a decimal number (covers ints, decimals, scientific notation).\n// Approach: Use a deterministic scanning approach tracking seen digits, dot, exponent, and sign.\n\nclass Solution {\npublic:\n    bool isNumber(const string& s) {\n        int i = 0, n = s.size();\n        while (i < n && isspace(s[i])) ++i;\n        bool num = false, dot = false, exp = false;\n        if (i < n && (s[i] == '+' || s[i] == '-')) ++i;\n        for (; i < n; ++i) {\n            char c = s[i];\n            if (isdigit(c)) { num = true; }\n            else if (c == '.') {\n                if (dot || exp) return false;\n                dot = true;\n            } else if (c == 'e' || c == 'E') {\n                if (exp || !num) return false;\n                exp = true;\n                num = false; // need digits after e\n                if (i+1 < n && (s[i+1] == '+' || s[i+1] == '-')) ++i;\n            } else if (isspace(c)) break;\n            else return false;\n        }\n        while (i < n && isspace(s[i])) ++i;\n        return num && i == n;\n    }\n};",
    "lineCount": 32
  },
  {
    "id": 66,
    "title": "Plus One",
    "variant": null,
    "fileName": "66thday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #66: Plus One\n// Problem: Given a non-empty array of decimal digits representing a non-negative integer, plus one to the integer.\n// Approach: Add one from the least significant digit carrying as needed.\n\nclass Solution {\npublic:\n    vector<int> plusOne(vector<int>& digits) {\n        for (int i = digits.size()-1; i >= 0; --i) {\n            if (digits[i] < 9) { ++digits[i]; return digits; }\n            digits[i] = 0;\n        }\n        digits.insert(digits.begin(), 1);\n        return digits;\n    }\n};",
    "lineCount": 18
  },
  {
    "id": 67,
    "title": "Add Binary",
    "variant": null,
    "fileName": "67thday_leetcode.cpp",
    "code": "#include <string>\nusing namespace std;\n\n// LeetCode #67: Add Binary\n// Problem: Given two binary strings, return their sum as a binary string.\n// Approach: Add from LSB with carry.\n\nclass Solution {\npublic:\n    string addBinary(const string& a, const string& b) {\n        int i = a.size()-1, j = b.size()-1; int carry = 0;\n        string res;\n        while (i >= 0 || j >= 0 || carry) {\n            int sum = carry;\n            if (i >= 0) sum += a[i--] - '0';\n            if (j >= 0) sum += b[j--] - '0';\n            res.push_back(char('0' + (sum & 1)));\n            carry = sum >> 1;\n        }\n        reverse(res.begin(), res.end());\n        return res;\n    }\n};",
    "lineCount": 23
  },
  {
    "id": 68,
    "title": "Text Justification",
    "variant": null,
    "fileName": "68thday_leetcode.cpp",
    "code": "#include <vector>\n#include <string>\nusing namespace std;\n\n// LeetCode #68: Text Justification\n// Problem: Given words and a max width, fully justify the text.\n// Approach: Greedy pack words per line and distribute spaces evenly.\n\nclass Solution {\npublic:\n    vector<string> fullJustify(vector<string>& words, int maxWidth) {\n        vector<string> res;\n        int n = words.size();\n        int i = 0;\n        while (i < n) {\n            int j = i, len = 0;\n            while (j < n && len + words[j].size() + (j - i) <= maxWidth) {\n                len += words[j].size(); ++j;\n            }\n            int spaces = maxWidth - len;\n            int gaps = max(1, j - i - 1);\n            string line;\n            if (j == n || gaps == 0) {\n                // left-justified\n                for (int k = i; k < j; ++k) {\n                    if (k > i) line += ' ';\n                    line += words[k];\n                }\n                line += string(maxWidth - line.size(), ' ');\n            } else {\n                int sp = spaces / gaps;\n                int extra = spaces % gaps;\n                for (int k = i; k < j; ++k) {\n                    line += words[k];\n                    if (k < j-1) {\n                        line += string(sp + (extra-- > 0 ? 1 : 0), ' ');\n                    }\n                }\n            }\n            res.push_back(line);\n            i = j;\n        }\n        return res;\n    }\n};",
    "lineCount": 45
  },
  {
    "id": 69,
    "title": "Sqrt",
    "variant": "x",
    "fileName": "69thday_leetcode.cpp",
    "code": "#include <cmath>\nusing namespace std;\n\n// LeetCode #69: Sqrt(x)\n// Problem: Compute and return the integer square root (floor) of x.\n// Approach: Binary search on range [0, x].\n\nclass Solution {\npublic:\n    int mySqrt(int x) {\n        if (x < 2) return x;\n        long long l = 1, r = x/2, ans = 1;\n        while (l <= r) {\n            long long mid = l + (r - l)/2;\n            if (mid*mid <= x) { ans = mid; l = mid+1; }\n            else r = mid-1;\n        }\n        return (int)ans;\n    }\n};",
    "lineCount": 20
  },
  {
    "id": 70,
    "title": "Climbing Stairs",
    "variant": null,
    "fileName": "70thday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #70: Climbing Stairs\n// Problem: Count ways to climb n stairs (1 or 2 steps at a time).\n// Approach: Fibonacci DP; iterative with two variables.\n\nclass Solution {\npublic:\n    int climbStairs(int n) {\n        if (n <= 2) return n;\n        int a = 1, b = 2;\n        for (int i = 3; i <= n; ++i) {\n            int c = a + b; a = b; b = c;\n        }\n        return b;\n    }\n};",
    "lineCount": 18
  },
  {
    "id": 71,
    "title": "Simplify Path",
    "variant": null,
    "fileName": "71stday_leetcode.cpp",
    "code": "#include <string>\n#include <vector>\nusing namespace std;\n\n// LeetCode #71: Simplify Path\n// Problem: Simplify a Unix-style file path.\n// Approach: Split by '/', process tokens with stack handling '.' and '..'.\n\nclass Solution {\npublic:\n    string simplifyPath(const string& path) {\n        vector<string> st;\n        int i = 0, n = path.size();\n        while (i < n) {\n            while (i < n && path[i] == '/') ++i;\n            int j = i;\n            while (j < n && path[j] != '/') ++j;\n            if (j > i) {\n                string token = path.substr(i, j-i);\n                if (token == \".\") {}\n                else if (token == \"..\") { if (!st.empty()) st.pop_back(); }\n                else st.push_back(token);\n            }\n            i = j;\n        }\n        if (st.empty()) return \"/\";\n        string res;\n        for (auto &s : st) { res += \"/\" + s; }\n        return res;\n    }\n};",
    "lineCount": 31
  },
  {
    "id": 72,
    "title": "Edit Distance",
    "variant": null,
    "fileName": "72ndday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #72: Edit Distance\n// Problem: Compute minimum operations to convert word1 to word2 (insert/delete/replace).\n// Approach: Classic DP on prefixes.\n\nclass Solution {\npublic:\n    int minDistance(const string& word1, const string& word2) {\n        int m = word1.size(), n = word2.size();\n        vector<vector<int>> dp(m+1, vector<int>(n+1, 0));\n        for (int i = 0; i <= m; ++i) dp[i][0] = i;\n        for (int j = 0; j <= n; ++j) dp[0][j] = j;\n        for (int i = 1; i <= m; ++i) {\n            for (int j = 1; j <= n; ++j) {\n                if (word1[i-1] == word2[j-1]) dp[i][j] = dp[i-1][j-1];\n                else dp[i][j] = 1 + min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]});\n            }\n        }\n        return dp[m][n];\n    }\n};",
    "lineCount": 23
  },
  {
    "id": 73,
    "title": "Set Matrix Zeroes",
    "variant": null,
    "fileName": "73rdday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #73: Set Matrix Zeroes\n// Problem: If an element is 0, set its entire row and column to 0 in-place.\n// Approach: Use first row/col as markers to reduce extra space.\n\nclass Solution {\npublic:\n    void setZeroes(vector<vector<int>>& matrix) {\n        int m = matrix.size();\n        if (m == 0) return;\n        int n = matrix[0].size();\n        bool firstRowZero = false, firstColZero = false;\n        for (int j = 0; j < n; ++j) if (matrix[0][j] == 0) firstRowZero = true;\n        for (int i = 0; i < m; ++i) if (matrix[i][0] == 0) firstColZero = true;\n        for (int i = 1; i < m; ++i)\n            for (int j = 1; j < n; ++j)\n                if (matrix[i][j] == 0) { matrix[i][0] = 0; matrix[0][j] = 0; }\n        for (int i = 1; i < m; ++i)\n            for (int j = 1; j < n; ++j)\n                if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;\n        if (firstRowZero) for (int j = 0; j < n; ++j) matrix[0][j] = 0;\n        if (firstColZero) for (int i = 0; i < m; ++i) matrix[i][0] = 0;\n    }\n};",
    "lineCount": 26
  },
  {
    "id": 74,
    "title": "Search a 2D Matrix",
    "variant": null,
    "fileName": "74thday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #74: Search a 2D Matrix\n// Problem: Treat matrix as sorted (row-major) and determine if target exists.\n// Approach: Binary search on flattened index.\n\nclass Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        if (matrix.empty() || matrix[0].empty()) return false;\n        int m = matrix.size(), n = matrix[0].size();\n        int l = 0, r = m*n - 1;\n        while (l <= r) {\n            int mid = l + (r-l)/2;\n            int val = matrix[mid / n][mid % n];\n            if (val == target) return true;\n            if (val < target) l = mid+1; else r = mid-1;\n        }\n        return false;\n    }\n};",
    "lineCount": 22
  },
  {
    "id": 75,
    "title": "Sort Colors",
    "variant": null,
    "fileName": "75thday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #75: Sort Colors\n// Problem: Sort array of 0s,1s,2s in-place.\n// Approach: Dutch National Flag algorithm with three pointers.\n\nclass Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        int low = 0, mid = 0, high = nums.size()-1;\n        while (mid <= high) {\n            if (nums[mid] == 0) swap(nums[low++], nums[mid++]);\n            else if (nums[mid] == 1) ++mid;\n            else swap(nums[mid], nums[high--]);\n        }\n    }\n};",
    "lineCount": 18
  },
  {
    "id": 76,
    "title": "Minimum Window Substring",
    "variant": null,
    "fileName": "76thday_leetcode.cpp",
    "code": "#include <string>\n#include <vector>\n#include <unordered_map>\nusing namespace std;\n\n// LeetCode #76: Minimum Window Substring\n// Problem: Given s and t, find the smallest substring in s containing all chars of t.\n// Approach: Sliding window with counts and two pointers.\n\nclass Solution {\npublic:\n    string minWindow(const string& s, const string& t) {\n        if (t.empty()) return \"\";\n        vector<int> need(128, 0);\n        for (char c : t) ++need[c];\n        int missing = t.size();\n        int l = 0, minL = 0, minLen = INT_MAX;\n        for (int r = 0; r < (int)s.size(); ++r) {\n            if (need[s[r]] > 0) --missing;\n            --need[s[r]];\n            while (missing == 0) {\n                if (r - l + 1 < minLen) { minLen = r - l + 1; minL = l; }\n                ++need[s[l]];\n                if (need[s[l]] > 0) ++missing;\n                ++l;\n            }\n        }\n        return (minLen == INT_MAX) ? \"\" : s.substr(minL, minLen);\n    }\n};",
    "lineCount": 30
  },
  {
    "id": 77,
    "title": "Combinations",
    "variant": null,
    "fileName": "77thday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #77: Combinations\n// Problem: Return all combinations of k numbers out of 1..n.\n// Approach: Standard backtracking generating combinations in increasing order.\n\nclass Solution {\npublic:\n    vector<vector<int>> combine(int n, int k) {\n        vector<vector<int>> res;\n        vector<int> comb;\n        backtrack(1, n, k, comb, res);\n        return res;\n    }\n\nprivate:\n    void backtrack(int start, int n, int k, vector<int>& comb, vector<vector<int>>& res) {\n        if (k == 0) { res.push_back(comb); return; }\n        for (int i = start; i <= n - k + 1; ++i) {\n            comb.push_back(i);\n            backtrack(i+1, n, k-1, comb, res);\n            comb.pop_back();\n        }\n    }\n};",
    "lineCount": 26
  },
  {
    "id": 78,
    "title": "Subsets",
    "variant": null,
    "fileName": "78thday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #78: Subsets\n// Problem: Return all subsets (the power set) of the given set of numbers.\n// Approach: Backtracking or iterative bitmask. We'll use backtracking.\n\nclass Solution {\npublic:\n    vector<vector<int>> subsets(vector<int>& nums) {\n        vector<vector<int>> res;\n        vector<int> cur;\n        backtrack(0, nums, cur, res);\n        return res;\n    }\n\nprivate:\n    void backtrack(int idx, vector<int>& nums, vector<int>& cur, vector<vector<int>>& res) {\n        res.push_back(cur);\n        for (int i = idx; i < (int)nums.size(); ++i) {\n            cur.push_back(nums[i]);\n            backtrack(i+1, nums, cur, res);\n            cur.pop_back();\n        }\n    }\n};",
    "lineCount": 26
  },
  {
    "id": 79,
    "title": "Word Search",
    "variant": null,
    "fileName": "79thday_leetcode.cpp",
    "code": "#include <vector>\n#include <string>\nusing namespace std;\n\n// LeetCode #79: Word Search\n// Problem: Given a 2D board and a word, determine if the word exists by sequentially adjacent cells.\n// Approach: DFS with visited marker, backtracking.\n\nclass Solution {\npublic:\n    bool exist(vector<vector<char>>& board, const string& word) {\n        int m = board.size(); if (m == 0) return false;\n        int n = board[0].size();\n        for (int i = 0; i < m; ++i)\n            for (int j = 0; j < n; ++j)\n                if (dfs(board, word, i, j, 0)) return true;\n        return false;\n    }\n\nprivate:\n    bool dfs(vector<vector<char>>& b, const string& w, int i, int j, int idx) {\n        if (idx == (int)w.size()) return true;\n        if (i < 0 || j < 0 || i >= (int)b.size() || j >= (int)b[0].size()) return false;\n        if (b[i][j] != w[idx]) return false;\n        char tmp = b[i][j]; b[i][j] = '#';\n        bool found = dfs(b, w, i+1, j, idx+1) || dfs(b, w, i-1, j, idx+1)\n                  || dfs(b, w, i, j+1, idx+1) || dfs(b, w, i, j-1, idx+1);\n        b[i][j] = tmp;\n        return found;\n    }\n};",
    "lineCount": 31
  },
  {
    "id": 80,
    "title": "Remove Duplicates from Sorted Array II",
    "variant": null,
    "fileName": "80thday_leetcode.cpp",
    "code": "#include <vector>\nusing namespace std;\n\n// LeetCode #80: Remove Duplicates from Sorted Array II\n// Problem: Allow at most two duplicates and return new length.\n// Approach: Two pointers; allow copies when write index < 2 or current != nums[write-2].\n\nclass Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        int n = nums.size();\n        if (n <= 2) return n;\n        int write = 2;\n        for (int read = 2; read < n; ++read) {\n            if (nums[read] != nums[write-2]) nums[write++] = nums[read];\n        }\n        return write;\n    }\n};",
    "lineCount": 19
  },
  {
    "id": 81,
    "title": "Search in Rotated Sorted Array II",
    "variant": null,
    "fileName": "81stday_leetcode.cpp",
    "code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #81: Search in Rotated Sorted Array II\n// Allow duplicates. Returns true if target exists.\nclass Solution {\npublic:\n    bool search(vector<int>& nums, int target) {\n        int l = 0, r = (int)nums.size() - 1;\n        while (l <= r) {\n            int m = l + (r - l) / 2;\n            if (nums[m] == target) return true;\n            if (nums[l] == nums[m] && nums[m] == nums[r]) { ++l; --r; }\n            else if (nums[l] <= nums[m]) {\n                if (nums[l] <= target && target < nums[m]) r = m - 1;\n                else l = m + 1;\n            } else {\n                if (nums[m] < target && target <= nums[r]) l = m + 1;\n                else r = m - 1;\n            }\n        }\n        return false;\n    }\n};",
    "lineCount": 25
  },
  {
    "id": 82,
    "title": "Remove Duplicates from Sorted List II",
    "variant": null,
    "fileName": "82ndday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #82: Remove Duplicates from Sorted List II\nstruct ListNode {\n    int val; ListNode* next; ListNode(int x): val(x), next(nullptr) {}\n};\n\nclass Solution {\npublic:\n    ListNode* deleteDuplicates(ListNode* head) {\n        ListNode dummy(0); dummy.next = head;\n        ListNode* prev = &dummy;\n        while (prev->next) {\n            ListNode* cur = prev->next;\n            bool dup = false;\n            while (cur->next && cur->val == cur->next->val) {\n                dup = true;\n                cur = cur->next;\n            }\n            if (dup) prev->next = cur->next;\n            else prev = prev->next;\n        }\n        return dummy.next;\n    }\n};",
    "lineCount": 26
  },
  {
    "id": 83,
    "title": "Remove Duplicates from Sorted List",
    "variant": null,
    "fileName": "83rdday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #83: Remove Duplicates from Sorted List\nstruct ListNode { int val; ListNode* next; ListNode(int x): val(x), next(nullptr){} };\n\nclass Solution {\npublic:\n    ListNode* deleteDuplicates(ListNode* head) {\n        ListNode* cur = head;\n        while (cur && cur->next) {\n            if (cur->val == cur->next->val) cur->next = cur->next->next;\n            else cur = cur->next;\n        }\n        return head;\n    }\n};",
    "lineCount": 17
  },
  {
    "id": 84,
    "title": "Largest Rectangle in Histogram",
    "variant": null,
    "fileName": "84thday_leetcode.cpp",
    "code": "#include <vector>\n#include <stack>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #84: Largest Rectangle in Histogram\nclass Solution {\npublic:\n    int largestRectangleArea(vector<int>& h) {\n        int n = h.size();\n        stack<int> st; int best = 0;\n        for (int i = 0; i <= n; ++i) {\n            int cur = (i==n?0:h[i]);\n            while (!st.empty() && cur < h[st.top()]) {\n                int height = h[st.top()]; st.pop();\n                int l = st.empty() ? 0 : st.top()+1;\n                best = max(best, height * (i - l));\n            }\n            st.push(i);\n        }\n        return best;\n    }\n};",
    "lineCount": 23
  },
  {
    "id": 85,
    "title": "Maximal Rectangle",
    "variant": null,
    "fileName": "85thday_leetcode.cpp",
    "code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #85: Maximal Rectangle\n// Build histogram per row and reuse largest-rectangle logic.\nclass Solution {\npublic:\n    int largestRectangleArea(const vector<int>& h) {\n        int n = h.size();\n        vector<int> st;\n        int best = 0;\n        for (int i = 0; i <= n; ++i) {\n            int cur = (i==n?0:h[i]);\n            while (!st.empty() && cur < h[st.back()]) {\n                int height = h[st.back()]; st.pop_back();\n                int l = st.empty() ? 0 : st.back()+1;\n                best = max(best, height * (i - l));\n            }\n            st.push_back(i);\n        }\n        return best;\n    }\n\n    int maximalRectangle(vector<vector<char>>& matrix) {\n        if (matrix.empty()) return 0;\n        int m = matrix[0].size();\n        vector<int> h(m,0);\n        int best = 0;\n        for (auto &row : matrix) {\n            for (int j = 0; j < m; ++j) h[j] = (row[j]=='1') ? h[j]+1 : 0;\n            best = max(best, largestRectangleArea(h));\n        }\n        return best;\n    }\n};",
    "lineCount": 36
  },
  {
    "id": 86,
    "title": "Partition List",
    "variant": null,
    "fileName": "86thday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #86: Partition List\nstruct ListNode { int val; ListNode* next; ListNode(int x): val(x), next(nullptr) {} };\n\nclass Solution {\npublic:\n    ListNode* partition(ListNode* head, int x) {\n        ListNode before(0), after(0);\n        ListNode *b = &before, *a = &after;\n        while (head) {\n            if (head->val < x) { b->next = head; b = b->next; }\n            else { a->next = head; a = a->next; }\n            head = head->next;\n        }\n        a->next = nullptr; b->next = after.next;\n        return before.next;\n    }\n};",
    "lineCount": 20
  },
  {
    "id": 87,
    "title": "Scramble String",
    "variant": "recursive with memo",
    "fileName": "87thday_leetcode.cpp",
    "code": "#include <string>\n#include <unordered_map>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #87: Scramble String (recursive with memo)\nclass Solution {\n    unordered_map<string,bool> memo;\npublic:\n    bool isScramble(const string& s1, const string& s2) {\n        string key = s1+\"#\"+s2;\n        if (memo.count(key)) return memo[key];\n        if (s1 == s2) return memo[key] = true;\n        int n = s1.size();\n        int cnt[26] = {0};\n        for (int i=0;i<n;i++) { cnt[s1[i]-'a']++; cnt[s2[i]-'a']--; }\n        for (int i=0;i<26;i++) if (cnt[i]!=0) return memo[key]=false;\n        for (int i=1;i<n;i++){\n            if (isScramble(s1.substr(0,i), s2.substr(0,i)) && isScramble(s1.substr(i), s2.substr(i))) return memo[key]=true;\n            if (isScramble(s1.substr(0,i), s2.substr(n-i)) && isScramble(s1.substr(i), s2.substr(0,n-i))) return memo[key]=true;\n        }\n        return memo[key]=false;\n    }\n};",
    "lineCount": 24
  },
  {
    "id": 88,
    "title": "Merge Sorted Array",
    "variant": "in-place",
    "fileName": "88thday_leetcode.cpp",
    "code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #88: Merge Sorted Array (in-place)\nclass Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        int i = m-1, j = n-1, k = m+n-1;\n        while (j>=0) {\n            if (i>=0 && nums1[i] > nums2[j]) nums1[k--] = nums1[i--];\n            else nums1[k--] = nums2[j--];\n        }\n    }\n};",
    "lineCount": 15
  },
  {
    "id": 89,
    "title": "Gray Code",
    "variant": null,
    "fileName": "89thday_leetcode.cpp",
    "code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #89: Gray Code\nclass Solution {\npublic:\n    vector<int> grayCode(int n) {\n        vector<int> res;\n        int total = 1<<n;\n        res.reserve(total);\n        for (int i=0;i<total;i++) res.push_back(i ^ (i>>1));\n        return res;\n    }\n};",
    "lineCount": 15
  },
  {
    "id": 90,
    "title": "Subsets II",
    "variant": "handle duplicates",
    "fileName": "90thday_leetcode.cpp",
    "code": "#include <vector>\n#include <algorithm>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #90: Subsets II (handle duplicates)\nclass Solution {\npublic:\n    vector<vector<int>> subsetsWithDup(vector<int>& nums) {\n        sort(nums.begin(), nums.end());\n        vector<vector<int>> res; vector<int> cur;\n        function<void(int)> dfs = [&](int i){\n            res.push_back(cur);\n            for (int j=i;j<nums.size();++j){\n                if (j>i && nums[j]==nums[j-1]) continue;\n                cur.push_back(nums[j]); dfs(j+1); cur.pop_back();\n            }\n        };\n        dfs(0); return res;\n    }\n};",
    "lineCount": 21
  },
  {
    "id": 91,
    "title": "Decode Ways",
    "variant": null,
    "fileName": "91stday_leetcode.cpp",
    "code": "#include <string>\n#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #91: Decode Ways\nclass Solution {\npublic:\n    int numDecodings(const string& s) {\n        if (s.empty() || s[0]=='0') return 0;\n        int n = s.size();\n        vector<int> dp(n+1,0); dp[0]=1; dp[1]=1;\n        for (int i=2;i<=n;i++){\n            if (s[i-1]>'0') dp[i]+=dp[i-1];\n            int two = (s[i-2]-'0')*10 + (s[i-1]-'0');\n            if (two>=10 && two<=26) dp[i]+=dp[i-2];\n        }\n        return dp[n];\n    }\n};",
    "lineCount": 20
  },
  {
    "id": 92,
    "title": "Reverse Linked List II",
    "variant": null,
    "fileName": "92ndday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #92: Reverse Linked List II\nstruct ListNode { int val; ListNode* next; ListNode(int x): val(x), next(nullptr){} };\n\nclass Solution {\npublic:\n    ListNode* reverseBetween(ListNode* head, int m, int n) {\n        if (!head || m==n) return head;\n        ListNode dummy(0); dummy.next = head;\n        ListNode* prev = &dummy;\n        for (int i=1;i<m;i++) prev = prev->next;\n        ListNode* cur = prev->next;\n        for (int i=0;i<n-m;i++){\n            ListNode* tmp = cur->next;\n            cur->next = tmp->next;\n            tmp->next = prev->next;\n            prev->next = tmp;\n        }\n        return dummy.next;\n    }\n};",
    "lineCount": 23
  },
  {
    "id": 93,
    "title": "Restore IP Addresses",
    "variant": null,
    "fileName": "93rdday_leetcode.cpp",
    "code": "#include <vector>\n#include <string>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #93: Restore IP Addresses\nclass Solution {\npublic:\n    vector<string> restoreIpAddresses(const string& s) {\n        vector<string> res; string cur;\n        function<void(int,int)> dfs = [&](int idx,int parts){\n            if (idx==s.size() && parts==4) { res.push_back(cur); return; }\n            if (parts==4) return;\n            int remain = s.size()-idx; // pruning\n            if (remain < (4-parts) || remain > 3*(4-parts)) return;\n            int start = cur.size();\n            for (int len=1; len<=3 && idx+len<=s.size(); ++len){\n                if (len>1 && s[idx]=='0') break;\n                int val = stoi(s.substr(idx,len));\n                if (val>255) break;\n                if (!cur.empty()) cur.push_back('.');\n                cur.append(s.substr(idx,len));\n                dfs(idx+len, parts+1);\n                cur.resize(start);\n            }\n        };\n        dfs(0,0); return res;\n    }\n};",
    "lineCount": 29
  },
  {
    "id": 94,
    "title": "Binary Tree Inorder Traversal",
    "variant": null,
    "fileName": "94thday_leetcode.cpp",
    "code": "#include <vector>\n#include <stack>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #94: Binary Tree Inorder Traversal\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    vector<int> inorderTraversal(TreeNode* root) {\n        vector<int> res; stack<TreeNode*> st; TreeNode* cur = root;\n        while (cur || !st.empty()){\n            while (cur){ st.push(cur); cur = cur->left; }\n            cur = st.top(); st.pop(); res.push_back(cur->val);\n            cur = cur->right;\n        }\n        return res;\n    }\n};",
    "lineCount": 20
  },
  {
    "id": 95,
    "title": "Unique Binary Search Trees II",
    "variant": "generate trees",
    "fileName": "95thday_leetcode.cpp",
    "code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #95: Unique Binary Search Trees II (generate trees)\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    vector<TreeNode*> generateTrees(int n) {\n        if (n==0) return {};\n        return gen(1,n);\n    }\n    vector<TreeNode*> gen(int l,int r){\n        vector<TreeNode*> res;\n        if (l>r) { res.push_back(nullptr); return res; }\n        for (int i=l;i<=r;i++){\n            auto left = gen(l,i-1);\n            auto right = gen(i+1,r);\n            for (auto L:left) for (auto R:right){\n                TreeNode* root = new TreeNode(i);\n                root->left = L; root->right = R; res.push_back(root);\n            }\n        }\n        return res;\n    }\n};",
    "lineCount": 27
  },
  {
    "id": 96,
    "title": "Unique Binary Search Trees",
    "variant": "count, Catalan",
    "fileName": "96thday_leetcode.cpp",
    "code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #96: Unique Binary Search Trees (count, Catalan)\nclass Solution {\npublic:\n    int numTrees(int n) {\n        vector<long long> dp(n+1,0); dp[0]=1; dp[1]=1;\n        for (int i=2;i<=n;i++){\n            for (int j=1;j<=i;j++) dp[i]+=dp[j-1]*dp[i-j];\n        }\n        return (int)dp[n];\n    }\n};",
    "lineCount": 15
  },
  {
    "id": 97,
    "title": "Interleaving String",
    "variant": "DP",
    "fileName": "97thday_leetcode.cpp",
    "code": "#include <string>\n#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #97: Interleaving String (DP)\nclass Solution {\npublic:\n    bool isInterleave(const string& s1, const string& s2, const string& s3) {\n        int n=s1.size(), m=s2.size();\n        if (n+m!=s3.size()) return false;\n        vector<bool> dp(m+1,false);\n        dp[0]=true;\n        for (int j=1;j<=m;j++) dp[j]=dp[j-1] && s2[j-1]==s3[j-1];\n        for (int i=1;i<=n;i++){\n            dp[0] = dp[0] && s1[i-1]==s3[i-1];\n            for (int j=1;j<=m;j++){\n                dp[j] = (dp[j] && s1[i-1]==s3[i+j-1]) || (dp[j-1] && s2[j-1]==s3[i+j-1]);\n            }\n        }\n        return dp[m];\n    }\n};",
    "lineCount": 23
  },
  {
    "id": 98,
    "title": "Validate Binary Search Tree",
    "variant": null,
    "fileName": "98thday_leetcode.cpp",
    "code": "#include <limits>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #98: Validate Binary Search Tree\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        return valid(root, numeric_limits<long long>::min(), numeric_limits<long long>::max());\n    }\n    bool valid(TreeNode* node, long long lo, long long hi){\n        if (!node) return true;\n        if (node->val <= lo || node->val >= hi) return false;\n        return valid(node->left, lo, node->val) && valid(node->right, node->val, hi);\n    }\n};",
    "lineCount": 18
  },
  {
    "id": 99,
    "title": "Recover Binary Search Tree",
    "variant": null,
    "fileName": "99thday_leetcode.cpp",
    "code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #99: Recover Binary Search Tree\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\n    TreeNode *first=nullptr, *second=nullptr, *prev=nullptr;\npublic:\n    void recoverTree(TreeNode* root) {\n        inorder(root);\n        if (first && second) swap(first->val, second->val);\n    }\n    void inorder(TreeNode* node){\n        if (!node) return;\n        inorder(node->left);\n        if (prev && prev->val > node->val){\n            if (!first) first = prev;\n            second = node;\n        }\n        prev = node;\n        inorder(node->right);\n    }\n};",
    "lineCount": 25
  },
  {
    "id": 100,
    "title": "Same Tree",
    "variant": null,
    "fileName": "100thday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #100: Same Tree\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        if (!p && !q) return true;\n        if (!p || !q) return false;\n        if (p->val != q->val) return false;\n        return isSameTree(p->left,q->left) && isSameTree(p->right,q->right);\n    }\n};",
    "lineCount": 15
  },
  {
    "id": 101,
    "title": "Symmetric Tree",
    "variant": null,
    "fileName": "101stday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #101: Symmetric Tree\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    bool isSymmetric(TreeNode* root) {\n        if (!root) return true;\n        return check(root->left, root->right);\n    }\n    bool check(TreeNode* a, TreeNode* b){\n        if (!a && !b) return true;\n        if (!a || !b) return false;\n        if (a->val != b->val) return false;\n        return check(a->left,b->right) && check(a->right,b->left);\n    }\n};",
    "lineCount": 19
  },
  {
    "id": 102,
    "title": "Binary Tree Level Order Traversal",
    "variant": null,
    "fileName": "102ndday_leetcode.cpp",
    "code": "#include <vector>\n#include <queue>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #102: Binary Tree Level Order Traversal\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    vector<vector<int>> levelOrder(TreeNode* root) {\n        vector<vector<int>> res;\n        if (!root) return res;\n        queue<TreeNode*> q; q.push(root);\n        while (!q.empty()){\n            int sz = q.size(); vector<int> row;\n            while (sz--){ TreeNode* n = q.front(); q.pop(); row.push_back(n->val);\n                if (n->left) q.push(n->left); if (n->right) q.push(n->right);\n            }\n            res.push_back(row);\n        }\n        return res;\n    }\n};",
    "lineCount": 24
  },
  {
    "id": 103,
    "title": "Binary Tree Zigzag Level Order Traversal",
    "variant": null,
    "fileName": "103rdday_leetcode.cpp",
    "code": "#include <vector>\n#include <queue>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #103: Binary Tree Zigzag Level Order Traversal\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {\n        vector<vector<int>> res;\n        if (!root) return res;\n        queue<TreeNode*> q; q.push(root); bool leftToRight = true;\n        while (!q.empty()){\n            int sz = q.size(); vector<int> row(sz);\n            for (int i=0;i<sz;i++){\n                TreeNode* n = q.front(); q.pop();\n                int idx = leftToRight ? i : (sz-1-i);\n                row[idx] = n->val;\n                if (n->left) q.push(n->left); if (n->right) q.push(n->right);\n            }\n            leftToRight = !leftToRight; res.push_back(row);\n        }\n        return res;\n    }\n};",
    "lineCount": 27
  },
  {
    "id": 104,
    "title": "Maximum Depth of Binary Tree",
    "variant": null,
    "fileName": "104thday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #104: Maximum Depth of Binary Tree\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        if (!root) return 0;\n        return 1 + max(maxDepth(root->left), maxDepth(root->right));\n    }\n};",
    "lineCount": 13
  },
  {
    "id": 105,
    "title": "Construct Binary Tree from Preorder and Inorder",
    "variant": null,
    "fileName": "105thday_leetcode.cpp",
    "code": "#include <vector>\n#include <unordered_map>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #105: Construct Binary Tree from Preorder and Inorder\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\n    unordered_map<int,int> idx;\npublic:\n    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {\n        for (int i=0;i<inorder.size();++i) idx[inorder[i]] = i;\n        return build(preorder, 0, preorder.size()-1, 0, inorder.size()-1);\n    }\n    TreeNode* build(vector<int>& pre,int pl,int pr,int il,int ir){\n        if (pl>pr) return nullptr;\n        int rootVal = pre[pl]; TreeNode* root = new TreeNode(rootVal);\n        int k = idx[rootVal]; int leftSize = k - il;\n        root->left = build(pre, pl+1, pl+leftSize, il, k-1);\n        root->right = build(pre, pl+leftSize+1, pr, k+1, ir);\n        return root;\n    }\n};",
    "lineCount": 24
  },
  {
    "id": 106,
    "title": "Construct Binary Tree from Inorder and Postorder",
    "variant": null,
    "fileName": "106thday_leetcode.cpp",
    "code": "#include <vector>\n#include <unordered_map>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #106: Construct Binary Tree from Inorder and Postorder\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\n    unordered_map<int,int> idx;\npublic:\n    TreeNode* buildTree(vector<int>& inorder, vector<int>& post) {\n        for (int i=0;i<inorder.size();++i) idx[inorder[i]] = i;\n        return build(inorder, 0, inorder.size()-1, post, 0, post.size()-1);\n    }\n    TreeNode* build(vector<int>& in,int il,int ir, vector<int>& post,int pl,int pr){\n        if (pl>pr) return nullptr;\n        int rootVal = post[pr]; TreeNode* root = new TreeNode(rootVal);\n        int k = idx[rootVal]; int leftSize = k - il;\n        root->left = build(in, il, k-1, post, pl, pl+leftSize-1);\n        root->right = build(in, k+1, ir, post, pl+leftSize, pr-1);\n        return root;\n    }\n};",
    "lineCount": 24
  },
  {
    "id": 107,
    "title": "Binary Tree Level Order Traversal II",
    "variant": null,
    "fileName": "107thday_leetcode.cpp",
    "code": "#include <vector>\n#include <queue>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #107: Binary Tree Level Order Traversal II\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    vector<vector<int>> levelOrderBottom(TreeNode* root) {\n        vector<vector<int>> res;\n        if (!root) return res;\n        queue<TreeNode*> q; q.push(root);\n        while (!q.empty()){\n            int sz = q.size(); vector<int> row;\n            while (sz--){ TreeNode* n = q.front(); q.pop(); row.push_back(n->val);\n                if (n->left) q.push(n->left); if (n->right) q.push(n->right);\n            }\n            res.insert(res.begin(), row);\n        }\n        return res;\n    }\n};",
    "lineCount": 24
  },
  {
    "id": 108,
    "title": "Convert Sorted Array to Binary Search Tree",
    "variant": null,
    "fileName": "108thday_leetcode.cpp",
    "code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #108: Convert Sorted Array to Binary Search Tree\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    TreeNode* sortedArrayToBST(vector<int>& nums) {\n        return build(nums,0,nums.size()-1);\n    }\n    TreeNode* build(vector<int>& a,int l,int r){\n        if (l>r) return nullptr;\n        int m = l + (r-l)/2; TreeNode* root = new TreeNode(a[m]);\n        root->left = build(a,l,m-1); root->right = build(a,m+1,r);\n        return root;\n    }\n};",
    "lineCount": 19
  },
  {
    "id": 109,
    "title": "Convert Sorted List to Binary Search Tree",
    "variant": null,
    "fileName": "109thday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #109: Convert Sorted List to Binary Search Tree\nstruct ListNode { int val; ListNode* next; ListNode(int x): val(x), next(nullptr){} };\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    TreeNode* sortedListToBST(ListNode* head) {\n        if (!head) return nullptr;\n        return build(head, nullptr);\n    }\n    TreeNode* build(ListNode* l, ListNode* r){\n        if (l==r) return nullptr;\n        ListNode* slow = l; ListNode* fast = l;\n        while (fast!=r && fast->next!=r){ slow = slow->next; fast = fast->next->next; }\n        TreeNode* node = new TreeNode(slow->val);\n        node->left = build(l, slow);\n        node->right = build(slow->next, r);\n        return node;\n    }\n};",
    "lineCount": 23
  },
  {
    "id": 110,
    "title": "Balanced Binary Tree",
    "variant": null,
    "fileName": "110thday_leetcode.cpp",
    "code": "#include <algorithm>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #110: Balanced Binary Tree\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    bool isBalanced(TreeNode* root) {\n        return height(root) != -1;\n    }\n    int height(TreeNode* node){\n        if (!node) return 0;\n        int lh = height(node->left); if (lh==-1) return -1;\n        int rh = height(node->right); if (rh==-1) return -1;\n        if (abs(lh-rh)>1) return -1;\n        return max(lh,rh)+1;\n    }\n};",
    "lineCount": 20
  },
  {
    "id": 111,
    "title": "Minimum Depth of Binary Tree",
    "variant": null,
    "fileName": "111thday_leetcode.cpp",
    "code": "#include <algorithm>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #111: Minimum Depth of Binary Tree\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    int minDepth(TreeNode* root) {\n        if (!root) return 0;\n        if (!root->left) return 1 + minDepth(root->right);\n        if (!root->right) return 1 + minDepth(root->left);\n        return 1 + min(minDepth(root->left), minDepth(root->right));\n    }\n};",
    "lineCount": 16
  },
  {
    "id": 112,
    "title": "Path Sum",
    "variant": null,
    "fileName": "112ndday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #112: Path Sum\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    bool hasPathSum(TreeNode* root, int sum) {\n        if (!root) return false;\n        if (!root->left && !root->right) return sum==root->val;\n        return hasPathSum(root->left, sum-root->val) || hasPathSum(root->right, sum-root->val);\n    }\n};",
    "lineCount": 14
  },
  {
    "id": 113,
    "title": "Path Sum II",
    "variant": "collect paths",
    "fileName": "113rdday_leetcode.cpp",
    "code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #113: Path Sum II (collect paths)\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    vector<vector<int>> res;\n    vector<int> cur;\n    vector<vector<int>> pathSum(TreeNode* root, int sum) {\n        res.clear(); cur.clear(); dfs(root, sum); return res;\n    }\n    void dfs(TreeNode* node, int sum){\n        if (!node) return;\n        cur.push_back(node->val);\n        if (!node->left && !node->right && sum==node->val) res.push_back(cur);\n        dfs(node->left, sum-node->val); dfs(node->right, sum-node->val);\n        cur.pop_back();\n    }\n};",
    "lineCount": 22
  },
  {
    "id": 114,
    "title": "Flatten Binary Tree to Linked List",
    "variant": null,
    "fileName": "114thday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #114: Flatten Binary Tree to Linked List\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    void flatten(TreeNode* root) {\n        TreeNode* cur = root;\n        while (cur) {\n            if (cur->left) {\n                TreeNode* pre = cur->left;\n                while (pre->right) pre = pre->right;\n                pre->right = cur->right;\n                cur->right = cur->left; cur->left = nullptr;\n            }\n            cur = cur->right;\n        }\n    }\n};",
    "lineCount": 21
  },
  {
    "id": 115,
    "title": "Distinct Subsequences",
    "variant": "DP",
    "fileName": "115thday_leetcode.cpp",
    "code": "#include <string>\n#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #115: Distinct Subsequences (DP)\nclass Solution {\npublic:\n    int numDistinct(const string& s, const string& t) {\n        int n=s.size(), m=t.size();\n        vector<double> dp(m+1,0);\n        dp[0]=1;\n        for (int i=1;i<=n;i++){\n            for (int j=m;j>=1;j--){\n                if (s[i-1]==t[j-1]) dp[j] += dp[j-1];\n            }\n        }\n        return (int)dp[m];\n    }\n};",
    "lineCount": 20
  },
  {
    "id": 116,
    "title": "Populating Next Right Pointers in Each Node",
    "variant": "perfect tree",
    "fileName": "116thday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #116: Populating Next Right Pointers in Each Node (perfect tree)\nstruct Node { int val; Node* left; Node* right; Node* next; Node(int x): val(x), left(nullptr), right(nullptr), next(nullptr){} };\n\nclass Solution {\npublic:\n    Node* connect(Node* root) {\n        if (!root) return nullptr;\n        Node* leftmost = root;\n        while (leftmost->left){\n            Node* head = leftmost;\n            while (head){\n                head->left->next = head->right;\n                if (head->next) head->right->next = head->next->left;\n                head = head->next;\n            }\n            leftmost = leftmost->left;\n        }\n        return root;\n    }\n};",
    "lineCount": 23
  },
  {
    "id": 117,
    "title": "Populating Next Right Pointers in Each Node II",
    "variant": null,
    "fileName": "117thday_leetcode.cpp",
    "code": "#include <queue>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #117: Populating Next Right Pointers in Each Node II\nstruct Node { int val; Node* left; Node* right; Node* next; Node(int x): val(x), left(nullptr), right(nullptr), next(nullptr){} };\n\nclass Solution {\npublic:\n    Node* connect(Node* root) {\n        if (!root) return nullptr;\n        Node* head = root;\n        while (head){\n            Node dummy(0); Node* tail = &dummy; Node* cur = head; head = nullptr;\n            while (cur){\n                if (cur->left){ tail->next = cur->left; tail = tail->next; if (!head) head = tail; }\n                if (cur->right){ tail->next = cur->right; tail = tail->next; if (!head) head = tail; }\n                cur = cur->next;\n            }\n        }\n        return root;\n    }\n};",
    "lineCount": 23
  },
  {
    "id": 118,
    "title": "Pascal's Triangle",
    "variant": null,
    "fileName": "118thday_leetcode.cpp",
    "code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #118: Pascal's Triangle\nclass Solution {\npublic:\n    vector<vector<int>> generate(int numRows) {\n        vector<vector<int>> res;\n        for (int i=0;i<numRows;i++){\n            vector<int> row(i+1,1);\n            for (int j=1;j<i;j++) row[j]=res[i-1][j-1]+res[i-1][j];\n            res.push_back(row);\n        }\n        return res;\n    }\n};",
    "lineCount": 17
  },
  {
    "id": 119,
    "title": "Pascal's Triangle II",
    "variant": null,
    "fileName": "119thday_leetcode.cpp",
    "code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #119: Pascal's Triangle II\nclass Solution {\npublic:\n    vector<int> getRow(int rowIndex) {\n        vector<int> row(rowIndex+1,1);\n        for (int i=2;i<=rowIndex;i++){\n            for (int j=i-1;j>0;j--) row[j]+=row[j-1];\n        }\n        return row;\n    }\n};",
    "lineCount": 15
  },
  {
    "id": 120,
    "title": "Triangle",
    "variant": "minimum total",
    "fileName": "120thday_leetcode.cpp",
    "code": "#include <vector>\n#include <algorithm>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #120: Triangle (minimum total)\nclass Solution {\npublic:\n    int minimumTotal(vector<vector<int>>& tri) {\n        if (tri.empty()) return 0;\n        vector<int> dp = tri.back();\n        for (int i=(int)tri.size()-2;i>=0;i--){\n            for (int j=0;j<tri[i].size();j++) dp[j] = tri[i][j] + min(dp[j], dp[j+1]);\n        }\n        return dp[0];\n    }\n};",
    "lineCount": 17
  },
  {
    "id": 121,
    "title": "Best Time to Buy and Sell Stock",
    "variant": null,
    "fileName": "121stday_leetcode.cpp",
    "code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #121: Best Time to Buy and Sell Stock\nclass Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int minp = INT_MAX, best = 0;\n        for (int p: prices){ minp = min(minp,p); best = max(best, p-minp); }\n        return best;\n    }\n};",
    "lineCount": 13
  },
  {
    "id": 122,
    "title": "Best Time to Buy and Sell Stock II",
    "variant": "sum positive diffs",
    "fileName": "122ndday_leetcode.cpp",
    "code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #122: Best Time to Buy and Sell Stock II (sum positive diffs)\nclass Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int res=0;\n        for (int i=1;i<prices.size();++i) if (prices[i]>prices[i-1]) res += prices[i]-prices[i-1];\n        return res;\n    }\n};",
    "lineCount": 13
  },
  {
    "id": 123,
    "title": "Best Time to Buy and Sell Stock III",
    "variant": "two transactions",
    "fileName": "123rdday_leetcode.cpp",
    "code": "#include <vector>\n#include <limits>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #123: Best Time to Buy and Sell Stock III (two transactions)\nclass Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int n = prices.size(); if (n<2) return 0;\n        vector<int> left(n,0), right(n,0);\n        int minp = prices[0];\n        for (int i=1;i<n;i++){ minp = min(minp, prices[i]); left[i] = max(left[i-1], prices[i]-minp); }\n        int maxp = prices[n-1];\n        for (int i=n-2;i>=0;i--){ maxp = max(maxp, prices[i]); right[i] = max(right[i+1], maxp-prices[i]); }\n        int res=0; for (int i=0;i<n;i++) res = max(res, left[i]+right[i]); return res;\n    }\n};",
    "lineCount": 18
  },
  {
    "id": 124,
    "title": "Binary Tree Maximum Path Sum",
    "variant": null,
    "fileName": "124thday_leetcode.cpp",
    "code": "#include <algorithm>\n#include <limits>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #124: Binary Tree Maximum Path Sum\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\n    int best = numeric_limits<int>::min();\npublic:\n    int maxPathSum(TreeNode* root) { best = numeric_limits<int>::min(); helper(root); return best; }\n    int helper(TreeNode* node){\n        if (!node) return 0;\n        int l = max(0, helper(node->left));\n        int r = max(0, helper(node->right));\n        best = max(best, node->val + l + r);\n        return node->val + max(l,r);\n    }\n};",
    "lineCount": 20
  },
  {
    "id": 125,
    "title": "Valid Palindrome",
    "variant": null,
    "fileName": "125thday_leetcode.cpp",
    "code": "#include <string>\n#include <cctype>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #125: Valid Palindrome\nclass Solution {\npublic:\n    bool isPalindrome(const string& s) {\n        int i=0,j=s.size()-1;\n        while (i<j){\n            while (i<j && !isalnum((unsigned char)s[i])) i++;\n            while (i<j && !isalnum((unsigned char)s[j])) j--;\n            if (tolower(s[i])!=tolower(s[j])) return false;\n            i++; j--;\n        }\n        return true;\n    }\n};",
    "lineCount": 19
  },
  {
    "id": 126,
    "title": "Word Ladder II",
    "variant": "find all shortest transformation sequences",
    "fileName": "126thday_leetcode.cpp",
    "code": "#include <vector>\n#include <string>\n#include <unordered_map>\n#include <unordered_set>\n#include <queue>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #126: Word Ladder II (find all shortest transformation sequences)\n// Note: uses BFS + backtracking (may be heavy but acceptable as template)\nclass Solution {\npublic:\n    vector<vector<string>> findLadders(string beginWord, string endWord, vector<string>& wordList) {\n        unordered_set<string> dict(wordList.begin(), wordList.end());\n        vector<vector<string>> res;\n        if (!dict.count(endWord)) return res;\n        unordered_map<string, vector<string>> prev;\n        unordered_set<string> current{beginWord};\n        bool found=false;\n        while (!current.empty() && !found){\n            unordered_set<string> next;\n            for (auto &w: current) dict.erase(w);\n            for (auto &w: current){\n                string s = w;\n                for (int i=0;i<s.size();++i){\n                    char orig = s[i];\n                    for (char c='a';c<='z';++c){\n                        s[i]=c;\n                        if (!dict.count(s)) continue;\n                        next.insert(s);\n                        prev[s].push_back(w);\n                        if (s==endWord) found=true;\n                    }\n                    s[i]=orig;\n                }\n            }\n            current = move(next);\n        }\n        if (!found) return res;\n        vector<string> path{endWord};\n        function<void(const string&)> backtrack = [&](const string& w){\n            if (w==beginWord){\n                vector<string> tmp = path; reverse(tmp.begin(), tmp.end()); res.push_back(tmp); return;\n            }\n            for (auto &p: prev[w]){ path.push_back(p); backtrack(p); path.pop_back(); }\n        };\n        backtrack(endWord);\n        return res;\n    }\n};",
    "lineCount": 50
  },
  {
    "id": 127,
    "title": "Word Ladder",
    "variant": "shortest transformation length",
    "fileName": "127thday_leetcode.cpp",
    "code": "#include <string>\n#include <vector>\n#include <unordered_set>\n#include <queue>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #127: Word Ladder (shortest transformation length)\nclass Solution {\npublic:\n    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {\n        unordered_set<string> dict(wordList.begin(), wordList.end());\n        if (!dict.count(endWord)) return 0;\n        queue<string> q; q.push(beginWord); int steps=1;\n        while (!q.empty()){\n            int sz=q.size();\n            while (sz--){\n                string w=q.front(); q.pop();\n                for (int i=0;i<w.size();++i){\n                    char orig = w[i];\n                    for (char c='a';c<='z';++c){\n                        w[i]=c;\n                        if (w==endWord) return steps+1;\n                        if (dict.count(w)) { q.push(w); dict.erase(w); }\n                    }\n                    w[i]=orig;\n                }\n            }\n            steps++;\n        }\n        return 0;\n    }\n};",
    "lineCount": 33
  },
  {
    "id": 128,
    "title": "Longest Consecutive Sequence",
    "variant": null,
    "fileName": "128thday_leetcode.cpp",
    "code": "#include <vector>\n#include <unordered_set>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #128: Longest Consecutive Sequence\nclass Solution {\npublic:\n    int longestConsecutive(vector<int>& nums) {\n        unordered_set<int> s(nums.begin(), nums.end());\n        int best = 0;\n        for (int x: nums){\n            if (!s.count(x)) continue;\n            s.erase(x);\n            int cur = 1;\n            int left = x-1; while (s.count(left)) { s.erase(left--); cur++; }\n            int right = x+1; while (s.count(right)) { s.erase(right++); cur++; }\n            best = max(best, cur);\n        }\n        return best;\n    }\n};",
    "lineCount": 22
  },
  {
    "id": 129,
    "title": "Sum Root to Leaf Numbers",
    "variant": null,
    "fileName": "129thday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #129: Sum Root to Leaf Numbers\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    int sumNumbers(TreeNode* root) { return dfs(root,0); }\n    int dfs(TreeNode* node, int cur){\n        if (!node) return 0;\n        cur = cur*10 + node->val;\n        if (!node->left && !node->right) return cur;\n        return dfs(node->left,cur) + dfs(node->right,cur);\n    }\n};",
    "lineCount": 16
  },
  {
    "id": 130,
    "title": "Surrounded Regions",
    "variant": null,
    "fileName": "130thday_leetcode.cpp",
    "code": "#include <vector>\n#include <queue>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #130: Surrounded Regions\nclass Solution {\npublic:\n    void solve(vector<vector<char>>& board) {\n        if (board.empty()) return;\n        int m = board.size(), n = board[0].size();\n        queue<pair<int,int>> q;\n        for (int i=0;i<m;i++){\n            if (board[i][0]=='O') { board[i][0]='T'; q.push({i,0}); }\n            if (board[i][n-1]=='O') { board[i][n-1]='T'; q.push({i,n-1}); }\n        }\n        for (int j=0;j<n;j++){\n            if (board[0][j]=='O') { board[0][j]='T'; q.push({0,j}); }\n            if (board[m-1][j]=='O') { board[m-1][j]='T'; q.push({m-1,j}); }\n        }\n        int dirs[4][2]={{1,0},{-1,0},{0,1},{0,-1}};\n        while (!q.empty()){\n            auto [x,y]=q.front(); q.pop();\n            for (auto &d: dirs){ int nx=x+d[0], ny=y+d[1];\n                if (nx>=0 && nx<m && ny>=0 && ny<n && board[nx][ny]=='O'){ board[nx][ny]='T'; q.push({nx,ny}); }\n            }\n        }\n        for (int i=0;i<m;i++) for (int j=0;j<n;j++) if (board[i][j]=='O') board[i][j]='X'; else if (board[i][j]=='T') board[i][j]='O';\n    }\n};",
    "lineCount": 30
  },
  {
    "id": 131,
    "title": "Palindrome Partitioning",
    "variant": null,
    "fileName": "131stday_leetcode.cpp",
    "code": "#include <string>\n#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #131: Palindrome Partitioning\nclass Solution {\npublic:\n    vector<vector<string>> partition(const string& s) {\n        int n = s.size();\n        vector<vector<string>> res;\n        vector<string> cur;\n        vector<vector<bool>> pal(n, vector<bool>(n,false));\n        for (int i=n-1;i>=0;--i){\n            for (int j=i;j<n;++j){\n                if (s[i]==s[j] && (j-i<2 || pal[i+1][j-1])) pal[i][j]=true;\n            }\n        }\n        function<void(int)> dfs = [&](int idx){\n            if (idx==n){ res.push_back(cur); return; }\n            for (int j=idx;j<n;++j) if (pal[idx][j]){\n                cur.push_back(s.substr(idx,j-idx+1)); dfs(j+1); cur.pop_back();\n            }\n        };\n        dfs(0); return res;\n    }\n};",
    "lineCount": 27
  },
  {
    "id": 132,
    "title": "Palindrome Partitioning II",
    "variant": "min cuts",
    "fileName": "132ndday_leetcode.cpp",
    "code": "#include <string>\n#include <vector>\n#include <limits>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #132: Palindrome Partitioning II (min cuts)\nclass Solution {\npublic:\n    int minCut(const string& s) {\n        int n = s.size();\n        if (n<=1) return 0;\n        vector<vector<bool>> pal(n, vector<bool>(n,false));\n        for (int i=n-1;i>=0;--i) for (int j=i;j<n;++j)\n            pal[i][j] = (s[i]==s[j]) && (j-i<2 || pal[i+1][j-1]);\n        vector<int> dp(n+1, INT_MAX); dp[0]=-1;\n        for (int i=1;i<=n;i++){\n            for (int j=0;j<i;j++) if (pal[j][i-1]) dp[i] = min(dp[i], dp[j]+1);\n        }\n        return dp[n];\n    }\n};",
    "lineCount": 22
  },
  {
    "id": 133,
    "title": "Clone Graph",
    "variant": null,
    "fileName": "133rdday_leetcode.cpp",
    "code": "#include <vector>\n#include <queue>\n#include <unordered_map>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #133: Clone Graph\nclass Node {\npublic:\n    int val;\n    vector<Node*> neighbors;\n    Node(): val(0) {}\n    Node(int _val): val(_val) {}\n    Node(int _val, vector<Node*> _neighbors): val(_val), neighbors(_neighbors) {}\n};\n\nclass Solution {\npublic:\n    Node* cloneGraph(Node* node) {\n        if (!node) return nullptr;\n        unordered_map<Node*, Node*> m;\n        queue<Node*> q; q.push(node);\n        m[node] = new Node(node->val);\n        while (!q.empty()){\n            Node* cur = q.front(); q.pop();\n            for (Node* nb : cur->neighbors){\n                if (!m.count(nb)) { m[nb] = new Node(nb->val); q.push(nb); }\n                m[cur]->neighbors.push_back(m[nb]);\n            }\n        }\n        return m[node];\n    }\n};",
    "lineCount": 33
  },
  {
    "id": 134,
    "title": "Gas Station",
    "variant": null,
    "fileName": "134thday_leetcode.cpp",
    "code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #134: Gas Station\nclass Solution {\npublic:\n    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {\n        int n = gas.size();\n        int total=0, sum=0, start=0;\n        for (int i=0;i<n;i++){\n            int diff = gas[i]-cost[i];\n            total += diff; sum += diff;\n            if (sum<0){ start = i+1; sum=0; }\n        }\n        return total>=0 ? start : -1;\n    }\n};",
    "lineCount": 18
  },
  {
    "id": 135,
    "title": "Candy",
    "variant": null,
    "fileName": "135thday_leetcode.cpp",
    "code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #135: Candy\nclass Solution {\npublic:\n    int candy(vector<int>& ratings) {\n        int n = ratings.size();\n        if (n==0) return 0;\n        vector<int> left(n,1), right(n,1);\n        for (int i=1;i<n;i++) if (ratings[i]>ratings[i-1]) left[i]=left[i-1]+1;\n        for (int i=n-2;i>=0;i--) if (ratings[i]>ratings[i+1]) right[i]=right[i+1]+1;\n        int ans=0; for (int i=0;i<n;i++) ans += max(left[i], right[i]);\n        return ans;\n    }\n};",
    "lineCount": 17
  },
  {
    "id": 136,
    "title": "Single Number",
    "variant": null,
    "fileName": "136thday_leetcode.cpp",
    "code": "#include <vector>\n#include <numeric>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #136: Single Number\nclass Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        int x = 0; for (int v: nums) x ^= v; return x;\n    }\n};",
    "lineCount": 12
  },
  {
    "id": 137,
    "title": "Single Number II",
    "variant": "every element appears three times except one",
    "fileName": "137thday_leetcode.cpp",
    "code": "#include <vector>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #137: Single Number II (every element appears three times except one)\nclass Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        int ones=0, twos=0;\n        for (int x: nums){\n            ones = (ones ^ x) & ~twos;\n            twos = (twos ^ x) & ~ones;\n        }\n        return ones;\n    }\n};",
    "lineCount": 16
  },
  {
    "id": 138,
    "title": "Copy List with Random Pointer",
    "variant": null,
    "fileName": "138thday_leetcode.cpp",
    "code": "#include <unordered_map>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #138: Copy List with Random Pointer\nclass Node {\npublic:\n    int val;\n    Node* next;\n    Node* random;\n    Node(int _val): val(_val), next(nullptr), random(nullptr){}\n};\n\nclass Solution {\npublic:\n    Node* copyRandomList(Node* head) {\n        if (!head) return nullptr;\n        unordered_map<Node*, Node*> m;\n        Node* cur = head;\n        while (cur){ m[cur] = new Node(cur->val); cur = cur->next; }\n        cur = head;\n        while (cur){ m[cur]->next = m[cur->next]; m[cur]->random = m[cur->random]; cur = cur->next; }\n        return m[head];\n    }\n};",
    "lineCount": 25
  },
  {
    "id": 139,
    "title": "Word Break",
    "variant": "DP",
    "fileName": "139thday_leetcode.cpp",
    "code": "#include <string>\n#include <vector>\n#include <unordered_set>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #139: Word Break (DP)\nclass Solution {\npublic:\n    bool wordBreak(const string& s, vector<string>& wordDict) {\n        unordered_set<string> dict(wordDict.begin(), wordDict.end());\n        int n = s.size(); vector<bool> dp(n+1,false); dp[0]=true;\n        for (int i=1;i<=n;i++){\n            for (int j=0;j<i;j++) if (dp[j] && dict.count(s.substr(j,i-j))){ dp[i]=true; break; }\n        }\n        return dp[n];\n    }\n};",
    "lineCount": 18
  },
  {
    "id": 140,
    "title": "Word Break II",
    "variant": "all sentences",
    "fileName": "140thday_leetcode.cpp",
    "code": "#include <string>\n#include <vector>\n#include <unordered_set>\n#include <unordered_map>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #140: Word Break II (all sentences)\nclass Solution {\npublic:\n    vector<string> wordBreak(string s, vector<string>& wordDict) {\n        unordered_set<string> dict(wordDict.begin(), wordDict.end());\n        unordered_map<int, vector<string>> memo;\n        function<vector<string>(int)> dfs = [&](int idx){\n            if (memo.count(idx)) return memo[idx];\n            vector<string> res;\n            if (idx==s.size()) { res.push_back(\"\"); return memo[idx]=res; }\n            for (int i=idx+1;i<=s.size();++i){\n                string word = s.substr(idx, i-idx);\n                if (!dict.count(word)) continue;\n                auto tails = dfs(i);\n                for (auto &t: tails){\n                    string sep = t.empty() ? \"\" : \" \";\n                    res.push_back(word + (t.empty()?\"\":\" \"+t));\n                }\n            }\n            return memo[idx]=res;\n        };\n        return dfs(0);\n    }\n};",
    "lineCount": 31
  },
  {
    "id": 141,
    "title": "Linked List Cycle",
    "variant": null,
    "fileName": "141stday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #141: Linked List Cycle\nstruct ListNode { int val; ListNode* next; ListNode(int x): val(x), next(nullptr){} };\n\nclass Solution {\npublic:\n    bool hasCycle(ListNode* head) {\n        ListNode *slow=head, *fast=head;\n        while (fast && fast->next){ slow=slow->next; fast=fast->next->next; if (slow==fast) return true; }\n        return false;\n    }\n};",
    "lineCount": 14
  },
  {
    "id": 142,
    "title": "Linked List Cycle II",
    "variant": null,
    "fileName": "142ndday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #142: Linked List Cycle II\nstruct ListNode { int val; ListNode* next; ListNode(int x): val(x), next(nullptr){} };\n\nclass Solution {\npublic:\n    ListNode* detectCycle(ListNode* head) {\n        ListNode *slow=head, *fast=head;\n        while (fast && fast->next){ slow=slow->next; fast=fast->next->next; if (slow==fast) break; }\n        if (!fast || !fast->next) return nullptr;\n        slow = head;\n        while (slow!=fast){ slow=slow->next; fast=fast->next; }\n        return slow;\n    }\n};",
    "lineCount": 17
  },
  {
    "id": 143,
    "title": "Reorder List",
    "variant": null,
    "fileName": "143rdday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #143: Reorder List\nstruct ListNode { int val; ListNode* next; ListNode(int x): val(x), next(nullptr){} };\n\nclass Solution {\npublic:\n    void reorderList(ListNode* head) {\n        if (!head || !head->next) return;\n        // find middle\n        ListNode *slow=head, *fast=head;\n        while (fast->next && fast->next->next){ slow=slow->next; fast=fast->next->next; }\n        // reverse second\n        ListNode* prev=nullptr; ListNode* cur=slow->next; while (cur){ ListNode* nx=cur->next; cur->next=prev; prev=cur; cur=nx; }\n        slow->next = nullptr;\n        // merge\n        ListNode* p=head; ListNode* q=prev;\n        while (q){ ListNode* pn=p->next; ListNode* qn=q->next; p->next=q; q->next=pn; p=pn; q=qn; }\n    }\n};",
    "lineCount": 21
  },
  {
    "id": 144,
    "title": "Binary Tree Preorder Traversal",
    "variant": null,
    "fileName": "144thday_leetcode.cpp",
    "code": "#include <vector>\n#include <stack>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #144: Binary Tree Preorder Traversal\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    vector<int> preorderTraversal(TreeNode* root) {\n        vector<int> res; if (!root) return res;\n        stack<TreeNode*> st; st.push(root);\n        while (!st.empty()){\n            TreeNode* node = st.top(); st.pop(); res.push_back(node->val);\n            if (node->right) st.push(node->right);\n            if (node->left) st.push(node->left);\n        }\n        return res;\n    }\n};",
    "lineCount": 21
  },
  {
    "id": 145,
    "title": "Binary Tree Postorder Traversal",
    "variant": "iterative",
    "fileName": "145thday_leetcode.cpp",
    "code": "#include <vector>\n#include <stack>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #145: Binary Tree Postorder Traversal (iterative)\nstruct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x): val(x), left(nullptr), right(nullptr){} };\n\nclass Solution {\npublic:\n    vector<int> postorderTraversal(TreeNode* root) {\n        vector<int> res; if (!root) return res;\n        stack<TreeNode*> st; st.push(root);\n        while (!st.empty()){\n            TreeNode* node = st.top(); st.pop(); res.push_back(node->val);\n            if (node->left) st.push(node->left);\n            if (node->right) st.push(node->right);\n        }\n        reverse(res.begin(), res.end());\n        return res;\n    }\n};",
    "lineCount": 22
  },
  {
    "id": 146,
    "title": "LRU Cache",
    "variant": null,
    "fileName": "146thday_leetcode.cpp",
    "code": "#include <list>\n#include <unordered_map>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #146: LRU Cache\nclass LRUCache {\n    int cap;\n    list<pair<int,int>> items;\n    unordered_map<int, list<pair<int,int>>::iterator> mp;\npublic:\n    LRUCache(int capacity): cap(capacity) {}\n    int get(int key){\n        if (!mp.count(key)) return -1;\n        auto it = mp[key]; int val = it->second; items.erase(it); items.push_front({key,val}); mp[key]=items.begin(); return val;\n    }\n    void put(int key, int value){\n        if (mp.count(key)) { items.erase(mp[key]); items.push_front({key,value}); mp[key]=items.begin(); return; }\n        if ((int)items.size() == cap) { auto last = items.back(); mp.erase(last.first); items.pop_back(); }\n        items.push_front({key,value}); mp[key]=items.begin();\n    }\n};",
    "lineCount": 22
  },
  {
    "id": 147,
    "title": "Insertion Sort List",
    "variant": null,
    "fileName": "147thday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #147: Insertion Sort List\nstruct ListNode { int val; ListNode* next; ListNode(int x): val(x), next(nullptr){} };\n\nclass Solution {\npublic:\n    ListNode* insertionSortList(ListNode* head) {\n        ListNode dummy(0); ListNode* cur = head;\n        while (cur){\n            ListNode* prev = &dummy;\n            while (prev->next && prev->next->val < cur->val) prev = prev->next;\n            ListNode* nxt = cur->next;\n            cur->next = prev->next; prev->next = cur;\n            cur = nxt;\n        }\n        return dummy.next;\n    }\n};",
    "lineCount": 20
  },
  {
    "id": 148,
    "title": "Sort List",
    "variant": "merge sort",
    "fileName": "148thday_leetcode.cpp",
    "code": "#include <iostream>\nusing namespace std;\n\n// LeetCode #148: Sort List (merge sort)\nstruct ListNode { int val; ListNode* next; ListNode(int x): val(x), next(nullptr){} };\n\nclass Solution {\npublic:\n    ListNode* sortList(ListNode* head) {\n        if (!head || !head->next) return head;\n        ListNode* slow=head; ListNode* fast=head->next;\n        while (fast && fast->next){ slow=slow->next; fast=fast->next->next; }\n        ListNode* mid = slow->next; slow->next = nullptr;\n        ListNode* left = sortList(head); ListNode* right = sortList(mid);\n        return merge(left,right);\n    }\n    ListNode* merge(ListNode* a, ListNode* b){\n        ListNode dummy(0); ListNode* p=&dummy;\n        while (a && b){ if (a->val < b->val){ p->next=a; a=a->next; } else { p->next=b; b=b->next; } p=p->next; }\n        p->next = a? a : b; return dummy.next;\n    }\n};",
    "lineCount": 22
  },
  {
    "id": 149,
    "title": "Max Points on a Line",
    "variant": null,
    "fileName": "149thday_leetcode.cpp",
    "code": "#include <vector>\n#include <unordered_map>\n#include <algorithm>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #149: Max Points on a Line\nclass Solution {\n    int gcd(int a,int b){ return b==0? a: gcd(b, a%b); }\npublic:\n    int maxPoints(vector<vector<int>>& points) {\n        int n = points.size(); if (n<3) return n;\n        int best=0;\n        for (int i=0;i<n;i++){\n            unordered_map<long long,int> cnt; int dup=0, curmax=0;\n            for (int j=i+1;j<n;j++){\n                int dx = points[j][0]-points[i][0];\n                int dy = points[j][1]-points[i][1];\n                if (dx==0 && dy==0){ dup++; continue; }\n                int g = gcd(abs(dx), abs(dy)); dx /= g; dy /= g;\n                if (dx<0){ dx=-dx; dy=-dy; }\n                else if (dx==0 && dy<0) dy = -dy;\n                long long key = ((long long)dx<<32) ^ (unsigned int)dy;\n                curmax = max(curmax, ++cnt[key]);\n            }\n            best = max(best, curmax + dup + 1);\n        }\n        return best;\n    }\n};",
    "lineCount": 30
  },
  {
    "id": 150,
    "title": "Evaluate Reverse Polish Notation",
    "variant": null,
    "fileName": "150thday_leetcode.cpp",
    "code": "#include <vector>\n#include <string>\n#include <stack>\n#include <iostream>\nusing namespace std;\n\n// LeetCode #150: Evaluate Reverse Polish Notation\nclass Solution {\npublic:\n    int evalRPN(vector<string>& tokens) {\n        stack<int> st;\n        for (auto &t: tokens){\n            if (t==\"+\" || t==\"-\" || t==\"*\" || t==\"/\"){\n                int b = st.top(); st.pop(); int a = st.top(); st.pop();\n                if (t==\"+\") st.push(a+b);\n                else if (t==\"-\") st.push(a-b);\n                else if (t==\"*\") st.push(a*b);\n                else st.push(a/b);\n            } else st.push(stoi(t));\n        }\n        return st.top();\n    }\n};",
    "lineCount": 23
  }
]
