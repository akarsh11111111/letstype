export default {
  "id": 558,
  "name": "Logical OR of Two Binary Grids Represented as Quad-Trees",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees",
  "relativeDir": "L/Logical OR of Two Binary Grids Represented as Quad-Trees",
  "slug": "0558-logical-or-of-two-binary-grids-represented-as-quad-trees",
  "availableLanguages": [
    "cpp",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "javascript": 27
  },
  "languages": {
    "cpp": "// Runtime: 34 ms (Top 56.25%) | Memory: 16.3 MB (Top 48.44%)\r\nclass Solution {\r\npublic:\r\n    Node* intersect(Node* quadTree1, Node* quadTree2) {\r\n        if (quadTree1->isLeaf && quadTree2->isLeaf) {\r\n            return new Node(quadTree1->val || quadTree2->val, true);\r\n        }\r\n        if (quadTree1->isLeaf) {\r\n            if (quadTree1->val) return quadTree1;\r\n            return quadTree2;\r\n        }\r\n        if (quadTree2->isLeaf) {\r\n            if (quadTree2->val) return quadTree2;\r\n            return quadTree1;\r\n        }\r\n\r\n        Node *topLeft = intersect(quadTree1->topLeft, quadTree2->topLeft);\r\n        Node *topRight = intersect(quadTree1->topRight, quadTree2->topRight);\r\n        Node *bottomLeft = intersect(quadTree1->bottomLeft, quadTree2->bottomLeft);\r\n        Node *bottomRight = intersect(quadTree1->bottomRight, quadTree2->bottomRight);\r\n\r\n        Node *newnode = new Node();\r\n\r\n        if (topLeft->isLeaf && topRight->isLeaf && bottomLeft->isLeaf && bottomRight->isLeaf && topLeft->val == topRight->val && bottomLeft->val == bottomRight->val && topLeft->val == bottomRight->val) {\r\n            newnode->isLeaf = true;\r\n            newnode->val = topLeft->val;\r\n        } else {\r\n            newnode->topLeft = topLeft;\r\n            newnode->topRight = topRight;\r\n            newnode->bottomLeft = bottomLeft;\r\n            newnode->bottomRight = bottomRight;\r\n        }\r\n\r\n        return newnode;\r\n    }\r\n};",
    "javascript": "var intersect = function(quadTree1, quadTree2) {\r\n    if (!quadTree1.isLeaf && !quadTree2.isLeaf) {\r\n        const tl = intersect(quadTree1.topLeft, quadTree2.topLeft)\r\n        const tr = intersect(quadTree1.topRight, quadTree2.topRight)\r\n        const bl = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft)\r\n        const br = intersect(quadTree1.bottomRight, quadTree2.bottomRight)\r\n        if (\r\n            tl.isLeaf && tr.isLeaf && bl.isLeaf && br.isLeaf &&\r\n            tl.val === tr.val && tr.val === bl.val && bl.val === br.val\r\n        ) {\r\n            return tl\r\n        } else {\r\n            return new Node(true, false, tl, tr, bl, br)   \r\n        }\r\n    } else if (\r\n        (quadTree2.isLeaf && quadTree2.val) ||\r\n        (quadTree1.isLeaf && !quadTree1.val)\r\n    ) {\r\n        return quadTree2\r\n    } else if (\r\n        (quadTree1.isLeaf && quadTree1.val) ||\r\n        (quadTree2.isLeaf && !quadTree2.val)\r\n    ) {\r\n        return quadTree1\r\n    }\r\n    throw new Error('it\\'s not possible')\r\n};"
  }
}
