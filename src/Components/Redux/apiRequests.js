import { updateStart, updateError, updateSuccess } from "./userSlice";
//de lay api => install axios
import axios from "axios"

export const updateUser =  async (user, dispatch) => { //async await để đợi 2000ms tu setTimeOut o backend
    dispatch(updateStart())
    try {
        // const res = await axios.post('/v1/updateedadadfs', user)
        const res = await axios.post('/v1/update', user)
        //sau khi đợi xong
        dispatch(updateSuccess(res.data)) //res.data chinh la action (tham so thu 2 cua updateSuccess())
    } catch (err) {
        dispatch(updateError())
    }
}