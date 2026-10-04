import { ROOMS } from '../data/lodgeData';

/**
 * Get all rooms
 */
export function getAllRooms() {
  return Promise.resolve({ data: ROOMS, source: 'local' });
}

/**
 * Get room by ID
 */
export function getRoomById(id) {
  const room = ROOMS.find((r) => r.id === id) || null;
  return Promise.resolve({ data: room, source: 'local' });
}

/**
 * Get rooms by category
 */
export function getRoomsByCategory(category) {
  const rooms = category === 'all'
    ? ROOMS
    : ROOMS.filter((r) => r.category === category);
  return Promise.resolve({ data: rooms, source: 'local' });
}
