import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User, UserCard } from "../types/user";

interface UserState {
    users: UserCard[];
    isLoading: boolean;
    setUsers: (users: User[]) => void;
    updateUser: (id: number, userData: Partial<UserCard>) => void;
    archiveUser: (id: number) => void;
    hideUser: (id: number) => void;
    activateUser: (id: number) => void;
    setLoading: (loading: boolean) => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            users: [],
            isLoading: false,

            setUsers: (users: User[]) => {
                set((state) => {
                    const userCards: UserCard[] = users.slice(0, 6).map((user) => {
                        const existing = state.users.find((u) => u.id === user.id);

                        return {
                            ...user,
                            status: existing?.status ?? "active",
                            avatar: existing?.avatar ?? `/Screenshot 2025-10-22 231159.png`,
                        };
                    });

                    return { users: userCards };
                });
            },

            updateUser: (id: number, userData: Partial<UserCard>) => {
                set((state) => ({
                    users: state.users.map((user) =>
                        user.id === id ? { ...user, ...userData } : user
                    ),
                }));
            },

            archiveUser: (id: number) => {
                set((state) => ({
                    users: state.users.map((user) =>
                        user.id === id ? { ...user, status: "archived" } : user
                    ),
                }));
            },

            hideUser: (id: number) => {
                set((state) => ({
                    users: state.users.map((user) =>
                        user.id === id ? { ...user, status: "hidden" } : user
                    ),
                }));
            },

            activateUser: (id: number) => {
                set((state) => ({
                    users: state.users.map((user) =>
                        user.id === id ? { ...user, status: "active" } : user
                    ),
                }));
            },

            setLoading: (loading: boolean) => {
                set({ isLoading: loading });
            },
        }),
        {
            name: "user-storage",
        }
    )
);
