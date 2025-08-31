export interface ICard {
	id: string
	title: string
	description: string
	mimetype: string
	status: string
	source_url: string
	nsfw: boolean
	private: boolean
	deleted: boolean
	created: string
	file_url: string
	owner: ICardOwner
}

export interface ICardOwner {
	id: string
	username: string
	avatar: string
}
