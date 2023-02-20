import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'custom-list',
  styleUrl: 'custom-list.css',
  shadow: true,
})
export class CustomList {
  @Prop() navs: string;

  @State() menus: string[];

  componentWillLoad() {
    this.menus = JSON.parse(this.navs);
    console.log('component loaded');
  }

  render() {
    return (
      <div>
        <h1>Custom list</h1>
        <ul>
          {this.menus.map(item => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
