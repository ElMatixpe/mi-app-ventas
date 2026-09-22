// Iconos SVG simples, sin librerías externas

export const CartIcon = ({ color = '#ffffff', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <path d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20.5 8H6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="20.5" r="1.3" fill={color} stroke="none" />
    <circle cx="17" cy="20.5" r="1.3" fill={color} stroke="none" />
  </svg>
);

export const HomeIcon = ({ color = '#fff', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <path d="M4 11.5 12 5l8 6.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 10v9h12v-9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TagIcon = ({ color = '#fff', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <path d="M12 3h6a2 2 0 0 1 2 2v6l-9.5 9.5a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L12 3Z" strokeLinejoin="round" />
    <circle cx="15.5" cy="7.5" r="1.3" fill={color} stroke="none" />
  </svg>
);

export const BoxIcon = ({ color = '#fff', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <path d="M3.5 7 12 3l8.5 4v10L12 21l-8.5-4Z" strokeLinejoin="round" />
    <path d="M3.5 7 12 11l8.5-4M12 11v10" strokeLinejoin="round" />
  </svg>
);

export const UsersIcon = ({ color = '#fff', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.4 2.7-6 6-6s6 2.6 6 6" strokeLinecap="round" />
    <path d="M15.5 6.2c1.4.3 2.5 1.6 2.5 3.1s-1.1 2.8-2.5 3.1M18 14.3c2 .5 3.5 2.4 3.5 4.7" strokeLinecap="round" />
  </svg>
);

export const ReportIcon = ({ color = '#fff', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 13v4M12 9v8M16 11v6" strokeLinecap="round" />
  </svg>
);

export const LogoutIcon = ({ color = '#fff', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <path d="M9 20H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 16l4-4-4-4M20 12H9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const UserPlusIcon = ({ color = '#c0392b', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <circle cx="10" cy="8" r="4" />
    <path d="M2.5 20c0-4 3.4-7 7.5-7s7.5 3 7.5 7" strokeLinecap="round" />
    <path d="M19 8v4M21 10h-4" strokeLinecap="round" />
  </svg>
);

export const ChevronDownIcon = ({ color = '#333', size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
