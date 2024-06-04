import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>我如何更改我的個人資料？</Accordion.Header>
        <Accordion.Body>
        登錄後，您可以在您的個人資料頁面中找到編輯個人資料的選項。
        點擊該鏈接，然後您就可以更新您的個人資訊，如地址、電子郵件或電話號碼。
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>我如何聯繫客戶支援？</Accordion.Header>
        <Accordion.Body>
        您可以通過電子郵件、在網站上的聯繫表格填寫或直接撥打客戶支援的電話號碼與我們聯繫。
        我們的客戶支援團隊會盡快回覆您的查詢。
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>我可以在網站上追蹤我的訂單嗎？</Accordion.Header>
        <Accordion.Body>
        是的，通常您可以登錄您的帳戶並查看訂單歷史記錄。
        在那裡，您可以找到您的最新訂單狀態以及相關的追蹤資訊。
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>積分是什麼？有什麼用途？</Accordion.Header>
        <Accordion.Body>
        每次您購物時，您都可以累積積分，這些積分可在未來用於折抵現金或享受特別優惠。
        這意味著您不僅可以獲得您喜歡的產品或服務，還可以享受額外的回饋和優惠。
        越多消費，您就能累積更多積分，進而享受更大的折扣。
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;