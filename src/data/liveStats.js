import { Sun, Leaf, Droplet, CloudRain, Waves, ShieldCheck } from 'lucide-react'

export const liveStats = [
  { key: 'temperature', tagKey: 'sunny', icon: Sun, value: '32°C', tagColor: 'text-gold' },
  { key: 'aqi', tagKey: 'good', icon: Leaf, value: '42', tagColor: 'text-green' },
  { key: 'humidity', tagKey: 'normal', icon: Droplet, value: '65%', tagColor: 'text-accent-blue' },
  { key: 'rainfallToday', tagKey: null, icon: CloudRain, value: '12.5 mm', tagColor: '' },
  { key: 'waterSupply', tagKey: 'normal', icon: Waves, value: '98%', tagColor: 'text-accent-blue' },
  { key: 'complaintsResolved', tagKey: null, icon: ShieldCheck, value: '256', tagColor: '' },
]