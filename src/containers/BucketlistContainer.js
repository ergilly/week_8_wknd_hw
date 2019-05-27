import { connect } from 'react-redux';
import Bucketlist from '../components/BucketList';

const mapStateToProps = (state) => {
  return {
    bucketlist: state.bucketlist
  };
};
const mapDispatchToProps = (dispatch) => ({
  visit(country) {
    dispatch({
      type: 'VISIT',
      country
    });
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Bucketlist);
