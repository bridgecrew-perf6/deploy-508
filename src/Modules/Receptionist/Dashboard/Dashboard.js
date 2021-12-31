import BillingHistory from "./BillingHistory/BillingHistory";
import PendingAccount from "./PendingAccount/PendingAccount";
import UserInfo from "./UserInfo/UserInfor";


export default function DashboardOfReceptionist({setToken}) {
    return (
        <div>
            <UserInfo
                tag="Receptionist in Ecopark BikeRenting"
                setToken={setToken}
            >
            </UserInfo>
        </div>
    )
}

