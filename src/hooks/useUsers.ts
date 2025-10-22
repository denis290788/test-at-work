import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "../stores/userStore";
import { useEffect } from "react";
import { userApi } from "../api/users";

export const useUsers = () => {
    const { setUsers, setLoading } = useUserStore();

    const query = useQuery({
        queryKey: ["users"],
        queryFn: userApi.getUsers,
        staleTime: 5 * 60 * 1000,
    });

    useEffect(() => {
        if (query.data) {
            setUsers(query.data);
        }
    }, [query.data, setUsers]);

    useEffect(() => {
        setLoading(query.isLoading);
    }, [query.isLoading, setLoading]);

    return query;
};
