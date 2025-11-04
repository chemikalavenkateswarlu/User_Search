import { Mail, Phone, Globe, MapPin, Building2 } from 'lucide-react';
import { User } from '../types/User';

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
          {user.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-start text-gray-700">
          <Mail className="h-5 w-5 mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
          <span className="text-sm break-all">{user.email}</span>
        </div>

        <div className="flex items-start text-gray-700">
          <Phone className="h-5 w-5 mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
          <span className="text-sm">{user.phone}</span>
        </div>

        <div className="flex items-start text-gray-700">
          <Globe className="h-5 w-5 mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
          <span className="text-sm break-all">{user.website}</span>
        </div>

        <div className="flex items-start text-gray-700">
          <MapPin className="h-5 w-5 mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
          <span className="text-sm">
            {user.address.city}, {user.address.street}
          </span>
        </div>

        <div className="flex items-start text-gray-700">
          <Building2 className="h-5 w-5 mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
          <div className="text-sm">
            <div className="font-semibold">{user.company.name}</div>
            <div className="text-gray-500 text-xs italic">{user.company.catchPhrase}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
