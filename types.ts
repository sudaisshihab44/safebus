
export type Role = 'parent' | 'admin' | 'driver';

export interface Child {
  id: string;
  name: string;
  grade: string; // Kept for backward compatibility (e.g. "5-A")
  classStandard?: string; // New: e.g. "5"
  section?: string; // New: e.g. "A"
  school: string;
  busNumber: string; // Internal/Route Bus Number (e.g. "Bus 05")
  busRegisterNumber?: string; // New: License Plate (e.g. "KA-19-...")
  routeNumber: string;
  status: 'boarded' | 'dropped' | 'waiting' | 'in-transit' | 'absent';
  nextPickupTime: string; // ISO string or HH:mm
  avatarUrl: string;
  pickupPoint: string;
  parentId?: string;
  parentPhone: string; // New: Mandatory parent phone saved with student
  parentEmail?: string; // New: Optional parent email
}

export interface BusLocation {
  id: string;
  lat: number;
  lng: number;
  speed: number; // km/h
  heading: number; // degrees
  nextStop: string;
  eta: string;
  driverName: string;
  driverPhone: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'pickup' | 'drop' | 'delay' | 'general' | 'alert';
  read: boolean;
}

export interface Stop {
  id: string;
  name: string;
  time: string;
  status: 'passed' | 'upcoming' | 'current';
  lat: number;
  lng: number;
  studentsCount?: number; // For driver view
}

// Admin Interfaces
export interface Driver {
  id: string;
  name: string;
  phone: string;
  licenseNumber: string;
  assignedBusId?: string;
  status: 'active' | 'inactive';
  photoUrl: string;
}

export interface Parent {
  id: string;
  name: string;
  email: string;
  phone: string;
  childrenIds: string[];
  status: 'approved' | 'pending' | 'rejected';
  photoUrl?: string;
}

export interface Bus {
  id: string;
  registrationNumber: string; // e.g., KA-19-AB-1234
  capacity: number;
  routeId: string;
  driverId?: string;
  status: 'active' | 'maintenance';
}

export interface Route {
  id: string;
  name: string;
  stops: Stop[];
}

export interface TripStudent {
    id: string;
    name: string;
    stopId: string;
    stopName: string;
    status: 'pending' | 'boarded' | 'dropped' | 'absent' | 'waiting' | 'in-transit';
    avatarUrl: string;
    grade: string;
}
