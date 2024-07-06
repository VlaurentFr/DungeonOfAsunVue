export const masterySword = [
  {
    rank: "E",
    bonus: "Aucun",
    type:"",
    total: [{
      upgraded: false,
      bonus: "Aucun" 
    }]
  },
  {
    rank: "E+",
    bonus: "Aucun",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "Aucun" 
      }
    ]
  }
  ,
  {
    rank: "D",
    bonus: "Aucun",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "Aucun" 
      }
    ]
  },
  {
    rank: "D+",
    bonus: "+5",
    type:"Dégâts",
    total: [
      {
        upgraded: true,
        bonus: "+ 5 Dégâts"
      }
    ]
  },
  {
    rank: "C",
    bonus: "Dash",
    type:"",
    total: [
      {
        upgraded: true,
        bonus: "Dash" 
      },
      {
        upgraded: false,
        bonus: "+ 5 Dégâts"
      },
    ]
  },
  {
    rank: "C+",
    bonus: "+1d8",
    type:"Dégâts",
    total: [
      {
        upgraded: false,
        bonus: "Dash" 
      },
      {
        upgraded: false,
        bonus: "+ 5 Dégâts"
      },
      {
        upgraded: true,
        bonus: "+ 1d8 Dégâts"
      }
    ]
  },
  {
    rank: "B",
    bonus: "+10",
    type:"Dégâts",
    total: [
      {
        upgraded: false,
        bonus: "Dash" 
      },
      {
        upgraded: true,
        bonus: "+ 15 Dégâts"
      },
      {
        upgraded: false,
        bonus: "+ 1d8 Dégâts" 
      },
    ]
  },
  {
    rank: "B+",
    bonus: "+1d8",
    type:"Dégâts",
    total: [
      {
        upgraded: false,
        bonus: "Dash" 
      },
      {
        upgraded: false,
        bonus: "+ 15 Dégâts"
      },
      {
        upgraded: true,
        bonus: "+ 2d8 Dégâts" 
      },
    ]
  },
  {
    rank: "A",
    bonus: "+15",
    type:"Dégâts",
    total: [
      {
        upgraded: false,
        bonus: "Dash" 
      },
      {
        upgraded: true,
        bonus: "+ 30 Dégâts"
      },
      {
        upgraded: false,
        bonus: "+ 2d8 Dégâts" 
      },
    ]
  },
  {
    rank: "A+",
    bonus: "+1d8",
    type:"Dégâts",
    total: [
      {
        upgraded: false,
        bonus: "Dash" 
      },
      {
        upgraded: false,
        bonus: "+ 30 Dégâts"
      },
      {
        upgraded: true,
        bonus: "+ 3d8 Dégâts" 
      },
    ]
  },
  {
    rank: "S",
    bonus: "+10",
    type:"Critique",
    total: [
      {
        upgraded: false,
        bonus: "Dash" 
      },
      {
        upgraded: false,
        bonus: "+ 9d6 Dégâts"
      },

      {
        upgraded: false,
        bonus: "+ 30 Dégâts" 
      },
      {
        upgraded: true,
        bonus: "+ 10 CRIT"
      }
    ]
  },
  {
    rank: "S+",
    bonus: "+1d8",
    type:"Dégâts",
    total: [
      {
        upgraded: false,
        bonus: "Dash" 
      },
      {
        upgraded: false,
        bonus: "+ 30 Dégâts"
      },
      {
        upgraded: true,
        bonus: "+ 4d8 Dégâts" 
      },
      {
        upgraded: false,
        bonus: "+ 10 CRIT"
      }
    ]
  }
]
export const masteryMagic = [
  {
    rank: "E",
    bonus: "Aucun",
    type:"",
    total: [{
      upgraded: false,
      bonus: "Aucun" 
    }]
  },
  {
    rank: "E+",
    bonus: "Aucun",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "Aucun" 
      }
    ]
  }
  ,
  {
    rank: "D",
    bonus: "Aucun",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "Aucun" 
      }
    ]
  },
  {
    rank: "D+",
    bonus: "+3",
    type:"Dmgs / Soins",
    total: [
      {
        upgraded: true,
        bonus: "+ 3 Dégâts/Soins"
      }
    ]
  },
  {
    rank: "C",
    bonus: "Secours",
    type:"",
    total: [
      {
        upgraded: true,
        bonus: "Secours" 
      },
      {
        upgraded: false,
        bonus: "+ 3 Dégâts/Soins"
      }
    ]
  },
  {
    rank: "C+",
    bonus: "+1d8",
    type:"Dmgs / Soins",
    total: [
      {
        upgraded: false,
        bonus: "Secours" 
      },
      {
        upgraded: false,
        bonus: "+ 3 Dégâts/Soins"
      },
      {
        upgraded: true,
        bonus: "+ 1d8 Dégâts/Soins"
      }
    ]
  },
  {
    rank: "B",
    bonus: "+7",
    type:"Dmgs / Soins",
    total: [
      {
        upgraded: false,
        bonus: "Secours" 
      },
      {
        upgraded: true,
        bonus: "+ 10 Dégâts/Soins"
      },
      {
        upgraded: false,
        bonus: "+ 1d8 Dégâts/Soins"
      }
    ]
  },
  {
    rank: "B+",
    bonus: "+1d8",
    type:"Dmgs / Soins",
    total: [
      {
        upgraded: false,
        bonus: "Secours" 
      },
      {
        upgraded: false,
        bonus: "+ 10 Dégâts/Soins"
      },
      {
        upgraded: true,
        bonus: "+ 2d8 Dégâts/Soins"
      }
    ]
  },
  {
    rank: "A",
    bonus: "10",
    type:"Dmgs / Soins",
    total: [
      {
        upgraded: false,
        bonus: "Secours" 
      },
      {
        upgraded: true,
        bonus: "+ 20 Dégâts/Soins"
      },
      {
        upgraded: false,
        bonus: "+ 2d8 Dégâts/Soins"
      }
    ]
  },
  {
    rank: "A+",
    bonus: "+1d8",
    type:"Dmgs / Soins",
    total: [
      {
        upgraded: false,
        bonus: "Secours" 
      },
      {
        upgraded: false,
        bonus: "+ 20 Dégâts/Soins"
      }
      ,
      {
        upgraded: true,
        bonus: "+ 3d8 Dégâts/Soins"
      }
    ]
  },
  {
    rank: "S",
    bonus: "+10",
    type:"Critique",
    total: [
      {
        upgraded: false,
        bonus: "Secours" 
      },
      {
        upgraded: false,
        bonus: "+ 20 Dégâts"
      },
      {
        upgraded: false,
        bonus: "+ 3d8 Dégâts/Soins"
      },
      {
        upgraded: true,
        bonus: "+ 10 CRIT"
      }
    ]
  },
  {
    rank: "S+",
    bonus: "+1d8",
    type:"Dmgs / Soins",
    total: [
      {
        upgraded: false,
        bonus: "Secours" 
      },
      {
        upgraded: true,
        bonus: "+ 20 Dégâts/Soins"
      },
      {
        upgraded: true,
        bonus: "+ 4d8 Dégâts/Soins"
      },
      {
        upgraded: false,
        bonus: "+ 10 CRIT"
      }
    ]
  }
]
export const masteryShield = [
  {
    rank: "E",
    bonus: "Aucun",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "Aucun" 
      }
    ]
  },
  {
    rank: "E+",
    bonus: "Aucun",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "Aucun" 
      }
    ]
  }
  ,
  {
    rank: "D",
    bonus: "Aucun",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "Aucun" 
      }
    ]
  },
  {
    rank: "D+",
    bonus: "+2",
    type:"DEF",
    total: [
      {
        upgraded: true,
        bonus: "+ 2 DEF" 
      }
    ]
  },
  {
    rank: "C",
    bonus: "Aucun",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "+ 2 DEF"
      }
    ]
  },
  {
    rank: "C+",
    bonus: "+2",
    type:"RES",
    total: [
      {
        upgraded: false,
        bonus: "+ 2 DEF"
      },
      {
        upgraded: true,
        bonus: "+ 2 RES"
      }
    ]
  },
  {
    rank: "B",
    bonus: "Aucun",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "+ 2 DEF"
      },
      {
        upgraded: false,
        bonus: "+ 2 RES"
      }
    ]
  },
  {
    rank: "B+",
    bonus: "+2",
    type:"DEF",
    total: [
      {
        upgraded: true,
        bonus: "+ 4 DEF"
      },
      {
        upgraded: false,
        bonus: "+ 2 RES"
      }
    ]
  },
  {
    rank: "A",
    bonus: "Aucun",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "+ 4 DEF"
      },
      {
        upgraded: false,
        bonus: "+ 2 RES"
      }
    ]
  },
  {
    rank: "A+",
    bonus: "+4",
    type:"RES",
    total: [
      {
        upgraded: false,
        bonus: "+ 4 DEF"
      },
      {
        upgraded: true,
        bonus: "+ 6 RES"
      }
    ]
  },
  {
    rank: "S",
    bonus: "Aucun",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "+ 4 DEF"
      },
      {
        upgraded: false,
        bonus: "+ 6 RES"
      }
    ]
  },
  {
    rank: "S+",
    bonus: "+4",
    type:"DEF",
    total: [
      {
        upgraded: true,
        bonus: "+ 8 DEF"
      },
      {
        upgraded: false,
        bonus: "+ 6 RES"
      }
    ]
  }
]