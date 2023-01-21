import React, {useEffect, useState} from "react";
import {Table} from "@/components/Table";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";


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

export default () => {
    const [searchContent, setSearchContent] = useState('');
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios({
            url: `https://c8cdeo.sse.codesandbox.io/showSomeUsers?page=${page}`
        })
            .then(res => res.data)
            .then(res => {
                setData(res)
                console.log(res);
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }, [searchContent, page])
    console.log(data);
    return (
        <>
            <Head>
                <title>Database</title>
            </Head>
            <main className="database">
                <header>
                    <Link href="/">Back to home</Link>
                    <div className="signin--inputs-wrapper">
                        <input
                            type="search"
                            value={searchContent}
                            placeholder="Search into database"
                            onChange={(e) => setSearchContent(e.target.value)}/>
                        <div className="signin--pages">
                            <button className={page === 1 ? "active" : ""} onClick={() => setPage(1)}>1</button>
                            <button className={page === 2 ? "active" : ""} onClick={() => setPage(2)}>2</button>
                            <button className={page === 3 ? "active" : ""} onClick={() => setPage(3)}>3</button>
                            <button className={page === 4 ? "active" : ""} onClick={() => setPage(4)}>4</button>
                            <button className={page === 5 ? "active" : ""} onClick={() => setPage(5)}>5</button>
                        </div>
                    </div>
                    <div className={`database--loading-message ${loading ? 'isLoading' : ''}`}>
                        please wait ...
                    </div>
                </header>
                <section>
                    {
                        (!loading &&
                            (data.length !== 0 ?
                                    <Table data={data} columns={tableHeaders}/>
                                    :
                                    <p>No data</p>
                            )
                        )
                    }
                </section>
            </main>
        </>
    )
}
