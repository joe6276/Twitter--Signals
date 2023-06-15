
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Comments, Post, User, UserPosts } from './interfaces';
import { BehaviorSubject, Observable, Subject, catchError, combineLatest, map, switchMap, throwError } from 'rxjs';
import{toSignal,toObservable} from '@angular/core/rxjs-interop'
@Injectable({
  providedIn: 'root'
})
export class PostService {

  http = inject(HttpClient)

  private selectedUser= signal<number>(1)
  private selectedPost= signal<number>(1)

  private users$= this.http.get<User[]> ('https://jsonplaceholder.typicode.com/users').pipe( catchError(this.handleError))
  private posts$= this.http.get<Post[]> ('https://jsonplaceholder.typicode.com/posts').pipe( catchError(this.handleError))
  private comments$= this.http.get<Comments[]> ('https://jsonplaceholder.typicode.com/comments').pipe( catchError(this.handleError))

  posts = toSignal<Post[],Post[]>(this.posts$, {initialValue:[]})
  users= toSignal<User [], User[]>(this.users$,{initialValue:[]})
  comments= toSignal<Comments[], Comments[]>(this.comments$, {initialValue:[]})

  selectedUserdetails= computed(()=> this.users().find(u=>u.id===this.selectedUser()) as User)
  userPosts= computed(()=> this.posts().filter(p=>p.userId === this.selectedUser()))
  postComments= computed(()=> this.comments().filter(p=>p.postId === this.selectedPost()))

  setUserId(id:number){
    this.selectedUser.set(id)
  }

  setPostId(id:number){
    this.selectedPost.set(id)
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message
        }`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
