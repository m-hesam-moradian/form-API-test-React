import React, { Component } from 'react'
import Form from './components/Form/Form'
import Tabel from './components/table/Table'

export default class App extends Component {
    render() {
        return (
            <div>

                <Form />
                <Tabel/>

            </div>
        )
    }
}
