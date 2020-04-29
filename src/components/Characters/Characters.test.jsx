import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters.jsx';

describe('Characters', () => {
  it('matches a snapshop', () => {
    const characters = [{
      id: '5da237699734fdcb7bef8f63',
      name: 'Helga G. Pataki',
      url: 'https://vignette.wikia.nocookie.net/heyarnold/images/e/e5/Helga_Pataki.png/revision/latest/scale-to-width-down/266?cb=20190816021807'
    },
    {
      id: '5da237699734fdcb7bef8f8b',
      name: 'Shelley',
      url: 'https://vignette.wikia.nocookie.net/heyarnold/images/c/cb/Shelley.jpg/revision/latest/scale-to-width-down/310?cb=20120527025256'
    }];
    const wrapper = shallow(
      <Characters characters={characters} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
