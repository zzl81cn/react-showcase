//main.js
'use strict';

import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import Component from './component.js'

let main = function () {
	render(<Component/>, document.getElementById('main'));
};

main();