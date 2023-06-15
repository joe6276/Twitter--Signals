import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
constructor(private postService:PostService){}
users=this.postService.users
onChange(event:Event){

let id=(event.target as HTMLSelectElement).value
this.postService.setUserId(+id)
//set postId
let postId= this.postService.userPosts()[0].id
this.postService.setPostId(postId)
}
}
