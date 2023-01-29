import Image from 'next/image'

export default function Project ({ title, imageSrc, date, fonts }) {
  return (
    <div className='w-5/12 p-2 cursor-pointer border-2 border-transparent rounded hover:scale-110 hover:border-yellow-500 duration-100'>
      <Image className='rounded' src={imageSrc} alt={`Imagen del proyecto ${title}`} width={1080} height={1920} />
      <div className='flex items-end justify-between'>
        <p className={`${fonts.gugi.className} text-xl`}> {title} </p>
        <p className={`${fonts.IBMPlex.className} text-sm py-1`}> {date} </p>
      </div>
    </div>
  )
}
