import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import { fetchBenches } from '../../actions/bench_actions';
import { selectAllBenches } from '../../reducers/selectors';

const mapStateToProps = (state) => {
    return{
        benches: selectAllBenches(state)
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchBenches: () => dispatch(fetchBenches())
})

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex)