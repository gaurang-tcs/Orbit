import React from "react";

import './retailer.styles.scss';

import { SearchBox } from "../../component/search/search.component";
import RetailerList from '../retailer-list/retailler-list.component';

class Retailer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            retailers: [
                {
                    id: 1,
                    name: 'anjali retailer',
                    price: '60000'

                },
                {
                    id: 2,
                    name: 'Test123',
                    price: '24000'

                }

            ],
            searchField: ''
        }
    }
    render() {
        const { retailers, searchField } = this.state;
        const Filteredretailer = retailers.filter(retailers =>
            retailers.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return (

            <div className="retailer">
                <SearchBox
                    placeholder='Search by retailer'
                    handleChange={e => this.setState({ searchField: e.target.value })}
                />
                <RetailerList retailers={Filteredretailer} />
            </div>
        )
    }

};

export default Retailer;