import type { User } from "../types/user";

const API_BASE = "https://jsonplaceholder.typicode.com";

export const userApi = {
    getUsers: async (): Promise<User[]> => {
        const response = await fetch(`${API_BASE}/users`);
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        return response.json();
    },
};
