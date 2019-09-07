import React from 'react';
import BenchMap from '../bench/bench_map';
import BenchIndex from '../bench/bench_index';

const Search = ({ benches, bounds, updateFilter }) => {
    return (
        <div>
            <BenchMap benches={benches} updateFilter={updateFilter} />
            <BenchIndex benches={benches} bounds={bounds} />
        </div>
    );
}

export default Search;