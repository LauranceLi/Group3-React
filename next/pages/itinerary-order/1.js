export default function GroupCart2() {
    const [passengerCount, setPassengerCount] = useState(1);

    const handleAddPassenger = () => {
        setPassengerCount((prevCount) => prevCount + 1);
    };

    const renderPassengerForms = () => {
        const passengerForms = [];
        for (let i = 0; i < passengerCount; i++) {
            passengerForms.push(
                <div key={i}>
                    <div className="row m-3">
                        <Col>
                            <label htmlFor="name">中文姓名</label>
                            <input
                                type="text"
                                placeholder="姓名"
                                className="form-control"
                            />
                        </Col>
                        <Col>
                            <label htmlFor="name">英文姓名</label>
                            <input
                                type="text"
                                placeholder="英文姓名(同護照)"
                                className="form-control"
                            />
                        </Col>
                        <Col>
                            <label htmlFor="phone">聯絡電話</label>
                            <input
                                type="text"
                                placeholder="手機號碼"
                                className="form-control"
                            />
                        </Col>
                    </div>
                </div>
            );
        }
        return passengerForms;
    };

    return (
        <>
            <Navbar />
            <main className={styles.GroupCart1}>
                <br />
                <Container>
                    <Row className={styles.GroupRow}>
                        <Col className={styles.first}>1. 訂購內容</Col>
                        <Col className={styles.activeCartTitle}>2. 填寫旅客資訊</Col>
                        <Col className={styles.first}>3. 完成訂單</Col>
                    </Row>
                    <section>
                        <div>
                            <div className="travelForm mb-3">
                                <div className={styles.second}>
                                    <div className={styles.orderTitle}>
                                        <h6
                                            className={styles.travelSaleItem}
                                            style={{ fontSize: '22px' }}
                                        >
                                            秘魯・印加帝國15日:星宇豪華經濟艙・世界七大奇景馬丘比丘・印加都城庫斯科・魔幻打卡聖地彩虹山
                                        </h6>
                                    </div>
                                    {/* Other order details */}
                                    <div className={styles.orderWrite}>
                                        <div className={styles.orderTitle}>
                                            <h4 style={{ fontWeight: 600, fontSize: '22px' }}>
                                                填寫旅客資料
                                            </h4>
                                        </div>
                                        <div>
                                            <div className={styles.travelInfo2}>
                                                <h6 className={styles.travelSaleItem}>旅客 1</h6>
                                                <div className={styles.unitPrice}>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-warning"
                                                        onClick={handleAddPassenger}
                                                        style={{ fontWeight: 600, fontSize: '14px' }}
                                                    >
                                                        新增旅客
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {renderPassengerForms()}
                                        {/* Other input fields */}
                                    </div>
                                    {/* Other sections */}
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </main>
            <Footer />
        </>
    );
}
