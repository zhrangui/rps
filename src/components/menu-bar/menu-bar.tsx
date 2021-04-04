import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { MenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import { SampleBase } from '../common/sample-base';
import './menu-bar.css';

/**
 * Menu default sample
 */
export class MenuBar extends SampleBase<{}, {}> {
  // Menu items definition
  public menuItems: MenuItemModel[] = [
    {
      text: 'File',
      iconCss: 'em-icons e-file',
      items: [
        { text: 'Open', iconCss: 'em-icons e-open' },
        { text: 'Save', iconCss: 'em-icons e-save' },
        { separator: true },
        { text: 'Exit' }
      ]
    },
    {
      text: 'Edit',
      iconCss: 'em-icons e-edit',
      items: [
        { text: 'Cut', iconCss: 'em-icons e-cut' },
        { text: 'Copy', iconCss: 'em-icons e-copy' },
        { text: 'Paste', iconCss: 'em-icons e-paste' }
      ]
    },
    {
      text: 'View',
      items: [
        {
          text: 'Toolbars',
          items: [
            { text: 'Menu Bar' },
            { text: 'Bookmarks Toolbar' },
            { text: 'Customize' },
          ]
        },
        {
          text: 'Zoom',
          items: [
            { text: 'Zoom In' },
            { text: 'Zoom Out' },
            { text: 'Reset' },
          ]
        },
        { text: 'Full Screen' }
      ]
    },
    {
      text: 'Tools',
      items: [
        { text: 'Spelling & Grammar' },
        { text: 'Customize' },
        { separator: true },
        { text: 'Options' }
      ]
    },
    {
      text: 'Help'
    }
  ];


  render() {
    return (
      <div className='control-pane'>
        <div className='control-section'>
          <div className='menu-section'>
            <div className='menu-control'>
              <MenuComponent items={this.menuItems}></MenuComponent>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
