import { Injectable } from '@angular/core';
import {Link} from '../model/link';

@Injectable()
export class LinkService {

  constructor() { }

  
	get(): Promise<Link[]> {
		return Promise.resolve([
            {id: 1, source: 1, target: 2, type: "0"}
        ]);
	}

	// insert(link: Link): Promise<Link> {
	// 	return this.http.post(this.linkUrl, link)
	// 		.toPromise()
	// 		.catch(HandleError);
	// }

	// update(link: Link): Promise<void> {
	// 	return this.http.put(`${this.linkUrl}/${link.id}`, link)
	// 		.toPromise()
	// 		.catch(HandleError);
	// }

	// remove(id: number): Promise<void> {
	// 	return this.http.delete(`${this.linkUrl}/${id}`)
	// 		.toPromise()
	// 		.catch(HandleError);
	// }

}
