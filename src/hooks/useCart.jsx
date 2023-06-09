import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !!user?.email && !!token,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        }
    })

    return [cart, refetch];
}

export default useCart;