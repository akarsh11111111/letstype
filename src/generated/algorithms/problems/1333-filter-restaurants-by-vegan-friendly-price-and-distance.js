export default {
  "id": 1333,
  "name": "Filter Restaurants by Vegan-Friendly, Price and Distance",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance",
  "relativeDir": "F/Filter Restaurants by Vegan-Friendly, Price and Distance",
  "slug": "1333-filter-restaurants-by-vegan-friendly-price-and-distance",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 39,
    "python": 15,
    "javascript": 35
  },
  "languages": {
    "cpp": "//comparator class for sorting restaurants by their rating \r\nclass comp{\r\n        public:\r\n        bool operator ()(vector<int>a,vector<int>b){\r\n\t\t//same rating then sort by ids\r\n                if(a[1]==b[1]) return a[0]>b[0];\r\n                return a[1]>b[1];\r\n        }\r\n};\r\nclass Solution {\r\npublic:\r\n        vector<int> filterRestaurants(vector<vector<int>>& restaurants, int veganFriendly, int maxPrice, int maxDistance)\r\n\t\t{ //sort restaurants by their rating\r\n            sort(restaurants.begin(),restaurants.end(),comp());\r\n            vector<int>ans;\r\n            for(int i=0;i<restaurants.size();i++){\r\n\t\t\t//veganfriendly\r\n                    if(veganFriendly)\r\n\t\t\t\t\t{\r\n\t\t\t\t\t// store ids who satisfy the constraints\r\n                    if(restaurants[i][2]==veganFriendly and restaurants[i][3]<=maxPrice and  restaurants[i][4]<=maxDistance)\r\n\t\t\t\t\t        {\r\n                            ans.push_back(restaurants[i][0]);\r\n                            }\r\n                    }\r\n\t\t\t\t\t// non vegan\r\n                    else{\r\n\t\t\t\t\t// store ids who satisfy the constraints\r\n                            if(restaurants[i][3]<=maxPrice and  restaurants[i][4]<=maxDistance)\r\n\t\t\t\t\t\t\t{\r\n                            ans.push_back(restaurants[i][0]);\r\n                            }\r\n                    }\r\n            }\r\n         return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\ndef f_fcn(self,restaurants, veganFriendly, maxPrice, maxDistance):\r\n\tf_lst = filter(lambda x: (veganFriendly == 1 and x[2] == 1 and x[3] <= maxPrice and x[4] <= maxDistance) or\r\n\t\t\t\t   (veganFriendly == 0 and x[3] <= maxPrice and x[4] <= maxDistance), restaurants)\r\n\treturn f_lst\r\n\r\ndef h_fcn(self,lst):\r\n\treturn([lst[0], lst[1]])\r\n\r\ndef filterRestaurants(self, restaurants: List[List[int]], veganFriendly: int, maxPrice: int, maxDistance: int) -> List[int]:\r\n\r\n\tres = map(self.h_fcn, self.f_fcn(restaurants, veganFriendly, maxPrice, maxDistance))\r\n\r\n\r\n\treturn map(lambda x: x[0], sorted(res, key=lambda x: (-x[1], -x[0])))",
    "java": "// Runtime: 5 ms (Top 93.75%) | Memory: 58 MB (Top 51.88%)\r\nclass Restaurant {\r\n    int id, rating;\r\n    Restaurant(int id, int rating) {\r\n        this.id = id;\r\n        this.rating = rating;\r\n    }\r\n}\r\n\r\nclass RestaurantComparator implements Comparator<Restaurant> {\r\n    @Override\r\n    public int compare(Restaurant r1, Restaurant r2) {\r\n        return r1.rating == r2.rating ? r2.id - r1.id : r2.rating - r1.rating;\r\n    }\r\n}\r\n\r\nclass Solution {\r\n    public List<Integer> filterRestaurants(int[][] restaurants, int veganFriendly, int maxPrice, int maxDistance) {\r\n        PriorityQueue<Restaurant> heap = new PriorityQueue<>(new RestaurantComparator());\r\n        if(veganFriendly == 1) {\r\n            for(int[] restaurant: restaurants) {\r\n                if(restaurant[2] == 1 && restaurant[3] <= maxPrice && restaurant[4] <= maxDistance) {\r\n                    heap.offer(new Restaurant(restaurant[0], restaurant[1]));\r\n                }\r\n            }\r\n        } else {\r\n            for(int[] restaurant: restaurants) {\r\n                if(restaurant[3] <= maxPrice && restaurant[4] <= maxDistance) {\r\n                    heap.offer(new Restaurant(restaurant[0], restaurant[1]));\r\n                }\r\n            }\r\n        }\r\n        List<Integer> answer = new ArrayList<>();\r\n        while(!heap.isEmpty()) {\r\n            answer.add(heap.poll().id);\r\n        }\r\n        return answer;\r\n    }\r\n}",
    "javascript": "var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {\r\n    let result = []\r\n    // veganFriendly filter\r\n    if(veganFriendly === 1){\r\n       restaurants = restaurants.filter(restaurant=> restaurant[2] === 1) \r\n    }\r\n    \r\n    //max price\r\n    restaurants = restaurants.filter(restaurant=>restaurant[3]<=maxPrice)\r\n    \r\n    // max distance\r\n    restaurants = restaurants.filter(restaurant=>restaurant[4]<=maxDistance)\r\n    \r\n    restaurants.sort((a,b)=>b[1]-a[1])\r\n    \r\n    let tempArr = []\r\n    for(let i=0; i<restaurants.length;i++){\r\n        if(restaurants[i+1] && restaurants[i][1]===restaurants[i+1][1] ){\r\n            tempArr.push(restaurants[i][0])\r\n            tempArr.push(restaurants[i+1][0])\r\n            i++\r\n        }\r\n        else{\r\n            if(tempArr.length>0){\r\n                tempArr.sort((a,b)=>b-a)\r\n                result =[...result,...tempArr]    \r\n                tempArr=[]\r\n            }            \r\n            result.push(restaurants[i][0])\r\n        }\r\n            \r\n    }\r\n        \r\n    return result\r\n};"
  }
}
