export const colors = [
  'White',
  'Black',
  'Red',
  'Maroon',
  'Beige',
  'Pink',
  'Green',
  'Yellow',
];

export const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
      { value: 'yellow', label: 'Yellow', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: 'S', label: 'S', checked: false },
      { value: 'M', label: 'M', checked: false },
      { value: 'L', label: 'L', checked: false },
      { value: 'XL', label: 'XL', checked: false },
    ],
  },
];

export const singleFilter = [
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: '159-399', label: '159$ to 399$', checked: false },
      { value: '399-999', label: '399$ to 999$', checked: false },
      { value: '999-1999', label: '999$ to 1999$', checked: false },
      { value: '1999-3999', label: '1999$ to 3999$', checked: false },
      { value: '3999-4999', label: '3999$ to 4999$', checked: false },
    ],
  },
  {
    id: 'discount',
    name: 'Discount Range',
    options: [
      { value: '10', label: '10% And Above', checked: false },
      { value: '20', label: '20% And Above', checked: false },
      { value: '30', label: '30% And Above', checked: false },
      { value: '40', label: '40% And Above', checked: false },
      { value: '50', label: '50% And Above', checked: false },
      { value: '60', label: '60% And Above', checked: false },
      { value: '70', label: '70% And Above', checked: false },
      { value: '80', label: '80% And Above', checked: false },
    ],
  },
  {
    id: 'stock',
    name: 'Availability',
    options: [
      { value: 'in_stock', label: 'In Stock' },
      { value: 'out_of_stock', label: 'Out Of Stock', checked: false },
    ],
  },
];
