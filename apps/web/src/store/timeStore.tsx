import { create } from 'zustand'; 
import { persist } from 'zustand/middleware';

interface timeState {
  startTime: any;
  endTime: any;
  division:any;
  setStartTime: (startTime: any) => void;
  setEndTime: (endTime: any) => void;
  setDivision:(division:any) => void;
}

export const useStore = create<timeState>()(
  persist(
    (set) => ({
      startTime: '10:00',
      endTime: '11:00',
      division:null,
      setStartTime: (newStartTime: any) => set({ startTime:newStartTime }),
      setEndTime: (newEndTime: any) => set({ endTime:newEndTime }),
      setDivision:(division:any) => set({division})
    }),
    {
        name:'Time'
    } // Add an empty options object
  ),
);

