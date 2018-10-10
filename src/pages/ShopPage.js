import React from 'react';
import UpperHeader from './../components/UpperHeader';
import SearchBlock from './../components/SearchBlock';
import NavigationBlock  from  './../components/NavigationBlock';
import CategoryNav from './../components/CategoryNav';
import MainContent from './../components/MainContent';
import 'normalize.css';

export default class ShopPage extends React.Component {
  render() {
    return (
      <>
      <UpperHeader/>
      <SearchBlock/>
      <NavigationBlock/>
      <CategoryNav/>
      <MainContent/>
      <div>AdditionalOrder</div>
      <div>SocialNetworkItems</div>
      <div>Footer</div>
      <div>Copyright</div>
      </>
    );
  }
}
