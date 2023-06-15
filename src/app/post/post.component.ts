import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  
})
export class PostComponent  {
constructor(private postService:PostService){}
posts= this.postService.userPosts
userDetails=this.postService.selectedUserdetails

changeComments(id:number){
  this.postService.setPostId(id)
}
}
