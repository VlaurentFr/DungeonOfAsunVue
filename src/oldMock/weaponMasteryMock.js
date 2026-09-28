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
    rank: "D",
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
    bonus: "+1d8",
    type:"Dégâts",
    total: [
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
    bonus: "",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "+ 5 Dégâts"
      },
      {
        upgraded: true,
        bonus: "+ 1d4 Dégâts" 
      },
      {
        upgraded: true,
        bonus: "+ 1d12 Dégâts" 
      },
    ]
  },
  {
    rank: "A",
    bonus: "",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "+ 5 Dégâts"
      },
      {
        upgraded: false,
        bonus: "+ 1d4 Dégâts" 
      },
      {
        upgraded: true,
        bonus: "+ 1d20 Dégâts" 
      },
    ]
  },
  {
    rank: "S",
    bonus: "+10",
    type:"Dégâts",
    total: [
      {
        upgraded: true,
        bonus: "+ 15 Dégâts"
      },
      {
        upgraded: false,
        bonus: "+ 1d4 Dégâts" 
      },
      {
        upgraded: false,
        bonus: "+ 1d20 Dégâts" 
      },
    ]
  },
  {
    rank: "M",
    bonus: "",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "+ 15 Dégâts"
      },
      {
        upgraded: true,
        bonus: "+ 1d12 Dégâts" 
      },
      {
        upgraded: false,
        bonus: "+ 1d20 Dégâts" 
      },
    ]
  },
  {
    rank: "H",
    bonus: "+15",
    type:"Dégâts",
    total: [
      {
        upgraded: true,
        bonus: "+ 30 Dégâts"
      },
      {
        upgraded: false,
        bonus: "+ 1d12 Dégâts" 
      },
      {
        upgraded: false,
        bonus: "+ 1d20 Dégâts" 
      },
    ]
  },
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
    rank: "D",
    bonus: "+5",
    type:"Dmg/Soin",
    total: [
      {
        upgraded: true,
        bonus: "+ 5 Dmg/Soin"
      }
    ]
  },
  {
    rank: "C",
    bonus: "+1d8",
    type:"Dmg/Soin",
    total: [
      {
        upgraded: false,
        bonus: "+ 5 Dmg/Soin"
      },
      {
        upgraded: true,
        bonus: "+ 1d8 Dmg/Soin"
      }
    ]
  },
  {
    rank: "B",
    bonus: "",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "+ 5 Dmg/Soin"
      },
      {
        upgraded: true,
        bonus: "+ 1d4 Dmg/Soin" 
      },
      {
        upgraded: true,
        bonus: "+ 1d12 Dmg/Soin" 
      },
    ]
  },
  {
    rank: "A",
    bonus: "",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "+ 5 Dmg/Soin"
      },
      {
        upgraded: false,
        bonus: "+ 1d4 Dmg/Soin" 
      },
      {
        upgraded: true,
        bonus: "+ 1d20 Dmg/Soin" 
      },
    ]
  },
  {
    rank: "S",
    bonus: "+10",
    type:"Dmg/Soin",
    total: [
      {
        upgraded: true,
        bonus: "+ 15 Dmg/Soin"
      },
      {
        upgraded: false,
        bonus: "+ 1d4 Dmg/Soin" 
      },
      {
        upgraded: false,
        bonus: "+ 1d20 Dmg/Soin" 
      },
    ]
  },
  {
    rank: "M",
    bonus: "",
    type:"",
    total: [
      {
        upgraded: false,
        bonus: "+ 15 Dmg/Soin"
      },
      {
        upgraded: true,
        bonus: "+ 1d12 Dmg/Soin" 
      },
      {
        upgraded: false,
        bonus: "+ 1d20 Dmg/Soin" 
      },
    ]
  },
  {
    rank: "H",
    bonus: "+15",
    type:"Dmg/Soin",
    total: [
      {
        upgraded: true,
        bonus: "+ 30 Dmg/Soin"
      },
      {
        upgraded: false,
        bonus: "+ 1d12 Dmg/Soin" 
      },
      {
        upgraded: false,
        bonus: "+ 1d20 Dmg/Soin" 
      },
    ]
  },
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
    rank: "D",
    bonus: "+5",
    type:"Parade",
    total: [
      {
        upgraded: true,
        bonus: "+ 5 Parade" 
      }
    ]
  },
  {
    rank: "C",
    bonus: "+5",
    type:"Protection",
    total: [
      {
        upgraded: false,
        bonus: "+ 5 Parade" 
      },
      {
        upgraded: true,
        bonus: "+ 5 Protection"
      }
    ]
  },
  {
    rank: "B",
    bonus: "+5",
    type:"Parade",
    total: [
      {
        upgraded: true,
        bonus: "+ 10 Parade" 
      },
      {
        upgraded: false,
        bonus: "+ 5 Protection"
      }
    ]
  },
  {
    rank: "A",
    bonus: "+5",
    type:"Protection",
    total: [
      {
        upgraded: false,
        bonus: "+ 10 Parade" 
      },
      {
        upgraded: true,
        bonus: "+ 10 Protection"
      }
    ]
  },
  {
    rank: "S",
    bonus: "+5",
    type:"Parade",
    total: [
      {
        upgraded: true,
        bonus: "+ 15 Parade" 
      },
      {
        upgraded: false,
        bonus: "+ 10 Protection"
      }
    ]
  },
  {
    rank: "M",
    bonus: "+5",
    type:"Protection",
    total: [
      {
        upgraded: false,
        bonus: "+ 15 Parade" 
      },
      {
        upgraded: true,
        bonus: "+ 15 Protection"
      }
    ]
  },
  {
    rank: "H",
    bonus: "+5",
    type:"Prd et Prt",
    total: [
      {
        upgraded: true,
        bonus: "+ 20 Parade" 
      },
      {
        upgraded: true,
        bonus: "+ 20 Protection"
      }
    ]
  },
]