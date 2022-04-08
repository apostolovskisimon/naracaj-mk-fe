const getTypes = type => ({
  Request: `${type}_REQUEST`,
  Failure: `${type}_FAILURE`,
  Success: `${type}_SUCCESS`,
});

export default getTypes;
