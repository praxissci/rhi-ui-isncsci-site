import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import { DomRepeat } from '@polymer/polymer/lib/elements/dom-repeat.js';
import { RhiUiIsncsciLogo } from '../rhi-ui-isncsci-logo/rhi-ui-isncsci-logo';
import { RhiUiIsncsciMenuIcon } from './rhi-ui-isncsci-menu-icon';

export class RhiUiIsncsciGlobalTabNavigation extends PolymerElement {
    static get is() { return 'rhi-ui-isncsci-global-tab-navigation'; }

    static get template() {
        return html`
            <style>
                :host {
                    background-color: var(--nav-background-color, #FFF); /* white is the fallback value */
                    display: block;
                    font-family: Century Gothic,Verdana,Sans-Serif;
                    box-shadow: 0px 0 5px 0 rgba(0, 0, 0, 0.2);
                }

                .cursor-pointer {
                    cursor: pointer;
                }

                .display-flex {
                    display: flex;
                }

                .languages {
                    display: none;
                }

                .identity {
                    display: none;
                }

                .identity rhi-ui-isncsci-logo {
                    margin: 12px 12px 0;
                    width: 181px;
                }
                
                .navigation {
                    height: 40px;
                    overflow: hidden;
                }

                .navigation .sections {
                    flex-grow: 1;
                    justify-content: center;
                    margin-right: 44px;
                }

                .navigation .sections .section {
                    display: none;
                }

                .navigation .sections .section a {
                    display: inline-block;
                    color: #666;
                    font-size: 13px;
                    line-height: 40px;
                    padding: 0 16px;
                    text-decoration: none;
                    text-transform: uppercase;
                }

                .navigation .sections .section[selected] {
                    display: inline-block;
                }

                .display-inline-block {
                    display: inline-block;
                }

                .menu-button rhi-ui-isncsci-menu-icon {
                    height: 28px;
                    margin: 6px 6px 0;
                    width: 28px;
                }

                .row-content {
                    margin: 0 auto;
                    max-width: 950px;
                }

                @media (min-width: 960px) {
                    .navigation {
                        border-bottom: 1px solid #E8E8E8;
                        height: 44px;
                    }

                    .navigation .menu-button {
                        display: none;
                    }

                    .navigation .identity {
                        display: block;
                    }

                    .languages {
                        display: block;
                        justify-content: flex-end;
                    }

                    .languages .row-content {
                        justify-content: flex-end;
                    }

                    .languages a {
                        color: #666;
                        font-size: 12px;
                        font-weight: bold;
                        line-height: 44px;
                        padding: 0 16px;
                        text-decoration: none;
                    }

                    .navigation .sections {
                        margin: 0;
                        justify-content: flex-end;
                    }

                    .navigation .sections .section {
                        display: inline-block;
                    }

                    .navigation .sections .section a {
                        border-bottom: solid 4px #FFF;
                        font-size: 12px;
                        font-weight: bold;
                        line-height: 40px;
                        transition: border-color 500ms;
                    }

                    .navigation .sections .section[selected] a {
                        color: #000;
                    }

                    .navigation .sections .section[selected] a,
                    .navigation .sections .section[selected] a:hover {
                        border-bottom: solid 4px #000;
                    }

                    .navigation .sections .section a:hover {
                        border-bottom: solid 4px #666;
                    }

                    .navigation .sections .section.home {
                        display: none;
                    }
                }
            </style>
            <!-- shadow DOM goes here -->
            <div class="navigation">
                <div class="row-content display-flex">
                    <div class="menu-button cursor-pointer"
                            on-click="menuClicked">
                        <rhi-ui-isncsci-menu-icon show-close$="[[showCloseIcon]]"></rhi-ui-isncsci-menu-icon>
                    </div>
                    <div class="identity">
                        <a href="[[homeUri]]">
                            <rhi-ui-isncsci-logo></rhi-ui-isncsci-logo>
                        </a>
                    </div>
                    <div class="sections display-flex">
                        <div class="section home" selected$="[[isHomeSelected]]">
                            <a href="[[item.uri]]">[[homeLabel]]</a>
                        </div>
                        <dom-repeat items="[[sections]]">
                            <template>
                                <div class="section" selected$="[[item.isSelected]]">
                                    <a href="[[item.uri]]">[[item.label]]</a>
                                </div>
                            </template>
                        </dom-repeat>
                    </div>
                </div>
            </div>
            <div class="languages">
                <div class="row-content display-flex">
                    <dom-repeat items="[[languages]]">
                        <template>
                            <a href="[[item.uri]]">[[item.label]]</a>
                        </template>
                    </dom-repeat>
                </div>
            </div>
        `;
    }

    static get properties() {
        return {
            isHomeSelected: {
                type: Boolean,
                value: false
            },
            homeLabel: {
                type: String,
                value: ''
            },
            homeUri: {
                type: String,
                value: '/'
            },
            showCloseIcon: {
                type: Boolean,
                value: false
            }
        };
    }

    constructor() {
        super();

        this.sections = [];
        this.languages = [];
    }

    /**
     * 
     * @param {[{label: string, uri: string, isSelected: boolean}]]} sections
     */
    setSections(sections) {
        if (!Array.isArray(sections)) {
            return;
        }

        this.sections = sections;
    }

    /**
     * 
     * @param {[{label: string, uri: string, isSelected: boolean}]]} languages
     */
    setLanguages(languages) {
        if (!Array.isArray(languages)) {
            return;
        }

        this.languages = languages;
    }

    menuClicked() {
        this.dispatchEvent(new CustomEvent('menu-clicked', { detail: { showCloseIcon: this.showCloseIcon } }));
    }
}

customElements.define(RhiUiIsncsciGlobalTabNavigation.is, RhiUiIsncsciGlobalTabNavigation);