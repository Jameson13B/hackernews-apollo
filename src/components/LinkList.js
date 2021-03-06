import React, { Component } from 'react';
import Link from './Link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class LinkList extends Component {
  state = {};
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const linksToRender = data.feed;

          return (
            <div>
              {linksToRender.map(link => (
                <Link key={link.id} link={link} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default LinkList;

const FEED_QUERY = gql`
  {
    feed {
      id
      description
      url
    }
  }
`;
