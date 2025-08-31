import { useEffect, useState } from 'react'
import { API_URL } from '../main'
import type { IUser } from '../types/user'
import { RuLocaleAuth } from '../locales/ru'

function Headbar() {
	const [selfUser, setSelfUser] = useState<IUser | null>()

	useEffect(() => {
		fetch(`${API_URL}/v1/users/me`)
			.then(v => v.json())
			.then(v => {
				if (v.message != 'Unauthorized') {
					setSelfUser(v)
					return
				}
				setSelfUser(null)
			})
	}, [])

	return (
		<div className='flex fixed justify-between items-center w-screen h-10 bg-background border border-foreground/15 z-50'>
			{selfUser && (
				<div className='size-full flex items-center justify-start px-2'>
					<a
						href='/card/create'
						className='bg-primary/15 p-1 px-3 rounded-lg hover:brightness-90'
					>
						Создать карточку
					</a>
				</div>
			)}
			<div className='size-full flex items-center justify-end px-2'>
				{selfUser && (
					<a href='/me' className='hover:underline'>
						{selfUser.username}
					</a>
				)}
				{selfUser === null && (
					<div className='size-full flex items-center justify-end gap-2'>
						<a
							href='/login'
							className='bg-primary/15 p-1 px-3 rounded-lg hover:brightness-90'
						>
							{RuLocaleAuth.login}
						</a>
						<a
							href='/register'
							className='bg-red-400 p-1 px-3 rounded-lg text-foreground'
						>
							{RuLocaleAuth.register}
						</a>
					</div>
				)}
			</div>
		</div>
	)
}

export default Headbar
