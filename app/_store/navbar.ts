import { create } from 'zustand';

type NavRouteState = {
  currentRoute: string;
  setNavRoute: (route: string) => void;
};

export const useNavRoute = create<NavRouteState>()((set) => ({
  currentRoute: 'live',
  setNavRoute: (route) => set(() => ({ currentRoute: route })),
}));
