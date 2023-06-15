import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { PostService } from './post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'twitter'; 
  counter = signal(1)
  price=signal(2000)

  totalPrice= computed(()=> this.counter() * this.price())
  
  constructor(private postService:PostService){
    // effect(()=> console.log(this.counter()))
  }
  
  ngOnInit(): void {
    // this.postService.setFirstUser()
    // this.counter.update(val=>val *5)
  }
  Decrement(){
    this.counter.set(this.counter() -1)
  }
  Increment(){
    this.counter.set(this.counter() + 1)
    this.price.set(5000)
  }
}
