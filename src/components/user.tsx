const user = {
  firstName: 'De',
  lastName: 'Arrascaeta',
};

function User() {
  return (<span>
    {' '}
    {`${user.firstName} ${user.lastName}`}
  </span>);
}

export default User;
