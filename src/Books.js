import React from "react";
import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
  query {
    books {
      title
      author
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (<ul>
    {
      data.books.map(({ title, author }) => (
        <li key={title}><strong>{title}</strong> <em>by {author}</em></li>
      ))
    }
  </ul>)
}

export default Books;