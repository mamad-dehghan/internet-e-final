import {useEffect, useState} from "react";
import axios from "axios";
import {Table} from "@/components/Table";

const tableHeaders = [
    {
        Header: "name",
        accessor: "name",
    },
    {
        Header: "phone",
        accessor: "phone",
    },
    {
        Header: "email",
        accessor: "email",
    },
    {
        Header: "address",
        accessor: "address",
    },
]

export const UsersTable = ({page}) => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        axios({
            url: `https://c8cdeo.sse.codesandbox.io/showSomeUsers?page=${1}`
        })
            .then(res => res.data)
            .then(res => {
                setData(res)
                console.log(res);
            })
            .catch(err => console.log(err))
    }, [])
    return (
        data ?
        <Table data={data} columns={tableHeaders}/>
        :
        <></>
    )
}