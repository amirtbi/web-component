import {Component,h,Prop} from "@stencil/core"


@Component({
    tag:'custom-button',
    styleUrl:'custom-button.css',
    shadow:true
})


export class CustomButton {

    @Prop() color:string;
    @Prop() size:'small' | 'large'
    @Prop() disabled=false


    // Default colors

    blueColor = {start:'#845EC2',end:'#D65DB1'}
    lightOrang={start:'#FF9671',end:'#F9F871'}

    selectedColor:{start:string,end:string}
    backgroundColor:any

    // Life cycle
    componentWillLoad(){

        if(this.color==='blueColor'){
            this.selectedColor = this.blueColor
        }
        else if(this.color==='lightOrange'){
            this.selectedColor = this.lightOrang
        }

        this.backgroundColor = {
            background:'linear-gradient(to right, ' + this.selectedColor.start + ', ' + this.selectedColor.end + ')'
        }
    }
    render(){
        return(<div>
            <button class={this.color}>click</button>
        </div>)
    }
}