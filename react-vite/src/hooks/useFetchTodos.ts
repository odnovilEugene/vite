import axios from 'axios';
import {useState, useEffect} from "react";
import {TodoType} from "../types/TodoType.ts";

export const useFetchTodos = () => {
    const [data, setData] = useState<TodoType[]>([])
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get('https://dummyjson.com/todos');
                setData(response.todos);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    return {
        data,
        loading
    }
}