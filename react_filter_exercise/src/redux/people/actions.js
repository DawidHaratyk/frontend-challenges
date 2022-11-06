import * as types from "../people/types";

export const updateQuery = (payload) => ({
  type: types.UPDATE_QUERY,
  payload,
});
