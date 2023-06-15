import { Component, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { Comments } from '../interfaces';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{

  constructor(private postService:PostService){}
  comments:Comments[]=[]

  
  ngOnInit(): void {
    try {
      this.comments= this.postService.postComments()
    } catch (error) {
      
      console.log(error);
      return 
      
    }
  }

}
