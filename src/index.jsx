/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import TodoList from './TodoList';

render(() => <TodoList />, document.getElementById('root'));
