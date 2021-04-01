import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { SampleBase } from '../common/sample-base';
import {TreeViewComponent} from '@syncfusion/ej2-react-navigations';
import './treeview.css';
import * as dataSource from './treeview-data.json';

export class Treeview extends SampleBase<{}, {}> {

  data = dataSource as any;
  private fields: object = { dataSource: this.data.default.defaultData, id: 'id', text: 'name', child: 'subChild' };

  render() {
    return (       
      <div className = 'control-pane'>
        <div className='control-section'>
        <div className='tree-control_wrapper'>
            {/* Render TreeView */}
            <TreeViewComponent fields={this.fields} />
        </div>
        </div>
      </div>
    )
  }
}