import { Component, Prop, h,Method,Event,EventEmitter } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;


  @Event() todoCompleted: EventEmitter<string>;
  @Method()
  
  showAlert(){
    alert("hi")
  }

  todoCompleteHandler(todo:string){
    console.log("clicked")
    this.todoCompleted.emit(`hello from emit ${todo}`)
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
    <div>Hello, World! I'm {this.getText()}

        <div>
          <button onClick={()=>this.showAlert()}>click on me</button>
          <button onClick={()=>this.todoCompleteHandler("hello")}>Handle event click</button>
        </div>
    </div>

   
    
    );
  }
}
