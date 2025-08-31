import { useEffect, useState } from 'react'
import Card from '../components/card'
import type { ICard } from '../types/card'
import { API_URL } from '../main'

const FEED_COLLUMN_WIDTH = 250

function FeedColumn({ items }: { items: ICard[] }) {
	return (
		<div className='w-full grid gap-2'>
			{items.map(v => (
				<Card data={v} key={v.id} />
			))}
		</div>
	)
}

function FeedPage() {
	const [columns, setColumns] = useState<ICard[][]>([[]])
	const columns_count = window.innerWidth / FEED_COLLUMN_WIDTH

	useEffect(() => {
		fetch(`${API_URL}/v1/cards/`)
			.then(v => v.json())
			.then((v: ICard[]) => {
				let tmp_cols: ICard[][] = []
				for (let i = 0; i < columns_count; i++) {
					tmp_cols.push([])
				}

				v.forEach((i, idx) => {
					tmp_cols[idx % columns_count].push(i)
				})

				setColumns(tmp_cols)
			})
	}, [])

	return (
		<div className='flex p-2 w-full pt-12'>
			<div className='flex gap-2 w-full'>
				{columns.map((v, i) => (
					<FeedColumn items={v} key={v.length > 0 ? v[0].id : i} />
				))}
			</div>
		</div>
	)
}

export default FeedPage
