const wordledata = [
    { player: "Aaron",
      stars: '&nbsp',  
      games: [
          {id: 219, lines: 4,  green: 7,  yellow: 3, blank: 10},
          {id: 220, lines: 4,  green: 12, yellow: 2, blank: 6},
          {id: 221, lines: 4,  green: 5,  yellow: 2, blank: 13},
          {id: 222, lines: 3,  green: 8,  yellow: 1, blank: 6},
          {id: 223, lines: 5,  green: 6,  yellow: 7, blank: 12},
          {id: 224, lines: 3,  green: 8,  yellow: 0, blank: 7},
          {id: 225, lines: 3,  green: 7,  yellow: 1, blank: 7},
          {id: 226, lines: 3,  green: 6,  yellow: 1, blank: 8},
          {id: 227, lines: 5,  green: 8,  yellow: 7, blank: 10}, 
          {id: 228, lines: 3,  green: 8,  yellow: 3, blank: 4},
          {id: 229, lines: 7,  green: 16,  yellow: 0, blank: 14},   
          {id: 230, lines: 3,  green: 10,  yellow: 1, blank: 4},  
          {id: 231, lines: 3,  green: 6,  yellow: 2, blank: 7}, 
          {id: 232, lines: 3,  green: 9,  yellow: 1, blank: 5}, 
          {id: 233, lines: 6,  green: 17,  yellow: 3, blank: 10},
          {id: 234, lines: 4,  green: 12,  yellow: 1, blank: 7},     
      ] 
    },
    { player: "Boysie",
    stars: '⭐⭐',  
    games: [
        {id: 000, lines: 4,  green: 9,  yellow: 2, blank: 9},
        {id: 220, lines: 4,  green: 8, yellow: 6, blank: 6},
        {id: 221, lines: 5,  green: 9,  yellow: 4, blank: 12},
        {id: 222, lines: 3,  green: 11,  yellow: 1, blank: 3},
        {id: 223, lines: 4,  green: 7,  yellow: 6, blank: 7},
        {id: 224, lines: 2,  green: 8,  yellow: 0, blank: 2},
        {id: 225, lines: 4,  green: 8,  yellow: 0, blank: 12},
        {id: 226, lines: 3,  green: 5,  yellow: 5, blank: 5},
        {id: 227, lines: 3,  green: 5,  yellow: 4, blank: 6},
        {id: 228, lines: 2,  green: 7,  yellow: 2, blank: 1}, 
        {id: 229, lines: 4,  green: 10,  yellow: 3, blank: 7},
        {id: 230, lines: 4,  green: 11,  yellow: 1, blank: 8},  
        {id: 231, lines: 4,  green: 10,  yellow: 3, blank: 7},  
        {id: 232, lines: 4,  green: 15,  yellow: 0, blank: 5},
        {id: 233, lines: 6,  green: 11,  yellow: 3, blank: 16},
        {id: 234, lines: 3,  green: 6,  yellow: 3, blank: 6},            
    ] 
    },
    { player: "Geoff",
    stars: '⭐⭐',  
    games: [
        {id: 219, lines: 6,  green: 8,  yellow: 4, blank: 18},
        {id: 220, lines: 5,  green: 7, yellow: 7, blank: 11},
        {id: 221, lines: 3,  green: 8,  yellow: 0, blank: 7},
        {id: 222, lines: 4,  green: 12,  yellow: 0, blank: 8},
        {id: 223, lines: 4,  green: 9,  yellow: 1, blank: 10},
        {id: 224, lines: 4,  green: 13,  yellow: 0, blank: 7},
        {id: 225, lines: 4,  green: 8,  yellow: 1, blank: 11},
        {id: 226, lines: 3,  green: 7,  yellow: 1, blank: 7},
        {id: 227, lines: 3,  green: 7,  yellow: 4, blank: 4},
        {id: 228, lines: 2,  green: 6,  yellow: 2, blank: 2}, 
        {id: 229, lines: 4,  green: 9,  yellow: 2, blank: 9},
        {id: 230, lines: 2,  green: 7,  yellow: 1, blank: 2},
        {id: 231, lines: 4,  green: 9,  yellow: 5, blank: 6}, 
        {id: 232, lines: 4,  green: 7,  yellow: 5, blank: 8}, 
        {id: 233, lines: 4,  green: 7,  yellow: 4, blank: 9},
        {id: 234, lines: 4,  green: 6,  yellow: 6, blank: 8},           
    ] 
    },
    { player: "Lee",
    stars: '⭐',  
    games: [
        {id: 219, lines: 4,  green: 7,  yellow: 4, blank: 9},
        {id: 220, lines: 3,  green: 9, yellow: 2, blank: 4},
        {id: 221, lines: 3,  green: 8,  yellow: 1, blank: 6},
        {id: 222, lines: 3,  green: 8,  yellow: 2, blank: 5},
        {id: 223, lines: 4,  green: 9,  yellow: 4, blank: 7},
        {id: 224, lines: 4,  green: 12,  yellow: 0, blank: 8},
        {id: 225, lines: 6,  green: 10,  yellow: 3, blank: 12},
        {id: 226, lines: 4,  green: 10,  yellow: 2, blank: 8},
        {id: 227, lines: 2,  green: 6,  yellow: 2, blank: 2}, 
        {id: 228, lines: 3,  green: 9,  yellow: 2, blank: 4},
        {id: 229, lines: 4,  green: 14,  yellow: 0, blank: 6},
        {id: 230, lines: 3,  green: 7,  yellow: 6, blank: 2},  
        {id: 231, lines: 4,  green: 8,  yellow: 6, blank: 6}, 
        {id: 232, lines: 3,  green: 8,  yellow: 1, blank: 6}, 
        {id: 233, lines: 5,  green: 15,  yellow: 2, blank: 8}, 
        {id: 234, lines: 4,  green: 13,  yellow: 1, blank: 6},        
    ] 
    },
    { player: "Lloydy",
    stars: '&nbsp',  
    games: [
        {id: 219, lines: 5,  green: 6,  yellow: 7, blank: 12},
        {id: 220, lines: 3,  green: 7, yellow: 2, blank: 6},
        {id: 221, lines: 5,  green: 11,  yellow: 2, blank: 12},
        {id: 222, lines: 4,  green: 14,  yellow: 0, blank: 6},
        {id: 223, lines: 5,  green: 10,  yellow: 3, blank: 12},
        {id: 224, lines: 4,  green: 11,  yellow: 0, blank: 8},
        {id: 225, lines: 4,  green: 8,  yellow: 2, blank: 10},
        {id: 226, lines: 3,  green: 7,  yellow: 4, blank: 4},
        {id: 227, lines: 3,  green: 6,  yellow: 4, blank: 5}, 
        {id: 228, lines: 3,  green: 9,  yellow: 2, blank: 4}, 
        {id: 229, lines: 3,  green: 9,  yellow: 1, blank: 5},
        {id: 230, lines: 4,  green: 7,  yellow: 6, blank: 7}, 
        {id: 231, lines: 4,  green: 9,  yellow: 4, blank: 7},  
        {id: 232, lines: 4,  green: 10,  yellow: 1, blank: 9},  
        {id: 233, lines: 4,  green: 9,  yellow: 4, blank: 7},
        {id: 234, lines: 4,  green: 8,  yellow: 0, blank: 12},       
    ]
    },
    { player: "Robbie",
    stars: '&nbsp',  
    games: [
        {id: 219, lines: 6,  green: 7,  yellow: 7, blank: 16},
        {id: 220, lines: 3,  green: 8, yellow: 3, blank: 4},
        {id: 221, lines: 4,  green: 12,  yellow: 0, blank: 8},
        {id: 222, lines: 5,  green: 15,  yellow: 0, blank: 10},
        {id: 223, lines: 4,  green: 9,  yellow: 6, blank: 8},
        {id: 224, lines: 4,  green: 7,  yellow: 5, blank: 8},
        {id: 225, lines: 4,  green: 11,  yellow: 1, blank: 7},
        {id: 226, lines: 5,  green: 17,  yellow: 1, blank: 6},
        {id: 227, lines: 4,  green: 5,  yellow: 9, blank: 14},
        {id: 228, lines: 3,  green: 8,  yellow: 0, blank: 7},
        {id: 229, lines: 4,  green: 7,  yellow: 7, blank: 6},
        {id: 230, lines: 4,  green: 13,  yellow: 12, blank: 5},
        {id: 231, lines: 6,  green: 13,  yellow: 3, blank: 14},
        {id: 232, lines: 6,  green: 15,  yellow: 4, blank: 11},
        {id: 233, lines: 4,  green: 6,  yellow: 6, blank: 8},
        {id: 234, lines: 4,  green: 12,  yellow: 0, blank: 8},
                  
    ]
    },
    { player: "Stevie",
    stars: '&nbsp',  
    games: [
        {id: 219, lines: 5,  green: 8,  yellow: 3, blank: 14},
        {id: 220, lines: 3,  green: 6, yellow: 6, blank: 3},
        {id: 221, lines: 4,  green: 6,  yellow: 3, blank: 11},
        {id: 222, lines: 3,  green: 9,  yellow: 1, blank: 5},
        {id: 223, lines: 4,  green: 8,  yellow: 4, blank: 8},
        {id: 224, lines: 6,  green: 20,  yellow: 0, blank: 10},
        {id: 225, lines: 4,  green: 12,  yellow: 3, blank: 5},
        {id: 226, lines: 4,  green: 9,  yellow: 2, blank: 9},
        {id: 227, lines: 4,  green: 11,  yellow: 2, blank: 7},
        {id: 228, lines: 3,  green: 8,  yellow: 2, blank: 5}, 
        {id: 229, lines: 4,  green: 9,  yellow: 2, blank: 9},
        {id: 230, lines: 3,  green: 6,  yellow: 3, blank: 6},
        {id: 231, lines: 5,  green: 10,  yellow: 5, blank: 10}, 
        {id: 232, lines: 5,  green: 6,  yellow: 5, blank: 14},
        {id: 233, lines: 6,  green: 13,  yellow: 3, blank: 14},
        {id: 234, lines: 4,  green: 11,  yellow: 2, blank: 7},            
    ]
    },        
    { player: "Sunny",
    stars: '⭐',  
    games: [
        {id: 219, lines: 4,  green: 6,  yellow: 2, blank: 12},
        {id: 220, lines: 4,  green: 10, yellow: 1, blank: 9},
        {id: 221, lines: 4,  green: 7,  yellow: 3, blank: 10},
        {id: 222, lines: 5,  green: 12,  yellow: 5, blank: 8},
        {id: 223, lines: 5,  green: 12,  yellow: 2, blank: 11},
        {id: 224, lines: 3,  green: 8,  yellow: 1, blank: 6},
        {id: 225, lines: 4,  green: 8,  yellow: 2, blank: 10},
        {id: 226, lines: 4,  green: 7,  yellow: 4, blank: 9},
        {id: 227, lines: 2,  green: 6,  yellow: 2, blank: 2}, 
        {id: 228, lines: 3,  green: 8,  yellow: 1, blank: 6}, 
        {id: 229, lines: 6,  green: 16,  yellow: 4, blank: 10},
        {id: 230, lines: 3,  green: 7,  yellow: 6, blank: 2}, 
        {id: 231, lines: 4,  green: 8,  yellow: 5, blank: 7},
        {id: 232, lines: 5,  green: 12,  yellow: 3, blank: 10},  
        {id: 233, lines: 4,  green: 8,  yellow: 5, blank: 7}, 
        {id: 234, lines: 4,  green: 9,  yellow: 3, blank: 8}, 
                 
    ] 
    },   
]