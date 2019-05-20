import React from "react";

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const sarchStyle = {
        fontSize: '20px'
    };
    return <input
        style={sarchStyle}
        placeholder={searchText}/>
};

export default SearchPanel
