import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character.jsx';

describe('Character', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Character name="Helga G. Pataki" url="https://vignette.wikia.nocookie.net/heyarnold/images/e/e5/Helga_Pataki.png/revision/latest/scale-to-width-down/266?cb=20190816021807" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
