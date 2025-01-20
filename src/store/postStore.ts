import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
    hasNewPost: boolean;
}

interface Actions {
    setHasNewPost: (value:boolean) => void;
}

export const usePostStore = create(persist<State & Actions>(
    (set) => ({
        hasNewPost: false,
        setHasNewPost: (value:boolean) => set((state) => ({ hasNewPost: value }))
    }),
    {
        name: 'hasNewPost'
    }
))