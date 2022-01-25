const database = [
  {
    id: 1,
    name: "Rakib",
    age: 33,
    address: [
      {
        id: 1,
        country: [
          {
            id: 1,
            name: "Bangladesh",
            division: [
              {
                id: 1,
                name: "Dhaka",
                district: [
                  {
                    id: 1,
                    name: "Gazipur",
                    policeStation: [
                      {
                        id: 1,
                        name: "Sadar",
                      },
                      {
                        id: 1,
                        name: "Kotali",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id:2 ,
    name: "Shakib",
    age: 33,
    address: [
      {
        id: 1,
        country: [
          {
            id: 1,
            name: "Bangladesh",
            division: [
              {
                id: 1,
                name: "Dhaka",
                district: [
                  {
                    id: 1,
                    name: "Dhaka",
                    policeStation: [
                      {
                        id: 1,
                        name: "Romna",
                      },
                      {
                        id: 1,
                        name: "FramGate",
                        residence: [
                          {
                            id: 1,
                            name: "Basabo",
                          },
                          {
                            id: 2,
                            name: "SeuraPara",
                          },
                          {
                            id: 3,
                            name: "Cantonment",
                            schoolList:[
                                {
                                    id:1,
                                    name:'Dhaka University',
                                    govt:true
                                },
                                {
                                    id:2,
                                    name:'North South University',
                                    govt:false

                                },
                                {
                                    id:3,
                                    name:'Medical University',
                                    govt:true

                                },
                            ]
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Shakib",
    age: 33,
    address: [
      {
        id: 1,
        country: [
          {
            id: 1,
            name: "Bangladesh",
            division: [
              {
                id: 1,
                name: "Dhaka",
                district: [
                  {
                    id: 1,
                    name: "Dhaka",
                    policeStation: [
                      {
                        id: 1,
                        name: "Poltan",
                      },
                      {
                        id: 2,
                        name: "Baitur Mokarram",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const myArr=database.map(m=>m.address.map(n=>n.country.map(r=>r.division.map(k=>k.district.map(d=>d.policeStation.map(h=>h.residence))))));
console.log(myArr);
const myFlatArr=myArr.flat(Infinity)
console.log(myFlatArr.forEach());