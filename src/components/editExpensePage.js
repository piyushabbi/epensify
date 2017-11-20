import React from 'react';

export const EditExpensePage = (props) => {
  console.log(props);

  return <div>Edit Expense Page, id: { props.match.params.id }</div>;
}
