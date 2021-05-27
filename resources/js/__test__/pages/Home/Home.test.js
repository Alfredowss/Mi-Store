
import 'jsdom-global/register'
import React from 'react'
import Home from '../../../pages/Home/Home'
import {mount} from 'enzyme'

describe('Test Home Page Component', ()=>{

        test('Home page is rendered and displayed correctly',  ()=>{
            const home = mount(<Home/>)
            expect(home.length).toEqual(1);
        })

})