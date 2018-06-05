import { PolymerElement, html } from '@polymer/polymer/polymer-element';

export class RhiUiIsncsciMenuIcon extends PolymerElement {
  static get is() { return 'rhi-ui-isncsci-menu-icon'; }

  static get template() {
    return html`
      <style>
        :host {
          background: var(--nav-background-color, #FFF); /* white is the fallback value */
          display: inline-block;
        }

        .bar {
          transition: transform 300ms, opacity 400ms;
        }

        div[show-close] .bar.top {
          /*
          ----------     ------------------ -----
          | a c tx |     | cos(a)  sin(a) | | x |
          | b d ty |     | -sin(a) cos(a) | | y |
          ----------     ------------------ -----
          */
          /* 45 deg to rad = 0.785398 */
          /*transform: matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);*/
          transform: matrix(.70710, -.70710666564, .70710666564, .70710, 0, 8);
        }

        div[show-close] .bar.middle {
          opacity: 0;
        }

        div[show-close] .bar.bottom {
          transform: matrix(.70710, .70710666564, -.70710666564, .70710, 0, -8);
        }

        .bar {
          background: var(--nav-primary-color, #000); /* black is the fallback value */
          border-radius: 2px;
          height: 4px;
          margin: 4px 0;
        }
      </style>
      <!-- shadow DOM goes here -->
      <div show-close$="[[showClose]]">
        <div class="bar top"></div>
        <div class="bar middle"></div>
        <div class="bar bottom"></div>
      </div>
    `;
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
      showClose: {
        type: Boolean,
        value: false
      }
    };
  }
}

customElements.define(RhiUiIsncsciMenuIcon.is, RhiUiIsncsciMenuIcon);