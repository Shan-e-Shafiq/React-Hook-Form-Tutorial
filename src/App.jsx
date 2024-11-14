import React from 'react';
import './App.css'
import StaticForm from './components/StaticForm';
import DynamicForm from './components/DynamicForms';
import DynamicNestedForms from './components/DynamicNestedForms';
import MultiSelectDropdown from './components/MultiSelectDropdown';

function App() {

    return (
        <>
            {/* <StaticForm /> */}
            {/* <DynamicForm /> */}
            {/* <DynamicNestedForms /> */}
            <MultiSelectDropdown />
        </>
    )
}

export default App
