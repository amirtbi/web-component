import { Component, h, Prop, getAssetPath, State } from '@stencil/core';

@Component({
  tag: 'custom-header',
  styleUrl: 'custom-header.css',
  assetsDirs: ['assets'],
  shadow: false,
})
export class CustomHeader {
  @Prop() items: string;

  @State() image: 'logo.png';
  @State() avatarImage: {};
  @State() show: boolean = false;

  toggleDropDown() {
    this.show = !this.show;
  }
  @State() userImageSrc = getAssetPath('../../assets/user.jpg');

  componentWillLoad() {
    this.avatarImage = { 'background': 'url("../../assets/user.jpg")', 'background-size': 'contain' };
  }
  render() {
    const imageSrc = getAssetPath(`../../assets/logo.png`);

    return (
      <header class="header-wrapper">
        <div class="header-wrapper__logo">
          <img src={imageSrc} />
          <h3>Brand name</h3>
        </div>

        <div class="header-wrapper__links">
          <i onClick={() => this.toggleDropDown()} class="icon-medium material-icons">
            list
          </i>
          {this.show ? (
            <div class="sub-menu__container visible">
              <div class="shortcuts"></div>
            </div>
          ) : (
            <div class="sub-menu__container invisible">
              <div class="shortcuts"></div>
            </div>
          )}

          <div class="avatar" style={this.avatarImage}></div>
        </div>
      </header>
    );
  }
}
