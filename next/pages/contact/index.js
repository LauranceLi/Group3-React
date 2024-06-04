import AccordionBasic from '@/components/accordion/accordion'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import React , {useState , useEffect}from 'react'
import Banner from '@/components/layout/banner'

export default function Index() {
    const [imgUrl, setImgUrl] = useState('')
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
  
    useEffect(() => {
      setImgUrl('./images/services.jpg')
      setTitle('聯絡我們')
      setText(
        '有任何問題或疑慮？歡迎隨時與我們聯繫！我們的團隊隨時為您提供支援和解答，讓您享受更愉快的體驗。'
      )
    }, [])
  
  return (
    <>
    <Navbar />
    <Banner  imgUrl={imgUrl} title={title} text={text} />
    <section className="sonar-contact-area section-padding-100">
        <div className="backEnd-content">
        </div>
        <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="mb-3">
                    <h2 className="bottom-line d-inline">常見問題</h2>
                </div>
                <AccordionBasic />
            </div>
        </div>
        </div>
        <div className="container">
        <div className="mb-3">
            <h2 className="bottom-line d-inline">意見回饋 / 其他問題</h2>
        </div>
        <div className="row">
            <div className="col-12">
            <div className="contact-form text-center">
                <form action="#" method="post" id="contactUs">
                <div className="row">
                    <div className="col-12 col-md-4">
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control"
                        id="contact-name"
                        placeholder="姓名"
                        />
                    </div>
                    </div>
                    <div className="col-12 col-md-4">
                    <div className="form-group">
                        <input
                        type="email"
                        className="form-control"
                        id="contact-email"
                        placeholder="Email"
                        />
                    </div>
                    </div>
                    <div className="col-12 col-md-4">
                    <div className="form-group">
                        <input
                        type="email"
                        className="form-control"
                        id="contact-mobile"
                        placeholder="手機號碼"
                        />
                    </div>
                    </div>
                    <div className="col-12 col-md-4">
                    <div className="form-group">
                        <select
                        className="form-control"
                        name="subject"
                        id="subject"
                        >
                        <option>詢問主題</option>
                        <option>團體行程</option>
                        <option>客製化行程</option>
                        <option>其他</option>
                        </select>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-group">
                        <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        placeholder="詢問內容與需求"
                        defaultValue={""}
                        />
                    </div>
                    </div>
                    <div className="col-12">
                    <button type="submit" className="btn btn-warning col-2">
                        送出表單
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </section>
    <Footer />
    </>

  )
}
