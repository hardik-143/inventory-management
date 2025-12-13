export type ProductCategory = {
  id: string;
  name: string;
  image: string;
  productCount: number;
};

export type ProductListItem = {
  id: string;
  name: string;
  category: string;
  price: string;
  totalViews: string;
  gst?: string;
  isNewArrival?: boolean;
};

export type SpecificationRow = {
  id: string;
  key: string;
  value: string;
};

export type ProductHistoryEntry = {
  id: string;
  party: string;
  date: string;
  quantity: string;
  price: string;
  amount: string;
};

export type ProductDetail = {
  id: string;
  name: string;
  description: string;
  category: string;
  gstPercentage: string;
  quantity: string;
  price: string;
  newArrival: "YES" | "NO";
  totalQuantitySold: string;
  image: string;
  purchases: ProductHistoryEntry[];
  sales: ProductHistoryEntry[];
};

export type Customer = {
  id: string;
  customerName: string;
  firmName: string;
  contactNumber: string;
  address: string;
  email: string;
};

export const productCategories: ProductCategory[] = [
  {
    id: "cat-1",
    name: "drum",
    image: "/images/product/product-01.jpg",
    productCount: 24,
  },
  {
    id: "cat-2",
    name: "Electric",
    image: "/images/product/product-02.jpg",
    productCount: 18,
  },
];

export const products: ProductListItem[] = [
  {
    id: "prod-drum",
    name: "drum",
    category: "drum",
    price: "$120.00",
    totalViews: "1,240",
    gst: "18%",
    isNewArrival: false,
  },
  {
    id: "prod-one",
    name: "Product 1",
    category: "Electric",
    price: "$220.00",
    totalViews: "980",
    gst: "12%",
    isNewArrival: true,
  },
  {
    id: "prod-wr",
    name: "wr",
    category: "Accessories",
    price: "$180.00",
    totalViews: "640",
    gst: "5%",
    isNewArrival: false,
  },
  {
    id: "prod-four",
    name: "Product 4",
    category: "drum",
    price: "$150.00",
    totalViews: "720",
    gst: "18%",
    isNewArrival: true,
  },
  {
    id: "prod-five",
    name: "Product 5",
    category: "Electric",
    price: "$300.00",
    totalViews: "1,100",
    gst: "12%",
    isNewArrival: false,
  },
  {
    id: "prod-six",
    name: "Product 6",
    category: "Accessories",
    price: "$90.00",
    totalViews: "430",
    gst: "5%",
    isNewArrival: true,
  },
  {
    id: "prod-seven",
    name: "Product 7",
    category: "drum",
    price: "$250.00",
    totalViews: "860",
    gst: "18%",
    isNewArrival: false,
  },
  {
    id: "prod-eight",
    name: "Product 8",
    category: "Electric",
    price: "$400.00",
    totalViews: "1,300",
    gst: "12%",
    isNewArrival: true,
  },
  {
    id: "prod-nine",
    name: "Product 9",
    category: "Accessories",
    price: "$110.00",
    totalViews: "520",
    gst: "5%",
    isNewArrival: false,
  },
  {
    id: "prod-ten",
    name: "Product 10",
    category: "drum",
    price: "$180.00",
    totalViews: "750",
    gst: "18%",
    isNewArrival: true,
  },
  {
    id: "prod-seven",
    name: "Product 7",
    category: "drum",
    price: "$250.00",
    totalViews: "860",
    gst: "18%",
    isNewArrival: false,
  },
  {
    id: "prod-eight",
    name: "Product 8",
    category: "Electric",
    price: "$400.00",
    totalViews: "1,300",
    gst: "12%",
    isNewArrival: true,
  },
  {
    id: "prod-nine",
    name: "Product 9",
    category: "Accessories",
    price: "$110.00",
    totalViews: "520",
    gst: "5%",
    isNewArrival: false,
  },
  {
    id: "prod-ten",
    name: "Product 10",
    category: "drum",
    price: "$180.00",
    totalViews: "750",
    gst: "18%",
    isNewArrival: true,
  },
  
];

export const productDetailsMap: Record<string, ProductDetail> = {
  "prod-drum": {
    id: "prod-drum",
    name: "Drum",
    description:
      "Premium drum set tailored for studio and live performances with resilient build quality and rich sound output.",
    category: "drum",
    gstPercentage: "18%",
    quantity: "N/A",
    price: "$120.00",
    newArrival: "NO",
    totalQuantitySold: "50",
    image: "/images/product/product-08.jpg",
    purchases: [
      {
        id: "purchase-1",
        party: "yasin",
        date: "23/04/2025",
        quantity: "50",
        price: "$100",
        amount: "$5000",
      },
    ],
    sales: [
      {
        id: "sales-1",
        party: "alishan sales",
        date: "23/04/2025",
        quantity: "50",
        price: "$120",
        amount: "$6000",
      },
    ],
  },
};
export const customers: Customer[] = [
  {
    id: "cust-1",
    customerName: "alishan sales",
    firmName: "Alishan Sales",
    contactNumber: "+91 98765 43210",
    address: "45 Market Road, Mumbai, Maharashtra",
    email: "contact@alishansales.com",
  },
  {
    id: "cust-2",
    customerName: "yasin",
    firmName: "Yasin Traders",
    contactNumber: "+91 91234 56789",
    address: "78 Industrial Area, Delhi",
    email: "contact@yasintraders.com",
  },
  {
    id: "cust-3",
    customerName: "rahul enterprises",
    firmName: "Rahul Enterprises",
    contactNumber: "+91 99887 77665",
    address: "12 Business Park, Bengaluru, Karnataka",
    email: "contact@rahulent.com",
  },
  {
    id: "cust-4",
    customerName: "krishna agencies",
    firmName: "Krishna Agencies",
    contactNumber: "+91 90909 33445",
    address: "Plot 21, Old Market, Ahmedabad, Gujarat",
    email: "support@krishnaagencies.in",
  },
  {
    id: "cust-5",
    customerName: "shivam distributors",
    firmName: "Shivam Distributors",
    contactNumber: "+91 95123 88992",
    address: "Sector 5, Ring Road, Surat, Gujarat",
    email: "sales@shivamdist.com",
  },
  {
    id: "cust-6",
    customerName: "royal hardware",
    firmName: "Royal Hardware Mart",
    contactNumber: "+91 97222 55661",
    address: "Shop 12, Hardware Lane, Pune, Maharashtra",
    email: "info@royalhardware.in",
  },
  {
    id: "cust-7",
    customerName: "sapphire industries",
    firmName: "Sapphire Industries",
    contactNumber: "+91 88773 22119",
    address: "Phase 2, Industrial Estate, Chennai, Tamil Nadu",
    email: "contact@sapphireind.com",
  },
  {
    id: "cust-8",
    customerName: "ganesh suppliers",
    firmName: "Ganesh Suppliers",
    contactNumber: "+91 88990 33443",
    address: "Main Road, Jaipur, Rajasthan",
    email: "sales@ganeshsuppliers.in",
  },
  {
    id: "cust-9",
    customerName: "mehta & sons",
    firmName: "Mehta & Sons Pvt Ltd",
    contactNumber: "+91 93114 55880",
    address: "C.G. Road, Navrangpura, Ahmedabad",
    email: "info@mehtansons.com",
  },
  {
    id: "cust-10",
    customerName: "bharat steel",
    firmName: "Bharat Steel Traders",
    contactNumber: "+91 98190 66772",
    address: "Industrial Zone, Thane, Maharashtra",
    email: "support@bharatsteel.in",
  },
  {
    id: "cust-11",
    customerName: "omkar traders",
    firmName: "Omkar Traders",
    contactNumber: "+91 90555 22991",
    address: "Station Road, Rajkot, Gujarat",
    email: "omkar@traders.com",
  },
  {
    id: "cust-12",
    customerName: "elite sales",
    firmName: "Elite Sales Corporation",
    contactNumber: "+91 90988 11445",
    address: "IT Park Road, Chandigarh",
    email: "contact@elitesales.co.in",
  },
  {
    id: "cust-13",
    customerName: "vinayak products",
    firmName: "Vinayak Products",
    contactNumber: "+91 88770 12234",
    address: "Gandhi Nagar, Indore, Madhya Pradesh",
    email: "support@vinayakproducts.com",
  },
  {
    id: "cust-14",
    customerName: "modern electric",
    firmName: "Modern Electric House",
    contactNumber: "+91 98004 33321",
    address: "Ring Road, Lucknow, Uttar Pradesh",
    email: "sales@modernelectric.in",
  },
  {
    id: "cust-15",
    customerName: "universal mart",
    firmName: "Universal Mart Distributors",
    contactNumber: "+91 97234 88211",
    address: "City Center Mall, Nashik, Maharashtra",
    email: "info@universalmart.in",
  },
  {
    id: "cust-16",
    customerName: "prime enterprises",
    firmName: "Prime Enterprises",
    contactNumber: "+91 90912 55678",
    address: "Airport Road, Kochi, Kerala",
    email: "contact@primeentp.com",
  },
  {
    id: "cust-17",
    customerName: "apollo trading",
    firmName: "Apollo Trading Company",
    contactNumber: "+91 91222 77009",
    address: "Sector 18, Noida, Uttar Pradesh",
    email: "info@apollotrade.in",
  },
  {
    id: "cust-18",
    customerName: "global supplies",
    firmName: "Global Supplies Pvt Ltd",
    contactNumber: "+91 99805 44532",
    address: "MG Road, Bengaluru, Karnataka",
    email: "support@globalsupplies.com",
  },
  {
    id: "cust-19",
    customerName: "jain electricals",
    firmName: "Jain Electricals",
    contactNumber: "+91 97553 22110",
    address: "Main Market, Bhopal, MP",
    email: "sales@jainelectricals.in",
  },
  {
    id: "cust-20",
    customerName: "sunrise components",
    firmName: "Sunrise Components",
    contactNumber: "+91 88991 66770",
    address: "Electronics Lane, Hyderabad, Telangana",
    email: "info@sunrisecomponents.com",
  },
];

export const defaultSpecifications: SpecificationRow[] = [
  {
    id: "spec-1",
    key: "Product 1",
    value: "wr",
  },
];
