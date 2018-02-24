/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
import React from 'react';
import { connect } from 'react-redux';
// import { compose } from 'redux';
// import * as moment from 'moment/moment';
import { createStructuredSelector } from 'reselect';
import { makeDataList } from './selector';
import Mainpage from '../../components/mainPage';
import { loadData } from './actions';

class HomePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleDataList = this.handleDataList.bind(this);
  }

  componentWillMount() {
    this.props.loadData(handleDataList);
  }

  handleDataList(data) {
    const data1 = [];
    data.map((ele) => data1.push({ title: ele.title }));
    return data1;
  }

  render() {
    const { dataList } = this.props;
    return (
      <div>
        <Mainpage dataList={dataList} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: (handleDataList) => dispatch(loadData(handleDataList)),
  };
}

const mapStateToProps = createStructuredSelector({ dataList: makeDataList() });

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
