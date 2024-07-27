import "./testimonial.css"
import user from "./../../../../assets/images/user.png"

export default function Testimonial() {
    return (
        // <div className="testimonial">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col">

        //                 <div className="testimo-assets">

        //                     <div className="testimo-head-text">
        //                         <h4 className="testimo-heading">What Our Customers <br /> Are Saying</h4>
        //                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
        //                     </div>

        //                     <div className="testimo-card testimo-card1">
        //                         <p>We had an amazing time Sameer was very friendly and looking for us the whole time everything went smooth the food was good the sweets and shisha!.😊</p>
        //                         <div className="testimo-user">
        //                             <img src={user} alt="" />
        //                             <span>Abdul Husain</span>
        //                         </div>
        //                     </div>

        //                     <div className="testimo-card testimo-card2">
        //                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .👍👍</p>
        //                         <div className="testimo-user">
        //                             <img src={user} alt="" />
        //                             <span>Ehsaan Kureshi</span>
        //                         </div>
        //                     </div>

        //                     <div className="testimo-card testimo-card3">
        //                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.❤
        //                             <br /><br />
        //                             Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        //                         <div className="testimo-user">
        //                             <img src={user} alt="" />
        //                             <span>Yusuf Khan</span>
        //                         </div>
        //                     </div>

        //                     <div className="testimo-card testimo-card4">
        //                         <p>Lorem ipsum dolor sit amet. 💯
        //                             <br /><br />
        //                             Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        //                         <div className="testimo-user">
        //                             <img src={user} alt="" />
        //                             <span>Salman Ali</span>
        //                         </div>
        //                     </div>

        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="testimonial">
        <div className="container">
            <div className="row">
                <div className="col">
                    
                    <div className="testimo-assets">
                        
                        <div className="testimo-head-text">
                            <h4 className="testimo-heading">What Our Customers <br /> Are Saying</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                        </div>

                        <div className="testimo-cards-wrap">
                            <div className="testimo-card testimo-card1">
                                <p>We had an amazing time Sameer was very friendly and looking for us the whole time everything went smooth the food was good the sweets and shisha!.😊</p>
                                <div className="testimo-user">
                                    <img src={user} alt="" />
                                    <span>Abdul Husain</span>
                                </div>
                            </div>

                            <div className="testimo-card testimo-card2">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .👍👍</p>
                                <div className="testimo-user">
                                    <img src={user} alt="" />
                                    <span>Ehsaan Kureshi</span>
                                </div>
                            </div>

                            <div className="testimo-card testimo-card3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.❤ 
                                <br /><br />
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <div className="testimo-user">
                                    <img src={user} alt="" />
                                    <span>Yusuf Khan</span>
                                </div>
                            </div>

                            <div className="testimo-card testimo-card4">
                                <p>Lorem ipsum dolor sit amet. 💯
                                    <br /><br />
                                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="testimo-user">
                                    <img src={user} alt="" />
                                    <span>Salman Ali</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}
