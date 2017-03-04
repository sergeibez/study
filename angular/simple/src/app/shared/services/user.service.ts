import { Injectable } from "@angular/core";
import { User } from "../models/user";

let usersPromise: Promise<User[]> = Promise.resolve([
    {id: 25, name: 'John', username: 'john77'},
    {id: 26, name: 'Silvia', username: 'silvia85'},
    {id: 27, name: 'Barbara', username: 'barbara90'}
]);

@Injectable()
export class UserService {
    currentId: number = 28;

    users: User[] = [
        {id: 25, name: 'John', username: 'john77'},
        {id: 26, name: 'Silvia', username: 'silvia85'},
        {id: 27, name: 'Barbara', username: 'barbara90'}
    ];

    getUsers(): Promise<User[]> {
        return Promise.resolve(this.users);
    }                           

    getUser(userId: number): Promise<User> {
        return this.getUsers().then(users => users.find(user => user.id == userId));
    }

    addUser(user: User) {
        user.id = this.currentId++;
        this.users.push(user);
    }
}
