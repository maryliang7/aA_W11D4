import React from 'react';

const BenchIndexItem = ({ bench }) => {
    return(
        <li key={bench.id}>{bench.description}</li>
    )
}

export default BenchIndexItem;