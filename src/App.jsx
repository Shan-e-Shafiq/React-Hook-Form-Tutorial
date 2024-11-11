import React from 'react';
import './App.css'
import StaticForm from './components/StaticForm';
import DynamicForm from './components/DynamicForms';
import DynamicNestedForms from './components/DynamicNestedForms';

function App() {

    return (
        <>
            {/* <StaticForm /> */}
            {/* <DynamicForm /> */}
            <DynamicNestedForms />
        </>
    )
}

export default App