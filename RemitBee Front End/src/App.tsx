import { useState } from 'react';
import { Users, LayoutGrid, Table } from 'lucide-react';
import { useUsers } from './hooks/useUsers';
import { useSearch } from './hooks/useSearch';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import UserTable from './components/UserTable';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import EmptyState from './components/EmptyState';

function App() {
  const { users, loading, error } = useUsers();
  const { searchQuery, setSearchQuery, filteredUsers } = useSearch(users);
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">User Directory</h1>
                <p className="text-sm text-gray-500 mt-1">
                  Showing {filteredUsers.length} of {users.length} users
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('cards')}
                className={`p-3 rounded-lg transition-all ${
                  viewMode === 'cards'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                aria-label="Card view"
              >
                <LayoutGrid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-3 rounded-lg transition-all ${
                  viewMode === 'table'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                aria-label="Table view"
              >
                <Table className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {filteredUsers.length === 0 ? (
          <EmptyState />
        ) : viewMode === 'cards' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <UserTable users={filteredUsers} />
        )}
      </main>
    </div>
  );
}

export default App;
