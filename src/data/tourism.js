// import { Landmark, Waves, Trees, Building2 } from 'lucide-react'
// import fort from '../assets/images/fort.jpg'
// import beach from '../assets/images/arnala.jpg'
// import temple from '../assets/images/jivdani.jpg'
// import creek from '../assets/images/creek.jpg'

// export const tourismCategories = [
//   { key: 'all', label: 'All', label_mr: 'सर्व' },
//   { key: 'forts', label: 'Forts', label_mr: 'किल्ले' },
//   { key: 'beaches', label: 'Beaches', label_mr: 'समुद्रकिनारे' },
//   { key: 'heritage', label: 'Heritage & Worship', label_mr: 'वारसा व पूजास्थळे' },
//   { key: 'parks', label: 'Parks', label_mr: 'उद्याने' },
// ]

// export const attractions = [
//   {
//     icon: Landmark,
//     name: 'Vasai Fort', name_mr: 'वसई किल्ला',
//     description: 'A 16th-century Portuguese fort overlooking the Arabian Sea, known for its historic ruins and church remains.',
//     description_mr: 'अरबी समुद्राकडे तोंड असलेला १६व्या शतकातील पोर्तुगीज किल्ला, ऐतिहासिक अवशेष व चर्चच्या भग्नावशेषांसाठी प्रसिद्ध.',
//     category: 'forts',
//     image: fort,
//   },
//   {
//     icon: Landmark,
//     name: 'Arnala Fort', name_mr: 'अर्नाळा किल्ला',
//     description: 'An island fort accessible by boat, built in 1516, offering scenic views and a glimpse into coastal history.',
//     description_mr: 'बोटीने पोहोचता येणारा बेट किल्ला, १५१६ मध्ये बांधलेला, निसर्गरम्य दृश्ये व किनारपट्टीच्या इतिहासाची झलक देतो.',
//     category: 'forts',
//     image: null, // no dedicated photo yet — falls back to icon placeholder
//   },
//   {
//     icon: Waves,
//     name: 'Rangaon Beach', name_mr: 'रांगाव समुद्रकिनारा',
//     description: 'A quiet, less-crowded beach popular for sunset views and casual weekend visits.',
//     description_mr: 'सूर्यास्ताच्या दृश्यांसाठी व सहज सप्ताहांत भेटींसाठी लोकप्रिय, शांत व कमी गर्दीचा समुद्रकिनारा.',
//     category: 'beaches',
//     image: null,
//   },
//   {
//     icon: Waves,
//     name: 'Arnala Beach', name_mr: 'अर्नाळा समुद्रकिनारा',
//     description: 'A popular getaway with golden sands, ideal for families and day trips.',
//     description_mr: 'सोनेरी वाळू असलेले लोकप्रिय पर्यटनस्थळ, कुटुंबे व दिवसाच्या सहलींसाठी योग्य.',
//     category: 'beaches',
//     image: beach,
//   },
//   {
//     icon: Landmark,
//     name: 'Jivdani Temple', name_mr: 'जीवदानी मंदिर',
//     description: 'A hilltop temple in Virar reached via ropeway or steps, a major pilgrimage destination.',
//     description_mr: 'विरारमधील टेकडीवरील मंदिर, रोपवे किंवा पायऱ्यांनी पोहोचता येते, प्रमुख तीर्थस्थळ.',
//     category: 'heritage',
//     image: temple,
//   },
//   {
//     icon: Trees,
//     name: 'Vasai Creek & Mangroves', name_mr: 'वसई खाडी व खारफुटी',
//     description: 'A scenic nature spot with mangrove walkways, popular for birdwatching and nature walks.',
//     description_mr: 'खारफुटीच्या पदपथांसह निसर्गरम्य ठिकाण, पक्षीनिरीक्षण व निसर्ग फेरीसाठी लोकप्रिय.',
//     category: 'parks',
//     image: creek,
//   },
//   {
//     icon: Building2,
//     name: 'Vasai Central Garden', name_mr: 'वसई सेंट्रल गार्डन',
//     description: 'A well-maintained public garden ideal for evening walks and family outings.',
//     description_mr: 'संध्याकाळच्या फेरफटक्यासाठी व कौटुंबिक सहलींसाठी योग्य, सुव्यवस्थित सार्वजनिक उद्यान.',
//     category: 'parks',
//     image: null,
//   },
// ]







import { Landmark, Waves, Trees, Building2 } from 'lucide-react'
import fort from '../assets/images/fort.jpg'
import beach from '../assets/images/arnala.jpg'
import temple from '../assets/images/jivdani.jpg'
import creek from '../assets/images/creek.jpg'

export const tourismCategories = [
  { key: 'all', label: 'All', label_mr: 'सर्व', icon: Landmark },
  { key: 'forts', label: 'Heritage', label_mr: 'वारसा', icon: Landmark },
  { key: 'beaches', label: 'Beaches', label_mr: 'समुद्रकिनारे', icon: Waves },
  { key: 'heritage', label: 'Spiritual', label_mr: 'अध्यात्मिक', icon: Building2 },
  { key: 'parks', label: 'Nature', label_mr: 'निसर्ग', icon: Trees },
]

export const attractions = [
  {
    icon: Landmark,
    name: 'Vasai Fort', name_mr: 'वसई किल्ला',
    description: 'Majestic Portuguese fort with centuries of history.',
    description_mr: 'शतकानुशतकांचा इतिहास असलेला भव्य पोर्तुगीज किल्ला.',
    category: 'forts', image: fort,
    badge: 'Heritage', badge_mr: 'वारसा',
    location: 'Vasai West', location_mr: 'वसई पश्चिम',
    duration: '2-3 Hours', entryFee: 'Free Entry', entryFee_mr: 'मोफत प्रवेश',
  },
  {
    icon: Waves,
    name: 'Arnala Beach', name_mr: 'अर्नाळा समुद्रकिनारा',
    description: 'Beautiful beach known for sunsets and calm waves.',
    description_mr: 'सूर्यास्त व शांत लाटांसाठी प्रसिद्ध सुंदर समुद्रकिनारा.',
    category: 'beaches', image: beach,
    badge: 'Beach', badge_mr: 'समुद्रकिनारा',
    location: 'Arnala', location_mr: 'अर्नाळा',
    duration: '2-3 Hours', entryFee: 'Free Entry', entryFee_mr: 'मोफत प्रवेश',
  },
  {
    icon: Landmark,
    name: 'Jivdani Temple', name_mr: 'जीवदानी मंदिर',
    description: 'Sacred temple atop a hill with stunning views.',
    description_mr: 'चित्तथरारक दृश्यांसह टेकडीवरील पवित्र मंदिर.',
    category: 'heritage', image: temple,
    badge: 'Spiritual', badge_mr: 'अध्यात्मिक',
    location: 'Virar East', location_mr: 'विरार पूर्व',
    duration: '1-2 Hours', entryFee: 'Free Entry', entryFee_mr: 'मोफत प्रवेश',
  },
  {
    icon: Trees,
    name: 'Vasai Creek', name_mr: 'वसई खाडी',
    description: 'Scenic creek perfect for boating and bird watching.',
    description_mr: 'बोटिंग व पक्षीनिरीक्षणासाठी योग्य निसर्गरम्य खाडी.',
    category: 'parks', image: creek,
    badge: 'Nature', badge_mr: 'निसर्ग',
    location: 'Vasai', location_mr: 'वसई',
    duration: '2-3 Hours', entryFee: 'Free Entry', entryFee_mr: 'मोफत प्रवेश',
  },
  {
    icon: Building2,
    name: 'St. Gonsalo Garcia Church', name_mr: 'सेंट गोन्सालो गार्सिया चर्च',
    description: 'Historical church built in the Portuguese era.',
    description_mr: 'पोर्तुगीज काळात बांधलेले ऐतिहासिक चर्च.',
    category: 'heritage', image: null,
    badge: 'Heritage', badge_mr: 'वारसा',
    location: 'Vasai West', location_mr: 'वसई पश्चिम',
    duration: '1 Hour', entryFee: 'Free Entry', entryFee_mr: 'मोफत प्रवेश',
  },
  {
    icon: Landmark,
    name: 'Arnala Fort', name_mr: 'अर्नाळा किल्ला',
    description: 'An island fort accessible by boat, built in 1516.',
    description_mr: 'बोटीने पोहोचता येणारा बेट किल्ला, १५१६ मध्ये बांधलेला.',
    category: 'forts', image: null,
    badge: 'Heritage', badge_mr: 'वारसा',
    location: 'Arnala', location_mr: 'अर्नाळा',
    duration: '2-3 Hours', entryFee: 'Free Entry', entryFee_mr: 'मोफत प्रवेश',
  },
  {
    icon: Building2,
    name: 'Vasai Central Garden', name_mr: 'वसई सेंट्रल गार्डन',
    description: 'A well-maintained public garden for evening walks.',
    description_mr: 'संध्याकाळच्या फेरफटक्यासाठी सुव्यवस्थित सार्वजनिक उद्यान.',
    category: 'parks', image: null,
    badge: 'Nature', badge_mr: 'निसर्ग',
    location: 'Vasai', location_mr: 'वसई',
    duration: '1-2 Hours', entryFee: 'Free Entry', entryFee_mr: 'मोफत प्रवेश',
  },
]

export const discoverCategories = [
  { key: 'heritage', label: 'Heritage', label_mr: 'वारसा', icon: Landmark },
  { key: 'beaches', label: 'Beaches', label_mr: 'समुद्रकिनारे', icon: Waves },
  { key: 'spiritual', label: 'Spiritual', label_mr: 'अध्यात्मिक', icon: Building2 },
  { key: 'nature', label: 'Nature', label_mr: 'निसर्ग', icon: Trees },
]