import { postData } from "../../../Services/AuthService"


export const login = async ({ email, password, role }) => {
    try {
        const response = await postData({ email, password, role });
        console.log(response);
        if (response.status === "fail") {
            return {
                success: false,
                msg:response.msg
            }
        } else {
            return {
                success: true,
                role: role,
                token: response.token,
                info: JSON.stringify(response.data)
            }
        }
    } catch (error) {
        console.log(error)
    }
}
