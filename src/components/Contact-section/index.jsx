import React from "react";
import Split from "../Split";
import { Formik, Form, Field } from "formik";
import axios from 'axios';

const ContactSection = () => {
  const messageRef = React.useRef(null);
  function validatePhone(value) {
    console.log(!/^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/.test(value))
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(value))
    {
      error = "Invalid phone";
    }
    console.log(error)
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="contact-sec section-padding">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Get In Touch
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Contact Us.
            </h3>
          </Split>
          <span className="tbg">Contact</span>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
              <Formik
                initialValues={{
                  name: "",
                  phone: "",
                  message: "",
                }}
                onSubmit={async (values) => {
                  await sendMessage(500);
                  // alert(JSON.stringify(values, null, 2));
                  // show message
                  // const formData = new FormData();

                  // formData.append('name', values.name);
                  // formData.append('phone', values.phone);
                  // formData.append('message', values.message);
                  
                  let jsonData = {};
                  jsonData.body = '홈페이지 문의 입니다.';
                  jsonData.connectInfo = [{title:`이름 : ${values.name} 전화번호 : ${values.phone}`,description:`메시지 : ${values.message}`}];
                  const res = await axios.post('https://wh.jandi.com/connect-api/webhook/26153223/805898e6e99db4d99a7644edf238cab6', jsonData, {
                  headers: {
                    "Accept": "application/vnd.tosslab.jandi-v2+json",
                    "Content-Type": "application/json"
                  }
                  
                  });

                  if (!res) return;

                  messageRef.current.innerText =
                    "Your Message has been successfully sent. I will contact you soon.";
                  // Reset the values
                  values.name = "";
                  values.phone = "";
                  values.message = "";
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = "";
                  }, 2000);
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>

                    <div className="controls">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_name"
                              type="text"
                              name="name"
                              placeholder="Name"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_phone"
                              type="phone"
                              name="phone"
                              validate={validatePhone}
                              placeholder="Phone"
                              required="required"
                            />
                            {errors.phone && touched.phone && (
                              <div>{errors.phone}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <Field
                              as="textarea"
                              id="form_message"
                              name="message"
                              placeholder="Message"
                              rows="4"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-center">
                            <button
                              type="submit"
                              className="simple-btn custom-font cursor-pointer"
                            >
                              <span>Send Message</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
