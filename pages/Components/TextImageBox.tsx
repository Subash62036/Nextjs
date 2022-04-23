 import classNames from "classnames";
import Image from "next/image"
 export default function TextImageBox(props:any){
    const{img,title,content,order1,order2}=props.Data;
    const classnames= order1;
   return(
       <div className="md:grid md:grid-cols-2">
           <div className={'${order2} text p-5 text-sm md:p-10 md:text-lg font-[Poppins] mt-auto mb-auto '}>
              <h1 className="font-bold text-sm md:text-lg uppercase text-center">{title}</h1>
               <p className="text-xs md:text-sm  text-center">{content}</p>
           </div>
           <div className={'classnames p-5 md:p-10 mt-auto mb-auto'}>
              <img src={img} alt="Heroes-image" width="400" height="400" />
           </div>
       </div>
    )
};