export interface CatListItemType {
	id?: string | undefined;
	name: string;
	year: string;
	desc: string;
	image?: File | null | any;
	image_url?: string;
	created_at?: string;
}
export interface Database {
	public: {
		Tables: {
			cats: {
				Row: CatListItemType; // the data expected from .select()
				Insert: Omit<CatListItemType, "id" | "created_at"> &
					Partial<Pick<CatListItemType, "id" | "created_at">>; // typically id and created_at are generated by the DB
				Update: Partial<CatListItemType>; // the data to be passed to .update()
			};
		};
	};
}
