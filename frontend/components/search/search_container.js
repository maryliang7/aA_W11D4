import { connect } from 'react-redux';
import Search from './search';
import { fetchBenches } from '../../actions/bench_actions';
import { selectAllBenches } from '../../reducers/selectors';
import { updateBounds, updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state) => {
    return {
        benches: selectAllBenches(state),
        bounds: state.filters.bounds
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchBenches: (filters) => dispatch(fetchBenches(filters)),
    updateBounds: (bounds) => dispatch(updateBounds(bounds)),
    updateFilter: (bounds) => dispatch(updateFilter(bounds)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);