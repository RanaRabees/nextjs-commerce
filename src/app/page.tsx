/* eslint-disable react/no-children-prop */
import React, { FunctionComponent } from 'react';
import MyComponent from './[name]/page';

interface Props {
  name: string;
  age: number;
}

const HelloWorld: FunctionComponent<Props> = ({ name, age }) => {
  return (
    <div>
      Hello! <br />
      &copy; all right reserved by {name} <br />
      &quot; made in {age} &quot;  <br />
    </div>
  );
};


function Home() {
  return (
    <div>
      <HelloWorld name="Rana Rabees" age={2023} />
      <MyComponent />
    </div>
  );
}

export default Home





