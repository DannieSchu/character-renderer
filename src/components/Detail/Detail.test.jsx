import React from 'react';
import { shallow } from 'enzyme';
import Detail from './Detail.jsx';

describe('Detail', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Detail 
        name="John Fitzgerald Byers" 
        url="https://vignette.wikia.nocookie.net/x-files/images/a/a4/John_Fitzgerald_Byers.jpg/revision/latest?cb=20120717071453"
        status="Dead"
        gender="Male"
        born="22 November 1963"
        description="John Fitzgerald Byers was one of the three The Lone Gunmen (the others being Richard Langly and Melvin Frohike)." />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
