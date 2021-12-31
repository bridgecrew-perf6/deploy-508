import Checkpng from '../../../../shared/icons/check.png'
import Avtpng from '../../../../shared/images/Avater.jpg'

export default function PendingAcc() {
    return (
        <div className="pendingAcc" style={{marginLeft:"61%"}}>
            <h1 className="titlePending">Pending Accounts</h1>
            <div className="listAcc">
                <ListAcc avatar={Avtpng} name="Nguyễn Anh Dũng" offlineTime="1h Ago"></ListAcc>
                <ListAcc avatar={Avtpng} name="Nguyễn Anh Dũng1" offlineTime="1h Ago"></ListAcc>
                <ListAcc avatar={Avtpng} name="Nguyễn Anh Dũng2" offlineTime="1h Ago"></ListAcc>
                <ListAcc avatar={Avtpng} name="Nguyễn Anh Dũng3" offlineTime="1h Ago"></ListAcc>
                <ListAcc avatar={Avtpng} name="Nguyễn Anh Dũng4" offlineTime="1h Ago"></ListAcc>
                <ListAcc avatar={Avtpng} name="Nguyễn Anh Dũng5" offlineTime="1h Ago"></ListAcc>
                <ListAcc avatar={Avtpng} name="Nguyễn Anh Dũng6" offlineTime="1h Ago"></ListAcc>
            </div>
            <Button></Button>
        </div>
    )
}

function ListAcc(props) {
    const avatar = props.avatar
    const name = props.name
    const offlineTime = props.offlineTime
    return (
        <div className="accountPending">
            <div className="avatarPending" >
                <img id="AvtPending" src={avatar} alt="" />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                width: "65%",
                marginLeft: 10,
            }}>
                <div className="namePending">
                    <span>{name}</span>
                </div>
                <div className="offlineTime">
                    <span>{offlineTime}</span>
                </div>
            </div>
            <div className="checkPending">
                <img id="checkPending1" src={Checkpng} alt="" />
            </div>

        </div>
    )

}

function Button() {
    return (
        <button className="buttonPending">
            <span className="viewMore">View more</span>
        </button>
    )
}
