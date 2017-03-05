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
    private handleError(err) {
        let errMessage: string;

        if (err instanceof Response) {
            let body = err.json() || '';
            let error = body.error || JSON.stringify(body);

            errMessage = `${err.status} - ${err.statusText} || } '' ${error}`;
        } else {
            errMessage = err.message ? err.message : err.toString();
        }
        return Observable.throw(errMessage);
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
