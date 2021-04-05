import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { CalendarComponent, ChangedEventArgs } from '@syncfusion/ej2-react-calendars';
import { SampleBase } from '../common/sample-base';
import './calendar.css';

export class Calendar extends SampleBase<{}, {}> {

  public onchange(args: ChangedEventArgs): void {
    /*Displays selected date in the label*/
    (document.getElementById('date_label') as HTMLElement).textContent = 'Selected Value: ' + args.value.toLocaleDateString();
  }

  render() {
    return (
      <div className='control-pane'>
        <div className='control-section'>
          <div className='calendar-control-section' style={{ overflow: 'auto' }}>
            <CalendarComponent change={this.onchange} ></CalendarComponent>
            <label id='date_label'>Selected Value:</label>
          </div>
        </div>
      </div>
    )
  }
}