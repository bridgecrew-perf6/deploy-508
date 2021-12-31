import UserInfor from "./UserInfor/UserInfor";


export default function DashboardOfStaff({setToken}) {
    return (
        <div>
            <UserInfor
                tag="Staff in Ecopark BikeRenting"
                setToken={setToken}
            >
            </UserInfor>

        </div>
    )
}

