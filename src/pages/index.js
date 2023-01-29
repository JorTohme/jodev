import { useState } from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Post from '@/components/Post'
import Project from '@/components/Project'

import { IBM_Plex_Mono, Gugi } from '@next/font/google'

const IBMPlex = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '500'
})

const IBMPlexSemiBold = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '600'
})

const gugi = Gugi({
  subsets: ['latin'],
  weight: '400'
})

const fonts = {
  IBMPlex,
  IBMPlexSemiBold,
  gugi
}

const tagsTest = ['Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test']

export default function Home () {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode () {
    setDarkMode(!darkMode)
  }

  return (
    <Layout title='jor&dev' description=''>
      <Header fonts={fonts} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main className={`min-h-screen flex justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
        <div className='w-8/12 h-fit'>
          <div className='flex flex-col lg:flex-row'>
            <section className='w-full p-2 py-7 border-r-gray-100 lg:w-3/5 lg:border-r-2'>
              <h2 className={`${IBMPlexSemiBold.className} text-5xl tracking-tight`}> Últimos posts </h2>
              <div className='my-5 flex flex-col gap-3'>
                <Post
                  title='Cómo hacer SSR en Next.js'
                  description='Qué es, para que sirve y cómo usar el Server Side Rendering en Next.js'
                  date='Feb. 2023'
                  tags={tagsTest} fonts={fonts} dark={darkMode}
                />
                <Post
                  title='Lorem ipsum dolor sit amet'
                  description='Qué es, para que sirve y cómo usar el Server Side Rendering en Next.js'
                  date='Feb. 2023'
                  tags={tagsTest} fonts={fonts} dark={darkMode}
                />
                <Post
                  title='Lorem ipsum dolor sit amet'
                  description='Qué es, para que sirve y cómo usar el Server Side Rendering en Next.js'
                  date='Feb. 2023'
                  tags={tagsTest} fonts={fonts} dark={darkMode}
                />
                <Post
                  title='Lorem ipsum dolor sit amet'
                  description='Qué es, para que sirve y cómo usar el Server Side Rendering en Next.js'
                  date='Feb. 2023'
                  tags={tagsTest} fonts={fonts} dark={darkMode}
                />
              </div>
            </section>
            <section className='w-full py-7 text-center lg:w-2/5'>
              <h2 className={`${IBMPlexSemiBold.className} py-3 text-3xl tracking-tighter`}> Proyectos </h2>
              <div className='py-2 flex justify-around flex-wrap gap-3'>
                <Project title='Bookreads' imageSrc='/images/bookreads.png' date='Ene. 2023' fonts={fonts} />
                <Project title='Bookreads' imageSrc='/test.png' date='Nov. 2022' fonts={fonts} />
                <Project title='Bookreads' imageSrc='/test.png' date='Nov. 2022' fonts={fonts} />
                <Project title='Bookreads' imageSrc='/test.png' date='Nov. 2022' fonts={fonts} />
                <Project title='Bookreads' imageSrc='/test.png' date='Nov. 2022' fonts={fonts} />
                <Project title='Bookreads' imageSrc='/test.png' date='Nov. 2022' fonts={fonts} />
              </div>
            </section>
          </div>
          <div>
            <h2 className={`${IBMPlexSemiBold.className} py-3 text-3xl tracking-tighter`}> Universidad </h2>
            <p className={`${IBMPlex.className} `}>
              Empiezo el 2023 en el tercer año de la carrera, penúltimo año y si logro sacar todas las materias voy a tener el pre-título de
              Técnico en Informática y Desarrollo de Software.

              Las materias que tengo que rendir actualmente son:
              <br />
            </p>
            <ul>
              <li>Análisis matemático 2</li>
              <li>Laboratorio 4</li>
              <li>Bases de datos</li>
              <li>Diseño 2</li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}
