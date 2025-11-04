import { useState, useMemo } from 'react';
import { User } from '../types/User';

export function useSearch(users: User[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) {
      return users;
    }

    const query = searchQuery.toLowerCase();
    return users.filter(user =>
      user.name.toLowerCase().includes(query)
    );
  }, [users, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredUsers
  };
}
