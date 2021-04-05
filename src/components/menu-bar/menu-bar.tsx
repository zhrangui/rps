import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Route } from 'react-router-dom';
import { setCulture } from '@syncfusion/ej2-base';
import { MenuComponent, MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import { SampleBase } from '../common/sample-base';
import './menu-bar.css';

/**
 * Menu default sample
 */
export class MenuBar extends SampleBase<{}, {}> {

  // Menu items definition
  public menuItems: MenuItemModel[] = [
    {
      text: 'Component',
      iconCss: 'em-icons e-file',
      items: [
        { id: '/', text: 'Home' },
        { id: '/dashboard', text: 'Dashboard'},
        { id: '/grid', text: 'Data grid' },
        { id: '/treeview', text: 'Tree view' }
      ]
    },
    {
      text: 'Language',
      iconCss: 'em-icons e-edit',
      items: [
        { id: 'en-US', text: 'English' },
        { id: 'fr', text: 'French' }
      ]
    },
  ];

  render() {
    return (
      <Route render={({history}) => (
        <div className='control-pane'>
          <div className='control-section'>
            <div className='menu-section'>
              <div className='menu-control'>
                <MenuComponent orientation="Vertical" items={this.menuItems} select={(menu: MenuEventArgs) => {
                  if(menu.item.id === "en-US" || menu.item.id === "fr") {
                    setCulture(menu.item.id)
                  } else {             
                    history.push(menu.item.id);
                  }
                }}></MenuComponent>
              </div>
            </div>
          </div>
        </div>
      )}/>
    );
  }
}
