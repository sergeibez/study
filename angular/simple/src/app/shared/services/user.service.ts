import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";

let usersPromise: Promise<User[]> = Promise.resolve([
    {id: 25, first_name: 'John', last_name: 'Smith', avatar: ''},
    {id: 26, first_name: 'Silvia', last_name: 'Perez', avatar: ''},
    {id: 27, first_name: 'Barbara', last_name: 'Fischer', avatar: ''}
]);

@Injectable()
export class UserService {
    private usersUrl: string = "https://reqres.in/api/users/";

    currentId: number = 28;

    users: User[] = [
        {id: 25, first_name: 'John', last_name: 'Smith', avatar: ''},
        {id: 26, first_name: 'Silvia', last_name: 'Perez', avatar: ''},
        {id: 27, first_name: 'Barbara', last_name: 'Fischer', avatar: ''}
    ];

    constructor(private http: Http) {
    }

    /**
     * Get all users
     * @returns {Observable<R>}
     */
    getUsers(): Observable<User[]> {
        return this.http.get(this.usersUrl)
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    /**
     * Get a user
     */
    getUser(userId: number): Observable<User> {
        let url = this.usersUrl + userId;
        console.log(url);
        return this.http.get(url)
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    // create a user

    // update a user

    // delete a user

    /**
     * Handle error
     */
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }



    // getUsers(): Promise<User[]> {
    //     return Promise.resolve(this.users);
    // }
    //
    // getUser(userId: number): Promise<User> {
    //     return this.getUsers().then(users => users.find(user => user.id == userId));
    // }

    addUser(user: User) {
        user.id = this.currentId++;
        this.users.push(user);
    }
}
