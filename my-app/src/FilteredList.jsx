import React, { Component } from 'react';
import { DropdownButton, DropdownItem, MenuItem } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      type: "all" // Added a default type value
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  onFilter = (eventKey) => {
    this.setState({ type: eventKey });
  }

  filterItem = (item) => {
    const { search, type } = this.state;
    const isMatchingType = type === "all" || item.type === type;
    const isMatchingSearch = item.name.toLowerCase().includes(search);

    return isMatchingType && isMatchingSearch;
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <DropdownButton id="typeDropdown" title={"Type"}>
          <DropdownItem eventKey="All" onSelect={this.onFilter}>All</DropdownItem>
          <DropdownItem eventKey="Fruit" onSelect={this.onFilter}>Fruit</DropdownItem>
          <DropdownItem eventKey="Vegetables" onSelect={this.onFilter}>Vegetables</DropdownItem>
        </DropdownButton>

        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
