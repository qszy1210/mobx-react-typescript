import * as React from 'react';
import Value from './Value';
import exportInstance from './ExportInstance';

export interface ExportTestProps {
}

export default class ExportTest extends React.Component<ExportTestProps, any> {
  componentWillMount() {
    Value.value = {value: "inExport"}
  }
  render() {
    return (
      <div>
        {exportInstance.name}
      </div>
    );
  }
}
