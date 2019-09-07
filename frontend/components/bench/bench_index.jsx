import React from 'react';
import BenchIndexItem from './bench_index_item';

export default class BenchIndex extends React.Component {
    componentDidMount(){
        console.log(this.props);
        // this.props.fetchBenches(this.props.bounds);

    }

    render(){
        // console.log(this.props);
        return(
            <div>
                <ul>
                    {this.props.benches.map(bench => <BenchIndexItem key={bench.id} bench={bench} />)}
                </ul>
            </div>
        )
    }
}