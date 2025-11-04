import { UserX } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="text-center">
        <UserX className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No users found</h3>
        <p className="text-gray-500">Try adjusting your search query</p>
      </div>
    </div>
  );
}
