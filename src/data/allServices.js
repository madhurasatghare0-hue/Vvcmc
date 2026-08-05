import {
  Home, Droplet, Baby, Heart, Skull, Building2, Briefcase, Megaphone,
  CreditCard, ClipboardCheck, FileText, Store, Trash2, TreePine, Siren, Compass,
} from 'lucide-react'

export const serviceCategories = [
  { key: 'all', label: 'All', label_mr: 'सर्व' },
  { key: 'citizen', label: 'Citizen Services', label_mr: 'नागरी सेवा' },
  { key: 'business', label: 'Business Services', label_mr: 'व्यवसाय सेवा' },
  { key: 'health', label: 'Health & Safety', label_mr: 'आरोग्य व सुरक्षा' },
  { key: 'environment', label: 'Environment', label_mr: 'पर्यावरण' },
]

// actionType: 'pay' (goes to payment form), 'apply' (goes to application form), 'info' (no transaction, just details)
export const allServices = [
  { slug: 'property-tax', icon: Home, title: 'Property Tax', title_mr: 'मालमत्ता कर', description: 'View dues and pay your property tax online', description_mr: 'तुमची थकबाकी पहा आणि मालमत्ता कर ऑनलाइन भरा', category: 'Citizen Services', actionType: 'pay' },
  { slug: 'water-tax', icon: Droplet, title: 'Water Tax', title_mr: 'पाणी कर', description: 'Pay water bills and manage connections', description_mr: 'पाणी बिल भरा आणि जोडणी व्यवस्थापित करा', category: 'Citizen Services', actionType: 'pay' },
  { slug: 'birth-certificate', icon: Baby, title: 'Birth Certificate', title_mr: 'जन्म दाखला', description: 'Apply for or download a birth certificate', description_mr: 'जन्म दाखल्यासाठी अर्ज करा किंवा डाउनलोड करा', category: 'Citizen Services', actionType: 'apply' },
  { slug: 'marriage-certificate', icon: Heart, title: 'Marriage Certificate', title_mr: 'विवाह प्रमाणपत्र', description: 'Register your marriage online', description_mr: 'तुमचा विवाह ऑनलाइन नोंदणी करा', category: 'Citizen Services', actionType: 'apply' },
  { slug: 'death-certificate', icon: Skull, title: 'Death Certificate', title_mr: 'मृत्यू दाखला', description: 'Apply for or download a death certificate', description_mr: 'मृत्यू दाखल्यासाठी अर्ज करा किंवा डाउनलोड करा', category: 'Citizen Services', actionType: 'apply' },
  { slug: 'building-permission', icon: Building2, title: 'Building Permission', title_mr: 'बांधकाम परवानगी', description: 'Apply for construction & renovation permits', description_mr: 'बांधकाम व नूतनीकरण परवानगीसाठी अर्ज करा', category: 'Business Services', actionType: 'apply' },
  { slug: 'trade-license', icon: Briefcase, title: 'Trade License', title_mr: 'व्यापार परवाना', description: 'Register or renew a business trade license', description_mr: 'व्यवसाय परवाना नोंदणी किंवा नूतनीकरण करा', category: 'Business Services', actionType: 'apply' },
  { slug: 'shop-establishment', icon: Store, title: 'Shop Establishment', title_mr: 'दुकान नोंदणी', description: 'Register your shop or establishment', description_mr: 'तुमचे दुकान किंवा आस्थापना नोंदणी करा', category: 'Business Services', actionType: 'apply' },
  { slug: 'complaint-registration', icon: Megaphone, title: 'Complaint Registration', title_mr: 'तक्रार नोंदणी', description: 'Report civic issues in your ward', description_mr: 'तुमच्या प्रभागातील नागरी समस्या नोंदवा', category: 'Health & Safety', actionType: 'apply' },
  { slug: 'emergency-services', icon: Siren, title: 'Emergency Services', title_mr: 'आणीबाणी सेवा', description: 'Quick access to police, fire & ambulance', description_mr: 'पोलीस, अग्निशमन व रुग्णवाहिकेसाठी जलद प्रवेश', category: 'Health & Safety', actionType: 'info' },
  { slug: 'garbage-collection', icon: Trash2, title: 'Garbage Collection', title_mr: 'कचरा संकलन', description: 'Check schedules and request pickups', description_mr: 'वेळापत्रक तपासा आणि संकलनाची विनंती करा', category: 'Environment', actionType: 'apply' },
  { slug: 'tree-plantation', icon: TreePine, title: 'Tree Plantation', title_mr: 'वृक्षारोपण', description: 'Apply for permits or join plantation drives', description_mr: 'परवानगीसाठी अर्ज करा किंवा वृक्षारोपण मोहिमेत सहभागी व्हा', category: 'Environment', actionType: 'apply' },
  { slug: 'online-payments', icon: CreditCard, title: 'Online Payments', title_mr: 'ऑनलाइन पैसे भरा', description: 'Pay all municipal dues in one place', description_mr: 'सर्व महानगरपालिका देयके एकाच ठिकाणी भरा', category: 'Citizen Services', actionType: 'pay' },
  { slug: 'track-application', icon: ClipboardCheck, title: 'Track Application', title_mr: 'अर्जाचा मागोवा', description: 'Check status of any submitted application', description_mr: 'सादर केलेल्या कोणत्याही अर्जाची स्थिती तपासा', category: 'Citizen Services', actionType: 'info' },
  { slug: 'download-center', icon: FileText, title: 'Download Center', title_mr: 'डाउनलोड केंद्र', description: 'Forms, certificates & official documents', description_mr: 'फॉर्म, प्रमाणपत्रे व अधिकृत कागदपत्रे', category: 'Citizen Services', actionType: 'info' },
  { slug: 'tourism-info', icon: Compass, title: 'Tourism Info', title_mr: 'पर्यटन माहिती', description: 'Explore forts, beaches & heritage sites', description_mr: 'किल्ले, समुद्रकिनारे व वारसा स्थळे पहा', category: 'Health & Safety', actionType: 'info' },
]