import Image from "next/image";
import Link from 'next/link';
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex gap-4">
      <Link href="/user-ssr">Versi SSR</Link>
      <Link href="/dashboard">Dashboard</Link>
      </div>
      <div className="relative overflow-x-auto">
        <h1>VERSI CSR</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((el, i) => {
                return (
                <tr key = { i } className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {el.id}
                </th>
                <td className="px-6 py-4">
                {el.name}
                </td>
                <td className="px-6 py-4">
                {el.email}
                </td>
            </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>

    </main >
  );
}
