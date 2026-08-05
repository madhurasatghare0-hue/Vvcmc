// import { Trees } from 'lucide-react'

// export const gardens = [
//   {
//     icon: Trees,
//     name: 'Achole Garden', name_mr: 'आचोळे उद्यान',
//     description: 'A well-known municipal garden popular for morning walks and family visits.',
//     description_mr: 'सकाळच्या फेरफटक्यासाठी व कौटुंबिक भेटींसाठी लोकप्रिय असलेले प्रसिद्ध महानगरपालिका उद्यान.',
//   },
//   {
//     icon: Trees,
//     name: 'Ambadi Municipal Park', name_mr: 'अंबाडी महानगरपालिका उद्यान',
//     description: 'Features a children\'s play area and an open-air gym for adults and senior citizens.',
//     description_mr: 'मुलांसाठी खेळण्याची जागा व प्रौढ आणि ज्येष्ठ नागरिकांसाठी खुली व्यायामशाळा असलेले उद्यान.',
//   },
//   {
//     icon: Trees,
//     name: 'AmiPark Public Garden', name_mr: 'अमिपार्क सार्वजनिक उद्यान',
//     description: 'A community garden space offering greenery and a relaxed environment for residents.',
//     description_mr: 'रहिवाशांसाठी हिरवळ व शांत वातावरण देणारी सामुदायिक उद्यान जागा.',
//   },
//   {
//     icon: Trees,
//     name: 'Surya Garden', name_mr: 'सूर्य उद्यान',
//     description: 'A spacious park with seating, flower gardens, and play equipment for kids.',
//     description_mr: 'बैठक व्यवस्था, फुलांची बाग व मुलांसाठी खेळणी असलेले प्रशस्त उद्यान.',
//   },
//   {
//     icon: Trees,
//     name: 'Mahanagar Palika Garden', name_mr: 'महानगरपालिका उद्यान',
//     description: 'A municipally maintained public garden serving the local community.',
//     description_mr: 'स्थानिक समुदायाला सेवा देणारे महानगरपालिकेद्वारे राखलेले सार्वजनिक उद्यान.',
//   },
// ]










import { Trees } from 'lucide-react'

import acholeImg from '../assets/images/achole.jpg'
import ambadiImg from '../assets/images/ambadi.jpg'
// import amiparkImg from '../assets/images/amipark.jpg'
import suryaImg from '../assets/images/surya.jpg'
import mahanagarImg from '../assets/images/mahanagar.jpg'

export const gardens = [
  {
    icon: Trees,
    name: 'Achole Garden',
    name_mr: 'आचोळे उद्यान',
    description:
      'A well-known municipal garden popular for morning walks and family visits.',
    description_mr:
      'सकाळच्या फेरफटक्यासाठी व कौटुंबिक भेटींसाठी लोकप्रिय असलेले प्रसिद्ध महानगरपालिका उद्यान.',
    image: acholeImg,
    mapQuery: 'Achole Garden Virar',
  },
  {
    icon: Trees,
    name: 'Ambadi Municipal Park',
    name_mr: 'अंबाडी महानगरपालिका उद्यान',
    description:
      "Features a children's play area and an open-air gym for adults and senior citizens.",
    description_mr:
      'मुलांसाठी खेळण्याची जागा व प्रौढ आणि ज्येष्ठ नागरिकांसाठी खुली व्यायामशाळा असलेले उद्यान.',
    image: ambadiImg,
    mapQuery: 'Ambadi Municipal Park Vasai Virar',
  },
//   {
//     icon: Trees,
//     name: 'AmiPark Public Garden',
//     name_mr: 'अमिपार्क सार्वजनिक उद्यान',
//     description:
//       'A community garden space offering greenery and a relaxed environment for residents.',
//     description_mr:
//       'रहिवाशांसाठी हिरवळ व शांत वातावरण देणारी सामुदायिक उद्यान जागा.',
//     image: amiparkImg,
//     mapQuery: 'AmiPark Public Garden Vasai Virar',
//   },
  {
    icon: Trees,
    name: 'Surya Garden',
    name_mr: 'सूर्य उद्यान',
    description:
      'A spacious park with seating, flower gardens, and play equipment for kids.',
    description_mr:
      'बैठक व्यवस्था, फुलांची बाग व मुलांसाठी खेळणी असलेले प्रशस्त उद्यान.',
    image: suryaImg,
    mapQuery: 'Surya Garden Vasai Virar',
  },
  {
    icon: Trees,
    name: 'Mahanagar Palika Garden',
    name_mr: 'महानगरपालिका उद्यान',
    description:
      'A municipally maintained public garden serving the local community.',
    description_mr:
      'स्थानिक समुदायाला सेवा देणारे महानगरपालिकेद्वारे राखलेले सार्वजनिक उद्यान.',
    image: mahanagarImg,
    mapQuery: 'Mahanagar Palika Garden Vasai Virar',
  },
]