  import { useCallback, useEffect, useState } from 'react'
import "./subscription.css"
import { getRequestGod } from '../../../service'; 
interface Package {
    id: number;
    title: string;
    duration: string;
    actual_price: string;
    type: string;
    price: string;
    tagline: string;
    description: number;
    extra_per_member_rate: number;
    translations: JSON;
    default_member:number;
    order_limit_per_month:number;
    addional_rate_per_order:string;
} 
const Subscription = () => {
    const [subscription, setSubscription] = useState<Package[]>([]);
    const [duration, setDuration] = useState<string>('monthly');

    const getPackages = useCallback(() => {
        getRequestGod('v1/packages/listing')
        .then((res: { data: Package[] }) => {
          setSubscription(res.data);
        })
        .catch((err: unknown) => {
          console.error(err);
        });
    }, []);
  
    useEffect(() => {
      getPackages();
    }, [getPackages]); 

  return (
   <>
            <div className="subcriptionSec">
                <div className="container-fluid">
                        <div className='row text-center'>
                        <h2>Transform Your Business <span className='text-purple'>with Our Subscription Packages</span></h2>
                        <p>Empower Your Store, Expand Your Reach, Increase Your Wealth</p>


                       <form action="">
                       <ul>
                            <li>
                                <label htmlFor="Weekly">
                                    <input id='Weekly' type="radio" value={'weekly'} checked={duration == 'weekly'} onChange={() => setDuration('weekly')}/> Weekly
                                    <span className="switchCTA"></span>
                                </label>
                            </li>
                            <li>
                                <label htmlFor="Monthly">
                                    <input id='Monthly' type="radio" value={'monthly'} onChange={() => setDuration('monthly')} checked={duration == 'monthly'}/> Monthly
                                    <span className="switchCTA"></span>
                                </label>
                            </li>
                            <li>
                                <label htmlFor="Yearly">
                                    <input id='Yearly' type="radio" value={'yearly'} onChange={() => setDuration('yearly')} checked={duration == 'yearly'}/> Yearly
                                    <span className="switchCTA"></span>
                                </label>
                            </li>
                        </ul>
                       </form>
                        </div>


                    <div className="subcriptionOuter">
 

                        {
                            subscription.filter((p) => p.duration == duration).map((item, index) => (
                                <>

                                        <div className="subcriptionInner" key={index}>
                                            <div className="subscriptionBox">
                                                <div className="packageTitle text-center">
                                                    <h4>{
                                                        item.type == '1' ? 'Basic' : (item.type == '2' ? 'Advance' : 'dds')
                                                     }</h4>
                                                     <h4>{item?.title}</h4>
                                                     <p>{item?.tagline}</p>
                                                </div>
                                                <div className="packageIcon">
                                                <i className="mdi mdi-package-variant"></i>
                                                </div>
                                                <div className="packagePrice text-center">
                                                    <h5>$.{item?.actual_price} <del>${item?.price} </del> / {item?.duration}</h5>

                                                </div>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <i className="mdi mdi-checkbox-marked-circle"></i>                                    
                                                        <span>{item?.default_member} {item?.default_member == 1 ? 'Store' : 'Stores'}</span>
                                                    </li>
                                                    <li>
                                                        <i className="mdi mdi-checkbox-marked-circle"></i>                                    
                                                        <span>${item?.extra_per_member_rate} Additional charge/Store</span>
                                                    </li>
                                                    <li>
                                                        <i className="mdi mdi-checkbox-marked-circle"></i>                                    
                                                        <span>{item?.order_limit_per_month} orders/month</span>
                                                    </li>
                                                   
                                                    <li>
                                                        <i className="mdi mdi-checkbox-marked-circle"></i>                                    
                                                        <span>${item?.addional_rate_per_order} Additional charge/order</span>
                                                    </li>
                                                    
                                                </ul>
                                                <div className="packageCta">
                                                   <a href="#" className="btn btn-primary">Subscribe</a>
                                                </div> 
                                            </div>
                                        </div>
                                </>
                            ))
                        } 
                    
                    </div>
                </div>
            </div>
   </>
  )
}

export default Subscription