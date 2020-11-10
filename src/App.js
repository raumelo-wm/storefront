import { Lightning, Utils } from "@lightningjs/sdk";
import { Menu } from "./components/Menu";
import { Home, Movies, Profile } from "./screens";
import { Color } from "./utils/Color";

export default class App extends Lightning.Component {
  isMenuOpen = false;
  menuRef = null;
  homeRef = null;

  static getFonts() {
    return [{ family: "Roboto", url: Utils.asset("fonts/Roboto-Regular.ttf") }];
  }

  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      colorLeft: Color.rgbaToArgb(15, 32, 39),
      colorRight: Color.rgbaToArgb(32, 58, 67),

      Menu: {
        type: Menu,
      },
      Profile: {
        type: Profile,
      },
      Home: {
        type: Home,
      },
      Movies: {
        type: Movies,
      },
    };
  }

  static _states() {
    return [
      class Menu extends this {
        _getFocused() {
          return this.menuRef;
        }
      },

      class Home extends this {
        $enter() {
          this.patch({
            smooth: {
              alpha: 1,
            },
          });
        }
        $exit() {
          this.patch({
            smooth: {
              alpha: 0,
            },
          });
        }
      },

      class Profile extends this {
        $enter() {
          this.patch({
            smooth: {
              alpha: 1,
            },
          });
        }
        $exit() {
          this.patch({
            smooth: {
              alpha: 0,
            },
          });
        }
      },

      class Movies extends this {
        $enter() {
          this.patch({
            smooth: {
              alpha: 1,
            },
          });
        }
        $exit() {
          this.patch({
            smooth: {
              alpha: 0,
            },
          });
        }
      },
    ];
  }

  _setup() {
    this.menuRef = this.tag("Menu");
    this.homeRef = this.tag("Home");
  }

  _init() {
    this._setState("Menu");
  }

  _handleUp() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  _getFocused() {
    return this.menuRef;
  }
}
