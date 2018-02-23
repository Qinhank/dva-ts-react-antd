import { NAMESPACE } from './ConstConfig'
import { DvaModel } from 'interfaces/index';

interface G {

}
type ns = number | string;
let n: ns = '';
console.log(n);



const model: DvaModel<G> = {

  namespace: NAMESPACE,

  state: {
    g: 1,
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

  effects: {
    * fetch(action, { put, call }) {

    }
  },



  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
      })
    },
  },
};


export default model;