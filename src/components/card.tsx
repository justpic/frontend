import { useState } from 'react'
import type { ICard } from '../types/card'
import { API_URL } from '../main'

function Card({ data }: { data: ICard }) {
	const [loaded, setLoaded] = useState(false)

	return (
		<div className='flex w-full min-w-[100px]'>
			{data && (
				<div className='flex flex-col gap-0.5 w-full'>
					<a
						className='cursor-pointer hover:brightness-[90%] w-full'
						href='/card/71cbe1c6-95da-4cb3-822a-15e9bbe2c4db'
					>
						<div
							className={`rounded-2xl overflow-hidden w-full ${
								loaded ? 'block' : 'hidden'
							}`}
						>
							<img
								className='pointer-events-none select-none size-full brightness-[96%]'
								alt='This card contain'
								src={`${API_URL}/v1/files/${data.file_url}`}
								onLoad={() => setLoaded(true)}
							/>
						</div>
						<div
							className={`aspect-square w-full animate-pulse bg-ring rounded-2xl ${
								loaded ? 'hidden' : 'visible'
							}`}
						/>
					</a>
					<div>
						<h1 className='text-xl font-medium mb-0'>{data.title}</h1>
						<a
							className='text-ring hover:underline'
							href={`/user/${data.owner.username}`}
						>
							{data.owner.username}
						</a>
					</div>
				</div>
			)}
		</div>
	)
}

export default Card
