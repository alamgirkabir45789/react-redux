const data = [
    {
      fieldId: 1,
      poNo: 'PO101',
      destination: 'Finland',
      shipmentMode: 'Air',
      orderQuantity: 5000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      poDetails: [
        {
          fieldId: 1,
          color: 'Red',
          orderQuantity: 2000,
          extra: 0,
          withExtra: 2000,
          previousQty: 0,
          layCount: 0,
          cutQuantity: 0,
          balance: 2000,
          isChecked: false,
          hasError: false
        },
        {
          fieldId: 2,
          color: 'Green',
          orderQuantity: 3000,
          extra: 0,
          withExtra: 3000,
          previousQty: 0,
          layCount: 0,
          cutQuantity: 0,
          balance: 3000,
          isChecked: true,
          hasError: false
        }
      ]
    },
    {
      fieldId: 2,
      poNo: 'PO102',
      destination: 'Denmark',
      shipmentMode: 'Air',
      orderQuantity: 7000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      isChecked: false,
      poDetails: [
        {
          fieldId: 3,
          color: 'Red',
          orderQuantity: 3500,
          extra: 0,
          withExtra: 3500,
          previousQty: 1200,
          layCount: 0,
          cutQuantity: 0,
          balance: 2300,
          isChecked: false,
          hasError: false
        },
        {
          fieldId: 4,
          color: 'Green',
          orderQuantity: 3500,
          extra: 0,
          withExtra: 3500,
          previousQty: 2400,
          layCount: 0,
          cutQuantity: 0,
          balance: 1100,
          isChecked: true,
          hasError: false
        }
      ]
    },
    {
      fieldId: 3,
      poNo: 'PO102',
      destination: 'Denmark',
      shipmentMode: 'Air',
      orderQuantity: 7000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      isChecked: false,
      poDetails: [
        {
          fieldId: 5,
          color: 'Red',
          orderQuantity: 3500,
          extra: 0,
          withExtra: 3500,
          previousQty: 1200,
          layCount: 0,
          cutQuantity: 0,
          balance: 2300,
          isChecked: false,
          hasError: false
        },
        {
          fieldId: 6,
          color: 'Green',
          orderQuantity: 3500,
          extra: 0,
          withExtra: 3500,
          previousQty: 2400,
          layCount: 0,
          cutQuantity: 0,
          balance: 1100,
          isChecked: true,
          hasError: false
        },
        {
          fieldId: 7,
          color: 'Yellow',
          orderQuantity: 4000,
          extra: 0,
          withExtra: 3500,
          previousQty: 2400,
          layCount: 0,
          cutQuantity: 0,
          balance: 1600,
          isChecked: true,
          hasError: false
        }
      ]
    }
  ];

  
  const myArr=[
    {
      id:1,    
    name:'Web Design',
    outline:[
      {
        id:1,
        subName:'HTML',
        subList:[
          {
            id:1,
            course:'C#',
            permission:true
          },
          {
            id:1,
            course:'PHP',
            permission:false

          }
        ]
        
      }
    ]
  },
  {
    id:2,    
  name:'Web Dev',
  outline:[
    {
      id:1,
      subName:'CSS',
      subList:[
        {
          id:1,
          course:'AI',
          permission:true

        },
        {
          id:1,
          course:'Python',
          permission:false

        }
      ]
      
    }
  ]
},
  ]

  const modArr=myArr.map(m=>m.outline.flatMap(f=>f.subList))
  // const modArr=myArr.map(m=>m.outline.map(f=>f.subList))
  console.log(modArr);
  const nestedArr=modArr.flat(Infinity);
  console.log(nestedArr);
  const arr=nestedArr.filter(f=>f.permission)
  console.log(arr);

  // const newArr=myArr.map(m=>m.outline.map(f=>f.subList.filter(n=>n.permission)));
  // console.log(newArr);
  // const flatArr=newArr.flat(Infinity);
  // console.log(flatArr);

// const newArr=myArr.flat(Infinity)
// console.log(newArr);

// const modArr=newArr.map(m=>m.outline.filter(f=>f.subList.permission));
// console.log(modArr);

  // const flatArray=data.flat();
  // console.log(flatArray);
  // console.log(flatArray.map(m=>m.poDetails.filter(f=>f.isChecked)));

//  const filterArray=data.map(i=>i.poDetails.filter(f=>f.isChecked))
//  console.log(filterArray);
//  const flatArray=filterArray.flat();
//  console.log(flatArray);