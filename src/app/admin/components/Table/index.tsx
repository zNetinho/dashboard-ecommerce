"use client"
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useEffect, useState } from 'react'
import { set, unknown } from 'zod'

type UserList = {
  nome: string
}

const URL_API = "http://localhost:3001/api/categorie"

export const getServerSideProps = (async () => {
  "use serve"
  const res = await fetch(`${URL_API}`);
  const data: any = await res.json()
  console.log(data)
  return { props: { data } }
}) satisfies GetServerSideProps<{ data: UserList }>

export default function TableList({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const [ headers, setHeaders ] = useState([])
  const [ categorias, setCategorias ] = useState([])

  async function chamaCategorias() {
    const res = await fetch(`${URL_API}`);
      const data: any = await res.json()
      console.log(data)
      setCategorias(data)
      const cabecalho = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));
      return cabecalho;
  }

  useEffect(() => {
    const request = async () => {
      const data: any = await chamaCategorias();
      setHeaders(data);
    }
    request()
  }, [])

  console.log(headers)
  return (
    <div>
      <table border={1}>
        <thead>
            <tr>
                { headers.map((item, index) => (
                  <th key={index}>{ item }</th>
                )) }
            </tr>
        </thead>
        <tbody>
            { categorias.map((item, index) => (
              <tr key={index}>
                  <td className='w-auto h-10 px-2 border-b-2 border-r-2'>{item.id}</td>
                  <td className='w-auto h-10 px-2 border-b-2 border-r-2'>{item.nome}</td>
                  <td className='w-auto h-10 px-2 border-b-2 border-r-2'>{item.descricao}</td>
                  <td className='w-auto h-10 px-2 border-b-2 border-r-2'>{item.title_seo}</td>
                  <td className='w-auto h-10 px-2 border-b-2 border-r-2'>{item.descricao_seo}</td>
                  <td className='w-auto h-10 px-2 border-b-2 border-r-2'>{item.slug}</td>
                  <td className='w-auto h-10 px-2 border-b-2 border-r-2'>{item.produtos.length}</td>
              </tr>
            ))}
        </tbody>
    </table>
    </div>
  )
}
