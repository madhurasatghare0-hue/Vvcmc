import { AlertTriangle, Trash2 } from 'lucide-react'

export const alerts = [
  {
    icon: AlertTriangle,
    title: 'Heavy Rainfall Alert',
    title_mr: 'मुसळधार पावसाचा इशारा',
    description: 'Yellow alert in effect for Vasai Virar',
    description_mr: 'वसई विरारसाठी पिवळा इशारा लागू',
    date: 'May 20, 2024',
    theme: 'red',
  },
  {
    icon: AlertTriangle,
    title: 'Water Supply Interruption',
    title_mr: 'पाणीपुरवठा खंडित',
    description: 'In Virar West on 25th May from 10AM to 4PM',
    description_mr: '२५ मे रोजी विरार पश्चिम येथे सकाळी १० ते सायं. ४ वाजेपर्यंत',
    date: 'May 19, 2024',
    theme: 'amber',
  },
  {
    icon: Trash2,
    title: 'Garbage Collection Update',
    title_mr: 'कचरा संकलन वेळापत्रकात बदल',
    description: 'Schedule changed in several areas',
    description_mr: 'अनेक भागांत वेळापत्रक बदलण्यात आले आहे',
    date: 'May 18, 2024',
    theme: 'green',
  },
]