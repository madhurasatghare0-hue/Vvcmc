import {
  Smartphone,
  MessageSquareWarning,
  MapPin,
  Building2,
  Trees,
} from 'lucide-react'

export const quickLinks = [
  {
    key: 'digitalLocker',
    icon: Smartphone,
    color: 'purple',
  },
  { key: 'complaint', icon: MessageSquareWarning, color: 'red', path: '/complaint' },
{ key: 'cityMap', icon: MapPin, color: 'pink', path: '/city-map' },
{ key: 'gardens', icon: Trees, color: 'green', path: '/gardens' },
  {
    key: 'projects',
    icon: Building2,
    color: 'teal',
  },
]