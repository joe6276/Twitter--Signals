import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../post.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
constructor(private postService:PostService){}

userDetails= this.postService.selectedUserdetails
}
