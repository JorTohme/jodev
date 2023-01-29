import Image from 'next/image'
import style from '@/styles/Header.module.css'

export default function Header ({ fonts, toggleDarkMode, darkMode }) {
  return (
    <header className={`${darkMode ? `${style.darkHeader} text-white` : `${style.lightHeader} text-black`}   flex justify-center`}>
      <div className='w-8/12 py-4 flex justify-between'>
        <div className='w-fit flex flex-col'>
          <h1 className={`${fonts.gugi.className} text-4xl`}> jo&dev </h1>
          <h2 className={`${fonts.IBMPlex.className} w-full text-center`}>my thoughts</h2>
        </div>

        <div className='flex items-start justify-start'>
          <div
            className='relative w-20 h-full flex justify-center items-center not-sr-only'
          >
            <input type='checkbox' className={`${style.toggleDarkMode}`} id='toggleDarkMode' onChange={toggleDarkMode} />
            <label htmlFor='toggleDarkMode' className={`${style.label} flex`}>
              <div className={`${style.sunMoon}`}>
                <Image src='/moon.svg' alt='' className='w-6 unselectable' width={30} height={30} />
                <Image src='/sun.svg' alt='' className='w-6 unselectable' width={30} height={30} />
              </div>
              <div className={`${style.ball}`} />
            </label>
          </div>
          <a
            className='p-3 hover:border-yellow-500 border-2 border-transparent rounded-md cursor-pointer'
            href='https://github.com/JorTohme'
            target='_blank' rel='noreferrer'
          >
            <Image className='w-8' src={darkMode ? '/github-white.svg' : '/github.svg'} alt='Github' width={30} height={30} />
          </a>

          <a
            className='p-3 hover:border-yellow-500 border-2 border-transparent rounded-md cursor-pointer'
            href='https://www.linkedin.com/in/jorgetohme/'
            target='_blank' rel='noreferrer'
          >
            <Image className='w-8' src={darkMode ? '/linkedIn-white.svg' : '/linkedIn.svg'} alt='LinkedIn' width={30} height={30} />
          </a>

          <a
            className='p-2 hover:border-yellow-500 border-2 border-transparent rounded-md cursor-pointer'
            href='https://www.jorgetohme.com.ar/'
            target='_blank' rel='noreferrer'
          >
            <Image className='w-10' src={darkMode ? '/portfolio-white.svg' : '/portfolio.svg'} alt='Portfolio' width={30} height={30} />
          </a>
        </div>
      </div>
    </header>
  )
}
