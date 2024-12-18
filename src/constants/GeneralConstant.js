export const userDetailsArray = [
  {
    profession: "UI/UX Designer",
    age: "23 Years",
    height: "5 Ft 5 In",
    religious: "Hindu, Nadar",
    maritalStatus: "Never Married",
    spokenLanguage: "Tamil, English",
    location: "Chennai, Tamilnadu, India",
    shortListed: false,
  },
  {
    profession: "Software Engineer",
    age: "27 Years",
    height: "5 Ft 8 In",
    religious: "Christian, Roman Catholic",
    maritalStatus: "Never Married",
    spokenLanguage: "English, Hindi",
    location: "Bangalore, Karnataka, India",
    shortListed: true,
  },
  {
    profession: "Doctor",
    age: "30 Years",
    height: "5 Ft 6 In",
    religious: "Muslim, Sunni",
    maritalStatus: "Divorced",
    spokenLanguage: "Urdu, English",
    location: "Hyderabad, Telangana, India",
    shortListed: false,
  },
  {
    profession: "Teacher",
    age: "26 Years",
    height: "5 Ft 3 In",
    religious: "Hindu, Brahmin",
    maritalStatus: "Never Married",
    spokenLanguage: "Marathi, Hindi",
    location: "Pune, Maharashtra, India",
    shortListed: true,
  },
  {
    profession: "Architect",
    age: "28 Years",
    height: "5 Ft 7 In",
    religious: "Sikh, Khatri",
    maritalStatus: "Never Married",
    spokenLanguage: "Punjabi, English",
    location: "Chandigarh, India",
    shortListed: true,
  },
  {
    profession: "Mechanical Engineer",
    age: "25 Years",
    height: "5 Ft 9 In",
    religious: "Hindu, Kshatriya",
    maritalStatus: "Never Married",
    spokenLanguage: "Tamil, Telugu",
    location: "Chennai, Tamilnadu, India",
    shortListed: true,
  },
  {
    profession: "Journalist",
    age: "32 Years",
    height: "5 Ft 4 In",
    religious: "Christian, Protestant",
    maritalStatus: "Widowed",
    spokenLanguage: "English, Malayalam",
    location: "Kochi, Kerala, India",
    shortListed: true,
  },
  {
    profession: "Banker",
    age: "29 Years",
    height: "5 Ft 5 In",
    religious: "Hindu, Vaishya",
    maritalStatus: "Never Married",
    spokenLanguage: "Gujarati, Hindi",
    location: "Ahmedabad, Gujarat, India",
    shortListed: false,
  },
  {
    profession: "Chef",
    age: "27 Years",
    height: "5 Ft 6 In",
    religious: "Hindu, Maratha",
    maritalStatus: "Never Married",
    spokenLanguage: "Marathi, English",
    location: "Mumbai, Maharashtra, India",
  },
  {
    profession: "Civil Engineer",
    age: "26 Years",
    height: "5 Ft 8 In",
    religious: "Muslim, Shia",
    maritalStatus: "Never Married",
    spokenLanguage: "Hindi, Urdu",
    location: "Lucknow, Uttar Pradesh, India",
  },
  {
    profession: "Pharmacist",
    age: "31 Years",
    height: "5 Ft 6 In",
    religious: "Hindu, Nair",
    maritalStatus: "Never Married",
    spokenLanguage: "Malayalam, English",
    location: "Thiruvananthapuram, Kerala, India",
  },
  {
    profession: "Data Scientist",
    age: "28 Years",
    height: "5 Ft 9 In",
    religious: "Hindu, Gupta",
    maritalStatus: "Never Married",
    spokenLanguage: "Hindi, English",
    location: "Delhi, India",
  },
  {
    profession: "Graphic Designer",
    age: "24 Years",
    height: "5 Ft 4 In",
    religious: "Christian, Syro Malabar",
    maritalStatus: "Never Married",
    spokenLanguage: "English, Tamil",
    location: "Coimbatore, Tamilnadu, India",
  },
  {
    profession: "Lawyer",
    age: "29 Years",
    height: "5 Ft 8 In",
    religious: "Hindu, Kayastha",
    maritalStatus: "Never Married",
    spokenLanguage: "Hindi, English",
    location: "Patna, Bihar, India",
  },
  {
    profession: "Nurse",
    age: "26 Years",
    height: "5 Ft 3 In",
    religious: "Christian, Jacobite",
    maritalStatus: "Never Married",
    spokenLanguage: "Malayalam, English",
    location: "Kottayam, Kerala, India",
  },
  {
    profession: "Scientist",
    age: "34 Years",
    height: "5 Ft 7 In",
    religious: "Hindu, Iyer",
    maritalStatus: "Divorced",
    spokenLanguage: "Tamil, Hindi",
    location: "Bangalore, Karnataka, India",
  },
  {
    profession: "Marketing Manager",
    age: "28 Years",
    height: "5 Ft 6 In",
    religious: "Hindu, Reddy",
    maritalStatus: "Never Married",
    spokenLanguage: "Telugu, English",
    location: "Hyderabad, Telangana, India",
  },
  {
    profession: "Software Developer",
    age: "25 Years",
    height: "5 Ft 10 In",
    religious: "Hindu, Jat",
    maritalStatus: "Never Married",
    spokenLanguage: "Punjabi, Hindi",
    location: "Delhi, India",
  },
  {
    profession: "Accountant",
    age: "30 Years",
    height: "5 Ft 5 In",
    religious: "Hindu, Agarwal",
    maritalStatus: "Never Married",
    spokenLanguage: "Hindi, English",
    location: "Jaipur, Rajasthan, India",
  },
  {
    profession: "Artist",
    age: "27 Years",
    height: "5 Ft 6 In",
    religious: "Hindu, Baniya",
    maritalStatus: "Never Married",
    spokenLanguage: "Hindi, English",
    location: "Lucknow, Uttar Pradesh, India",
  },
];

// Vendors Details

export const vendorsDetails = [
  {
    service: "mehndi-artist",
    name: "Rithikas Mehandi Art",
    location: "Adyar, Chennai",
    vendorId: "CH24394378439",
    tag: "popular",
    rating: 4.5,
    startingPrice: 5000,
    packageName :"For Bride's full mehndi",
  },
  {
    service: "mehndi-artist",
    name: "Saras Mehandi Designs",
    location: "Kolkata, West Bengal",
    vendorId: "KL28374659123",
    rating: 4.6,
    startingPrice: 4500,
    package: {
      ClassicBridal: 4500,
      elegantBridal: 5500,
      starBridal: 6500,
      royalBridal: 9000,
      custom: 11000,
    }
  },
  {
    service: "mehndi-artist",
    name: "Neha Mehandi Studio",
    location: "Juhu, Mumbai",
    vendorId: "MM49385726108",
    tag: "popular",
    rating: 4.7,
    startingPrice: 4800,
    package: {
      ClassicBridal: 4800,
      elegantBridal: 5800,
      starBridal: 6800,
      royalBridal: 9500,
      custom: 11500,
    }
  },
  {
    service: "mehndi-artist",
    name: "Amit Mehndi Arts",
    location: "Vasanth Nagar, Bangalore",
    vendorId: "BN67483920581",
    tag: "premium",
    rating: 4.4,
    startingPrice: 4700,
    package: {
      ClassicBridal: 4700,
      elegantBridal: 5700,
      starBridal: 6700,
      royalBridal: 9400,
      custom: 11400,
    }
  },
  {
    service: "mehndi-artist",
    name: "Priya Mehandi Artists",
    location: "Anna Nagar, Chennai",
    vendorId: "CH23984716549",
    tag: "preferred",
    rating: 4.5,
    startingPrice: 5200,
    package: {
      ClassicBridal: 5200,
      elegantBridal: 6200,
      starBridal: 7200,
      royalBridal: 10200,
      custom: 12200,
    }
  },
  {
    service: "mehndi-artist",
    name: "Priya Mehandi Artists",
    location: "Anna Nagar, Chennai",
    vendorId: "CH23984716549",
    rating: 4.5,
    startingPrice: 5200,
    package: {
      ClassicBridal: 5200,
      elegantBridal: 6200,
      starBridal: 7200,
      royalBridal: 10200,
      custom: 12200,
    }
  },
  {
    service: "mehndi-artist",
    name: "Rithika's Mehandi Art",
    location: "Adyar, Chennai",
    vendorId: "CH56473829104",
    tag: "premium",
    rating: 4.5,
    startingPrice: 5000,
    package: {
      ClassicBridal: 5000,
      elegantBridal: 6000,
      starBridal: 7000,
      royalBridal: 10000,
      custom: 12000,
    }
  },
  {
    service: "mehndi-artist",
    name: "Saras Mehandi Designs",
    location: "Kolkata, West Bengal",
    vendorId: "WB28374659123",
    tag: "popular",
    rating: 4.6,
    startingPrice: 4500,
    package: {
      ClassicBridal: 4500,
      elegantBridal: 5500,
      starBridal: 6500,
      royalBridal: 9000,
      custom: 11000,
    }
  },
  {
    service: "mehndi-artist",
    name: "Neha Mehandi Studio",
    location: "Juhu, Mumbai",
    vendorId: "MM49385726108",
    tag: "preferred",
    rating: 4.7,
    startingPrice: 4800,
    package: {
      ClassicBridal: 4800,
      elegantBridal: 5800,
      starBridal: 6800,
      royalBridal: 9500,
      custom: 11500,
    }
  },
  {
    service: "mehndi-artist",
    name: "Amit Mehndi Arts",
    location: "Vasanth Nagar, Bangalore",
    vendorId: "BN67483920581",
    tag: "premium",
    rating: 4.4,
    startingPrice: 4700,
    package: {
      ClassicBridal: 4700,
      elegantBridal: 5700,
      starBridal: 6700,
      royalBridal: 9400,
      custom: 11400,
    }
  },
  {
    service: "mehndi-artist",
    name: "Jaya Mehandi Experts",
    location: "MG Road, Delhi",
    vendorId: "DL48392057463",
    tag: "popular",
    rating: 4.8,
    startingPrice: 5100,
    package: {
      ClassicBridal: 5100,
      elegantBridal: 6100,
      starBridal: 7100,
      royalBridal: 9900,
      custom: 11900,
    }
  },
  {
    service: "mehndi-artist",
    name: "Radhika's Mehandi Creations",
    location: "Salt Lake, Kolkata",
    vendorId: "KL57239485761",
    rating: 4.3,
    startingPrice: 4600,
    package: {
      ClassicBridal: 4600,
      elegantBridal: 5600,
      starBridal: 6600,
      royalBridal: 9100,
      custom: 11300,
    }
  },
  {
    service: "mehndi-artist",
    name: "Lovely Mehandi Art",
    location: "Brigade Road, Bangalore",
    vendorId: "BN98324756192",
    tag: "premium",
    rating: 4.9,
    startingPrice: 5300,
    package: {
      ClassicBridal: 5300,
      elegantBridal: 6300,
      starBridal: 7300,
      royalBridal: 10300,
      custom: 12300,
    }
  },
  {
    service: "mehndi-artist",
    name: "Zara's Mehandi Zone",
    location: "Connaught Place, Delhi",
    vendorId: "DL29384751602",
    tag: "popular",
    rating: 4.5,
    startingPrice: 4900,
    package: {
      ClassicBridal: 4900,
      elegantBridal: 5900,
      starBridal: 6900,
      royalBridal: 9700,
      custom: 11700,
    }
  },
  {
    service: "mehndi-artist",
    name: "Simran's Mehandi Magic",
    location: "Bandra, Mumbai",
    vendorId: "MM19385726451",
    tag: "premium",
    rating: 4.6,
    startingPrice: 5200,
    package: {
      ClassicBridal: 5200,
      elegantBridal: 6200,
      starBridal: 7200,
      royalBridal: 10200,
      custom: 12200,
    }
  },
  {
    service: "mehndi-artist",
    name: "Rithikas Mehandi Art",
    location: "Adyar, Chennai",
    vendorId: "CH24394378439",
    tag: "popular",
    rating: 4.5,
    startingPrice: 5000,
    package: {
      ClassicBridal: 5000,
      elegantBridal: 6000,
      starBridal: 7000,
      royalBridal: 10000,
      custom: 12000,
    }
  },
  {
    service: "mehndi-artist",
    name: "Saras Mehandi Designs",
    location: "Kolkata, West Bengal",
    vendorId: "KL28374659123",
    rating: 4.6,
    startingPrice: 4500,
    package: {
      ClassicBridal: 4500,
      elegantBridal: 5500,
      starBridal: 6500,
      royalBridal: 9000,
      custom: 11000,
    }
  },
  {
    service: "mehndi-artist",
    name: "Neha Mehandi Studio",
    location: "Juhu, Mumbai",
    vendorId: "MM49385726108",
    tag: "popular",
    rating: 4.7,
    startingPrice: 4800,
    package: {
      ClassicBridal: 4800,
      elegantBridal: 5800,
      starBridal: 6800,
      royalBridal: 9500,
      custom: 11500,
    }
  },
  {
    service: "mehndi-artist",
    name: "Amit Mehndi Arts",
    location: "Vasanth Nagar, Bangalore",
    vendorId: "BN67483920581",
    tag: "premium",
    rating: 4.4,
    startingPrice: 4700,
    package: {
      ClassicBridal: 4700,
      elegantBridal: 5700,
      starBridal: 6700,
      royalBridal: 9400,
      custom: 11400,
    }
  },
  {
    service: "mehndi-artist",
    name: "Priya Mehandi Artists",
    location: "Anna Nagar, Chennai",
    vendorId: "CH23984716549",
    tag: "preferred",
    rating: 4.5,
    startingPrice: 5200,
    package: {
      ClassicBridal: 5200,
      elegantBridal: 6200,
      starBridal: 7200,
      royalBridal: 10200,
      custom: 12200,
    }
  },
  {
    service: "mehndi-artist",
    name: "Priya Mehandi Artists",
    location: "Anna Nagar, Chennai",
    vendorId: "CH23984716549",
    rating: 4.5,
    startingPrice: 5200,
    package: {
      ClassicBridal: 5200,
      elegantBridal: 6200,
      starBridal: 7200,
      royalBridal: 10200,
      custom: 12200,
    }
  },
  {
    service: "mehndi-artist",
    name: "Rithika's Mehandi Art",
    location: "Adyar, Chennai",
    vendorId: "CH56473829104",
    tag: "premium",
    rating: 4.5,
    startingPrice: 5000,
    package: {
      ClassicBridal: 5000,
      elegantBridal: 6000,
      starBridal: 7000,
      royalBridal: 10000,
      custom: 12000,
    }
  },
  {
    service: "mehndi-artist",
    name: "Saras Mehandi Designs",
    location: "Kolkata, West Bengal",
    vendorId: "WB28374659123",
    tag: "popular",
    rating: 4.6,
    startingPrice: 4500,
    package: {
      ClassicBridal: 4500,
      elegantBridal: 5500,
      starBridal: 6500,
      royalBridal: 9000,
      custom: 11000,
    }
  },
  {
    service: "mehndi-artist",
    name: "Neha Mehandi Studio",
    location: "Juhu, Mumbai",
    vendorId: "MM49385726108",
    tag: "preferred",
    rating: 4.7,
    startingPrice: 4800,
    package: {
      ClassicBridal: 4800,
      elegantBridal: 5800,
      starBridal: 6800,
      royalBridal: 9500,
      custom: 11500,
    }
  },
  {
    service: "mehndi-artist",
    name: "Amit Mehndi Arts",
    location: "Vasanth Nagar, Bangalore",
    vendorId: "BN67483920581",
    tag: "premium",
    rating: 4.4,
    startingPrice: 4700,
    package: {
      ClassicBridal: 4700,
      elegantBridal: 5700,
      starBridal: 6700,
      royalBridal: 9400,
      custom: 11400,
    }
  },
  {
    service: "mehndi-artist",
    name: "Jaya Mehandi Experts",
    location: "MG Road, Delhi",
    vendorId: "DL48392057463",
    tag: "popular",
    rating: 4.8,
    startingPrice: 5100,
    package: {
      ClassicBridal: 5100,
      elegantBridal: 6100,
      starBridal: 7100,
      royalBridal: 9900,
      custom: 11900,
    }
  },
  {
    service: "mehndi-artist",
    name: "Radhika's Mehandi Creations",
    location: "Salt Lake, Kolkata",
    vendorId: "KL57239485761",
    rating: 4.3,
    startingPrice: 4600,
    package: {
      ClassicBridal: 4600,
      elegantBridal: 5600,
      starBridal: 6600,
      royalBridal: 9100,
      custom: 11300,
    }
  },
  {
    service: "mehndi-artist",
    name: "Lovely Mehandi Art",
    location: "Brigade Road, Bangalore",
    vendorId: "BN98324756192",
    tag: "premium",
    rating: 4.9,
    startingPrice: 5300,
    package: {
      ClassicBridal: 5300,
      elegantBridal: 6300,
      starBridal: 7300,
      royalBridal: 10300,
      custom: 12300,
    }
  },
  {
    service: "mehndi-artist",
    name: "Zara's Mehandi Zone",
    location: "Connaught Place, Delhi",
    vendorId: "DL29384751602",
    tag: "popular",
    rating: 4.5,
    startingPrice: 4900,
    package: {
      ClassicBridal: 4900,
      elegantBridal: 5900,
      starBridal: 6900,
      royalBridal: 9700,
      custom: 11700,
    }
  },
  {
    service: "mehndi-artist",
    name: "Simran's Mehandi Magic",
    location: "Bandra, Mumbai",
    vendorId: "MM19385726451",
    tag: "premium",
    rating: 4.6,
    startingPrice: 5200,
    package: {
      ClassicBridal: 5200,
      elegantBridal: 6200,
      starBridal: 7200,
      royalBridal: 10200,
      custom: 12200,
    }
  },
  {
    service: "mehndi-artist",
    name: "Rithikas Mehandi Art",
    location: "Adyar, Chennai",
    vendorId: "CH24394378439",
    tag: "popular",
    rating: 4.5,
    startingPrice: 5000,
    package: {
      ClassicBridal: 5000,
      elegantBridal: 6000,
      starBridal: 7000,
      royalBridal: 10000,
      custom: 12000,
    }
  },
  {
    service: "mehndi-artist",
    name: "Saras Mehandi Designs",
    location: "Kolkata, West Bengal",
    vendorId: "KL28374659123",
    rating: 4.6,
    startingPrice: 4500,
    package: {
      ClassicBridal: 4500,
      elegantBridal: 5500,
      starBridal: 6500,
      royalBridal: 9000,
      custom: 11000,
    }
  },
  {
    service: "mehndi-artist",
    name: "Neha Mehandi Studio",
    location: "Juhu, Mumbai",
    vendorId: "MM49385726108",
    tag: "popular",
    rating: 4.7,
    startingPrice: 4800,
    package: {
      ClassicBridal: 4800,
      elegantBridal: 5800,
      starBridal: 6800,
      royalBridal: 9500,
      custom: 11500,
    }
  },
  {
    service: "mehndi-artist",
    name: "Amit Mehndi Arts",
    location: "Vasanth Nagar, Bangalore",
    vendorId: "BN67483920581",
    tag: "premium",
    rating: 4.4,
    startingPrice: 4700,
    package: {
      ClassicBridal: 4700,
      elegantBridal: 5700,
      starBridal: 6700,
      royalBridal: 9400,
      custom: 11400,
    }
  },
  {
    service: "mehndi-artist",
    name: "Priya Mehandi Artists",
    location: "Anna Nagar, Chennai",
    vendorId: "CH23984716549",
    tag: "preferred",
    rating: 4.5,
    startingPrice: 5200,
    package: {
      ClassicBridal: 5200,
      elegantBridal: 6200,
      starBridal: 7200,
      royalBridal: 10200,
      custom: 12200,
    }
  },
  {
    service: "mehndi-artist",
    name: "Priya Mehandi Artists",
    location: "Anna Nagar, Chennai",
    vendorId: "CH23984716549",
    rating: 4.5,
    startingPrice: 5200,
    package: {
      ClassicBridal: 5200,
      elegantBridal: 6200,
      starBridal: 7200,
      royalBridal: 10200,
      custom: 12200,
    }
  },
  {
    service: "mehndi-artist",
    name: "Rithika's Mehandi Art",
    location: "Adyar, Chennai",
    vendorId: "CH56473829104",
    tag: "premium",
    rating: 4.5,
    startingPrice: 5000,
    package: {
      ClassicBridal: 5000,
      elegantBridal: 6000,
      starBridal: 7000,
      royalBridal: 10000,
      custom: 12000,
    }
  },
  {
    service: "mehndi-artist",
    name: "Saras Mehandi Designs",
    location: "Kolkata, West Bengal",
    vendorId: "WB28374659123",
    tag: "popular",
    rating: 4.6,
    startingPrice: 4500,
    package: {
      ClassicBridal: 4500,
      elegantBridal: 5500,
      starBridal: 6500,
      royalBridal: 9000,
      custom: 11000,
    }
  },
  {
    service: "mehndi-artist",
    name: "Neha Mehandi Studio",
    location: "Juhu, Mumbai",
    vendorId: "MM49385726108",
    tag: "preferred",
    rating: 4.7,
    startingPrice: 4800,
    package: {
      ClassicBridal: 4800,
      elegantBridal: 5800,
      starBridal: 6800,
      royalBridal: 9500,
      custom: 11500,
    }
  },
  {
    service: "mehndi-artist",
    name: "Amit Mehndi Arts",
    location: "Vasanth Nagar, Bangalore",
    vendorId: "BN67483920581",
    tag: "premium",
    rating: 4.4,
    startingPrice: 4700,
    package: {
      ClassicBridal: 4700,
      elegantBridal: 5700,
      starBridal: 6700,
      royalBridal: 9400,
      custom: 11400,
    }
  },
  {
    service: "mehndi-artist",
    name: "Jaya Mehandi Experts",
    location: "MG Road, Delhi",
    vendorId: "DL48392057463",
    tag: "popular",
    rating: 4.8,
    startingPrice: 5100,
    package: {
      ClassicBridal: 5100,
      elegantBridal: 6100,
      starBridal: 7100,
      royalBridal: 9900,
      custom: 11900,
    }
  },
  {
    service: "mehndi-artist",
    name: "Radhika's Mehandi Creations",
    location: "Salt Lake, Kolkata",
    vendorId: "KL57239485761",
    rating: 4.3,
    startingPrice: 4600,
    package: {
      ClassicBridal: 4600,
      elegantBridal: 5600,
      starBridal: 6600,
      royalBridal: 9100,
      custom: 11300,
    }
  },
  {
    service: "mehndi-artist",
    name: "Lovely Mehandi Art",
    location: "Brigade Road, Bangalore",
    vendorId: "BN98324756192",
    tag: "premium",
    rating: 4.9,
    startingPrice: 5300,
    package: {
      ClassicBridal: 5300,
      elegantBridal: 6300,
      starBridal: 7300,
      royalBridal: 10300,
      custom: 12300,
    }
  },
  {
    service: "mehndi-artist",
    name: "Zara's Mehandi Zone",
    location: "Connaught Place, Delhi",
    vendorId: "DL29384751602",
    tag: "popular",
    rating: 4.5,
    startingPrice: 4900,
    package: {
      ClassicBridal: 4900,
      elegantBridal: 5900,
      starBridal: 6900,
      royalBridal: 9700,
      custom: 11700,
    }
  },
  {
    service: "mehndi-artist",
    name: "Simran's Mehandi Magic",
    location: "Bandra, Mumbai",
    vendorId: "MM19385726451",
    tag: "premium",
    rating: 4.6,
    startingPrice: 5200,
    package: {
      ClassicBridal: 5200,
      elegantBridal: 6200,
      starBridal: 7200,
      royalBridal: 10200,
      custom: 12200,
    }
  },
  {
    service: "mehndi-artist",
    name: "Rithikas Mehandi Art",
    location: "Adyar, Chennai",
    vendorId: "CH24394378439",
    tag: "popular",
    rating: 4.5,
    startingPrice: 5000,
    package: {
      ClassicBridal: 5000,
      elegantBridal: 6000,
      starBridal: 7000,
      royalBridal: 10000,
      custom: 12000,
    }
  },
  {
    service: "mehndi-artist",
    name: "Saras Mehandi Designs",
    location: "Kolkata, West Bengal",
    vendorId: "KL28374659123",
    rating: 4.6,
    startingPrice: 4500,
    package: {
      ClassicBridal: 4500,
      elegantBridal: 5500,
      starBridal: 6500,
      royalBridal: 9000,
      custom: 11000,
    }
  },
  {
    service: "mehndi-artist",
    name: "Neha Mehandi Studio",
    location: "Juhu, Mumbai",
    vendorId: "MM49385726108",
    tag: "popular",
    rating: 4.7,
    startingPrice: 4800,
    package: {
      ClassicBridal: 4800,
      elegantBridal: 5800,
      starBridal: 6800,
      royalBridal: 9500,
      custom: 11500,
    }
  },
  {
    service: "mehndi-artist",
    name: "Amit Mehndi Arts",
    location: "Vasanth Nagar, Bangalore",
    vendorId: "BN67483920581",
    tag: "premium",
    rating: 4.4,
    startingPrice: 4700,
    package: {
      ClassicBridal: 4700,
      elegantBridal: 5700,
      starBridal: 6700,
      royalBridal: 9400,
      custom: 11400,
    }
  },
  {
    service: "mehndi-artist",
    name: "Priya Mehandi Artists",
    location: "Anna Nagar, Chennai",
    vendorId: "CH23984716549",
    tag: "preferred",
    rating: 4.5,
    startingPrice: 5200,
    package: {
      ClassicBridal: 5200,
      elegantBridal: 6200,
      starBridal: 7200,
      royalBridal: 10200,
      custom: 12200,
    }
  },
  {
    service: "mehndi-artist",
    name: "Priya Mehandi Artists",
    location: "Anna Nagar, Chennai",
    vendorId: "CH23984716549",
    rating: 4.5,
    startingPrice: 5200,
    package: {
      ClassicBridal: 5200,
      elegantBridal: 6200,
      starBridal: 7200,
      royalBridal: 10200,
      custom: 12200,
    }
  },
  {
    service: "mehndi-artist",
    name: "Rithika's Mehandi Art",
    location: "Adyar, Chennai",
    vendorId: "CH56473829104",
    tag: "premium",
    rating: 4.5,
    startingPrice: 5000,
    package: {
      ClassicBridal: 5000,
      elegantBridal: 6000,
      starBridal: 7000,
      royalBridal: 10000,
      custom: 12000,
    }
  },
  {
    service: "mehndi-artist",
    name: "Saras Mehandi Designs",
    location: "Kolkata, West Bengal",
    vendorId: "WB28374659123",
    tag: "popular",
    rating: 4.6,
    startingPrice: 4500,
    package: {
      ClassicBridal: 4500,
      elegantBridal: 5500,
      starBridal: 6500,
      royalBridal: 9000,
      custom: 11000,
    }
  },
  {
    service: "mehndi-artist",
    name: "Neha Mehandi Studio",
    location: "Juhu, Mumbai",
    vendorId: "MM49385726108",
    tag: "preferred",
    rating: 4.7,
    startingPrice: 4800,
    package: {
      ClassicBridal: 4800,
      elegantBridal: 5800,
      starBridal: 6800,
      royalBridal: 9500,
      custom: 11500,
    }
  },
  {
    service: "mehndi-artist",
    name: "Amit Mehndi Arts",
    location: "Vasanth Nagar, Bangalore",
    vendorId: "BN67483920581",
    tag: "premium",
    rating: 4.4,
    startingPrice: 4700,
    package: {
      ClassicBridal: 4700,
      elegantBridal: 5700,
      starBridal: 6700,
      royalBridal: 9400,
      custom: 11400,
    }
  },
  {
    service: "mehndi-artist",
    name: "Jaya Mehandi Experts",
    location: "MG Road, Delhi",
    vendorId: "DL48392057463",
    tag: "popular",
    rating: 4.8,
    startingPrice: 5100,
    package: {
      ClassicBridal: 5100,
      elegantBridal: 6100,
      starBridal: 7100,
      royalBridal: 9900,
      custom: 11900,
    }
  },
  {
    service: "mehndi-artist",
    name: "Radhika's Mehandi Creations",
    location: "Salt Lake, Kolkata",
    vendorId: "KL57239485761",
    rating: 4.3,
    startingPrice: 4600,
    package: {
      ClassicBridal: 4600,
      elegantBridal: 5600,
      starBridal: 6600,
      royalBridal: 9100,
      custom: 11300,
    }
  },
  {
    service: "mehndi-artist",
    name: "Lovely Mehandi Art",
    location: "Brigade Road, Bangalore",
    vendorId: "BN98324756192",
    tag: "premium",
    rating: 4.9,
    startingPrice: 5300,
    package: {
      ClassicBridal: 5300,
      elegantBridal: 6300,
      starBridal: 7300,
      royalBridal: 10300,
      custom: 12300,
    }
  },
  {
    service: "mehndi-artist",
    name: "Zara's Mehandi Zone",
    location: "Connaught Place, Delhi",
    vendorId: "DL29384751602",
    tag: "popular",
    rating: 4.5,
    startingPrice: 4900,
    package: {
      ClassicBridal: 4900,
      elegantBridal: 5900,
      starBridal: 6900,
      royalBridal: 9700,
      custom: 11700,
    }
  },
  {
    service: "mehndi-artist",
    name: "Simran's Mehandi Magic",
    location: "Bandra, Mumbai",
    vendorId: "MM19385726451",
    tag: "premium",
    rating: 4.6,
    startingPrice: 5200,
    package: {
      ClassicBridal: 5200,
      elegantBridal: 6200,
      starBridal: 7200,
      royalBridal: 10200,
      custom: 12200,
    }
  },
];

