import Link from 'next/link'

export default function Post ({ title, description, date, tags, fonts, dark }) {
  return (
    <Link href=''>
      <article className={`w-full h-32 p-3 overflow-hidden
      cursor-pointer flex flex-col justify-between ${dark ? 'dark border-black' : 'bg-gray-100 border-gray-100'} border-2  rounded
      hover:scale-105 hover:border-yellow-500 hover:h-48 duration-200
      lg:w-11/12`}
      >
        <div>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className={`${fonts.IBMPlex.className} text-sm`}> {description} </p>
          <div className='mt-4 flex justify-between'>
            <p className={`${fonts.IBMPlex.className} text-sm`}> <strong> {date} </strong>  </p>
            <p className='text-end text-xs'> 20 min read </p>
          </div>
        </div>

        <div className='mt-10 flex'>
          <p className='flex items-center'>Tags:</p> {tags.map((tag, index) => <span className={`text-xs ${dark ? 'bg-slate-600' : 'bg-gray-300 '} rounded-md p-1 m-1`} key={index}> {tag} </span>)}
        </div>
      </article>
    </Link>
  )
}
